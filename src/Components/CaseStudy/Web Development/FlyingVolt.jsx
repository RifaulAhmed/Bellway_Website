import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import CNavbar from '../../../CNavbar';
import Footer from '../../../Footer';

const slides = [

  {
    image: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGFwcHxlbnwwfHwwfHx8MA%3D%3D',
    url: '/case-study/web/oneapp-plus',
    buttonText: 'Discover One-App Plus'
  },
  {
    image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/web/property-dekho',
    buttonText: 'Checkout Property Dekho'
  },
 
  {
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/web/calorie-care',
    buttonText: 'Explore Calorie Care'
  },
];

const FlyingVolt = () => {
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
      <div class="mx-auto bg-black p-8 mt-20">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-8">
      <h1 class="sm:text-8xl font-bold mb-4 text-white">Flying Volt...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to ="/" class="text-red-600 hover:underline">Home</Link> / Case-Study / Flying Volt
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://plus.unsplash.com/premium_photo-1681987448226-f8feb59a58e9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGV2fGVufDB8fDB8fHww" alt="EV Image" class="w-full h-auto"/>
    </div>
  </div>
</div> 


<div class=" sm:mx-20 sm:w-100 p-8 my-10 mt-28 mx-8 mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">"Energizing Your Electric Adventure with Cutting-Edge Services"</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://images.unsplash.com/photo-1711333927567-754b6843ab67?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGdyZWVuJTIwZWxlY3RyaWN8ZW58MHx8MHx8fDA%3D" alt="EV Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-left  sm:mx-10">"
    Welcome to Flying Volt, your comprehensive electric vehicle (EV) service app designed to revolutionize the way you experience and manage electric mobility. From charging to maintenance, we provide a seamless platform that caters to all your EV needs.

Plan your routes with confidence. Flying Volt's app allows you to identify charging stations along your journey, ensuring a worry-free and seamless travel experience.

Discover fast-charging options that get you back on the road in no time. Locate DC fast chargers strategically placed for your convenience during long trips."
    <br/><br/>
<h1 className='text-black text-lg font-bold'> Integrated Charging Station Locator</h1>

Flying Volt's app features an integrated charging station locator, enabling users to effortlessly find the nearest electric vehicle (EV) charging stations. This ensures that users can easily recharge their scooters, reducing the risk of running out of power during their rides.
    <br/><br/>

    <h1 className='text-black text-lg font-bold'> Real-Time Availability</h1>

    The app provides real-time information on the availability of charging stations. Users can see which stations are currently occupied or free, allowing them to plan their trips more effectively and avoid waiting times at busy locations.
<br/><br/>

<h1 className='text-black text-lg font-bold'> Detailed Station Information</h1>

Users can access detailed information about each charging station, including the type of chargers available, charging speed, pricing, and operational hours. This comprehensive data helps users choose the most suitable charging station for their needs.


<br/><br/>

    <h1 className='text-black text-lg font-bold'>User Reviews and Ratings</h1>

    The app includes a community-driven feature where users can leave reviews and ratings for charging stations. This feedback helps other users make informed decisions about where to charge their EVs, based on the experiences of fellow riders.
    <br/><br/>


    <h1 className='text-black text-lg font-bold'>Conclusions</h1>

    In conclusion, Flying Volt's app not only revolutionizes urban mobility with its fleet of electric scooters but also enhances the user experience by simplifying the process of identifying and accessing EV charging stations. With real-time availability, detailed station information, and navigation assistance, users can easily locate and reach charging points, ensuring their scooters remain powered throughout their journeys. By incorporating user reviews and ratings, the app fosters a community-driven approach to selecting the best charging options, further enhancing convenience and reliability. Embrace the future of urban transport with Flying Volt and enjoy seamless, sustainable mobility solutions.
<br/><br/>

</p>

<div className="md:flex-1 sm:grid sm:grid-cols-3 flex-row  justify-center items-center  ">
           <div className='border flex border-black px-40 sm:px-3 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap "><i class="fa-solid fa-user"></i> Flying Volt </h1>
           </div> 
           <div className='border border-black px-40 sm:px-4 p-2 hover:bg-red-300'><h1 className="text-xl mb-2 text-black text-nowrap "><i class="fa-solid fa-wallet"></i> Budget: $2100</h1></div>
           <div className='border border-black px-40 sm:px-5 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap"><i class="fa-solid fa-clock"></i> Duration: 40 Days</h1></div>
          
          </div>
    </div>

    <div className=" mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center hover:text-red-600 ">Our Related Case Studies</h2>

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

export default FlyingVolt
