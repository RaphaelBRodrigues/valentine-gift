import React from 'react'
import * as S from './styled';

export interface PolaroidParams {
  src: string;
  description: string;
  date: string;
  // active: boolean;
}

const Polaroid: React.FC<PolaroidParams> = ({
  src,
  // active,
  description,
  date
}) => {
  return (
    <S.PolaroidWrapper>
      <S.PolaroidImageWrapper>
        <S.PolaroidImage src={src} />
      </S.PolaroidImageWrapper>
      <S.PolaroidDate>{date}</S.PolaroidDate>
      <S.PolaroidDescription>{description}</S.PolaroidDescription>
    </S.PolaroidWrapper>
  )
}

export default Polaroid