export type ApointmentContextTypes = {
  currentAccessLevel: string;
  setCurrentAccessLevel: Function;
  userIsLogin: boolean;
  setUserIsLogin: Function;
  handleHeaderLoginButton: React.MouseEventHandler<HTMLButtonElement>;
};
