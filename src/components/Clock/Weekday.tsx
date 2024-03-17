import { useContext, useEffect, useState } from "react";
import themeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

interface WeekdayProps {}

const now = new Date();

export function Weekday({}: WeekdayProps) {
  const theme = useContext(themeContext);
  let themeStyle;

  if (theme == "light") themeStyle = "text-violet-800 font-semibold";
  if (theme == "dark") themeStyle = "text-violet-600";

  const [date, setDate] = useState({
    weekday: now.toLocaleDateString("en", { weekday: "long" }),
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDate({
        weekday: now.toLocaleDateString("en", { weekday: "long" }),
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span className={twMerge("text-lg", themeStyle)}>{date.weekday}</span>;
}
