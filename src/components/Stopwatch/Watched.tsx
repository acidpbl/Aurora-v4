import { useContext } from "react";
import themeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

export function Watched() {
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
        "flex flex-col w-full min-h-16 max-h-16 rounded p-4 overflow-y-scroll gap-1",
        themeStyle
      )}
    >
      {/* {savedStopwatch.length <= 0 ? (
                <span className="text-xs text-violet-600">not saved yet.</span>
                ) : (
                  savedStopwatch.map((s, index) => {
                    return (
                      <span className="text-xs text-violet-600">
                      {index + 1}° - {s}
                      </span>
                      );
                    })
                  )} */}
      <span className={twMerge("text-xs", savedStyle)}>not saved yet.</span>
    </div>
  );
}
