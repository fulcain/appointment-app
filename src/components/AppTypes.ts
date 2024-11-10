import moment from "moment-jalaali";

export type AppointMentsTypes = {
  name: string | null;
  phoneNumber: string | null;
  date: moment.Moment;
  isReserved: boolean;
  id?: string;
};
