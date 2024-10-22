const handleDateAppointments = (setDateAppointments, appointments, date) => {
	let currentDateAppointments = [];

	currentDateAppointments = appointments.filter((appointments) => {
		return !appointments.isReserved && appointments.date === date;
	});

	setDateAppointments(currentDateAppointments);
};

export default handleDateAppointments;
