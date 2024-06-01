import React from 'react'
import { useState } from 'react';




const slides = [

  {
    image: 'https://images.unsplash.com/photo-1626178793926-22b28830aa30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/graphic-design/property-dekho',
    buttonText: 'Checkout Property Dekho'
  },
  {
    image: 'https://images.unsplash.com/photo-1601121141499-17ae80afc03a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3D',
    url: '/case-study/graphic-design/hazel-jewells',
    buttonText: 'Checkout Hazel View'
  },
  {
    image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGRvY3RvcnN8ZW58MHx8MHx8fDA%3D',
    url: '/case-study/graphic-design/ur-fine',
    buttonText: 'Discover Ur-Fine'
  },
];

const Ur_Fine = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
   <div class="container mx-auto my-5 bg-black p-8">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0">
      <h1 class="text-8xl font-bold mb-4 text-white">UR-Fine...</h1>
      <h3 class="text-2xl text-white">
        <a href="/" class="text-red-600 hover:underline">Home</a> / Case-Study / UR-Fine 
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://plus.unsplash.com/premium_photo-1661762428543-4a8ad2ff5391?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D" alt="Team" class="w-full h-auto"/>
    </div>
  </div>
</div> 



<div class="sm:mx-20 sm:w-100 p-8 my-10 mx-2 mybg text-black rounded-lg shadow-lg borderb">
    <h2 class="text-3xl font-bold mb-6 text-center  hover:text-red-600">Here's a brief explanation of how such online medical consultation services work</h2>
    
    <div class="flex justify-center mb-6">
      <img src="https://bellwayinfotech.com/assets/uploads/media-uploader/ur-fine-doctor-app-compressed1689941181.jpg" alt="UR-Fine doctor image Image" class="w-full max-w-md h-auto rounded-lg shadow-lg"/>
    </div>
    
    <p class="text-black mb-6 sm:text-left  sm:mx-10">
    "Online medical consultation services, also known as telemedicine, have revolutionized the healthcare industry by providing patients with convenient and efficient access to medical care. Here's a brief explanation of how these services typically work.While online medical consultations offer numerous advantages, they also come with challenges. Not all medical conditions can be diagnosed or treated remotely, and some situations may require in-person examinations or tests. Additionally, ensuring internet access and digital literacy for all patients is crucial for the widespread adoption of telemedicine."
    <br/><br/>
<h1 className='text-black text-lg font-bold'>Registration and Account Setup</h1>

"Patients begin by registering on a telemedicine platform, which could be a website or mobile app. During registration, they provide essential personal information, including medical history and current health conditions. This information helps doctors understand the patient's background and make informed decisions during consultations."
    <br/><br/>

    <h1 className='text-black text-lg font-bold'>Appointment Scheduling</h1>

    "Once registered, patients can schedule appointments with healthcare providers. Many platforms offer a variety of specialists, including general practitioners, dermatologists, psychiatrists, and more. Appointments can be booked based on the patient's convenience, often with options for same-day consultations."
    <br/><br/>


    
    <h1 className='text-black text-lg font-bold'>Consultation</h1>

    "At the scheduled time, patients join a virtual consultation with their chosen healthcare provider. Consultations typically occur through video calls, but some platforms also offer phone calls or chat-based consultations. During the consultation, patients discuss their symptoms, concerns, and any relevant medical history. The doctor may ask questions to gather more details and provide a diagnosis."
    <br/><br/>


<h1 className='text-black text-lg font-bold'> Diagnosis and Treatment Plan</h1>

"After assessing the patient's condition, the healthcare provider offers a diagnosis and treatment plan. This plan may include prescribing medications, recommending over-the-counter treatments, suggesting lifestyle changes, or advising further tests. For prescriptions, many telemedicine platforms can directly send the prescription to a pharmacy for easy pick-up or delivery."
<br/><br/>

<h1 className='text-black text-lg font-bold'> Follow-Up and Monitoring</h1>

"Depending on the patient's condition, follow-up consultations may be scheduled to monitor progress and make any necessary adjustments to the treatment plan. Telemedicine platforms often provide secure messaging systems, allowing patients to ask follow-up questions and receive guidance without the need for another full consultation."
<br/><br/>


<h1 className='text-black text-lg font-bold'> Benefits of Online Medical Consultations</h1><br/>

<b>Convenience:</b> Patients can consult with doctors from the comfort of their homes, avoiding the need to travel and wait in clinics.<br/><br/>
<b>Accessibility:</b> Telemedicine expands access to healthcare, particularly for individuals in remote areas or those with mobility issues.<br/><br/>
<b>Time Efficiency:</b> Online consultations can be scheduled quickly, reducing the time spent on getting medical advice and treatment.<br/><br/>
<b>Cost-Effective:</b> Telemedicine can reduce healthcare costs by minimizing the need for physical visits and hospitalizations.
<br/><br/><br/>

<h1 className='text-black text-lg font-bold'>Conclusions</h1>

Online medical consultation services provide a flexible, efficient, and accessible way for patients to receive medical care. By leveraging technology, these services offer timely and effective healthcare solutions, enhancing patient satisfaction and overall health outcomes. As telemedicine continues to evolve, it holds great promise for the future of healthcare delivery.
<br/><br/>
</p>


    

    <div className="md:flex-1 sm:grid sm:grid-cols-3 flex-row  justify-center items-center  ">
           <div className='border flex border-black px-40 sm:px-3 p-2 hover:bg-white'><h1 className="text-lg mb-2 text-black text-nowrap"><i class="fa-solid fa-user"></i> Ur-Fine</h1>
           </div> 
           <div className='border border-black px-40 sm:px-4 p-2 hover:bg-white'><h1 className="text-xl mb-2 text-black text-nowrap "><i class="fa-solid fa-wallet"></i> Budget: $2500</h1></div>
           <div className='border border-black px-40 sm:px-5 p-2 hover:bg-white'><h1 className="text-lg mb-2 text-black text-nowrap"><i class="fa-solid fa-clock"></i> Duration: 15 Days</h1></div>
          
          </div>
    </div>

    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold mb-6 text-center hover:text-red-600">Our Related Case Studies</h2>

      <div className="relative w-full max-w-3xl mx-auto">
        <div className="overflow-hidden relative">
          <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {slides.map((slide, index) => (
              <div key={index} className="w-full flex-shrink-0 text-center">
                <img src={slide.image} alt={`Slide ${index + 1}`} className="w-full h-auto object-cover rounded-lg" />
                <a href={slide.url} className="inline-block mt-8 bg-black text-white px-32 py-5 rounded">{slide.buttonText}</a>
              </div>
            ))}
          </div>
        </div>

        <button onClick={goToPrevious} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          Prev
        </button>
        <button onClick={goToNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
          Next
        </button>
      </div></div>
    </>
  )
}

export default Ur_Fine
