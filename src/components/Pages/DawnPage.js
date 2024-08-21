import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HeroSection from '../MiniComponents/HeroSection/HeroSection'
import image from '../../assets/Images/banner4.jpg'
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

function DawnPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
    }, []);

    const data = [{
        id: 1,
        title1: "DAWN",
    },
    {
        id: 2,
        title2: "School of Science and Commerce",
    },
    {
        id: 3,
        title3: "Kuttiady"
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
            "title": "+1, +2 Regular Courses",
            "description": "Regular Courses in Science, Commerce, and Humanities",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course (+1, +2 Regular Courses)",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "BOSSE",
            "description": "6 Month SSLC and Plus Two",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( BOSSE )",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "NIOS",
            "description": "6 Month SSLC and Plus Two",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( NIOS )",
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

export default DawnPage