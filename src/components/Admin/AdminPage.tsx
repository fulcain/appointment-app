import { useState } from "react";
import ApointmentModal from "./AppointmentModal";

import moment from "moment-jalaali";
import AdminContext from "../../context/AdminContext";

import { Button } from "@mui/material";
import AdminAppointmentsTable from "./AdminAppointmentsTable";
import UsersTable from "./UsersTable";
import { User } from "@supabase/supabase-js";
import { useGetAppointmentsQuery } from "../../reducers/adminSlice";

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
