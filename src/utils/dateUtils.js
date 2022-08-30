import moment from "moment";

export const DAYS_IN_WEEK = 7;

export const getWeekStartDate = (date) => {
  const dateCopy = new Date(date);
  const dayOfWeek = dateCopy.getDay();
  const difference =
    dayOfWeek === 0
      ? -6 // for Sunday
      : 1 - dayOfWeek;

  const monday = new Date(dateCopy.setDate(date.getDate() + difference));
  return new Date(monday.getFullYear(), monday.getMonth(), monday.getDate());
};

export const generateWeekRange = (startDate) => {
  const result = [];
  for (let i = 0; i < DAYS_IN_WEEK; i += 1) {
    const base = new Date(startDate);
    result.push(new Date(base.setDate(base.getDate() + i)));
  }
  return result;
};

export const getDateTime = (date, time) => {
  const [hours, minutes] = time.split(":");
  const withHours = new Date(new Date(date).setHours(Number(hours)));
  const withMinutes = new Date(new Date(withHours).setMinutes(Number(minutes)));
  return withMinutes;
};

export const formatMins = (mins) => (mins < 10 ? `0${mins}` : mins);

export const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export const roundMultiple15 = (num) => Math.round(Number(num) / 15) * 15;

export const hours = Array(24)
  .fill()
  .map((val, index) => index);

export const getMonths = (weekDates, weekStartDate) => {
  const Month = weekDates.find(
    (day) => moment(day).format("MM") !== moment(weekStartDate).format("MM")
  );
  const Year = weekDates.find(
    (day) => moment(day).format("YYYY") !== moment(weekStartDate).format("YYYY")
  );

  if (Month && !Year) {
    return `${moment(weekStartDate).format("MMM")} - ${moment(Month).format(
      "MMM YYYY"
    )}`;
  }
  if (Month && Year) {
    return `${moment(weekStartDate).format("MMM YYYY")} - ${moment(
      Month
    ).format("MMM YYYY")}`;
  }
  return moment(weekStartDate).format("MMMM YYYY");
};

export const currentDate = new Date(
  new Date().setMinutes(roundMultiple15(new Date().getMinutes()))
);

export const slotData = (event) => ({
  timeHourStart: `${formatMins(Number(event.target.dataset.time) - 1)}:00`,
  timeHourEnd: `${formatMins(Number(event.target.dataset.time))}:00`,
  timeDay: event.target.parentElement.dataset.day,
});
