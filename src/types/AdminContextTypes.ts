import { Updater } from "use-immer";
import { AppointMentsTypes } from "../components/AppTypes";

export type AdminContextTypes = {
  appointmentDate: moment.Moment;
  setAppointmentDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
  appointments: AppointMentsTypes[];
  setAppointments: Updater<AppointMentsTypes[]>;
};
