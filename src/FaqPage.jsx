import React, { useState } from 'react';
// import './FaqPage.css';
import { Link } from 'react-router-dom';
// import Navbar from '../../Navbar';





const FaqPage = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <>
         {/* <div className="sticky-nav">
        <Navbar />
      </div>
<div class=" mx-auto  bg-black p-8">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-16">
      <h1 class="sm:text-8xl font-bold mb-4   text-white">FAQ's...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to="/" class="text-red-600 hover:underline">Home</Link> / Frequently Asked Questions 
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://plus.unsplash.com/premium_photo-1661396505963-4bf69cbfbb98?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmFxfGVufDB8fDB8fHww" alt="Question Image" class="w-full h-auto"/>
    </div>
  </div>
</div> */}


<div className="mx-auto py-8 bgF h-full">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 sm:mx-6 mx-9 text-black mt-8">Frequently Asked Questions ?</h1>
        <div className="accordion sm:mt-12 mx-4 sm:mx-0">
          {FAQ_DATA.map((faq, index) => (
            <div key={index} className="border border-black p-2  mb-4">
              <div
                className="accordion-title sm:text-xl font-semibold p-4 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                {faq.question}
              </div>
              {activeIndex === index && (
                <div className="accordion-content p-4">
                  <p className='text-black text-lg'>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div> 
      </div>
    </div>

 

    </>
  )
}

const FAQ_DATA = [
  {
    question: "Are android Apps Cheaper?",
    answer:
      "The perception that Android apps are cheaper to develop often stems from the platform's open-source nature. might cost anywhere from $1000, to $1800."
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
    question: "What does a mobile app development company do?",
    answer:
      "A mobile app development company specializes in creating software applications for mobile devices such as developers, designers, and testers, Developers use programming languages like Java, Swift, flutter, Laravel."
  },
  
  {
    question: "How Bellway is different from other platform?",
    answer:
      "Bellway is a new or lesser-known company with expertise in specific technologies, the range of services it offers, its client satisfaction record, and its approach to project management and customer service."
  },
  {
    question: "What types of software development do you specialize in?",
    answer:
      "We specialize in custom software development, mobile app development, web development, and enterprise software solutions.."
  },
  {
    question: "How does your project management process work?",
    answer:
      "Our process typically includes initial consultation, planning, design, development, testing, and deployment, followed by ongoing support and maintenance."
  },



  
];

export default FaqPage