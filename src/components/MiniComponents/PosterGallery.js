import React from 'react'
import { Row, Col } from 'react-bootstrap'

function PosterGallery({instaImage}) {
    return (
        <div>
            <Row>
                {instaImage.map((item) => (
                    <Col lg={4} md={4} sm={12} key={item.id}>
                        <img className='posters w-100 p-1' src={item.src} alt={item.alt} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default PosterGallery