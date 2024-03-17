import { ButtonHTMLAttributes, useContext } from "react";
import { IconType } from "react-icons";
import themeContext from "../../ThemeContext";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: { toggle: IconType; toggled: IconType };
  toggled: boolean;
}

export function Button({ toggled = false, icon: Icon, ...props }: ButtonProps) {
  const theme = useContext(themeContext);

  let btnStyle;

  if (theme === "light") btnStyle = "p-1 rounded bg-violet-300";
  if (theme === "dark") btnStyle = "p-1 rounded bg-neutral-800";

  return (
    <button className={btnStyle} {...props}>
      {toggled ? (
        <Icon.toggled className="text-violet-200" />
      ) : (
        <Icon.toggle className="text-violet-600" />
      )}
    </button>
  );
}
