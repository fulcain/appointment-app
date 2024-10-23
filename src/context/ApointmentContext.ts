import { createContext } from "react";
import { ApointmentContextTypes } from "../types/ApointmentContextTypes";

const ApointmentContext = createContext<ApointmentContextTypes>({
  currentAccessLevel: "",
  setCurrentAccessLevel: () => {},
  userIsLogin: false,
  setUserIsLogin: () => {},
  setCurrentUserName: () => {},
  setCurrentUserPhoneNumber: () => {},
  currentUserName: "",
  currentUserPhoneNumber: "",
  handleHeaderLoginButton: () => {},
});

export default ApointmentContext;
