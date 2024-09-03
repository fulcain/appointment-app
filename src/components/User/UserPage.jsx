import { useEffect, useState } from "react";
import {
	getAllAppointments,
} from "../../services/appointments";
import PageTitle from "../PageTitle";
import AvaiableApointments from "./AvaialableApointments";
import AvaialableDates from "./AvaialAbleDates";

import createAvaiableDates from "./helpers/createAvaiableDates";

const UserPage = ({ currentUserPhoneNumber, currentUserName, userIsLogin }) => {
	const [appointments, setAppointments] = useState([]);
	const [arrayOfDates, setArrayOfDates] = useState([]);
	const [dateApointments, setDateAppointments] = useState([]);

	// Get all appointments
	useEffect(() => {
		(async () => {
			try {
				const { data: appointmentData } = await getAllAppointments();

				setAppointments(appointmentData);

				createAvaiableDates(appointmentData, setArrayOfDates);
			} catch (err) {
				console.error(err);
			}
		})();
	}, []);


	return (
		<div className="container">
			<PageTitle title={"صفحه کاربر"}/>
			{userIsLogin ? (
				<>
					<div className="flex flex-col flex-wrap gap-4 mt-8">
						<h3 className="text-white text-3xl">
							زمان های قابل رزرو
						</h3>
						{arrayOfDates.length ? (
							arrayOfDates.map((date, id) => (
								<AvaialableDates
									date={date}
									appointments={appointments}
									setDateAppointments={setDateAppointments}
									key={id}
								/>
							))
						) : (
							<div className="text-white text-4xl text-center mt-48 flex justify-center items-center">
								زمانی برای رزرو وجود ندارد
							</div>
						)}
					</div>
					<main>
						<section className="flex gap-10 flex-row flex-wrap mt-10">
							{dateApointments.map((appointment) => (
								<AvaiableApointments
									key={appointment.id}
									appointment={appointment}
									dateApointments={dateApointments}
									setDateAppointments={setDateAppointments}
									setAppointments={setAppointments}
									appointments={appointments}
									currentUserName={currentUserName}
									currentUserPhoneNumber={currentUserPhoneNumber}
								/>
							))}
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
