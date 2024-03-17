import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import themeContext from "../ThemeContext";

interface DividerProps {
  direction: "v" | "h";
}

export function Divider({ direction }: DividerProps) {
  const theme = useContext(themeContext);

  let divDirection;

  switch (direction) {
    case "v":
      divDirection = "w-px h-full";
      break;
    case "h":
      divDirection = "h-px w-full";
      break;

    default:
      break;
  }

  return (
    <div
      className={twMerge(
        divDirection,
        "transition-all ease-linear",
        theme === "light" ? "bg-violet-500" : "bg-neutral-400"
      )}
    />
  );
}
