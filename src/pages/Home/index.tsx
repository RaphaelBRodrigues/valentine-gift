import React from 'react'
import * as S from './styled';
import Poem from '../../containers/Poem';
import Counter from '../../containers/Counter';

const Home = () => {
  return (
    <S.HomeWrapper>

      <S.Background />
      <Poem />
      <Counter />

      {/* {/* <Slider /> /* */}
    </S.HomeWrapper>
  )
}

export default Home