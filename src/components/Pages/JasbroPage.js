import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function JasbroPage() {
    return (
        <div className='d-flex justify-content-center'>
            <Container>
                Jasbro Page
                <Link to='/'>Home</Link>
            </Container>
        </div>
    )
}

export default JasbroPage