import React, { useRef } from 'react';
import './About.scss'
import Button from 'react-bootstrap/Button'
import { Col, Container, Row } from 'react-bootstrap'
import BgImg from '../../assets/Images/bg 2.png'
import MvvSection from './MvvSection';

function About() {
  const aboutData = [
    {
      title: "Our Mission",
      description: "Emory focuses on service through knowledge and to inspire curiosity and discovery for success in a rapidly changing world"
    },
    {
      title: "Vision",
      description: " To educate young minds and foster ethical, social and moral values through holistic learning and groom them into responsible global citizens."
    },
    {
      title: "Integrity",
      description: "We act with integrity and honesty in accordance with the highest academic, professional and ethical standards."
    },
    {
      title: "Respect",
      description: "We respect and honor the dignity of each person, embrace civil discourse and foster a diverse and inclusive community."
    },
    {
      title: "Responsibility",
      description: "We act responsibly and we are accountable for our decisions, actions and their consequences"
    },
    {
      title: "Discovery",
      description: "We seek and create new knowledge understanding and foster creativity and innovation for the benefit of our communities, societies and the environmentev"
    },
    {
      title: "Excellence",
      description: "We strive for excellence in all our endeavors as individuals, an institution and a leader in higher education."
    },
    {
      title: "Community",
      description: "We work together for the betterment of our institution, the university we affiliated, the communities we serve and the world."
    }
  ];



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
                <div className="col-lg-6 mb-lg-0 mb-md-5 mb-4">
                  <img src="https://wp.w3layouts.com/digitaledu/wp-content/themes/digitaledu/assets/images/ab1.jpg"
                    alt="" className="radius-image-full img-fluid" />
                </div>
                <div className="col-lg-6 pl-lg-5 ps-4">
                  <div className="header-title">
                    <span className="sub-title">About Us</span>
                    <h3 className="hny-title text-left">Learn at Your Own Place</h3>
                  </div>
                  <p className="mt-3">Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                    consectetur adipisicing.Nunc id ipsum fringilla, gravida felis vitae. lacinia id, sunt in
                    culpa quis lacinia. Lorem ipsum dolor, sit amet init elit. Eos,
                    debitis. Quas minima sunt natus tempore.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="" id="about">
          <div className="py-lg-5 py-md-3 AboutPageWhyChooseUs">
            <img src="https://wp.w3layouts.com/digitaledu/wp-content/themes/digitaledu/assets/images/ab1.jpg"
              alt="" className="why-choose-banner" />
            <div className="mb-4 pr-lg-5 pe-4">
              <div className="header-title mb-md-5 mb-4">
                <span className="sub-title">Why Choose Us</span>
                <h3 className="hny-title text-left">
                  Educating Champions of a Just and Sustainable world
                </h3>
              </div>
            </div>
            <MvvSection />
          </div>
        </section>

        <section className="team" id="team">
          <div className="team py-5">
            <div className="container py-lg-5 AboutPageTeam">
              <div className="header-title mb-4">
                <span className="sub-title">Our Team</span>
                <h3 className="hny-title text-left">Co Founders</h3>
              </div>
              <div className="row team-row ">
                <div className="col-lg-3 col-6 team-wrap mt-lg-5 mt-4">
                  <div className="team-member text-center">
                    <div className="team-img">
                      <img src="https://wp.w3layouts.com/digitaledu/wp-content/themes/digitaledu/assets/images/team1.jpg" alt="" className="radius-image" />
                      <div className="overlay-team">
                      </div>
                    </div>
                    <p className="team-title">
                      Daniel jacobs</p>
                    <p>Instructor</p>
                  </div>
                </div>

                <div className="col-lg-3 col-6 team-wrap mt-lg-5 mt-4">
                  <div className="team-member text-center">
                    <div className="team-img">
                      <img src="https://wp.w3layouts.com/digitaledu/wp-content/themes/digitaledu/assets/images/team3.jpg" alt="" className="radius-image" />
                      <div className="overlay-team">
                      </div>
                    </div>
                    <p className="team-title">
                      Claire Daniel</p>
                    <p>Instructor</p>
                  </div>
                </div>
              </div>
            </div>
          </div></section>
      </Container>
    </div>
  )
}

export default About