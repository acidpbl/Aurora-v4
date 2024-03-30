import { Calculator } from "./";

interface ButtonsProps {
  btnValues: string[][];
}

export function Buttons(props: ButtonsProps) {
  return (
    <div className="h-full w-11/12 grid grid-cols-4 grid-rows-5 gap-x-1 gap-y-1">
      {props.btnValues.flat().map((btn, i) => {
        return (
          <Calculator.Button btn={btn} key={i} value={btn} onClick={() => {}} />
        );
      })}
    </div>
  );
}
