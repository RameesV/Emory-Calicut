import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./MyCarousel.scss"
import Button from 'react-bootstrap/Button';

const CarouselFade = ({ data }) => {
  return (
    <Carousel fade controls={false} interval={25000}>
      {data.map((item) => (
        <Carousel.Item key={item.id}>
          <div className='slider-image-wrapper'>
            <img className='slider-image' src={item.src} alt="" />
          </div>
          <Carousel.Caption className='carousel-caption'>
            <h1>{item.headline}</h1>
            <p>{item.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFade;