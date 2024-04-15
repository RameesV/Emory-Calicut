import React from 'react'
import HeroSection from '../MiniComponents/HeroSection/HeroSection'

function ContactUs() {
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
    </>
  )
}

export default ContactUs