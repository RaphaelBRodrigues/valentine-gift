import React, { useEffect, useState } from 'react'
import images from './images.map.json';
import * as S from './styled';
import Polaroid from '../../component/Polaroid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PolaroidContainer = () => {
  const responsive = {
    general: {
      breakpoint: { max: 9000, min: 0 },
      items: 1
    }
  };

  return (
    <S.PolaroidContainerWrapper>
      <Carousel
        showDots={false}
        autoPlay={true}
        arrows={false}
        autoPlaySpeed={4000}
        infinite={true}
        swipeable={true}
        draggable={false}
        responsive={responsive}
      >
        {images.map((image) => {
          return <Polaroid
            key={image.src}
            date={image.date}
            description={image.description}
            src={`${process.env.REACT_APP_ASSETS_URL}/personal_photos/${image.src}`}
          />
        })}
      </Carousel>

    </S.PolaroidContainerWrapper>
  )
}

export default PolaroidContainer