import { useContext } from "react";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";
import { useWeather } from "./useWeather";
interface InputProps {
  changeCity: (newCity: string) => void;
  city: string;
  getCityWeather: () => void;
}

export function Input(props: InputProps) {
  const theme = useContext(ThemeContext);

  const weather = useWeather();

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
    <div
      className={twMerge(
        "flex w-full transition-all ease-linear border-2 border-transparent rounded-md",
        theme == "light"
          ? "focus-within:border-violet-500"
          : "focus-within:border-violet-600"
      )}
    >
      <input
        type="string"
        name=""
        id=""
        value={props.city}
        className={twMerge(
          "w-full p-2 h-8 rounded-l outline-none",
          inputStyle!
        )}
        placeholder="CEP"
        onChange={(e) => {
          props.changeCity(e.target.value);
          weather.actions.setData(undefined);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            props.getCityWeather();
          }
        }}
      />
      <button
        type="submit"
        className={twMerge("p-2 rounded-r", btnStyle!)}
        onClick={props.getCityWeather}
      >
        <PiMagnifyingGlassBold />
      </button>
    </div>
  );
}
