import React from 'react'
import images from './images.map.json';
import * as S from './styled';
import Polaroid from '../../component/Polaroid';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
console.log(images)
const PolaroidContainer = () => {
  return (
    <S.PolaroidContainerWrapper className="slider-container">
      <Slider
        dots={false}
        autoplay
        autoplaySpeed={4000}
        infinite
        speed={2500}
        slidesToShow={1}
        arrows={false}
        initialSlide={0}
        lazyLoad={"anticipated"}
        pauseOnHover={true}
      >

        {images.map((image) => {
          return <Polaroid
            key={image.src}
            date={image.date}
            description={image.description}
            src={`${process.env.REACT_APP_ASSETS_URL}/personal_photos/${image.src}`}
          />
        })}
      </Slider>
    </S.PolaroidContainerWrapper >
  )
}

export default PolaroidContainer