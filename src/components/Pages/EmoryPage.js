import React from 'react'
import { Container } from 'react-bootstrap'
import HeroSection from '../MiniComponents/HeroSection/HeroSection'
import image from '../../assets/Images/banner2.jpg'
function EmoryPage() {
    const data = [{
        id: 1,
        title1: "Emory Educational Institution",
    },
    {
        id: 2,
        title2: "The best educational institution for",
    },
    {
        id: 3,
        title3: "Hospital Administration | PPTTC | Event Management | Bridal Makeup"
    },
    {
        id: 4,
        img: image
    }]
    return (
        <div className=''>
            <HeroSection heroContent={data} />
            <Container>
            </Container>
        </div>
    )
}

export default EmoryPage