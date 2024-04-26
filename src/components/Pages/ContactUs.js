import React, { useEffect } from 'react'
import HeroSection from '../MiniComponents/HeroSection/HeroSection'
import ContactForm from '../ContactForm/ContactForm'

function ContactUs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
}, []); 

  const data = [{
    id: 1,
    title1: "Emory Educational Institution",
  },
  {
    id: 2,
    title2: "The best educational institution for",
  },
  {
    id: 1,
    title3: "Hospital Administration | PPTTC | Event Management | Bridal Makeup"
  }]
  return (
    <>
      <HeroSection heroContent={data} />
      <ContactForm/>
    </>
  )
}

export default ContactUs