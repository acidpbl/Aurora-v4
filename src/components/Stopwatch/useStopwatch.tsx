import { useEffect, useState } from "react";

export function useStopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const [savedTime, setSavedTime] = useState<string[]>(() => {
    const savedTimeData = localStorage.getItem("stopwatchSaved");
    try {
      return savedTimeData ? JSON.parse(savedTimeData) : [];
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("stopwatchSaved", JSON.stringify(savedTime));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [savedTime]);

  function handleRun() {
    setIsRunning((prev) => !prev);
  }

  function handleStop() {
    setIsRunning(false);
    setTime(0);
  }

  function copyCurrentTime() {
    navigator.clipboard.writeText(formatTime(time));
  }

  function saveTime() {
    setSavedTime((oldArr) => [...oldArr, formatTime(time)]);
  }

  function clearSavedTime() {
    setSavedTime([]);
  }

  function formatTime(time: number) {
    const ms = time * 1000;

    const hours = Math.floor(ms / (1000 * 60 * 60));
    const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((ms % (1000 * 60)) / 1000);

    const formatedHours = hours.toString().padStart(2, "0");
    const formatedMinutes = minutes.toString().padStart(2, "0");
    const formatedSeconds = seconds.toString().padStart(2, "0");

    return `${formatedHours}:${formatedMinutes}:${formatedSeconds}`;
  }

  return {
    states: { time, isRunning, savedTime },
    actions: {
      setIsRunning,
      copyCurrentTime,
      handleRun,
      handleStop,
      setTime,
      formatTime,
      saveTime,
      clearSavedTime,
    },
  };
}
