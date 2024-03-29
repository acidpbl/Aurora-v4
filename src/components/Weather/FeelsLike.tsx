import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import ThemeContext from "../../ThemeContext";
import { PiSmileyBold } from "react-icons/pi";

interface FeelsLikeProps {
  feels: number;
}

export function FeelsLike(props: FeelsLikeProps) {
  const themeCtx = useContext(ThemeContext);

  let tempStyle: string;

  switch (themeCtx) {
    case "light":
      tempStyle = "text-neutral-900 font-semibold";
      break;
    case "dark":
      tempStyle = "text-violet-200";
      break;
    default:
      break;
  }

  return (
    <div className="flex flex-col size-full items-center py-6 gap-4">
      <span className={twMerge("flex text-lg items-center gap-2", tempStyle!)}>
        <PiSmileyBold />
        {props.feels.toString().substring(0, 2)}° C
      </span>
    </div>
  );
}
