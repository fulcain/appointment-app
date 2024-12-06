import { Updater } from "use-immer";
import { AppointmentsDBType } from "../../../../database.types";
import { deleteAppointment } from "../../../services/appointments";

type handleDeleteAppointmentType = {
  appointmentId: string;
  setAppointments: Updater<AppointmentsDBType[]>;
  appointments: AppointmentsDBType[];
};

const handleDeleteAppointment = async ({
  appointmentId,
  setAppointments,
  appointments,
}: handleDeleteAppointmentType) => {
  const copyOfAppointments = [...appointments];
  try {
    setAppointments((draft) =>
      draft.filter((appointment) => String(appointment.id) !== appointmentId),
    );

    const { status } = await deleteAppointment(appointmentId);

    if (status !== 200) {
      setAppointments(copyOfAppointments);
    }
  } catch (err) {
    throw err;
  }
};

export default handleDeleteAppointment;
