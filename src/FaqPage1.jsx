import React, { useState } from 'react';

const FaqPage1 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className="mx-auto py-8 bgF h-full">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 sm:mx-6 mx-9 text-black mt-8">Frequently Asked Questions About Web Development Services</h1>
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
  )
}

const FAQ_DATA = [
  {
    question: "What are the benefits of having a website?",
    answer:
      "Having a website can increase your online presence, improve credibility, provide accessibility to a wider audience, and serve as a platform for marketing and communication."
  },
  {
    question: "How long does it take to develop a website?",
    answer:
      "The time to develop a website varies based on its complexity, features, and design requirements. Simple websites can be developed in a few weeks, while more complex ones may take several months."
  },
  {
    question: "What technologies are commonly used in web development?",
    answer:
      "Common technologies used in web development include HTML, CSS, JavaScript, and various web development frameworks and libraries such as React, Angular, and Vue.js."
  },
  {
    question: "Do you offer e-commerce website development services?",
    answer:
      "Yes, we offer e-commerce website development services tailored to your specific business needs. Our solutions include features such as product listings, shopping carts, payment gateways, and order management systems."
  },
  {
    question: "Can you provide ongoing maintenance and support for my website?",
    answer:
      "Yes, we offer ongoing maintenance and support services to ensure your website remains up-to-date, secure, and functioning properly. Our team can assist with updates, backups, security patches, and technical support."
  },
  
];

export default FaqPage1;
