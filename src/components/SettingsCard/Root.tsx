import { ReactNode, useContext } from "react";
import { twMerge } from "tailwind-merge";
import themeContext from "../../ThemeContext";

interface CardProps {
  children: ReactNode;
}

export function Root(props: CardProps) {
  const theme = useContext(themeContext);
  let cardStyle, titleStyle, auroraStyle;

  if (theme == "light") {
    cardStyle = "bg-violet-200";
    titleStyle = "text-neutral-900 hover:text-violet-800";
    auroraStyle = "font-semibold text-violet-800";
  }
  if (theme == "dark") {
    cardStyle = "bg-neutral-950";
    titleStyle = "text-violet-600 hover:text-violet-500";
    auroraStyle = "font-medium text-violet-600";
  }

  return (
    <div
      className={twMerge(
        "w-full min-h-12 max-h-12 p-4 rounded-lg flex items-center transition-all ease-linear",
        cardStyle
      )}
    >
      <span
        className={twMerge(
          titleStyle,
          "w-full font-poppins font-medium text-sm cursor-default select-none flex items-center gap-2"
        )}
      >
        Settings
      </span>
      <span
        className={twMerge("font-poppins text-sm text-nowrap", auroraStyle)}
      >
        Aurora v4
      </span>
      <div className="w-full h-full flex gap-2 justify-end">
        {props.children}
      </div>
    </div>
  );
}
