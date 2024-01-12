import React, { useState, useEffect } from 'react';
import './ImageSlider.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faAnglesLeft} from "@fortawesome/free-solid-svg-icons";
import {faAnglesRight} from "@fortawesome/free-solid-svg-icons";

const ImageSlider = ({ images, itemsToShowMobile = 1, itemsToShowDesktop = 3 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const leftAerrow = <FontAwesomeIcon className='fontic' icon={faAnglesLeft}/>;
  const rightAerrow = <FontAwesomeIcon className='fontic' icon={faAnglesRight}/>

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const gap = windowWidth <= 768 ? 0 : 20;
  const itemsToShow = windowWidth <= 768 ? itemsToShowMobile : itemsToShowDesktop;
  const itemWidthPercentage = 100 / itemsToShow;
  const marginPercentage = (gap / itemsToShow) * (itemsToShow - 1);
  const transformValue = `translateX(${-currentIndex * (itemWidthPercentage + marginPercentage)}%)`;

  return (
    <div id='sld'>


        <div>
            <h1  style={{fontSize:"32px",textAlign:"center",fontWeight:"600",color:"#6a961f",marginTop:"70px"}} >Gallery of Gir madhuli Farmhouse & Resort
            <hr style={{width:"10%",margin:"auto",height:"2px",backgroundColor:"#ec9f21",borderRadius:"3px"}} />
             </h1>
        </div>

   
        <div className="slider-container">
          <button className="arrow left-arrow" onClick={prevSlide}>
             {leftAerrow}
          </button>
          <div className="image-container" style={{ transform: transformValue }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="slide"
                style={{ marginRight: index < images.length - 1 ? `${gap}px` : 0 }}
              />
            ))}
          </div>
          <button className="arrow right-arrow" onClick={nextSlide}>
            {rightAerrow}
          </button>
        </div>
    </div>
  );
};
export default ImageSlider;
