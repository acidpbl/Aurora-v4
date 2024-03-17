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

  let btnStyle, dropStyle, itemStyle: string;

  if (theme === "light") {
    btnStyle =
      "bg-violet-300 text-violet-200 hover: bg-violet-400 hover:text-violet-100";
    dropStyle = "bg-violet-300";
    itemStyle = "bg-violet-300 hover:bg-violet-500";
  }
  if (theme === "dark") {
    btnStyle =
      "bg-neutral-800 text-violet-600 hover: bg-neutral-900 hover:text-violet-900";
    dropStyle = "bg-neutral-800";
    itemStyle = "bg-neutral-800 hover:bg-violet-500";
  }

  return (
    <>
      <button
        onClick={handleToggle}
        className={twMerge(btnStyle, "p-1 rounded transition-all ease-linear")}
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
            "absolute flex flex-col mt-6 rounded -ml-2",
            dropStyle
          )}
        >
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelectOption(option)}
              className={twMerge("p-1 rounded", itemStyle)}
            >
              {<option.icon className="w-8 rounded" />}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
