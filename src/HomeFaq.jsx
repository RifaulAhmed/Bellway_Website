import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';

const HomeFaq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    }

    return (
        <div className=" container mx-auto py-2 bg-gray-100 h-full shadow-lg p-6">
            <div className="max-w-full mx-auto">
                <h1 className="text-3xl font-bold mb-8 sm:mx-6 mx-9 text-black mt-8 text-center ">Frequently Asked Questions</h1>
                <div className="accordion sm:mt-12 mx-4 sm:mx-0">
                    {FAQ_DATA.map((faq, index) => (
                        <div
                            key={index}
                            className=" rounded-md overflow-hidden"
                        >
                            <div
                                className="accordion-title sm:text-xl font-semibold p-1 cursor-pointer bg-white hover:bg-gray-100 transition duration-300 flex justify-between items-center"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className='py-3'>{faq.question}</span>
                                <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} className="text-gray-500" />
                            </div>
                            <div
                                className={`accordion-content p-3 bg-white transition-all duration-300 ${
                                    activeIndex === index ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                                }`}
                            >
                                <p className='text-black text-lg'>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

const FAQ_DATA = [
    {
        question: "How Bellway Infotech is different from other platforms",
        answer:
            "Bellway is a new or lesser-known company with expertise in specific technologies, the range of services it offers, its client satisfaction record, and its approach to project management and customer service."
    },
    {
        question: "How much does it cost to hire a mobile app development company?",
        answer:
            "Mobile app development companies can vary widely based on several factors. These include the complexity of the app, and the platform (iOS, Android, or both), Simple apps with basic features might cost anywhere from $1500, to $2800."
    },
    {
        question: "Will I get any free support services if I buy the readymade mobile app?",
        answer:
            "Get a year of free support with our readymade mobile app purchases! Secure, easy-to-use apps designed for efficiency with us!."
    },
    {
        question: "How can your services benefit my business?",
        answer:
            " The perception that Android apps are cheaper to develop often stems from the platform's open-source nature. might cost anywhere from $1000, to $1800."
    },
    {
        question: "What types of software development do you specialize in?",
        answer:
            "We specialize in custom software development, mobile app development, web development, and enterprise software solutions.."
    },
];

export default HomeFaq;
