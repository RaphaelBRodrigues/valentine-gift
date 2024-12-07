import React, { useEffect, useRef, useState } from 'react'
import images from './images.map.json';
import * as S from './styled';
import Polaroid, { PolaroidParams } from '../../component/Polaroid';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const PolaroidContainer = () => {
  const [loadedImages, setLoadedImages] = useState<PolaroidParams[]>([images[0]]);
  const carouselRef = useRef(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    let currentImageIndex = 1;

    const loadImageInterval = setInterval(() => {
      if (currentImageIndex < images.length) {
        setLoadedImages((loadedImages) => {
          return [...loadedImages, images[currentImageIndex]]
        })
        currentImageIndex++;
      }
    }, 1000)

    return () => {
      clearInterval(loadImageInterval);
    }
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      // console.log(carouselRef.current)
    }
  }, [carouselRef]);

  const responsive = {
    general: {
      breakpoint: { max: 9000, min: 0 },
      items: 1
    }
  };

  const handleChange = (params: any) => {
    console.log("PARAMAS ", params);
  }

  return (
    <S.PolaroidContainerWrapper>
      <Carousel
        shouldResetAutoplay={false}
        showDots={false}
        autoPlay={true}
        afterChange={handleChange}
        arrows={false}
        ref={carouselRef}
        autoPlaySpeed={4000}
        infinite={true}
        swipeable={true}
        pauseOnHover={true}
        draggable={false}
        responsive={responsive}
      >
        {images.map((image, index) => {
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