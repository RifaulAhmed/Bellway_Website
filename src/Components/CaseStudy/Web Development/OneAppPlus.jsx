import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import CNavbar from '../../../CNavbar';
import Footer from '../../../Footer';



const slides = [
  {
    image: 'https://images.unsplash.com/photo-1612323272007-3e7c28f6eb05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHpvZGlhYyUyMGNhcmR8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/web/goto-astro',
    buttonText: 'Explore GoTo-Astro'
  },
  {
    image: 'https://images.unsplash.com/photo-1631009719873-d62e4a0c93c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGdyZWVuJTIwZWxlY3RyaWN8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/web/flying-volt',
    buttonText: 'Move to Flying-Volt'
  },
  {
    image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/lazy-bazar-21692356159.jpg',
    url: '/case-study/web/lazy-bazar',
    buttonText: 'Move to Lazy Bazar'
  }
];

const OneAppPlus = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === slides.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <>
    <CNavbar/>
    <div className="mybg">
       <div class="containerx mx-auto  bg-black p-8 mt-20">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-8">
      <h1 class="sm:text-8xl font-bold mb-4 text-white">OneApp-Plus...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to ="/" class="text-red-600 hover:underline">Home</Link> / Case-Study / OneApp-Plus
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://images.unsplash.com/photo-1533022139390-e31c488d69e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFwcHxlbnwwfHwwfHx8MA%3D%3D" alt="Mobile Image" class="w-full h-auto"/>
    </div>
  </div>
</div> 


<div class="sm:mx-20 sm:w-100 p-8 my-10 mx-8 mt-28 mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">"Navigating Your Real Estate Journey"</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://plus.unsplash.com/premium_vector-1682311028452-0220af078701?bg=FFFFFF&w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFwcHxlbnwwfHwwfHx8MA%3D%3D" alt="Mobile Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-left  sm:mx-10">"
    Welcome to the future of real estate exploration with our innovative and user-friendly Real Estate Property Application. Whether you're looking to buy, sell, or rent a property, our app is designed to simplify and streamline your real estate journey like never before.

Refine your property search effortlessly using advanced filters. Specify location, price range, property type, amenities, and more to discover the listings that genuinely resonate with your needs.

Say goodbye to exhausting property visits that may not match your expectations. Our Real Estate Property Application lets you virtually tour properties from anywhere, saving time and energy."
    <br/><br/>
<h1 className='text-black text-lg font-bold'> Convenience and Accessibility</h1>

Our all-in-one delivery app revolutionizes the way people access essential services by offering a single platform for all their needs. Whether you require food delivery from your favorite restaurant, prescription pickups from the pharmacy, or grocery shopping from the comfort of your home, our app provides a seamless and convenient solution. With just a few taps on your smartphone, you can access a wide range of services and have your essentials delivered right to your doorstep.
    <br/><br/>

    <h1 className='text-black text-lg font-bold'>Integrated Service Providers</h1>

    Partnering with a network of trusted service providers, our app ensures that users have access to a diverse range of options for their needs. From local restaurants and pharmacies to grocery stores and convenience stores, we collaborate with reputable establishments to offer quality products and services. This integration streamlines the delivery process, allowing users to place orders effortlessly and track their deliveries in real-time.
<br/><br/>

    <h1 className='text-black text-lg font-bold'>Customized Delivery Options</h1>

    Recognizing that every user has unique preferences and requirements, our app offers customizable delivery options to cater to individual needs. Users can choose their preferred delivery time slots, select specific items or prescriptions, and even schedule recurring deliveries for added convenience. This flexibility empowers users to tailor their delivery experience according to their schedules and preferences, ensuring a personalized and hassle-free service.
    <br/><br/>


<h1 className='text-black text-lg font-bold'>Secure and Contactless Deliveries</h1>

In light of the current global health situation, we prioritize the safety and well-being of our users by implementing strict hygiene protocols and contactless delivery options. Our delivery partners undergo rigorous training and adhere to stringent safety measures to ensure that all deliveries are handled with care and caution. Users can rest assured knowing that their orders will be delivered safely and securely, minimizing the risk of exposure to germs or contaminants.
<br/><br/>

<h1 className='text-black text-lg font-bold'>Community Support and Engagement</h1>

Beyond providing essential services, our app fosters a sense of community by supporting local businesses and initiatives. Through partnerships with neighborhood restaurants, pharmacies, and stores, we contribute to the growth and sustainability of the local economy while providing users with access to quality products and services. Additionally, our app features a feedback system and customer support channels to encourage communication and engagement, allowing users to provide input, share experiences, and contribute to the ongoing improvement of our services.
    <br/><br/>

<h1 className='text-black text-lg font-bold'>Conclusion</h1>

In conclusion, our all-in-one delivery app emerges as a game-changer in the realm of convenience and accessibility, offering users a seamless solution for their essential needs. By integrating a diverse range of services, including food delivery, medicine pickups, and grocery shopping, our app streamlines the delivery process and simplifies the way people access everyday necessities.
<br/><br/>
</p>

<div className="md:flex-1 sm:grid sm:grid-cols-3 flex-row  justify-center items-center  ">
           <div className='border flex border-black px-40 sm:px-3 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap "><i class="fa-solid fa-user"></i> Ganana Prakash</h1>
           </div> 
           <div className='border border-black px-40 sm:px-4 p-2 hover:bg-red-300'><h1 className="text-xl mb-2 text-black text-nowrap "><i class="fa-solid fa-wallet"></i> Budget: $1500</h1></div>
           <div className='border border-black px-40 sm:px-5 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap"><i class="fa-solid fa-clock"></i> Duration: 40 Days</h1></div>
          
          </div>
    </div>

    <div className=" mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center hover:text-red-600">Our Related Case Studies</h2>

      <div className="relative w-full max-w-3xl mx-auto mt-10">
        <div className="overflow-hidden relative">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 text-center">
                <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
                <Link to ={slide.url} className="inline-block mt-8 bg-black text-white px-32 py-4 rounded">{slide.buttonText}</Link>
              </div>
            ))}
          </div>
        </div>

        <button onClick={goToPrevious} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          Prev
        </button>
        <button onClick={goToNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          Next
        </button>
      </div>
    </div> 
    <br/>
    <Footer/>
    </div>
    </>
  )
}

export default OneAppPlus
