import { AppointMentsTypes } from "../../AppTypes";

const handleDateAppointments = (
  setDateAppointments: Function,
  appointments: AppointMentsTypes[],
  date: string,
) => {
  setDateAppointments(
    appointments.filter((appointments) => {
      return !appointments.isReserved && appointments.date === date;
    }),
  );
};

export default handleDateAppointments;
