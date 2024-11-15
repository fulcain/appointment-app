import { useEffect, useState } from "react";
import ApointmentModal from "./AppointmentModal";
import { getAllAppointments } from "../../services/appointments";

import moment from "moment-jalaali";
import { AppointMentsTypes } from "../AppTypes";
import AdminContext from "../../context/AdminContext";
import { useImmer } from "use-immer";

import { Button } from "@mui/material";
import AdminAppointmentsTable from "./AdminAppointmentsTable";
import UsersTable from "./UsersTable";

const AdminPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

  return (
    <AdminContext.Provider
      value={{
        setAppointmentDate,
        appointments,
        setAppointments,
        appointmentDate,
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
