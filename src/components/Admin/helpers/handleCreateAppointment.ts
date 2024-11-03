import moment from "moment-jalaali";
import { createAnAppointment } from "../../../services/appointments";
import { AdminContextTypes } from "../../../types/AdminContextTypes";

type handleCreateAppointmentType = {
  appointmentDate: moment.Moment;
  appointmentTime: moment.Moment;
  setAppointments: AdminContextTypes["setAppointments"];
};

const handleCreateAppointment = async ({
  appointmentDate,
  appointmentTime,
  setAppointments,
}: handleCreateAppointmentType) => {
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
      setAppointments((draft) => {
        draft.push(newAppointment);
      });
    }
  } catch (err) {
    throw err;
  }
};

export default handleCreateAppointment;
