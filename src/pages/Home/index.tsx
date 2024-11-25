import React from 'react'
import * as S from './styled';
import Poem from '../../containers/Poem';
import Counter from '../../containers/Counter';
import Slider from '../../containers/Slider';

const Home = () => {
  return (
    <S.HomeWrapper>

      <S.Background />

      <Poem />
      <Slider />
      <Counter />

      {/* {/* <Slider /> /* */}
    </S.HomeWrapper>
  )
}

export default Home