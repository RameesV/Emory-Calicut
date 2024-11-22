import React,{useEffect} from 'react'
import HeaderComponent from '../MiniComponents/HeaderComponent/HeaderComponent';
import ImageGallery from '../MiniComponents/ImageGallery/ImageGallery';
function Gallery() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <HeaderComponent mainHeading="Gallery" subHeading="See our" />
      <ImageGallery />
    </div>
  )
}

export default Gallery