import React, { useEffect } from 'react'
import './About.scss'
import { Col, Container, Row } from 'react-bootstrap'
import bannerImg from '../../assets/Images/abt.png'
import MvvSection from './MvvSection';
import HeaderComponent from '../MiniComponents/HeaderComponent/HeaderComponent';
import g3 from '../../assets/Images/bgbg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';


// Team Section
import founder1 from '../../assets/Images/founder11.jpg';
import founder2 from '../../assets/Images/founder2.jpg';
import Irfan from '../../assets/Team/irfan.jpg';
import Shilpa from '../../assets/Team/shilpa.jpg';
import Nishana from '../../assets/Team/nishana.jpg';
import Farsana from '../../assets/Team/farsana.jpg';
import Muhammedali from '../../assets/Team/muhammadali.jpg';
import Muhsina from '../../assets/Team/Muhsina.jpg';
import Dilshana from '../../assets/Team/Dilashna.jpg';
import Raniya from '../../assets/Team/Raniya.jpg';
import Muneer from '../../assets/Team/Muneer.jpg';
import Adil from '../../assets/Team/Adil.jpeg';
import Arthana from '../../assets/Team/Arthana.jpeg';
import Bishara from '../../assets/Team/Bishara.jpeg';
import FathimaKC from '../../assets/Team/FathimaKC.jpeg';
import FidaFathimaPP from '../../assets/Team/FidaFathimaPP.jpeg';
import NasriyaMK from '../../assets/Team/NasriyaMK.jpeg';
import Rafna from '../../assets/Team/Rafna.jpeg';
import ShahanaSherinKK from '../../assets/Team/ShahanaSherinKK.jpeg';
import ShanaSherinKK from '../../assets/Team/ShanaSherinKK.jpeg';
import Soorya from '../../assets/Team/Soorya.jpeg';

const teachers = [
  { image: founder1, name: 'Dr. Jabir Moidu E K', institute: 'Founder & Teacher' },
  { image: Muhammedali, name: 'Muhammedali KK', institute: 'Founder & Teacher' },
  { image: Irfan, name: 'Muhammad Irfan', institute: 'Head of Department Retail Management' },
  { image: Muneer, name: 'Muneer M', institute: 'Faculty of Management' },
  { image: Shilpa, name: 'Shilpa Panoor', institute: 'Head of Department Hospital Administration' },
  { image: Nishana, name: 'Nishana AP', institute: 'Academic Counselor' },
  { image: Farsana, name: 'Farsana NK', institute: 'Academic Counselor' },
  { image: Muhsina, name: 'Muhsina VP', institute: 'Faculty in Hospital Administration' },
  { image: Dilshana, name: 'Dilshana Sherin', institute: 'Faculty in Hospital Administration' },
  { image: Raniya, name: 'Raniya A', institute: 'Office Administrator' },
  { image: Adil, name: 'Adil', institute: 'PRO' },
  { image: Arthana, name: 'Arthana', institute: 'Office Administrator' },
  { image: Bishara, name: 'Bishara', institute: 'MTTC CORDINATOR' },
  { image: FathimaKC, name: 'Fathima KC', institute: 'Office Administrator' },
  { image: FidaFathimaPP, name: 'Fida Fathima PP', institute: 'Office Administrator' },
  { image: NasriyaMK, name: 'Nasriya MK', institute: 'Office Administrator' },
  { image: Rafna, name: 'Rafna', institute: 'Academic Head Thalassery' },
  { image: ShahanaSherinKK, name: 'Shahana Sherin KK', institute: 'Office Administrator' },
  { image: ShanaSherinKK, name: 'Shana Sherin KK', institute: 'Department of Hospital Administration' },
  { image: Soorya, name: 'Soorya', institute: 'Branch Manager' },
]


function About() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
  }, []);


  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768, // Adjust breakpoint as needed
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='about-wrapper'>
      <div className="inner-banner mb-3">
        <div className='banner-title'>
          <h1>Emory</h1>
          <p>The greatest choice to enhance your skills</p>
        </div>

      </div>

      <Container>
        <section className="" id="about1">
          <div className="">
            <div className="py-lg-5 py-md-3 AboutPageAbout">
              <div className="row">
                <div className="col-lg-6 mb-lg-0">
                  <img src={bannerImg}
                    alt="" className="radius-image-full img-fluid" />
                </div>
                <div className="col-lg-6 pl-lg-5 ps-4">
                  < HeaderComponent className="mb-1" mainHeading={"Learn at Your Own Place"} subHeading={"About Us"} />
                  <p className="mt-3">20+ years of Experience and reputed professionals and their successful journey resulted in the establishment of emory educational institution. we aim at the experimental Learning of the students and the empowerment of rural education the programs provided at emory are plus one plus two degree and p g courses, pre primary teacher training course a part from the academic u.k accredited Montessori teachers training course apart from the Academic programs emory focuses on the morals and values being good Human. emory emphasis on the skill based and service oriented molding of the students.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Container>
      <section className="" id="about">
        <div className="py-lg-5 py-md-3 AboutPageWhyChooseUs">
          <img src={g3} alt="" className="why-choose-banner" />
          <Container>
            <div className="mb-4 pr-lg-5 pe-4">
              <div className="header-title mb-md-5 mb-4">
                < HeaderComponent mainHeading={"Educating Champions of a Just and Sustainable world"} subHeading={"Why Choose Us"} />
              </div>
            </div>
            <MvvSection />
          </Container>
        </div>
      </section>

      {/* Keep the Co-Founders Section */}
      <section>
        <Container className="d-flex justify-content-center">
          < HeaderComponent mainHeading={"FOUNDERS"} subHeading={"Our"} />
        </Container>

        {/* Founders section */}
        <Container>
          <Row className="cards">
            <Col className="card">
              <img src={founder1} alt="Founder" />
              <div className="card-content">
                <h3>Dr. Jabir Moidu E K</h3>
                <p>Founder</p>
                <div className="social-links">
                  <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="#"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                </div>
              </div>
            </Col>

            <Col className="card">
              <img src={founder2} alt="Founder" />
              <div className="card-content">
                <h3>Muhammedali KK</h3>
                <p>Founder</p>
                <div className="social-links">
                  <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
                  <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                  <a href="#"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
                </div>
              </div>
            </Col>
          </Row>
        </Container >
      </section>

      <section className='mt-5'>
        <Container className="d-flex justify-content-center mt-5">
          < HeaderComponent mainHeading={"CORE TEAM"} subHeading={"OUR"} />
        </Container>
        <div className='row gap-3 align-items-center justify-content-center'>
            {teachers.map((teacher) => (
              <div className='main col-lg-3 col-md-4 col-sm-12' key={teacher.name}> 
                <div className="profile-card">
                  <div className="img">
                    <img src={teacher.image} />
                  </div>
                  <div className="caption">
                    <h3>{teacher.name}</h3>
                    <p>{teacher.institute}</p>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </section >
    </div>
  )
}

export default About