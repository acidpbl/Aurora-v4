import { useContext, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import themeContext from "../../ThemeContext";

interface TodayDateProps {}

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
  "Dezember",
];

const now = new Date();

export function TodayDate({}: TodayDateProps) {
  const [date, setDate] = useState({
    today: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDate({
        today: now.getDate(),
        month: now.getMonth(),
        year: now.getFullYear(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  const theme = useContext(themeContext);
  let themeStyle;

  if (theme == "light") themeStyle = "text-violet-600"
  if (theme == "dark") themeStyle = "text-violet-400";

  return (
    <span className={twMerge("text-2xl", themeStyle)}>
      {`${date.today} ${months[date.month]}, ${date.year}`}
    </span>
  );
}
