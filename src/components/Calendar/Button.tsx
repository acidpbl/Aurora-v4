import { ButtonHTMLAttributes, useContext } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import ThemeContext from "../../ThemeContext";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

export function Button({ icon: Icon, ...props }: ButtonProps) {
  const theme = useContext(ThemeContext);

  let buttonStyle: string;

  switch (theme) {
    case "light":
      buttonStyle = "bg-violet-500 text-violet-200 hover:text-violet-300";
      break;
    case "dark":
      buttonStyle = "bg-violet-600 text-neutral-800 hover:text-neutral-950";
      break;

    default:
      break;
  }
  return (
    <button
      {...props}
      className={twMerge(
        "p-1 aspect-square rounded ease-linear transition-all hover:bg-violet-800",
        buttonStyle!
      )}
    >
      <Icon className="h-3" />
    </button>
  );
}
