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
    image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/graphic-design/ur-fine',
    buttonText: 'Discover Ur-Fine'
  },
  {
    image: 'https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
    url: '/case-study/graphic-design/hazel-jewells',
    buttonText: 'Checkout Haze View'
  }
];

const MoviKat = () => {
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
      <h1 class="sm:text-8xl font-bold mb-4 text-white">MoviKat...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to ="/" class="text-red-600 hover:underline">Home</Link> / Case-Study / MoviKat
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW92aWV8ZW58MHx8MHx8fDA%3D" alt="Movie Image" class="w-full h-auto"/>
    </div>
  </div>
</div>


<div class="sm:mx-20 sm:w-100 p-8 my-10 mx-8 mt-28 mybg text-black rounded-lg shadow-lg borderb ">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">"Your Gateway to Cinematic Excellence and Entertainment Delights"</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://images.unsplash.com/photo-1572188863110-46d457c9234d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vdmllJTIwcG9zdGVyfGVufDB8fDB8fHww" alt="Trip Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-left  sm:mx-10">"
    Movies are a part of our life in one or another way , movies are made for our entertainment and it do entertain us in one or another way. Some of them are humourous while some are scaring, some are interesting while some are boring, some are serious, and some are silly. No matter how they our, they are made for entertaining us.So we have a Movikat app to entertain your journey of watching."
    <br/><br/>
<h1 className='text-black text-lg font-bold'>Platform Selection</h1>

Decide on the platforms you want to target, such as iOS, Android, web, smart TVs, and more.
    <br/><br/>

    <h1 className='text-black text-lg font-bold'>Content Acquisition</h1>

    Secure the rights to the movies and web series you want to offer on your platform. This could involve licensing agreements with content producers or distributors.
    <br/><br/>


<h1 className='text-black text-lg font-bold'>
User Interface and Design</h1>
Design an intuitive and user-friendly interface that allows users to browse, search, and discover content easily. Consider factors like personalization, recommendations, and ease of navigation.


<br/><br/>

<h1 className='text-black text-lg font-bold'>
Video Encoding and Streaming</h1>

Implement video encoding to deliver content in different resolutions and bitrates, catering to varying internet speeds and device capabilities.
    <br/><br/>

    

    <h1 className='text-black text-lg font-bold'>Personalization and Recommendations</h1>

    Implement algorithms that analyze user behaviour and preferences to provide personalized content recommendations.
<br/><br/>

<h1 className='text-black text-lg font-bold'>Watchlist and History</h1>

Allow users to create watchlists and track their viewing history across different devices.
<br/><br/>

<h1 className='text-black text-lg font-bold'>Security and DRM</h1>

Implement digital rights management (DRM) to protect content from unauthorized distribution and ensure only authorized users can access it.
<br/><br/>

<h1 className='text-black text-lg font-bold'>Analytics and Insights</h1>
Integrate analytics tools to gather data on user behaviour, engagement, and content performance. This data can help you improve the platform over time.
<br/><br/>


<h1 className='text-black text-lg font-bold'>Continuous Updates</h1>

Plan for ongoing maintenance, updates, and improvements based on user feedback and emerging technologies.
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

export default MoviKat
