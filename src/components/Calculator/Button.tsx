import { ButtonHTMLAttributes, useContext } from "react";
import { twMerge } from "tailwind-merge";
import ThemeContext from "../../ThemeContext";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  btn: string | number;
}

export function Button(props: ButtonProps) {
  const themeCtx = useContext(ThemeContext);

  let btnStyle: string, actionStyle: string;

  switch (themeCtx) {
    case "light":
      btnStyle =
        "bg-violet-500 hover:bg-violet-600 font-semibold text-neutral-800 hover:text-neutral-900";
      break;
    case "dark":
      btnStyle =
        "bg-violet-600 hover:bg-violet-700 text-violet-200 hover:text-violet-300";
      break;
    default:
      break;
  }

  switch (props.btn) {
    case "C":
      actionStyle =
        themeCtx == "light"
          ? "bg-red-500 hover:bg-red-600 text-violet-200 hover:text-violet-300"
          : "bg-red-600 hover:bg-red-700";
      break;
    case "+":
    case "-":
    case "x":
    case "/":
    case "+-":
    case "%":
      actionStyle =
        themeCtx == "light"
          ? "bg-indigo-500 hover:bg-indigo-600"
          : "bg-indigo-600 hover:bg-indigo-700";
      break;
    case "=":
      actionStyle =
        themeCtx == "light"
          ? "col-span-2 bg-green-500 hover:bg-green-600"
          : "col-span-2 bg-green-600 hover:bg-green-700";
      break;
    default:
      break;
  }

  return (
    <button
      {...props}
      className={twMerge(
        "w-full rounded py-2 ease-linear transition-all",
        btnStyle!,
        actionStyle!
      )}
    >
      {props.btn}
    </button>
  );
}
