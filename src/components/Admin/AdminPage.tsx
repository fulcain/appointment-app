import { useEffect, useState } from "react";
import ApointmentModal from "./Appointment-modal";
import { getAllAppointments } from "../../services/appointments";

import moment from "moment-jalaali";
import PageTitle from "../PageTitle";
import { AppointMentsTypes } from "../AppTypes";
import AdminContext from "../../context/AdminContext";
import { useImmer } from "use-immer";

import { Button } from "@mui/material";
import AdminAppointmentsTable from "./AdminAppointmentsTable";

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

  return (
    <AdminContext.Provider
      value={{
        setAppointmentTime,
        setAppointmentDate,
        appointments,
        setAppointments,
        appointmentDate,
        appointmentTime,
      }}
    >
      <div className="container">
        <PageTitle title={"صفحه ادمین"} />
        <Button onClick={handleOpen} variant="outlined">
          زمان جدید نوبت
        </Button>
        <ApointmentModal open={open} handleClose={handleClose} />
        <AdminAppointmentsTable />
      </div>
    </AdminContext.Provider>
  );
};

export default AdminPage;
