import React from 'react'
import './Blog.css'
import CNavbar from './CNavbar'
// import 'bootstrap/dist/css/bootstrap.min.css'

const Blogs = () => {
  return (
  <>
  <CNavbar/>
<div className='containerx w-screen ml-[-34px]'>
<div class="mx-auto my-5 bg-black p-8">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-screen text-left mb-4 md:mb-0">
      <h1 class="text-8xl font-bold mb-4 text-white">Blogs...</h1>
      <h3 class="text-3xl text-white">
        <a href="/" class="text-red-500 hover:underline">Home</a> / Blogs
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fGJsb2d8ZW58MHx8MHx8fDA%3D" alt="Team" class="w-full h-auto"/>
    </div>
  </div>
</div>
<br/>

{/* <!-- New Blog Container --> */}
  <div class="containerx mx-auto my-10 p-12 mybg btext">
    <h2 class="text-4xl font-bold mb-6 text-center hover:text-red-600">Our Blogs</h2>
    <br/><br/>

    {/* <!-- Blog Post 1 --> */}
    <div class="flex flex-col md:flex-row items-center mb-8">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" alt="Tech Future" class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pl-8">
        <h3 class="text-2xl font-semibold mb-2 hover:text-red-600">The Future of Tech Careers</h3>
        <p class="btext mb-4">As technology continues to evolve, the career landscape in the tech industry is constantly changing. In this blog post, we explore the future trends and opportunities for tech professionals.</p>
        <a href="/futureTechBlog" class="text-red-600 hover:underline">Read more</a>
      </div>
    </div>
    <br/><br/>

    {/* <!-- Blog Post 2 --> */}
    <div class="flex flex-col md:flex-row-reverse items-center mb-8">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3R8ZW58MHx8MHx8fDA%3D" alt="React" class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pr-8">
        <h3 class="text-2xl font-semibold mb-2 hover:text-red-600">Why React is a Popular Choice</h3>
        <p class="btext mb-4">React has become one of the most popular JavaScript libraries for building user interfaces. Discover why so many developers prefer React for their projects and how it can benefit your career.</p>
        <a href="/reactBlog" class="text-red-600 hover:underline">Read more</a>
      </div>
    </div>
    <br/><br/>

    {/* <!-- Blog Post 3 --> */}
    <div class="flex flex-col md:flex-row items-center mb-8">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcmF2ZWwlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D" alt="Laravel" class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pl-8">
        <h3 class="text-2xl font-semibold mb-2 hover:text-red-600">Tips for Laravel Developers</h3>
        <p class="btext mb-4">Laravel is a powerful PHP framework for web development. In this post, we share some essential tips and best practices to help you become a more effective Laravel developer.</p>
        <a href="/laravelBlog" class="text-red-600 hover:underline">Read more</a>
      </div>
    </div>
    <br/><br/>
  </div>


  <div class="sm:mx-20 sm:w-100 p-4 my-10 mx-2  mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">The Future of Mobile Applications</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="Blog Post Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-center sm:mx-10">"
The future of mobile applications is poised to be transformative, driven by advancements in technology and evolving user expectations. Key trends include the rise of artificial intelligence (AI) and machine learning (ML), which are enabling more personalized and intelligent app experiences. Augmented reality (AR) and virtual reality (VR) are becoming more mainstream, offering immersive experiences in gaming, education, and retail. The adoption of 5G technology promises faster, more reliable internet connectivity, enhancing the performance of mobile apps, particularly in streaming, gaming, and real-time applications. Additionally, the Internet of Things (IoT) is expanding, leading to increased integration of mobile apps with various smart devices, from home automation systems to wearable health trackers. Progressive Web Apps (PWAs) are also gaining traction, providing app-like experiences directly through web browsers, thus bridging the gap between web and native apps. Moreover, the focus on privacy and security is intensifying, with developers implementing more robust measures to protect user data. As these trends converge, mobile applications will continue to evolve, becoming more intuitive, responsive, and integral to daily life."</p>
  
    <div class="flex justify-between items-center pt-4 border-t border-gray-700">
      <div class="flex items-center">
        <div class="mr-4">
          <img src="https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Author Avatar" class="w-10 h-10 rounded-full"/>
        </div>
        <div>
          <p class="text-sm font-semibold">Karlin Uyera</p>
          <p class="text-xs text-black">Software Developer</p>
        </div>
      </div>
      <div class="text-sm text-red-500 hover:underline">
        <p>  <a href="/mobileApplicationBlog">Read more</a></p>
      </div>
      <div class="text-sm text-black">
        <p>April 30, 2023</p>
      </div>
    </div>
  </div>

  <div class="sm:mx-20 sm:w-100 p-4 my-10 mx-2 mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">What advice would you give for successful SEO project management?</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://plus.unsplash.com/premium_photo-1684356819161-ddd759e4a4ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2V5d29yZHN8ZW58MHx8MHx8fDA%3D" alt="Blog Post Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-center sm:mx-10">"Search Engine Optimization (SEO) involves enhancing a website's visibility and ranking on search engine results pages (SERPs) to drive organic traffic. Key components include keyword research and usage, high-quality content, and optimizing title tags, meta descriptions, and URL structures. Technical aspects like website speed, mobile-friendliness, and secure connections (HTTPS) are crucial, alongside acquiring quality backlinks and leveraging social signals. Effective SEO also encompasses content marketing, user experience (UX) improvements, and local SEO strategies. Regularly monitoring performance with tools like Google Analytics and Search Console, while adhering to ethical practices, ensures ongoing optimization and better search engine rankings."</p>
  
    <div class="flex justify-between items-center pt-4 border-t border-gray-700">
      <div class="flex items-center">
        <div class="mr-4">
          <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Author Avatar" class="w-10 h-10 rounded-full"/>
        </div>
        <div>
          <p class="text-sm font-semibold">John Doe</p>
          <p class="text-xs text-black">Software Developer</p>
        </div>
      </div>
      <div class="text-sm text-red-500 hover:underline">
        <p>  <a href="/seoManagementBlog">Read more</a></p>
      </div>
      <div class="text-sm text-black">
        <p>January 22, 2024</p>
      </div>
    </div>
  </div>




  
  <div class="sm:mx-20 sm:w-100 p-4 my-10 mx-2 mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">Optimizing Your Website with Internal Linking</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://bellwayinfotech.com/assets/uploads/media-uploader/internl-linking-in-website-compressed1693833128.jpg" alt="Blog Post Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-center sm:mx-10">"
    Optimizing your website with internal linking involves strategically placing links within your site to enhance user navigation, distribute page authority, and improve search engine rankings. Use descriptive, keyword-rich anchor text to link to high-quality, relevant content, creating a logical structure that reflects the site's hierarchy. Implementing a silo structure groups related content, reinforcing topical relevance. Regularly audit and update links to avoid broken paths, and use breadcrumbs for secondary navigation. Balance the quantity of links to ensure they are useful without overwhelming users, and track performance metrics to continually refine your internal linking strategy. This not only helps search engines better understand your content but also enhances the user experience, boosting engagement and conversions."</p>
  
    <div class="flex justify-between items-center pt-4 border-t border-gray-700">
      <div class="flex items-center">
        <div class="mr-4">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Author Avatar" class="w-10 h-10 rounded-full"/>
        </div>
        <div>
          <p class="text-sm font-semibold">Dawyne Thomas</p>
          <p class="text-xs text-black">Cyber Security</p>
        </div>
      </div>
      <div class="text-sm text-red-500 hover:underline">
        <p>  <a href="internalLinkingBlog">Read more</a></p>
      </div>
      <div class="text-sm text-black">
        <p>February 08, 2022</p>
      </div>
    </div>
  </div>

   
  <div class="sm:mx-20 sm:w-100 p-4 my-10 mx-2 mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">Building a Successful Ecommerce App from Scratch</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHNjcmF0Y2glMjBhcHAlMjBkZXZlbG9wfGVufDB8fDB8fHww" alt="Blog Post Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-center sm:mx-10">"
    Building a successful ecommerce app from scratch involves thorough market research to understand your target audience, competitive analysis, and defining a unique selling proposition. Focus on creating an intuitive, user-friendly design with essential features such as secure user authentication, a detailed product catalog, a seamless checkout process, and order tracking. Choose a robust technology stack, ensure data security and compliance with regulations, and conduct rigorous testing for functionality and performance. Optimize for app stores, develop a comprehensive marketing strategy, and provide excellent customer support. Post-launch, continuously gather user feedback, release regular updates, and maintain the app to ensure sustained success."</p>
  
    <div class="flex justify-between items-center pt-4 border-t border-gray-700">
      <div class="flex items-center">
        <div class="mr-4">
          <img src="https://images.unsplash.com/photo-1561406636-b80293969660?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTMwfHxwZXJzb258ZW58MHx8MHx8fDA%3D" alt="Author Avatar" class="w-10 h-10 rounded-full"/>
        </div>
        <div>
          <p class="text-sm font-semibold">Amellia Kere</p>
          <p class="text-xs text-black">Digital Marketing </p>
        </div>
      </div>
      <div class="text-sm text-red-500 hover:underline">
        <p>  <a href="/scratchEcommerceBlog">Read more</a></p>
      </div>
      <div class="text-sm text-black">
        <p>August 13, 2023</p>
      </div>
    </div>
  </div>

</div>

   </>
  )
}

export default Blogs