import { useContext } from "react";
import themeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";
import React from "react";

interface WatchedProps {
  savedTime: string[];
}

type ThemeStyle = {
  box: string;
  saved: string;
};

export function Watched(props: WatchedProps) {
  const theme = useContext(themeContext);

  const styles: ThemeStyle = {
    box: "bg-neutral-300",
    saved: "text-neutral-600",
    ...(theme === "light" && {
      box: "bg-violet-300",
      saved: "text-neutral-950",
    }),
    ...(theme === "dark" && {
      box: "bg-neutral-700",
      saved: "text-violet-200",
    }),
  };

  return (
    <div
      className={twMerge(
        "flex flex-col w-full min-h-24 max-h-24 rounded px-4 py-2 overflow-y-auto gap-1 transition-all ease-linear cursor-default",
        styles.box
      )}
    >
      <span className={twMerge("text-sm", styles.saved)}>
        {props.savedTime.length > 0
          ? props.savedTime.map((s, index) => {
              return (
                <React.Fragment key={index}>
                  {`${index + 1}° - ${s}`}
                  <br />
                </React.Fragment>
              );
            })
          : "not saved yet."}
      </span>
    </div>
  );
}
