import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import ApointmentModal from "./Appointment-modal";
import {
	getAllAppointments,
	createAnAppointment,
	deleteAppointment,
	updateAppointment,
} from "../../services/appointments";

const AdminPage = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [appointmentTime, setAppointmentTime] = useState({});
	const [appointmentDate, setAppointmentDate] = useState({});

	const [appointments, setAppointments] = useState([]);

	useEffect(() => {
		(async () => {
			try {
				const { data: appointmentData } = await getAllAppointments();

				setAppointments(appointmentData);
			} catch (err) {
				throw err;
			}
		})();
	}, []);

	const handleCreateAppointment = async () => {
		try {
			const { status, data: newAppointment } = await createAnAppointment({
				name: null,
				time: appointmentTime,
				date: appointmentDate,
				isReserved: false,
			});

			if (status === 201) {
				const allApointments = [...appointments, newAppointment];

				setAppointments(allApointments);
			}
		} catch (err) {
			throw err;
		}
	};

	const handleDeleteAppointment = async (appointmentId) => {
		const allApointments = [...appointments];
		try {
			const newAppointments = allApointments.filter(
				(appointment) => appointment.id != appointmentId
			);

			setAppointments(newAppointments);

			const { status } = await deleteAppointment(appointmentId);

			if (status !== 200) {
				setAppointments(allApointments);
			}
		} catch (err) {
			throw err;
		}
	};
	return (
		<div className="container">
			<Button onClick={handleOpen} variant="outlined">
				زمان جدید نوبت
			</Button>
			<ApointmentModal
				setAppointmentTime={setAppointmentTime}
				setAppointmentDate={setAppointmentDate}
				open={open}
				handleClose={handleClose}
				handleCreateAppointment={handleCreateAppointment}
			/>
			{/* all apointments */}
			<div className="flex flex-col gap-4 mt-4">
				{appointments.map((appointment) => (
					<div
						className="flex flex-col bg-gray-400 p-4 rounded gap-4"
						key={appointment.id}
					>
						<span>توسط: {appointment.name || "رزرو نشده"}</span>
						{/* <span>زمان: {appointment.time}</span> */}
						{/* <span>تاریخ: {appointment.date}</span> */}
						<div>
							<span>وضعیت: </span>
							<span
								style={{
									color: appointment.isReserved
										? "green"
										: "red",
								}}
							>
								{appointment.isReserved
									? "رزرو شده"
									: "رزرو نشده"}
							</span>
						</div>
						<div className="w-full flex justify-center items-center">
							<Button
								color="error"
								className="w-[100px]"
								variant="outlined"
								onClick={() =>
									handleDeleteAppointment(appointment.id)
								}
							>
								حذف زمان
							</Button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AdminPage;
