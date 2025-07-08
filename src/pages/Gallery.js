import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const galleryImages = [
    { id: 1, title: 'Inauguration Day', src: 'https://picsum.photos/300/200?random=1' },
    { id: 2, title: 'Seminar Event', src: 'https://picsum.photos/300/200?random=2' },
    { id: 3, title: 'Workshop Session', src: 'https://picsum.photos/300/200?random=3' },
    { id: 4, title: 'Cultural Fest', src: 'https://picsum.photos/300/200?random=4' },
    { id: 5, title: 'Sports Meet', src: 'https://picsum.photos/300/200?random=5' },
    { id: 6, title: 'Tech Exhibition', src: 'https://picsum.photos/300/200?random=6' },
    { id: 7, title: 'Campus Drive', src: 'https://picsum.photos/300/200?random=7' },
  { id: 8, title: 'Mock Interviews', src: 'https://picsum.photos/300/200?random=8' },
  ];

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Photo Gallery</h1>
      <div className="gallery-grid">
        {galleryImages.map((img) => (
          <div key={img.id} className="gallery-card">
            <img src={img.src} alt={img.title} />
            <p>{img.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
