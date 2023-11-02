import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imageData from './imageData';
import './Slider.css';

const ImageSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="s-container">
      
      <Slider {...settings}>
        {imageData.map((image) => (
          <div className="imgediv" key={image.id}>
            <img src={image.url} alt={image.name} />
          </div>
        ))}
      </Slider>
      
     
    </div>
  );
};

export default ImageSlider;
