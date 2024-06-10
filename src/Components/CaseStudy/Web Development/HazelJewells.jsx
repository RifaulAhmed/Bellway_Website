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
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/web/calorie-care',
    buttonText: 'Explore Calorie Care'
  },
  {
    image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/web/property-dekho',
    buttonText: 'Checkout Property Dekho'
  }
];

const HazelJewells = () => {

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
          <div class=" mx-auto  bg-black p-8 mt-20">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-8">
      <h1 class="sm:text-8xl font-bold mb-4 text-white">Haze Jewells...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to ="/" class="text-red-600 hover:underline">Home</Link> / Case-Study / Haze Jewells
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://images.unsplash.com/photo-1600862754152-80a263dd564f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D" alt="Jewellary Image" class="w-full h-auto"/>
    </div>
  </div>
</div>

<div class="sm:mx-20 sm:w-100 p-8 my-10 mx-8 mt-28 mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">"Discover the exquisite world of Haze Jewells with our user-friendly website overview"</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://bellwayinfotech.com/assets/uploads/media-uploader/haze-poster-2-compressed1691750565.jpg" alt="Jewellary Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-left  sm:mx-10">"
    We, at Haze Jewells, do our best to provide you with the best 925 Silver jewellery which we design/select. Our only goal is to provide you with the finest trendy jewellery available on the internet.

Explore our curated collections of jewellery, each reflecting a unique blend of artistry, craftsmanship, and inspiration. From timeless classics to contemporary designs, we offer a piece for every style and occasion."
    <br/><br/>
<h1 className='text-black text-lg font-bold'>Exquisite Collections</h1>

Haze Jewells offers a diverse range of exquisite jewelry collections, from timeless classics to modern designs. Each piece is crafted with meticulous attention to detail, ensuring a perfect blend of elegance and sophistication for every occasion.
    <br/><br/>

    <h1 className='text-black text-lg font-bold'>Quality Craftsmanship</h1>

    Our jewelry is created by skilled artisans who use only the finest materials, including ethically sourced diamonds, precious metals, and gemstones. This commitment to quality craftsmanship ensures that every piece is not only beautiful but also durable and long-lasting.
    <br/><br/>


<h1 className='text-black text-lg font-bold'> Custom Design Services</h1>

At Haze Jewells, we believe in celebrating individuality. Our custom design services allow you to create bespoke jewelry that reflects your unique style and personality. Work with our expert designers to bring your vision to life, creating a one-of-a-kind piece that you’ll cherish forever.
<br/><br/>

<h1 className='text-black text-lg font-bold'>Exceptional Customer Service</h1>

Haze Jewells is dedicated to providing exceptional customer service. Our knowledgeable and friendly team is always ready to assist you with any questions or concerns, ensuring a seamless and enjoyable shopping experience from start to finish.
    <br/><br/>

    

    <h1 className='text-black text-lg font-bold'>Conclusion</h1>

    In conclusion, Haze Jewells stands out as a premier jewelry destination, offering exquisite collections, quality craftsmanship, and personalized custom designs. With a secure online shopping platform and exceptional customer service, we ensure that every customer enjoys a seamless and satisfying experience. Discover the perfect piece that reflects your style and celebrates your special moments with Haze Jewells.
<br/><br/>
</p>

<div className="md:flex-1 sm:grid sm:grid-cols-3 flex-row  justify-center items-center  ">
           <div className='border flex border-black px-40 sm:px-3 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap "><i class="fa-solid fa-user"></i> Kunal</h1>
           </div> 
           <div className='border border-black px-40 sm:px-4 p-2 hover:bg-red-300'><h1 className="text-xl mb-2 text-black text-nowrap "><i class="fa-solid fa-wallet"></i> Budget: $1500</h1></div>
           <div className='border border-black px-40 sm:px-5 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap"><i class="fa-solid fa-clock"></i> Duration: 35 Days</h1></div>
          
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

export default HazelJewells
