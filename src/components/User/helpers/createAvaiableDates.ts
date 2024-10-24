import { AppointMentsTypes } from "../../AppTypes";

const createAvailableDates = (
  appointmentData: AppointMentsTypes[],
  setArrayOfDates: Function,
) => {
  appointmentData.forEach((appointment) => {
    const appointmentDate = appointment.date;
    const isReserved = appointment.isReserved;

    setArrayOfDates((draft: string[]) => {
      const dateHasAvailableAppointments =
        !isReserved && !draft.includes(appointmentDate);

      if (dateHasAvailableAppointments) {
        draft.push(appointmentDate);
      }
      return;
    });
  });
};

export default createAvailableDates;
