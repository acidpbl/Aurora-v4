import {
  PiBroomFill,
  PiCopyFill,
  PiGlobeFill,
  PiFloppyDiskFill,
  PiMoonFill,
  PiPauseFill,
  PiPlayFill,
  PiStopFill,
  PiSunFill,
} from "react-icons/pi";
import { Card } from "./components/Card";
import { Clock } from "./components/Clock";
import { Stopwatch } from "./components/Stopwatch";
import { SettingsCard } from "./components/SettingsCard";
import themeContext from "./ThemeContext";
import { useContext, useEffect, useState } from "react";
import { Divider } from "./components/Divider";
import { BR, ES, US } from "country-flag-icons/react/1x1";
import { useStopwatch } from "./components/Stopwatch/useStopwatch";
function App() {
  const themeCtx = useContext(themeContext);
  const [theme, setTheme] = useState(themeCtx);

  if (theme === "light") document.body.classList.add("light");

  function handleTheme() {
    if (theme === "light")
      setTheme("dark"), document.body.classList.replace("light", "dark");
    else {
      setTheme("light");
      if (document.body.classList.contains("dark"))
        document.body.classList.replace("dark", "light");
    }
  }

  const useStopW = useStopwatch();

  useEffect(() => {
    const timer = setInterval(() => {
      if (useStopW.states.isRunning) {
        useStopW.actions.setTime((prev) => prev + 1);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [useStopW.states.isRunning]);

  return (
    <themeContext.Provider value={theme}>
      <div className="flex justify-center">
        <div className="w-[calc(96*4px*3+32px)] flex flex-wrap justify-start items-center py-4 gap-4">
          <SettingsCard.Root>
            <SettingsCard.Dropdown
              options={[
                { icon: US, value: "english" },
                { icon: BR, value: "portuguese" },
                { icon: ES, value: "spanish" },
              ]}
              defaultOption={{ icon: US, value: "english" }}
              icon={PiGlobeFill}
            ></SettingsCard.Dropdown>
            <SettingsCard.Toggle
              icon={{ toggle: PiMoonFill, toggled: PiSunFill }}
              toggled={theme == "light" ? false : true}
              onClick={() => {
                handleTheme();
              }}
            />
          </SettingsCard.Root>
          <Card.Root variant="sm" title="calendar">
            <></>
          </Card.Root>
          <Card.Root variant="sm" title="clock">
            <div className="w-full h-full flex flex-col gap-4">
              <Clock.Time />
              <Divider direction="h" />
              <div className="w-full h-full flex flex-col items-center gap-4">
                <Clock.Weekday />
                <Clock.Date />
              </div>
            </div>
          </Card.Root>
          <Card.Root variant="sm" title="stopwatch">
            <div className="w-full h-full flex flex-col gap-4">
              <Stopwatch.Timer time={useStopW.states.time} />
              <Divider direction="h" />
              <Stopwatch.Watched savedTime={useStopW.states.savedTime} />
              <div className="flex justify-between">
                <Stopwatch.Action.Toggle
                  toggled={useStopW.states.isRunning ? true : false}
                  icon={{ toggle: PiPlayFill, toggled: PiPauseFill }}
                  variant="primary"
                  onClick={useStopW.actions.handleRun}
                />
                <Stopwatch.Action.Icon
                  icon={PiStopFill}
                  variant="danger"
                  onClick={useStopW.actions.handleStop}
                />
                <Stopwatch.Action.Icon
                  icon={PiCopyFill}
                  variant="secondary"
                  onClick={useStopW.actions.copyCurrentTime}
                />
                <Stopwatch.Action.Icon
                  icon={PiFloppyDiskFill}
                  variant="success"
                  onClick={useStopW.actions.saveTime}
                />
                <Stopwatch.Action.Icon
                  icon={PiBroomFill}
                  variant="danger"
                  onClick={useStopW.actions.clearSavedTime}
                />
              </div>
            </div>
          </Card.Root>
        </div>
      </div>
    </themeContext.Provider>
  );
}

export default App;
