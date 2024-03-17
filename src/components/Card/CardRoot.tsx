import { ReactNode, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { capitalize } from "../../functions/String";
import themeContext from "../../ThemeContext";

interface CardRootProps {
  children: ReactNode;
  variant: "sm" | "md" | "lg";
  title?: string;
}

export function CardRoot({ title = "title", ...props }: CardRootProps) {
  const theme = useContext(themeContext);
  let variant, cardStyle, titleStyle;

  if (theme == "light") {
    cardStyle = "bg-violet-200";
    titleStyle = "text-neutral-900 hover:text-violet-800";
  }
  if (theme == "dark") {
    cardStyle = "bg-neutral-950";
    titleStyle = "text-violet-600 hover:text-violet-500";
  }

  switch (props.variant) {
    case "sm":
      variant = "max-h-96 max-w-96 min-h-96 min-w-96";
      break;
    case "md":
      variant =
        "max-h-96 max-w-[calc(4px*96*2+16px)] min-h-96 min-w-[calc(4px*96*2+16px)]";
      break;
    case "lg":
      variant =
        "max-h-96 max-w-[calc(4px*96*3+32px)] min-h-96 min-w-[calc(4px*96*3+32px)]";
      break;
    default:
      break;
  }

  if (title.length <= 0) title = "title";

  return (
    <themeContext.Provider value={theme}>
      <div
        className={twMerge(
          variant,
          cardStyle,
          "rounded-xl flex flex-col items-center gap-4 py-4 px-12 font-poppins font-medium transition-all ease-linear"
        )}
      >
        <span
          className={twMerge(
            titleStyle,
            "cursor-default select-none transition-all ease-linear"
          )}
        >
          {capitalize(title)}
        </span>
        {props.children}
      </div>
    </themeContext.Provider>
  );
}
