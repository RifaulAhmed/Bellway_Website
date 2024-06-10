import React, { useState } from 'react';
// import './FaqPage.css';
import { Link } from 'react-router-dom';
// import Navbar from '../../Navbar';

const FaqPage4 = () => {
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
          <h1 className="text-3xl font-bold mb-8 sm:mx-6 mx-9 text-black mt-8">Frequently Asked Questions About Digital Marketing Services</h1>
          <div className="accordion sm:mt-12 mx-4 sm:mx-0">
            {FAQ_DATA.map((faq, index) => (
              <div key={index} className="border border-black p-2 mb-4">
                <div
                  className="accordion-title sm:text-xl font-semibold p-4 cursor-pointer"
                  onClick={() => toggleAccordion(index)}
                >
                  {faq.question}
                </div>
                {activeIndex === index && (
                  <div className="accordion-content p-4">
                    <p className="text-black text-lg">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const FAQ_DATA = [
  {
    question: "What is digital marketing?",
    answer:
      "Digital marketing refers to the use of digital channels, such as search engines, social media, email, and websites, to promote products or services and connect with target audiences."
  },
  {
    question: "Why is digital marketing important for my business?",
    answer:
      "Digital marketing is essential for reaching a broader audience, increasing brand visibility, driving website traffic, generating leads, and ultimately boosting sales and revenue."
  },
  {
    question: "What are the key components of a digital marketing strategy?",
    answer:
      "A comprehensive digital marketing strategy includes components such as search engine optimization (SEO), content marketing, social media marketing, email marketing, pay-per-click (PPC) advertising, and analytics."
  },
  {
    question: "How can SEO benefit my business?",
    answer:
      "SEO improves your website's visibility on search engines, driving organic traffic and increasing the chances of attracting potential customers who are actively searching for products or services like yours."
  },
  {
    question: "What is the role of social media in digital marketing?",
    answer:
      "Social media platforms provide a space to engage with your audience, build brand awareness, share content, and promote products or services. They are essential for creating a community and fostering customer loyalty."
  },
  {
    question: "How do you measure the success of digital marketing campaigns?",
    answer:
      "Success is measured using various metrics, including website traffic, conversion rates, click-through rates (CTR), engagement rates, return on investment (ROI), and other key performance indicators (KPIs)."
  },
  {
    question: "Can you help with email marketing campaigns?",
    answer:
      "Yes, we can help design, implement, and manage email marketing campaigns to nurture leads, retain customers, and promote your products or services effectively."
  },
  {
    question: "What is PPC advertising and how does it work?",
    answer:
      "PPC advertising is a model where advertisers pay a fee each time their ad is clicked. It involves bidding on keywords and displaying ads on search engine results pages or other platforms to drive targeted traffic to your website."
  },
  // Add more FAQ items here
];

export default FaqPage4;
