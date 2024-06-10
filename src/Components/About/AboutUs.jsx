import React from 'react'
import './AboutUs.css'
import Slider from 'react-infinite-logo-slider'
import { Link } from 'react-router-dom'

import CNavbar from '../../CNavbar'
import Footer from '../../Footer'

import Img14 from '../../assets/img14.jpeg'
import Img15 from '../../assets/img15.jpeg'
import Img3 from '../../assets/img3.jpg'
import Img16 from '../../assets/img16.png'
import Img18 from '../../assets/img18.png'
import Img13 from '../../assets/img13.jpg'
import Img99 from '../../assets/mst.png'


import Img31 from '../../assets/img31.png'
import Img32 from '../../assets/img32.png'
import Img33 from '../../assets/img33.png'
import Img34 from '../../assets/img34.png'
import Img35 from '../../assets/img35.png'
import Img36 from '../../assets/img36.png'
import Img37 from '../../assets/img37.png'
import Img38 from '../../assets/img38.png'
import Img39 from '../../assets/img39.png'
import Img40 from '../../assets/img40.png'
import Img41 from '../../assets/img41.png'
import Img42 from '../../assets/img42.png'
import Img43 from '../../assets/img43.png'
import Img44 from '../../assets/img44.png'
import Img45 from '../../assets/img45.png'
import Img46 from '../../assets/img46.png'

import image9 from '../../assets/image9.png'
import image10 from '../../assets/image10.png'
import image11 from '../../assets/image11.png'
import image12 from '../../assets/image12.png'
import image13 from '../../assets/image13.png'
import image14 from '../../assets/image14.png'
import image15 from '../../assets/image15.png'
import image16 from '../../assets/image16.png'
import image17 from '../../assets/image17.png'
import image18 from '../../assets/image18.png'
import image19 from '../../assets/image19.png'
import image20 from '../../assets/image20.png'
import image21 from '../../assets/image21.png'
import image22 from '../../assets/image22.png'


import Slider2 from 'react-slick';
import Client1 from '../../assets/ClientTest1.jpg'
import Client2 from '../../assets/ClientTest2.jpg';
import Client3 from '../../assets/ClientTest3.jpg';
import Client4 from '../../assets/ClientTest4.jpg';
import Client5 from '../../assets/ClientTest5.png';
import Client6 from '../../assets/ClientTest6.png';


