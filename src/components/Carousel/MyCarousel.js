import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./MyCarousel.scss"
import Button from 'react-bootstrap/Button';

const CarouselFade = ({ data }) => {
  return (
    <Carousel fade controls={false} interval={2500}>
      {data.map((item) => (
        <Carousel.Item key={item.id}>
          <div className='slider-image-wrapper'>
            <img className='slider-image' src={item.src} alt="" />
          </div>
          <Carousel.Caption>
            {/* Add caption content here if needed */}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFade;