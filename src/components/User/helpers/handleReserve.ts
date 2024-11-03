import { updateAppointment } from "../../../services/appointments";
import { AppointMentsTypes } from "../../AppTypes";
import { toast } from "react-toastify";

type handleReserveTypes = {
  appointmentId: string;
  setAppointments: Function;
  currentUserName: string;
  currentUserPhoneNumber: string;
};

const handleReserve = async ({
  appointmentId,
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
      toast.success("زمان با موفقیت رزرو شد");
      setAppointments((draft: AppointMentsTypes[]) =>
        draft.filter((appointment) => appointment.id !== appointmentId),
      );
    }
  } catch (err) {
    toast.error("مشکلی برای رزرو نوبت پیش آمد");
    console.error(err);
  }
};

export default handleReserve;
