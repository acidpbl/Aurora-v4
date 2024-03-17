import { ButtonHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";

interface IconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  variant: "primary" | "secondary" | "success" | "danger" | "disabled";
}

function Icon({ icon: Icon, ...props }: IconProps) {
  let variant;
  switch (props.variant) {
    case "primary":
      variant = "bg-violet-500 text-violet-100";
      break;
    case "secondary":
      variant = "bg-yellow-500 text-violet-100";
      break;
    case "success":
      variant = "bg-green-600 text-violet-100";
      break;
    case "danger":
      variant = "bg-red-500 text-violet-100";
      break;
    case "disabled":
      variant = "bg-gray-300 text-neutral-400 cursor-not-allowed";
      break;
    default:
      break;
  }

  return (
    <button
      className={twMerge(
        "action-btn h-10 w-10 flex items-center justify-center rounded",
        variant
      )}
      disabled={variant == "disabled" ? true : false}
      {...props}
    >
      <Icon className="" />
    </button>
  );
}

interface ToggleProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: { toggle: IconType; toggled: IconType };
  toggled: boolean;
  variant: "primary" | "secondary" | "disabled";
}

function Toggle({ icon: Icon, toggled = false, ...props }: ToggleProps) {
  let variant;
  switch (props.variant) {
    case "primary":
      variant = "bg-violet-500";
      break;

    default:
      break;
  }

  return (
    <button
      className={twMerge(
        "action-btn h-10 w-10 flex items-center justify-center rounded",
        variant
      )}
      {...props}
    >
      {toggled ? (
        <Icon.toggled className="text-violet-100" />
      ) : (
        <Icon.toggle className="text-violet-100" />
      )}
    </button>
  );
}

export const Action = {
  Toggle: Toggle,
  Icon: Icon,
};
