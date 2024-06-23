import React from 'react';
import picture from './assets/c3.jpg';
// import instagram from './assets/ig.png';
// import twitter from './assets/twt.png';
// import youtube from './assets/ytb.png';
// import gmail from './assets/mail.png';
import CNavbar from './CNavbar';
// import Form from './Form';
// import Map from './Map';
import Footer from './Footer';
import ContactForm from './ContactForm';
function Herosection() {
    return (

        <>
            <CNavbar />
            {/* <div className="bg-black text-white flex flex-col items-start px-4">
                <div className="containerx mx-auto bg-black ">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="main-text text-left mb-8 mt-12 md:mb-0 md:mt-0 md:w-1/2 p-16">
                            <h1 className="sm:text-8xl font-bold mb-4 text-white">Contact Us...</h1>
                            <div className="text-left mt-4">
                                <p className="text-lg text-white">Looking for help? Tell us your requirements,</p>
                                <p className="text-lg text-white">and we'll link you with the right team.</p>

                                <div className="w-full mb-5 mt-5">
                                    <h4>Phone</h4>
                                    <a href="tel:+919752196529" className="text-white mt-1">
                                        <h6 className="number text-lg">+91 9752196529</h6>
                                    </a>
                                </div>

                                <div className="icons flex justify-start space-x-4">
                                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" className="w-8 h-8" /></a>
                                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" className="w-8 h-8" /></a>
                                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" className="w-8 h-8" /></a>
                                    <a href="mailto:your-email@example.com"><img src={gmail} alt="Gmail" className="w-8 h-8" /></a>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-1/2 text-right ">
                            <img src={picture} alt="Contact" className="w-full h-auto object-cover mt-7" />
                        </div>
                    </div>
                </div>
            </div> */}

            <ContactForm/>
            {/* <Form /> */}
            {/* <Map /> */}
            <Footer />
        </>
    );
}

export default Herosection;