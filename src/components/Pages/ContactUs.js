import React, { useRef } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faLinkedin, faFacebook, faInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';

import "./ContactUs.scss";

const ContactUs = () => {
  const formRef = useRef(null);
  const URL = process.env.REACT_APP_G_SHEET_URL;

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(URL, {
      method: 'POST',
      body: new FormData(formRef.current),

    }).then(res => {
      if (!res.ok) {
        throw new Error('Something went wrong');
      }

      return res.json();
    })
      .then(data => {
        console.log(data);
        alert(data.msg);
      })
      .catch(err => {
        console.error('There was a problem with the fetch operation:', err);
        alert('Submission failed. Please try again.');
      });
  };

  // Move the labe to the top of the input box
  const inputs = document.querySelectorAll(".input");
  function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunc() {
    let parent = this.parentNode;
    if (this.value === "") {
      parent.classList.remove("focus");
    }
  }

  inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
  });

  return (
    <div className="container-wrapper">
      <span className="big-circle"></span>
      <img src="img/shape.png" className="square" alt="sadsadsadsa" />
      <div className="form">
        <div className="contact-info">

          <h3 className="title">Let's get in touch</h3>
          <p className="text">
            Ready to embark on your educational journey? Contact us for enrollment and career guidance.
          </p>
          <div className="info">
            <div className="information">
              <FontAwesomeIcon icon={faLocationDot} />
              &nbsp; &nbsp;
              <p>Eroth center, Opp Fathima Hospital, Calicut</p>
            </div>
            <div className="information">
              <FontAwesomeIcon icon={faEnvelope} />
              &nbsp; &nbsp;
              <p>emorycalicut@gmail.com </p>
            </div>
            <div className="information">
              <FontAwesomeIcon icon={faPhone} />
              &nbsp;&nbsp;
              <p>+91 8156815682</p>
            </div>
            <div className="information">
              <FontAwesomeIcon icon={faWhatsapp} />
              &nbsp;&nbsp;
              <p>+91 7306058474</p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
                <FontAwesomeIcon icon={faSquareXTwitter} />
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <span className="circle one"></span>
          <span className="circle two"></span>
          <form ref={formRef} onSubmit={handleSubmit}>
            <h3 className="title">Contact us</h3>
            <div className="input-container-wrapper">
              <input type="text" name="Name" className="input" required />
              <label>Name</label>
              <span>Name</span>
            </div>
            <div className="input-container-wrapper">
              <input type="email" name="Email" className="input" required />
              <label>Email</label>
              <span>Email</span>
            </div>
            <div className="input-container-wrapper">
              <input type="tel" name="Phone" className="input" required />
              <label>Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container-wrapper">
              <input type="text" name="Address" className="input" />
              <label>Address</label>
              <span>Address</span>
            </div>
            <div className="input-container-wrapper textarea">
              <input type="text" name="Message" className="input"></input>
              <label>Message</label>
              <span>Message</span>
            </div>
            <span className="info-text">We'll never share your data with anyone else.</span>
            <input type="submit" value="Send" className="btn" />
          </form>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;