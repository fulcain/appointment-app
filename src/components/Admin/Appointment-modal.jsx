import { DatePicker, TimePicker } from "zaman";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import "./Appointment-modal.css";
import modalStyle from "../../helpers/modal-styles";
import Typography from "@mui/material/Typography";
const ApointmentModal = ({ open, handleClose }) => {
	return (
		<Modal
			open={open}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={modalStyle}>
				<div className="flex flex-col gap-2">
					<div className="flex flex-col gap-2">
						<h6 className="text-white font-bold text-xl">
							انتخاب تاریخ
						</h6>
						<DatePicker
							className="date-and-time-div"
							inputClass="date-and-time-input"
							onChange={(e) => console.log(e.value)}
						/>
					</div>
					<div className="flex flex-col gap-2">
						<h6 className="text-white font-bold text-xl">
							انتخاب زمان
						</h6>
						<TimePicker
							className="date-and-time-div"
							inputClass="date-and-time-input"
							onChange={(e) =>
								console.log(e.hour, e.minute, e.timeConvention)
							}
						/>
					</div>
					<div className="mt-3 flex flex-row justify-center gap-2">
						<Button className="w-[100px]" variant="contained">
							اضافه کردن
						</Button>
						<Button
							className="w-[100px]"
							variant="contained"
							onClick={handleClose}
						>
							بستن
						</Button>
					</div>
				</div>
			</Box>
		</Modal>
	);
};

export default ApointmentModal;
