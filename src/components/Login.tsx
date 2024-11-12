import Modal from "@mui/material/Modal";
import Box from "@mui/system/Box";
import Button from "@mui/material/Button";

import modalStyle from "../helpers/js/modal-styles";
import { useContext, useEffect, useState } from "react";
import ApointmentContext from "../context/ApointmentContext";
import { useNavigate } from "react-router-dom";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { loginValidation } from "../validations/loginValidation";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../utils/supabase";
import { Session } from "inspector";

type LoginType = {
  open: boolean;
  handleClose: Function;
};

type LoginFieldTypes = {
  phone: string;
  userName: string;
};

const Login = ({ open, handleClose }: LoginType) => {
  const { setUserIsLogin } = useContext(ApointmentContext);

  const navigate = useNavigate();

  const adminData = {
    phone: "1111",
    userName: "admin",
  };

  const handleLogin = async (values: LoginFieldTypes) => {
    try {
      const isAdmin =
        String(values.phone) === adminData.phone &&
        values.userName === adminData.userName;

      if (isAdmin) {
        navigate("/admin");
      } else {
        navigate("/user");
      }

      setUserIsLogin(true);
      handleClose();
    } catch (err: any) {
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
        <Auth
          providers={["github"]}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
        />

        {/* <Formik */}
        {/*   initialValues={{ */}
        {/*     phone: "", */}
        {/*     userName: "", */}
        {/*   }} */}
        {/*   validationSchema={loginValidation} */}
        {/*   onSubmit={async (values) => { */}
        {/*     await handleLogin(values); */}
        {/*   }} */}
        {/* > */}
        {/*   <Form className="mt-3 flex flex-col justify-center gap-2"> */}
        {/*     <Field */}
        {/*       id="name-input" */}
        {/*       name="userName" */}
        {/*       placeholder="نام" */}
        {/*       className="border-none bg-zinc-50 py-2 px-4 rounded-sm" */}
        {/*     /> */}
        {/*     <ErrorMessage */}
        {/*       render={(msg) => <div className="my-2 text-red-400">{msg}</div>} */}
        {/*       name="userName" */}
        {/*     ></ErrorMessage> */}
        {/*     <Field */}
        {/*       id="phonenumber-input" */}
        {/*       placeholder="شماره تلفن" */}
        {/*       type="number" */}
        {/*       name="phone" */}
        {/*       className="border-none bg-zinc-50 py-2 px-4 rounded-sm" */}
        {/*     /> */}
        {/*     <ErrorMessage */}
        {/*       render={(msg) => <div className="my-2 text-red-400">{msg}</div>} */}
        {/*       name="phone" */}
        {/*     ></ErrorMessage> */}
        {/*     <div className="mt-3 flex flex-row justify-center gap-2"> */}
        {/*       <Button type="submit" className="w-[100px]" variant="contained"> */}
        {/*         ورود */}
        {/*       </Button> */}
        {/*     </div> */}
        {/*   </Form> */}
        {/* </Formik> */}
      </Box>
    </Modal>
  );
};

export default Login;
