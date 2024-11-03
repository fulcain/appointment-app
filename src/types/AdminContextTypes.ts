import { Updater } from "use-immer";
import { AppointMentsTypes } from "../components/AppTypes";

export type AdminContextTypes = {
  appointmentTime: moment.Moment;
  setAppointmentTime: React.Dispatch<React.SetStateAction<moment.Moment>>;
  appointmentDate: moment.Moment;
  setAppointmentDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
  appointments: AppointMentsTypes[];
  setAppointments: Updater<AppointMentsTypes[]>;
};
