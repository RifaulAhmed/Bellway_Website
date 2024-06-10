import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import CNavbar from '../../../CNavbar';
import Footer from '../../../Footer';


const slides = [
  {
    image: 'https://images.unsplash.com/photo-1612323272007-3e7c28f6eb05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHpvZGlhYyUyMGNhcmR8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/web/goto-astro',
    buttonText: 'Discover Go-Astro'
  },
  {
    image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/lazy-bazar-21692356159.jpg',
    url: '/case-study/web/lazy-bazar',
    buttonText: 'Move to Lazy Bazar'
  },
  {
    image: 'https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
    url: '/case-study/web/hazel-jewells',
    buttonText: 'Checkout Haze View'
  }
];

const PropertyDekho = () => {

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
      <h1 class="sm:text-8xl font-bold mb-4 text-white">Property Dekho...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to="/" class="text-red-600 hover:underline">Home</Link> / Case-Study / Property Dekho 
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D" alt="House Image" class="w-full h-auto"/>
    </div>
  </div>
</div>


<div class="sm:mx-20 sm:w-100 p-8 my-10 mx-8 mt-28 mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">"Navigating Your Real Estate Journey"</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://bellwayinfotech.com/assets/uploads/media-uploader/propty-dekho-71692358774.jpg" alt="HouseImage" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-left  sm:mx-10">"
    Welcome to the future of real estate exploration with our innovative and user-friendly Real Estate Property Application. Whether you're looking to buy, sell, or rent a property, our app is designed to simplify and streamline your real estate journey like never before.

Refine your property search effortlessly using advanced filters. Specify location, price range, property type, amenities, and more to discover the listings that genuinely resonate with your needs.

Say goodbye to exhausting property visits that may not match your expectations. Our Real Estate Property Application lets you virtually tour properties from anywhere, saving time and energy."
    <br/><br/>
<h1 className='text-black text-lg font-bold'>Comprehensive Listings</h1>

    Property Dekho stands out for its extensive database of property listings, sourced from various reliable sources including real estate agencies, individual property owners, and reputable online platforms. This aggregation ensures that users have access to a wide range of properties, spanning different types (residential, commercial, etc.) and locations. Moreover, the listings are regularly updated to reflect the latest availability and pricing, ensuring accuracy and relevancy in the search results.
    <br/><br/>

    <h1 className='text-black text-lg font-bold'>Advanced Search Filters</h1>

    One of the distinguishing features of Property Dekho is its advanced search functionality. Users can customize their search based on specific criteria such as location, property type, price range, amenities, and more. This granular level of customization allows users to narrow down their search and find properties that precisely match their requirements, saving time and effort in the process. Whether users are looking for a cozy apartment in the city or a spacious villa in the suburbs, Property Dekho empowers them to find their dream property with ease.
    <br/><br/>


<h1 className='text-black text-lg font-bold'>Verified Listings</h1>

In a market where authenticity and trustworthiness are paramount, Property Dekho ensures that all listed properties undergo a thorough verification process. This involves collaboration with real estate agents and property owners to authenticate the details and legality of each listing. Additionally, user reviews and ratings further validate the credibility of the listings, providing prospective buyers and renters with confidence in their decision-making process.
<br/><br/>

<h1 className='text-black text-lg font-bold'>Interactive Maps</h1>

    To enhance the property search experience, Property Dekho integrates interactive maps powered by Google Maps. Users can visualize properties in their exact geographical locations, allowing for better spatial understanding and context. Moreover, the maps highlight nearby amenities such as schools, hospitals, parks, and public transportation options, enabling users to evaluate the neighborhood suitability along with the property itself.
    <br/><br/>

    <h1 className='text-black text-lg font-bold'>Virtual Tours and High-Quality Images</h1>

    Property Dekho leverages technology to offer immersive experiences for users through 360-degree virtual tours and high-resolution images. These visual assets provide a comprehensive view of the properties, allowing users to explore every corner and detail without physically visiting the site. This not only saves time and resources but also facilitates informed decision-making by enabling users to assess the property's condition, layout, and ambiance remotely.
    <br/><br/>
    <h1 className='text-black text-lg font-bold'>Personalized Recommendations</h1>

    Understanding that every user's preferences and priorities are unique, Property Dekho employs machine learning algorithms to deliver personalized property recommendations. By analyzing user behavior, search history, and saved preferences, the app intelligently suggests properties that align with the user's interests and requirements. This tailored approach enhances user engagement and satisfaction by presenting relevant options that resonate with their preferences, ultimately streamlining the property discovery process.
    <br/><br/>

    <h1 className='text-black text-lg font-bold'>Conclusion</h1>

Property Dekho represents a groundbreaking solution to the challenges plaguing the real estate market, offering a comprehensive, user-centric platform for property seekers. By aggregating listings from various sources and ensuring their verification, the app provides users with a trustworthy and extensive database of properties to explore. Advanced search filters, interactive maps, and immersive visual experiences elevate the property search journey, empowering users to find their ideal property with ease.
<br/><br/>
</p>

<div className="md:flex-1 sm:grid sm:grid-cols-3 flex-row  justify-center items-center  ">
           <div className='border flex border-black px-40 sm:px-3 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap "><i class="fa-solid fa-user"></i> Property Dekho</h1>
           </div> 
           <div className='border border-black px-40 sm:px-4 p-2 hover:bg-red-300'><h1 className="text-xl mb-2 text-black text-nowrap "><i class="fa-solid fa-wallet"></i> Budget: $1000</h1></div>
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
    <br/>
    <Footer/> 
    </div>
    </>
  )
}

export default PropertyDekho
