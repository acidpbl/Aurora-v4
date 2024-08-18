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

type ThemeStyles = {
  clock: string;
  title: string;
};

export function Clock(props: ClockProps) {
  const themeCtx = useContext(ThemeContext);

  const styles: ThemeStyles = {
    clock: "",
    title: "",
    ...(themeCtx === "light" && {
      clock:
        "bg-violet-300 hover:bg-violet-400 hover:text-violet-700 text-neutral-800",
      title: "text-neutral-800",
    }),
    ...(themeCtx === "dark" && {
      clock:
        "bg-neutral-700 hover:bg-violet-700 hover:text-violet-950 text-violet-200",
      title: "text-neutral-200",
    }),
  };

  return (
    <div className="min-w-72 max-w-72 flex flex-col gap-8">
      <div className="size-full flex flex-col gap-2">
        <span
          className={twMerge(
            "w-full flex justify-center rounded-md text-7xl py-8 select-none transition-all ease-linear font-medium",
            styles.clock
          )}
        >
          {String(props.minutes).padStart(2, "0")}:
          {String(props.seconds).padStart(2, "0")}
        </span>
        <span className={twMerge("text-center font-medium", styles.title)}>
          {capitalize(props.title)}
        </span>
      </div>
      <div className="size-full flex flex-col gap-2">
        <span className={twMerge("text-center", styles.title)}>
          {capitalize(props.status)}
        </span>
        <Pomodoro.Progress progress={props.progress} />
      </div>
    </div>
  );
}
