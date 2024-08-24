import React, { useEffect } from 'react'
import CarouselFade from '../Carousel/MyCarousel'
import AboutSection from '../About/AboutSection'
import './Home.scss'
import { Container, Row, Col } from 'react-bootstrap'
import Service from '../MiniComponents/Service/Service'
import MyCards from '../MiniComponents/Cards/MyCards'
import Counter from '../MiniComponents/Counter/Counter'
import Testimonials from '../MiniComponents/Testimonials/Testimonials'
import Hero1 from '../../assets/Images/c6.jpg'
import Hero3 from '../../assets/Images/c5.jpg'
import Hero4 from '../../assets/Images/c4.jpg'
import featuredImage from '../../assets/Images/Featured Courses.png'
import HeaderComponent from '../MiniComponents/HeaderComponent/HeaderComponent'

function Home() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
    }, []);
    const carouselHomePage = [
        {
            id: 1,
            src: Hero1,
            headline: "Explore a world of opportunities.",
            description: "Discover a diverse range of courses and institutions across India and abroad."
        },
        {
            id: 2,
            src: Hero3,
            headline: "Personalized Pathways to Success",
            description: "Tailor your education with our personalized guidance and expert counseling.",
        },
        {
            id: 3,
            src: Hero4,
            headline: "Achieve your dreams with us",
            description: "Benefit from our internationally accredited programs and partnerships.",
        },

    ]

    const coursesData = [
        {
            "title": "Diploma in Hospital Administration and Healthcare Management",
            "description": "A shorter program focused on the essentials of healthcare administration.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( Diploma in Hospital Administration and Healthcare Management )",
            "src": featuredImage,
            "buttonName": "Enquire Now"
        },
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
            "title": "B.Ed",
            "description": "A two-year teacher education program for aspiring educators.",
            "pageLink": "https://wa.me/+917306058474?text=Hey, I would like to know more about the course ( B.Ed )",
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
            </Container>

            {/* <MvvSection /> */}
            <section className='service-section'>
                <div className='service-overlay'></div>
                <h2>Our Services</h2>
                <p className='service-description-main'>Emory offers a comprehensive suite of educational programs, from foundational learning at Dawn to specialized business training at B School. Jasbro complements these academic offerings by providing expert career guidance and placement services
                </p>
                <Container>
                    <Service />
                </Container>
            </section>
            <section className='counter-section mt-5 mb-5'>
                <Counter />
            </section>
            <section className='testimonials-section'>
                {/* <Container> */}
                    <Testimonials />
                {/* </Container> */}
            </section>
            {/* <section className='map-location-section'>
                place map here
            </section> */}
            <section className='featured-courses-section mt-5'>
                <Container>
                    <div>
                        <HeaderComponent mainHeading={"Featured Courses"} subHeading={"READY TO LEARN?"} />
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