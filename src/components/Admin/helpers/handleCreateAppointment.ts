import moment from "moment-jalaali";
import { createAnAppointment } from "../../../services/appointments";
import { AdminContextTypes } from "../../../context/AdminContext";

type handleCreateAppointmentType = {
  appointmentDate: moment.Moment;
  setAppointments: AdminContextTypes["setAppointments"];
};

const handleCreateAppointment = async ({
  appointmentDate,
  setAppointments,
}: handleCreateAppointmentType) => {
  try {
    const date = moment(appointmentDate);

    const { status, data: newAppointment } = await createAnAppointment({
      name: null,
      phoneNumber: null,
      date,
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
