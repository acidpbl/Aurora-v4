import { Weather } from ".";
import { Card } from "../Card";
import { useWeather } from "./useWeather";
import { twMerge } from "tailwind-merge";
import { useContext } from "react";
import ThemeContext from "../../ThemeContext";

export function WeatherCard() {
  const weatherHook = useWeather();
  const themeCtx = useContext(ThemeContext);

  let boxStyle: string;
  switch (themeCtx) {
    case "light":
      boxStyle =
        "bg-violet-300 text-neutral-900 hover:bg-violet-400 hover:text-violet-700 ease-linear transition-all font-semibold";
      break;
    case "dark":
      boxStyle =
        "bg-neutral-600 text-violet-200 hover:bg-violet-600 hover:text-violet-950 ease-linear transition-all";
      break;
    default:
      break;
  }

  return (
    <Card.Root
      variant="sm"
      title={
        weatherHook.states.data?.name
          ? `weather on ${weatherHook.states.data.name}`
          : "weather"
      }
    >
      <Weather.Input
        changeCity={weatherHook.actions.handleCityChange}
        city={weatherHook.states.city}
        getCityWeather={weatherHook.actions.getCityWeather}
      />
      <div className="w-full flex flex-col h-full gap-4 items-center">
        {weatherHook.states.data ? (
          <>
            <div className="w-full flex h-28 justify-around">
              <Card.MiniCard title={weatherHook.states.data.name}>
                <Weather.Icon icon={weatherHook.states.data.icon} />
              </Card.MiniCard>
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
                <Weather.FeelsLike feels={weatherHook.states.data.feels_like} />
              </Card.MiniCard>
            </div>
          </>
        ) : (
          <span
            className={twMerge(
              "w-[calc(_100%_-_8rem)] mt-8 p-12 aspect-square flex items-center justify-center text-5xl rounded",
              boxStyle!
            )}
            onClick={() => console.log(weatherHook.states.city)}
          >
            ?
          </span>
        )}
      </div>
    </Card.Root>
  );
}
