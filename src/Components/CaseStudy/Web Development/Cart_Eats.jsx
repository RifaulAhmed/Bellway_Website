import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import CNavbar from '../../../CNavbar';
import Footer from '../../../Footer';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1631009719873-d62e4a0c93c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGdyZWVuJTIwZWxlY3RyaWN8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/web/flying-volt',
    buttonText: 'Move to Flying-Volt'
   
  },
  {
    image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/bellway-food-poster-compressed1689941183.jpg',
    url: '/case-study/web/eat-cart',
    buttonText: 'Discover D-Cart Eats'
  },
  {
    image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/web/property-dekho',
    buttonText: 'Checkout Property Dekho'
  }
];

const Cart_Eats = () => {
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
       <div class="containerx mx-auto  bg-black p-8 mt-20">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-8">
      <h1 class="sm:text-8xl font-bold mb-4 text-white">D-Cart Eats...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to ="/" class="text-red-600 hover:underline">Home</Link> / Case-Study / D-Cart Eats 
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://images.unsplash.com/photo-1564216550945-b9aca66d0a10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZvb2QlMjBhcHB8ZW58MHx8MHx8fDA%3D" alt="Food Image" class="w-full h-auto"/>
    </div>
  </div>
</div> 

<div class="sm:mx-20 sm:w-100 p-8 my-10 mx-8 mt-28 mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">Welcome to Bellway Infotech E-commerce Solutions: Elevate Your Online Retail Experience</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://bellwayinfotech.com/assets/uploads/media-uploader/bellway-food-poster-compressed1689941183.jpg" alt="Food Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-left  sm:mx-10">
    "Welcome to the Bellway Food App, a revolutionary mobile application designed to transform the way you order food. Developed by Bellway Infotech, this app connects you to a wide array of local restaurants and food delivery services, providing a seamless and enjoyable ordering experience right at your fingertips."
    <br/><br/>
<h1 className='text-black text-lg font-bold'>Download and Sign Up</h1>

Getting started with the Bellway Food App is simple and straightforward. First, download the app from your preferred app store—whether you use an iPhone or an Android device, you can find the Bellway Food App on both the App Store and Google Play Store. Once the download is complete, open the app and you'll be prompted to sign up. You can easily create an account using your email address or streamline the process by linking your social media accounts such as Facebook or Google. This quick sign-up process ensures that you can start exploring the app’s features without any delay.
    <br/><br/>

    <h1 className='text-black text-lg font-bold'>Browse and Order</h1>

    "With your account set up, dive into the wide array of options available. The Bellway Food App offers a comprehensive directory of local restaurants, featuring an extensive range of cuisines to suit every taste. Whether you're in the mood for Italian, Chinese, Indian, or something else, you'll find it here. The intuitive interface allows you to filter results by cuisine, dietary preferences, or even specific dishes. Customizing your order is a breeze—select your desired items, specify portion sizes, and add any special instructions to suit your dietary needs. This ensures that your meal is prepared exactly the way you like it."
    <br/><br/>


    
    <h1 className='text-black text-lg font-bold'> Payment and Delivery</h1>

    "After finalizing your order, proceed to the payment section. The Bellway Food App supports multiple payment options, including credit and debit cards, digital wallets like PayPal, and even cash on delivery for your convenience. Once your payment method is selected, confirm your order. You can then track its progress in real-time. From preparation to dispatch and delivery, the app keeps you updated at every step, so you know exactly when to expect your food."
    <br/><br/>


<h1 className='text-black text-lg font-bold'> Conclusion</h1>

"The Bellway Food App is not just another food delivery service; it's a comprehensive solution designed to enhance your dining experience. With a focus on user convenience, restaurant efficiency, and continuous innovation, Bellway Infotech is dedicated to delivering exceptional value to both users and restaurant partners. Download the Bellway Food App today and join us in transforming the future of food delivery."
<br/><br/>

</p>


    

    <div className="md:flex-1 sm:grid sm:grid-cols-3 flex-row  justify-center items-center  ">
           <div className='border flex border-black px-40 sm:px-3 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap"><i class="fa-solid fa-user"></i> Cart_Eats</h1>
           </div> 
           <div className='border border-black px-40 sm:px-4 p-2 hover:bg-red-300'><h1 className="text-xl mb-2 text-black text-nowrap "><i class="fa-solid fa-wallet"></i> Budget: $1400</h1></div>
           <div className='border border-black px-40 sm:px-5 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap"><i class="fa-solid fa-clock"></i> Duration: 30 Days</h1></div>
          
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

export default Cart_Eats
