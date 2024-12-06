import { updateAppointment } from "../../../services/appointments";
import { toast } from "react-toastify";
import { AppointmentsDBType } from "../../../../database.types";

type handleReserveTypes = {
  appointmentId: string;
  setAppointments: Function;
};

const handleReserve = async ({
  appointmentId,
  setAppointments,
}: handleReserveTypes) => {
  try {
    const { status } = await updateAppointment(
      {
        isReserved: true,
      },
      appointmentId,
    );

    if (status === 200) {
      toast.success("زمان با موفقیت رزرو شد");
      setAppointments((draft: AppointmentsDBType[]) =>
        draft.filter((appointment) => String(appointment.id) !== appointmentId),
      );
    }
  } catch (err) {
    toast.error("مشکلی برای رزرو نوبت پیش آمد");
    console.error(err);
  }
};

export default handleReserve;
