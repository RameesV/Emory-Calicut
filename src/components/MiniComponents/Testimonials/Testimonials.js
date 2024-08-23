import React from 'react'
import './Testimonials.scss';
import HeaderComponent from '../HeaderComponent/HeaderComponent';
import SlickSlider from '../SlickSlider/SlickSlider';
import dilshan from '../../../assets/Reviews/r1.jpg';
import nafiya from '../../../assets/Reviews/r2.jpg';
import asmina from '../../../assets/Reviews/r3.jpg';
import shameela from '../../../assets/Reviews/r4.jpg';
import sajva from '../../../assets/Reviews/r5.jpg';


function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: 'Dilshana Sherin',
            description: 'The Institute is well reputed and its teachers offer a commendable educational experience. Their commitment to providing clear, practical knowledge is evident, and their supportive approach greatly enhances the learning environment.',
            image: dilshan,
            role: 'Student'
        },
        {
            id: 2,
            name: 'Nafiya pk',
            description: 'I had the pleasure of being a student at Emory Institute, specifically in the hospital administration program, and I must say it was an exceptional experience. The overall atmosphere  which made learning and growth a truly enjoyable process',
            image: nafiya,
            role: 'Student'
        },
        {
            id: 3,
            name: 'Asmina',
            description: 'Emory institute is very reliable for professional course.They are giving such a good and hands on training.They especially provide job oriented training.Their way of teaching is good',
            image: asmina,
            role: 'Student'
        },
        {
            id: 4,
            name: 'Shameela',
            description: 'The teaching way of this institution is good.internship rate are also good. Facualty members of institution are also very well qualified and always helpful.',
            image: shameela,
            role: 'Student'
        },
        {
            id: 5,
            name: 'Sajva',
            description: 'The tutors are very knowledgeable and well-informed. They were really supportive throughout the course.',
            image: sajva,
            role: 'Student'
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