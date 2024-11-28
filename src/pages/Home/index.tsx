import React, { useEffect, useRef, useState } from 'react'
import * as S from './styled';
import Poem from '../../containers/Poem';
import Counter from '../../containers/Counter';
import Slider from '../../containers/Slider';
import Audio from '../../component/Audio';

const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const [userAlreadyInteract, setUserAlreadyInteract] = useState(false);

  useEffect(() => {
    if (homeRef.current) {
      homeRef.current?.addEventListener("click", () => {
        setUserAlreadyInteract(true);
      })
    }
  }, [homeRef])

  return (
    <S.HomeWrapper ref={homeRef}>

      <S.Background />
      {userAlreadyInteract && <Audio />}
      <Poem />
      <Slider />
      <Counter />

      {/* {/* <Slider /> /* */}
    </S.HomeWrapper>
  )
}

export default Home