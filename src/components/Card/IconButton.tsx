import { ButtonHTMLAttributes, useContext } from "react";
import { IconType } from "react-icons";
import { capitalize } from "../../functions/String";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  label?: string;
  side?: "left" | "right";
  variant?: "primary" | "secondary" | "disabled" | "success" | "danger";
  width?: string;
}

export function IconButton({
  label = "butotn",
  side = "left",
  variant = "primary",
  ...props
}: IconButtonProps) {
  const theme = useContext(ThemeContext);

  let btnStyle: string;

  switch (variant) {
    case "primary":
      if (theme === "light")
        btnStyle =
          "bg-violet-500 text-violet-100 hover:text-violet-200 hover:bg-violet-600";
      if (theme === "dark")
        btnStyle =
          "bg-violet-600 text-violet-200 hover:text-violet-300 hover:bg-violet-700";
      break;
    case "secondary":
      if (theme === "light")
        btnStyle =
          "bg-yellow-500 text-yellow-100 hover:bg-yellow-600 hover:text-yellow-200";
      if (theme === "dark")
        btnStyle =
          "bg-yellow-600 text-yellow-200 hover:bg-yellow-700 hover:text-yellow-300";
      break;
    case "success":
      if (theme === "light")
        btnStyle =
          "bg-green-600 text-green-100 hover:bg-green-700 hover:text-green-200";
      if (theme === "dark")
        btnStyle =
          "bg-green-700 text-green-200 hover:bg-green-800 hover:text-green-300";
      break;
    case "danger":
      if (theme === "light")
        btnStyle =
          "bg-red-500 text-red-100 hover:bg-red-600 hover:text-red-200";
      if (theme === "dark")
        btnStyle =
          "bg-red-600 text-red-200 hover:bg-red-700 hover:text-red-300";
      break;
    case "disabled":
      if (theme === "light")
        btnStyle = "bg-gray-300 text-neutral-400 cursor-not-allowed";
      if (theme === "dark")
        btnStyle = "bg-gray-500 text-neutral-500 cursor-not-allowed";
      break;
    default:
      break;
  }

  return (
    <button
      className={twMerge(
        "flex items-center gap-2 rounded px-4 py-2 justify-center",
        btnStyle!,
        props.width
      )}
      {...props}
    >
      {side === "left" ? (
        <>
          <props.icon />
          <span>{capitalize(label)}</span>
        </>
      ) : (
        <>
          <span>{capitalize(label)}</span>
          <props.icon />
        </>
      )}
    </button>
  );
}
