import Button from "@mui/material/Button";
import { useState } from "react";
import ApointmentModal from "./Appointment-modal";

const AdminPage = () => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div className="container">
			<Button onClick={handleOpen} variant="outlined">
				زمان جدید نوبت
			</Button>
			<ApointmentModal open={open} handleClose={handleClose} />
		</div>
	);
};

export default AdminPage;
