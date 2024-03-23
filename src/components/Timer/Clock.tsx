import { useContext, useState } from "react";
import themeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";
import { useTimer } from "./useTimer";

interface ClockProps {
  time: number;
}

export function Clock(props: ClockProps) {
  const [isEditing, setIsEditing] = useState(false);
  function handleBlur() {
    setIsEditing(false);
  }

  function handleClick() {
    setIsEditing(true);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    hook.actions.setTime(Number(event.target.value));
  }

  const theme = useContext(themeContext);

  let themeStyle;

  if (theme == "light")
    themeStyle = "bg-violet-300 hover:bg-violet-400 hover:text-violet-800";
  if (theme == "dark")
    themeStyle =
      "text-violet-200 bg-neutral-700 hover:bg-violet-700 hover:text-violet-950";

  const hook = useTimer();

  return isEditing ? (
    <input
      className={twMerge(
        "w-full flex justify-center rounded-md text-5xl px-8 py-5 select-none transition-all ease-linear outline-none text-center placeholder:text-violet-500",
        themeStyle
      )}
      type="number"
      onChange={handleChange}
      onBlur={handleBlur}
      placeholder="00:00:00"
      autoFocus
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
