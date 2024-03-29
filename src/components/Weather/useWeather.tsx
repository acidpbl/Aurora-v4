import { useState } from "react";
import {
  IGetWeatherDataResponse,
  getWeatherData,
} from "../../data/getWeatherData";

export function useWeather() {
  const [city, setCity] = useState("");
  const [data, setData] = useState<IGetWeatherDataResponse>();

  function handleCityChange(newCity: string) {
    setCity(newCity);
  }

  function checkIfInputExists(input: string): boolean {
    if (input.trim().length) {
      return true;
    }

    setData(undefined);

    return false;
  }
  async function getCityWeather() {
    if (checkIfInputExists(city)) {
      const data = await getWeatherData(city);
      setData(data);
      setCity("");

      console.log(data);
    }
  }

  return {
    states: { city, data },
    actions: { handleCityChange, getCityWeather, setData },
  };
}
