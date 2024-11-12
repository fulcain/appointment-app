import axios from "axios";
import { AppointMentsTypes } from "../components/AppTypes";

const SERVER_URL = "http://localhost:9000";

export const getAllAppointments = () => {
  const url = `${SERVER_URL}/appointments`;
  return axios.get(url);
};

export const createAnAppointment = (appointment: AppointMentsTypes) => {
  const url = `${SERVER_URL}/appointments`;
  return axios.post(url, appointment);
};

type updateAppointmentType = {
  isReserved: boolean;
};

export const updateAppointment = (
  appointment: updateAppointmentType,
  appointmentId: string,
) => {
  const url = `${SERVER_URL}/appointments/${appointmentId}`;
  return axios.patch(url, appointment);
};

export const deleteAppointment = (appointmentId: string) => {
  const url = `${SERVER_URL}/appointments/${appointmentId}`;
  return axios.delete(url);
};
