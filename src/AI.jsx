
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CNavbar from './CNavbar';
import './ai.css'
import PopupForm from './PopupForm';

import Footer from './Footer';

import Solutions from './Solutions';

import HomeTestimonials from './HomeTestimonials';

import HomeFaq from './HomeFaq';


const AI = () => {

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  }

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

  const technologies = [
    { id: 1, image: 'https://api.otakoyi.software/uploads/content/2023/11/20/1280/best-laravel-based-cms-that-you-should-know-224x171.webp', name: 'Tech 1', title: 'Laravel' }, // Replace with actual URLs
    { id: 2, image: 'https://i.pinimg.com/564x/56/0c/43/560c4353b21b4948e5f0e9508ea07597.jpg', name: 'Tech 2', title: 'Laravel' },
    { id: 3, image: 'https://w7.pngwing.com/pngs/414/85/png-transparent-nodejs-javascript-runtime-backend-node-js-logo-3d-icon.png', name: 'Tech 3', title: 'Laravel' },
    { id: 4, image: 'https://w7.pngwing.com/pngs/18/497/png-transparent-black-and-blue-atom-icon-screenshot-react-javascript-responsive-web-design-github-angularjs-github-logo-electric-blue-signage.png', name: 'Tech 4', title: 'Laravel' },
    { id: 5, image: 'https://static-00.iconduck.com/assets.00/applications-java-icon-2048x2026-4gh120pq.png', name: 'Tech 5', title: 'Laravel' },
    { id: 6, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpEy7NDZaJgOuppMzPYrA32_z6IHI777Tn9g&s', name: 'Tech 6', title: 'Laravel' },
    { id: 7, image: 'https://banner2.cleanpng.com/20190623/yp/kisspng-python-computer-icons-programming-language-executa-5d0f0aa79779a6.6143656815612668556205.jpg', name: 'Tech 7', title: 'Laravel' },
    { id: 8, image: 'https://i.pinimg.com/736x/7f/63/64/7f63644d631600cb5c3fcec87332a5a4.jpg', name: 'Tech 8', title: 'Laravel' }
  ];

  return (
    <>
      <div className="sticky-nav">
        <CNavbar />
      </div>
      <div class="containerx mx-auto  bg-black p-8">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 text-left mb-4 md:mb-0 p-16">
            <h1 class="sm:text-8xl font-bold mb-4 text-white">Artificial Intelligence...</h1>
            <h3 class="sm:text-2xl text-white">
              <Link to="/" class="text-red-600 hover:underline">Home</Link> / Artificial Intelligence
            </h3>
          </div>
          <div class="md:w-1/2 text-right">
            <img src="https://images.unsplash.com/photo-1713472728570-5a6ef3947de1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTExfHxBaXxlbnwwfHwwfHx8MA%3D%3D" alt="About Image" class="w-full h-auto" />
          </div>
        </div>
      </div>

      <div className="main-page">
        <button className="contact-button" onClick={togglePopup}>Contact <i class="fa-solid fa-phone-volume"></i></button>
        {isPopupVisible && <PopupForm onClose={togglePopup} />}
      </div>

      <div class="md:w-full text-center mb-4 md:mb-0 p-16">
        <h1 class="sm:text-5xl  font-bold mb-4 text-black mt-16">"Accelerate Business Growth with
          Our AI Services"</h1>

        <div className="space-y-20 mt-20 mx-auto">
          <div className="flex flex-col md:flex-row   bg-black text-white">
            <img
              src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bWFjaGluZSUyMGxlYXJuaW5nfGVufDB8fDB8fHww"
              alt="Machine Learning"
              className="w-1/2  md:w-1/3 " style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)' }}
            />
            <div className="md:ml-28 mt-4 md:mt-0 text-center  ">
              <h2 className="text-4xl font-semibold">Machine Learning</h2>
              <p className="mt-9 text-lg"> Machine learning is a branch of artificial intelligence (AI) that focuses on the development of algorithms and statistical models that enable computers to perform tasks without explicit instructions. By using data-driven approaches, machine learning systems can identify patterns, make predictions, and improve over time based on experience. It encompasses various techniques such as supervised learning, unsupervised learning, and reinforcement learning. These techniques are applied in numerous fields, including natural language processing, image recognition, and predictive analytics, making machine learning a crucial area of study for advancing technology and solving complex problems.<br /><br />
                At our company, we leverage the power of machine learning to turn data into actionable insights, driving innovation and efficiency across industries. Our advanced algorithms and predictive models enable businesses to make data-driven decisions, optimize operations, and enhance customer experiences. From automating processes to uncovering hidden patterns in large datasets, our machine learning solutions are designed to meet the unique needs of each client, ensuring they stay ahead in a competitive market.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center mt-20" >
            <img
              src="https://images.unsplash.com/photo-1625314887424-9f190599bd56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGJyYWluJTIwaW1hZ2UlMjByb2JvdHxlbnwwfHwwfHx8MA%3D%3D"
              alt="Deep Learning Image"
              className="w-1/2 md:w-1/3" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)' }}
            />
            <div className="md:mr-28 mt-4 md:mt-0 text-center md:text-left mx-9">
              <h2 className="text-4xl font-semibold">Deep Learning</h2>
              <p className="mt-9 text-lg">Deep learning is a subset of machine learning that focuses on neural networks with many layers (hence "deep") to model complex patterns in data. It mimics the structure and function of the human brain to process vast amounts of information, enabling systems to perform tasks such as image and speech recognition, natural language processing, and autonomous driving. By leveraging large datasets and high-performance computing, deep learning algorithms can learn intricate representations and features directly from raw data, leading to breakthroughs in artificial intelligence. This field of study is pivotal for advancing technology, as it drives innovations in various industries by solving problems that were previously considered intractable.<br /><br />
                Deep learning is revolutionizing industries by enabling companies to harness the full potential of their data. Our company leverages deep learning to develop sophisticated models that drive innovation and efficiency across various applications. From enhancing image and speech recognition capabilities to automating complex tasks and improving decision-making processes, our deep learning solutions are tailored to meet the specific needs of your business. By utilizing state-of-the-art neural networks and leveraging vast amounts of data, we empower your organization to achieve unprecedented accuracy, efficiency, and insight, keeping you at the forefront of technological advancement and competitive edge.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-black text-white"  >
            <img
              src="https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTZ8fHJvYm90aWMlMjBicmFpbiU1Q3xlbnwwfHwwfHx8MA%3D%3D"
              alt="Brain Image"
              className="w-1/2 md:w-1/3 "
            />
            <div className="md:ml-28 mt-4 md:mt-0 text-center md:text-left">
              <h2 className="text-4xl font-semibold">Natural Language Processing</h2>
              <p className="mt-9 text-lg">Natural Language Processing (NLP) is a branch of artificial intelligence that focuses on the interaction between computers and human language. At our company, we harness the power of NLP to develop advanced solutions that enable machines to understand, interpret, and respond to human language in a valuable way. Our NLP technologies are designed to enhance customer interactions, streamline operations, and provide deep insights from textual data. Whether it's through chatbots, sentiment analysis, or language translation, our cutting-edge NLP solutions help your business to improve communication, automate tasks, and gain a competitive edge in today's data-driven world.
                <br /><br />
                Natural Language Processing (NLP) is transforming the way companies interact with data and customers by enabling computers to understand and respond to human language. At our company, we leverage NLP to enhance customer service through intelligent chatbots, automate document processing, and extract valuable insights from unstructured text data. Our advanced NLP solutions improve efficiency, streamline communication, and provide a deeper understanding of customer sentiments and market trends. By integrating NLP into your business processes, we help you stay ahead in a competitive market, ensuring better decision-making and more personalized customer experiences.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row-reverse items-center">
            <img
              src="https://images.unsplash.com/photo-1667986292516-f27450ae75a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTk4fHxyb2JvdGljfGVufDB8fDB8fHww"
              alt="Robot Image"
              className="w-1/2 md:w-1/3 "
            />
            <div className="md:mr-28 mt-4 md:mt-0 text-center md:text-left mx-9">
              <h2 className="text-4xl font-semibold">Robotic Process Automation</h2>
              <p className="mt-9 text-lg">Robotic Process Automation (RPA) is an emerging field of study focused on the use of software robots or "bots" to automate repetitive, rule-based tasks traditionally performed by humans. This discipline combines knowledge from computer science, artificial intelligence, and business process management to develop systems that can execute tasks with high precision and speed. RPA is applied in various domains such as finance, customer service, and supply chain management, where it helps in automating data entry, transaction processing, and report generation. Studying RPA involves understanding how to design, deploy, and manage bots, as well as exploring the ethical and economic implications of automation in the workforce. This field is essential for advancing technology and improving operational efficiency across industries.<br /><br />
                Robotic Process Automation (RPA) is a game-changer for businesses looking to streamline operations and improve efficiency. At our company, we harness the power of RPA to automate repetitive, rule-based tasks, freeing up your employees to focus on more strategic activities. Our RPA solutions are designed to enhance accuracy, reduce costs, and accelerate processes across various departments, including finance, customer service, and human resources. By implementing RPA, your business can achieve greater productivity, scalability, and agility, ensuring that you stay competitive in an increasingly automated world.</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center bg-black text-white"  >
            <img
              src="https://images.unsplash.com/photo-1574758519652-904df1f8df4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHZpcnR1YWwlMjByZWFsaXR5fGVufDB8fDB8fHww"
              alt="Brain Image"
              className="w-1/2 md:w-1/3 "
            />
            <div className="md:ml-28  md:mt-0 text-center md:text-left">
              <h2 className="text-4xl font-semibold mt-3">Computer vision </h2>
              <p className="mt-9 text-lg">Computer vision is a field of artificial intelligence that focuses on enabling computers to interpret and understand visual information from the world, similar to how humans use their eyesight. This area of study involves the development of algorithms and models that allow machines to recognize patterns, objects, and scenes in images and videos. Applications of computer vision include facial recognition, autonomous vehicles, medical image analysis, and augmented reality. Studying computer vision requires knowledge of image processing, machine learning, and deep learning techniques. Researchers and practitioners in this field work on improving the accuracy and efficiency of visual recognition systems, making it possible for machines to analyze visual data and make informed decisions based on that data.
                <br /><br />
                Computer vision is revolutionizing industries by enabling businesses to extract valuable insights from visual data. At our company, we leverage cutting-edge computer vision technology to enhance operational efficiency, improve product quality, and drive innovation. Our solutions are designed to automate complex visual tasks such as quality inspection, inventory management, and facial recognition for security purposes. By integrating advanced algorithms and deep learning models, we provide accurate and reliable systems that can identify patterns, detect anomalies, and make informed decisions in real-time. With computer vision, your business can achieve higher precision, reduce manual labor, and gain a competitive edge in the market. Our expertise ensures that we deliver tailored solutions that meet your specific needs, transforming the way you interact with and utilize visual data.</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="min-h-screen flex flex-col items-center justify-center  p-8 ">
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
      </div> */}

      <Solutions/>



      <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center mt-20 p-20"  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D')" }}>
        <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-6xl flex flex-wrap ">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-3xl font-bold mb-4">Trusted Web & Mobile App Development Company</h2>
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
              <button className="w-full bg-black text-white py-2 rounded">Submit</button>
            </form>
          </div>
        </div>
      </div>
      <br /><br />


    
{/* <div className="w-full overflow-hidden mt-20">
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
      </div> */}
      <HomeTestimonials/>


      <HomeFaq/>

      <Footer/>
    </>
  )
}

export default AI