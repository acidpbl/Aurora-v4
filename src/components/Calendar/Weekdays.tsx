import { twMerge } from "tailwind-merge";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";

interface WeekdaysProps {
  nav: number;
}

type ThemeStyles = {
  nav: string;
  current: string;
};

export function Weekdays(props: WeekdaysProps) {
  const theme = useContext(ThemeContext);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date().toLocaleDateString("en-us", {
    weekday: "short",
  });

  const styles: ThemeStyles = {
    nav: "text-neutral-800 bg-neutral-600",
    current: "text-neutral-500 bg-neutral-700",
    ...(theme == "light" && {
      nav: "text-neutral-800 bg-violet-100",
      current: "text-violet-500 bg-violet-100",
    }),
    ...(theme == "dark" && {
      nav: "text-neutral-200 bg-neutral-900",
      current: "text-violet-400 bg-neutral-900",
    }),
  };

  return (
    <div className={twMerge("flex justify-between text-sm")}>
      {weekdays.map((weekday: string, index: any) => {
        return (
          <span
            className={twMerge(
              "size-full p-2 text-center ease-linear transition-all font-semibold",
              props.nav === 0 && today === weekday ? styles.current : styles.nav
            )}
            key={index}
          >
            {weekday.charAt(0)}
          </span>
        );
      })}
    </div>
  );
}
