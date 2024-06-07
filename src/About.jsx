import React from 'react'
import './About.css'
import Slider from 'react-infinite-logo-slider'
import { Link } from 'react-router-dom'
// import Navbar from '../../Navbar'
import CNavbar from './CNavbar';
import Footer from './Footer';


const About = () => {

  return (
    <>
<CNavbar/>

<div class="containerx mx-auto  bg-black p-8">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-16">
      <h1 class="sm:text-8xl font-bold mb-4 text-white">About...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to="/" class="text-red-600 hover:underline">Home</Link> / About Us
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjAyfHxvZmZpY2V8ZW58MHx8MHx8fDA%3D" alt="About Image" class="w-full h-auto"/>
    </div>
  </div>
</div>


<div className=" mx-auto my-12 p-8">
      <div className="flex  justify-around flex-col md:flex-row items-center">
      
        <div className=" md:h-1/2 md:w-1/4  sm:w-80">
          <img 
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHx0ZWNobm9sb2d5fGVufDB8fDB8fHww" 
            alt="About Image" 
            className="  object-cover rounded-lg shadow-lg"
          />
        </div>

        <div className="md:w-1/2 w-full ">
          <h1 className="sm:text-4xl font-bold mb-4 text-black text-center text-3xl mt-5">We have 15 years of experience in any kind of IT solutions</h1>
          <p className="text-xl mb-4 mt-12 text-center font-sans">
          Discover BELLWAY INFOTECH, a global leader in web & app development. Innovating exceptional tech solutions for your business success.
          </p>
          <p className="text-3xl text-center mt-16 font-sans ">
          <span className='text-red-600 font-bold text-5xl'>"</span> Whatever your business may be whether you run a<br/> creative agency, a digital studio.<span className='text-red-600 font-bold text-5xl'>"</span>
          </p>
        </div>
      </div>
    </div>



    
  <div class=" mx-auto  p-12 mybg btext">
    <h2 class="text-6xl font-bold mb-6 text-center hover:text-red-600">About Us</h2>
    <br/><br/>


    <div class="flex flex-col md:flex-row items-center mb-8  mt-8">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src="https://plus.unsplash.com/premium_photo-1661768375570-eaed6b9a615c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTgxfHxvZmZpY2V8ZW58MHx8MHx8fDA%3D" alt="Tech Future" class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pl-8">
        <h3 class="text-3xl font-bold  hover:text-red-600 text-center">Who We Are?</h3>
        <p class="text-xl mb-4 mt-8">Bellway Infotech is a top-rated website and mobile app (Android/iOS) marketing firm with over 500 projects completed.
        <br/><br/>
        The application development team gained excellent practical experience as well as in-depth technical skills in order to create business-centric B2B and B2C mobile apps that help businesses stay ahead of the competition.
        <br/><br/>
        High-quality mobile app design, development, testing, and deployment at each stage of the mobile app development lifecycle. Our primary goal is to develop digital products that promote interaction and success.</p>
        
      </div>
    </div>
    <br/><br/>


    <div class="flex flex-col md:flex-row-reverse items-center mb-8 mt-20">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src="https://plus.unsplash.com/premium_photo-1682432977047-51f4d9465f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkzfHxvZmZpY2V8ZW58MHx8MHx8fDA%3D" alt="React" class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pr-8">
        <h3 class="text-3xl font-bold  hover:text-red-600 text-center">Who We Can Help</h3>
        <p class="text-xl mb-4 mt-8">We have project advisors, project managers, project leaders, and analysts/programmers on our team.<br/><br/> All of our employees have professional qualifications in information technology or a related discipline, and the majority of them have extensive work experience on IT projects of all sizes, using various software tools on various hardware.<br/><br/>
        We have a team of highly trained professionals who handle customers with extreme sensitivity and responsiveness. We provide the best tools in-house to support their job functions, resulting in efficient customer service to the greatest extent possible.</p>
        
      </div>
    </div>
    <br/><br/>


    <div class="flex flex-col md:flex-row items-center mb-8 mt-20">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src="https://plus.unsplash.com/premium_photo-1683141420877-f191c7458781?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjA1fHxvZmZpY2V8ZW58MHx8MHx8fDA%3D" alt="Laravel" class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pl-8">
        <h3 class="text-3xl font-bold  hover:text-red-600 text-center">Our Process</h3>
        <p class="text-xl mb-4 mt-8">We have a team of dedicated employees who give their all in the fields in which they work.<br/><br/> Every employee is given a personal laptop with the most up-to-date features to handle first-class applications, as well as a cabin to ensure they can enjoy their personal space and work without distractions.<br/><br/>  Despite working independently, this team is always on the same page. And it is to provide the best product to the clients regardless of external factors.</p>
      </div>
    </div>
    <br/><br/>
  </div>



  {/* <div className="container">
  <div class="containerC">
    
  <h2 class="titleOffer text-4xl font-bold mb-6 text-center hover:text-red-600">What We Offer</h2>
  <div class=" carousel border mx-7  ">
    <div class="carousel__face mx-auto"><span className='spanOffer'>WEB DEVELOPMENT</span></div>
    <div class="carousel__face  mx-auto"><span className='spanOffer'>APP DEVELOPMENTl</span></div>
    <div class="carousel__face  mx-auto"><span className='spanOffer'>DIGITAL MARKETING</span></div>
    <div class="carousel__face  mx-auto"><span className='spanOffer'>BUSINESS DEVELEOPMENT</span></div>
    <div class="carousel__face  mx-auto"><span className='spanOffer'>CYBER SECURITY</span></div>
    <div class="carousel__face  mx-auto"><span className='spanOffer'>GRAPHICS DESIGNING</span></div>
    <div class="carousel__face  mx-auto"><span className='spanOffer'>CLOUD DEVELOPMENT</span></div>
    <div class="carousel__face  mx-auto"><span className='spanOffer'>DEDICATED HIRING</span></div>
    <div class="carousel__face  mx-auto"><span className='spanOffer'>INTERNSHIPS</span></div>
  </div>
</div>
</div> */}

<div className="flex items-center justify-center mybg ">
      <div className="mybg p-6 rounded-lg shadow-md text-center maxW sm:mx-auto ">
        <h1 className="sm:text-4xl font-bold mb-4 text-black mx-8 ">"We have Global Network of Clients"</h1>
        <p className="sm:text-lg mb-4 text-center mt-9 ">At our company, we pride ourselves on our expansive and diverse global network of clients. Spanning continents and cultures, our partnerships reach far and wide, embodying a rich tapestry of innovation, collaboration, and mutual growth. We have built strong, lasting relationships with clients from various industries, each contributing to our dynamic and ever-evolving ecosystem. Our commitment to excellence and our ability to deliver tailored solutions has earned us the trust and loyalty of businesses around the world. By leveraging our extensive network, we are able to stay ahead of market trends, foster cross-border collaborations, and provide unparalleled value to our clients. Join us, and become part of a thriving global community that is shaping the future of business.</p>
        <div className="button-wrapper-2 mt-20">
            <Link to="/about-us"><button className="hover-button-bellway">Learn More</button></Link>
            </div>
      </div>
    </div>


      {/* <div className="w-full md:w-1/2">
        <video
          className="w-full h-full object-cover"
          controls
        >
          <source src="path/to/your/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div> */}
      {/* <div className="w-full md:w-full bg-black text-white p-8 flex flex-col justify-center items-center">
        <h1 className="text-5xl  font-bold mb-4 text-red-600">Bellway Infotech</h1>
        <p className="text-lg mb-6 mt-8 ">
        Founded in 2017, Bellway Infotech has rapidly emerged as a global leader in the IT services industry. With headquarter in Indore, Madhya Pradesh and a network of offices across Dewas, Bhopal, and Indore, we specialize in delivering innovative technology solutions that drive business transformation.<br/><br/> Our core competencies include cloud computing,  web/app development, UI/UX design, digital marketing and enterprise software development. Over the years, we have cultivated a diverse portfolio of clients, ranging from dynamic startups to Fortune many companies, all of whom rely on our expertise to stay ahead in the competitive digital landscape.<br/><br/> Our team of highly skilled professionals is committed to excellence, continuously pushing the boundaries of technology to provide bespoke solutions tailored to our clients' unique needs. At Bellway Infotech, we believe in the power of collaboration and innovation, striving to create a better, more connected world through cutting-edge technology.
        </p>
        <p className="italic text-xl underline mt-8">Mohit Shrivastava</p>
      </div>
    </div> */}


    <div className="min-h-screen flex flex-col md:flex-row mt-32">
  
  <div className="w-full md:w-full bg-black text-white p-8 flex flex-col justify-center items-center">

    <div className="flex justify-center w-full mb-8 ">
      <div className="flex flex-col items-center">
        <img src="https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGh1bWFufGVufDB8fDB8fHww" alt="Founder Image" className="rounded-full w-32 h-32 mb-2" />
        <p className="text-lg">Mohit Shrivastava, CEO</p>
      </div>
      <div className="flex flex-col items-center px-8">
        <img src="https://images.unsplash.com/photo-1601412436009-d964bd02edbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGh1bWFufGVufDB8fDB8fHww" alt="Founder Image" className="rounded-full w-32 h-32 mb-2" />
        <p className="text-lg">Aakriti Shrivastava, CMO</p>
      </div>
    </div>

    <h1 className="text-5xl font-bold mb-4 text-red-600">Bellway Infotech</h1>
    <p className="text-lg mb-6 mt-8 text-center">
      Founded in 2017, Bellway Infotech has rapidly emerged as a global leader in the IT services industry. With headquarter in Indore, Madhya Pradesh and a network of offices across Dewas, Bhopal, and Indore, we specialize in delivering innovative technology solutions that drive business transformation.<br/><br/> Our core competencies include cloud computing,  web/app development, UI/UX design, digital marketing and enterprise software development. Over the years, we have cultivated a diverse portfolio of clients, ranging from dynamic startups to Fortune many companies, all of whom rely on our expertise to stay ahead in the competitive digital landscape.<br/><br/> Our team of highly skilled professionals is committed to excellence, continuously pushing the boundaries of technology to provide bespoke solutions tailored to our clients' unique needs. At Bellway Infotech, we believe in the power of collaboration and innovation, striving to create a better, more connected world through cutting-edge technology.
    </p>
    <p className=" text-2xl mt-8">Thank You</p>
  </div>
</div>



    <div className="flex items-center justify-center mybg sm:mt-0">
      <div className="mybg p-6  sm:text-center sm:w-1/2 sm:mx-auto ">
        <h1 className="text-3xl text-center font-bold  text-black mt-8">"Our Teams"</h1>
        <p className="sm:text-xl mb-4  mt-14 ">In a world where technology is the backbone of everything we do, our IT team stands as the cornerstone of our success. Day in and day out, they work tirelessly to keep our systems running smoothly, our data secure, and our digital dreams alive. </p>
        

        <h1 className="sm:text-xl font-semibold mb-4 text-black text-center  mt-20">Mohit Shrivastava, (CEO)<br/>
        Aakriti Shrivastava, (CMO)</h1>
      </div>
    </div>


    <div className="container mx-auto sm:py-8">
    <Slider
            width="450px"
            duration={20}
            pauseOnHover={true}
            blurBorders={false}
            blurBoderColor={'#ebf0f5'}
            
        >
            <Slider.Slide>
                <img src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="any" className='w-auto' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="any2" className='w-auto' />
            </Slider.Slide>
            <Slider.Slide>
                <img src="https://plus.unsplash.com/premium_photo-1661778490723-371305b4fb06?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bWVldGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="any3" className='w-auto' />
            </Slider.Slide>
            
            <Slider.Slide>
                <img src="https://plus.unsplash.com/premium_photo-1661281350976-59b9514e5364?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2ZmaWNlfGVufDB8fDB8fHww" alt="any3" className='w-auto' />
            </Slider.Slide>
        </Slider>
      </div>
      <Footer/>
    </>
  )
}

export default About
