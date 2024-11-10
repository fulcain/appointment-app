import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Paper } from "@mui/material";
import DeleteAppointmentButton from "./DeleteAppointmentButton";
import AdminContext from "../../context/AdminContext";
import { useContext } from "react";
import moment from "moment-jalaali";
import persianDays from "../../constants/persianDays";
import getPersianDateAndTime from "../../helpers/js/getPersianDateAndTime";

const AdminAppointmentsTable = () => {
  const { appointments } = useContext(AdminContext);

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      resizable: false,
      align: "center",
    },
    {
      field: "name",
      headerName: "نام",
      resizable: false,
      align: "center",
    },

    {
      field: "phoneNumber",
      headerName: "شماره تلفن",
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
      width: 150,
      renderCell: (params) => (
        <DeleteAppointmentButton appointmentId={params.row.id} />
      ),
    },
  ];

  const rows = appointments.map((appointment) => {
    const [date, time, day] = getPersianDateAndTime(appointment.date);

    return {
      id: appointment.id ?? "-",
      name: appointment.name ?? "-",
      phoneNumber: appointment.phoneNumber ?? "-",
      day: persianDays[day] ?? "-",
      time: time ?? "-",
      date: date ?? "-",
    };
  });

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper className="mt-5" sx={{ height: 400, width: "100%" }}>
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

export default AdminAppointmentsTable;
