import { useContext, useEffect, useState } from "react";
import ApointmentContext from "../../context/ApointmentContext";
import { getAllAppointments } from "../../services/appointments";
import PageTitle from "../PageTitle";
import AvaiableAppointmentsTable from "./AvailableAppointmentsTable";
import AvaialableDates from "./AvaialAbleDates";

import createAvailableDates from "./helpers/createAvaiableDates";
import { AppointMentsTypes } from "../AppTypes";
import { useImmer } from "use-immer";

const UserPage = () => {
  const { userIsLogin } = useContext(ApointmentContext);

  const [appointments, setAppointments] = useImmer<AppointMentsTypes[]>([]);
  const [arrayOfDates, setArrayOfDates] = useImmer([]);
  const [dateApointments, setDateAppointments] = useImmer<AppointMentsTypes[]>(
    [],
  );

  useEffect(() => {
    (async () => {
      try {
        const { data: appointmentData } = await getAllAppointments();

        setAppointments(appointmentData);

        createAvailableDates(appointmentData, setArrayOfDates);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  return (
    <div className="container">
      <PageTitle title={"صفحه کاربر"} />
      {userIsLogin ? (
        <>
          <div className="flex flex-col flex-wrap gap-4 mt-8">
            <h3 className="text-white text-3xl">زمان های قابل رزرو</h3>
            <div className="flex flex-row gap-4">
              {arrayOfDates.length ? (
                arrayOfDates.map((date, id) => (
                  <AvaialableDates
                    date={date}
                    setDateAppointments={setDateAppointments}
                    key={id}
                    appointments={appointments}
                  />
                ))
              ) : (
                <div className="text-white text-4xl text-center mt-48 flex justify-center items-center">
                  زمانی برای رزرو وجود ندارد
                </div>
              )}
            </div>
          </div>
          <main>
            <section className="flex gap-10 flex-row flex-wrap mt-10">
              <AvaiableAppointmentsTable
                setDateAppointments={setDateAppointments}
                dateApointments={dateApointments}
                setAppointments={setAppointments}
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
