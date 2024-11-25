import { useState } from "react"

export const useTimer = () => {
  const [timer, setTimer] = useState();

  return timer
}