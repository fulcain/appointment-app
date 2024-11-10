import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import DateAndTimePickers from "./DateAndTimePickers";

import modalStyle from "../../helpers/js/modal-styles";
import handleCreateAppointment from "./helpers/handleCreateAppointment";
import { useContext } from "react";
import AdminContext from "../../context/AdminContext";

type ApointmentModalType = {
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
};

const ApointmentModal = ({ open, handleClose }: ApointmentModalType) => {
  const { appointmentTime, appointmentDate, setAppointments } =
    useContext(AdminContext);

  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <DateAndTimePickers />
        <div className="mt-3 flex flex-row justify-center gap-2">
          <Button
            onClick={() =>
              handleCreateAppointment({
                appointmentDate,
                setAppointments,
              })
            }
            className="w-[100px]"
            variant="contained"
          >
            اضافه کردن
          </Button>
          <Button
            className="w-[100px]"
            variant="contained"
            onClick={handleClose}
          >
            بستن
          </Button>
        </div>
      </Box>
    </Modal>
  );
};
export default ApointmentModal;
