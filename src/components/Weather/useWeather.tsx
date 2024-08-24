import { useState, useEffect } from "react";
import {
  IGetWeatherDataResponse,
  getWeatherData,
} from "../../data/getWeatherData";

export function useWeather() {
  const [city, setCity] = useState<string>(() => {
    return localStorage.getItem("city") || "";
  });

  const [data, setData] = useState<IGetWeatherDataResponse | undefined>(
    undefined
  );

  useEffect(() => {
    if (city) {
      localStorage.setItem("city", city);
    }
  }, [city]);

  useEffect(() => {
    if (city) {
      getCityWeather();
    }
  }, []);

  async function getCityWeather() {
    if (checkIfInputExists(city)) {
      try {
        const fetchedData = await getWeatherData(city);
        setData(fetchedData);
        console.log(fetchedData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setData(undefined);
      }
    }
  }

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

  return {
    states: { city, data },
    actions: { handleCityChange, getCityWeather, setData },
  };
}
