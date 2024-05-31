// BoxSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './BoxSlider.css'; // Create this CSS file for custom styling
import 'bootstrap/dist/css/bootstrap.min.css';

const BoxSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const boxes = [
    {
      id: 1,
      text: 'Box 1',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 2,
      text: 'Box 2',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 3,
      text: 'Box 3',
      image: 'https://via.placeholder.com/150'
    },
    {
      id: 4,
      text: 'Box 4',
      image: 'https://via.placeholder.com/150'
    }
  ];

  return (
    <div className="container mt-5">
      <Slider {...settings}>
        {boxes.map(box => (
          <div key={box.id} className="box px-2">
            <img src={box.image} alt={box.text} className="img-fluid" />
            <p>{box.text}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BoxSlider;

