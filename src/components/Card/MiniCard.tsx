import { ReactNode, useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

interface MiniCardProps {
  children: ReactNode;
}

export function MiniCard(props: MiniCardProps) {
  const theme = useContext(ThemeContext);
  let cardStyle: string;

  if (theme == "light") {
    cardStyle = "bg-violet-300 hover:bg-violet-400 ease-linear transition-all";
  }
  if (theme == "dark") {
    cardStyle = "bg-neutral-700 hover:bg-violet-600 ease-linear transition-all";
  }
  return (
    <div className={twMerge("h-full aspect-square rounded", cardStyle!)}>
      {props.children}
    </div>
  );
}
