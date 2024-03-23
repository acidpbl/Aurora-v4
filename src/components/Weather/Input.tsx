import { useContext } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

export function Input() {
  const theme = useContext(ThemeContext);
  let inputStyle: string, btnStyle: string;

  if (theme == "light") {
    inputStyle =
      "bg-violet-300 hover:bg-violet-400 ease-linear transition-all placeholder:text-violet-500";
    btnStyle =
      "bg-violet-500 hover:bg-violet-600 ease-linear transition-all text-violet-200 hover:text-violet-300";
  }
  if (theme == "dark") {
    inputStyle =
      "bg-neutral-700 hover:bg-neutral-800 ease-linear transition-all placeholder:text-violet-300";
    btnStyle =
      "bg-violet-600 hover:bg-violet-700 ease-linear transition-all text-violet-200 hover:text-violet-300";
  }
  return (
    <>
      <input
        type="string"
        name=""
        id=""
        className={twMerge("w-full p-2 h-8 rounded-l", inputStyle!)}
        placeholder="CEP"
      />
      <button type="submit" className={twMerge("p-2 rounded-r", btnStyle!)}>
        <PiMagnifyingGlassBold />
      </button>
    </>
  );
}
