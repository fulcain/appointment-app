import moment from "moment-jalaali";
import { createContext } from "react";
import { AppointmentsDBType } from "../../database.types";

export type AdminContextTypes = {
  appointmentDate: moment.Moment;
  setAppointmentDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
  appointments: AppointmentsDBType[] | null | undefined;
};

const AdminContext = createContext<AdminContextTypes>({
  setAppointmentDate: () => {},
  appointmentDate: "" as unknown as moment.Moment,
  appointments: [] as AppointmentsDBType[],
});

export default AdminContext;
