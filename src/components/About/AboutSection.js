import "./About.scss"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
const AboutSection = () => {
    return (
        <>
            <section className="about-us" id="about">

                {/* <Row>
                    <Col className="about-us-content" xs={12} sm={6} md={6} >
                        <h3>About Us</h3>

                        <p>
                            Education in taking a new sense of direction
                            and Perception. EMORY Educational institution
                            impact the new mode of quality education of
                            the aspiring students. the 20+ years of
                            Experience and reputed professionals and
                            their successful journey resulted in the
                            establishment of emory educational institution.
                            we aim at the experimental Learning of the
                            students and the empowerment of rural
                            education the programs provided at emory
                                are plus one plus two degree and p g courses,
                                pre primary teacher training course a part
                                from the academic u.k accredited Montessori
                                teachers training course apart from the
                                Academic programs emory focuses on the
                                morals and values being good Human. emory
                                emphasis on the skill based and service
                                oriented molding of the students.
                        </p>
                    </Col>
                    
                </Row> */}
            </section>

            <div className="content-1 py-5">
                <div className="container py-md-5 HomePageAbout">
                    <Row className="row content-1-grids">
                        <Col xs={12} md={6} lg={6} className="content-1-left forms-25-info">
                            <div className="header-title">
                                <span className="sub-title">About Us</span>
                                <h3 className="hny-title">Learn at Your Own Place</h3>

                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6} className="content-1-right">
                            <p className="">
                                <span className="font-weight-bold">Education</span> in taking a new sense of direction
                                and Perception. EMORY Educational institution
                                impact the new mode of quality education of
                                the aspiring students. the 20+ years of
                                Experience and reputed professionals and
                                their successful journey resulted in the
                                establishment of emory educational institution.
                            </p>
                        </Col>
                        <Col xs={12} md={6} lg={6} className="pl-sm-5 content-1-left ">
                            <p className="">
                                we aim at the experimental Learning of the
                                students and the empowerment of rural
                                education the programs provided at emory
                                are plus one plus two degree and p g courses,
                                pre primary teacher training course a part
                                from the academic u.k accredited Montessori
                                teachers training course apart from the
                                Academic programs emory focuses on the
                                morals and values being good Human. emory
                                emphasis on the skill based and service
                                oriented molding of the students.
                            </p>
                            <Button className="card-link" variant="outline-dark" as={Link} to="about">Read more</Button>{' '}
                        </Col>
                        <Col xs={12} sm={6} md={6} className="about-us-image-wrapper">
                            <img className="about-us-image" src="https://sadectip.sirv.com/React%20Project%20Files/webeducation.png" />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default AboutSection