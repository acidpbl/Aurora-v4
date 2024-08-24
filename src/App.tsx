import ThemeContext from "./ThemeContext";
import { ClockCard } from "./components/Clock/ClockCard";
import { StopwatchCard } from "./components/Stopwatch/StopwatchCard";
import { useTheme } from "./useTheme";
import { CalendarCard } from "./components/Calendar/CalendarCard";
import { TimerCard } from "./components/Timer/TimerCard";
import { WeatherCard } from "./components/Weather/WeatherCard";
import { SettingsCard } from "./components/SettingsCard/SettingsCard";
import { FooterCard } from "./components/Footer/FooterCard";
import { FavoritesCard } from "./components/Favorites/FavoritesCard";

function App() {
  const themeHook = useTheme();

  themeHook.states.theme === "light" && document.body.classList.add("light");

  return (
    <ThemeContext.Provider value={themeHook.states.theme}>
      <div className="flex flex-col py-4 px-4 lg:px-12 2xl:px-80 gap-4 select-none max-w-screen overflow-hidden font-poppins">
        <SettingsCard theme={themeHook} />
        <div className="lg:grid lg:grid-cols-3 lg:auto-rows-fr flex flex-col gap-4 items-center">
          <CalendarCard />
          <ClockCard />
          <WeatherCard />
          <StopwatchCard />
          <TimerCard />
          <FavoritesCard />
        </div>
        <FooterCard />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
