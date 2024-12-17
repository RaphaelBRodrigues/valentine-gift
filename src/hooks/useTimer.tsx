import { useCallback, useEffect, useState } from "react"

const initialDate = new Date("2023-12-14 12:00:00");
const currentDate = new Date();
currentDate.setHours(12, 0, 0);

const initialSeconds = Math.round(Math.abs((currentDate.getTime() - initialDate.getTime()) / 1000));
const initialMinutes = Math.floor(initialSeconds / 60);
const initialHours = Math.floor(initialMinutes / 60);
const initialDays = Math.floor(initialHours / 24);

export const useTimer = () => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [hour, setHours] = useState(initialHours);
  const [days, setDays] = useState(initialDays - 1);
  const [weeks, setWeeks] = useState(0);
  const [months, setMonths] = useState(0);
  const [years, setYears] = useState(0);

  const updateTimer = useCallback(() => {
    const currentDate = new Date();
    currentDate.setHours(12, 0, 0);

    const totalSeconds = Math.round(Math.abs((currentDate.getTime() - initialDate.getTime()) / 1000));

    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    const totalWeeks = Math.floor(totalDays / 7);
    const totalMonths = Math.floor(totalWeeks / 4);
    const totalYears = Math.floor(totalMonths / 12);
    setSeconds(totalSeconds);
    setMinutes(totalMinutes);
    setHours(totalHours);
    setDays(totalDays - 1);
    setWeeks(totalWeeks);
    setMonths(totalMonths);
    setYears(totalYears); // ok
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      updateTimer();
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  }, [])

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