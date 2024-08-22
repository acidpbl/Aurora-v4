import { useState, useEffect } from "react";
import {
  IGetWeatherDataResponse,
  getWeatherData,
} from "../../data/getWeatherData";

export function useWeather() {
  const [city, setCity] = useState<string>(() => {
    const savedCity = localStorage.getItem("city");
    return savedCity || "";
  });

  const [data, setData] = useState<IGetWeatherDataResponse | undefined>(() => {
    const savedData = localStorage.getItem("weatherData");
    try {
      return savedData
        ? (JSON.parse(savedData) as IGetWeatherDataResponse)
        : undefined;
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      return undefined;
    }
  });

  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  useEffect(() => {
    if (data) {
      try {
        localStorage.setItem("weatherData", JSON.stringify(data));
      } catch (error) {
        console.error("Error saving to localStorage:", error);
      }
    }
  }, [data]);

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
      try {
        const fetchedData = await getWeatherData(city);
        setData(fetchedData);
        setCity("");
        console.log(fetchedData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
        setData(undefined);
      }
    }
  }

  return {
    states: { city, data },
    actions: { handleCityChange, getCityWeather, setData },
  };
}
