import handleReserve from "./helpers/handleReserve";
import { Button } from "@mui/material";

type ReserveButtonType = {
  appointmentId: string;
  setAppointments: Function;
  currentUserPhoneNumber: string;
  currentUserName: string;
};

const ReserveButton = ({
  appointmentId,
  setAppointments,
  currentUserName,
  currentUserPhoneNumber,
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
          currentUserName: currentUserName as string,
          currentUserPhoneNumber: currentUserPhoneNumber as string,
        });
      }}
    >
      رزرو
    </Button>
  );
};

export default ReserveButton
