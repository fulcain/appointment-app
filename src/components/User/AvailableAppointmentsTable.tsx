import { Paper, Skeleton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import ReserveButton from "./ReserveButton";
import persianDays from "../../constants/persianDays";
import getPersianDateAndTime from "../../utils/getPersianDateAndTime";
import { AppointmentsDBType } from "../../../database.types";

type AvaiableAppointmentsTableType = {
  appointments: AppointmentsDBType[] | null | undefined;
  isLoading: boolean;
};

const AvaiableAppointmentsTable = ({
  appointments,
  isLoading,
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
    // {
    //   field: "reserveButton",
    //   headerName: "عملیات",
    //   align: "center",
    //   renderCell: (params) => (
    //     <ReserveButton
    //       appointmentId={params.row.id}
    //       setAppointments={setAppointments}
    //     />
    //   ),
    // },
  ];

  const rows =
    appointments?.map((appointment) => {
      const [date, time, day] = getPersianDateAndTime(appointment.created_at);

      return {
        id: appointment.id ?? "-",
        day: persianDays[day] ?? "-",
        time: time ?? "-",
        date: date ?? "-",
      };
    }) ?? [];

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      {isLoading && !Boolean(appointments) ? (
        <Skeleton
          animation="wave"
          variant="rectangular"
          width="100%"
          height={400}
        />
      ) : (
        <DataGrid
          rows={rows}
          columns={columns}
          initialState={{ pagination: { paginationModel } }}
          pageSizeOptions={[5, 10, 50, { value: -1, label: "کل داده ها" }]}
          sx={{ border: 0 }}
        />
      )}
    </Paper>
  );
};

export default AvaiableAppointmentsTable;
