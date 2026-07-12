import { useState, useEffect } from 'react';
import './slider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const hasImages = Array.isArray(images) && images.length > 0;

  useEffect(() => {
    if (!hasImages) {
      return undefined;
    }

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // 3-second delay

    return () => clearInterval(interval); // Cleanup timer on unmount
  }, [hasImages, images.length]);

  if (!hasImages) {
    return null;
  }

  return (
    <figure className="slider-container">
      <div className="slide-frame">
        <img
          src={images[currentIndex]}
          alt={`Featured toy ${currentIndex + 1}`}
          className="slide-image"
        />
        <div className="slide-overlay">
          <span>Featured drop</span>
          <strong>Fresh picks every few seconds</strong>
        </div>
      </div>

      <div className="slide-indicators" aria-label="Slide position">
        {images.map((_, index) => (
          <span
            key={index}
            className={index === currentIndex ? 'is-active' : ''}
            aria-hidden="true"
          />
        ))}
      </div>
    </figure>
  );
};

export default ImageSlider;
