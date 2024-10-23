import Button from "@mui/material/Button";
import handleReserve from "./helpers/handleReserve";
import { AppointMentsTypes } from "../AppTypes";

type AvaiableApointmentsType = {
  appointments: AppointMentsTypes[];
  setAppointments: Function;
  dateApointments: AppointMentsTypes[];
  setDateAppointments: Function;
  appointment: AppointMentsTypes;
  currentUserName: string;
  currentUserPhoneNumber: string;
};

const AvaiableApointments = ({
  appointments,
  setAppointments,
  dateApointments,
  setDateAppointments,
  appointment,
  currentUserName,
  currentUserPhoneNumber,
}: AvaiableApointmentsType) => {
  return (
    <div
      className="flex flex-col w-[200px] bg-gray-400 p-4 rounded gap-4"
      key={appointment.id}
    >
      <span>زمان: {appointment.time}</span>
      <div>
        <span>تاریخ: </span>
        <span dir="ltr">{appointment.date}</span>
      </div>
      <div className="w-full mt-4 flex justify-center items-center">
        <Button
          color="success"
          className="w-[100px]"
          variant="outlined"
          onClick={() => {
            handleReserve({
              appointmentId: appointment.id as string,
              dateApointments,
              setDateAppointments,
              appointments,
              setAppointments,
              currentUserName,
              currentUserPhoneNumber,
            });
          }}
        >
          رزرو
        </Button>
      </div>
    </div>
  );
};

export default AvaiableApointments;
