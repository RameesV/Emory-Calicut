import Card from 'react-bootstrap/Card';
import './MyCards.scss'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const MyCards = ({ src, title, description, pageLink, subHeading, buttonName }) => {
  return (
    <Card>
      <Card.Img variant="top" className='card-image' src={src} />
      <Card.Body>
        <Card.Title className='card-title'>{title}</Card.Title>
        <Card.Subtitle className='card-subheading'>{subHeading}</Card.Subtitle>
        <Card.Text className='card-text'>{description}</Card.Text>
      </Card.Body>
      <Card.Link as={Link} to={pageLink}>{buttonName} <FontAwesomeIcon className='whatsapp-icon' icon={faWhatsapp} /></Card.Link>
    </Card>
  );
}

export default MyCards;