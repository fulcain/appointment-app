import { AppointMentsTypes } from "../AppTypes";
import { useContext } from "react";
import ApointmentContext from "../../context/ApointmentContext";

import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Updater } from "use-immer";
import ReserveButton from "./ReserveButton";
import persianDays from "../../constants/persianDays";
import getPersianDateAndTime from "../../helpers/js/getPersianDateAndTime";

type AvaiableAppointmentsTableType = {
  appointments: AppointMentsTypes[];
  setAppointments: Updater<AppointMentsTypes[]>;
};
const AvaiableAppointmentsTable = ({
  appointments,
  setAppointments,
}: AvaiableAppointmentsTableType) => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      resizable: false,
      align: "center",
    },
    {
      field: "day",
      headerName: "روز",
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
      field: "date",
      headerName: "تاریخ",
      resizable: false,
      align: "center",
    },
    {
      field: "reserveButton",
      headerName: "عملیات",
      align: "center",
      renderCell: (params) => (
        <ReserveButton
          appointmentId={params.row.id}
          setAppointments={setAppointments}
        />
      ),
    },
  ];

  const rows = appointments.map((appointment) => {
    const [date, time, day] = getPersianDateAndTime(appointment.date);

    return {
      id: appointment.id ?? "-",
      day: persianDays[day] ?? "-",
      time: time ?? "-",
      date: date ?? "-",
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
