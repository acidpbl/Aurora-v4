import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

export interface IconProps {
  icon: string;
}

export function Icon({ icon }: IconProps) {
  const themeCtx = useContext(ThemeContext);

  let shadowStyle: string;

  switch (themeCtx) {
    case "light":
      shadowStyle = "drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]";
      break;
    case "dark":
      shadowStyle = "drop-shadow-[0_1px_5px_rgba(0,0,0,0.5)]";
      break;
    default:
      break;
  }
  return (
    <img
      src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
      alt=""
      className={twMerge(shadowStyle!, "h-20 -mt-1")}
    />
  );
}
