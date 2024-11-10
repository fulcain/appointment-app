import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import moment from "moment-jalaali";
import AdminContext from "../../context/AdminContext";
import { useContext } from "react";

const DateAndTimePickers = () => {
  moment.loadPersian({ dialect: "persian-modern" });

  const { setAppointmentDate } = useContext(AdminContext);

  return (
    <LocalizationProvider dateAdapter={AdapterMomentJalaali}>
      <div className="flex flex-col gap-2">
        <DateTimePicker
          minDate={moment(new Date())}
          defaultValue={moment(new Date())}
          onChange={(newValue) => {
            if (newValue) {
              setAppointmentDate(newValue);
            }
          }}
        />
      </div>
    </LocalizationProvider>
  );
};

export default DateAndTimePickers;
