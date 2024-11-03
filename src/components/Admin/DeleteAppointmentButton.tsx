import { Button } from "@mui/material";
import handleDeleteAppointment from "./helpers/handleDeleteAppointment";
import AdminContext from "../../context/AdminContext";
import { useContext } from "react";

type DeleteAppointmentButtonType = {
  appointmentId: string;
};

const DeleteAppointmentButton = ({
  appointmentId,
}: DeleteAppointmentButtonType) => {
  const { appointments, setAppointments } = useContext(AdminContext);

  return (
    <Button
      color="error"
      className="w-[100px]"
      variant="outlined"
      onClick={() =>
        handleDeleteAppointment({
          appointmentId,
          appointments,
          setAppointments,
        })
      }
    >
      حذف زمان
    </Button>
  );
};

export default DeleteAppointmentButton;
