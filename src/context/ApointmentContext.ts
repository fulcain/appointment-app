import { createContext } from "react";
import { ApointmentContextTypes } from "../types/ApointmentContextTypes";

const ApointmentContext = createContext<ApointmentContextTypes>({
  currentAccessLevel: "",
  setCurrentAccessLevel: () => {},
  userIsLogin: false,
  setUserIsLogin: () => {},
  handleHeaderLoginButton: () => {},
});

export default ApointmentContext;
