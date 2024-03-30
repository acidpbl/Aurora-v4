import {
  PiBroomFill,
  PiCopyFill,
  PiFloppyDiskFill,
  PiPauseFill,
  PiPlayFill,
  PiStopFill,
} from "react-icons/pi";
import { Card } from "../Card";
import { Timer } from "./index";
import { useTimer } from "./useTimer";
import { Divider } from "../Divider";
import { useEffect } from "react";

export function TimerCard() {
  const hook = useTimer();

  useEffect(() => {
    const timer = setInterval(() => {
      if (hook.states.isRunning) {
        hook.actions.setTime((prev) => (prev > 0 ? prev - 1 : prev));
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [hook.states.isRunning]);

  return (
    <Card.Root variant="sm" title="Timer">
      <div className="size-full flex flex-col gap-4">
        <Timer.Timer
          time={hook.states.time}
          stopTimer={hook.actions.handlePause}
          changeTimer={hook.actions.handleTimerChange}
          pauseTimer={hook.actions.handlePause}
          resetTimer={() => hook.actions.setTime(0)}
        />
        <Divider direction="h" />
        <Timer.Watched savedTime={hook.states.savedTime} />
        <div className="flex justify-between">
          <Card.Action.Toggle
            toggled={hook.states.isRunning ? true : false}
            icon={{ toggle: PiPlayFill, toggled: PiPauseFill }}
            variant="primary"
            onClick={hook.actions.handleRun}
          />
          <Card.Action.Icon
            icon={PiStopFill}
            variant="danger"
            onClick={hook.actions.handleStop}
          />
          <Card.Action.Icon
            icon={PiCopyFill}
            variant="secondary"
            onClick={hook.actions.copyCurrentTime}
          />
          <Card.Action.Icon
            icon={PiFloppyDiskFill}
            variant="success"
            onClick={hook.actions.saveTime}
          />
          <Card.Action.Icon
            icon={PiBroomFill}
            variant="danger"
            onClick={hook.actions.clearSavedTime}
          />
        </div>
      </div>
    </Card.Root>
  );
}
