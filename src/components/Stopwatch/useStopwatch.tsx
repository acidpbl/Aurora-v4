import { useContext } from "react";
import stopwatchContext from "./StopwatchContext";

export function useStopwatch() {
  const stopwatch = useContext(stopwatchContext);

  function handleStopwatch() {
    if (stopwatch.isRunning) stopwatch.isRunning = false;
    else if (!stopwatch.isRunning) stopwatch.isRunning = true;
  }

  return { actions: { handleStopwatch }, states: { stopwatch } };
}
