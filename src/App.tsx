import ThemeContext from "./ThemeContext";
import { ClockCard } from "./components/Clock/ClockCard";
import { StopwatchCard } from "./components/Stopwatch/StopwatchCard";
import { useTheme } from "./useTheme";
import { CalendarCard } from "./components/Calendar/CalendarCard";
import { TimerCard } from "./components/Timer/TimerCard";
import { WeatherCard } from "./components/Weather/WeatherCard";
import { CalculatorCard } from "./components/Calculator/CalculatorCard";
import { PomodoroCard } from "./components/Pomodoro/PomodoroCard";
import { SettingsCard } from "./components/SettingsCard/SettingsCard";
import { FooterCard } from "./components/Footer/FooterCard";
function App() {
  const themeHook = useTheme();

  if (themeHook.states.theme === "light") document.body.classList.add("light");

  return (
    <ThemeContext.Provider value={themeHook.states.theme}>
      <div className="flex justify-center">
        <div className="w-[calc(96*4px*3+32px)] flex flex-wrap justify-start items-center py-4 gap-4">
          <SettingsCard theme={themeHook} />
          <CalendarCard />
          <ClockCard />
          <WeatherCard />
          <StopwatchCard />
          <TimerCard />
          <CalculatorCard />
          <PomodoroCard />
          <FooterCard />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
