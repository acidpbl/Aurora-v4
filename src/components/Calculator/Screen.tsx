import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

interface ScreenProps {
  value: number;
}

export function Screen(props: ScreenProps) {
  const themeCtx = useContext(ThemeContext);

  let screenStyle: string;

  switch (themeCtx) {
    case "light":
      screenStyle =
        "bg-violet-300 hover:bg-violet-400 hover:text-violet-800 hover:font-semibold";
      break;
    case "dark":
      screenStyle =
        "bg-neutral-700 hover:bg-violet-600 text-violet-200 hover:text-neutral-800 hover:font-semibold";
      break;
    default:
      break;
  }
  return (
    <span
      className={twMerge(
        "h-full w-11/12 flex justify-end px-4 py-3 rounded ease-linear transition-all font-monospace text-xl border border-violet-600",
        screenStyle!
      )}
    >
      {props.value}
    </span>
  );
}
