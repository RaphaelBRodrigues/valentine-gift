import React, { useEffect, useState } from 'react'
import images from './images.map.json';
import * as S from './styled';
import Polaroid, { PolaroidParams } from '../../component/Polaroid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PolaroidContainer = () => {
  const [loadedImages, setLoadedImages] = useState<PolaroidParams[]>([images[0]]);

  useEffect(() => {
    let currentImageIndex = 1;
    const loadImageInterval = setInterval(() => {
      if (currentImageIndex <= images.length) {
        setLoadedImages((loadedImages) => {
          return [...loadedImages, images[currentImageIndex]]
        })
        currentImageIndex++;
      }
    }, 1000)

    return () => {
      clearInterval(loadImageInterval);
    }
  }, [])

  const responsive = {
    general: {
      breakpoint: { max: 9000, min: 0 },
      items: 1
    }
  };

  return (
    <S.PolaroidContainerWrapper>
      <Carousel
        shouldResetAutoplay={false}
        showDots={false}
        autoPlay={true}
        arrows={false}

        autoPlaySpeed={4000}
        infinite={true}
        swipeable={true}
        draggable={false}
        responsive={responsive}
      >
        {loadedImages.map((image) => {
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