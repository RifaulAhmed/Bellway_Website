import React from 'react'
import { Link } from 'react-router-dom'
import { useState,useEffect } from 'react'

import PopupForm from './PopupForm';
import image9 from './assets/image9.png'
import image10 from './assets/image10.png'
import image11 from './assets/image11.png'
import image12 from './assets/image12.png'
import image13 from './assets/image13.png'
import image14 from './assets/image14.png'
import image15 from './assets/image15.png'
import image16 from './assets/image16.png'
import image17 from './assets/image17.png'
import image18 from './assets/image18.png'
import image19 from './assets/image20.png'
import image20 from './assets/image21.png'
import image21 from './assets/image22.png'
import image22 from './assets/image23.png'
import image23 from './assets/image24.png'
import image24 from './assets/image25.png'
import CNavbar from './CNavbar'
import './Form2.css'
import Slider from 'react-slick';
import Client1 from './assets/ClientTest1.jpg'
import Client2 from './assets/ClientTest2.jpg';
import Client3 from './assets/ClientTest3.jpg';
import Client4 from './assets/ClientTest4.jpg';
import Client5 from './assets/ClientTest5.png';
import Client6 from './assets/ClientTest6.png';

// import image8 from './assets/image8.avif'

import Footer from './Footer'

import FaqPage2 from './FaqPage2';


