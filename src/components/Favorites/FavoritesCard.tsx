import { useContext, useEffect, useRef, useState } from "react";
import { Card } from "../Card";
import { Favorites } from ".";
import { IconProps } from "./Icon";
import { PiPlusBold } from "react-icons/pi";
import { twMerge } from "tailwind-merge";
import ThemeContext from "../../ThemeContext";

type ThemeStyles = {
  addButton: string;
  button: string;
  popup: string;
  title: string;
  label: string;
  input: string;
};

export function FavoritesCard() {
  const themeCtx = useContext(ThemeContext);

  const addPopupRef = useRef<HTMLDivElement | null>(null);
  const [addPopupVisible, setAddPopupVisible] = useState(false);

  const [addFavTitle, setAddFavTitle] = useState("");
  const [addFavLink, setAddFavLink] = useState("");

  const handleClickOutsidePopup = (event: MouseEvent) => {
    if (
      addPopupRef.current &&
      !addPopupRef.current.contains(event.target as Node)
    ) {
      setAddPopupVisible(false);
    }
  };

  useEffect(() => {
    if (addPopupVisible) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutsidePopup);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutsidePopup);
    }

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutsidePopup);
    };
  }, [addPopupVisible]);

  const [items, setItems] = useState<IconProps[]>(() => {
    const savedItems = localStorage.getItem("favorites");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(items));
  }, [items]);

  const addItem = (newItem: IconProps) => {
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
  };

  const styles: ThemeStyles = {
    addButton: "",
    button: "",
    popup: "",
    title: "",
    label: "",
    input: "",
    ...(themeCtx === "light" && {
      addButton:
        "bg-violet-500 text-violet-100 hover:bg-violet-600 hover:text-violet-200",
      button:
        "bg-violet-500 text-violet-100 hover:bg-violet-600 hover:text-violet-200",
      popup: "bg-violet-200",
      title: "text-neutral-800",
      label: "text-neutral-800",
      input:
        "text-neutral-800 bg-violet-300 hover:bg-violet-400 hover:text-neutral-950 placeholder:text-violet-800 focus:outline-violet-500",
    }),
    ...(themeCtx === "dark" && {
      addButton:
        "bg-violet-600 text-violet-200 hover:bg-violet-700 hover:text-violet-300",
      button:
        "bg-violet-600 text-violet-100 hover:bg-violet-700 hover:text-violet-200",
      popup: "bg-neutral-800",
      title: "text-neutral-200",
      label: "text-neutral-200",
      input:
        "text-neutral-100 bg-neutral-600 hover:bg-neutral-700 hover:text-neutral-200 placeholder:text-violet-300 focus:outline-violet-600",
    }),
  };

  return (
    <Card.Root variant="sm" title="Favorites">
      <div className="flex flex-wrap gap-2">
        {items &&
          items.map((item) => {
            return <Favorites.Icon link={item.link} title={item.title} />;
          })}
        <div className="p-2">
          <button
            className={twMerge(
              "p-2 rounded transition-colors ease-linear",
              styles.button
            )}
            onClick={() => setAddPopupVisible((prev) => !prev)}
          >
            <PiPlusBold />
          </button>
        </div>
      </div>
      <div
        className={twMerge(
          "fixed w-screen h-screen left-0 top-0 z-20 px-12 md:px-[32rem] py-12 md:py-60 backdrop-blur-[1px] bg-neutral-900-50",
          addPopupVisible ? "flex" : "hidden"
        )}
      >
        <div
          ref={addPopupRef}
          className={twMerge(
            "rounded flex overflow-x-hidden flex-col w-full items-center py-2 px-4 gap-4",
            styles.popup
          )}
        >
          <div>
            <span className={twMerge("font-medium", styles.title)}>
              Add Favorite
            </span>
          </div>
          <div className="self-start flex flex-col gap-2">
            <div className="flex items-center gap-4">
              <label
                htmlFor="add_fav_title"
                className={twMerge("text-sm w-8", styles.label)}
              >
                Title:
              </label>
              <input
                id="add_fav_title"
                type="text"
                placeholder="Your Link"
                value={addFavTitle}
                onChange={(e) => {
                  setAddFavTitle(e.target.value);
                }}
                className={twMerge(
                  "rounded ease-linear transition-all px-2 py-2 text-sm placeholder:font-monospace",
                  styles.input
                )}
              />
            </div>
            <div className="flex items-center gap-4">
              <label
                htmlFor="add_fav_url"
                className={twMerge("text-sm w-8", styles.label)}
              >
                URL:
              </label>
              <input
                id="add_fav_url"
                type="text"
                placeholder="yourlink.com"
                value={addFavLink}
                onChange={(e) => {
                  setAddFavLink(e.target.value);
                }}
                className={twMerge(
                  "rounded ease-linear transition-all px-2 py-2 text-sm placeholder:font-monospace",
                  styles.input
                )}
                required
              />
            </div>
            <div className="self-end flex">
              <button
                type="submit"
                className={twMerge("py-2 px-4 rounded", styles.button)}
                onClick={() => {
                  addItem({ link: addFavLink, title: addFavTitle });
                  setAddPopupVisible(false);
                  setAddFavLink("");
                  setAddFavTitle("");
                }}
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </Card.Root>
  );
}
