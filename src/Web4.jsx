import React from 'react'
import { useState } from 'react';
import CNavbar from './CNavbar';


const slides = [
  {
    image: 'https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
    url: '/case-study/web/hazel-jewells',
    buttonText: 'Checkout Hazel View'
  },
  {
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/web/calorie-care',
    buttonText: 'Explore Calorie Care'
  },
  {
    image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/bellway-food-poster-compressed1689941183.jpg',
    url: '/case-study/web/eat-cart',
    buttonText: 'Discover D-Cart Eats'
  }
];


const GoToAstro = () => {


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
<div class="container mx-auto my-5 bg-black p-8">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0">
      <h1 class="text-8xl font-bold mb-4 text-white">Go To Astro...</h1>
      <h3 class="text-2xl text-white">
        <a href="/" class="text-red-600 hover:underline">Home</a> / Case-Study / Go To Astro
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://plus.unsplash.com/premium_photo-1693007962564-af5f2adfb8c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzN8fGFzdHJvJTIwY2FyZHN8ZW58MHx8MHx8fDA%3D" alt="Team" class="w-full h-auto"/>
    </div>
  </div>
</div>


<div class="sm:mx-20 sm:w-100 p-8 my-10 mx-2 mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">"Unlock the Universe's Wonders with Go to Astro, Your Personal Cosmic Guide"</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://plus.unsplash.com/premium_photo-1693007962946-954f55006377?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXN0cm8lMjBjYXJkJTIwd29tZW58ZW58MHx8MHx8fDA%3D" alt="Blog Post Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
  
    <p class="text-black mb-6 sm:text-left  sm:mx-10">
   <b> gotoAstro</b> is a digital venture of Jyotish Sagar, to bring their 25 years of experience and create India's largest digital one-stop solution for Astrology. The platform brings the ability to: - Consult real-time with leading Astrologers, Numerologists, Vastu Experts, etc. <br/> Buy authentic and certified Gemstones, Rudraksha and other Astrology related items online. <br/> Book and Perform online poojas remotely. - Read Monthly Jyotish Sagar Magazine. - Learn Astrology and get certified. - Get free and premium Astrology services such as Horoscope, Match Making, Panchang, etc online.


    <br/><br/>
<h1 className='text-black text-lg font-bold'>Educational Content</h1>

Astronomy Cards is more than just a collection of stunning visuals; it's a comprehensive educational tool designed to spark curiosity and deepen understanding of the cosmos. Each card is meticulously crafted to present fascinating facts, astronomical phenomena, and celestial wonders in an accessible and engaging format. Whether you're a novice stargazer or a seasoned astronomer, Astronomy Cards offers something for everyone, making learning about the universe an enriching and rewarding experience.
    <br/><br/>

    <h1 className='text-black text-lg font-bold'> Rich Visuals and Information</h1>

    Dive into the captivating world of astronomy with our visually stunning cards, featuring high-resolution images of celestial objects, nebulae, galaxies, and more. Each card is accompanied by detailed information, providing valuable insights into the object's composition, history, and significance in the cosmos. Whether you're exploring the intricate details of a distant galaxy or marveling at the beauty of a planetary nebula, Astronomy Cards brings the wonders of the universe to life like never before.
    <br/><br/>




<h1 className='text-black text-lg font-bold'> Interactive Features</h1>

Astronomy Cards goes beyond static imagery, offering interactive features that enhance the learning experience. Users can zoom in on celestial objects, rotate them for a 360-degree view, and explore additional multimedia content such as videos, animations, and audio narrations. This interactive approach not only makes learning more immersive but also caters to different learning styles, ensuring that users can engage with the material in a way that suits them best.
    <br/><br/>

    <h1 className='text-black text-lg font-bold'>Customizable Learning Paths</h1>

    With Astronomy Cards, users have the flexibility to create customized learning paths tailored to their interests and preferences. Whether you're fascinated by the planets of our solar system, intrigued by black holes and supernovae, or curious about the mysteries of dark matter and dark energy, Astronomy Cards allows you to focus on the topics that captivate you the most. This personalized approach fosters a deeper connection with the subject matter, empowering users to explore and learn at their own pace.
    <br/><br/>
    <h1 className='text-black text-lg font-bold'>Community Engagement and Collaboration</h1>

    Astronomy Cards isn't just an app; it's a vibrant community of astronomy enthusiasts, educators, and experts coming together to share knowledge, ask questions, and inspire each other. Through discussion forums, live Q&A sessions, and collaborative projects, users can connect with like-minded individuals from around the world, fostering a sense of belonging and camaraderie. Whether you're seeking guidance on a complex astronomical concept or eager to share your latest astrophotography, Astronomy Cards provides a welcoming space for collaboration and discovery.
    <br/><br/>

    

    <h1 className='text-black text-lg font-bold'>Conclusion</h1>

    In conclusion, Astronomy Cards stands as a beacon of enlightenment in the vast expanse of the cosmos, offering users a gateway to explore the wonders of astronomy like never before. Through its rich educational content, stunning visuals, interactive features, customizable learning paths, and vibrant community engagement, Astronomy Cards transcends the boundaries of traditional learning and transforms the study of the universe into an immersive and enriching experience.
<br/><br/>
</p>

<div className="md:flex-1 sm:grid sm:grid-cols-3 flex-row  justify-center items-center  ">
            <div className='border flex border-black px-40 sm:px-3 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap "><i class="fa-solid fa-user"></i> Go To Astro</h1>
            </div> 
            <div className='border border-black px-40 sm:px-4 p-2 hover:bg-red-300'><h1 className="text-xl mb-2 text-black text-nowrap "><i class="fa-solid fa-wallet"></i> Budget: $1400</h1></div>
            <div className='border border-black px-40 sm:px-5 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap"><i class="fa-solid fa-clock"></i> Duration: 25 Days</h1></div>
          
          </div>
    </div>

    <div className="containerx mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center hover:text-red-600">Our Related Case Studies</h2>

      <div className="relative w-full max-w-3xl mx-auto">
        <div className="overflow-hidden relative">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 text-center">
                <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
                <a href={slide.url} className="inline-block mt-8 bg-black text-white px-32 py-5 rounded">{slide.buttonText}</a>
              </div>
            ))}
          </div>
        </div>

        <button onClick={goToPrevious} className=" absolute w-9 top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          Prev
        </button>
        <button onClick={goToNext} className=" w-9 absolute  top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          Next
        </button>
      </div>
    </div> 
    </>
  )
}

export default GoToAstro
