export type ApointmentContextTypes = {
  currentAccessLevel: string;
  setCurrentAccessLevel: Function;
  nameRef: React.MutableRefObject<{}>;
  phoneRef: React.MutableRefObject<{}>;
  userIsLogin: boolean;
  setUserIsLogin: Function;
  currentUserName: string | null;
  setCurrentUserName: Function;
  currentUserPhoneNumber: string | null;
  setCurrentUserPhoneNumber: Function;
  handleHeaderLoginButton: Function;
};
