import React from 'react'
import * as S from './styled';

interface PolaroidParams {
  src: string;
  description: string;
  date: string
}

const Polaroid: React.FC<PolaroidParams> = ({
  src,
  description,
  date
}) => {
  return (
    <S.PolaroidWrapper>
      <S.PolaroidImage src={src} />
      <S.PolaroidDate>{date}</S.PolaroidDate>
      <S.PolaroidDescription>{description}</S.PolaroidDescription>
    </S.PolaroidWrapper>
  )
}

export default Polaroid