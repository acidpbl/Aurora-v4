import { useContext, useEffect, useState } from "react";
import { Calendar } from ".";
import { Card } from "../Card";
import { useCalendar } from "./useCalendar";
import { twMerge } from "tailwind-merge";
import {
  PiCaretLeftBold,
  PiCaretRightBold,
  PiCircleBold,
  PiCircleFill,
} from "react-icons/pi";
import ThemeContext from "../../ThemeContext";

type ThemeStyles = {
  month: string;
  currentMonth: string;
};

export function CalendarCard() {
  const [yearDisplay, setYearDisplay] = useState("");
  const [monthDisplay, setMonthDisplay] = useState("");
  const hook = useCalendar();

  useEffect(() => {
    const weekdays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const now = new Date();

    if (hook.states.nav !== 0) {
      now.setMonth(new Date().getMonth() + hook.states.nav);
    }

    const day = now.getDate();
    const month = now.getMonth();
    const year = now.getFullYear();

    let prevMonth = month - 1 < 0 ? 11 : month - 1;
    let nextMonth = month + 1 > 11 ? 0 : month + 1;

    const firstDayOfMonth = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    setYearDisplay(firstDayOfMonth.getFullYear().toString());

    hook.actions.setDateDisplay(
      `${now.toLocaleDateString("en-us", { month: "long" })} ${year}`
    );

    setMonthDisplay(now.toLocaleDateString("en-us", { month: "long" }));
    const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);

    const daysArr = [];

    for (
      let i = new Date(year, prevMonth + 1, 0).getDate(), z = 0;
      i >= paddingDays && z < paddingDays;
      i--, z++
    ) {
      const inactiveDayString = `${i - paddingDays}/${prevMonth + 1}/${year}`;

      daysArr.unshift({
        class: "inactive",
        value: i,
        isCurrentDay: false,
        date: inactiveDayString,
      });
    }
    for (let i = 1; i <= paddingDays + daysInMonth; i++) {
      const dayString = `${i - paddingDays}/${month + 1}/${year}`;

      if (i > paddingDays) {
        daysArr.push({
          class: "active",
          value: i - paddingDays,
          isCurrentDay: i - paddingDays === day && hook.states.nav === 0,
          date: dayString,
        });
      }
    }
    for (let i = 1; daysArr.length <= 41; i++) {
      const inactiveDayString = `${i}/${nextMonth + 1}/${year}`;

      daysArr.push({
        class: "inactive",
        value: i,
        isCurrentDay: false,
        date: inactiveDayString,
      });
    }
    hook.actions.setDays(daysArr);
  }, [hook.states.nav]);

  const theme = useContext(ThemeContext);

  const styles: ThemeStyles = {
    month: "text-neutral-800",
    currentMonth: "text-neutral-500",
    ...(theme === "light" && {
      month: "text-neutral-800",
      currentMonth: "text-violet-600",
    }),
    ...(theme === "dark" && {
      month: "text-neutral-200",
      currentMonth: "text-violet-400",
    }),
  };

  return (
    <Card.Root variant="sm" title="Calendar">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between pl-1">
          <div className="w-full flex gap-2">
            <Calendar.Button
              icon={PiCaretLeftBold}
              onClick={hook.actions.handlePrevMonth}
            />
            <div className="flex gap-1 items-center w-full">
              <span
                className={twMerge(
                  monthDisplay ===
                    new Date().toLocaleDateString("en-us", { month: "long" }) &&
                    yearDisplay == new Date().getFullYear().toString()
                    ? styles.currentMonth
                    : styles.month,
                  ""
                )}
              >
                {hook.states.dateDisplay}
              </span>
              <span className={twMerge("text-xs ", styles.currentMonth)}>
                {monthDisplay ===
                  new Date().toLocaleDateString("en-us", { month: "long" }) &&
                yearDisplay == new Date().getFullYear().toString()
                  ? "(current)"
                  : null}
              </span>
            </div>
            <Calendar.Button
              icon={
                monthDisplay ===
                  new Date().toLocaleDateString("en-us", { month: "long" }) &&
                yearDisplay == new Date().getFullYear().toString()
                  ? PiCircleFill
                  : PiCircleBold
              }
              onClick={() => hook.actions.setNav(0)}
            />
            <Calendar.Button
              icon={PiCaretRightBold}
              onClick={hook.actions.handleNextMonth}
            />
          </div>
        </div>
        <div className={twMerge("flex flex-col rounded overflow-hidden")}>
          <Calendar.Weekdays nav={hook.states.nav} />
          <Calendar.Days days={hook.states.days} />
        </div>
      </div>
    </Card.Root>
  );
}
