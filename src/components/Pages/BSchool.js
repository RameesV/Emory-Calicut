
import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HeroSection from '../MiniComponents/HeroSection/HeroSection'
import image from '../../assets/Images/banner3.jpg'
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

function BSchool() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
    }, []);

    const data = [{
        id: 1,
        title1: "Emory B School",
    },
    {
        id: 2,
        title2: "The Emory Business School",
    },
    {
        id: 3,
        title3: ""
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
        },
        {
            "title": "MBA Entrepreneurship",
            "description": "A program focused on building and managing successful businesses.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( MBA Entrepreneurship )",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "MBA Retail Management",
            "description": "A specialized degree for managing retail businesses and operations.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( MBA Retail Management )",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "MBA Healthcare Management",
            "description": "A business degree focused on managing healthcare organizations.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( MBA Healthcare Management )",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "UG & PG Courses",
            "description": "",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( UG & PG Courses )",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "Logistics & Supply Chain Management",
            "description": "Efficient flow of goods from origin to consumer.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( Logistics & Supply Chain Management )",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "Fashion Designing",
            "description": "Creating stylish clothing and accessories through design, pattern-making, and material selection.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( Fashion Designing )",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "Diploma in Event Management",
            "description": "A course for planning and executing successful events.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( Diploma in Event Management )",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "Diploma in Automation",
            "description": "A technical program focusing on automated systems and processes.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( Diploma in Automation )",
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

export default BSchool