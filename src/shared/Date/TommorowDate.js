import React from "react";

const currentDate = new Date();

const getFormattedDate = (date) => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Calculate tomorrow's date
  const tomorrowDate = new Date(date);
  tomorrowDate.setDate(date.getDate() + 1);

  const day = daysOfWeek[tomorrowDate.getDay()];
  const dayOfMonth = tomorrowDate.getDate();
  const month = months[tomorrowDate.getMonth()];
  const year = tomorrowDate.getFullYear();

  return `${day} ${dayOfMonth}, ${month} ${year}`;
};

const App = () => {
  return (
    <div className="font-[600] text-[13px] md:text-[16px] text-indigo-500">
      {getFormattedDate(currentDate)}
    </div>
  );
};

export default App;
