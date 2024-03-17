import { useState, useEffect, useContext } from "react";
import themeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

interface TimeProps {}

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

export function Time({}: TimeProps) {
  const theme = useContext(themeContext);
  let themeStyle;

  if (theme == "light")
    themeStyle = "bg-violet-300 hover:bg-violet-400 hover:text-violet-800";
  if (theme == "dark") themeStyle = "text-violet-200 bg-neutral-700 hover:bg-violet-700 hover:text-violet-950";

  const [date, setDate] = useState({
    hours: now.getHours(),
    minutes: now.getMinutes(),
    seconds: now.getSeconds(),
    today: now.getDate(),
    month: now.getMonth(),
    year: now.getFullYear(),
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDate({
        hours: now.getHours(),
        minutes: now.getMinutes(),
        seconds: now.getSeconds(),
        today: now.getDate(),
        month: now.getMonth(),
        year: now.getFullYear(),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <span
      className={twMerge(
        "w-full flex justify-center rounded-md text-7xl py-8 select-none transition-all ease-linear",
        themeStyle
      )}
      onClick={() => {
        navigator.clipboard.writeText(
          `${date.today} ${months[date.month]}, ${date.year}`
        );
      }}
    >
      {`${date.hours < 10 ? `0${date.hours}` : date.hours}:${
        date.minutes < 10 ? `0${date.minutes}` : date.minutes
      }`}
    </span>
  );
}
