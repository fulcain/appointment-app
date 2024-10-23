import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterMomentJalaali } from "@mui/x-date-pickers/AdapterMomentJalaali";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { MobileTimePicker } from "@mui/x-date-pickers/MobileTimePicker";

import moment from "moment-jalaali";

type DateAndTimePickersType = {
  setAppointmentTime: React.Dispatch<React.SetStateAction<moment.Moment>>;
  setAppointmentDate: React.Dispatch<React.SetStateAction<moment.Moment>>;
};

const DateAndTimePickers = ({
  setAppointmentDate,
  setAppointmentTime,
}: DateAndTimePickersType) => {
  moment.loadPersian({ dialect: "persian-modern" });

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
