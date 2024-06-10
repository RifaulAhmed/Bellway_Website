import React from 'react'
import './Career.css'
import { Link } from 'react-router-dom';
import CNavbar from '../../CNavbar';
import Msg from '../../assets/msgBox.png'
import Footer from '../../Footer';



const Career = () => {
  

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Image Title 1',
      description: 'This is the description for image 1.',
      bottomText: 'Trainees, your dedication today shapes the leaders of tomorrow. Embrace every lesson, seek every opportunity, and let your passion drive you to excellence.'
    },
    
   
    {
      src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Image Title 3',
      description: 'This is the description for image 3.',
      bottomText: 'Professionals, your expertise paves the way for innovation. Embrace new challenges, seize opportunities, and let your experience drive you to new heights.'
    
    },
    {
      src: 'https://plus.unsplash.com/premium_photo-1661783433420-ddc45d35004a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Image Title 2',
      description: 'This is the description for image 2.',
      bottomText: 'Students, your potential is limitless. Embrace your learning journey, seize every opportunity, and let your curiosity guide you to a brilliant future.'
  
    },

    {
      src: 'https://images.unsplash.com/photo-1616701318247-e87eb43e79e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdyYWR1YXRlfGVufDB8fDB8fHww?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'Image Title 4',
      description: 'This is the description for image 4.',
      bottomText: 'Graduates, your journey begins now. Embrace every challenge, chase every opportunity, and let your passion guide you to greatness.'
    
    },
  ];


  
  return (
    <>
    <CNavbar/> 
    <div className="mybg">
<div class="containerx mx-auto  bg-black p-9 mt-20">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-8">
      <h1 class="sm:text-8xl font-bold mb-4 text-white">Career With Us...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to="/" class="text-red-600 hover:underline">Home</Link> / Career With Us 
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FyZWVyfGVufDB8fDB8fHww" alt=" Office Employee" class="w-full h-auto"/>
    </div>
  </div>
</div>


<h2 className="text-4xl font-bold mb-2 text-center sm:mt-32 hover:text-red-600 pt-8 ">Open Vacancies</h2>
<div className="relative min-h-screen flex items-center justify-center bg-black mt-14">
      <div className="absolute top-1 left-72 transform -rotate-12 z-50">
        <img
          src={Msg} // Replace with your image URL or import
          alt="Decorative"
          className="w-64"
        />
      </div> <div className="formC bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-6xl flex flex-wrap relative z-10 text-white">
        <div className="w-full md:w-1/2 p-4 mt-44">
          <h6 className="text-xl mb-8">Hiring for digital marketers?</h6>
          <p className="mb-6">Having 3+ Years Experience!!</p>
          <div className="mt-6"> <h3 className="text-5xl font-semibold"><i>Send Your Work Summary</i></h3>
          </div>
        </div>  <div className="w-full md:w-1/2 p-4 mt-4">
          <form>
            <div className="mb-4 flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <input className="w-full px-3 py-2 border rounded formC" type="text" id="name" name="name" required />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
                <input className="w-full px-3 py-2 border rounded formC" type="tel" id="phone" name="phone" required />
              </div>
            </div>
            <div className="mb-4 flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 border rounded formC" type="email" id="email" name="email" required />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label className="block text-sm font-medium mb-1" htmlFor="service">Service</label>
                <select className="w-full px-3 py-2 border rounded formC" id="service" name="service" required>
                  <option value="">Select a service</option>
                  <option value="consultation">Consultation</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
              <textarea className="w-full px-3 py-2 border rounded formC" id="message" name="message" rows="4" required></textarea>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="resume">Resume</label>
              <input className="w-full px-3 py-2 border rounded formC" type="file" id="resume" name="resume" required />
            </div>
            <button className="w-full bg-white text-black py-2 rounded">Submit</button>
          </form>
        </div>
      </div>
    </div>




<div className=" mx-auto p-8 sm:mt-0">
<h2 className="text-4xl font-bold mb-2 text-center sm:mt-32 hover:text-red-600">Explore Opportunities</h2>
      {/* <div className="sm:flex flex-wrap justify-center gap-5 w-full md:w-3/4 lg:w-2/3 xl:w-full mx-auto py-10">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="carousel-item flex-1 my-9 sm:my-0 bg-cover bg-center h-64 w-full sm:w-1/2 md:w-1/4 rounded-lg relative overflow-hidden"
            style={{ backgroundImage: `url(${testimonial.image})`}}
          >
            <img
              src={testimonial.image}
              alt={`Profile of ${testimonial.name}`}
              className="absolute inset-0 w-full  h-full object-cover"
            />
            <div className="carousel-content absolute bottom-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white flex flex-col items-center justify-end text-center">
              <h2 className="text-lg font-semibold">{testimonial.name}</h2>
              <p className="text-sm italic">"{testimonial.review}"</p>
            </div>
          </div>
        ))}
      </div> */}

 <div className="container mx-auto p-4 mt-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group"
          >
            <img
              src={image.src}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-2xl">{image.title}</h2>
              <p className="text-white mt-2 text-lg text-center">{image.description}</p>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-white bg-opacity-75 text-black text-center">
              {image.bottomText}
            </div>
          </div>
        ))}
      </div>
    </div></div>

  
  <h1 className="text-4xl text-black font-bold text-center mb-8 hover:text-red-600 p-8 sm:mt-20 sm:mx-6">"Welcome to the Team"</h1>
<div className="container  bg-black border-2 border-red-500 flex items-center mx-auto  rounded-3xl ">
  
<div className="flex flex-col sm:flex-row justify-center items-center min-h-96 bg-black rounded-3xl">
      <div className="w-full h-1/2 sm:w-1/2 p-4 border-2 border-white sm:mx-5 flex flex-col justify-center items-center">
        <h2 className="text-red-600 text-3xl text-center mb-4">Freshers Level</h2>
        <p className="text-white text-center text-xl mb-4">"Every great developer was once a beginner. Welcome to a journey of endless learning and innovation!"</p>
        <button className="bg-white text-black border-2 border-red-500 px-6 py-2 rounded transition-all duration-500 ease-in-out hover:bg-black hover:text-white"><Link to="/traineeForm">Apply as a Trainee</Link>
        
        </button>
      </div>
      <div className="h-full flex justify-center items-center">
        <hr className="border-white h-20 border-2 mx-4" />
      </div>
      <div className="w-full sm:w-1/2 p-4 border-2 border-white h-full sm:mx-5 flex flex-col justify-center items-center">
        <h2 className="text-red-600 text-3xl text-center mb-4">Experience Hiring</h2>
        <p className="text-white text-center text-xl mb-4">"Your expertise is the foundation on which innovation builds. Welcome to your next great adventure!"</p>
        <button className="bg-white text-black border-2 border-red-500 px-6 py-2 rounded transition-all duration-500 ease-in-out hover:bg-black hover:text-white">
          <Link to ="/experienceJoineeForm">Apply as  a Employee</Link>
        
        </button>
      </div>
    </div>

  </div>
<div className='mt-20'></div>
  
  <Footer/>

</div>



    </>
  )
}

export default Career
