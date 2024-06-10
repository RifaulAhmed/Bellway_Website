import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import CNavbar from '../../../CNavbar';
import Footer from '../../../Footer';


const slides = [

  {
    image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/web/property-dekho',
    buttonText: 'Checkout Property Dekho'
  },
  {
    image: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGFwcHxlbnwwfHwwfHx8MA%3D%3D',
    url: '/case-study/web/oneapp-plus',
    buttonText: 'Discover One-App Plus'
  },
  {
    image: 'https://images.unsplash.com/photo-1612323272007-3e7c28f6eb05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHpvZGlhYyUyMGNhcmR8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/web/goto-astro',
    buttonText: 'Explore GoTo-Astro'
  },
];

const CalorieCare = () => {

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
      <h1 class="sm:text-8xl font-bold mb-4 text-white">Calorie Care...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to ="/" class="text-red-600 hover:underline">Home</Link> / Case-Study / Calorie Care
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://images.unsplash.com/photo-1495214783159-3503fd1b572d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Food Image" class="w-full h-auto"/>
    </div>
  </div>
</div> 


<div class="sm:mx-20 sm:w-100 p-8 my-10 mx-8 mt-28 mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">"Experience Next-Level Nutrition with Calorie Care's Cutting-Edge App"</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk1fHxoZWFsdGh5JTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="Food Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-left  sm:mx-10">"
    Welcome to Calorie Care, your partner in achieving your health and fitness goals. Our app is designed to empower you with innovative features that simplify healthy eating, track your progress, and make every step of your journey enjoyable.

Experience the convenience of tailor-made meal plans that align with your dietary preferences, health goals, and lifestyle. From weight management to muscle gain, we've got you covered."
    <br/><br/>
<h1 className='text-black text-lg font-bold'>Health-Conscious Convenience</h1>

Calorie Care is your ultimate health companion, designed to simplify the process of maintaining a nutritious diet amidst the hustle and bustle of daily life. Our app offers a seamless solution for individuals seeking health-conscious meal options that prioritize both taste and well-being. Whether you're a busy professional, a fitness enthusiast, or someone looking to make healthier food choices, Calorie Care provides a convenient platform to access a wide array of nutritious meals tailored to your dietary preferences and lifestyle.
    <br/><br/>

    <h1 className='text-black text-lg font-bold'>Curated Meal Plans and Options</h1>

    With Calorie Care, you gain access to a meticulously curated selection of meal plans and options, each designed by expert nutritionists and chefs to meet specific health goals and dietary requirements. From weight management to muscle gain, diabetic-friendly to gluten-free, our diverse range of meal options ensures that there's something for everyone. Whether you're looking for a quick and healthy breakfast, a satisfying lunch, or a wholesome dinner, Calorie Care has you covered with delicious and nutritious meals that fuel your body and mind.
<br/><br/>

<h1 className='text-black text-lg font-bold'>Customized Delivery Preferences</h1>

We understand that flexibility is key when it comes to managing your dietary needs, which is why Calorie Care offers customizable delivery preferences tailored to your schedule and lifestyle. Whether you prefer daily deliveries to ensure freshness, weekly meal plans for added convenience, or on-demand ordering for flexibility, our app allows you to personalize your delivery schedule according to your needs. With Calorie Care, you can enjoy the convenience of healthy eating without compromising on your busy lifestyle.
<br/><br/>

    <h1 className='text-black text-lg font-bold'>Quality Ingredients and Preparation</h1>

    At Calorie Care, we believe that quality ingredients and meticulous preparation are the foundation of every healthy meal. That's why we source the freshest, highest-quality ingredients from trusted suppliers and prepare our meals with care and attention to detail. Our team of experienced chefs crafts each dish to perfection, ensuring optimal taste, texture, and nutritional value. With Calorie Care, you can trust that every meal is not only delicious but also packed with essential nutrients to support your overall health and well-being.
    <br/><br/>




<h1 className='text-black text-lg font-bold'>Community Support and Engagement</h1>

Beyond providing nutritious meals, Calorie Care fosters a sense of community and support among its users. Through our app, users can connect with nutrition experts, share recipes and wellness tips, and participate in challenges and events designed to promote healthy living. This sense of camaraderie and encouragement motivates users to stay committed to their health goals and inspires them to make positive changes in their lives. With Calorie Care, you're not just getting healthy meals – you're joining a community dedicated to helping you live your healthiest, happiest life.
    <br/><br/>

<h1 className='text-black text-lg font-bold'>Conclusion</h1>

In conclusion, Calorie Care emerges as a beacon of health-conscious convenience, offering users a comprehensive solution to their dietary needs. With a diverse range of curated meal plans and options, customizable delivery preferences, and a commitment to quality ingredients and preparation, Calorie Care provides a seamless and convenient way to maintain a nutritious diet in today's fast-paced world.
<br/><br/>
</p>

<div className="md:flex-1 sm:grid sm:grid-cols-3 flex-row  justify-center items-center  ">
           <div className='border flex border-black px-40 sm:px-3 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap "><i class="fa-solid fa-user"></i> Calorie Care </h1>
           </div> 
           <div className='border border-black px-40 sm:px-4 p-2 hover:bg-red-300'><h1 className="text-xl mb-2 text-black text-nowrap "><i class="fa-solid fa-wallet"></i> Budget: $1800</h1></div>
           <div className='border border-black px-40 sm:px-5 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap"><i class="fa-solid fa-clock"></i> Duration: 45 Days</h1></div>
          
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

export default CalorieCare
