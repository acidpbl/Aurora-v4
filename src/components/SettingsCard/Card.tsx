import { ReactNode, useContext } from "react";
import { twMerge } from "tailwind-merge";
import themeContext from "../../ThemeContext";
import { Icon } from "./Icon";
import { PiGearFill } from "react-icons/pi";

interface CardProps {
  children: ReactNode;
}

export function Card(props: CardProps) {
  const theme = useContext(themeContext);
  let cardStyle, titleStyle;

  if (theme == "light") {
    cardStyle = "bg-violet-200";
    titleStyle = "text-neutral-900 hover:text-violet-800";
  }
  if (theme == "dark") {
    cardStyle = "bg-neutral-950";
    titleStyle = "text-violet-600 hover:text-violet-500";
  }

  return (
    <div
      className={twMerge(
        "w-full min-h-12 max-h-12 p-4 rounded-lg flex justify-between items-center transition-all ease-linear",
        cardStyle
      )}
    >
      <span
        className={twMerge(
          titleStyle,
          "font-poppins font-medium text-sm cursor-default select-none flex items-center gap-2"
        )}
      >
        <Icon icon={PiGearFill} />
        Settings
      </span>
      <div className="h-full flex gap-2">{props.children}</div>
    </div>
  );
}
