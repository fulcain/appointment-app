import moment from "moment-jalaali";

type handleCreateAppointmentType = {
  appointmentDate: moment.Moment;
};

const handleCreateAppointment = async ({
  appointmentDate,
}: handleCreateAppointmentType) => {
  try {
    // Format the date as a string
    const date = moment(appointmentDate).format();

    // const { status, data: newAppointment } = await createAnAppointment({
    //   // name: null,
    //   // phoneNumber: null,
    //   date, // Pass the formatted string here
    //   isReserved: false,
    // });
    //
    // if (status === 201) {
    //   setAppointments((draft) => {
    //     draft.push(newAppointment);
    //   });
    // }
  } catch (err) {
    throw err;
  }
};

export default handleCreateAppointment;
