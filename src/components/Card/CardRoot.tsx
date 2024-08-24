import { ReactNode, useContext } from "react";
import { twMerge } from "tailwind-merge";
import { capitalize } from "../../functions/String";
import themeContext from "../../ThemeContext";

interface CardRootProps {
  children: ReactNode;
  variant: "sm" | "md" | "lg";
  title?: string;
}

type ThemeStyles = {
  card: string;
  title: string;
  content: string;
};

export function CardRoot({ title = "title", ...props }: CardRootProps) {
  const theme = useContext(themeContext);
  let variant;

  const styles: ThemeStyles = {
    card: "bg-neutral-200",
    title: "text-neutral-500",
    content: "w-full",
    ...(theme === "light" && {
      card: "bg-violet-200",
      title: "text-neutral-800",
    }),
    ...(theme === "dark" && {
      card: "bg-neutral-800",
      title: "text-neutral-200",
    }),
  };

  switch (props.variant) {
    case "sm":
      variant = "col-span-1 w-full aspect-square h-full";
      break;
    case "md":
      variant =
        "col-span-1 aspect-square md:aspect-auto md:col-span-2 w-full h-full";
      break;
    case "lg":
      variant =
        "col-span-1 aspect-square md:aspect-auto md:col-span-3 w-full h-full";
      break;
    default:
      break;
  }

  return (
    <themeContext.Provider value={theme}>
      <div
        className={twMerge(
          variant,
          styles.card,
          "rounded-md flex flex-col items-center py-4 px-8 gap-4"
        )}
      >
        <span
          className={twMerge(
            styles.title,
            "font-medium transition-all ease-linear"
          )}
        >
          {title ? capitalize(title) : ""}
        </span>
        <div className={twMerge("w-full", styles.content)}>
          {props.children}
        </div>
      </div>
    </themeContext.Provider>
  );
}
