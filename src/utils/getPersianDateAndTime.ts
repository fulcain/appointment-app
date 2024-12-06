import moment from "moment-jalaali";

type GetPersianDateAndTimeType = (
  userDate: null | string,
) => [date: string, time: string, day: number];

const getPersianDateAndTime: GetPersianDateAndTimeType = (userDate) => {
  const date: string = moment(userDate).format("jYYYY-jMM-jDD");
  const time: string = moment(userDate).format("HH:mm");
  const day: number = moment(userDate).get("day");

  return [date, time, day];
};

export default getPersianDateAndTime;
