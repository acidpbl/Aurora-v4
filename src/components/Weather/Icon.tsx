import { ImgHTMLAttributes } from "react";

export interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  icon: string;
}

export function Icon({ icon }: IconProps) {
  return (
    <img
      src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
      alt=""
      className="h-20 -mt-1"
    />
  );
}
