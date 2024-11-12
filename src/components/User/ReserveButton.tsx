import handleReserve from "./helpers/handleReserve";
import { Button } from "@mui/material";

type ReserveButtonType = {
  appointmentId: string;
  setAppointments: Function;
};

const ReserveButton = ({
  appointmentId,
  setAppointments,
}: ReserveButtonType) => {
  return (
    <Button
      color="success"
      className="w-full"
      variant="outlined"
      onClick={() => {
        handleReserve({
          appointmentId,
          setAppointments,
        });
      }}
    >
      رزرو
    </Button>
  );
};

export default ReserveButton;
