import React, { useEffect, useRef, useState } from 'react'
import * as S from './styled';
import Counter from '../../containers/Counter';
import Slider from 'react-slick';
import Audio from '../../component/Audio';
import PolaroidContainer from '../../containers/PolaroidContainer';
import Button from '../../component/Button';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Home = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const [userAlreadyInteract, setUserAlreadyInteract] = useState(false);
  const [start, setStart] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const sliderRef = useRef<any>(null);

  useEffect(() => {
    if (homeRef.current) {
      homeRef.current?.addEventListener("click", () => {
        setUserAlreadyInteract(true);
      })
    }
  }, [homeRef]);

  const goNext = () => {
    if (sliderRef.current) {
      setTimeout(() => {
        sliderRef.current.slickNext()!;
      }, 700);
    }
  }

  return (
    <S.HomeWrapper ref={homeRef}>
      <S.Background />
      {userAlreadyInteract && <Audio />}
      <Slider
        ref={sliderRef}
        className='upper'
        dots={false}
        arrows={false}
        draggable={false}
        autoplaySpeed={4000}
        swipe={false}
        speed={1000}
        slidesToShow={1}
        slidesToScroll={1}
        initialSlide={initialSlide}
        lazyLoad={"ondemand"}
        pauseOnHover={true}
      >
        <Button callback={() => {
          goNext();
        }}>Começar</Button>
        <>
          <PolaroidContainer />
          <Counter />
        </>
      </Slider>

    </S.HomeWrapper>
  )
}

export default Home