import {
  PiBroomFill,
  PiCircleBold,
  PiCircleFill,
  PiPauseFill,
  PiPlayFill,
  PiStopFill,
} from "react-icons/pi";
import { Pomodoro } from ".";
import { Card } from "../Card";
import { useContext, useEffect, useState } from "react";
import ThemeContext from "../../ThemeContext";
import { twMerge } from "tailwind-merge";

import notPomodoro from "../../audios/notification_pomodoro.mp3";
import notChill from "../../audios/notification_chill.mp3";
import { play } from "../../functions/Audios";

type ThemeStyles = {
  focused: string;
};

export function PomodoroCard() {
  const themeCtx = useContext(ThemeContext);

  const styles: ThemeStyles = {
    focused: "",
    ...(themeCtx == "light" && {
      focused:
        "bg-violet-300 hover:bg-violet-400 text-neutral-800 hover:text-violet-800",
    }),
    ...(themeCtx == "dark" && {
      focused:
        "bg-neutral-700 hover:bg-violet-700 text-violet-200 hover:text-violet-950",
    }),
  };

  const [pomodoroTime, setPomodoroTime] = useState(25 * 60);
  const [pomodoroProgress, setPomodoroProgress] = useState(0);
  const [pomodoroActive, setPomodoroActive] = useState(false);

  const [focusRepeat, setFocusRepeat] = useState(false);

  const [focusTimes, setFocusTimes] = useState(0);

  useEffect(() => {
    const progressPercentage = (pomodoroTime / (25 * 60)) * 100;
    setPomodoroProgress(progressPercentage);

    if (pomodoroActive === true) {
      if (pomodoroTime === 1) {
        setPomodoroActive(false);
        setTimeout(() => {
          setPomodoroTime(25 * 60);
        }, 5000);
        setChillActive(true);
        setFocusTimes((state) => state + 1);
        play(notPomodoro);
      }
      setTimeout(() => {
        setPomodoroTime((state) => state - 1);
      }, 1000);
    }
  }, [pomodoroTime, pomodoroActive]);

  const [chillTime, setChillTime] = useState(5 * 60);
  const [chillProgress, setChillProgress] = useState(0);
  const [chillActive, setChillActive] = useState(false);

  useEffect(() => {
    const chillPercentage = (chillTime / (5 * 60)) * 100;
    setChillProgress(chillPercentage);

    if (chillActive === true && pomodoroActive === false) {
      if (chillTime === 1) {
        setChillActive(false);
        setTimeout(() => {
          setChillTime(5 * 60);
        }, 5000);
        play(notChill);
        if (focusRepeat) {
          setPomodoroActive(true);
        }
      }
      setTimeout(() => {
        setChillTime((state) => state - 1);
      }, 1000);
    }
  }, [chillTime, chillActive]);

  const chillMinutes = Math.floor(chillTime / 60);
  const chillSeconds = chillTime % 60;

  const pomodoroMinutes = Math.floor(pomodoroTime / 60);
  const pomodoroSeconds = pomodoroTime % 60;

  return (
    <Card.Root variant="lg" title="Pomodoro">
      <div className="size-full flex justify-between">
        <Pomodoro.Clock
          focus={pomodoroActive ? true : false}
          progress={pomodoroProgress}
          status={
            pomodoroActive
              ? `${100 - Math.floor(pomodoroProgress)}/100%`
              : "Waiting start"
          }
          title="focus"
          minutes={pomodoroMinutes}
          seconds={pomodoroSeconds}
        />
        <div className="size-full flex flex-col px-32 gap-12">
          <div className="w-full flex flex-wrap justify-around gap-y-4 gap-x-2">
            <Card.ToggleButton
              toggled={pomodoroActive ? true : false}
              icon={{ toggle: PiPlayFill, toggled: PiPauseFill }}
              label={{ toggle: "Play", toggled: "Pause" }}
              side="left"
              width="w-28"
              onClick={() =>
                pomodoroActive
                  ? setPomodoroActive(false)
                  : setPomodoroActive(true)
              }
            />
            <Card.IconButton
              icon={PiStopFill}
              label="Stop"
              side="left"
              variant="danger"
              width="w-28"
              onClick={() => {
                setPomodoroActive(false);
                setTimeout(() => {
                  setPomodoroTime(25 * 60);
                }, 1000);
                setChillActive(false);
                setTimeout(() => {
                  setChillTime(5 * 60);
                }, 1000);
              }}
            />
            <Card.ToggleButton
              toggled={focusRepeat ? true : false}
              icon={{ toggle: PiCircleBold, toggled: PiCircleFill }}
              label={{ toggle: "Repeat", toggled: "Repeat" }}
              side="left"
              width="w-28"
              onClick={() =>
                focusRepeat ? setFocusRepeat(false) : setFocusRepeat(true)
              }
            />
            <Card.IconButton
              icon={PiBroomFill}
              label="Clear"
              side="left"
              variant="success"
              width="w-28"
              onClick={() => setFocusTimes(0)}
            />
          </div>
          <div
            className={twMerge(
              "size-full rounded-md text-center justify-center py-4 flex flex-col ease-linear transition-all",
              styles.focused
            )}
          >
            <span className="text-4xl font-semibold ease-linear transition-all">
              {focusTimes}
            </span>
            <span className="ease-linear transition-all">times focused.</span>
          </div>
        </div>
        <Pomodoro.Clock
          focus={false}
          progress={chillProgress}
          title="Chill"
          status={
            chillActive
              ? `${100 - Math.floor(chillProgress)}/100%`
              : "Waiting start"
          }
          minutes={chillMinutes}
          seconds={chillSeconds}
        />
      </div>
    </Card.Root>
  );
}
