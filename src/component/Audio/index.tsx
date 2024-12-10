import React, { useEffect, useRef } from 'react'

const Audio = () => {
  const ref = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    ref.current?.play()
    ref.current?.play()
  }, [ref])

  return (
    <audio loop controls style={{ display: 'none' }} ref={ref}>
      <source src="https://github.com/RaphaelBRodrigues/valentine-gift/raw/refs/heads/master/src/assets/soundtrack.m4a" type="audio/m4a" />
    </audio>
  )
}

export default Audio