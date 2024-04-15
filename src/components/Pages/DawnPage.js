import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function DawnPage() {
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