import { useContext, useEffect, useState } from "react";
import themeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

interface WeekdayProps {}

const now = new Date();

type ThemeStyle = {
  theme: string;
};

export function Weekday({}: WeekdayProps) {
  const theme = useContext(themeContext);

  const styles: ThemeStyle = {
    theme: "text-neutral-600",
    ...(theme == "light" && {
      theme: "text-violet-800 font-semibold",
    }),
    ...(theme == "dark" && {
      theme: "text-neutral-300",
    }),
  };

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

  return (
    <span className={twMerge("text-lg", styles.theme)}>{date.weekday}</span>
  );
}
