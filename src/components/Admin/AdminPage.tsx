import { useEffect, useState } from "react";
import ApointmentModal from "./Appointment-modal";
import {
  getAllAppointments,
  createAnAppointment,
  deleteAppointment,
} from "../../services/appointments";

import moment from "moment-jalaali";
import PageTitle from "../PageTitle";
import { AppointMentsTypes } from "../AppTypes";
import AdminContext from "../../context/AdminContext";
import { useImmer } from "use-immer";

import { Button, Paper } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { Updater } from "use-immer";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [appointmentTime, setAppointmentTime] = useState(moment(new Date()));
  const [appointmentDate, setAppointmentDate] = useState(moment(new Date()));

  const [appointments, setAppointments] = useImmer<AppointMentsTypes[]>([]);

  // Get all apointments
  useEffect(() => {
    (async () => {
      try {
        const { data: appointmentData } = await getAllAppointments();

        setAppointments(appointmentData);
      } catch (err) {
        throw err;
      }
    })();
  }, []);

  const handleCreateAppointment = async () => {
    try {
      const persianDate = moment(appointmentDate).format("jYYYY-jM-jD");
      const persianTime = moment(appointmentTime).format("HH:mm");

      const { status, data: newAppointment } = await createAnAppointment({
        name: null,
        phoneNumber: null,
        time: persianTime,
        date: persianDate,
        isReserved: false,
      });

      if (status === 201) {
        setAppointments((draft) => {
          draft.push(newAppointment);
        });
      }
    } catch (err) {
      throw err;
    }
  };

  const handleDeleteAppointment = async (appointmentId: string) => {
    const copyOfAppointMents = [...appointments];
    try {
      setAppointments((draft) =>
        draft.filter((appointment) => appointment.id !== appointmentId),
      );

      const { status } = await deleteAppointment(appointmentId);

      if (status !== 200) {
        setAppointments(copyOfAppointMents);
      }
    } catch (err) {
      throw err;
    }
  };

  type DeleteAppointmentButtonType = {
    appointmentId: string;
  };
  const DeleteAppointmentButton = ({
    appointmentId,
  }: DeleteAppointmentButtonType) => (
    <Button
      color="error"
      className="w-[100px]"
      variant="outlined"
      onClick={() => handleDeleteAppointment(appointmentId as string)}
    >
      حذف زمان
    </Button>
  );

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
      width: 150,
      renderCell: (params) => (
        <DeleteAppointmentButton appointmentId={params.row.id} />
      ),
    },
  ];

  const rows = appointments.map((appointment) => {
    console.log(appointment);
    return {
      id: appointment.id ?? "-",
      name: appointment.name ?? "-",
      phoneNumber: appointment.phoneNumber ?? "-",
      date: appointment.date ?? "-",
      time: appointment.time ?? "-",
    };
  });

  const paginationModel = { page: 0, pageSize: 5 };

  return (
    <AdminContext.Provider
      value={{
        setAppointmentTime,
        setAppointmentDate,
      }}
    >
      <div className="container">
        <PageTitle title={"صفحه ادمین"} />
        <Button onClick={handleOpen} variant="outlined">
          زمان جدید نوبت
        </Button>
        <ApointmentModal
          open={open}
          handleClose={handleClose}
          handleCreateAppointment={handleCreateAppointment}
        />
        {/* all apointments */}
        <Paper className="mt-5" sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{ pagination: { paginationModel } }}
            pageSizeOptions={[5, 10, 50, { value: -1, label: "کل داده ها" }]}
            sx={{ border: 0 }}
          />
        </Paper>
      </div>
    </AdminContext.Provider>
  );
};

export default AdminPage;
