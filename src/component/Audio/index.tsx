import React, { useEffect, useRef } from 'react'

const Audio = () => {
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    ref.current?.play()
    ref.current?.play()
  }, [ref])

  return (
    <audio controls style={{ display: 'none' }} ref={ref}>
      <source src="https://github.com/RaphaelBRodrigues/valentine-gift/raw/refs/heads/master/src/assets/soundtrack.mp3" type="audio/mp3" />
    </audio>
  )
}

export default Audio