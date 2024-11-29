import React from 'react'
import { useTimer } from '../../hooks/useTimer';
import * as S from './styled';

const Counter = () => {
  const {
    seconds
  } = useTimer();
  console.log(useTimer())
  return (
    <S.CounterWrapper>
      {/* Sou grato por todos os {seconds} que tive <br /> a honra de passar ao seu lado. */}¨
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque debitis dicta voluptatem incidunt
    </S.CounterWrapper>
  )
}

export default Counter