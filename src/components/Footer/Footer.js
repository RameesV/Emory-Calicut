import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-3">
      <Container>
        <Row>
          <Col xs={12} md={6}>
            {/* Add your company name and copyright information here */}
            <p>&copy; {new Date().getFullYear()} Your Company Name</p>
          </Col>
          <Col xs={12} md={6} className="d-flex justify-content-end">
            {/* Add your social media links here */}
            <Nav>
              <Nav.Link href="#" className="text-white mx-2">
                <i className="fa fa-facebook" aria-hidden="true"></i>
              </Nav.Link>
              <Nav.Link href="#" className="text-white mx-2">
                <i className="fa fa-twitter" aria-hidden="true"></i>
              </Nav.Link>
              <Nav.Link href="#" className="text-white mx-2">
                <i className="fa fa-instagram" aria-hidden="true"></i>
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col xs={12}>
            <Nav className="justify-content-center">
              {/* Add your footer links here */}
              <Nav.Link >Home</Nav.Link>
              <Nav.Link >About Us</Nav.Link>
              <Nav.Link >Contact</Nav.Link>
              <Nav.Link >Privacy Policy</Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
