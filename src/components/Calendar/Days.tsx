import { twMerge } from "tailwind-merge";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";

interface DaysProps {
  days: Array<{ value: string; class: string; isCurrentDay: boolean }>;
}

type ThemeStyles = {
  bg: string;
  day: string;
  days: string;
  current: string;
  inactive: string;
};

export function Days({ days }: DaysProps) {
  const theme = useContext(ThemeContext);

  const styles: ThemeStyles = {
    bg: "bg-neutral-500",
    day: "hover:bg-neutral-600 hover:text-neutral-800",
    days: "bg-neutral-500 text-neutral-600",
    current: "bg-neutral-600 text-neutral-800 rounded",
    inactive:
      "bg-neutral-300 text-neutral-400 hover:text-neutral-500 hover:bg-neutral-400",
    ...(theme === "light" && {
      bg: "bg-violet-300",
      day: "hover:bg-violet-600 hover:text-violet-200",
      days: "bg-violet-300 text-neutral-800",
      current: "bg-violet-500 text-violet-200 rounded",
      inactive:
        "bg-purple-100 text-slate-400 hover:text-neutral-500 hover:bg-neutral-400",
    }),
    ...(theme === "dark" && {
      bg: "bg-neutral-700",
      day: "hover:bg-violet-500 hover:text-violet-200",
      days: "bg-neutral-700 text-violet-200 font-light",
      current: "bg-violet-600 text-neutral-800 font-semibold rounded",
      inactive:
        "bg-neutral-500 text-neutral-600 hover:text-neutral-600 hover:bg-neutral-700",
    }),
  };

  return (
    <div
      className={twMerge(
        "grid grid-cols-7 overflow-hidden transition-all",
        styles.bg
      )}
    >
      {days.map((d, index) => (
        <button
          key={index}
          className={twMerge(
            "text-sm text-center p-2 cursor-pointer transition-all ease-linear hover:rounded",
            styles.day,
            d.class === "inactive" ? styles.inactive : styles.days,
            d.isCurrentDay && styles.current
          )}
        >
          {d.value}
        </button>
      ))}
    </div>
  );
}
