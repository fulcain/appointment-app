import { AppointMentsTypes } from "../../AppTypes";

const createAvailableDates = (
  appointmentData: AppointMentsTypes[],
  setArrayOfDates: Function,
) => {
  let arrayOfDatesCopy: string[] = [];

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

export default createAvailableDates;
