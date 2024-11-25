import { useCallback, useEffect, useState } from "react"

export const useTimer = () => {
  const [timer, setTimer] = useState(0);

  const updateTimer = useCallback(() => {
    const initialDate = new Date("2023-12-14 21:00:00");
    const currentDate = new Date();

    const seconds = Math.round(Math.abs((currentDate.getTime() - initialDate.getTime()) / 1000));

    setTimer(seconds);
  }, [])

  useEffect(() => {
    setInterval(() => {
      updateTimer();
    }, 1000);
  })

  return timer;
}