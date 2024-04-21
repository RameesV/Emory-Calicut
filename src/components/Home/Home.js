import React from 'react'
import CarouselFade from '../Carousel/MyCarousel'
import AboutSection from '../About/AboutSection'
import './Home.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Service from '../MiniComponents/Service/Service'
import MyCards from '../MiniComponents/Cards/MyCards'
import Counter from '../MiniComponents/Counter/Counter'
import Testimonials from '../MiniComponents/Testimonials/Testimonials'
import Hero1 from '../../assets/Images/hero1.jpg'
import Hero3 from '../../assets/Images/hero3.jpg'
import Hero4 from '../../assets/Images/hero4.jpg'
import featuredImage from '../../assets/Images/Featured Courses.png'
import HeaderComponent from '../MiniComponents/HeaderComponent/HeaderComponent'

function Home() {
    const carouselHomePage = [
        {
            id: 1,
            src: Hero1
        },
        {
            id: 2,
            src: Hero3
        },
        {
            id: 3,
            src: Hero4
        },

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

    const mainHeading = "Featured Courses"
    const subHeading = "READY TO LEARN?"

    return (
        <div className='home-page'>

            <CarouselFade data={carouselHomePage} />
            <Container>
                <AboutSection />
                <section className='values-section mb-5 mt-5'>
                    <h1>Our Commitments</h1>
                    <Row>
                        <Col xs={6} md={4} lg={4} className='col'>
                            <MyCards className="cards-home-page"
                                title={'Our Mission'}
                                description={"Emory focuses on service through knowledge and to inspire curiosity and discovery for success in a rapidly changing world"}
                                pageLink={'/about'}
                                src={'https://sadectip.sirv.com/mision.jpg'}
                                buttonName={'Learn More'}

                            />
                        </Col>
                        <Col xs={6} md={4} lg={4} className='col'>
                            <MyCards className="cards-home-page"
                                title={'Our Vision'}
                                description={"To educate young minds and foster ethical, social and moral values through holistic learning and groom them into responsible global citizens."}
                                pageLink={'/about'}
                                src={'https://sadectip.sirv.com/vision.jpg'}
                                buttonName={'Learn More'}
                            />
                        </Col>
                        <Col xs={12} md={4} lg={4} className='col'>
                            <MyCards className="cards-home-page"
                                title={'Our Responsibility'}
                                description={"We act responsibly and we are accountable for our decisions, actions and their consequences"}
                                pageLink={'/about'}
                                src={'https://sadectip.sirv.com/responsibility.jpg'}
                                buttonName={'Learn More'}
                            />
                        </Col>
                    </Row>
                </section>
                {/* <MvvSection /> */}
                <section className='service-section'>
                    <div className='service-overlay'></div>
                    <h2>Our Services</h2>
                    <p className='service-description-main'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <Service />
                </section>
            </Container>
            <section className='counter-section mt-5 mb-5'>
                <Counter />
            </section>
            <section className='testimonials-section'>
                <Container>
                    <Testimonials />
                </Container>
            </section>
            {/* <section className='map-location-section'>
                place map here
            </section> */}
            <section className='featured-courses-section'>
                <Container>
                    <div>
                        <HeaderComponent mainHeading = {mainHeading} subHeading = {subHeading}/>
                    </div>
                    <div className='featured-courses'>
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
                </Container>
            </section>
        </div>
    )
}

export default Home