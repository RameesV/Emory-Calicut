import React, { useRef } from "react";

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
              <i className="fas fa-map-marker-alt"></i>
              &nbsp; &nbsp;
              <p>Eroth center, Opp Fathima Hospital, Calicut</p>
            </div>
            <div className="information">
              <i className="fas fa-envelope"></i> &nbsp; &nbsp;
              <p>emorycalicut@gmail.com </p>
            </div>
            <div className="information">
              <i className="fas fa-phone"></i>&nbsp;&nbsp;
              <p>+91 8156815682</p>
            </div>
            <div className="information">
              <i className="fab fa-whatsapp"></i>&nbsp;&nbsp;
              <p>+91 7306058474</p>
            </div>
          </div>
          <div className="social-media">
            <p>Connect with us :</p>
            <div className="social-icons">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
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
              <label for="">Name</label>
              <span>Name</span>
            </div>
            <div className="input-container-wrapper">
              <input type="email" name="Email" className="input" required />
              <label for="">Email</label>
              <span>Email</span>
            </div>
            <div className="input-container-wrapper">
              <input type="tel" name="Phone" className="input" required />
              <label for="">Phone</label>
              <span>Phone</span>
            </div>
            <div className="input-container-wrapper">
              <input type="text" name="Address" className="input" />
              <label for="">Address</label>
              <span>Address</span>
            </div>
            <div className="input-container-wrapper textarea">
              <input type="text" name="Message" className="input"></input>
              <label for="">Message</label>
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