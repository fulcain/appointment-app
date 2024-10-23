import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import DateAndTimePickers from "./DateAndTimePickers";

import modalStyle from "../../helpers/js/modal-styles";
import moment from "moment-jalaali";

type ApointmentModalType = {
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
  setAppointmentTime: React.Dispatch<React.SetStateAction<moment.Moment>>;
  setAppointmentDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
  handleCreateAppointment: React.MouseEventHandler<HTMLButtonElement>;
};

const ApointmentModal = ({
  open,
  handleClose,
  setAppointmentDate,
  setAppointmentTime,
  handleCreateAppointment,
}: ApointmentModalType) => {
  return (
    <Modal
      open={open}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <DateAndTimePickers
          setAppointmentTime={setAppointmentTime}
          setAppointmentDate={setAppointmentDate}
        />
        <div className="mt-3 flex flex-row justify-center gap-2">
          <Button
            onClick={handleCreateAppointment}
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
