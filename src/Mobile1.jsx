import React from 'react'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CNavbar from './CNavbar'
import './Mobile1.css'
import Mobile1Faq from './Mobile1Faq';
import Footer from './Footer'
const Mobile1 = () => {

    const cardsData = [
        { title: "Flutter App Development", description: "Flutter development involves using the Flutter framework, created by Google, to build cross-platform mobile applications with a single codebase. It enables developers to create high-performance apps with a rich set of customizable widgets and a reactive UI framework." },
        { title: "React Native App Development", description: "React Native app development involves utilizing the React Native framework, developed by Facebook, to build cross-platform mobile applications using JavaScript and React. It enables developers to create native-like experiences for both iOS and Android platforms with a single codebase." },
        { title: "iOS App Development", description: "iOS app development involves using Apple's Swift or Objective-C programming languages and the Xcode IDE to create native applications exclusively for Apple's iOS devices, such as iPhones and iPads. Developers leverage Apple's frameworks and design guidelines to craft user-friendly and high-performance apps tailored for the iOS ecosystem." },
        { title: "Android App Development", description: "Android app development involves using Java or Kotlin programming languages and the Android Studio IDE to create native applications for Android devices, catering to a wide range of screen sizes and hardware specifications. Developers leverage Android's robust SDK, libraries, and Material Design guidelines to build engaging and versatile apps for the Android platform." },
        { title: "Cross Plateform App Development", description: "Cross-platform app development involves using frameworks like React Native, Flutter, or Xamarin to build applications that can run on multiple platforms, such as iOS, Android, and sometimes even web, using a single codebase. It enables developers to reach a broader audience efficiently while minimizing development time and costs. " },

    ];

    const testimonials = [
        {
            id: 1,
            image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/gnana-prakash1693908767.png',
            name: 'Rifaul',
            text: 'Experience top-tier service with Mohit & his team! Reputed for their exceptional problem-solving skills'
        },
        {
            id: 2,
            image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/karen-agresti1694611721.jpg',
            name: 'Yachna',
            text: 'Experience exceptional software development and customer support with lightning-fast response times. Great overall experience!.'
        },
        {
            id: 3,
            image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/karen-agresti1694611721.jpg',
            name: 'Sakshi',
            text: 'Appreciable efforts and customer support are very good, It is very valuable for the business to continue to improve!.'
        },
        {
            id: 4,
            image: 'https://bellwayinfotech.com/assets/uploads/media-uploader/gnana-prakash1693908767.png',
            name: 'Kuldeep',
            text: 'The team stood out because of their swift response time and patience. Bellway infotech provided one contact person!.'
        }
    ];

    const images = [
        "https://www.appslure.com/wp-content/uploads/2021/10/rehau-logo-300x95-1.png",
        "https://www.appslure.com/wp-content/uploads/2021/10/ms-1-1-min.png",
        "https://www.appslure.com/wp-content/uploads/2021/10/login-logo-2.png",
        "https://www.appslure.com/wp-content/uploads/2021/10/irri-logo.png",
        "https://www.appslure.com/wp-content/uploads/2021/10/071-300x120-1.png",
        "https://www.appslure.com/wp-content/uploads/2021/10/37-min.png",
        "https://www.appslure.com/wp-content/uploads/2021/10/17-min.png",
        "https://www.appslure.com/wp-content/uploads/2021/10/11-300x120-1.png",
        "https://www.appslure.com/wp-content/uploads/2021/10/12-300x120-1.webp",
        "https://www.appslure.com/wp-content/uploads/2021/10/10-300x120-1.webp",
        "https://www.appslure.com/wp-content/uploads/2021/10/09-300x120-1.png",
        "https://www.appslure.com/wp-content/uploads/2021/10/09-300x120-1.png",
        "https://www.appslure.com/wp-content/uploads/2021/10/08-300x120-1.png",
        "https://www.appslure.com/wp-content/uploads/2021/10/07-min.png",
        "https://www.appslure.com/wp-content/uploads/2021/10/06-300x120-1.png",
        "https://www.appslure.com/wp-content/uploads/2021/10/05-300x120-1.png",
        "https://www.appslure.com/wp-content/uploads/2021/10/04-300x120-1.webp",
        "https://www.appslure.com/wp-content/uploads/2021/10/03-min-300x120-1.webp",

    ];

    return (
        <>
            <CNavbar />
            <div class="containerx mx-auto  bg-black p-8">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-16">
                        <h1 class="sm:text-6xl font-bold mb-4 text-white">Mobile Application Development...</h1>
                        <h3 class="sm:text-2xl text-white">
                            <Link to="/" class="text-red-600 hover:underline">Home</Link> /Mobile Application Development
                        </h3>
                    </div>
                    <div class="md:w-1/2 text-right">
                        <img src="https://i.pinimg.com/564x/f1/6b/a3/f16ba34851d12a4227d1f8238b12b324.jpg" alt="About Image" class="w-full h-auto" />
                    </div>
                </div>
            </div>

            <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D')" }}>
                <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-md w-full max-w-6xl flex flex-wrap">

                    <div className="w-full md:w-1/2 p-4">
                        <h2 className="text-3xl font-bold mb-4">Trusted Web & Mobile App Development Company</h2>
                        <p className="mt-10">If you have any questions, feel free to reach out. We are here to help you with any queries you may have.</p>
                        <div className="mt-6">
                            <h3 className="text-xl font-semibold">Our Office</h3>
                            <p>1234 Street Name<br />City, State, ZIP Code</p>
                        </div>
                        <div className='mt-6'>
                            <h3 className="text-xl font-semibold">Call Us Now at : </h3>
                            <p>contact@company.com</p>
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
                            <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Submit</button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='se'>
                <h1 className='tag4' >Mobile App Development Services</h1>
            </div>

            <div className="container899">
                {cardsData.map((card56, index) => (
                    <div className="card56" key={index}>
                        <h2>{card56.title}</h2>
                        <p>{card56.description}</p>
                    </div>
                ))}
            </div>
            <div className='se'>
                <h1 className='tag' >Our Technologies</h1>
            </div>

            <div class="container8" style={{ marginTop: "60px" }}>

                <div class="card"><img src="https://i.pinimg.com/736x/df/15/8d/df158d6d0c0e9376035050ddd13ed5ad.jpg" alt="Image 1" /></div>
                <div class="card"><img src="https://i.pinimg.com/564x/56/0c/43/560c4353b21b4948e5f0e9508ea07597.jpg" alt="Image 2" /></div>
                <div class="card"><img src="https://i.pinimg.com/736x/f3/4a/02/f34a0218dd2e38726c52ac763df55fa7.jpg" alt="Image 3" /></div>
                <div class="card"><img src="https://i.pinimg.com/236x/9b/4e/e0/9b4ee057076232fb57c48cf80947f8a7.jpg" alt="Image 4" /></div>
                <div class="card"><img src="https://i.pinimg.com/236x/56/ee/5e/56ee5ed8b4954396d11465c77966fd7c.jpg" alt="Image 5" /></div>
                <div class="card"><img src="https://i.pinimg.com/736x/7f/63/64/7f63644d631600cb5c3fcec87332a5a4.jpg" alt="Image 6" /></div>
                <div class="card"><img src="https://i.pinimg.com/474x/76/94/55/76945550a8e78f9a4dfac204dc993a5f.jpg" alt="Image 7" /></div>
                <div class="card"><img src="https://i.pinimg.com/236x/00/b7/1d/00b71d49ba404e5d40898613a53eca54.jpg" alt="Image 8" /></div>
            </div>

            <div className='se' style={{ marginTop: "100px" }} >
                <h1 className='tag' >We Have Worked For</h1>
            </div>

            <div className="container21" style={{ marginTop: "80px" }}>
                {images.map((image, index) => (
                    <div key={index} className="card21">
                        <img src={image} alt={`Image ${index + 1}`} className="image" />
                    </div>
                ))}
            </div>

            <div className=" py-16">
                <h2 className="text-5xl font-bold text-center text-black mb-8 mt-8">Testimonial</h2>
                <div className="container w-full  mx-auto px-4">
                    <div className="relative overflow-hidden">
                        <div className="flex animate-slide">
                            {testimonials.map((testimonial) => (
                                <div key={testimonial.id} className="flex-none w-full  md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
                                    <div className="bg-black p-28 rounded-lg text-white shadow-md">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.name}
                                            className="w-24 h-24 rounded-full mx-auto mb-4"
                                        />
                                        <h2 className="text-xl font-semibold text-center mb-2">{testimonial.name}</h2>
                                        <p className="text-white text-center">{testimonial.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "-70px" }}>
                {/* <FaqPage /> */}
            </div>
            <Mobile1Faq/>
            <Footer />
        </>
    )
}

export default Mobile1;
