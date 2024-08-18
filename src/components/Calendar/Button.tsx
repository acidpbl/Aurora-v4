import { ButtonHTMLAttributes, useContext } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import ThemeContext from "../../ThemeContext";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

type ThemeStyles = {
  btn: string;
};

export function Button({ icon: Icon, ...props }: ButtonProps) {
  const theme = useContext(ThemeContext);

  const styles: ThemeStyles = {
    btn: "bg-neutral-500 text-neutral-200 hover:text-neutral-300",
    ...(theme == "light" && {
      btn: "bg-violet-500 text-violet-200 hover:text-violet-300",
    }),
    ...(theme == "dark" && {
      btn: "bg-violet-600 text-neutral-800 hover:text-neutral-950",
    }),
  };

  return (
    <button
      {...props}
      className={twMerge(
        "p-2 aspect-square rounded ease-linear transition-all hover:bg-violet-800",
        styles.btn
      )}
    >
      <Icon className="h-4" />
    </button>
  );
}
