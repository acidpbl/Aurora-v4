import { useEffect, useState } from "react";

export function useTimer() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(Number(""));
  const [toggle, setToggle] = useState(false);

  const [savedTime, setSavedTime] = useState<string[]>(() => {
    const savedTimeData = localStorage.getItem("timerSaved");
    try {
      return savedTimeData ? JSON.parse(savedTimeData) : [];
    } catch (error) {
      console.error("Error parsing JSON from localStorage:", error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("timerSaved", JSON.stringify(savedTime));
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  }, [savedTime]);

  function handleTimerChange(newTimer: number) {
    setTime(newTimer);
  }

  function handleRun() {
    setIsRunning((prev) => !prev);
  }

  function handlePause() {
    setIsRunning(false);
  }

  function handleStop() {
    setIsRunning(false);
    setTime(60);
  }

  function handleClock() {
    setToggle((prev) => !prev);
  }

  function saveTime() {
    setSavedTime((oldArr) => [...oldArr, formatTime(time)]);
  }

  function clearSavedTime() {
    setSavedTime([]);
  }

  function copyCurrentTime() {
    navigator.clipboard.writeText(formatTime(time));
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
    actions: {
      handleRun,
      handleStop,
      formatTime,
      handleClock,
      setTime,
      clearSavedTime,
      saveTime,
      copyCurrentTime,
      handleTimerChange,
      handlePause,
    },
    states: { time, isRunning, toggle, savedTime },
  };
}
