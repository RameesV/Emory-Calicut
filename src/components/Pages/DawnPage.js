import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function DawnPage() {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
    }, []); 

    return (
        <div className='d-flex justify-content-center'>
            <Container>
                Dawn Page
                <Link to='/'>Home</Link>
            </Container>
        </div>
    )
}

export default DawnPage