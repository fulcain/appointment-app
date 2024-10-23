export type ApointmentContextTypes = {
  currentAccessLevel: string;
  setCurrentAccessLevel: Function;
  // nameRef: React.RefObject<HTMLInputElement>; // for knowing the ref type
  userIsLogin: boolean;
  setUserIsLogin: Function;
  currentUserName: string | null;
  setCurrentUserName: Function;
  currentUserPhoneNumber: string | null;
  setCurrentUserPhoneNumber: Function;
  handleHeaderLoginButton: React.MouseEventHandler<HTMLButtonElement>;
};
