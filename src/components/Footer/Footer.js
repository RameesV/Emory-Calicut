import "./Footer.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faFacebook,
  faInstagram,
  faSquareXTwitter
} from '@fortawesome/free-brands-svg-icons';
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-sm-4 col-xs-12">
            <div className="single_footer">
              <h4>Services</h4>
              <ul>
                <li><Link to={"Emory"}>Emory</Link></li>
                <li><Link to={"Jasbro"}>Jasbro</Link></li>
                <li><Link to={"BSchool"}>BSchool</Link></li>
                <li><Link to={"Dawn"}>Dawn</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single_footer single_footer_address">
              <h4>Page Link</h4>
              <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"about"}>About Us</Link></li>
                <li><Link to={"contact-us"}>Contact Us</Link></li>
                <li><Link to={"gallery"}>Gallery</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="single_footer single_footer_address">
              <h4>KEEP IN TOUCH</h4>
              <div className="social_profile">
                <ul>
                  <li><a href="https://www.facebook.com/share/RR7EV8tCGH5JLpBt/?mibextid=LQQJ4d" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                  <li><a href="https://www.instagram.com/emory_clt?igsh=ZmlxZXB5dnk2aDI0&utm_source=qr" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                  <li><a href="https://www.linkedin.com/school/emory-educational-institute/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                  <li><a href="#"><FontAwesomeIcon icon={faSquareXTwitter} /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="copyright">Copyright © 2024 <a href="#">Emory Calicut</a></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
