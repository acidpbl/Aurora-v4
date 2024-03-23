import { Weather } from ".";
import { Card } from "../Card";

export function WeatherCard() {
  return (
    <Card.Root variant="sm" title="Weather">
      <div className="px-4 w-full flex">
        <Weather.Input />
      </div>
      <div className="w-full flex flex-col h-full gap-4">
        <div className="w-full flex h-28 justify-around">
          <Card.MiniCard>
            <></>
          </Card.MiniCard>
          <Card.MiniCard>
            <></>
          </Card.MiniCard>
        </div>
        <div className="w-full flex h-28 justify-around">
          <Card.MiniCard>
            <></>
          </Card.MiniCard>
          <Card.MiniCard>
            <></>
          </Card.MiniCard>
        </div>
      </div>
    </Card.Root>
  );
}
