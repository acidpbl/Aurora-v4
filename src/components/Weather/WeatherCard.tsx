import { Weather } from ".";
import { Card } from "../Card";
import { useWeather } from "./useWeather";
import { twMerge } from "tailwind-merge";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";
import { ellipsis } from "../../functions/String";
import { Tooltip } from "../Tooltip";

export function WeatherCard() {
  const weatherHook = useWeather();
  const themeCtx = useContext(ThemeContext);

  type ThemeStyle = {
    box: string;
  };

  const styles: ThemeStyle = {
    box: "bg-violet-300 text-neutral-900 hover:bg-violet-400 hover:text-violet-700 ease-linear transition-all font-semibold",
    ...(themeCtx == "light" && {
      box: "bg-violet-300 text-neutral-900 hover:bg-violet-400 hover:text-violet-700 ease-linear transition-all font-semibold",
    }),
    ...(themeCtx == "dark" && {
      box: "bg-neutral-700 text-violet-200 hover:bg-violet-600 hover:text-violet-950 ease-linear transition-all",
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
        <div className="flex flex-col gap-4 items-center">
          {weatherHook.states.data ? (
            <>
              <div className="w-full flex h-28 justify-around">
                <Tooltip direction="up" text={weatherHook.states.data.name}>
                  <Card.MiniCard
                    title={ellipsis(weatherHook.states.data.name, 10)}
                  >
                    <Weather.Icon icon={weatherHook.states.data.icon} />
                  </Card.MiniCard>
                </Tooltip>
                <Card.MiniCard title="Temperature">
                  <Weather.Temperature
                    temperature={weatherHook.states.data.temp}
                  />
                </Card.MiniCard>
              </div>
              <div className="w-full flex h-28 justify-around">
                <Card.MiniCard title="Min/Max">
                  <Weather.MinMaxTemp
                    min={weatherHook.states.data.temp_min}
                    max={weatherHook.states.data.temp_max}
                  />
                </Card.MiniCard>
                <Card.MiniCard title="Feels Like">
                  <Weather.FeelsLike
                    feels={weatherHook.states.data.feels_like}
                  />
                </Card.MiniCard>
              </div>
            </>
          ) : (
            <span
              className={twMerge(
                "mt-8 p-12 aspect-square flex items-center justify-center text-5xl rounded",
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
      </div>
    </Card.Root>
  );
}
