import Button from "@mui/material/Button";
import { useContext } from "react";
import ApointmentContext from "../context/apointmentContext";

const Header = () => {
  const { userIsLogin, handleHeaderLoginButton } =
    useContext(ApointmentContext);

  return (
    <header className="w-[90vw] max-w-[1200px] mx-auto grid grid-cols-3 text-center mt-10">
      <h1 className="col-start-2 text-4xl text-white font-medium">نوبت دهی</h1>
      <div className="flex flex-row gap-2 place-self-end">
        <Button onClick={handleHeaderLoginButton} variant="outlined">
          {userIsLogin ? "خروج" : "ورود"}
        </Button>
      </div>
    </header>
  );
};

export default Header;
