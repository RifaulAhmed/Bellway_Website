import React from 'react'
import './Career.css'
import CNavbar from './CNavbar'
import Footer from './Footer'
const Testimonial = () => {
    return (
        <>
            <CNavbar />
            {/* <div class="container sm:mx-auto my-5 bg-black p-8">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0">
      <h1 class="sm:text-8xl font-bold mb-4 text-white ">Testimonials...</h1>
      <h3 class="sm:text-2xl text-white">
        <a href="/about-us" class="text-red-600 hover:underline">Home</a> / About / Testimonials
      </h3>
    </div>
    <div class="md:w-1/2 sm:text-right">
      <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="Team" class="w-full h-auto"/>
    </div>
  </div>
</div>
<br/> */}
            <div className='w-screen ml-[-34px]'>
                <div class=" mx-auto sm:my-5 bg-black p-8">
                    <div class="flex flex-col md:flex-row items-center">
                        <div class="md:w-1/2 text-left mb-4 md:mb-0">
                            <h1 class="text-5xl font-bold mb-4 text-white">Testimonials...</h1>
                            <h3 class="text-2xl text-white">
                                <a href="/faq-page" class="text-red-600 hover:underline">Home</a> / Testimonials
                            </h3>
                        </div>
                        <div class="md:w-1/2 text-right">
                            <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="Team" class="w-full h-auto" />
                        </div>
                    </div>
                </div>



                <div class="max-w-3xl mx-auto mybg shadow-lg rounded-lg overflow-hidden mt-20 border-2">
                    <div class="p-4">
                        <div class="flex justify-center mb-4">
                            <img class="w-48 h-48 rounded-full border-2 border-gray-300" src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Placeholder Image" />
                        </div>
                        <h2 class="text-center text-xl font-bold text-gray-800 mb-2">Fernando de Silva</h2>
                        <p class="text-center text-gray-600 mb-4">Experience exceptional software development and customer support with lightning-fast response times. Great overall experience!</p>
                        <div class="flex justify-center mb-4">
                            <div class="flex items-center">
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="max-w-3xl mx-auto mybg shadow-lg rounded-lg overflow-hidden mt-20 border-2 ">
                    <div class="p-4">
                        <div class="flex justify-center mb-4">
                            <img class="w-48 h-48 rounded-full border-2 border-gray-300" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVyc29ufGVufDB8fDB8fHww" alt="Placeholder Image" />
                        </div>
                        <h2 class="text-center text-xl font-bold text-gray-800 mb-2">Jiten Ahuja</h2>
                        <p class="text-center text-gray-600 mb-4">We wanted a top-quality comparison website on which you could compare to the market Unified Infotech you gave us exactly.</p>
                        <div class="flex justify-center mb-4">
                            <div class="flex items-center">
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>



                <div class="max-w-3xl mx-auto mybg shadow-lg rounded-lg overflow-hidden mt-20 border-2">
                    <div class="p-4">
                        <div class="flex justify-center mb-4">
                            <img class="w-48 h-48 rounded-full border-2 border-gray-300" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTF8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Placeholder Image" />
                        </div>
                        <h2 class="text-center text-xl font-bold text-gray-800 mb-2">Andrew Jack</h2>
                        <p class="text-center text-gray-600 mb-4">The team did the required enhancement on the site with excellent communication skills. He is very proactive and technically!</p>
                        <div class="flex justify-center mb-4">
                            <div class="flex items-center">
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="max-w-3xl mx-auto mybg shadow-lg rounded-lg overflow-hidden mt-20 border-2">
                    <div class="p-4">
                        <div class="flex justify-center mb-4">
                            <img class="w-48 h-48 rounded-full border-2 border-gray-300" src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjJ8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Placeholder Image" />
                        </div>
                        <h2 class="text-center text-xl font-bold text-gray-800 mb-2">Alzaib Zaimul</h2>
                        <p class="text-center text-gray-600 mb-4">Experience top-tier service with Mohit & his team! Reputed for their exceptional problem-solving skills, delivering excellence for 2 years!</p>
                        <div class="flex justify-center mb-4">
                            <div class="flex items-center">
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="max-w-3xl mx-auto mybg shadow-lg rounded-lg overflow-hidden mt-20 border-2">
                    <div class="p-4">
                        <div class="flex justify-center mb-4">
                            <img class="w-48 h-48 rounded-full border-2 border-gray-300" src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D" alt="Placeholder Image" />
                        </div>
                        <h2 class="text-center text-xl font-bold text-gray-800 mb-2">Watson Kerg</h2>
                        <p class="text-center text-gray-600 mb-4">The team stood out because of their swift response time and patience. Bellway infotech provided one contact person!</p>
                        <div class="flex justify-center mb-4">
                            <div class="flex items-center">
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                                <svg class="w-5 h-5 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.17 3.6a1 1 0 00.95.69h3.812c.969 0 1.371 1.24.588 1.81l-3.088 2.24a1 1 0 00-.364 1.118l1.17 3.601c.3.921-.755 1.688-1.538 1.118l-3.088-2.24a1 1 0 00-1.176 0l-3.088 2.24c-.783.57-1.838-.197-1.538-1.118l1.17-3.601a1 1 0 00-.364-1.118L2.781 8.027c-.783-.57-.381-1.81.588-1.81h3.812a1 1 0 00.95-.69l1.17-3.6z" />
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Testimonial
