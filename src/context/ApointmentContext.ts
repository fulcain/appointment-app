import { createContext } from "react";
import { ApointmentContextTypes } from "../types/apointmentContextTypes";

const ApointmentContext = createContext<ApointmentContextTypes>({
  currentAccessLevel: "",
  setCurrentAccessLevel: () => {},
  nameRef: {} as React.MutableRefObject<{}>,
  phoneRef: {} as React.MutableRefObject<{}>,
  userIsLogin: false,
  setUserIsLogin: () => {},
  setCurrentUserName: () => {},
  setCurrentUserPhoneNumber: () => {},
  currentUserName: "",
  currentUserPhoneNumber: "",
  handleHeaderLoginButton: () => {},
});

export default ApointmentContext;
