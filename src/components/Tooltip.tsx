import { ReactNode, useContext } from "react";
import { twMerge } from "tailwind-merge";
import ThemeContext from "./../ThemeContext";

interface TooltipProps {
  text: string;
  children: ReactNode;
  direction: "up" | "down";
}

type ThemeStyle = {
  tip: string;
  direction: string;
};

export function Tooltip(props: TooltipProps) {
  const theme = useContext(ThemeContext);

  const styles: ThemeStyle = {
    tip: "bg-neutral-300 text-neutral-800 border-neutral-800",
    direction: "top-[125%]",
    ...(theme === "light" && {
      tip: "bg-neutral-200 text-violet-500 border-violet-500",
    }),
    ...(theme === "dark" && {
      tip: "bg-neutral-700 text-violet-200 border-violet-200",
    }),
    ...(props.direction === "down" && {
      direction: "top-[104%]",
    }),
    ...(props.direction === "up" && {
      direction: "bottom-[104%]",
    }),
  };

  return (
    <>
      <div className="relative flex items-center justify-center text-center group/tooltip">
        {props.children}
        <span
          className={twMerge(
            "absolute invisible text-center text-xs px-2 text-nowrap py-1.5 border rounded z-[1] opacity-0 transition-opacity ease-linear group-hover/tooltip:visible group-hover/tooltip:opacity-100",
            styles.tip,
            styles.direction
          )}
        >
          {props.text}
        </span>
      </div>
    </>
  );
}
