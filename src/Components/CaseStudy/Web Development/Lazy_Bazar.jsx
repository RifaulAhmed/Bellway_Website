import React from 'react';
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
    image: 'https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
    url: '/case-study/web/hazel-jewells',
    buttonText: 'Checkout Haze View'
  }
];


const Lazy_Bazar = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
    <CNavbar/>
    <div className="mybg">
      <div class=" mx-auto  bg-black p-8 mt-20">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-8">
      <h1 class="sm:text-8xl font-bold mb-4 text-white">Lazy Bazar...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to ="/" class="text-red-600 hover:underline">Home</Link> / Case-Study / Lazy-Bazar 
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://plus.unsplash.com/premium_photo-1661766932281-378bf3cc18a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmF6YXJ8ZW58MHx8MHx8fDA%3D" alt="Lazy Bazar Image" class="w-full h-auto"/>
    </div>
  </div>
</div>


<div class="sm:mx-20 sm:w-100 p-8 my-10 mx-8 mt-28 mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">Make the most of your learning with the LLN app</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://bellwayinfotech.com/assets/uploads/media-uploader/lazy-bazar-21692356159.jpg" alt="Lazy Bazar Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-left  sm:mx-10">"
    In today’s dynamic world, maximizing your learning potential is essential. The LLN (Learning, Literacy, and Numeracy) app is designed to help you achieve just that. Whether you’re a student, a professional, or someone looking to enhance your skills, the LLN app offers a comprehensive suite of tools and resources tailored to your unique learning needs."
    <br/><br/>
<h1 className='text-black text-lg font-bold'>Personalized Learning Experience</h1>

    The LLN app provides a personalized learning journey that adapts to your individual strengths and weaknesses. Through sophisticated algorithms and AI-driven assessments, the app identifies your learning style and customizes content to ensure you get the most out of every session. This personalized approach keeps you engaged and motivated, making learning more effective and enjoyable."
    <br/><br/>

    <h1 className='text-black text-lg font-bold'>Community and Collaboration</h1>

    "Learning is often more effective when done with others. The LLN app includes a vibrant community of learners where you can share experiences, ask questions, and collaborate on projects. Join study groups, participate in discussions, and get insights from peers and experts alike. This sense of community fosters a supportive learning environment that can significantly enhance your educational experience."
    <br/><br/>


<h1 className='text-black text-lg font-bold'>Conclusion</h1>

"The LLN app is more than just a learning tool; it’s a comprehensive platform designed to help you reach your full potential. With personalized content, engaging materials, and a supportive community, the app transforms the way you learn and grow. Embrace the future of education and make the most of your learning with the LLN app."
<br/><br/>

This Platform Buid from Scratch, and allow the user to learn with modern technology,<br/>

<b>Frontend:</b> Flutter <br/>

<b>Backend:</b> Laravel</p>

<div className="md:flex-1 sm:grid sm:grid-cols-3 flex-row  justify-center items-center  ">
           <div className='border flex border-black px-40 sm:px-3 p-2 hover:bg-white'><h1 className="text-lg mb-2 text-black text-nowrap"><i class="fa-solid fa-user"></i> Lazy-Bazar</h1>
           </div> 
           <div className='border border-black px-40 sm:px-4 p-2 hover:bg-white'><h1 className="text-xl mb-2 text-black text-nowrap "><i class="fa-solid fa-wallet"></i> Budget: $2000</h1></div>
           <div className='border border-black px-40 sm:px-5 p-2 hover:bg-white'><h1 className="text-lg mb-2 text-black text-nowrap"><i class="fa-solid fa-clock"></i> Duration: 45 Days</h1></div>
          
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

export default Lazy_Bazar
