import React from 'react'
import { useTimer } from '../../hooks/useTimer';
import * as S from './styled';

const Counter = () => {
  const timer = useTimer();

  return (
    <S.CounterWrapper>
      Sou grato por todos os {timer} que tive <br /> a honra de passar ao seu lado.
    </S.CounterWrapper>
  )
}

export default Counter