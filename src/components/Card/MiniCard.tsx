import { ReactNode, useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";
import { capitalize } from "../../functions/String";

interface MiniCardProps {
  children: ReactNode;
  title?: string;
}

type ThemeStyle = {
  card: string;
  title: string;
};

export function MiniCard({ title = "title", ...props }: MiniCardProps) {
  const theme = useContext(ThemeContext);

  const styles: ThemeStyle = {
    card: "",
    title: "",
    ...(theme === "light" && {
      card: "bg-violet-300 hover:bg-violet-400 ease-linear transition-all",
      title: "text-violet-600 group-hover/minicard:text-violet-200",
    }),
    ...(theme === "dark" && {
      card: "bg-neutral-700 hover:bg-violet-600 ease-linear transition-all",
      title: "text-neutral-200 group-hover/minicard:text-neutral-300",
    }),
  };

  if (title.length <= 0) title = "title";
  return (
    <div
      className={twMerge(
        "h-full aspect-square rounded flex flex-col items-center p-2 group/minicard",
        styles.card
      )}
    >
      <span
        className={twMerge(
          styles.title,
          "cursor-default select-none transition-all ease-linear text-nowrap text-sm"
        )}
      >
        {capitalize(title)}
      </span>
      {props.children}
    </div>
  );
}
