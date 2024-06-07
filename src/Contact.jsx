import React from 'react';
// import './Herosection.css';
import picture from './assets/c3.jpg';
import instagram from './assets/ig.png';
import twitter from './assets/twt.png';
import youtube from './assets/ytb.png';
import gmail from './assets/mail.png';
import CNavbar from './CNavbar';
// import Touch from './Touch';
import Form from './Form';
import Map from './Map';
import Footer from './Footer';
function Herosection() {
    return (

        <>
            <CNavbar />
            <div className="bg-black text-white flex flex-col items-start px-4">
                <div className="hero-main flex flex-col md:flex-row items-center justify-between w-full max-w-6xl">
                    <div className="main-text ml-10 mb-8 mt-12 md:mb-0 md:mt-0 md:w-1/2">
                        <p className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-white">Contact Us...</p>
                        <div className="text-left mt-4">
                            <p className="sub-text text-lg text-white">Looking for help? Tell us your requirements,</p>
                            <p className="sub-text2 text-lg text-white">and we'll link you with the right team.</p>
                        </div>
                    </div>
                    <img className="w-full md:w-1/2 h-full object-cover" src={picture} alt="Contact" />
                </div>


                <div className="w-full mb-5">
                    <h4 className="ml-9">Phone</h4>
                    <a href="tel:+919752196529" className="text-white mt-1">
                        <h6 className="number text-lg ml-8">+91 9752196529</h6>
                    </a>
                </div>

                <div className="icons flex justify-center space-x-4 ml-8">
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer"><img src={youtube} alt="YouTube" className="w-8 h-8" /></a>
                    <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="Twitter" className="w-8 h-8" /></a>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" className="w-8 h-8" /></a>
                    <a href="mailto:your-email@example.com"><img src={gmail} alt="Gmail" className="w-8 h-8" /></a>
                </div>
            </div>

            <Form />
            {/* <Touch/> */}
            <Map />
            <Footer />
        </>
    );
}

export default Herosection;
