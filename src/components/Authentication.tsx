import Modal from "@mui/material/Modal";
import Box from "@mui/system/Box";

import modalStyle from "../helpers/js/modal-styles";
import { useContext, useEffect, useState } from "react";
import ApointmentContext from "../context/ApointmentContext";
import { useNavigate } from "react-router-dom";

import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../utils/supabase";
import { supabaseFa } from "../constants/supabaseAuthTexts";

type LoginType = {
  open: boolean;
  handleClose: Function;
};

const Authentication = ({ open, handleClose }: LoginType) => {
  const { user, setUser, setUserIsLogin } = useContext(ApointmentContext);
  const navigate = useNavigate();

  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN" && session) {
        const { user } = session;
        const { app_metadata } = user;
        setUser(user);
        setUserIsLogin(true);

        navigate("/user");
        handleClose();
      }
    });

    return () => subscription.unsubscribe();
  }, [user]);

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
          localization={supabaseFa}
          theme="dark"
        />
      </Box>
    </Modal>
  );
};

export default Authentication;
