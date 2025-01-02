import { useState } from "react";
import ApointmentModal from "./AppointmentModal";

import moment from "moment-jalaali";
import AdminContext from "../../context/AdminContext";

import { Button } from "@mui/material";
import AdminAppointmentsTable from "./AdminAppointmentsTable";
import UsersTable from "./UsersTable";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [appointmentDate, setAppointmentDate] = useState(moment(new Date()));

  return (
    <AdminContext.Provider
      value={{
        appointmentDate,
        setAppointmentDate,
      }}
    >
      <div className="container">
        <Button onClick={handleOpen} variant="outlined">
          زمان جدید نوبت
        </Button>
        <ApointmentModal open={open} handleClose={handleClose} />
        <AdminAppointmentsTable />
        <UsersTable />
      </div>
    </AdminContext.Provider>
  );
};

export default AdminPage;
