import { ReactNode, useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";
import { capitalize } from "../../functions/String";

interface MiniCardProps {
  children: ReactNode;
  title?: string;
}

export function MiniCard({ title = "title", ...props }: MiniCardProps) {
  const theme = useContext(ThemeContext);
  let cardStyle: string, titleStyle: string;

  if (theme == "light") {
    cardStyle = "bg-violet-300 hover:bg-violet-400 ease-linear transition-all";
    titleStyle = "text-neutral-900 hover:text-violet-800";
  }
  if (theme == "dark") {
    cardStyle = "bg-neutral-700 hover:bg-violet-600 ease-linear transition-all";
    titleStyle = "text-violet-600 hover:text-violet-400";
  }

  if (title.length <= 0) title = "title";
  return (
    <div className={twMerge("h-full aspect-square rounded flex flex-col items-center p-2", cardStyle!)}>
      <span
        className={twMerge(
          titleStyle!,
          "cursor-default select-none transition-all ease-linear text-sm"
        )}
      >
        {capitalize(title)}
      </span>
      {props.children}
    </div>
  );
}
