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

type ThemeStyle = {
  theme: string;
};

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

  const styles: ThemeStyle = {
    theme: "text-neutral-600",
    ...(theme == "light" && {
      theme: "text-violet-500 font-medium",
    }),
    ...(theme == "dark" && {
      theme: "text-neutral-200",
    }),
  };

  return (
    <div className="flex flex-col">
      <span className={twMerge("text-2xl text-center", styles.theme)}>
        {`${date.today} ${months[date.month]}`}
      </span>
      <span className={twMerge("text-lg text-center", styles.theme)}>
        {`${date.year}`}
      </span>
    </div>
  );
}
