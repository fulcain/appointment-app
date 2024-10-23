import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

import moment from "moment-jalaali";
import AdminContext from "../../context/AdminContext";
import { useContext } from "react";

const DateAndTimePickers = () => {
  moment.loadPersian({ dialect: "persian-modern" });

  const { setAppointmentDate, setAppointmentTime } = useContext(AdminContext);

  return (
    <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
      <div className="flex flex-col gap-2">
        <DatePicker
          minDate={moment(new Date())}
          defaultValue={moment(new Date())}
          onChange={(newValue) => {
            if (newValue) {
              setAppointmentDate(newValue);
            }
          }}
        />
        <MobileTimePicker
          defaultValue={moment(new Date())}
          onChange={(newValue) => {
            if (newValue) {
              setAppointmentTime(newValue);
            }
          }}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DateAndTimePickers;
