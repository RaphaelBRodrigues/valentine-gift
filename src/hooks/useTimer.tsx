import { useCallback, useEffect, useState } from "react"

export const useTimer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hour, setHours] = useState(0);
  const [days, setDays] = useState(0);
  const [weeks, setWeeks] = useState(0);
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);

  const updateTimer = useCallback(() => {
    const initialDate = new Date("2023-12-14 21:00:00");
    const currentDate = new Date("2024-12-12 21:00:00");

    const totalSeconds = Math.round(Math.abs((currentDate.getTime() - initialDate.getTime()) / 1000));

    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = Math.floor(totalWeeks / 4);
    const totalYears = Math.floor(totalMonths / 12);

    const remainingMonths = (totalYears * 12 * 4 * 7 * 24 * 60 * 60 * 1000);


    setSeconds(totalSeconds);
    setMinutes(totalMinutes);
    setHours(totalHours);
    setDays(totalDays);
    setWeeks(totalWeeks);
    setMonths(totalMonths);
    setYears(totalYears); // ok
  }, [])

  useEffect(() => {
    setInterval(() => {
      updateTimer();
    }, 1000);
  })

  return {
    seconds,
    minutes,
    hour,
    days,
    weeks,
    months,
    years
  };
}