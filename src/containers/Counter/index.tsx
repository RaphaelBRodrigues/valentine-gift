import React from 'react'
import { useTimer } from '../../hooks/useTimer';
import * as S from './styled';

const Counter = () => {
  const timer = useTimer();

  return (
    <S.CounterWrapper>{timer}</S.CounterWrapper>
  )
}

export default Counter