const AboutUs = () => {
  const boxes = [
    {
      id: 1,
      text: 'The team did the required enhancement on the site with excellent communication skills. He is very proactive and technically!',
      image: Client1,
      name: 'Radomi',
      position: 'Founder, POPOPDEAL',
    },
    {
      id: 2,
      text: 'We wanted a top-quality comparison website on which you could compare to the market Unified Infotech you gave us exactly.',
      image: Client2,
      name: 'Gregory Doe',
      position: 'Founder',
    },
    {
      id: 3,
      text: 'Experience top-tier service with Mohit & his team! Reputed for their exceptional problem-solving skills, delivering excellence for 2 years!',
      image: Client3,
      name: 'Kendra',
      position: 'Founder, The KB Hair',
    },
    {
      id: 4,
      text: 'The team stood out because of their swift response time and patience. Bellway infotech provided one contact person!',
      image: Client4,
      name: 'Karen Agresti',
      position: 'Founder',
    },
    {
      id: 5,
      text: 'Experience exceptional software development and customer support with lightning-fast response times. Great overall experience!',
      image: Client5,
      name: 'Manish Nair',
      position: 'CEO',
    },
    {
      id: 6,
      text: 'Appreciable efforts and customer support are very good, It is very valuable for the business to continue to improve!',
      image: Client6,
      name: 'Gnana Prakash',
      position: 'Founder',
    }
  ];
const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };




  return (
    <>

      <CNavbar/>
      <div className='mybg'>
<div class="containerx mx-auto  bg-black p-8 mt-20">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-8">
      <h1 class="sm:text-8xl font-bold mb-4 text-white">About...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to="/" class="text-red-600 hover:underline">Home</Link> / About Us
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D" alt="About Image" class="w-full h-auto"/>
    </div>
  </div>
</div>


<div className="containerx mx-auto my-12 p-8 ">
      <div className="flex  justify-around flex-col md:flex-row items-center">
        {/* Image Section */}
        <div className=" md:h-1/2 md:w-1/4  sm:w-80">
          <img 
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxtZWV0aW5nJTIwc3BhY2V8ZW58MHx8MHx8fDA%3D" 
            alt="About Image" 
            className="  object-cover rounded-lg shadow-lg"
          />
        </div>
        {/* Content Section */}
        <div className="md:w-1/2 w-full ">
          <h1 className="sm:text-4xl font-bold mb-4 text-black text-center text-3xl mt-5">We have 15 years of experience in IT solutions</h1>
          <p className="text-xl mb-4 mt-12 text-center font-sans">
          Discover BELLWAY INFOTECH, a global leader in web & app development. Innovating exceptional tech solutions for your business success.
          </p>
          <p className="text-3xl text-center mt-16 font-sans ">
         <span className='text-red-600 font-bold text-5xl'>"</span> Whatever your business may be whether you run a<br/> creative agency, a digital studio.<span className='text-red-600 font-bold text-5xl'>"</span>
          </p>
        </div>
      </div>
    </div>



    {/* <!-- New Blog Container --> */}
  <div class=" mx-auto  p-12 mybg btext">
    <h2 class="text-6xl font-bold mb-6 text-center hover:text-red-600">About Us</h2>
    <br/><br/>

    {/* <!-- Blog Post 1 --> */}
    <div class="flex flex-col md:flex-row items-center mb-8  mt-8">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src={Img3} alt="Tech Future" class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pl-8">
        <h3 class="text-3xl font-bold  hover:text-red-600 text-center">Who We Are?</h3>
        <p class="text-xl mb-4 mt-8">Bellway Infotech is a top-rated website and mobile app (Android/iOS) marketing firm with over 200+ projects completed.
        <br/><br/>
        The application development team gained excellent practical experience as well as in-depth technical skills in order to create business-centric B2B and B2C mobile apps that help businesses stay ahead of the competition.
        <br/><br/>
        High-quality mobile app design, development, testing, and deployment at each stage of the mobile app development lifecycle. Our primary goal is to develop digital products that promote interaction and success.</p>
        
      </div>
    </div>
    <br/><br/>

    {/* <!-- Blog Post 2 --> */}
    <div class="flex flex-col md:flex-row-reverse items-center mb-8 mt-20">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src={Img18} alt="React" class="w-full h-auto rounded-lg shadow-lg"/>
      </div>
      <div class="md:w-1/2 md:pr-8">
        <h3 class="text-3xl font-bold  hover:text-red-600 text-center">Who We Can Help</h3>
        <p class="text-xl mb-4 mt-8">We have project advisors, project managers, project leaders, and analysts/programmers on our team.<br/><br/> All of our employees have professional qualifications in information technology or a related discipline, and the majority of them have extensive work experience on IT projects of all sizes, using various software tools on various hardware.<br/><br/>
         We have a team of highly trained professionals who handle customers with extreme sensitivity and responsiveness. We provide the best tools in-house to support their job functions, resulting in efficient customer service to the greatest extent possible.</p>
        
      </div>
    </div>
    <br/><br/>

    {/* <!-- Blog Post 3 --> */}
    <div class="flex flex-col md:flex-row items-center mb-8 mt-20">
      <div class="md:w-1/2 mb-4 md:mb-0">
        <img src={Img16} alt="Laravel" class="w-full h-auto rounded-lg shadow-lg"/>
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
</div> */}<div class="container8" style={{marginTop:"'70px"}}>
    <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-black">We Have Worked For</h1>
        <p className="text-2xl mt-9">
        Bellway Infotech has undertaken diverse projects in software development, IT consulting, and system integration. Our work has significantly enhanced efficiency and productivity across various industries, demonstrating our commitment to delivering scalable, reliable tech solutions.</p>
      </div>
    <div class="card"><img src={image9} alt="Image 1"/></div>
    <div class="card"><img src={image10} alt="Image 2"/></div>
    <div class="card"><img src={image11} alt="Image 3"/></div>
    <div class="card"><img src={image12} alt="Image 4"/></div>
    <div class="card"><img src={image13} alt="Image 5"/></div>
    <div class="card"><img src={image14} alt="Image 6"/></div>
    <div class="card"><img src={image15} alt="Image 7"/></div>
    <div class="card"><img src={image16} alt="Image 8"/></div>
    <div class="card"><img src={image17} alt="Image 8"/></div>
    <div class="card"><img src={image18} alt="Image 8"/></div>
    <div class="card"><img src={image19} alt="Image 8"/></div>
    <div class="card"><img src={image20} alt="Image 8"/></div>
    <div class="card"><img src={image21} alt="Image 8"/></div>
    <div class="card"><img src={image22} alt="Image 8"/></div>
