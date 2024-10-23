import { createContext } from "react";
import { AdminContextTypes } from "../types/AdminContextTypes";

const AdminContext = createContext<AdminContextTypes>({
  setAppointmentTime: () => {},
  setAppointmentDate: () => {},
});

export default AdminContext;
