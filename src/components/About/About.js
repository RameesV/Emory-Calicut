import './About.scss'
import { Col, Container, Row } from 'react-bootstrap'
import founder1 from '../../assets/Images/founder1.jpg'
import founder2 from '../../assets/Images/founder2.jpg'
import bannerImg from '../../assets/Images/abt.png'
import MvvSection from './MvvSection';
import HeaderComponent from '../MiniComponents/HeaderComponent/HeaderComponent';
import g3 from '../../assets/Images/bgbg.jpg';


function About() {
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
                  <p className="mt-3">Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio
                    consectetur adipisicing.Nunc id ipsum fringilla, gravida felis vitae. lacinia id, sunt in
                    culpa quis lacinia. Lorem ipsum dolor, sit amet init elit. Eos,
                    debitis. Quas minima sunt natus tempore.</p>
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

      <section className="team" id="team">
        <div className="team py-5">
          <div className="container py-lg-5 AboutPageTeam">
            <div className="header-title">
              < HeaderComponent mainHeading={"Co-Founders"} subHeading={"Our Team"} />
            </div>
            <Row className="row team-row ">
              <Col lg={3} md={3} sm={12}></Col>
              <Col lg={3} md={3} sm={12} className="team-wrap">
                <div className="team-member text-center">
                  <div className="team-img">
                    <img src={founder1} alt="" className="radius-image" />
                    <div className="overlay-team">
                    </div>
                  </div>
                  <p className="team-title">Jabir Moidu E K</p>
                  <p>Founder</p>
                </div>
              </Col>

              <Col lg={3} md={3} sm={12} className="team-wrap">
                <div className="team-member text-center">
                  <div className="team-img">
                    <img src={founder2} alt="" className="radius-image" />
                    <div className="overlay-team">
                    </div>
                  </div>
                  <p className="team-title">Muhammedali KK</p>
                  <p>Founder</p>
                </div>
              </Col>
              <Col lg={3} md={3} sm={12}></Col>

            </Row>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About