const Ux = () => {

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




    
    
    const [isPopupVisible, setIsPopupVisible] = useState(false);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  }

    const cardsData = [
        { title: "User Interface Design", description: "Interface designs for Web, Mobile, and Custom Applications by being creative and incorporating best design practices and standards.User interface design focuses on creating visually appealing and intuitive interfaces that enhance user interaction and experience with a digital product."},
        { title: "Digital Prototyping", description: "Building a prototype for real-time User Testing and Feedback for improvements before actual development.Digital prototyping involves creating interactive, functional models of a digital product to test and refine design concepts before full-scale development. " },
        { title: "Logo Design", description: "Your logo design is essential to your brand’s identity. Get 100% tailor made logo designs and distinguish your brand.Logo design is the process of creating a unique, memorable symbol or graphic that represents a brand's identity and values." },
        { title: "Flow & Wireframe Designs", description: "Drawing Flows, design Wireframes, and UML Diagrams to critically understand the User Journey and System Requirements.Flow and wireframe designs are crucial in mapping out the structure and navigation of a digital product, providing a blueprint for user experience and interface development." },
        { title: "Product Overview Video", description: "Product overview videos effectively communicate your product’s features, uses, and success stories, spotlighting its uniqueness and sparking interest and excitement among your audience.A product overview video provides a concise visual summary of a product's features, benefits, and functionality to engage and inform potential customers." },
       {title:"2D Explainer Video",description:"we simplify complex concepts with creative 2D explainer videos, blending graphics, illustrations, and storytelling for an engaging and comprehensible message.A 2D explainer video uses animated graphics and narration to simplify and convey complex ideas or messages in an engaging and easily understandable way."}
      ];

      
      const technologies = [
        { id: 1, image: 'https://api.otakoyi.software/uploads/content/2023/11/20/1280/best-laravel-based-cms-that-you-should-know-224x171.webp', name: 'Tech 1',title:'Laravel' }, // Replace with actual URLs
        { id: 2, image: 'https://i.pinimg.com/236x/9c/65/bd/9c65bd67c0a9685a6e8121c0ad3694e3.jpg', name: 'Tech 2',title:'Laravel' },
        { id: 3, image: 'https://w7.pngwing.com/pngs/414/85/png-transparent-nodejs-javascript-runtime-backend-node-js-logo-3d-icon.png', name: 'Tech 3',title:'Laravel'  },
        { id: 4, image: 'https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png', name: 'Tech 4',title:'Laravel' },
        { id: 5, image: 'https://static-00.iconduck.com/assets.00/applications-java-icon-2048x2026-4gh120pq.png', name: 'Tech 5' ,title:'Laravel' },
        { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEy7NDZaJgOuppMzPYrA32_z6IHI777Tn9g&s', name: 'Tech 6',title:'Laravel'  },
        { id: 7, image: 'https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg', name: 'Tech 7',title:'Laravel'  },
        { id: 8, image: 'https://i.pinimg.com/736x/7f/63/64/7f63644d631600cb5c3fcec87332a5a4.jpg', name: 'Tech 8' ,title:'Laravel' }
      ];
    
      
      const images = [
        image9,
        image10,
     image11,
      image12,
       image13,
     image14,
 image15,
  image16,
      image17,
  image18,
        image19,
     image20,
     image21,
image22,
        image23,
        image24,
        "https://www.appslure.com/wp-content/uploads/2021/10/04-300x120-1.webp",
        "https://www.appslure.com/wp-content/uploads/2021/10/03-min-300x120-1.webp",
        
      ];
    
    
  
  
  return (
    <>
    <CNavbar/>
    <div class="containerx mx-auto  bg-black p-8">
  <div class="flex flex-col md:flex-row items-center mt-28 ">
    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-16">
      <h1 class="sm:text-7xl font-bold mb-4 text-white">UX/UI Designing...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to="/" class="text-red-600 hover:underline">Home</Link> /UX/UI Designing 
      </h3>
    </div>
    <div class="md:w-1/2 h-full mb-9 text-right">
      <img src="https://images.unsplash.com/photo-1621111848501-8d3634f82336?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="About Image" class="w-full h-auto"/>
    </div>
  </div>
</div>

<div className="main-page">
      <button className="contact-button" onClick={togglePopup}>Contact <i class="fa-solid fa-phone-volume"></i></button>
      {isPopupVisible && <PopupForm onClose={togglePopup} />}
    </div>





    










  <div className='se'>
  <h1 className='tag4' >UX/UI Designing</h1>
  </div>
 
    <div className="container899">
      {cardsData.map((card56, index) => (
        <div className="card56" key={index}>
          <h2>{card56.title}</h2>
          <p className='scroll'>{card56.description}</p>
        </div>
      ))}
    </div>
    <div className="min-h-screen flex flex-col items-center justify-center  p-8 ">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-black">Our Technologies</h1>
        <p className="text-2xl mt-9">Being a Mobile App development and web development company Bellway Infotech consistently serving into latest Technologies
        for providing nothing less than best to our Clients and Prospects.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-36 mt-12 ">
        {technologies.map(tech => (
          
          <div key={tech.id} className="flex justify-center items-center">
           
            <img 
              src={tech.image} 
              alt={tech.name} 
             
              className="w-48 h-48 md:w-32 md:h-32 rotate-on-hover"
              
            />
           
            
          </div>
          
        ))}
      </div>
    </div>


  




<div className='se'style={{marginTop:"100px"}} >
<h1 className='tag' >We Have Worked For</h1>
</div>

<div class="container8" style={{marginTop:"60px"}}>
    
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






    
    
<div className="w-full overflow-hidden mt-28">
        <div className="w-full text-center">
          <h1 className="appreciation text-4xl font-bold mb-8">Stories From Our Clients</h1>
        </div>
        <div className="mt-10 px-4 sm:px-6 md:px-8 lg:px-10 py-4 sm:py-6 md:py-8 lg:py-10 bg-gray-50 shadow-md rounded-md p-4 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl">
          <Slider {...settings}>
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
          </Slider>
        </div>
      </div>



<div className="relative min-h-screen flex items-center justify-center bg-cover bg-center mt-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D')" }}>
      <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-6xl flex flex-wrap">

        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl font-bold mb-4">Trusted Web &  App Development Company</h2>
          <p className="mt-10">If you have any questions, feel free to reach out. We are here to help you with any queries you may have.</p>
          <div className="mt-6">
              <h3 className="text-xl font-semibold">Our Office</h3>
              <p>B-405 Anmol Space Baikunth Dham, <br />
                Khajrana Main Road,<br /> Indore, 452018</p>
            </div>
            <div className='mt-6'>
              <h3 className="text-xl font-semibold">Contact Us </h3>
              <p>Email: info@bellwayinfotech.com</p>
              <p>Phone: +91-9981866409</p>
            </div>
          </div>






        
        
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Enquiry Form</h2>
          <form>
            <div className="mb-4 flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
                <input className="w-full px-3 py-2 border rounded" type="text" id="name" name="name" required />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label className="block text-sm font-medium mb-1" htmlFor="phone">Phone</label>
                <input className="w-full px-3 py-2 border rounded" type="tel" id="phone" name="phone" required />
              </div>
            </div>
            <div className="mb-4 flex flex-wrap -mx-2">
              <div className="w-full md:w-1/2 px-2 mb-4 md:mb-0">
                <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
                <input className="w-full px-3 py-2 border rounded" type="email" id="email" name="email" required />
              </div>
              <div className="w-full md:w-1/2 px-2">
                <label className="block text-sm font-medium mb-1" htmlFor="service">Service</label>
                <select className="w-full px-3 py-2 border rounded" id="service" name="service" required>
                  <option value="">Select a service</option>
                  <option value="consultation">Consultation</option>
                  <option value="support">Support</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
              <textarea className="w-full px-3 py-2 border rounded" id="message" name="message" rows="4" required></textarea>
            </div>
            <button className="w-full  text-white py-2 rounded bg-black">Submit</button>
          </form>
        </div>
      </div>
    </div>
      





<div style={{marginTop:"-10px"}}>

<FaqPage2/>
</div>

<Footer/>
    </>
  )
}

export default Ux
