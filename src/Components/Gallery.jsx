// src/components/Gallery.jsx
import React, { useState, useRef } from 'react';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const fileInputRef = useRef(null);
  
  // Gallery images from public directory
  const galleryImages = [
    '/images/IMG-20250616-WA0011.jpg',
    '/images/IMG-20250616-WA0013.jpg',
    '/images/IMG-20250616-WA0014.jpg',
    '/images/IMG-20250616-WA0020.jpg',
    '/images/IMG-20250616-WA0021.jpg',
    '/images/IMG-20250616-WA0018.jpg',
    '/images/IMG-20250616-WA0028.jpg',
    '/images/IMG-20250616-WA0015.jpg',
  ];

  const imageTitles = [
    "Community Workshop",
    "Fish Cage Farming",
    "Table Banking Session",
    "Lake Conservation",
    "Women Empowerment Training",
    "Community Meeting",
    "Blue Economy Project",
    "New Initiative Launch"
  ];

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newImages = files.map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>BUKANI MAMA TOTO GALLERY</h1>
        <p style={styles.subtitle}>Documenting our journey of empowerment, sustainability, and community development</p>
      </div>
      
      <div style={styles.uploadContainer}>
        <button style={styles.uploadButton} onClick={triggerFileInput}>
          <i className="bi bi-cloud-upload" style={styles.uploadIcon}></i> Upload Images
        </button>
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
          multiple
        />
        <p style={styles.uploadHint}>Share your moments with our community (JPG, PNG - max 5MB each)</p>
      </div>
      
      <div style={styles.galleryGrid}>
        {[...galleryImages, ...images].map((img, index) => (
          <div key={index} style={styles.galleryItem}>
            <img 
              src={img} 
              alt={`Gallery item ${index + 1}`} 
              style={styles.image}
              loading="lazy"
            />
            <div style={styles.imageOverlay}>
              <span style={styles.imageTitle}>
                {index < imageTitles.length ? imageTitles[index] : `New Image ${index - imageTitles.length + 1}`}
              </span>
            </div>
          </div>
        ))}
      </div>
      
      <div style={styles.infoBox}>
        <h3 style={styles.infoTitle}>Sharing Our Story Through Images</h3>
        <p style={styles.infoText}>
          This gallery showcases the impactful work of BUKANI MAMA TOTO. Each image tells a story of empowerment,
          sustainable development, and community transformation. From our fish farming initiatives to financial
          empowerment programs, these visuals capture our journey in building a better future.
        </p>
      </div>
    </div>
  );
};

// Styles for the gallery component
const styles = {
  container: {
    padding: '20px',
    maxWidth: '1400px',
    margin: '0 auto',
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  header: {
    textAlign: 'center',
    margin: '40px 0 30px',
    padding: '20px',
  },
  title: {
    color: '#1a936f',
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '15px',
    textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
  },
  subtitle: {
    color: '#5a6268',
    fontSize: '1.1rem',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: '1.6',
  },
  uploadContainer: {
    backgroundColor: 'white',
    borderRadius: '15px',
    padding: '25px',
    boxShadow: '0 5px 20px rgba(0,0,0,0.05)',
    margin: '30px auto',
    textAlign: 'center',
    maxWidth: '800px',
  },
  uploadButton: {
    backgroundColor: '#1a936f',
    color: 'white',
    border: 'none',
    padding: '14px 35px',
    fontSize: '1.1rem',
    fontWeight: '600',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginBottom: '15px',
    boxShadow: '0 4px 15px rgba(26, 147, 111, 0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 15px',
  },
  uploadIcon: {
    marginRight: '10px',
    fontSize: '1.3rem',
  },
  uploadHint: {
    color: '#6c757d',
    fontSize: '0.95rem',
    margin: '0',
  },
  galleryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '25px',
    margin: '40px 0',
  },
  galleryItem: {
    position: 'relative',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
    transition: 'all 0.3s ease',
    height: '280px',
    cursor: 'pointer',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    transition: 'transform 0.5s ease',
  },
  imageOverlay: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
    padding: '20px',
    color: 'white',
    opacity: '0',
    transition: 'opacity 0.3s ease',
  },
  imageTitle: {
    fontSize: '1.1rem',
    fontWeight: '600',
  },
  infoBox: {
    backgroundColor: '#e9f5f1',
    borderRadius: '15px',
    padding: '30px',
    margin: '50px 0',
    borderLeft: '5px solid #1a936f',
    maxWidth: '900px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  infoTitle: {
    color: '#1a936f',
    fontSize: '1.8rem',
    marginBottom: '15px',
  },
  infoText: {
    color: '#495057',
    fontSize: '1.05rem',
    lineHeight: '1.7',
  },
};

// Add hover effects
const addHoverStyles = `
  .gallery-item:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px rgba(0,0,0,0.15);
  }
  
  .gallery-item:hover .image-overlay {
    opacity: 1;
  }
  
  .gallery-item:hover img {
    transform: scale(1.05);
  }
  
  .upload-button:hover {
    background: #16825f;
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(26, 147, 111, 0.4);
  }
`;

export default Gallery;