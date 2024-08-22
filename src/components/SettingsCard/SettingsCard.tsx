// import { US, BR, ES } from "country-flag-icons/react/1x1";
import { PiMoonFill, PiSunFill } from "react-icons/pi";
import { Settings } from ".";

interface SettingsCardProps {
  theme: {
    actions: {
      handleTheme: () => void;
    };
    states: {
      theme: string;
      themeCtx: string;
    };
  };
}

export function SettingsCard(props: SettingsCardProps) {
  return (
    <Settings.Root>
      {/* <Settings.Dropdown
        options={[
          { icon: US, value: "english" },
          { icon: BR, value: "portuguese" },
          { icon: ES, value: "spanish" },
        ]}
        defaultOption={{ icon: US, value: "english" }}
        icon={PiGlobeFill}
      /> */}
      <Settings.Toggle
        icon={{ toggle: PiMoonFill, toggled: PiSunFill }}
        toggled={props.theme.states.theme == "light" ? false : true}
        onClick={() => {
          props.theme.actions.handleTheme();
        }}
      />
    </Settings.Root>
  );
}
