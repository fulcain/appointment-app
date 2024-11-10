import { useContext, useEffect } from "react";
import ApointmentContext from "../../context/ApointmentContext";
import { getAllAppointments } from "../../services/appointments";
import AvaiableAppointmentsTable from "./AvailableAppointmentsTable";
import { AppointMentsTypes } from "../AppTypes";
import { useImmer } from "use-immer";

const UserPage = () => {
  const { userIsLogin } = useContext(ApointmentContext);

  const [appointments, setAppointments] = useImmer<AppointMentsTypes[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const { data: appointmentData } = await getAllAppointments();

        setAppointments(appointmentData);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="container">
      {userIsLogin ? (
        <>
          <main>
            <section className="flex gap-10 flex-row flex-wrap mt-10">
              <AvaiableAppointmentsTable
                setAppointments={setAppointments}
                appointments={appointments}
              />
            </section>
          </main>
        </>
      ) : (
        <div className="text-white text-4xl text-center mt-48 flex justify-center items-center">
          <span> ابتدا اطلاعات خود را وارد کنید</span>
        </div>
      )}
    </div>
  );
};

export default UserPage;
