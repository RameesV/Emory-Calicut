import './ImageGallery.scss'
import { useState } from 'react'
import img1 from '../../../assets/EmoryGraduation/1.jpg'
import img2 from '../../../assets/EmoryGraduation/2.jpg'
import img3 from '../../../assets/EmoryGraduation/3.jpg'
import img4 from '../../../assets/EmoryGraduation/4.jpg'
import img5 from '../../../assets/EmoryGraduation/5.jpg'
import img6 from '../../../assets/EmoryGraduation/6.jpg'
import img7 from '../../../assets/EmoryGraduation/7.jpg'
import img8 from '../../../assets/EmoryGraduation/8.jpg'
import img9 from '../../../assets/EmoryGraduation/9.jpg'
import img10 from '../../../assets/EmoryGraduation/10.jpg'
import img11 from '../../../assets/EmoryGraduation/11.jpg'
import img12 from '../../../assets/EmoryGraduation/12.jpg'
import img13 from '../../../assets/EmoryGraduation/13.jpg'
import img14 from '../../../assets/EmoryGraduation/14.jpg'
import img15 from '../../../assets/EmoryGraduation/15.jpg'
import img16 from '../../../assets/EmoryGraduation/16.jpg'
import img17 from '../../../assets/EmoryGraduation/17.jpg'
import img18 from '../../../assets/EmoryGraduation/18.jpg'
import img19 from '../../../assets/EmoryGraduation/19.jpg'
import img20 from '../../../assets/EmoryGraduation/20.jpg'
import img21 from '../../../assets/EmoryGraduation/21.jpg'
import img22 from '../../../assets/EmoryGraduation/22.jpg'
import img23 from '../../../assets/EmoryGraduation/23.jpg'
import img24 from '../../../assets/EmoryGraduation/24.jpg'
import img25 from '../../../assets/EmoryGraduation/25.jpg'
import img26 from '../../../assets/EmoryGraduation/26.jpg'
import img27 from '../../../assets/EmoryGraduation/27.jpg'
import img28 from '../../../assets/EmoryGraduation/28.jpg'
import img29 from '../../../assets/EmoryGraduation/29.jpg'
import img30 from '../../../assets/EmoryGraduation/30.jpg'
import img31 from '../../../assets/EmoryGraduation/31.jpg'
import img32 from '../../../assets/EmoryGraduation/32.jpg'
import img33 from '../../../assets/EmoryGraduation/33.jpg'
import img34 from '../../../assets/EmoryGraduation/34.jpg'
import img40 from '../../../assets/EmoryGraduation/40.jpg'
import img41 from '../../../assets/EmoryGraduation/41.jpg'
import img42 from '../../../assets/EmoryGraduation/42.jpg'
import img43 from '../../../assets/EmoryGraduation/43.jpg'
import img44 from '../../../assets/EmoryGraduation/44.jpg'
import img45 from '../../../assets/EmoryGraduation/45.jpg'
import img46 from '../../../assets/EmoryGraduation/46.jpg'
import img47 from '../../../assets/EmoryGraduation/47.jpg'
import img48 from '../../../assets/EmoryGraduation/48.jpg'
import img49 from '../../../assets/EmoryGraduation/49.jpg'
import img50 from '../../../assets/EmoryGraduation/50.jpg'
import img51 from '../../../assets/EmoryGraduation/51.jpg'
import img52 from '../../../assets/EmoryGraduation/52.jpg'
import img53 from '../../../assets/EmoryGraduation/53.jpg'
import img54 from '../../../assets/EmoryGraduation/54.jpg'
import img55 from '../../../assets/EmoryGraduation/55.jpg'
import img56 from '../../../assets/EmoryGraduation/56.jpg'
import img57 from '../../../assets/EmoryGraduation/57.jpg'
import img58 from '../../../assets/EmoryGraduation/58.jpg'
import img59 from '../../../assets/EmoryGraduation/59.jpg'
import img60 from '../../../assets/EmoryGraduation/60.jpg'
import img61 from '../../../assets/EmoryGraduation/61.jpg'
import img62 from '../../../assets/EmoryGraduation/62.jpg'
import img63 from '../../../assets/EmoryGraduation/63.jpg'
import img64 from '../../../assets/EmoryGraduation/64.jpg'
import img65 from '../../../assets/EmoryGraduation/65.jpg'
import img66 from '../../../assets/EmoryGraduation/66.jpg'
import img67 from '../../../assets/EmoryGraduation/67.jpg'
import img68 from '../../../assets/EmoryGraduation/68.jpg'
import img69 from '../../../assets/EmoryGraduation/69.jpg'
import img70 from '../../../assets/EmoryGraduation/70.jpg'
import img71 from '../../../assets/EmoryGraduation/71.jpg'
import img72 from '../../../assets/EmoryGraduation/72.jpg'
import img73 from '../../../assets/EmoryGraduation/73.jpg'
import img74 from '../../../assets/EmoryGraduation/74.jpg'
import img75 from '../../../assets/EmoryGraduation/75.jpg'
import img76 from '../../../assets/EmoryGraduation/76.jpg'
import img77 from '../../../assets/EmoryGraduation/77.jpg'
import img78 from '../../../assets/EmoryGraduation/78.jpg'
import img79 from '../../../assets/EmoryGraduation/79.jpg'
import img80 from '../../../assets/EmoryGraduation/80.jpg'
import img81 from '../../../assets/EmoryGraduation/81.jpg'
import img82 from '../../../assets/EmoryGraduation/82.jpg'
import img83 from '../../../assets/EmoryGraduation/83.jpg'

