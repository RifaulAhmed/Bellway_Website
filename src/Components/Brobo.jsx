import React from 'react'
import CNavbar from '../CNavbar'
import { Link } from 'react-router-dom';
import screen from '../assets/Movie1.png'
import screen1 from '../assets/Movie2.png'
import screen2 from '../assets/Movie3.png'
import screen3 from '../assets/hotel5.png'
const Brobo = () => {
  return (
    <>
      <div className="sticky-nav">
        <CNavbar />
      </div>
      <div class="containerx mx-auto bg-black p-8">
        <div class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 text-left mb-4 md:mb-0 p-16">
            <h1 class="text-5xl font-bold mb-4 text-white ">BROBO</h1>

            <a href="https://play.google.com/store/apps/details?id=com.bellwayinfotech.deliciousmeal"
              target="_blank" class="relative inline-flex items-center justify-center p-5 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group mr-4">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">View Demo</span>
              <span class="relative invisible">Let's Talk</span>
            </a>
            <a href="/contact" class="relative inline-flex items-center justify-center p-5 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group">
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">Buy Now</span>
              <span class="relative invisible">Contact Us</span>
            </a>

            <h3 class="sm:text-2xl text-white mt-3">
              <Link to="/" class="text-red-600 hover:underline">Home</Link> / Brobo
            </h3>
          </div>
          <div class="md:w-1/2 text-right">
            <img src='https://i.pinimg.com/564x/a1/ac/59/a1ac595487c6e2fa9b64b072a4665415.jpg' alt="About Image" class="w-full h-auto mt-4" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between p-8">
        {/* Left Side */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h4 className="text-3xl font-bold mb-4 ml-20">About Virtual MD</h4>
          <p className="text-gray-700 ml-20 text-xl">
            Virtual MD is a HIPAA compliant Telemedicine Application for USA where patients and doctors can register to give and avail telemedicine services through the platform. It is an easy-to-use, telemedicine app solution that helps care providers improve patient satisfaction and increase practice revenue. Patients get convenient, accessible care for chronic care and follow-ups with features like Online Appointment Booking (on-demand and scheduled visits) for Video calls, Phone calls and Home Visits. They can also search for a doctor in their vicinity based on desired specialty and pay via card, insurance or health plans for self or dependent.
          </p>
        </div>

        {/* Right Side */}
        <div className="md:w-1/3 h-80  bg-gray-200 p-6 rounded shadow-lg mr-36">
          <div className="space-y-6">
            {/* Box 1 */}
            <div className="flex items-start">
              <div style={{
                backgroundColor: '#ff1493',
                backgroundImage: 'linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)'
              }} className="w-1 h-4 bg-black mr-4 mt-4"></div>
              <div>
                <h2 className="font-semibold text-lg mt-4">Clients Location</h2>
                <ul className="list-disc list-inside ml-4">
                  <p>Sub point 1</p>

                </ul>
              </div>
            </div>

            {/* Box 2 */}
            <div className="flex items-start">
              <div style={{
                backgroundColor: '#ff1493',
                backgroundImage: 'linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)'
              }} className="w-1 h-4 bg-black mr-4 mt-1"></div>
              <div>
                <h2 className="font-semibold text-lg">Development Time</h2>
                <ul className="list-disc list-inside ml-4">
                  <p>Sub point 1</p>

                </ul>
              </div>
            </div>

            {/* Box 3 */}
            <div className="flex items-start">
              <div style={{
                backgroundColor: '#ff1493',
                backgroundImage: 'linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)'
              }} className="w-1 h-4 bg-black mr-4 mt-1"></div>
              <div>
                <h2 className="font-semibold text-lg">Target Users</h2>
                <ul className="list-disc list-inside ml-4">
                  <p>Sub point 1</p>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-full relative z-10 top-3">
        <div className="w-full max-w-6xl ">
          <div className="inset-x-0 top-0 transform translate-y-8 mx-4 ">
            <div className="bg-cover bg-center rounded-lg shadow-lg"
              style={{ backgroundImage: "url('https://i.pinimg.com/564x/60/c7/15/60c715285cae14f6a4c97f4e10e3fe97.jpg')" }}>
              <div className="bg-black bg-opacity-50 p-6 rounded-lg mb-26">
                <h3 className="text-xl font-bold text-white text-center">Technologies Leveraged</h3>
                <p className="text-gray-200 text-center">We leveraged the strength of robust and secure technologies, tools, and frameworks used in the app/web to escalate the creation of new features and functionalities.

                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img src="https://i.pinimg.com/564x/e7/6e/7f/e76e7f4008ee89a7fa1e3110474c16ea.jpg" alt="Logo" className="w-8 h-8" />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img src="https://i.pinimg.com/564x/e7/6e/7f/e76e7f4008ee89a7fa1e3110474c16ea.jpg" alt="Logo" className="w-8 h-8" />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img src="https://i.pinimg.com/564x/e7/6e/7f/e76e7f4008ee89a7fa1e3110474c16ea.jpg" alt="Logo" className="w-8 h-8" />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img src="https://i.pinimg.com/564x/e7/6e/7f/e76e7f4008ee89a7fa1e3110474c16ea.jpg" alt="Logo" className="w-8 h-8" />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img src="https://i.pinimg.com/564x/e7/6e/7f/e76e7f4008ee89a7fa1e3110474c16ea.jpg" alt="Logo" className="w-8 h-8" />
                  </div>
                  <div className="bg-black p-4 rounded-lg flex justify-center items-center">
                    <img src="https://i.pinimg.com/564x/e7/6e/7f/e76e7f4008ee89a7fa1e3110474c16ea.jpg" alt="Logo" className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-white font-sans min-h-screen">
        <div className="w-full relative bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/564x/3f/67/8e/3f678e4d9c1b467ac5755766e88b2ac9.jpg')" }}>
          <div className="bg-black bg-opacity-50 p-8">
            <h2 className="text-4xl font-bold mt-8 text-left ml-24">The Need</h2>
            <p className="text-lg mt-8 ml-24">
              The dire need of combining two worlds medical and technological <br /> with regulatory safeguards is critical more than ever. In United States,<br /> 84% of people are more likely to select a provider that offers telemedicine <br />over that doesn't. Clearly, mHealth is something that patients want.<br /> Noteworthy, too is the fact that doctors and physicians look to deploy<br /> telemedicine right away and flatten the curve that could alleviate the burdens <br /> on all the clinics/hospitals. In respond to this, our client moved quickly to <br /> deploy a telehealth solution that suffice physicians and help them expand <br /> their reach with the ability to examine remotely and diagnose more patients<br /> in a shorter amount of time.
            </p>

            <div className="relative h-36">
              <img
                src={screen}
                alt="Image 1"
                className="absolute w-[16rem] h-[34rem] left-[54rem] bottom-[-7rem] transform translate-x-4 translate-y-4"
              />
              <img
                src={screen1}
                alt="Image 2"
                className="absolute w-[16rem] h-[34rem] left-24 top-0 transform translate-x-4 translate-y-4"
              />
              <img
                src={screen2}
                alt="Image 3"
                className="absolute w-[16rem] h-[34rem] left-[32rem] top-48 transform translate-x-4 translate-y-4"
              />

            </div>

          </div>

        </div>

      </div>
      <div className="text-black p-8">
        <h2 className="text-4xl font-bold mt-[34rem] text-center">Client Goals</h2>
        <p className="text-lg mt-6 text-center max-w-4xl mx-auto">
          Our client's goal was to swiftly implement a telehealth solution that would enable physicians to extend their reach. By providing remote examinations and diagnoses, the solution aims to enhance healthcare accessibility and efficiency, ultimately reducing the strain on clinics and hospitals.
        </p>

        <div className="flex items-center mt-8">
          <div style={{
            backgroundColor: '#ff1493',
            backgroundImage: 'linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)'
          }} className="w-2 h-6 bg-gray-500 ml-24"></div>
          <h3 className="text-2xl font-bold ml-4 ">App Objectives</h3>
        </div>

        <ul className="list-disc list-inside text-lg mt-4 max-w-4xl ml-24 ">
          <li className="text-black">Provide remote consultations</li>
          <li className="text-black">Increase patient engagement</li>
          <li className="text-black">Improve healthcare accessibility</li>
          <li className="text-black">Enhance diagnostic accuracy</li>
          <li className="text-black">Streamline healthcare workflows</li>
          <li className="text-black">Reduce healthcare costs</li>
        </ul>
      </div>


      <div className=" text-white font-sans min-h-screen">
        <div className="w-full relative bg-cover bg-center" style={{ backgroundImage: "url('https://i.pinimg.com/564x/25/d0/cf/25d0cfcd1837ab7001ca80de76b9e619.jpg')" }}>
          <div className="bg-black bg-opacity-50 p-7">
            <h2 className="text-4xl font-bold mt-[27rem] text-center ml-24">The Need</h2>
            <p className="text-lg mt-8 ml-24 text-center">
            Our UI/UX team developed hi-fi prototype after low-fi approval, through intuitive interfaces and aesthetically appealing layouts.
            </p>

            <div className="relative h-36">
              <img
                src={screen3}
                alt="Image 1"
                className="absolute w-[16rem] h-[34rem] left-[54rem] bottom-[17rem] transform translate-x-4 translate-y-4"
              />
              <img
                src={screen1}
                alt="Image 2"
                className="absolute w-[15rem] h-[25rem] left-24 top-[-28rem] transform translate-x-4 translate-y-4"
              />
              <img
                src={screen2}
                alt="Image 3"
                className="absolute w-[16rem] h-[34rem] left-[32rem] top-48 transform translate-x-4 translate-y-4"
              />

            </div>

          </div>

        </div>

      </div>


    </>
  )
}

export default Brobo
