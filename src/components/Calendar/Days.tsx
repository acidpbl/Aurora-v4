import { twMerge } from "tailwind-merge";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";

interface DaysProps {
  days: [];
}

export function Days(props: DaysProps) {
  const theme = useContext(ThemeContext);

  let daysStyle: string,
    inactiveStyle: string,
    currentStyle: string,
    bgStyle: string;

  switch (theme) {
    case "light":
      bgStyle = "bg-violet-300 border-violet-500";
      daysStyle = "bg-violet-300 text-neutral-800";
      currentStyle = "bg-violet-500 text-violet-200 rounded";
      inactiveStyle = "bg-neutral-200 text-neutral-400";
      break;
    case "dark":
      bgStyle = "bg-neutral-700 border-violet-600";
      daysStyle = "bg-neutral-700 text-violet-200 font-light";
      currentStyle = "bg-violet-600 text-neutral-800 rounded font-semibold";
      inactiveStyle = "bg-neutral-500 text-neutral-600";
      break;

    default:
      break;
  }

  return (
    <div
      className={twMerge(
        "w-full grid grid-cols-7 rounded overflow-clip ease-linear transition-all border",
        bgStyle!
      )}
    >
      {props.days.map((d: any, index: any) => {
        return (
          <button
            key={index}
            className={twMerge(
              "text-center p-1.5 cursor-pointer ease-linear transition-all hover:bg-violet-600 hover:text-violet-800 hover:font-semibold",
              d.class === "inactive" ? inactiveStyle : daysStyle,
              d.isCurrentDay && currentStyle
            )}
          >
            {d.value}
          </button>
        );
      })}
    </div>
  );
}
