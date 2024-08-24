import { AnchorHTMLAttributes, useContext } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import ThemeContext from "../../ThemeContext";
import { Tooltip } from "../Tooltip";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: IconType;
  title: string;
}

type ThemeStyles = {
  link: string;
};

export function LinkButton({ icon: Icon, ...props }: LinkButtonProps) {
  const theme = useContext(ThemeContext);

  const styles: ThemeStyles = {
    link: "bg-violet-300 group-hover/linkbtn:bg-violet-400 text-neutral-800 group-hover/linkbtn:text-violet-700",
    ...(theme === "light" && {
      link: "bg-violet-300 group-hover/linkbtn:bg-violet-400 text-neutral-800 group-hover/linkbtn:text-violet-700",
    }),
    ...(theme === "dark" && {
      link: "bg-neutral-700 group-hover/linkbtn:bg-violet-700 text-violet-200 group-hover/linkbtn:text-violet-950",
    }),
  };

  return (
    <div className="flex flex-col items-center w-fit gap-1 group/linkbtn cursor-pointer">
      <a
        {...props}
        className={twMerge(
          "p-2 rounded ease-linear transition-all",
          styles.link
        )}
        target="_blank"
      >
        <Tooltip direction="up" text={props.title}>
          <Icon size={24} />
        </Tooltip>
      </a>
    </div>
  );
}
