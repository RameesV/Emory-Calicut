import React from 'react'
import MyCards from '../Cards/MyCards'
import { Col, Row } from 'react-bootstrap'
import './Service.scss'
import ImgEmory from '../../../assets/Brands/Emory.jpg'
import ImgDawn from '../../../assets/Icons/DS.png'
import ImgJBrow from '../../../assets/Brands/Jasbro.jpg'
import ImgOther from '../../../assets/Brands/Bschool.jpg'

function Service() {
    const serviceData = [
        {
            id:1,
            src: ImgEmory,
            title: "Emory",
            subHeading: 'The best educational institution',
            description: "Emory focuses on service through knowledge and to inspire curiosity and discovery for success in a rapidly changing world",
            pageLink: '/emory',
            buttonName: 'Learn More'
        },
        {
            id:2,
            src: ImgDawn,
            title: "Dawn",
            subHeading: 'School of Science and Commerce',
            description: " To educate young minds and foster ethical, social and moral values through holistic learning and groom them into responsible global citizens.",
            pageLink: '/dawn',
            buttonName: 'Learn More'
        },
        {
            id:3,
            src: ImgJBrow,
            title: "Jasbro",
            subHeading: 'Consulting and Placement Services Across India and Abroad',
            description: "We act with integrity and honesty in accordance with the highest academic, professional and ethical standards.",
            pageLink: '/jasbro',
            buttonName: 'Learn More'
        },
        {
            id:4,
            src: ImgOther,
            title: "B School ",
            subHeading: 'The Emory Business School',
            description: "We respect and honor the dignity of each person, embrace civil discourse and foster a diverse and inclusive community.",
            pageLink: '/bSchool',
            buttonName: 'Learn More'
        }
    ];
    
    return (
        <div className='service-cards'>
            <Row>
                {serviceData.map((card, index) => (
                    <Col  key={card.id} lg={3} md={3} sm={6} xs={6} className='card-wrapper-col'>
                        <MyCards
                            title={card.title}
                            subHeading={card.subHeading}
                            src={card.src}
                            description={card.description}
                            pageLink={card.pageLink}
                            buttonName={card.buttonName}
                        />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default Service