import { ReactNode, useContext, useState } from "react";
import { twMerge } from "tailwind-merge";
import themeContext from "../../ThemeContext";
import { BsGoogle } from "react-icons/bs";

interface CardProps {
  children: ReactNode;
}

type ThemeStyles = {
  card: string;
  title: string;
  input: string;
};

export function Root(props: CardProps) {
  const [searchValue, setSearchValue] = useState("");

  const theme = useContext(themeContext);

  const styles: ThemeStyles = {
    card: "bg-neutral-200",
    title: "text-neutral-500",
    input: "text-neutral-700",
    ...(theme === "light" && {
      card: "bg-violet-200",
      title: "text-neutral-800",
      input: "text-violet-800 bg-violet-400",
    }),
    ...(theme === "dark" && {
      card: "bg-neutral-800",
      title: "text-neutral-200",
      input: "text-neutral-200 bg-neutral-600",
    }),
  };

  return (
    <div
      className={twMerge(
        "col-span-3 md:grid md:grid-cols-3 justify-between gap-4 flex px-8 py-4 rounded-md items-center transition-all ease-linear",
        styles.card
      )}
    >
      <span
        className={twMerge(styles.title, "font-medium text-sm hidden md:flex")}
      >
        Settings
      </span>
      <div
        className={twMerge(
          "w-full flex transition-all ease-linear border-2 border-transparent rounded items-center gap-2 pl-2",
          theme == "light"
            ? "focus-within:border-violet-500"
            : "focus-within:border-violet-600",
          styles.input
        )}
      >
        <BsGoogle size={16} color="fff" className="cursor-pointer" />
        <input
          className={twMerge(
            "text-nowrap text-lg bg-transparent focus:outline-none w-full"
          )}
          type="string"
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              window.location.href = `https://www.google.com/search?q=${searchValue}`;
            }
          }}
        />
      </div>
      <div className="flex gap-2 justify-end">{props.children}</div>
    </div>
  );
}
