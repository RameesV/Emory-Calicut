
import React,{useEffect} from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import HeroSection from '../MiniComponents/HeroSection/HeroSection'
import image from '../../assets/Images/banner2.jpg'
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
            "title": "PG diploma in hospital administration and healthcare management",
            "description": "Gain the skills and knowledge to excel in the healthcare management field.",
            "pageLink": "/about",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "diploma in hospital administration and healthcare management",
            "description": "A shorter program focused on the essentials of healthcare administration.",
            "pageLink": "/about",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "Montessori teacher training course",
            "description": "Become a qualified Montessori teacher and nurture young minds.",
            "pageLink": "/about",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "DIPLOMA IN HOTEL MANAGEMENT AND CATERING TECHNOLOGY",
            "description": "Prepare for a career in the hospitality industry.",
            "pageLink": "/about",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "CERTIFICATION COURSE BEUTY AND BRIDAL MAKEUP",
            "description": "Learn the art of bridal makeup and enhance your skills.",
            "pageLink": "/about",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
        {
            "title": "CERTIFICATION COURSE IN BEUTY AND COSMETOLOGY",
            "description": "Expand your knowledge and expertise in the beauty industry.",
            "pageLink": "/about",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        }
    ]
    return (
        <div className=''>
            <HeroSection heroContent={data} />
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