import { AppointMentsTypes } from "../../AppTypes";

const handleDateAppointments = (
  setDateAppointments: Function,
  appointments: AppointMentsTypes[],
  date: string,
) => {
  let currentDateAppointments = [];

  currentDateAppointments = appointments.filter((appointments) => {
    return !appointments.isReserved && appointments.date === date;
  });

  setDateAppointments(currentDateAppointments);
};

export default handleDateAppointments;
