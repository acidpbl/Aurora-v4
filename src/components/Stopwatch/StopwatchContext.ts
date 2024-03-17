import { createContext } from "react";

interface StopwatchProps {
  value: number;
  isRunning: boolean;
}

const stopwatchContext = createContext<StopwatchProps>({
  value: 0,
  isRunning: false,
});

export default stopwatchContext;
