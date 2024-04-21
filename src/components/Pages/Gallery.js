import React from 'react'
import HeaderComponent from '../MiniComponents/HeaderComponent/HeaderComponent';
import ImageGallery from '../MiniComponents/ImageGallery/ImageGallery';
function Gallery() {
  return (
    <div style={{ textAlign: "center" }}>
      <HeaderComponent mainHeading="Gallery" subHeading="See our" />
      <ImageGallery />
    </div>
  )
}

export default Gallery