import React from "react";
import Slider from "react-slick";
import "./SlickSlider.scss";

export default function SimpleSlider({ testimonials }) {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        // centerPadding: "60px",
        dots: true,
        arrows: true,
        // fade: true,
        slidesToShow: 2,
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
                    dots: false,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {testimonials.map(testimonial => (
                <div className="test-item" key={testimonial.id}>
                    <div className="item">
                        <div className="testimonial-content">
                            <div className="testimonial">
                                <blockquote>
                                    <q>{testimonial.description}</q>
                                </blockquote>
                            </div>
                            <div className="testi-des">
                                <div className="test-img">
                                    <img src={testimonial.image} className="img-fluid" alt="client-img" />
                                </div>
                                <div className="peopl align-self">
                                    <h4>{testimonial.name}</h4>
                                    <p className="indentity">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    );
}