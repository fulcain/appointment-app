import { useEffect, useState } from "react";
import ApointmentModal from "./AppointmentModal";
import { getAllAppointments } from "../../services/appointments";

import moment from "moment-jalaali";
import AdminContext from "../../context/AdminContext";
import { useImmer } from "use-immer";

import { Button } from "@mui/material";
import AdminAppointmentsTable from "./AdminAppointmentsTable";
import UsersTable from "./UsersTable";
import { User } from "@supabase/supabase-js";
import { AppointmentsDBType } from "../../../database.types";
import { useGetAppointmentsQuery } from "../../api/apiSlice";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data: appointments, error, isLoading } = useGetAppointmentsQuery();

  const [appointmentDate, setAppointmentDate] = useState(moment(new Date()));
  const [users, setUsers] = useState([] as User[]);

  return (
    <AdminContext.Provider
      value={{
        appointmentDate,
        setAppointmentDate,
        appointments,
        users,
        setUsers,
      }}
    >
      <div className="container">
        <Button onClick={handleOpen} variant="outlined">
          زمان جدید نوبت
        </Button>
        <ApointmentModal open={open} handleClose={handleClose} />
        <AdminAppointmentsTable isLoading={isLoading} />
        <UsersTable />
      </div>
    </AdminContext.Provider>
  );
};

export default AdminPage;
