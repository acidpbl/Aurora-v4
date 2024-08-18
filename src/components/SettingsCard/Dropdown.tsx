import { useContext, useState } from "react";
import { IconType } from "react-icons";
import { twMerge } from "tailwind-merge";
import themeContext from "../../ThemeContext";
import { FlagComponent } from "country-flag-icons/react/1x1";

interface DropdownOptionProps {
  icon: FlagComponent;
  value: string;
}

interface DropdownMenuProps {
  icon: IconType;
  options: DropdownOptionProps[];
  defaultOption?: DropdownOptionProps;
  onSelect?: (selectedOption: DropdownOptionProps) => void;
}

type ThemeStyles = {
  btn: string;
  drop: string;
  item: string;
};

export function DropdownMenu({
  icon: Icon,
  options,
  onSelect,
  defaultOption,
  ...props
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] =
    useState<DropdownOptionProps | null>(defaultOption || null);

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleSelectOption(option: DropdownOptionProps) {
    setSelectedOption(option);
    onSelect && onSelect(option);
    setIsOpen(false);
  }

  const theme = useContext(themeContext);

  const styles: ThemeStyles = {
    btn: "bg-neutral-300 text-neutral-200 hover:bg-neutral-400 hover:text-neutral-100",
    drop: "bg-neutral-300 border-neutral-100",
    item: "text-neutral-700",
    ...(theme === "light" && {
      btn: "bg-violet-400 text-neutral-200 hover:bg-violet-600 hover:text-violet-300",
      drop: "bg-violet-400 border-violet-600",
      item: "hover:bg-violet-500",
    }),
    ...(theme === "dark" && {
      btn: "bg-neutral-600 text-neutral-100 hover:bg-neutral-700 hover:text-neutral-400",
      drop: "bg-neutral-600 border-neutral-400",
      item: "hover:bg-neutral-800",
    }),
  };

  return (
    <>
      <button
        onClick={handleToggle}
        className={twMerge(
          styles.btn,
          "p-2 rounded transition-all ease-linear"
        )}
        {...props}
      >
        {selectedOption?.icon ? (
          <selectedOption.icon className="w-4 rounded" />
        ) : (
          <Icon />
        )}
      </button>
      {isOpen && (
        <ul
          className={twMerge(
            "absolute flex mt-9 -mr-1.5 rounded border ",
            styles.drop
          )}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelectOption(option)}
              className={twMerge(
                "p-2 rounded ease-linear transition-colors cursor-pointer",
                styles.item
              )}
            >
              {<option.icon className="w-6 rounded" />}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
