import { updateAppointment } from "../../../services/appointments";

const handleReserve = async (
	appointmentId,
	dateApointments,
	setDateAppointments,
	appointments,
	setAppointments,
	currentUserName,
	currentUserPhoneNumber
) => {
	try {
		const { status } = await updateAppointment(
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

			const newAppointments = appointments.filter(
				(appointment) => appointment.id !== appointmentId
			);

			setDateAppointments(newDateAppointments);
			setAppointments(newAppointments);
		}
	} catch (err) {
		console.error(err);
	}
};

export default handleReserve;
