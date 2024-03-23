import { ButtonHTMLAttributes, useContext } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import themeContext from "../../ThemeContext";

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  variant: "primary" | "secondary" | "success" | "danger" | "disabled";
}

function Icon({ icon: Icon, ...props }: IconProps) {
  const theme = useContext(themeContext);

  let variant;
  switch (props.variant) {
    case "primary":
      if (theme === "light")
        variant =
          "bg-violet-500 text-violet-100 hover:text-violet-200 hover:bg-violet-600";
      if (theme === "dark")
        variant =
          "bg-violet-600 text-violet-200 hover:text-violet-300 hover:bg-violet-700";
      break;
    case "secondary":
      if (theme === "light")
        variant =
          "bg-yellow-500 text-violet-100 hover:bg-yellow-600 hover:text-violet-200";
      if (theme === "dark")
        variant =
          "bg-yellow-600 text-violet-200 hover:bg-yellow-700 hover:text-violet-300";
      break;
    case "success":
      if (theme === "light")
        variant =
          "bg-green-600 text-violet-100 hover:bg-green-700 hover:text-violet-200";
      if (theme === "dark")
        variant =
          "bg-green-700 text-violet-200 hover:bg-green-800 hover:text-violet-300";
      break;
    case "danger":
      if (theme === "light")
        variant =
          "bg-red-500 text-violet-100 hover:bg-red-600 hover:text-violet-200";
      if (theme === "dark")
        variant =
          "bg-red-600 text-violet-200 hover:bg-red-700 hover:text-violet-300";
      break;
    case "disabled":
      if (theme === "light")
        variant = "bg-gray-300 text-neutral-400 cursor-not-allowed";
      if (theme === "dark")
        variant = "bg-gray-500 text-neutral-500 cursor-not-allowed";
      break;
    default:
      break;
  }

  return (
    <button
      className={twMerge(
        "action-btn h-10 w-10 flex items-center justify-center rounded transition-all ease-linear",
        variant
      )}
      disabled={variant == "disabled" ? true : false}
      {...props}
    >
      <Icon />
    </button>
  );
}

interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: { toggle: IconType; toggled: IconType };
  toggled: boolean;
  variant: "primary" | "secondary" | "disabled";
}

function Toggle({ icon: Icon, toggled = false, ...props }: ToggleProps) {
  const theme = useContext(themeContext);

  let variant;
  switch (props.variant) {
    case "primary":
      if (theme === "light")
        variant =
          "bg-violet-500 text-violet-100 hover:text-violet-200 hover:bg-violet-600";
      if (theme === "dark")
        variant =
          "bg-violet-600 text-violet-200 hover:text-violet-300 hover:bg-violet-700";
      break;
    case "secondary":
      if (theme === "light")
        variant =
          "bg-yellow-500 text-violet-100 hover:bg-yellow-600 hover:bg-violet-600";
      if (theme === "dark")
        variant =
          "bg-yellow-600 text-violet-200 hover:bg-yellow-700 hover:bg-violet-700";
      break;
    case "disabled":
      if (theme === "light")
        variant = "bg-gray-300 text-neutral-400 cursor-not-allowed";
      if (theme === "dark")
        variant = "bg-gray-500 text-neutral-500 cursor-not-allowed";
      break;
    default:
      break;
  }

  return (
    <button
      className={twMerge(
        "action-btn h-10 w-10 flex items-center justify-center rounded transition-all ease-linear",
        variant
      )}
      {...props}
    >
      {toggled ? <Icon.toggled /> : <Icon.toggle />}
    </button>
  );
}

export const Action = {
  Toggle: Toggle,
  Icon: Icon,
};
