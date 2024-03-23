import { useContext } from "react";
import themeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";
import React from "react";

interface WatchedProps {
  savedTime: string[];
}

export function Watched(props: WatchedProps) {
  const theme = useContext(themeContext);
  let themeStyle, savedStyle;

  if (theme == "light") {
    themeStyle = "bg-violet-300";
    savedStyle = "text-violet-600";
  }
  if (theme == "dark") {
    themeStyle = "bg-neutral-700";
    savedStyle = "text-violet-200";
  }
  return (
    <div
      className={twMerge(
        "flex flex-col w-full min-h-16 max-h-16 rounded px-4 py-2 overflow-y-auto gap-1 transition-all ease-linear cursor-default",
        themeStyle
      )}
    >
      <span className={twMerge("text-sm", savedStyle)}>
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
