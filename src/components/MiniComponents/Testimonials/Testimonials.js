import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Testimonials.scss'

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'John Doe',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugit.',
            image: 'https://wp.w3layouts.com/digitaledu/wp-content/themes/digitaledu/assets/images/team2.jpg',
            role: 'student'
        },
        {
            id: 2,
            name: 'Tommy sakura',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugit.',
            image: 'https://wp.w3layouts.com/digitaledu/wp-content/themes/digitaledu/assets/images/team3.jpg',
            role: 'student'
        },
        {
            id: 3,
            name: 'Gloria smith',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugit.',
            image: 'https://wp.w3layouts.com/digitaledu/wp-content/themes/digitaledu/assets/images/team4.jpg',
            role: 'student'
        },
        {
            id: 4,
            name: 'John Black',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. VelitLorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugit.',
            image: 'https://wp.w3layouts.com/digitaledu/wp-content/themes/digitaledu/assets/images/team5.jpg',
            role: 'student'
        },
    ]
    return (
        <>
            <div class="header-title mb-md-5 mb-4 mt-4">
                <span class="sub-title">Testimonials</span>
                <h3 class="hny-title text-left">What People Say</h3>
            </div>
            <div className='testimonials-carousel mb-5'>
                <Carousel slide={true} controls={false} data-bs-theme="dark" interval={2000}>
                    {testimonials.map((item) => (<Carousel.Item>
                        <div className='testimonial-slider-wrapper mb-5'>
                            <div className="test-item">
                                <div className="item">
                                    <div className="testimonial-content">
                                        <div className="testimonial">
                                            <blockquote>
                                                <q>{item.description}</q>
                                            </blockquote>
                                        </div>
                                        <div className="testi-des">
                                            <div className="test-img">
                                                <img src={item.image} className="img-fluid" alt="client-img" />
                                            </div>
                                            <div className="peopl align-self">
                                                <h4>{item.name}</h4>
                                                <p className="indentity">{item.role} </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                    ))}
                </Carousel>
            </div>
        </>
    )
}

export default Testimonials