import { AnchorHTMLAttributes, useContext } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import ThemeContext from "../../ThemeContext";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconType;
  title: string;
}

export function LinkButton({ icon: Icon, ...props }: LinkButtonProps) {
  const theme = useContext(ThemeContext);

  let aStyle: string, titleStyle: string;

  switch (theme) {
    case "light":
      aStyle =
        "bg-violet-300 group-hover/linkbtn:bg-violet-400 text-neutral-800 group-hover/linkbtn:text-violet-700";
      titleStyle = "text-neutral-800 group-hover/linkbtn:text-violet-500";
      break;
    case "dark":
      aStyle =
        "bg-neutral-700 group-hover/linkbtn:bg-violet-700 text-violet-200 group-hover/linkbtn:text-violet-950";
      titleStyle = "text-violet-200 group-hover/linkbtn:text-violet-600";
      break;
    default:
      break;
  }

  return (
    <div className="flex flex-col items-center w-fit gap-1 group/linkbtn">
      <a
        {...props}
        className={twMerge("p-2 rounded ease-linear transition-all", aStyle!)}
        target="_blank"
      >
        <Icon className="sm:size-4 md:size-8" />
      </a>
      <span className={twMerge("text-[0.6rem] md:text-xs", titleStyle!)}>{props.title}</span>
    </div>
  );
}
