import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import '../CommonStyles.scss'

const Header = () => {
    return (
        <>
            {['sm'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-tertiary sticky-top h-55 navbar-glassy">
                    <Container className='navbar-container'>
                        <Navbar.Brand as={Link} to='/'>
                            <img className='brand-logo' src='https://sadectip.sirv.com/React%20Project%20Files/logo-black.png'  alt='loading...'/>
                            {/* Brand Logo */}
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                        <Navbar.Offcanvas
                            id={`offcanvasNavbar-expand-${expand}`}
                            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                            placement="end"
                        >
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                <img className='brand-logo' src='https://sadectip.sirv.com/React%20Project%20Files/logo-black.png'  alt='loading...'/>
                                </Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="justify-content-end flex-grow-1 pe-3">
                                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                                    <Nav.Link as={Link} to="about">About Us</Nav.Link>
                                    <NavDropdown
                                        title="Services"
                                        id={`offcanvasNavbarDropdown-expand-${expand}`}
                                    >
                                        <NavDropdown.Item>
                                            <Link className='text-decoration-none text-black' to="emory">Emory</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link className='text-decoration-none text-black' to="dawn">Dawn</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link className='text-decoration-none text-black' to="jasbro">Jasbro</Link>
                                        </NavDropdown.Item>
                                        <NavDropdown.Item>
                                            <Link className='text-decoration-none text-black' to="bSchool">B School</Link>
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link as={Link} to="contact-us">Contact Us</Nav.Link>
                                    <Nav.Link as={Link} to="gallery">Gallery</Nav.Link>
                                </Nav>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            ))}
        </>
    )
}

export default Header