import { createContext } from "react";

const ApointmentContext = createContext({
  currentAccessLevel: "",
  setCurrentAccessLevel: () => {},
  nameRef: "",
  phoneRef: "",
  userIsLogin: false,
  setUserIsLogin: () => {},
  setCurrentUserName: () => {},
  setCurrentUserPhoneNumber: () => {},
  currentUserName: "",
  currentUserPhoneNumber: "",
  handleHeaderLoginButton: () => {},
});

export default ApointmentContext;
