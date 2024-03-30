import { twMerge } from "tailwind-merge";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";

interface WeekdaysProps {
  nav: number;
}

export function Weekdays(props: WeekdaysProps) {
  const theme = useContext(ThemeContext);

  const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date().toLocaleDateString("en-us", {
    weekday: "short",
  });

  let navStyle: string, currentStyle: string;

  switch (theme) {
    case "light":
      navStyle = "text-neutral-800";
      currentStyle = "font-semibold text-violet-500";
      break;
    case "dark":
      navStyle = "text-violet-200";
      currentStyle = "font-semibold text-violet-600";
      break;

    default:
      break;
  }

  return (
    <div className={twMerge("w-full flex justify-between text-sm")}>
      {weekdays.map((weekday: string, index: any) => {
        return (
          <span
            className={twMerge(
              "w-full text-center ease-linear transition-all",
              props.nav === 0 && today === weekday ? currentStyle : navStyle
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
