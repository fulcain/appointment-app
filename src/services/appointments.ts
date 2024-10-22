import axios from "axios";
const SERVER_URL = "http://localhost:9000";

export const getAllAppointments = () => {
	const url = `${SERVER_URL}/appointments`;
	return axios.get(url);
};

export const createAnAppointment = (appointment) => {
	const url = `${SERVER_URL}/appointments`;
	return axios.post(url, appointment);
};

export const updateAppointment = (appointment, appointmentId) => {
	const url = `${SERVER_URL}/appointments/${appointmentId}`;
	return axios.patch(url, appointment);
};


export const deleteAppointment = (appointmentId) => {
	const url = `${SERVER_URL}/appointments/${appointmentId}`;
	return axios.delete(url);
};
