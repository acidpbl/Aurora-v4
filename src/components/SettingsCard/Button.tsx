import { ButtonHTMLAttributes, useContext } from "react";
import { IconType } from "react-icons";
import themeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: { toggle: IconType; toggled: IconType };
  toggled: boolean;
}

export function Button({ toggled = false, icon: Icon, ...props }: ButtonProps) {
  const theme = useContext(themeContext);

  let btnStyle;

  if (theme === "light")
    btnStyle =
      "bg-violet-300 text-violet-200 hover: bg-violet-400 hover:text-violet-100";
  if (theme === "dark")
    btnStyle =
      "bg-neutral-800 text-violet-600 hover: bg-neutral-900 hover:text-violet-900";

  return (
    <button
      className={twMerge(btnStyle, "p-1 rounded transition-all ease-linear")}
      {...props}
    >
      {toggled ? <Icon.toggled /> : <Icon.toggle />}
    </button>
  );
}
