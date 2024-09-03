import { useEffect, useState } from "react";
import {
	getAllAppointments,
	updateAppointment,
} from "../../services/appointments";
import AvaiableApointments from "./AvaialableApointments";
import AvaialableDates from "./AvaialAbleDates";

const UserPage = ({ currentUserPhoneNumber, currentUserName, userIsLogin }) => {
	const [appointments, setAppointments] = useState([]);
	const [arrayOfDates, setArrayOfDates] = useState([]);
	const [dateApointments, setDateAppointments] = useState([]);

	// Get all appointments
	useEffect(() => {
		(async () => {
			try {
				const { data: appointmentData } = await getAllAppointments();

				setAppointments(appointmentData);

				let arrayOfDatesCopy = [];

				appointmentData.forEach((appointment) => {
					const appointmentDate = appointment.date;
					const isReserved = appointment.isReserved;

					const dateHasAvailableAppointments =
						!isReserved &&
						!arrayOfDatesCopy.includes(appointmentDate);

					if (dateHasAvailableAppointments) {
						arrayOfDatesCopy.push(appointmentDate);
					}
				});

				setArrayOfDates(arrayOfDatesCopy);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);

	const handleDateAppointments = (date) => {
		let currentDateAppointments = [];

		currentDateAppointments = appointments.filter((appointments) => {
			return !appointments.isReserved && appointments.date === date;
		});

		setDateAppointments(currentDateAppointments);
	};

	const handleReserve = async (appointmentId) => {
		try {
			const { data, status } = await updateAppointment(
				{
					name: currentUserName,
					phoneNumber: currentUserPhoneNumber,
					isReserved: true,
				},
				appointmentId
			);

			if (status === 200) {
				const newDateAppointments = dateApointments.filter(
					(appointment) => appointment.id !== appointmentId
				);

				setDateAppointments(newDateAppointments);
			}
		} catch (err) {
			console.error(err);
		}
	};

	return (
		<div className="container">
			{userIsLogin ? (
				<>
					<div className="flex flex-col flex-wrap gap-4 mt-8">
						<h2 className="text-white text-3xl">
							زمان های قابل رزرو
						</h2>
						{arrayOfDates.length ? (
							arrayOfDates.map((date, id) => (
								<AvaialableDates
									handleDateAppointments={
										handleDateAppointments
									}
									date={date}
									key={id}
								/>
							))
						) : (
							<div className="text-white text-4xl text-center mt-48 flex justify-center items-center">
								زمانی برای رزرو وجود ندارد
							</div>
						)}
					</div>
					<main>
						<section className="flex gap-10 flex-row flex-wrap mt-10">
							{dateApointments.map((appointment) => (
								<AvaiableApointments
									key={appointment.id}
									handleReserve={handleReserve}
									appointment={appointment}
								/>
							))}
						</section>
					</main>
				</>
			) : (
				<div className="text-white text-4xl text-center mt-48 flex justify-center items-center">
					<span> ابتدا اطلاعات خود را وارد کنید</span>
				</div>
			)}
		</div>
	);
};

export default UserPage;
