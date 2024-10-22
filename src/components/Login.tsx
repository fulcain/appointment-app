import Modal from "@mui/material/Modal";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";

import modalStyle from "../helpers/js/modal-styles";
import { useContext, useState } from "react";
import ApointmentContext from "../context/apointmentContext";
import { useNavigate } from "react-router-dom";
import { loginValidation } from "../validations/loginValidation";

const Login = ({ open, handleClose }) => {
  const {
    phoneRef,
    nameRef,
    setCurrentUserName,
    setCurrentUserPhoneNumber,
    setUserIsLogin,
  } = useContext(ApointmentContext);

  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);

  const adminData = {
    phone: "1111",
    userName: "admin",
  };

  const handleLogin = async () => {
    try {
      const isAdmin =
        phoneRef.current.value === adminData.phone &&
        nameRef.current.value === adminData.userName;

      const userData = {
        phone: phoneRef.current.value,
        userName: nameRef.current.value,
      };

      await loginValidation.validate(userData, { abortEarly: false });

      if (isAdmin) {
        navigate("/admin");
      } else {
        navigate("/user");
      }

      setCurrentUserPhoneNumber(phoneRef.current.value);
      setCurrentUserName(nameRef.current.value);

      setUserIsLogin(true);
      handleClose();
    } catch (err) {
      setErrors(err.inner);
      setUserIsLogin(false);
    }
  };

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <div className="flex flex-col gap-2">
          {errors &&
            errors.map((error, index) => (
              <div className="text-red-400" key={index}>
                {error.message}
              </div>
            ))}
        </div>
        <div className="mt-3 flex flex-col justify-center gap-2">
          <input
            id="name-input"
            placeholder="نام"
            ref={nameRef}
            className="border-none bg-zinc-50 py-2 px-4 rounded-sm"
          />
          <input
            id="phonenumber-input"
            placeholder="شماره تلفن"
            ref={phoneRef}
            type="number"
            className="border-none bg-zinc-50 py-2 px-4 rounded-sm"
          />

          <div className="mt-3 flex flex-row justify-center gap-2">
            <Button
              onClick={async () => {
                await handleLogin();
              }}
              className="w-[100px]"
              variant="contained"
            >
              ورود
            </Button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default Login;
