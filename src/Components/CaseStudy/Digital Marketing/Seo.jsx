import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import CNavbar from '../../../CNavbar';
import Footer from '../../../Footer';

const slides = [
 {

  image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FsYWR8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/digital-marketing/calorie-care',
    buttonText: 'Explore Calorie Care'
},
{
  image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D',
  url: '/case-study/digital-marketing/ur-fine',
  buttonText: 'Discover Ur-Fine'
},
{
  image: 'https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nzl8fGFwcHxlbnwwfHwwfHx8MA%3D%3D',
  url: '/case-study/digital-marketing/oneapp-plus',
  buttonText: 'Discover One-App Plus'
}
];

const Seo = () => {

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
      <h1 class="sm:text-8xl font-bold mb-4 text-white">SEO...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to ="/" class="text-red-600 hover:underline">Home</Link> / Case-Study / Search Engine Optimization
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://plus.unsplash.com/premium_photo-1684225764999-3597a8da10ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D" alt="Seo Image" class="w-full h-auto"/>
    </div>
  </div>
</div> 

  
<div class="sm:mx-20 sm:w-100 p-8 my-10 mx-8 mt-28 mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">Boosting Online Presence: A Bellway Infotech Search Engine Optimization (SEO) Case Study</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://bellwayinfotech.com/assets/uploads/media-uploader/search-engine-optimization-02-compressed1692357444.jpg" alt="Seo Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-left  sm:mx-10">
    "Search Engine Optimization (SEO) is the practice of enhancing a website's visibility on search engines like Google. The primary goal is to rank higher in search engine results pages (SERPs) to attract organic (non-paid) traffic.
    Enhance the online visibility and search engine ranking of the App, resulting in increased organic traffic and user downloads."
    <br/><br/>
<h1 className='text-black text-lg font-bold'>Keyword Research</h1>

"Conducted comprehensive keyword research to identify high-traffic, relevant keywords in the food delivery and restaurant niche. Our focus was on long-tail keywords such as "best food delivery app," "order food online," and "restaurant delivery near me." These keywords were chosen to capture specific user intents and drive targeted traffic to our app and website. Using tools like Google Keyword Planner, SEMrush, and Ahrefs, we analyzed search volumes, competition, and user intent. This research helped us understand what potential users were searching for and allowed us to tailor our content and SEO strategies accordingly. By focusing on these long-tail keywords, we aimed to improve our search engine rankings and increase organic traffic. This approach not only helped in attracting more visitors but also ensured that the traffic was highly relevant, increasing the chances of conversions and customer retention."
    <br/><br/>

    <h1 className='text-black text-lg font-bold'>On-Page SEO Optimization</h1>

    "Optimized app landing pages with target keywords in titles, meta descriptions, headings, and content. This process involved integrating keywords naturally within the text to avoid keyword stuffing while still ensuring they were prominent enough for search engines to recognize. We improved the site's structure, ensuring clean URLs and proper use of header tags, which helped search engines better understand our content. Ensuring mobile responsiveness was a key focus, as a significant portion of our audience accessed the site via mobile devices. This meant optimizing the layout, load times, and overall user experience for mobile users. Additionally, we enhanced our internal linking strategy, ensuring that all pages were easily navigable and that link equity was effectively distributed throughout the site. These on-page SEO efforts aimed to improve our visibility on search engine results pages, attract more organic traffic, and provide a better user experience for our visitors."
    <br/><br/>


    
    <h1 className='text-black text-lg font-bold'> Content Marketing</h1>

    "Created high-quality, engaging blog content related to food, recipes, restaurant reviews, and delivery tips. This content was crafted to be informative, entertaining, and relevant to our target audience. Implemented a content calendar to regularly publish fresh content and keep the audience engaged. This approach ensured a consistent flow of new material, which helped in retaining existing users and attracting new ones. We also focused on SEO-friendly content, integrating target keywords naturally to improve search engine rankings. The content was promoted through various channels, including social media, email newsletters, and partnerships with food influencers and bloggers. This multi-channel approach helped in reaching a wider audience and driving more traffic to our app and website. Additionally, we encouraged user-generated content, such as reviews and testimonials, to build trust and credibility. Overall, our content marketing strategy aimed to establish us as a thought leader in the food delivery industry and drive long-term engagement with our brand."
    <br/><br/>


<h1 className='text-black text-lg font-bold'> Technical SEO</h1>

"Enhanced site speed and performance to ensure quick loading times and a smooth user experience. We implemented various optimization techniques such as image compression, browser caching, and minimizing code. Ensured the app and website were mobile-friendly by using responsive design principles, ensuring seamless usability across all devices. We also fixed broken links and improved internal linking to help search engines crawl and index our site more efficiently. Additionally, we set up XML sitemaps and submitted them to search engines to ensure all our pages were indexed correctly. Properly configured robots.txt files helped guide search engine bots to the most important pages. We monitored the site's health using tools like Google Search Console and fixed any issues promptly. These technical SEO enhancements aimed to improve our site's overall performance, making it easier for search engines to index our content and providing a better experience for our users."
<br/><br/>


<h1 className='text-black text-lg font-bold'> Link Building</h1>

"Acquired high-quality backlinks from reputable food blogs, restaurant review sites, and local business directories. This was achieved through a mix of guest blogging, partnerships, and influencer outreach. By contributing valuable content to popular blogs and websites, we not only gained backlinks but also increased our exposure to a broader audience. We formed partnerships with local businesses and food influencers to create mutually beneficial content and promotional opportunities. Additionally, we leveraged our existing customer base, encouraging satisfied customers to leave reviews and share their experiences online. This helped build our online credibility and authority. We also utilized local business directories to ensure our app was listed in relevant local searches. These efforts in link building were aimed at improving our search engine rankings, driving more organic traffic, and enhancing our brand's visibility and reputation in the food delivery industry."
<br/><br/>

<h1 className='text-black text-lg font-bold'> Conclusion</h1>

"By implementing a robust SEO strategy focusing on keyword optimization, content marketing, technical SEO, link building, and local SEO, Bellway Food App significantly improved its online visibility, organic traffic, and user downloads. Continuous optimization and staying updated with SEO trends remain crucial for sustained growth and success."
<br/><br/>

</p>


    

    <div className="md:flex-1 sm:grid sm:grid-cols-3 flex-row  justify-center items-center  ">
           <div className='border flex border-black px-40 sm:px-3 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap"><i class="fa-solid fa-user"></i> SEO</h1>
           </div> 
           <div className='border border-black px-40 sm:px-4 p-2 hover:bg-red-300'><h1 className="text-xl mb-2 text-black text-nowrap "><i class="fa-solid fa-wallet"></i> Budget: $500</h1></div>
           <div className='border border-black px-40 sm:px-5 p-2 hover:bg-red-300'><h1 className="text-lg mb-2 text-black text-nowrap"><i class="fa-solid fa-clock"></i> Duration: 30 Days</h1></div>
          
          </div>
    </div>

    <div className=" mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center hover:text-red-600">Our Related Case Studies</h2>

      <div className="relative w-full max-w-3xl mx-auto mt-20">
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

export default Seo
