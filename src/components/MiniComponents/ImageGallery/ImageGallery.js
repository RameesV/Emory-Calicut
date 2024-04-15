import './ImageGallery.scss'
import { useState } from 'react'

export default function Gallery() {
  const imageUrls = [
    {
      id: 1,
      src: 'https://sadectip.sirv.com/ImagesNew/1.jpg'
    },
    {
      id: 2,
      src: 'https://sadectip.sirv.com/ImagesNew/2.jpg'
    },
    {
      id: 3,
      src: 'https://sadectip.sirv.com/ImagesNew/3.jpg'
    },
    {
      id: 4,
      src: 'https://sadectip.sirv.com/ImagesNew/4.jpg'
    },
    {
      id: 5,
      src: 'https://sadectip.sirv.com/ImagesNew/5.jpg'
    },
    {
      id: 6,
      src: 'https://sadectip.sirv.com/ImagesNew/6.jpg'
    },
    {
      id: 7,
      src: 'https://sadectip.sirv.com/ImagesNew/7.jpg'
    },
    {
      id: 8,
      src: 'https://sadectip.sirv.com/ImagesNew/8.jpg'
    },
    {
      id: 9,
      src: 'https://sadectip.sirv.com/ImagesNew/9.jpg'
    },
    {
      id: 10,
      src: 'https://sadectip.sirv.com/ImagesNew/10.jpg'
    },
    {
      id: 11,
      src: 'https://sadectip.sirv.com/ImagesNew/11.jpg'
    },
    {
      id: 12,
      src: 'https://sadectip.sirv.com/ImagesNew/12.jpg'
    },
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