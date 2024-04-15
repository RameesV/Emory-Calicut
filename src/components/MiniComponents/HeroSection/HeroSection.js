import React from 'react';
import './HeroSection.scss';
import { Row, Col } from 'react-bootstrap';

function HeroSection({ heroContent }) {
    return (
        <>
            <div className='hero-overlay'></div>
            <section className='hero-section'>
                <Row>
                    <Col className='hero-section-content'>
                        {heroContent.map((item) => (
                            <div key={item.id}>
                                <h1>{item.title1}</h1>
                                <h4>{item.title2}</h4>
                                <h5>{item.title3}</h5>
                            </div>
                        ))}
                    </Col>
                </Row>
            </section>
        </>
    );
}

export default HeroSection;
