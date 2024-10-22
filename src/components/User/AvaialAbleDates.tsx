import handleDateAppointments from "./helpers/handleDateAppointments";

const AvaialableDates = ({
	appointments,
	setDateAppointments,
	date,
}) => {
	return (
		<>
			<div
				onClick={() => {
					handleDateAppointments(
						setDateAppointments,
						appointments,
						date
					);
				}}
				className="hover:cursor-pointer rounded w-max p-4 border-solid bg-white"
			>
				{date}
			</div>
		</>
	);
};

export default AvaialableDates;
