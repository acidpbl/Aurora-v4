import {
  PiBroomFill,
  PiCopyFill,
  PiFloppyDiskFill,
  PiPauseFill,
  PiPlayFill,
  PiStopFill,
} from "react-icons/pi";
import { Stopwatch } from ".";
import { Card } from "../Card";
import { Divider } from "../Divider";
import { useStopwatch } from "./useStopwatch";
import { useEffect } from "react";

export function StopwatchCard() {
  const hook = useStopwatch();

  useEffect(() => {
    const timer = setInterval(() => {
      if (hook.states.isRunning) {
        hook.actions.setTime((prev) => prev + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [hook.states.isRunning]);

  return (
    <Card.Root variant="sm" title="stopwatch">
      <div className="w-full h-full flex flex-col gap-4">
        <Stopwatch.Timer time={hook.states.time} />
        <Divider direction="h" />
        <Stopwatch.Watched savedTime={hook.states.savedTime} />
        <div className="flex justify-between">
          <Stopwatch.Action.Toggle
            toggled={hook.states.isRunning ? true : false}
            icon={{ toggle: PiPlayFill, toggled: PiPauseFill }}
            variant="primary"
            onClick={hook.actions.handleRun}
          />
          <Stopwatch.Action.Icon
            icon={PiStopFill}
            variant="danger"
            onClick={hook.actions.handleStop}
          />
          <Stopwatch.Action.Icon
            icon={PiCopyFill}
            variant="secondary"
            onClick={hook.actions.copyCurrentTime}
          />
          <Stopwatch.Action.Icon
            icon={PiFloppyDiskFill}
            variant="success"
            onClick={hook.actions.saveTime}
          />
          <Stopwatch.Action.Icon
            icon={PiBroomFill}
            variant="danger"
            onClick={hook.actions.clearSavedTime}
          />
        </div>
      </div>
    </Card.Root>
  );
}
