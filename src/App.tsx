import { PiGlobeFill, PiMoonFill, PiSunFill } from "react-icons/pi";
import { Settings } from "./components/SettingsCard";
import ThemeContext from "./ThemeContext";
import { BR, ES, US } from "country-flag-icons/react/1x1";
import { ClockCard } from "./components/Clock/ClockCard";
import { StopwatchCard } from "./components/Stopwatch/StopwatchCard";
import { useTheme } from "./useTheme";
import { CalendarCard } from "./components/Calendar/CalendarCard";
import { TimerCard } from "./components/Timer/TimerCard";
import { WeatherCard } from "./components/Weather/WeatherCard";
import { CalculatorCard } from "./components/Calculator/CalculatorCard";
import { PomodoroCard } from "./components/Pomodoro/PomodoroCard";
function App() {
  const themeHook = useTheme();

  if (themeHook.states.theme === "light") document.body.classList.add("light");

  return (
    <ThemeContext.Provider value={themeHook.states.theme}>
      <div className="flex justify-center">
        <div className="w-[calc(96*4px*3+32px)] flex flex-wrap justify-start items-center pt-4 pb-20 gap-4">
          <Settings.Root>
            <Settings.Dropdown
              options={[
                { icon: US, value: "english" },
                { icon: BR, value: "portuguese" },
                { icon: ES, value: "spanish" },
              ]}
              defaultOption={{ icon: US, value: "english" }}
              icon={PiGlobeFill}
            ></Settings.Dropdown>
            <Settings.Toggle
              icon={{ toggle: PiMoonFill, toggled: PiSunFill }}
              toggled={themeHook.states.theme == "light" ? false : true}
              onClick={() => {
                themeHook.actions.handleTheme();
              }}
            />
          </Settings.Root>
          <CalendarCard />
          <ClockCard />
          <WeatherCard />
          <StopwatchCard />
          <TimerCard />
          <CalculatorCard />
          <PomodoroCard />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
