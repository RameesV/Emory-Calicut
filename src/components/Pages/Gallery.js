import React, { useState, useEffect } from 'react';
import HeaderComponent from '../MiniComponents/HeaderComponent/HeaderComponent';
import ImageGallery from '../MiniComponents/ImageGallery/ImageGallery';
import ImageGalleryGraduation from '../MiniComponents/ImageGallery/ImageGalleryGraduation';

function Gallery() {
  const [activeTab, setActiveTab] = useState('Graduation');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <HeaderComponent mainHeading="Gallery" subHeading="See our" />

      {/* Tab Section */}
      <div style={{ marginBottom: '20px' }}>
        <button
          onClick={() => setActiveTab('Graduation')}
          style={{
            margin: '5px',
            padding: '10px 15px',
            cursor: 'pointer',
            backgroundColor: activeTab === 'Graduation' ? '#007bff' : '#ddd',
            color: activeTab === 'Graduation' ? '#fff' : '#000',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Graduation 2025
        </button>

        <button
          onClick={() => setActiveTab('Programs')}
          style={{
            margin: '5px',
            padding: '10px 15px',
            cursor: 'pointer',
            backgroundColor: activeTab === 'Programs' ? '#007bff' : '#ddd',
            color: activeTab === 'Programs' ? '#fff' : '#000',
            border: 'none',
            borderRadius: '5px',
          }}
        >
          Other Programs
        </button>
      </div>

      {/* Render Selected Gallery */}
      {activeTab === 'Graduation' ? <ImageGalleryGraduation /> : <ImageGallery />}
    </div>
  );
}

export default Gallery;