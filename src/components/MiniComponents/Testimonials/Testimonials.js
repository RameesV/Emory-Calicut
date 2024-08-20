import React from 'react'
import './Testimonials.scss';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import SlickSlider from '../SlickSlider/SlickSlider';

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
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. VelitLorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugit. Lorem ipsum dolor ',
            image: 'https://wp.w3layouts.com/digitaledu/wp-content/themes/digitaledu/assets/images/team5.jpg',
            role: 'student'
        },
        {
            id: 4,
            name: 'John Black',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. VelitLorem ipsum dolor sit amet consectetur adipisicing elit. Velit, fugit. Lorem ipsum dolor ',
            image: 'https://wp.w3layouts.com/digitaledu/wp-content/themes/digitaledu/assets/images/team5.jpg',
            role: 'student'
        },
    ];

    const mainHeading = 'What our students say';
    const subHeading = 'Testimonials';

    return (
        <>
            <HeaderComponent mainHeading={mainHeading} subHeading={subHeading} />
            <SlickSlider testimonials={testimonials} />
        </>
    );
}

export default Testimonials;