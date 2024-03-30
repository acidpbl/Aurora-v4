import * as Progress from "@radix-ui/react-progress";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar(props: ProgressBarProps) {
  const themeCtx = useContext(ThemeContext);

  let progressBgStyle: string, progressBarStyle: string;

  switch (themeCtx) {
    case "light":
      progressBgStyle = "bg-violet-300";
      progressBarStyle = "bg-violet-500";
      break;
    case "dark":
      progressBgStyle = "bg-neutral-700";
      progressBarStyle = "bg-violet-600";
      break;
    default:
      break;
  }

  return (
    <Progress.Root
      className={twMerge(
        "flex items-center p-1 relative overflow-hidden rounded-md w-full h-8",
        progressBgStyle!
      )}
      value={props.progress}
    >
      <div className="w-full h-full rounded-md overflow-hidden">
        <Progress.Indicator
          className={twMerge(
            "w-full h-full transition-transform duration-[660ms] rounded-r-md ease-[cubic-bezier(0.65, 0, 0.35, 1)]",
            progressBarStyle!
          )}
          style={{
            transform: `translateX(-${props.progress}%)`,
          }}
        />
      </div>
    </Progress.Root>
  );
}
