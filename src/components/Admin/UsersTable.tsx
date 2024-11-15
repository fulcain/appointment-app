import { Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { supabase } from "../../utils/supabase";
import { useContext, useEffect } from "react";
import AdminContext from "../../context/AdminContext";

const UsersTable = () => {
  const { appointments } = useContext(AdminContext);

  useEffect(() => {
    (async () => {
      try {
        const user = await supabase.auth.admin.getUserById(
          "7547d835-3f67-434b-bf33-7262f1ea66b2",
        );
        console.log(user);
      } catch (err) {
        throw err;
      }
    })();
  }, []);

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
  ];

  const rows = appointments.map((appointment) => {
    return {
      id: appointment.id ?? "-",
      name: appointment.name ?? "-",
      phoneNumber: appointment.phoneNumber ?? "-",
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

export default UsersTable;
