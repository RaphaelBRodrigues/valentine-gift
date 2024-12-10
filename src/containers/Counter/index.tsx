import React, { useEffect, useMemo, useState } from 'react'
import { useTimer } from '../../hooks/useTimer';
import * as S from './styled';


const Counter = () => {
  const {
    days,
    seconds
  } = useTimer();
  const [text, setText] = useState("");
  const [isFinalText, setFinalText] = useState(false);
  const draft = useMemo(() => {
    return `
    Há ${days} dias|||||||,|| eu achava que seria o homem mais feliz do mundo ao seu lado. ||||||||||||| Hoje eu tenho certeza.
    __
    Te amo meu amor|||||||,|| e sou grato por cada um dos ${seconds} segundos que passamos juntos.
    __
    Por Raphael.
    `
  }, [days])


  useEffect(() => {
    let currentLetterIndex = 0;

    const interval = setInterval(() => {
      currentLetterIndex++;
      const currentLetter = draft[currentLetterIndex];

      if (draft.length > currentLetterIndex) {
        if (currentLetter !== "|") {
          setText((currentText) => {
            if (currentLetter === "_") {
              return currentText + "<br />"
            }

            return currentText + currentLetter;
          });
        }
      } else {
        setFinalText(true)
      }
    }, 150);

    return () => {
      console.log("ue")
      clearInterval(interval);
    }
  }, []);

  return (
    <S.CounterWrapper>
      {seconds}
      {isFinalText ? <>
        <div>
          Há {days} dias, eu achava que seria o homem mais feliz do mundo ao seu lado. Hoje eu tenho certeza.
          <br /> <br />
          Te amo meu amor, e sou grato por cada um dos {seconds} segundos que passamos juntos.
          <br /><br />
          Por Raphael.
        </div>
      </> : <div dangerouslySetInnerHTML={{ __html: text }}></div>}
    </S.CounterWrapper>
  )
}

export default Counter