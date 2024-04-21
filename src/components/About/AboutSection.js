import "./About.scss"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HeaderComponent from "../MiniComponents/HeaderComponent/HeaderComponent";
import { Link } from 'react-router-dom';
const AboutSection = () => {
    return (
        <>
            <div className="content-1 py-5">
                <div className="container py-md-5 HomePageAbout">
                    <Row className="row content-1-grids">
                        <Col xs={12} md={6} lg={6} className="content-1-left forms-25-info">
                            < HeaderComponent mainHeading={"Learn at Your Own Place"} subHeading={"About Us"} />
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
                            <Link className="card-link" smooth={true} to="about">Read more</Link>{' '}
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