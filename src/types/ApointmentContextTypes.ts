export type ApointmentContextTypes = {
  currentAccessLevel: string;
  setCurrentAccessLevel: Function;
  nameRef: React.RefObject<HTMLInputElement>;
  phoneRef: React.RefObject<HTMLInputElement>;
  userIsLogin: boolean;
  setUserIsLogin: Function;
  currentUserName: string | null;
  setCurrentUserName: Function;
  currentUserPhoneNumber: string | null;
  setCurrentUserPhoneNumber: Function;
  handleHeaderLoginButton: React.MouseEventHandler<HTMLButtonElement>;
};
