import { User } from "@supabase/supabase-js";
import moment from "moment-jalaali";
import { createContext } from "react";
import { Updater } from "use-immer";
import { AppointMentsTypes } from "../components/AppTypes";

export type AdminContextTypes = {
  appointmentDate: moment.Moment;
  setAppointmentDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
  appointments: AppointMentsTypes[];
  setAppointments: Updater<AppointMentsTypes[]>;
  users: User[];
  setUsers: Function;
};

const AdminContext = createContext<AdminContextTypes>({
  setAppointmentDate: () => {},
  appointments: [],
  setAppointments: () => {},
  appointmentDate: "" as unknown as moment.Moment,
  users: [],
  setUsers: () => {},
});

export default AdminContext;
