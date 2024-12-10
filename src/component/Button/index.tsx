import React from 'react'
import * as S from './styled';

const Button: React.FC<{
  callback: () => void,
  children: React.ReactNode
}> = ({ callback, children }) => {
  return (
    <S.ButtonWrapper>
      <S.Button onClick={callback}>
        <a href="#"><span>{children}</span></a>
      </S.Button>
    </S.ButtonWrapper>
  )
}

export default Button