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

type ThemeStyle = {
  theme: string;
};

export function Time({}: TimeProps) {
  const theme = useContext(themeContext);

  const styles: ThemeStyle = {
    theme: "",
    ...(theme === "light" && {
      theme: "bg-violet-300 hover:bg-violet-400 hover:text-violet-800",
    }),
    ...(theme === "dark" && {
      theme:
        "text-violet-200 bg-neutral-700 hover:bg-violet-700 hover:text-violet-950",
    }),
  };

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
        "w-full flex justify-center rounded-md text-6xl font-medium py-8 select-none transition-all ease-linear",
        styles.theme
      )}
      onClick={() => {
        navigator.clipboard.writeText(
          `${date.today} ${months[date.month]}, ${date.year}`
        );
      }}
    >
      {`${date.hours < 10 ? `0${date.hours}` : date.hours}:${
        date.minutes < 10 ? `0${date.minutes}` : date.minutes
      }:${date.seconds < 10 ? `0${date.seconds}` : date.seconds}`}
    </span>
  );
}
