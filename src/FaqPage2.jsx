import React, { useState } from 'react';

const FaqPage2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className="mx-auto py-8 bgF h-full">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 sm:mx-6 mx-9 text-black mt-8">Frequently Asked Questions About UX/UI Design Services</h1>
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
    question: "What are the key principles of good UX/UI design?",
    answer:
      "Good UX/UI design is based on principles such as usability, accessibility, consistency, clarity, and simplicity. It focuses on understanding user needs and providing intuitive and delightful experiences."
  },
  {
    question: "How do you approach the UX/UI design process?",
    answer:
      "Our UX/UI design process typically involves research, ideation, wireframing, prototyping, user testing, and iteration. We collaborate closely with clients to understand their goals and create designs that meet their needs."
  },
  {
    question: "What tools and software do you use for UX/UI design?",
    answer:
      "We use a variety of tools and software for UX/UI design, including Adobe XD, Sketch, Figma, InVision, and prototyping tools like Marvel and Axure RP. We choose the best tools based on the specific requirements of each project."
  },
  {
    question: "Can you provide responsive design for mobile and web?",
    answer:
      "Yes, we specialize in creating responsive designs that adapt to different screen sizes and devices, including mobile phones, tablets, and desktop computers. Our designs are optimized for a seamless user experience across all platforms."
  },
  {
    question: "Do you offer usability testing services?",
    answer:
      "Yes, we offer usability testing services to evaluate the effectiveness and usability of designs. We conduct user testing sessions, gather feedback, and make iterative improvements to ensure that the final product meets user needs and expectations."
  },
  // Add more FAQ items here
];

export default FaqPage2;
