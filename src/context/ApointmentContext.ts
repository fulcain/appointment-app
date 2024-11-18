import { User } from "@supabase/supabase-js";
import { createContext } from "react";

type ApointmentContextTypes = {
  currentAccessLevel: string;
  setCurrentAccessLevel: Function;
  userIsLogin: boolean;
  setUserIsLogin: Function;
  handleHeaderLoginButton: React.MouseEventHandler<HTMLButtonElement>;
  user: User;
  setUser: Function;
};

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
