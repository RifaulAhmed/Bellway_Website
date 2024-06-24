import React, { useState } from 'react';
import './WhyBell.css';

const WhyBell = () => {
    const [selectedButton, setSelectedButton] = useState(1);

    const buttonClickHandler = (buttonIndex) => {
        setSelectedButton(buttonIndex);
    };

    return (
        <div className="flex h-full ml-16 mt-5">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-3xl lg:text-4xl xl:text-5xl">
                            Why should you hire Bellway Infotech?
                        </h1>
                        <div className="button-group flex space-x-2 mb-4 flex-wrap">
                            <button
                                onClick={() => buttonClickHandler(1)}
                                className={`bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-1 rounded focus:outline-none focus:shadow-outline ${selectedButton === 1 && 'bg-black'}`}
                            >
                                Skilled Professionals
                            </button>
                            <button
                                onClick={() => buttonClickHandler(2)}
                                className={`bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${selectedButton === 2 && 'bg-black'}`}
                            >
                                Innovative Strategy
                            </button>
                            <button
                                onClick={() => buttonClickHandler(3)}
                                className={`bg-gray-500 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${selectedButton === 3 && 'bg-black'}`}
                            >
                                Consumer Help Service
                            </button>
                        </div>
                        <div className="text-300 text-gray-700 mb-6" style={{ height: '130px', overflowY: 'auto' }}>
                            {selectedButton === 1 && (
                                "As a premier application development company, we ensure that our proficient mobile app developers are with you every step of the way, from inception to completion. Our approach begins with a deep understanding of your specific demands and requirements. We then identify the most suitable resources, devise potential solutions, and implement effective methods to enhance your business through our comprehensive app development services. Our goal is to build robust and efficient applications tailored to your needs, helping you achieve sustained growth and success."
                            )}
                            {selectedButton === 2 && (
                                "With our deep understanding of our clients' goals, we bring a high level of expertise to our designs. We are committed to crafting unique user interfaces that are not only visually captivating but also perfectly aligned with the specific needs of our clients' businesses. Our innovative approach ensures that every element of the design enhances user experience and reflects the brand's identity, making it both functional and aesthetically pleasing. By integrating creativity and strategic thinking, we create solutions that stand out in the market and drive business success."
                            )}
                            {selectedButton === 3 && (
                                "We provide support and maintenance via email and 24/7 phone calls. Our team is always ready to assist you, ensuring your application operates seamlessly and efficiently, even post-launch. To enjoy these benefits, Appslure is your best choice. As a premier application development company, we boast a team of expert developers well-versed in industry best practices, tools, and software. Consequently, we assure you that creating a mobile application with us will be straightforward, fast, secure, and cost-effective."
                            )}
                        </div>
                    </div>
                    <div className="image-container flex justify-center">
                        <img
                            src="https://images.unsplash.com/photo-1610097453820-0c3c8aac0202?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            className="w-5/2 rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyBell;
