import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

import moment from "moment-jalaali";

const DateAndTimePickers = ({ setAppointmentDate, setAppointmentTime }) => {
	moment.loadPersian({ dialect: "persian-modern" });

	return (
		<LocalizationProvider dateAdapter={AdapterMomentJalaali}>
			<div className="flex flex-col gap-2">
				<DatePicker
					minDate={moment(new Date())}
					defaultValue={moment(new Date())}
					onChange={(newValue) => {
						setAppointmentDate(newValue._d);
					}}
				/>
				<MobileTimePicker
					defaultValue={moment(new Date())}
					onChange={(newValue) => {
						setAppointmentTime(newValue._d);
					}}
				/>
			</div>
		</LocalizationProvider>
	);
};

export default DateAndTimePickers;
