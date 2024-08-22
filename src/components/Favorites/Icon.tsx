import { useContext } from "react";
import { twMerge } from "tailwind-merge";
import ThemeContext from "../../ThemeContext";
import { Tooltip } from "../Tooltip";

export interface IconProps {
  link: string;
  title?: string;
}

type ThemeStyles = {
  button: string;
};

export function Icon(props: IconProps) {
  const themeCtx = useContext(ThemeContext);

  const styles: ThemeStyles = {
    button: "",
    ...(themeCtx === "light" && {
      button:
        "bg-violet-300 text-neutral-800 hover:bg-violet-400 hover:text-neutral-950",
    }),
    ...(themeCtx === "dark" && {
      button:
        "bg-neutral-600 text-violet-200 hover:bg-neutral-700 hover:text-violet-300",
    }),
  };

  function getDomain(url: string) {
    url = url.replace(/\/$/, "");

    const match = url.match(
      /(https?:\/\/[^\/]+(\.com|\.br|\.org|\.net|\.edu|\.gov|\.io|\.dev|\.co))/
    );
    return match ? match[1] : url;
  }

  function ensureHttps(url: string) {
    if (!url.startsWith("https://")) {
      url = "https://" + url;
    }
    return url;
  }

  const domain = getDomain(props.link);
  const url = ensureHttps(props.link);

  return (
    <Tooltip direction="down" text={props.title ? props.title : "Favorite"}>
      <a
        className={twMerge(
          "p-2 rounded transition-colors ease-linear flex flex-col gap-1 aspect-square overflow-hidden w-fit",
          styles.button
        )}
        href={url}
      >
        <img
          src={`https://www.google.com/s2/favicons?sz=32&domain_url=${domain}`}
          alt="Favicon"
          className="size-8"
        />
      </a>
    </Tooltip>
  );
}
