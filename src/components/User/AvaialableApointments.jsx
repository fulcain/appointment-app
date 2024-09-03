import Button from "@mui/material/Button";

const AvaiableApointments = ({ appointment, handleReserve }) => {
	return (
		<div
			className="flex flex-col w-[200px] bg-gray-400 p-4 rounded gap-4"
			key={appointment.id}
		>
			<span>زمان: {appointment.time}</span>
			<div>
				<span>تاریخ: </span>
				<span dir="ltr">{appointment.date}</span>
			</div>
			<div className="w-full mt-4 flex justify-center items-center">
				<Button
					color="success"
					className="w-[100px]"
					variant="outlined"
					onClick={() => {
						handleReserve(appointment.id);
					}}
				>
					رزرو
				</Button>
			</div>
		</div>
	);
};

export default AvaiableApointments;
