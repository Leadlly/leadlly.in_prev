import React, { useState } from 'react';
import './Carousel.css';

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = [
    {
      title: "Webflow Team",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lacus ac dignissim efficitur, ante orci varius turpis, non accumsan urna lorem vitae velit. Nunc accumsan odio nec egestas vulputate. Ut semper aliquet euismod.",
    },
    {
      title: "Webflow Team1",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lacus ac dignissim efficitur, ante orci varius turpis, non accumsan urna lorem vitae velit. Nunc accumsan odio nec egestas vulputate. Ut semper aliquet euismod.",
    },
    {
      title: "Webflow Team2",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lacus ac dignissim efficitur, ante orci varius turpis, non accumsan urna lorem vitae velit. Nunc accumsan odio nec egestas vulputate. Ut semper aliquet euismod.",
    }
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const getClassName = (index) => {
    if (index === currentIndex) {
      return 'carousel-item active';
    } else if (index === (currentIndex - 1 + items.length) % items.length) {
      return 'carousel-item prev';
    } else if (index === (currentIndex + 1) % items.length) {
      return 'carousel-item next';
    } else {
      return 'carousel-item hidden';
    }
  };

  return (
    <div className="carousel">
      <button onClick={handlePrev} className="carousel-button">&#8592;</button>
      <div className="carousel-content">
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${getClassName(index)}`}
          >
            <div className="carousel-item-inner">
              <div className="carousel-circle"></div>
              <h2>{item.title}</h2>
              <p>{item.content}</p>
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleNext} className="carousel-button">&#8594;</button>
    </div>
  );
};

export default Carousel;
