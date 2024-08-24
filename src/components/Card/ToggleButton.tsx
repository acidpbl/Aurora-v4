import { ButtonHTMLAttributes, useContext } from "react";
import { IconType } from "react-icons";
import { capitalize } from "../../functions/String";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

interface ToggleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: { toggle: IconType; toggled: IconType };
  label?: { toggle: string; toggled: string };
  side?: "left" | "right";
  width?: string;
  toggled: boolean;
}

export function ToggleButton({
  label = { toggle: "toggle", toggled: "toggled" },
  icon: { toggle: IconToggle, toggled: IconToggled },
  side = "left",
  toggled,
  ...props
}: ToggleButtonProps) {
  const theme = useContext(ThemeContext);

  let btnStyle: string;

  switch (theme) {
    case "light":
      btnStyle = toggled
        ? "bg-amber-500 hover:bg-amber-600 text-amber-200 hover:text-amber-300"
        : "bg-violet-500 hover:bg-violet-600 text-violet-200 hover:text-violet-300";
      break;
    case "dark":
      btnStyle = toggled
        ? "bg-amber-600 hover:bg-amber-700 text-amber-200 hover:text-amber-300"
        : "bg-violet-600 hover:bg-violet-700 text-violet-200 hover:text-violet-300";
      break;
    default:
      break;
  }

  return (
    <button
      className={twMerge(
        "flex items-center gap-2 rounded px-4 py-2 justify-center",
        btnStyle!,
        props.width
      )}
      {...props}
    >
      {side === "left" ? (
        <>
          {toggled ? <IconToggled /> : <IconToggle />}
          <span>{capitalize(toggled ? label.toggled : label.toggle)}</span>
        </>
      ) : (
        <>
          <span>{capitalize(toggled ? label.toggled : label.toggle)}</span>
          {toggled ? <IconToggled /> : <IconToggle />}
        </>
      )}
    </button>
  );
}
