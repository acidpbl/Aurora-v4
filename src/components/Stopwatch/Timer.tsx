import { useContext } from "react";
import themeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";
import { useStopwatch } from "./useStopwatch";

interface TimerProps {
  time: number;
}

type ThemeStyle = {
  timer: string;
};

export function Timer(props: TimerProps) {
  const theme = useContext(themeContext);

  const styles: ThemeStyle = {
    timer: "text-neutral-600",
    ...(theme === "light" && {
      timer: "bg-violet-300 hover:bg-violet-400 hover:text-violet-800",
    }),
    ...(theme === "dark" && {
      timer:
        "text-violet-200 bg-neutral-700 hover:bg-violet-700 hover:text-violet-950",
    }),
  };

  const hook = useStopwatch();

  return (
    <span
      className={twMerge(
        "w-full flex justify-center rounded-md text-5xl py-8 select-none transition-all ease-linear font-medium",
        styles.timer
      )}
    >
      {hook.actions.formatTime(props.time)}
    </span>
  );
}
