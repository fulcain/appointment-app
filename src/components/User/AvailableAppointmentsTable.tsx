import Button from "@mui/material/Button";
import handleReserve from "./helpers/handleReserve";
import { AppointMentsTypes } from "../AppTypes";
import { useContext } from "react";
import ApointmentContext from "../../context/ApointmentContext";
import Paper from "@mui/material/Paper";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

type AvaiableAppointmentsTableType = {
  setAppointments: Function;
  dateApointments: AppointMentsTypes[];
  setDateAppointments: Function;
};

type ReserveButtonType = {
  appointmentId: string;
  setDateAppointments: Function;
  setAppointments: Function;
  currentUserPhoneNumber: string;
  currentUserName: string;
};

const ReserveButton = ({
  appointmentId,
  setDateAppointments,
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
          setDateAppointments,
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

const AvaiableAppointmentsTable = ({
  dateApointments,
  setDateAppointments,
  setAppointments,
}: AvaiableAppointmentsTableType) => {
  const { currentUserPhoneNumber, currentUserName } =
    useContext(ApointmentContext);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      resizable: false,
      align: "center",
    },
    {
      field: "date",
      headerName: "تاریخ",
      resizable: false,
      align: "center",
    },
    {
      field: "time",
      headerName: "زمان",
      resizable: false,
      align: "center",
    },
    {
      field: "reserveButton",
      headerName: "عملیات",
      align: "center",
      renderCell: (params) => (
        <ReserveButton
          currentUserName={currentUserName as string}
          currentUserPhoneNumber={currentUserPhoneNumber as string}
          appointmentId={params.row.id}
          setDateAppointments={setDateAppointments}
          setAppointments={setAppointments}
        />
      ),
    },
  ];

  const rows = dateApointments.map((appointment) => {
    return {
      id: appointment.id,
      date: appointment.date,
      time: appointment.time,
    };
  });

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10, 50, { value: -1, label: "کل داده ها" }]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
};

export default AvaiableAppointmentsTable;
