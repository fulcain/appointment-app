import { createContext } from "react";
import { ApointmentContextTypes } from "../types/ApointmentContextTypes";

const ApointmentContext = createContext<ApointmentContextTypes>({
  currentAccessLevel: "",
  setCurrentAccessLevel: () => {},
  nameRef: {} as React.RefObject<HTMLInputElement>,
  phoneRef: {} as React.RefObject<HTMLInputElement>,
  userIsLogin: false,
  setUserIsLogin: () => {},
  setCurrentUserName: () => {},
  setCurrentUserPhoneNumber: () => {},
  currentUserName: "",
  currentUserPhoneNumber: "",
  handleHeaderLoginButton: () => {},
});

export default ApointmentContext;
