import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";
import { capitalize } from "../../functions/String";
import { Pomodoro } from ".";

interface ClockProps {
  progress: number;
  status: string;
  title: string;
  focus: boolean;
  minutes: number;
  seconds: number;
}

export function Clock(props: ClockProps) {
  const themeCtx = useContext(ThemeContext);

  let clockStyle: string, titleStyle: string;

  switch (themeCtx) {
    case "light":
      clockStyle =
        "bg-violet-300 hover:bg-violet-400 hover:text-violet-700 text-neutral-800";
      titleStyle = "text-neutral-800";
      break;
    case "dark":
      clockStyle =
        "bg-neutral-700 hover:bg-violet-700 hover:text-violet-950 text-violet-200";
      titleStyle = "text-violet-500";
      break;
    default:
      break;
  }
  return (
    <div className="min-w-72 max-w-72 flex flex-col gap-8">
      <div className="size-full flex flex-col gap-2">
        <span
          className={twMerge(
            "w-full flex justify-center rounded-md text-7xl py-8 select-none transition-all ease-linear",
            clockStyle!
          )}
        >
          {String(props.minutes).padStart(2, "0")}:
          {String(props.seconds).padStart(2, "0")}
        </span>
        <span className={twMerge("text-center", titleStyle!)}>
          {capitalize(props.title)}
        </span>
      </div>
      <div className="size-full flex flex-col gap-2">
        <span className={twMerge("text-center", titleStyle!)}>
          {capitalize(props.status)}
        </span>
        <Pomodoro.Progress progress={props.progress} />
      </div>
    </div>
  );
}
