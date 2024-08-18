import { ReactNode, useContext } from "react";
import { twMerge } from "tailwind-merge";
import themeContext from "../../ThemeContext";

interface CardProps {
  children: ReactNode;
}

type ThemeStyles = {
  card: string;
  title: string;
  aurora: string;
};

export function Root(props: CardProps) {
  const theme = useContext(themeContext);

  const styles: ThemeStyles = {
    card: "bg-neutral-200",
    title: "text-neutral-500",
    aurora: "text-neutral-700",
    ...(theme === "light" && {
      card: "bg-violet-200",
      title: "text-neutral-800",
      aurora: "text-violet-800",
    }),
    ...(theme === "dark" && {
      card: "bg-neutral-800",
      title: "text-neutral-200",
      aurora: "text-violet-500",
    }),
  };

  return (
    <div
      className={twMerge(
        "col-span-3 flex px-8 py-4 rounded-md items-center justify-between transition-all ease-linear",
        styles.card
      )}
    >
      <span
        className={twMerge(styles.title, "font-medium text-sm")}
      >
        Settings
      </span>
      <span className={twMerge("text-nowrap", styles.aurora)}>
        Aurora v4
      </span>
      <div className="flex gap-2 justify-end">{props.children}</div>
    </div>
  );
}
