import React from 'react'
import './Career.css'
import { Link } from 'react-router-dom';
import CNavbar from '../../CNavbar';



const Career = () => {
  const testimonials = [
    {
      name: 'Graduates',
      review: 'Graduates, your journey begins now. Embrace every challenge, chase every opportunity, and let your passion guide you to greatness.',
      image: 'https://images.unsplash.com/photo-1616701318247-e87eb43e79e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fGdyYWR1YXRlfGVufDB8fDB8fHww?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      name: 'Professionals',
      review: 'Professionals, your expertise paves the way for innovation. Embrace new challenges, seize opportunities, and let your experience drive you to new heights.',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      name: 'Students',
      review: 'Students, your potential is limitless. Embrace your learning journey, seize every opportunity, and let your curiosity guide you to a brilliant future.',
      image: 'https://plus.unsplash.com/premium_photo-1683880731020-83b984105a72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    },
    {
      name: 'Trainees',
      review: 'Trainees, your dedication today shapes the leaders of tomorrow. Embrace every lesson, seek every opportunity, and let your passion drive you to excellence.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjR8fHByb2Zlc3Npb25hbHxlbnwwfHwwfHx8MA%3D%3D?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    }
  ];


  
  return (
    <>
    <CNavbar/>
<div class=" mx-auto  bg-black p-8 mt-20">
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
<div className="relative min-h-screen flex items-center justify-center bg-black mt-14 ">
      <div className="absolute top-2 left-72 transform -rotate-12 z-50">
        <img
          src="https://www.grappus.com/static/images/icons/mail.svg" // Replace with your desired image URL
          alt="Decorative"
          className="w-64"
        />
      </div>
      <div className="formC bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-6xl flex flex-wrap relative z-10 text-white">
        {/* Left Div */}
        <div className="w-full md:w-1/2 p-4 mt-44">
          <h6 className="text-xl  mb-8">Hiring for digital marketers?
          </h6>
          <p className=" mb-6">Having 3+ Years Experience!!</p>
          <div className="mt-6">
            <h3 className="text-5xl font-semibold"><i>Send Your Work Summary</i></h3>
            {/* <p>1234 Street Name<br />City, State, ZIP Code</p> */}
          </div>
        </div>
        
        {/* Right Div - Enquiry Form */}
        <div className="w-full md:w-1/2 p-4 mt-4">
          {/* <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2> */}
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
            <button className="w-full bg-white text-black py-2 rounded">Submit</button>
          </form>
        </div>
      </div>
    </div>




<div className=" mx-auto p-8 sm:mt-0">
<h2 className="text-4xl font-bold mb-2 text-center sm:mt-32 hover:text-red-600">Explore Opportunities</h2>
      <div className="sm:flex flex-wrap justify-center gap-5 w-full md:w-3/4 lg:w-2/3 xl:w-full mx-auto py-10">
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
      </div>
    </div>


    {/* <div className="container mx-auto flex justify-center items-center min-h-screen  mt-8 mybg" >
      <div className="max-w-lg w-full mybg rounded-lg shadow-md overflow-hidden">
        <img 
          className="w-full h-60 object-cover" 
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdvcmslMjB0ZWFtfGVufDB8fDB8fHww" 
          alt="Sample Image" 
        />
        <div className="p-4">
          <h2 className="text-xl font-bold mb-2 text-center">Job Categories</h2>
          <ul className="list-disc list-inside space-y-1 p-5 text-xl">
            <li className='hover:text-red-600'>Business Development</li>
            <li className='hover:text-red-600'>UI/ UX Designer</li>
            <li className='hover:text-red-600'>Software Engineer</li>
            <li className='hover:text-red-600'>Office Management</li>
          </ul>
        </div>
      </div>
    </div> */}



    
{/* 
    <div>
    <h2 className="text-4xl font-bold  text-center sm:mt-24 hover:text-red-600">Job Categories</h2>
  



<div className="container mt-20 sm:mx-auto p-4 flex justify-center items-center sm:min-h-48 mybg " >
      <div className="sm:max-w-full sm:w-2/3  bg-white rounded-lg shadow-md overflow-hidden" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)' }}>
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Software Engineer
          </h2>
        </div>
        <img 
          className="w-full h-72 object-cover" 
          src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
          " 
          alt="Job Description" 
        />
        <div className="p-4 box">
          <p className="text-gray-700 mb-4 text-center text-xl">
          We are looking for a passionate Software Engineer to design, develop, and install software solutions. The successful candidate will be able to build high-quality, innovative, and fully performing software in compliance with coding standards and technical design.
          </p>
          <div className='border-2 text-gray-300  mt-10'>
            <hr />
          </div>
          <div className="text-black mt-10">
            <span className=':text-lg text-center'>Company Name :</span><b className='text-xl'> Bellway Infotech</b><br/>
           <span className='text-lg text-center'>Apply By :</span><b>  2024-08-30</b><br/>
            <span className="text-xl text-center">Location :</span><b>  Indore, M.P</b>
          </div>
        </div>
      </div>
    </div>
    
    <div className="container mt-14 sm:mx-auto p-4 flex justify-center items-center sm:min-h-48 mybg " >
      <div className="max-w-full sm:w-2/3  bg-white rounded-lg shadow-md overflow-hidden"  style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.8)' }}>
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Business Development
          </h2>
        </div>
        <img 
          className="w-full h-72 object-cover" 
          src="https://images.pexels.com/photos/3184164/pexels-photo-3184164.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
          " 
          alt="Job Description" 
        />
        <div className="p-4">
          <p className="text-gray-700 mb-4 text-center text-xl">
          "Drive growth and forge strategic partnerships as a Business Development professional. Your expertise will shape our future success. Identify new business opportunities, develop strategies, and build lasting relationships. Join us to expand horizons, unlock potential, and achieve new milestones. Apply now to be a key player in our growth journey!"
          </p>
          <div className='border-2 text-gray-300  mt-10'>
            <hr />
          </div>
          <div className="text-black mt-10">
            <span className='text-lg text-center'>Company Name :</span><b className='text-xl'> Bellway Infotech</b><br/>
           <span className='text-lg text-center'>Apply By :</span><b>  2024-08-30</b><br/>
            <span className="text-xl text-center">Location :</span><b>  Indore, M.P</b>
          </div>
        </div>
      </div>
    </div>
    

    <div className="container mt-14 sm:mx-auto p-4 flex justify-center items-center sm:min-h-48 mybg " >
      <div className="max-w-full sm:w-2/3  bg-white rounded-lg shadow-md overflow-hidden"  style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)' }}>
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          UI/ UX Designer
          </h2>
        </div>
        <img 
          className="w-full h-72 object-cover" 
          src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260
          " 
          alt="Job Description" 
        />
        <div className="p-4">
          <p className="text-gray-700 mb-4 text-center text-xl">
          "Join us to create intuitive and visually stunning user experiences. Your design skills will shape the future of digital interaction and innovation. Collaborate with a dynamic team to bring cutting-edge ideas to life. Apply now to make a significant impact and elevate user satisfaction to new heights!"
   
          </p>
          <div className='border-2 text-gray-300  mt-10'>
            <hr />
          </div>
          <div className="text-black mt-10">
            <span className='text-lg text-center'>Company Name :</span><b className='text-xl'> Bellway Infotech</b><br/>
           <span className='text-lg text-center'>Apply By :</span><b>  2024-08-30</b><br/>
            <span className="text-xl text-center">Location :</span><b>  Indore, M.P</b>
          </div>
        </div>
      </div>
    </div>

    
    <div className="container mt-14 sm:mx-auto p-4 flex justify-center items-center sm:min-h-48 mybg " >
      <div className="max-w-full sm:w-2/3  bg-white rounded-lg shadow-md overflow-hidden"  style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)' }}>
        <div className="p-4">
          <h2 className="text-3xl font-bold mb-2 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Office Management
          </h2>
        </div>
        <img 
          className="w-full h-72 object-cover" 
          src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
          alt="Job Description" 
        />
        <div className="p-4">
          <p className="text-gray-700 mb-4 text-center text-xl">
            
          "Become an essential part of our team by streamlining office operations and enhancing productivity. Your organizational skills will drive efficiency and success. Manage administrative tasks, coordinate events, and ensure smooth daily operations. Apply now to lead our office management and contribute to a well-structured, efficient workplace environment!"
          </p>
          <div className='border-2 text-gray-300  mt-10'>
            <hr />
          </div>
          <div className="text-black mt-10">
            <span className='text-lg text-center'>Company Name :</span><b className='text-xl'> Bellway Infotech</b><br/>
           <span className='text-lg text-center'>Apply By :</span><b>  2024-08-30</b><br/>
            <span className="text-xl text-center">Location :</span><b>  Indore, M.P</b>
          </div>
        </div>
      </div>
    </div>
    </div> */}

  
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





    </>
  )
}

export default Career
