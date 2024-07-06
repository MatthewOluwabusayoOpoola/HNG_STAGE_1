const today = new Date();

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

document.querySelector('[data-testid="currentDay"]').textContent = `${
  days[today.getDay()]
} ${today.getDate()} ${months[today.getMonth()]} ${today.getFullYear()}`;

document.querySelector('[data-testid="currentTimeUTC"]').textContent =
  today.toLocaleTimeString("en-US", { timeZone: "UTC" });
