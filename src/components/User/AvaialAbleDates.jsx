const AvaialableDates = ({ date, handleDateAppointments }) => {
	return (
		<>
			<div
				onClick={() => {
					handleDateAppointments(date);
				}}
				className="hover:cursor-pointer rounded w-max p-4 border-solid bg-white"
			>
				{date}
			</div>
		</>
	);
};

export default AvaialableDates;
