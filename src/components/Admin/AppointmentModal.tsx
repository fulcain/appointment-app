import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import DateAndTimePickers from "./DateAndTimePickers";

import modalStyle from "../../utils/modal-styles";
import handleCreateAppointment from "./helpers/handleCreateAppointment";
import { useContext } from "react";
import AdminContext from "../../context/AdminContext";
import { useGetAppointmentsQuery } from "../../reducers/adminSlice";

type ApointmentModalType = {
  open: boolean;
  handleClose: React.MouseEventHandler<HTMLButtonElement>;
};

const ApointmentModal = ({ open, handleClose }: ApointmentModalType) => {
  const { appointmentDate } = useContext(AdminContext);
  const { data: appointments, error, isLoading } = useGetAppointmentsQuery();

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
