import React from 'react';
import Slider from 'react-slick';
import Client1 from './assets/Client1.jpg';
import Client2 from './assets/Client2.jpg';
import Client3 from './assets/Client3.jpg';
import Client4 from './assets/Client4.jpg';

const ClientStories = () => {
    const boxes = [
        {
            id: 1,
            text: '"Exceptional service delivery, coupled with their innovative solutions, has truly propelled our business forward. Highly recommended for their dedication and expertise!"',
            image: Client1,
            name: 'Radomi',
            position: '( Founder, POPOPDEAL )',
        },
        {
            id: 2,
            text: '"Highly recommend tapping into their unparalleled expertise and innovative solutions for any business striving to excel and thrive in today\'s fiercely competitive landscape."',
            image: Client2,
            name: 'Gregory Doe',
            position: '( Founder )',
        },
        {
            id: 3,
            text: '"Their commitment to delivering outstanding service alongside groundbreaking and forward-looking solutions has been pivotal for our continued and remarkable success."',
            image: Client3,
            name: 'Kendra',
            position: '( MFounder, The KB Hair )',
        },
        {
            id: 4,
            text: '"Exceptional service delivery, coupled with their innovative solutions, has truly propelled our business forward. Highly recommended for their dedication and expertise!"',
            image: Client4,
            name: 'Karen Agresti',
            position: '( Founder )',
        }
    ];

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

    return (
        <div className="w-full overflow-hidden">
            <div className="w-full text-center">
                <h1 className="appreciation text-4xl font-bold mb-1 mt-12">Stories From Our Clients</h1>
            </div>
            <div className="mt-12 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 bg-gray-50 shadow-md rounded-md p-4 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl">
                <Slider {...settings}>
                    {boxes.map((box, index) => (
                        <div key={index} className="px-2 sm:px-4">
                            <div className="bg-white rounded-md p-4 sm:p-6 md:p-8 text-center transition duration-300 hover:bg-gray-100 shadow-md hover:shadow-lg relative">
                                <div className="client-image mb-4">
                                    <img src={box.image} alt={`Client ${index + 1}`} className="w-16 h-16 rounded-full mx-auto" />
                                </div>
                                <div className="text-gray-700 text-lg font-bold mb-1">{box.name}</div>
                                <div className="text-gray-600 text-sm">{box.position}</div>
                                <div className="text-gray-700 text-lg">{box.text}</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default ClientStories;
