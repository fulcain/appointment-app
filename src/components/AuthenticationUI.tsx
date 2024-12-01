import Modal from "@mui/material/Modal";
import Box from "@mui/system/Box";

import modalStyle from "../utils/modal-styles";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { supabase } from "../utils/supabase/supabase";
import { supabaseFa } from "../constants/supabaseAuthTexts";
import { Typography } from "@mui/material";
import useRedirectLoggedInUser from "../utils/supabase/hooks/useRedirectLoggedInUser";

type LoginType = {
  open: boolean;
  handleClose: Function;
};

const AuthenticationUI = ({ open }: LoginType) => {
  useRedirectLoggedInUser();

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography variant="h5" textAlign="center" color="primary.main">
          اعتبار سنجی
        </Typography>
        <Auth
          // TODO: Add later
          // providers={["github"]}
          providers={[]}
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          localization={supabaseFa}
          theme="dark"
        />
      </Box>
    </Modal>
  );
};

export default AuthenticationUI;
