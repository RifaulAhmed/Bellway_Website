import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import CNavbar from '../../../CNavbar';


const slides = [
  {
    image: 'https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
    url: '/case-study/graphic-design/hazel-jewells',
    buttonText: 'Checkout Haze View'
  },
  {
    image: 'https://images.unsplash.com/photo-1585951237313-1979e4df7385?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzF8fG1vdmllfGVufDB8fDB8fHww',
    url: '/case-study/graphic-design/movikat',
    buttonText: 'MoviKat'
  },
  {
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJpcHxlbnwwfHwwfHx8MA%3D%3D',
    url: '/case-study/graphic-design/make-your-trip',
    buttonText: 'Make Your Trip'
  }
];

const Team11 = () => {

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
  <div class="containerx mx-auto  bg-black p-8 mt-20">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-8">
      <h1 class="sm:text-8xl font-bold mb-4 text-white">Team 11...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to ="/" class="text-red-600 hover:underline">Home</Link> / Case-Study / Team 11
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://plus.unsplash.com/premium_photo-1661890079209-72b76e49768f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHRlYW0lMjBjcmlja2V0fGVufDB8fDB8fHww" alt="Cricket Image" class="w-full h-auto"/>
    </div>
  </div>
</div>



<div class="sm:mx-20 sm:w-100 p-8 my-10 mx-8 mt-28 mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">"Bellway Infotech Team 11: Empowering Innovation and Excellence in IT Solutions"</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://bellwayinfotech.com/assets/uploads/media-uploader/team-11691748823.jpg" alt="House Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-left  sm:mx-10">
    "Team 11 is a popular fantasy sports platform. Players can create virtual teams using real-life players from sports such as cricket, football, basketball, kabaddi, and others. Users can then earn points based on the performance of the selected players in actual matches.
    <br/><br/>
    Bellway Infotech, we take pride in our dynamic and talented team, and "Team 11" is no exception. Comprising a group of passionate innovators, skilled developers, creative designers, and visionary leaders, Team 11 plays a pivotal role in driving our company's success and delivering exceptional IT solutions to our clients. Let's take a closer look at the individuals who make up this extraordinary team."
    <br/><br/>
<h1 className='text-black text-lg font-bold'> Team Selection</h1>

Users can participate in contests by selecting a team of real players from upcoming matches. Each player is assigned a specific credit value, and users need to create a balanced team within a budget constraint.
    <br/><br/>

    <h1 className='text-black text-lg font-bold'> Contest Participation</h1>

    After selecting the team, users can join different types of contests with varying entry fees and prize amounts. Dream11 offers a range of contests to suit different budgets and preferences.
    <br/><br/>



    <h1 className='text-black text-lg font-bold'>Conclusion</h1>

Team 11 represents a groundbreaking solution to the challenges plaguing the real fantasy cricket, offering a comprehensive, user-centric platform for cricket lovers. By aggregating listings from various sources and ensuring their verification, the app provides users with a trustworthy and extensive database of players to explore.It may contains risk of loosing it should be used wisely.
<br/><br/>
</p>

<div className="md:flex-1 sm:grid sm:grid-cols-3 flex-row  justify-center items-center  ">
           <div className='border flex border-black px-40 sm:px-3 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap "><i class="fa-solid fa-user"></i> Team 11</h1>
           </div> 
           <div className='border border-black px-40 sm:px-4 p-2 hover:bg-red-300'><h1 className="text-xl mb-2 text-black text-nowrap "><i class="fa-solid fa-wallet"></i> Budget: $700</h1></div>
           <div className='border border-black px-40 sm:px-5 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap"><i class="fa-solid fa-clock"></i> Duration: 20 Days</h1></div>
          
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
    </>
  )
}

export default Team11
