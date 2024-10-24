import Button from "@mui/material/Button";
import handleReserve from "./helpers/handleReserve";
import { AppointMentsTypes } from "../AppTypes";
import { useContext } from "react";
import ApointmentContext from "../../context/ApointmentContext";

type AvaiableApointmentsType = {
  setAppointments: Function;
  setDateAppointments: Function;
  appointment: AppointMentsTypes;
};

const AvaiableApointments = ({
  setAppointments,
  setDateAppointments,
  appointment,
}: AvaiableApointmentsType) => {
  const { currentUserPhoneNumber, currentUserName } =
    useContext(ApointmentContext);

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
              setDateAppointments,
              setAppointments,
              currentUserName: currentUserName as string,
              currentUserPhoneNumber: currentUserPhoneNumber as string,
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
