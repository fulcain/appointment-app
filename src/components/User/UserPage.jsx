import { useEffect, useState } from "react";
import {
	getAllAppointments,
	updateAppointment,
} from "../../services/appointments";
import Button from "@mui/material/Button";

const UserPage = ({ currentUserPhoneNumber, currentUserName }) => {

	const [appointments, setAppointments] = useState([]);
	const [arrayOfDates, setArrayOfDates] = useState([]);
	const [dateApointments, setDateAppointments] = useState([]);

	// Get all apointments
	useEffect(() => {
		(async () => {
			try {
				const { data: appointmentData } = await getAllAppointments();

				setAppointments(appointmentData);

				let arrayOfDatesCopy = [...arrayOfDates];

				appointmentData.forEach((appointment) => {
					const appointmentDate = appointment.date;

					if (!arrayOfDatesCopy.includes(appointmentDate)) {
						arrayOfDatesCopy = [
							...arrayOfDatesCopy,
							appointmentDate,
						];
						setArrayOfDates(arrayOfDatesCopy);
					}
				});
			} catch (err) {
				throw err;
			}
		})();
	}, []);

	const handleDateAppointments = (date) => {
		let currentDateAppointments = [];

		currentDateAppointments = appointments.filter(
			(appointments) => appointments.date === date
		);

		setDateAppointments(currentDateAppointments);
	};

	const handleReserve = async (appointmentId) => {
		try {
			const { status } = await updateAppointment(
				{
					name: currentUserName,
					phoneNumber: currentUserPhoneNumber,
					isReserved: true,
				},
				appointmentId
			);

			if (status === 201) {
				const copyOfAppointments = [...appointments];
				setAppointments(copyOfAppointments);
			}
		} catch (err) {
			throw err;
		}
	};

	return (
		<div className="container">
			<div className="flex flex-row flex-wrap gap-4 mt-8">
				{arrayOfDates.map((date, id) => (
					<div
						key={id}
						onClick={() => {
							handleDateAppointments(date);
						}}
						className="hover:cursor-pointer rounded w-max p-4 border-solid bg-white"
					>
						{date}
					</div>
				))}
			</div>
			<main>
				<section className="flex gap-10 flex-col mt-10">
					<h2 className="text-white text-3xl">زمان های قابل رزرو</h2>
					{dateApointments.map((appointment) =>
						appointment.isReserved ? null : (
							<div
								className="flex flex-col bg-gray-400 p-4 rounded gap-4"
								key={appointment.id}
							>
								<span>زمان: {appointment.time}</span>
								<div>
									<span>تاریخ: </span>
									<span dir="ltr">{appointment.date}</span>
								</div>
								<div className="w-full flex justify-center items-center">
									<Button
										color="success"
										className="w-[100px]"
										variant="outlined"
										onClick={() => {
											handleReserve(appointment.id);
										}}
									>
										رزرو
									</Button>
								</div>
							</div>
						)
					)}
				</section>
			</main>
		</div>
	);
};

export default UserPage;
