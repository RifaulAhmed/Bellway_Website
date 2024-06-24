// src/Slider.js

import React from 'react';
import './HomeSlider.css';
import image1 from './assets/Shree Jyotish.png';
import image2 from './assets/Brobo.png';
import image3 from './assets/ONEAPP PLUS.png';
import image4 from './assets/HAZE.png';
import image5 from './assets/TruelyMatch.png';
import image6 from './assets/DCart.png';
import image7 from './assets/DesiGrow.png';
import image8 from './assets/Online store web.png';
import image9 from './assets/Coupon Counter.png';
import image10 from './assets/Go Connect.png';
import image11 from './assets/LLN.png';
import image12 from './assets/Mazaa Munch.png';
import image13 from './assets/YML MART.png';
const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
    image13
];

const HomeSlider = () => {
    return (
        <div className="mt-2">
            <div className="text-center">
                <h1 className="recent-work">See Our Creations</h1>
            </div>
            <div className="slider-container overflow-hidden">
                <div className="slider mt-4">
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
