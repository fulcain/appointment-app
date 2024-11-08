import moment from "moment-jalaali";
import { createContext } from "react";
import { AdminContextTypes } from "../types/AdminContextTypes";

const AdminContext = createContext<AdminContextTypes>({
  setAppointmentTime: () => {},
  setAppointmentDate: () => {},
  appointments: [],
  setAppointments: () => {},
  appointmentTime: "" as unknown as moment.Moment,
  appointmentDate: "" as unknown as moment.Moment,
});

export default AdminContext;
