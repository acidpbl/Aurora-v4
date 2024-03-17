import { useContext } from "react";
import themeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

export function Timer() {
  const theme = useContext(themeContext);

  let themeStyle;

  if (theme == "light")
    themeStyle = "bg-violet-300 hover:bg-violet-400 hover:text-violet-800";
  if (theme == "dark")
    themeStyle =
      "text-violet-200 bg-neutral-700 hover:bg-violet-700 hover:text-violet-950";
  return (
    <span
      className={twMerge(
        "w-full flex justify-center rounded-md text-5xl py-8 select-none",
        themeStyle
      )}
    >
      {""}
    </span>
  );
}