</div>

    {/* <div className="min-h-screen flex flex-col md:flex-row mt-32"> */}
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
    {/* Images and Names in the Same Line */}
    <div className="flex justify-center w-full mb-8 ">
      <div className="flex flex-col items-center">
        <img src={Img99} alt="Founder Image" className="rounded-full w-32 h-32 mb-2" />
        <p className="text-lg">Mohit Shrivastava, CEO</p>
      </div>
      <div className="flex flex-col items-center px-8">
        <img src={Img14} alt="Founder Image" className="rounded-full w-32 h-32 mb-2" />
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
        <h1 className="text-3xl text-center font-bold  text-black mt-16">"Our Teams"</h1>
        <p className="sm:text-xl mb-4  mt-14 ">In a world where technology is the backbone of everything we do, our IT team stands as the cornerstone of our success. Day in and day out, they work tirelessly to keep our systems running smoothly, our data secure, and our digital dreams alive. </p>
        

        <h1 className="sm:text-xl font-semibold mb-4 text-black text-center  mt-20">Mohit Shrivastava, (CEO)<br/>
        Aakriti Shrivastava, (CMO)</h1>
        
        
       
      </div>
    </div>


    
    <Slider
            width="350px"
            // duration={30}
            pauseOnHover={false}
            blurBorders={false}
            blurBoderColor={'#ebf0f5'}
            
            
        >
          
            <Slider.Slide>
                <img src={Img33} alt="any2" className='w-auto' />
            </Slider.Slide>
            <Slider.Slide>
                <img src={Img39} alt="any3" className='w-auto%' />
            </Slider.Slide>
            
            <Slider.Slide>
                <img src={Img42} className='w-auto%' />
            </Slider.Slide>

            <Slider.Slide>
                <img src={Img35} className='w-auto%' />
            </Slider.Slide>
            
            <Slider.Slide>
                <img src={Img36} className='w-auto' />
            </Slider.Slide>
            
            <Slider.Slide>
                <img src={Img37} className='w-auto' />
            </Slider.Slide>
            
            <Slider.Slide>
                <img src={Img43} className='w-auto' />
            </Slider.Slide>
            
            <Slider.Slide>
                <img src={Img41} className='w-auto' />
            </Slider.Slide>

            <Slider.Slide>
                <img src={Img32} className='w-auto' />
            </Slider.Slide>

            <Slider.Slide>
                <img src={Img38} className='w-auto' />
            </Slider.Slide>

            <Slider.Slide>
                <img src={Img40} className='w-auto' />
            </Slider.Slide>

            <Slider.Slide>
                <img src={Img44} className='w-auto' />
            </Slider.Slide>

            <Slider.Slide>
                <img src={Img46} className='w-auto' />
            </Slider.Slide>

            <Slider.Slide>
                <img src={Img45} className='w-auto' />
            </Slider.Slide>

            <Slider.Slide>
                <img src={Img34} className='w-auto' />
            </Slider.Slide>
            
        </Slider>
        <div className="flex items-center justify-center mt-10 mybg sm:mt-0">
          
        </div>

        <div className="w-full overflow-hidden mt-20">
        <div className="w-full text-center">
          <h1 className="appreciation text-4xl font-bold mb-8">Stories From Our Clients</h1>
        </div>
        <div className="mt-10 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 bg-gray-50 shadow-md rounded-md p-4 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl">
          <Slider2 {...settings}>
            {boxes.map((box, index) => (
              <div key={index} className="px-2 sm:px-4">
                <div className="bg-white rounded-md p-4 sm:p-6 md:p-8 text-center transition duration-300 hover:bg-gray-100 shadow-md hover:shadow-lg relative">
                  <div className="client-image mb-4">
                    <img src={box.image} alt={`Client ${index + 1}`} className="w-16 h-16 rounded-full mx-auto" />
                  </div>
                  <div className="text-gray-700 text-lg font-bold mb-1">{box.name}</div>
                  <div className="text-gray-600 text-sm">{box.position}</div>
                  <br/>
                  <div className="text-gray-700 text-lg">{box.text}</div>
                </div>
              </div>
            ))}
          </Slider2>
        </div>
      </div>


<br/><br/>
      <Footer/>
      </div>
    </>
  )
}

export default AboutUs
