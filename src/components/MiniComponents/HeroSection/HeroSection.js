import React from 'react';
import './HeroSection.scss';
import { Row, Col } from 'react-bootstrap';

function HeroSection({ heroContent, heroBg }) {
    return (
        <>
            <img className='hero-bg' src={heroBg} />
            <div className='hero-overlay'></div>
            <section className='hero-section'>
                <Row>
                    <Col className='hero-section-content'>
                        <h1>{heroContent[0].title1}</h1>
                        <h4>{heroContent[1].title2}</h4>
                        <h5>{heroContent[2].title3}</h5>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default HeroSection;