export default function Gallery() {
  const imageUrls = [
    {id: 1, src: img1},
    {id: 2, src: img2},
    {id: 3, src: img3},
    {id: 4, src: img4},
    {id: 5, src: img5},
    {id: 6, src: img6},
    {id: 7, src: img7},
    {id: 8, src: img8},
    {id: 9, src: img9},
    {id: 10, src: img10},
    {id: 11, src: img11},
    {id: 12, src: img12},
    {id: 13, src: img13},
    {id: 14, src: img14},
    {id: 15, src: img15},
    {id: 16, src: img16},
    {id: 17, src: img17},
    {id: 18, src: img18},
    {id: 19, src: img19},
    {id: 20, src: img20},
    {id: 21, src: img21},
    {id: 22, src: img22},
    {id: 23, src: img23},
    {id: 24, src: img24},
    {id: 25, src: img25},
    {id: 26, src: img26},
    {id: 27, src: img27},
    {id: 28, src: img28},
    {id: 29, src: img29},
    {id: 30, src: img30},
    {id: 31, src: img31},
    {id: 32, src: img32},
    {id: 33, src: img33},
    {id: 34, src: img34},
    {id: 40, src: img40},
    {id: 41, src: img41},
    {id: 42, src: img42},
    {id: 43, src: img43},
    {id: 44, src: img44},
    {id: 45, src: img45},
    {id: 46, src: img46},
    {id: 47, src: img47},
    {id: 48, src: img48},
    {id: 49, src: img49},
    {id: 50, src: img50},
    {id: 51, src: img51},
    {id: 52, src: img52},
    {id: 53, src: img53},
    {id: 54, src: img54},
    {id: 55, src: img55},
    {id: 56, src: img56},
    {id: 57, src: img57},
    {id: 58, src: img58},
    {id: 59, src: img59},
    {id: 60, src: img60},
    {id: 61, src: img61},
    {id: 62, src: img62},
    {id: 63, src: img63},
    {id: 64, src: img64},
    {id: 65, src: img65},
    {id: 66, src: img66},
    {id: 67, src: img67},
    {id: 68, src: img68},
    {id: 69, src: img69},
    {id: 70, src: img70},
    {id: 71, src: img71},
    {id: 72, src: img72},
    {id: 73, src: img73},
    {id: 74, src: img74},
    {id: 75, src: img75},
    {id: 76, src: img76},
    {id: 77, src: img77},
    {id: 78, src: img78},
    {id: 79, src: img79},
    {id: 80, src: img80},
    {id: 81, src: img81},
    {id: 82, src: img82},
    {id: 83, src: img83}
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
            // alt={Image ${imageUrl.id}}
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