import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import CNavbar from '../../../CNavbar';
import Footer from '../../../Footer';


const slides = [
  {
    image: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y3JpY2tldHxlbnwwfHwwfHx8MA%3D%3D',
    url: '/case-study/graphic-design/team-11',
    buttonText: 'Team 11'
  },
  {
    image: 'https://images.unsplash.com/photo-1585951237313-1979e4df7385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vdmllfGVufDB8fDB8fHww',
    url: '/case-study/graphic-design/movikat',
    buttonText: 'MoviKat'
  },
  {
    image: 'https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
    url: '/case-study/graphic-design/hazel-jewells',
    buttonText: 'Checkout Haze View'
  }
];

const MakeYourTrip = () => {
  
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
       <div class="containerx mx-auto bg-black p-8 mt-20">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-8">
      <h1 class="sm:text-8xl font-bold mb-4 text-white">Make Your Trip...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to ="/" class="text-red-600 hover:underline">Home</Link> / Case-Study / Make Your Trip
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://plus.unsplash.com/premium_photo-1684407617181-275e50374e95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dHJpcHxlbnwwfHwwfHx8MA%3D%3D" alt="Trip Image" class="w-full h-auto"/>
    </div>
  </div>
</div>


<div class="sm:mx-20 sm:w-100 p-8 my-10 mx-8 mybg text-black rounded-lg shadow-lg borderb mt-28">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">"Elevate Your Travels with MakeYourTrip's Top-notch SEO Services"</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://images.unsplash.com/photo-1698594691248-098745498ef7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTAyfHx0cmlwJTIwZmxpZ2h0fGVufDB8fDB8fHww" alt="Trip Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-left  sm:mx-10">"
    Welcome to MakeYourTrip's premier SEO service for travel enthusiasts! Embark on a virtual journey with us as we explore how our innovative app can elevate your travel experiences. From dreamy destinations to seamless planning, our app is your gateway to a world of unforgettable adventures."
    <br/><br/>
<h1 className='text-black text-lg font-bold'>Discover Your Dream Destinations</h1>

Unveil a world of possibilities as you use the MakeYourTrip app to discover your next dream destination. With a vast database of exotic locales, historical sites, and natural wonders, our app assists you in selecting the perfect spot for your upcoming adventure.
    <br/><br/>

    <h1 className='text-black text-lg font-bold'>Personalized Trip Recommendations</h1>

    Our AI-driven algorithms analyze your preferences, budget, and travel history to curate personalized trip recommendations just for you. Whether you're a nature lover, a history buff, or a beach bum, we've got tailored suggestions that cater to your interests.
    <br/><br/>


<h1 className='text-black text-lg font-bold'>  Best Deals and Offers</h1>

Travelling doesn't have to break the bank! Our app scours the web for the best deals and discounts on flights, hotels, and activities. Enjoy incredible savings without compromising on the quality of your travel experience.
<br/><br/>

<h1 className='text-black text-lg font-bold'>Seamless Itinerary Planning</h1>

Bid farewell to the hassle of planning every detail. Our itinerary planning feature allows you to effortlessly create day-to-day plans, complete with must-visit attractions, dining options, and leisure activities. Stay organized and make the most of every moment.
    <br/><br/>

    

    <h1 className='text-black text-lg font-bold'>Real-time Flight and Hotel Booking</h1>

    Book your flights and accommodations in real time through the MakeYourTrip app. Say goodbye to multiple tabs and endless searches – we bring everything you need under one roof for a streamlined booking process.
<br/><br/>

<h1 className='text-black text-lg font-bold'>Real-time Flight and Hotel Booking</h1>

Book your flights and accommodations in real time through the MakeYourTrip app. Say goodbye to multiple tabs and endless searches – we bring everything you need under one roof for a streamlined booking process.
<br/><br/>

<h1 className='text-black text-lg font-bold'>Real-time Flight and Hotel Booking</h1>

Book your flights and accommodations in real time through the MakeYourTrip app. Say goodbye to multiple tabs and endless searches – we bring everything you need under one roof for a streamlined booking process.
<br/><br/>

<h1 className='text-black text-lg font-bold'>Traveler Reviews and Recommendations</h1>

Get insights from fellow travellers who have visited your chosen destination. Read honest reviews, find hidden gems, and make informed decisions about where to stay, dine, and explore.
<br/><br/>


<h1 className='text-black text-lg font-bold'>Travel Safety and Guideline</h1>

Stay up-to-date with the latest travel advisories, safety guidelines, and COVID-19 protocols for your chosen destination. Your safety is our priority, and we provide you with the information you need to travel with confidence.
<br/><br/>

<h1 className='text-black text-lg font-bold'>Create a Personal Travel Journal</h1>

Document your adventures, thoughts, and memories with our in-app travel journal. Chronicle your journey with photos, notes, and mementoes, and relive your experiences whenever you like.
<br/><br/>

<h1 className='text-black text-lg font-bold'> 24/7 Customer Support:</h1>

Have questions or need assistance? Our dedicated customer support team is available around the clock to address your inquiries and ensure a smooth travel experience from start to finish.
<br/><br/>

<h1 className='text-black text-lg font-bold'>Conclusion</h1>

MakeYourTrip is more than just an app; it's your travel companion, your guide, and your ticket to exploring the world in new and exciting ways. Start your journey today by downloading the app and embarking on a seamless, enjoyable, and unforgettable travel adventure!
<br/><br/>



</p>

<div className="md:flex-1 sm:grid sm:grid-cols-3 flex-row  justify-center items-center  ">
           <div className='border flex border-black px-40 sm:px-3 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap "><i class="fa-solid fa-user"></i> Make Your Trip</h1>
           </div> 
           <div className='border border-black px-40 sm:px-4 p-2 hover:bg-red-300'><h1 className="text-xl mb-2 text-black text-nowrap "><i class="fa-solid fa-wallet"></i> Budget: $2000</h1></div>
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

export default MakeYourTrip
