// src/Slider.js

import React from 'react';
import './HomeSlider.css';
import image1 from './assets/product1.png';
import image2 from './assets/product2.png';
import image3 from './assets/product3.png';
import image4 from './assets/product4.png';
import image5 from './assets/product5.png';
import image6 from './assets/product6.png';

const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
];

const HomeSlider = () => {
    return (
        <div className="mt-5">
            <div className="text-center">
                <h1 className="recent-work">See Our Creations</h1>
            </div>
            <div className="slider-container overflow-hidden">
                <div className="slider">
                    {images.concat(images).map((image, index) => (
                        <div key={index} className="image-wrapper">
                            <img
                                src={image}
                                alt={`Slide ${index + 1}`}
                                className="image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HomeSlider;
