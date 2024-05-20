import React, { useRef, useState, useEffect } from 'react';
import Slider from 'react-slick';
import './Carousel.css';
import Image from 'next/image';
import left from "../../../assets/leftVector.png";
import right from "../../../assets/rightVector.png";

const Carousel = () => {
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth <= 540) {
        setSlidesToShow(1);
      } else if (window.innerWidth <= 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);

    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "30px",
    slidesToShow: slidesToShow,
    speed: 500,
    arrows: false,
    beforeChange: (_, newIndex) => setCurrentSlide(newIndex),
    afterChange: (index) => setCurrentSlide(index),
  };

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
    },
    {
      title: "Webflow Team3",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lacus ac dignissim efficitur, ante orci varius turpis, non accumsan urna lorem vitae velit. Nunc accumsan odio nec egestas vulputate. Ut semper aliquet euismod.",
    },
    {
      title: "Webflow Team4",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper, lacus ac dignissim efficitur, ante orci varius turpis, non accumsan urna lorem vitae velit. Nunc accumsan odio nec egestas vulputate. Ut semper aliquet euismod.",
    },
  ];

  return (
    <div className="carousel">
      <Slider ref={sliderRef} {...settings}>
        {items.map((item, index) => (
          <div
            key={index}
            className={`carousel-item ${index === currentSlide ? 'center-item' : ''}`}
          >
            <div className="carousel-item-inner">
              <div className='carousel-display'>
                <div className="carousel-circle"></div>
                <h2 className='title'>{item.title}</h2>
              </div>
              <p className='content'>{item.content}</p>
            </div>
          </div>
        ))}
      </Slider>
      <button onClick={() => sliderRef.current.slickPrev()} className="carousel-button button1">
        <Image src={left} alt='left' />
      </button>
      <button onClick={() => sliderRef.current.slickNext()} className="carousel-button button2">
        <Image src={right} alt='right' />
      </button>
    </div>
  );
};

export default Carousel;
