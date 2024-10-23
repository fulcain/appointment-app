import handleDateAppointments from "./helpers/handleDateAppointments";
import { AppointMentsTypes } from "../AppTypes";

type AvailAbleDatesType = {
  appointments: AppointMentsTypes[];
  setDateAppointments: Function;
  date: string;
};
const AvaialableDates = ({
  appointments,
  setDateAppointments,
  date,
}: AvailAbleDatesType) => {
  return (
    <>
      <div
        onClick={() => {
          handleDateAppointments(setDateAppointments, appointments, date);
        }}
        className="hover:cursor-pointer rounded w-max p-4 border-solid bg-white"
      >
        {date}
      </div>
    </>
  );
};

export default AvaialableDates;
