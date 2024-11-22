import './ImageGallery.scss'
import { useState } from 'react'
import img1 from '../../../assets/Gallery/1.jpg'
import img2 from '../../../assets/Gallery/2.jpg'
import img3 from '../../../assets/Gallery/3.jpg'
import img4 from '../../../assets/Gallery/4.jpg'
import img5 from '../../../assets/Gallery/5.jpg'
import img6 from '../../../assets/Gallery/6.jpg'
import img7 from '../../../assets/Gallery/7.jpg'
import img8 from '../../../assets/Gallery/8.jpg'
import img9 from '../../../assets/Gallery/9.jpg'
import img10 from '../../../assets/Gallery/10.jpg'
import img11 from '../../../assets/Gallery/11.jpg'
import img12 from '../../../assets/Gallery/12.jpg'
import img13 from '../../../assets/Gallery/13.jpg'
import img14 from '../../../assets/Gallery/14.jpg'
import img15 from '../../../assets/Gallery/15.jpg'
import img16 from '../../../assets/Gallery/16.jpg'
import img17 from '../../../assets/Gallery/17.jpg'
import img18 from '../../../assets/Gallery/18.jpg'
import img19 from '../../../assets/Gallery/19.jpg'
import img20 from '../../../assets/Gallery/20.jpg'
import img21 from '../../../assets/Gallery/21.jpg'
import img22 from '../../../assets/Gallery/22.jpg'
import img23 from '../../../assets/Gallery/23.jpg'
import img24 from '../../../assets/Gallery/24.jpg'
import img25 from '../../../assets/Gallery/25.jpg'
import img26 from '../../../assets/Gallery/26.jpg'
import img27 from '../../../assets/Gallery/27.jpg'
import img28 from '../../../assets/Gallery/28.jpg'
import img29 from '../../../assets/Gallery/29.jpg'
import img30 from '../../../assets/Gallery/30.jpg'
import img31 from '../../../assets/Gallery/31.jpg'
import img32 from '../../../assets/Gallery/32.jpg'
import img33 from '../../../assets/Gallery/33.jpg'
import img34 from '../../../assets/Gallery/34.jpg'

export default function Gallery() {
  const imageUrls = [
    {id: 1,src: img1},
    {id: 2,src: img2},
    {id: 3,src: img3},
    {id: 4,src: img4},
    {id: 5,src: img5},
    {id: 6,src: img6},
    {id: 7,src: img7},
    {id: 8,src: img8},
    {id: 9,src: img9},
    {id: 10,src: img10},
    {id: 11,src: img11},
    {id: 12,src: img12},
    {id: 13,src: img13},
    {id: 14,src: img14},
    {id: 15,src: img15},
    {id: 16,src: img16},
    {id: 17,src: img17},
    {id: 18,src: img18},
    {id: 19,src: img19},
    {id: 20,src: img20},
    {id: 21,src: img21},
    {id: 22,src: img22},
    {id: 23,src: img23},
    {id: 24,src: img24},
    {id: 25,src: img25},
    {id: 26,src: img26},
    {id: 27,src: img27},
    {id: 28,src: img28},
    {id: 29,src: img29},
    {id: 30,src: img30},
    {id: 31,src: img31},
    {id: 32,src: img32},
    {id: 33,src: img33},
    {id: 34,src: img34 }
  ];

  const [isFullscreenOpen, setIsFullscreenOpen] = useState(false);
  const [fullscreenImageUrl, setFullscreenImageUrl] = useState('');

  const handleImageClick = (imageUrl) => {
    setFullscreenImageUrl(imageUrl.src);
    setIsFullscreenOpen(true);
  };

  const handleCloseFullscreen = () => {
    setIsFullscreenOpen(false);
    setFullscreenImageUrl('');
  };

  return (
    <div className="gallery">
      {imageUrls.map((imageUrl) => (
        <div key={imageUrl.id}>
          <img
            className="gallery-images"
            loading='lazy'
            src={imageUrl.src}
            alt={`Image ${imageUrl.id}`}
            onClick={() => handleImageClick(imageUrl)}
          />
        </div>
      ))}

      {isFullscreenOpen && ( // Conditionally render fullscreen content
        <div className="fullscreen-image-container">
          <img src={fullscreenImageUrl} alt="Full Screen Image" loading='lazy'/>
          <button className="close-fullscreen-button" onClick={handleCloseFullscreen}>
            X
          </button>
        </div>
      )}
    </div>
  );
}