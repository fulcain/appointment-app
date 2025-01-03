import { Avatar, Paper, Skeleton } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useGetUsersQuery } from "../../reducers/adminSlice";

const UsersTable = () => {
  const { data: users, isLoading, error } = useGetUsersQuery();

  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "ID",
      resizable: false,
      align: "center",
      width: 200,
    },
    {
      field: "avatar_url",
      headerName: "عکس",
      resizable: false,
      align: "center",
      width: 220,
      hideSortIcons: true,
      display: "flex",
      renderCell: (params) => (
        <Avatar
          sx={{
            height: 50,
            width: 50,
          }}
          src={params.value}
          key={params.row.id}
          alt={params.row.id}
        />
      ),
    },
    {
      field: "email",
      headerName: "ایمیل",
      resizable: false,
      align: "center",
      width: 220,
    },
    {
      field: "phone",
      headerName: "شماره",
      resizable: false,
      align: "center",
      width: 220,
    },
  ];

  const rows = users?.map((user) => {
    return {
      id: user.id ?? "-",
      email: user.email ?? "-",
      // phone: user.phone ?? "-",
      // avatar_url: user.user_metadata.avatar_url ?? "",
    };
  });

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <div className="container">
      <Paper className="mt-5" sx={{ height: 400, width: "100%" }}>
        {isLoading && Boolean(!users) ? (
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
            rowHeight={70}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10, 50, { value: -1, label: "کل داده ها" }]}
            sx={{ border: 0 }}
          />
        )}
      </Paper>
    </div>
  );
};

export default UsersTable;
