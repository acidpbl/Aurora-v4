import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import ThemeContext from "../../ThemeContext";
import { PiCaretDownFill, PiCaretUpFill } from "react-icons/pi";

interface MinMaxTempProps {
  min: number;
  max: number;
}

export function MinMaxTemp(props: MinMaxTempProps) {
  const themeCtx = useContext(ThemeContext);

  let tempStyle: string;

  switch (themeCtx) {
    case "light":
      tempStyle =
        "text-neutral-900 font-semibold group-hover/minicard:text-violet-600";
      break;
    case "dark":
      tempStyle =
        "text-violet-200 group-hover/minicard:text-neutral-900 group-hover/minicard:font-semibold";
      break;
    default:
      break;
  }

  return (
    <div className="flex flex-col size-full items-center py-2 gap-2">
      <span
        className={twMerge(
          "flex text-xl items-center gap-2 ease-linear transition-all",
          tempStyle!
        )}
      >
        <PiCaretUpFill />
        {props.max.toString().substring(0, 2)}° C
      </span>
      <span
        className={twMerge(
          "flex text-xl items-center gap-2 ease-linear transition-all",
          tempStyle!
        )}
      >
        <PiCaretDownFill />
        {props.min.toString().substring(0, 2)}° C
      </span>
    </div>
  );
}
