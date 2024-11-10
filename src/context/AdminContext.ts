import moment from "moment-jalaali";
import { createContext } from "react";
import { AdminContextTypes } from "../types/AdminContextTypes";

const AdminContext = createContext<AdminContextTypes>({
  setAppointmentDate: () => {},
  appointments: [],
  setAppointments: () => {},
  appointmentDate: "" as unknown as moment.Moment,
});

export default AdminContext;
