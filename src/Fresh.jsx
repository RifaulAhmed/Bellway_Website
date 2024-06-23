
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CNavbar from './CNavbar';
import './ai.css'
import FaqPage from './AIFaq';
import PopupForm from './PopupForm';
import burgir from './assets/grocery2.jpg';
import burgir2 from './assets/grocery.jpg';
import fresh from './assets/fresh.webp'
import Footer from './Footer';
import Slider2 from 'react-slick';
import red from './assets/red.webp'
import HomeTestimonials from './HomeTestimonials';
import bbq from './assets/bbq2.jpeg';

const Product2 = () => {

    const [isPopupVisible, setIsPopupVisible] = useState(false);
    const togglePopup = () => {
        setIsPopupVisible(!isPopupVisible);
    }

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
                    <div class="md:w-1/2 text-left mb-38  p-16">
                        <h1 class="sm:text-8xl font-bold mb-4 text-white">Fresh and Red Delivery</h1>
                        <h3 class="sm:text-2xl text-white">
                            <Link to="/" class="text-red-600 hover:underline">Home</Link> / Fresh and Red Delivery
                        </h3>
                    </div>
                    <div class="md:w-1/2 text-right">
                        <img src={bbq} alt="About Image" class="w-full h-auto" />
                    </div>
                </div>
            </div>

            {/* <div className="main-page">
        <button className="contact-button" onClick={togglePopup}>Contact <i class="fa-solid fa-phone-volume"></i></button>
        {isPopupVisible && <PopupForm onClose={togglePopup} />}
      </div> */}

            <div class="md:w-full text-center mb-4 md:mb-0 p-16">
                {/* <h1 class="sm:text-5xl  font-bold mb-4 text-black mt-16">"Accelerate Business Growth with
          Our AI Services"</h1> */}

                <div className="space-y-20 mt-12 mx-auto">
                    <div className="flex flex-col md:flex-row  text-white">
                        <img
                            src={red}
                            alt="Fresh and red delivery"
                            className="w-1/2  md:w-1/3 " style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)', borderRadius: '6%' }}
                        />
                        <div style={{ backgroundColor: 'white' }} className="md:ml-28 mt-4 md:mt-0 text-center md:text-left">
                            <h2 className="text-4xl font-bold" style={{ color: 'black' }}>Fresh And Red Delivery</h2>
                            <p className="mt-9 text-lg" style={{ color: 'black', textAlign: 'start' }}> App Features: <br /><br />

                                Seamless Ordering: Browse through a virtual marketplace featuring a wide selection of farm-fresh produce and premium red meats. With intuitive navigation, ordering your favourite ingredients has never been easier.<br />

                                Customization: Personalize your orders down to the last detail.<br /> Choose your preferred cuts of meat, quantities of produce, and any additional gourmet pairings or sauces you desire.<br />

                                Real-Time Updates: Stay in the loop with real-time updates on your order's status.<br /> From packing and dispatch to delivery, you'll always know where your culinary <br />treasures are.
                                <br />
                                Delivery Tracking: Track your delivery in real-time as it makes its way to your doorstep. No more guessing when your goodies will arrive!
                                <br />
                                Cooking Tips: Unlock professional cooking tips and techniques that enhance your culinary skills. Learn how to perfectly sear a steak or choose the<br /> ripest tomatoes for your dishes.<br /><br />

                                App Benefits:<br /><br />

                                Time-Saving Convenience: Skip the grocery store queues and the butcher shop rush. With the Fresh and Red Delivery App, your kitchen is always stocked with the finest ingredients.
                                <br />
                                Healthier Choices: Our commitment to quality means you can indulge in nutrient-rich red meats and fresh produce that contribute to a balanced and wholesome diet.
                                <br />
                                Sustainability: By choosing the Fresh and Red Delivery App, you're supporting eco-friendly practices through responsible sourcing and minimal packaging waste.



                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-center mt-20" >
                        <img
                            src={fresh}
                            alt="Grocery"
                            className="w-1/2 md:w-1/3" style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.6)' }}
                        />
                        <div className="md:mr-28 mt-4 md:mt-0 text-center md:text-left mx-9">
                            <h2 style={{ textAlign: 'left' }} className="text-4xl font-bold">Why is Fresh and Red Delivery a useful resource for you?<br /></h2>
                            <p style={{ textAlign: 'left' }} className="mt-9 text-lg">A platform like this would be useful for handling online ordering, reservations for tables, delivery coordination, financial transactions, and other facets of a restaurant business. Our platform's fundamental feature is customization, which enables you to modify it to meet the particular needs of your restaurant.<br /> Our versatile system adjusts to your demands, regardless of whether you require specialized modules for customer relationship management, staff scheduling, or inventory management.<br /> To improve consumer interactions, you can tailor loyalty programs and marketing campaigns to your restaurant's identity and personalize the interface to provide your patrons a consistent experience. Because of our modular architecture, you may select the capabilities you require right now and add more as your company expands.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative min-h-screen flex items-center justify-center bg-cover bg-center mt-20 p-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533134486753-c833f0ed4866?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzJ8fGJhY2tncm91bmQlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D')" }}>
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
                            <p>Email: mailto:info@bellwayinfotech.com</p>
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


            <HomeTestimonials />

            <Footer />
        </>
    )
}

export default Product2