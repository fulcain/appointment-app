import { User } from "@supabase/supabase-js";
import { createContext } from "react";
import { ApointmentContextTypes } from "../types/ApointmentContextTypes";

const ApointmentContext = createContext<ApointmentContextTypes>({
  currentAccessLevel: "",
  setCurrentAccessLevel: () => {},
  userIsLogin: false,
  setUserIsLogin: () => {},
  handleHeaderLoginButton: () => {},
  user: {} as unknown as User,
  setUser: () => {},
});

export default ApointmentContext;
