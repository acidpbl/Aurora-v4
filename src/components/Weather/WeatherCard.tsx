import { Weather } from ".";
import { Card } from "../Card";
import { useWeather } from "./useWeather";
import { twMerge } from "tailwind-merge";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { PiCaretDownFill, PiCaretUpFill, PiSmileyFill } from "react-icons/pi";

type ThemeStyle = {
  box: string;
  mini: string;
  font: string;
  temp: string;
};

export function WeatherCard() {
  const weatherHook = useWeather();
  const themeCtx = useContext(ThemeContext);

  const styles: ThemeStyle = {
    box: "bg-violet-300 text-neutral-900 hover:bg-violet-400 hover:text-violet-700 ease-linear transition-all font-semibold",
    mini: "bg-violet-300 hover:bg-violet-400 ease-linear transition-all",
    font: "text-neutral-200 group-hover/miniweather:text-neutral-400 ease-linear transition-all",
    temp: "text-neutral-200 group-hover/miniweather:text-neutral-400 ease-linear transition-all",
    ...(themeCtx == "light" && {
      box: "bg-violet-300 text-neutral-900 hover:bg-violet-400 hover:text-violet-700 ease-linear transition-all font-semibold",
      mini: "bg-violet-300 hover:bg-violet-400 ease-linear transition-all",
      font: "text-neutral-800 group-hover/miniweather:text-neutral-950 ease-linear transition-all",
      temp: "text-violet-800 group-hover/miniweather:text-violet-950 ease-linear transition-all",
    }),
    ...(themeCtx == "dark" && {
      box: "bg-neutral-700 text-violet-200 hover:bg-violet-600 hover:text-violet-950 ease-linear transition-all",
      mini: "bg-neutral-600 hover:bg-neutral-700 ease-linear transition-all",
      font: "text-neutral-200 group-hover/miniweather:text-neutral-300 ease-linear transition-all",
      temp: "text-violet-400 group-hover/miniweather:text-violet-500 ease-linear transition-all",
    }),
  };

  const input = document.getElementById("weatherInput");

  return (
    <Card.Root
      variant="sm"
      title={
        weatherHook.states.data?.name
          ? `weather on ${weatherHook.states.data.name}`
          : "weather"
      }
    >
      <div className="flex flex-col gap-4">
        <Weather.Input
          changeCity={weatherHook.actions.handleCityChange}
          city={weatherHook.states.city}
          getCityWeather={weatherHook.actions.getCityWeather}
        />
        {weatherHook.states.data ? (
          <div
            className={twMerge(
              "rounded p-2 flex flex-col items-center gap-4 group/miniweather pb-4",
              styles.mini
            )}
          >
            <span className={twMerge("text-sm", styles.font)}>
              {weatherHook.states.data.name}
            </span>
            <div className="w-full flex justify-center gap-4 items-center">
              <div
                className={twMerge(
                  themeCtx === "light"
                    ? "bg-violet-400 group-hover/miniweather:bg-violet-500"
                    : "bg-neutral-500 group-hover/miniweather:bg-neutral-600",
                  "rounded ease-linear transition-all"
                )}
              >
                <Weather.Icon icon={weatherHook.states.data.icon} />
              </div>
              <ul>
                <li className={twMerge("text-sm font-medium", styles.temp)}>
                  {weatherHook.states.data.temp.toString().substring(0, 2)}° C
                </li>
                <li className={twMerge("text-sm", styles.font)}>
                  {weatherHook.states.data.weather}
                </li>
              </ul>
            </div>
            <ul>
              <li
                className={twMerge(
                  "w-full flex justify-center items-center gap-2",
                  styles.font
                )}
              >
                <PiCaretUpFill
                  className={twMerge(
                    "ease-linear transition-all",
                    themeCtx === "light"
                      ? "text-green-600 group-hover/miniweather:text-green-700"
                      : "text-green-500 group-hover/miniweather:text-green-600"
                  )}
                />
                {weatherHook.states.data.temp_max.toString().substring(0, 2)}° C
              </li>
              <li
                className={twMerge(
                  "w-full flex justify-center items-center gap-2",
                  styles.font
                )}
              >
                <PiCaretDownFill
                  className={twMerge(
                    "ease-linear transition-all",
                    themeCtx === "light"
                      ? "text-red-600 group-hover/miniweather:text-red-700"
                      : "text-red-500 group-hover/miniweather:text-red-600"
                  )}
                />
                {weatherHook.states.data.temp_min.toString().substring(0, 2)}° C
              </li>
            </ul>
            <div
              className={twMerge(
                "w-full flex flex-col justify-center items-center",
                styles.font
              )}
            >
              <span className="font-medium">Feels Like</span>
              <div className="flex items-center gap-2">
                <PiSmileyFill
                  className={twMerge(
                    "ease-linear transition-all",
                    themeCtx === "light"
                      ? "text-amber-600 group-hover/miniweather:text-amber-700"
                      : "text-amber-500 group-hover/miniweather:text-amber-600"
                  )}
                />
                {weatherHook.states.data.feels_like.toString().substring(0, 2)}°
                C
              </div>
            </div>
          </div>
        ) : (
          <span
            className={twMerge(
              "p-24 flex items-center justify-center text-5xl rounded",
              styles.box
            )}
            onClick={() => {
              input?.focus();
            }}
          >
            ?
          </span>
        )}
      </div>
    </Card.Root>
  );
}
