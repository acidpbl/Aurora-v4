import { useContext } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import themeContext from "../../ThemeContext";

interface IconProps {
  icon: IconType;
}

export function Icon({ icon: Icon }: IconProps) {
  const theme = useContext(themeContext);

  let bgStyle;

  if (theme == "light")
    bgStyle =
      "bg-violet-300 text-violet-800 hover: bg-violet-400 hover:text-violet-100";
  if (theme == "dark")
    bgStyle =
      "bg-neutral-800 text-violet-400 hover: bg-neutral-900 hover:text-violet-900";

  return (
    <div className={twMerge("p-1 rounded", bgStyle)}>
      <Icon />
    </div>
  );
}
