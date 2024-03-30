// import { useState } from "react";
import { Calculator } from ".";
import { Card } from "../Card";

export function CalculatorCard() {
  // const [calc, setCalc] = useState();

  const btnValues = [
    ["C", "+-", "%", "/"],
    ["7", "8", "9", "x"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="],
  ];

  return (
    <Card.Root variant="sm" title="calculator (not working)">
      <div className="size-full flex flex-col gap-2 items-center">
        <Calculator.Screen value={0} />
        <Calculator.Buttons btnValues={btnValues} />
      </div>
    </Card.Root>
  );
}
