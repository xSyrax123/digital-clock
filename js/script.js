const update_clock = () => {
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
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let date = new Date();
  let hr = time_format(date.getHours());
  let min = time_format(date.getMinutes());
  let sec = time_format(date.getSeconds());
  let day_week = days[date.getDay()];
  let day = date.getDate();
  let month = months[date.getMonth()];
  let date_text = `${day_week} ${month} ${day}`;
  document.getElementById("hour").textContent = `${hr}:${min}:${sec}`;
  document.getElementById("date").textContent = date_text;
};

const time_format = (time) => {
  if (time < 10) time = `0${time}`;
  return time;
};

setInterval(update_clock, 1000);
