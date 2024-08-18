import { ButtonHTMLAttributes, useContext } from "react";
import { IconType } from "react-icons";
import themeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: { toggle: IconType; toggled: IconType };
  toggled: boolean;
}

type ThemeStyles = {
  btn: string;
};

export function Toggle({ toggled = false, icon: Icon, ...props }: ToggleProps) {
  const theme = useContext(themeContext);

  const styles: ThemeStyles = {
    btn: "bg-neutral-300 text-neutral-200 hover:bg-neutral-400 hover:text-neutral-100",
    ...(theme === "light" && {
      btn: "bg-violet-400 text-neutral-200 hover:bg-violet-600 hover:text-violet-300",
    }),
    ...(theme === "dark" && {
      btn: "bg-neutral-600 text-neutral-100 hover:bg-neutral-700 hover:text-neutral-400",
    }),
  };

  return (
    <button
      className={twMerge(styles.btn, "p-2 rounded transition-all ease-linear")}
      {...props}
    >
      {toggled ? <Icon.toggled /> : <Icon.toggle />}
    </button>
  );
}
