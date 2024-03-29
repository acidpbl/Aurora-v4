import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import ThemeContext from "../../ThemeContext";
import { celsiusToFahrenheit } from "../../functions/Number";
import { PiClockBold } from "react-icons/pi";

interface TemperatureProps {
  temperature: number;
}

export function Temperature(props: TemperatureProps) {
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
    <div className="flex flex-col size-full items-center py-2 gap-2">
      <span className={twMerge("flex text-xl items-center gap-2", tempStyle!)}>
        <PiClockBold />
        {props.temperature.toString().substring(0, 2)}° C
      </span>
      <span className={twMerge("flex text-xl items-center gap-2", tempStyle!)}>
        <PiClockBold />
        {celsiusToFahrenheit(props.temperature).toString().substring(0, 2)}° F
      </span>
    </div>
  );
}
