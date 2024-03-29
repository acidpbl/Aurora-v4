import { Clock } from ".";
import { Card } from "../Card";
import { Divider } from "../Divider";

export function ClockCard() {
  return (
    <Card.Root variant="sm" title="clock">
      <div className="size-full flex flex-col gap-4">
        <Clock.Time />
        <Divider direction="h" />
        <div className="size-full flex flex-col items-center gap-4">
          <Clock.Weekday />
          <Clock.Date />
        </div>
      </div>
    </Card.Root>
  );
}
