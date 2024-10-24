import { updateAppointment } from "../../../services/appointments";
import { AppointMentsTypes } from "../../AppTypes";

type handleReserveTypes = {
  appointmentId: string;
  setAppointments: Function;
  setDateAppointments: Function;
  currentUserName: string;
  currentUserPhoneNumber: string;
};

const handleReserve = async ({
  appointmentId,
  setDateAppointments,
  setAppointments,
  currentUserName,
  currentUserPhoneNumber,
}: handleReserveTypes) => {
  try {
    const { status } = await updateAppointment(
      {
        name: currentUserName,
        phoneNumber: currentUserPhoneNumber,
        isReserved: true,
      },
      appointmentId,
    );

    if (status === 200) {
      setDateAppointments((draft: AppointMentsTypes[]) =>
        draft.filter((appointment) => appointment.id !== appointmentId),
      );

      setAppointments((draft: AppointMentsTypes[]) =>
        draft.filter((appointment) => appointment.id !== appointmentId),
      );
    }
  } catch (err) {
    console.error(err);
  }
};

export default handleReserve;
