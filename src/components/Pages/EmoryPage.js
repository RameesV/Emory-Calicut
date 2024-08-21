import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HeroSection from '../MiniComponents/HeroSection/HeroSection'
import image from '../../assets/Images/hero2.jpg'
import MyCards from '../MiniComponents/Cards/MyCards'
import featuredImage from '../../assets/Images/Featured Courses.png'
import PosterGallery from '../MiniComponents/PosterGallery'
import "./PageStyles.scss"
import instaPost1 from '../../assets/InstaPost/1.jpg'
import instaPost2 from '../../assets/InstaPost/2.webp'
import instaPost3 from '../../assets/InstaPost/3.jpg'
import instaPost4 from '../../assets/InstaPost/4.webp'
import instaPost5 from '../../assets/InstaPost/5.webp'
import instaPost6 from '../../assets/InstaPost/6.webp'

function EmoryPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
    }, []);

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

    const Gallery = [
        {
            id: 1,
            src: instaPost1,
            alt: "poster"
        },
        {
            id: 2,
            src: instaPost2,
            alt: "poster"
        },
        {
            id: 3,
            src: instaPost3,
            alt: "poster"
        },
        {
            id: 4,
            src: instaPost4,
            alt: "poster"
        },
        {
            id: 5,
            src: instaPost5,
            alt: "poster"
        },
        {
            id: 6,
            src: instaPost6,
            alt: "poster"
        }
    ]

    const coursesData = [
        {
            "title": "PG Diploma in Hospital Administration and Healthcare Management",
            "description": "Gain the skills and knowledge to excel in the healthcare management field.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( PG Diploma in Hospital Administration and Healthcare Management )",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "Diploma in Hospital Administration and Healthcare Management",
            "description": "A shorter program focused on the essentials of healthcare administration.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( Diploma in Hospital Administration and Healthcare Management )",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "Diploma in Retail Management",
            "description": "A program for aspiring retail professionals, focusing on store operations and management.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( Diploma in Retail Management)",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "PG Diploma in Retail Management",
            "description": "A specialized program for aspiring retail professionals.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( PG Diploma in Retail Management )",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "Montessori Teaching Education",
            "description": "A specialized program focusing on Montessori teaching methods for early childhood education.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( Montessori Teaching Education )",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "Medical Coding",
            "description": "Assigning numerical codes to medical diagnoses and procedures.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( Medical Coding )",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        }
    ]
    return (
        <div className=''>
            <HeroSection heroContent={data} heroBg={image} />
            <Container>
                <div className='posters-wrapper'>
                    <h1 className='poster-title'>Latest Updates</h1>
                    <PosterGallery instaImage={Gallery} />

                    <div className='course-section mt-5'>
                        <div className='course-title-card'>
                            <h1 className='poster-title'>Our Courses</h1>
                        </div>

                        <div className='featured-courses mt-4'>
                            <Row>
                                {coursesData.map((course, index) => (
                                    <Col xs={6} md={4} lg={4} className='col' key={index}>
                                        <MyCards
                                            className="cards-home-page"
                                            title={course.title}
                                            description={course.description || ''} // Handle potential missing description
                                            pageLink={course.pageLink}
                                            src={course.src}
                                            buttonName={course.buttonName}
                                        />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default EmoryPage