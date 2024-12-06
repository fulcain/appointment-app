import { useContext } from "react";
import ApointmentContext from "../../context/ApointmentContext";
import AvaiableAppointmentsTable from "./AvailableAppointmentsTable";
import { useGetAppointmentsQuery } from "../../api/apiSlice";

const UserPage = () => {
  const { userIsLogin } = useContext(ApointmentContext);
  const { data: appointments, isLoading } = useGetAppointmentsQuery();

  return (
    <div className="container">
      {userIsLogin ? (
        <>
          <main>
            <section className="flex gap-10 flex-row flex-wrap mt-10">
              <AvaiableAppointmentsTable
                appointments={appointments}
                isLoading={isLoading}
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
