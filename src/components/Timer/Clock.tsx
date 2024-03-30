import { useContext, useState } from "react";
import themeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";
import { useTimer } from "./useTimer";

interface ClockProps {
  time: number;
  stopTimer: () => void;
  changeTimer: (newTimer: number) => void;
  pauseTimer: () => void;
  resetTimer: () => void;
}

export function Clock(props: ClockProps) {
  const hook = useTimer();

  const [isEditing, setIsEditing] = useState(false);
  function handleBlur() {
    setIsEditing(false);
    props.stopTimer();
  }

  function handleClick() {
    setIsEditing(true);
    props.stopTimer();
  }

  const theme = useContext(themeContext);

  if (props.time == 0) props.pauseTimer();

  let themeStyle;

  if (theme == "light")
    themeStyle = "bg-violet-300 hover:bg-violet-400 hover:text-violet-800";
  if (theme == "dark")
    themeStyle =
      "text-violet-200 bg-neutral-700 hover:bg-violet-700 hover:text-violet-950";

  return isEditing ? (
    <input
      className={twMerge(
        "w-full flex justify-center rounded-md text-5xl px-8 py-5 select-none transition-all ease-linear outline-none text-center placeholder:text-violet-500",
        themeStyle
      )}
      type="number"
      onChange={(e) => {
        if (Number(e.target.value) > 359999) return;
        else props.changeTimer(Number(e.target.value));
      }}
      onBlur={handleBlur}
      placeholder="00:00:00"
      autoFocus
      value={props.time}
      onKeyDown={(e) => {
        if (e.key === "Enter") handleBlur();
        if (e.key === "Escape") {
          setIsEditing(false);
          props.resetTimer();
        }
      }}
    />
  ) : (
    <span
      onDoubleClick={handleClick}
      onClick={handleClick}
      className={twMerge(
        "w-full flex justify-center rounded-md text-5xl py-8 select-none transition-all ease-linear",
        themeStyle!
      )}
    >
      {hook.actions.formatTime(props.time)}
    </span>
  );
}
