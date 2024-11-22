import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Hi, my name is ${name}. My email is ${email} and phone number is ${phone}.`;
    const encodedMessage = encodeURIComponent(message); // Encode for URL
    const whatsappUrl = `https://wa.me/+919497863344?text=${encodedMessage}`; // Replace with your WhatsApp number
    window.location.href = whatsappUrl; // Open WhatsApp chat
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" value={name} onChange={handleChange} required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" value={email} onChange={handleChange} required />
      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" id="phone" name="phone" value={phone} onChange={handleChange} required />
      <button type="submit">Send Enquiry</button>
    </form>
  );
}

export default ContactForm;
