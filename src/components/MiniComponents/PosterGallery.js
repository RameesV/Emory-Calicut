import React from 'react'
import Slider from "react-slick";

function PosterGallery({ instaImage }) {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        dots: true,
        arrows: true,
        // fade: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 3000,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        swipeToSlide: true,
        // cssEase: "linear",
        responsive: [
            {
                breakpoint: 768, // Adjust breakpoint as needed
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings} className='mb-5'>
            {instaImage.map((item) => (
                <img src={item.src} alt={item.alt} className="gallery-slider-img"  />
            ))}
        </Slider>
    );
}

export default PosterGallery