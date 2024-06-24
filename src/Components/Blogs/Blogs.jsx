import React from 'react'
import './Blogs.css'
import { Link } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css'
import CNavbar from '../../CNavbar'
import Footer from '../../Footer'
const Blogs = () => {
  return (
   <>
  
<CNavbar/>
<div className='mybg'> 
<div class="containerx mx-auto  bg-black p-8 mt-20">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-8">
      <h1 class="sm:text-8xl font-bold mb-4 text-white">Blogs...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to="/" class="text-red-500 hover:underline">Home</Link> / Blogs
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://i.pinimg.com/736x/7e/50/84/7e508402466bc0fa026c2b750739bfc2.jpg" alt="Blog Image" class="w-full h-auto"/>
    </div>
  </div>
</div>
<br/>

{/* <!-- New Blog Container --> */}
  <div class=" mx-auto my-10 p-12 mybg btext">
    <h2 class="text-4xl font-bold mb-6 text-center hover:text-red-600">Our Blogs</h2>
    <br/><br/>

    {/* <!-- Blog Post 1 --> */}
    <div class="flex flex-col md:flex-row items-center mb-8">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHRlY2hub2xvZ3l8ZW58MHx8MHx8fDA%3D" alt="FutureTech Image" class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pl-8">
        <h3 class="text-2xl font-semibold mb-2 hover:text-red-600">The Future of Tech Careers</h3>
        <p class="btext mb-4">As technology continues to evolve, the career landscape in the tech industry is constantly changing. In this blog post, we explore the future trends and opportunities for tech professionals.</p>
        <Link to ="/blogs/futureTechBlog" class="text-red-600 hover:underline">Read more</Link>
      </div>
    </div>
    <br/><br/>

    {/* <!-- Blog Post 2 --> */}
    <div class="flex flex-col md:flex-row-reverse items-center mb-8">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhY3R8ZW58MHx8MHx8fDA%3D" alt="React Image" class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pr-8">
        <h3 class="text-2xl font-semibold mb-2 hover:text-red-600">Why React is a Popular Choice</h3>
        <p class="btext mb-4">React has become one of the most popular JavaScript libraries for building user interfaces. Discover why so many developers prefer React for their projects and how it can benefit your career.</p>
        <Link to="/blogs/reactBlog" class="text-red-600 hover:underline">Read more</Link>
      </div>
    </div>
    <br/><br/>

    {/* <!-- Blog Post 3 --> */}
    <div class="flex flex-col md:flex-row items-center mb-8">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxhcmF2ZWwlMjBkZXZlbG9wZXJ8ZW58MHx8MHx8fDA%3D" alt="Laravel Image" class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pl-8">
        <h3 class="text-2xl font-semibold mb-2 hover:text-red-600">Tips for Laravel Developers</h3>
        <p class="btext mb-4">Laravel is a powerful PHP framework for web development. In this post, we share some essential tips and best practices to help you become a more effective Laravel developer.</p>
        <Link to="/blogs/laravelBlog" class="text-red-600 hover:underline">Read more</Link>
      </div>
    </div>
    <br/><br/>
    <div class="flex flex-col md:flex-row-reverse items-center mb-8">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src="https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bW9iaWxlJTIwYXBwJTIwZGV2ZWxvcG1lbnR8ZW58MHx8MHx8fDA%3D" alt="Mobile Image" class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pr-8">
        <h3 class="text-2xl font-semibold mb-2 hover:text-red-600">The Future of Mobile Applications</h3>
        <p class="btext mb-4">The future of mobile applications is poised to be transformative, driven by advancements in technology and evolving user expectations.</p>
        <Link to="/blogs/mobileApplicationBlog" class="text-red-600 hover:underline">Read more</Link>
      </div></div>
    <br/><br/>

    <div class="flex flex-col md:flex-row items-center mb-8">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src="https://plus.unsplash.com/premium_photo-1684356819161-ddd759e4a4ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8a2V5d29yZHN8ZW58MHx8MHx8fDA%3D" alt="SEO Image"  class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pl-8">
        <h3 class="text-2xl font-semibold mb-2 hover:text-red-600">What advice would you give for successful SEO project management?</h3>
        <p class="btext mb-4">Search Engine Optimization (SEO) involves enhancing a website's visibility and ranking on search engine results pages (SERPs) to drive organic traffic.</p>
        <Link to="/blogs/seoManagementBlog" class="text-red-600 hover:underline">Read more</Link>
      </div> </div>
    <br/><br/>

    <div class="flex flex-col md:flex-row-reverse items-center mb-8">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src="https://bellwayinfotech.com/assets/uploads/media-uploader/internl-linking-in-website-compressed1693833128.jpg" alt="Linking Image" class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pr-8">
        <h3 class="text-2xl font-semibold mb-2 hover:text-red-600">Optimizing Your Website with Internal Linking</h3>
        <p class="btext mb-4"> Optimizing your website with internal linking involves strategically placing links within your site to enhance user navigation, distribute page authority, and improve search engine rankings.</p>
        <Link to="/blogs/internalLinkingBlog" class="text-red-600 hover:underline">Read more</Link>
      </div></div>
    <br/><br/>

    <div class="flex flex-col md:flex-row items-center mb-8">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src="https://images.unsplash.com/photo-1581287053822-fd7bf4f4bfec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fHNjcmF0Y2glMjBhcHAlMjBkZXZlbG9wfGVufDB8fDB8fHww" alt="Ecommerce Image" class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pl-8">
        <h3 class="text-2xl font-semibold mb-2 hover:text-red-600">Building a Successful Ecommerce App from Scratch</h3>
        <p class="btext mb-4"> Building a successful ecommerce app from scratch involves thorough market research to understand your target audience, competitive analysis, and defining a unique selling proposition.</p>
        <Link to="/blogs/scratchEcommerceBlog" class="text-red-600 hover:underline">Read more</Link>
      </div>
    </div>
    <br/><br/>
  </div>
  <Footer/>
  </div>


   </>
  )
}

export default Blogs
