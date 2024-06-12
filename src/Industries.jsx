
import React from 'react';
import entertainment from './assets/entertainment.png';
import ecommerce from './assets/e-commerce.png';
import automobile from './assets/automobile.png';
import health from './assets/health.png';
import realestate from './assets/real-estate.png';
import tour from './assets/tourism.png';
import delivery from './assets/delivery.png';
import crypto from './assets/crypto.png';
import software from './assets/software.png';
import professional from './assets/pro.png';
import manufacturing from './assets/manufacturing.png';
import games from './assets/games.png';

const Industries = () => {
    return (
        <div className="containerx mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-bold mb-4">Industries We Serve</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Being a mobile app development company, we have been fortunate in serving
                    clients from different industries. Here is the list of all industries <br />for whom
                    we have provided Mobile app development service.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {[
                    { src: automobile, alt: 'Automobile', title: 'Automobile' },
                    { src: entertainment, alt: 'Entertainment', title: 'Entertainment' },
                    { src: ecommerce, alt: 'E-commerce', title: 'E-commerce' },
                    { src: health, alt: 'Health', title: 'Health' },
                    { src: realestate, alt: 'Real Estate', title: 'Real Estate' },
                    { src: tour, alt: 'Tourism', title: 'Tourism' },
                    { src: delivery, alt: 'Delivery', title: 'Delivery' },
                    { src: crypto, alt: 'Crypto', title: 'Crypto' },
                    { src: software, alt: 'Software', title: 'Software' },
                    { src: professional, alt: 'Professional', title: 'Professional' },
                    { src: manufacturing, alt: 'Manufacturing', title: 'Manufacturing' },
                    { src: games, alt: 'Games', title: 'Games' },
                ].map((industry) => (
                    <div
                        key={industry.title}
                        className="bg-white shadow-md rounded-md p-4 flex items-center transform transition-transform duration-200 hover:shadow-lg hover:scale-105"
                    >
                        <img
                            src={industry.src}
                            alt={industry.alt}
                            className="w-15 h-8 mr-16"
                        />
                        <h3 className="text-xl font-semibold">{industry.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Industries;


