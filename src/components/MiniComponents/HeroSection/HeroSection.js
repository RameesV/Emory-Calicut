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
                        <h3>{heroContent[1].title2}</h3>
                        <h6>{heroContent[2].title3}</h6>
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default HeroSection;
