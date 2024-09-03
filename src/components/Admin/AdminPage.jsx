import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import ApointmentModal from "./Appointment-modal";
import {
	getAllAppointments,
	createAnAppointment,
	deleteAppointment,
} from "../../services/appointments";

import moment from "moment-jalaali";
import PageTitle from "../PageTitle";

const AdminPage = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const [appointmentTime, setAppointmentTime] = useState(moment(new Date()));
	const [appointmentDate, setAppointmentDate] = useState(moment(new Date()));

	const [appointments, setAppointments] = useState([]);

	// Get all apointments
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
			const persianDate = moment(appointmentDate).format("jYYYY-jM-jD");
			const persianTime = moment(appointmentTime).format("HH:mm");

			const { status, data: newAppointment } = await createAnAppointment({
				name: null,
				phoneNumber: null,
				time: persianTime,
				date: persianDate,
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
				(appointment) => appointment.id !== appointmentId
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
			<PageTitle title={'صفحه ادمین'}/>
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
			<div className="flex flex-row flex-wrap gap-4 mt-4">
				{appointments.map((appointment) => (
					<div
						className="flex flex-col bg-gray-400 p-4 rounded gap-4 w-[280px]"
						key={appointment.id}
					>
						<span>توسط: {appointment.name || "-"}</span>
						<span>شماره تلفن: {appointment.phoneNumber || "-"}</span>
						<span>زمان: {appointment.time}</span>
						<div>
							<span>تاریخ: </span>
							<span dir="ltr">{appointment.date}</span>
						</div>
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
