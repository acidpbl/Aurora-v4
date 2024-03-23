import { useState } from "react";

export function useCalendar() {
  const [nav, setNav] = useState(0);
  const [dateDisplay, setDateDisplay] = useState("");
  const [days, setDays] = useState<any>([]);

  function handleNextMonth() {
    setNav((prev) => prev + 1);
  }

  function handlePrevMonth() {
    setNav((prev) => prev - 1);
  }

  return {
    states: {
      days,
      nav,
      dateDisplay,
    },
    actions: {
      handleNextMonth,
      handlePrevMonth,
      setDateDisplay,
      setDays,
      setNav,
    },
  };
}
