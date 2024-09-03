const createAvaiableDates = (appointmentData, setArrayOfDates) => {
	let arrayOfDatesCopy = [];

	appointmentData.forEach((appointment) => {
		const appointmentDate = appointment.date;
		const isReserved = appointment.isReserved;

		const dateHasAvailableAppointments =
			!isReserved && !arrayOfDatesCopy.includes(appointmentDate);

		if (dateHasAvailableAppointments) {
			arrayOfDatesCopy.push(appointmentDate);
		}
	});

	setArrayOfDates(arrayOfDatesCopy);
};

export default createAvaiableDates;
