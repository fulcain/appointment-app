import { Updater } from "use-immer";
import { deleteAppointment } from "../../../services/appointments";
import { AppointMentsTypes } from "../../AppTypes";

type handleDeleteAppointmentType = {
  appointmentId: string;
  setAppointments: Updater<AppointMentsTypes[]>;
  appointments: AppointMentsTypes[];
};

const handleDeleteAppointment = async ({
  appointmentId,
  setAppointments,
  appointments,
}: handleDeleteAppointmentType) => {
  const copyOfAppointMents = [...appointments];
  try {
    setAppointments((draft) =>
      draft.filter((appointment) => appointment.id !== appointmentId),
    );

    const { status } = await deleteAppointment(appointmentId);

    if (status !== 200) {
      setAppointments(copyOfAppointMents);
    }
  } catch (err) {
    throw err;
  }
};

export default handleDeleteAppointment;
