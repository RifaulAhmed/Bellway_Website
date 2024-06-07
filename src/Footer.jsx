// import React from 'react';
// import Frame from './assets/logo.png';
// import './Footer.css';
// import { Link } from 'react-router-dom';
// function Footer() {
//     return (
//         <>

//             <div className='footer'>
//                 <div className='footer-section'>
//                     <img className='footer-logo' src={Frame} alt="Logo" />
//                     <p className='footer-description'>Bellway Infotech combines passion and innovation to bring real to customers' business</p>
//                     <div className='social-icons'>
//                         <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
//                         <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
//                         <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
//                         <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
//                     </div>
//                 </div>

//                 <div className='footer-section'>
//                     <p className='footer-title'>Quick Links</p>
//                     <Link to="#Home" className='footer-link'><i className="fas fa-home"></i> Home</Link>
//                     <Link to="#AboutUs" className='footer-link'><i className="fas fa-info-circle"></i> About Us</Link>
//                     <Link to="#Services" className='footer-link'><i className="fas fa-cogs"></i> Services</Link>
//                     <Link to="#Blogs" className='footer-link'><i className="fas fa-blog"></i> Blogs</Link>
//                     <Link to="#Testimonials" className='footer-link'><i className="fas fa-star"></i> Testimonials</Link>
//                     <Link to="#ContactUs" className='footer-link'><i className="fas fa-envelope"></i> Contact Us</Link>
//                 </div>

//                 <div className='footer-section'>
//                     <p className='footer-title'>Services</p>
//                     <p className='footer-link'>Web Application Development</p>
//                     <p className='footer-link'>Mobile Application Development</p>
//                     <p className='footer-link'>UI/UX Designing</p>
//                     <p className='footer-link'>Digital Marketing</p>
//                     <p className='footer-link'>SaaS Development</p>
//                     <p className='footer-link'>MVP Development</p>
//                     <p className='footer-link'>WordPress Development</p>
//                 </div>

//                 <div className='footer-section'>
//                     <p className='footer-title'>Company Info</p>
//                     <p className='footer-link'>About Us</p>
//                     <p className='footer-link'>Careers</p>
//                     <p className='footer-link'>FAQ</p>
//                     <p className='footer-link'>Privacy Policy</p>
//                     <p className='footer-link'>Support</p>
//                     <p className='footer-link'>E-commerce Business</p>
//                 </div>

//                 <div className='footer-section'>
//                     <p className='footer-title'>Contact</p>
//                     <div className='contact-item'>
//                         <i className="fas fa-map-marker-alt"></i>
//                         <p >B-405 Anmol Space Baikunth Dham, Khajrana Main Road Indore 452018</p>
//                     </div>

//                     <div className='contact-item'>
//                         <i className="fas fa-phone"></i>
//                         <p>+91-9981866409</p>
//                     </div>
//                     <div className='contact-item'>
//                         <i className="far fa-envelope"></i>
//                         <p>info@bellwayinfotech.com</p>
//                     </div>
//                 </div>

//                 <div className='dmca-rights' >
//                     <p>© 2024 All right reserved by Bellway <img src="https://www.bellwayinfotech.com/assets/uploads/media-uploader/dmca-logo1660313111.jpg" alt="Image" /></p>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Footer;




import React from 'react';
import Frame from './assets/logo.png';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="bg-black text-white py-8 px-2">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
                <div className="flex flex-col items-start col-span-1">
                    <img className="w-32 mb-4" src={Frame} alt="Logo" />
                    <p className="text-sm mb-4">Bellway Infotech combines passion and innovation to bring real to customers' business</p>
                    <div className="flex space-x-4">
                        <a href="https://www.instagram.com/" className="text-white hover:text-gray-400"><i className="fab fa-instagram"></i></a>
                        <a href="https://www.facebook.com/" className="text-white hover:text-gray-400"><i className="fab fa-facebook"></i></a>
                        <a href="https://twitter.com/" className="text-white hover:text-gray-400"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.linkedin.com/" className="text-white hover:text-gray-400"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>

                <div className="flex flex-col col-span-1 mb-16 lg:mb-16">
                    <p className="text-lg font-semibold mb-4">Quick Links</p>
                    <Link to="#Home" className="text-white hover:text-gray-400 mb-2"><i className="fas fa-home mr-2"></i> Home</Link>
                    <Link to="#AboutUs" className="text-white hover:text-gray-400 mb-2"><i className="fas fa-info-circle mr-2"></i> About Us</Link>
                    <Link to="#Services" className="text-white hover:text-gray-400 mb-2"><i className="fas fa-cogs mr-2"></i> Services</Link>
                    <Link to="#Blogs" className="text-white hover:text-gray-400 mb-2"><i className="fas fa-blog mr-2"></i> Blogs</Link>
                    <Link to="#Testimonials" className="text-white hover:text-gray-400 mb-2"><i className="fas fa-star mr-2"></i> Testimonials</Link>
                    <Link to="#ContactUs" className="text-white hover:text-gray-400 mb-2"><i className="fas fa-envelope mr-2"></i> Contact Us</Link>
                </div>

                <div className="flex flex-col col-span-1 mt-3">
                    <p className="text-lg font-semibold mb-4">Services</p>
                    <p className="text-white hover:text-gray-400 mb-2">Web Application Development</p>
                    <p className="text-white hover:text-gray-400 mb-2">Mobile Application Development</p>
                    <p className="text-white hover:text-gray-400 mb-2">UI/UX Designing</p>
                    <p className="text-white hover:text-gray-400 mb-2">Digital Marketing</p>
                    <p className="text-white hover:text-gray-400 mb-2">SaaS Development</p>
                    <p className="text-white hover:text-gray-400 mb-2">MVP Development</p>
                    <p className="text-white hover:text-gray-400 mb-2">WordPress Development</p>
                </div>

                <div className="flex flex-col col-span-1 mb-16 lg:mb-16">
                    <p className="text-lg font-semibold mb-4">Company Info</p>
                    <p className="text-white hover:text-gray-400 mb-2">About Us</p>
                    <p className="text-white hover:text-gray-400 mb-2">Careers</p>
                    <p className="text-white hover:text-gray-400 mb-2">FAQ</p>
                    <p className="text-white hover:text-gray-400 mb-2">Privacy Policy</p>
                    <p className="text-white hover:text-gray-400 mb-2">Support</p>
                    <p className="text-white hover:text-gray-400 mb-2">E-commerce Business</p>
                </div>

                <div className="flex flex-col col-span-1 mb-16 lg:mb-16">
                    <p className="text-lg font-semibold mb-4">Contact</p>
                    <div className="flex items-start mb-4">
                        <i className="fas fa-map-marker-alt mr-2"></i>
                        <p>B-405 Anmol Space Baikunth Dham, Khajrana Main Road Indore 452018</p>
                    </div>

                    <div className="flex items-start mb-4">
                        <i className="fas fa-phone mr-2"></i>
                        <p>+91-9981866409</p>
                    </div>
                    <div className="flex items-start mb-4">
                        <i className="far fa-envelope mr-2"></i>
                        <p>info@bellwayinfotech.com</p>
                    </div>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p>© 2024 All rights reserved by Bellway <img src="https://www.bellwayinfotech.com/assets/uploads/media-uploader/dmca-logo1660313111.jpg" alt="DMCA Logo" className="inline-block w-20 h-5 ml-1" /></p>
            </div>
        </div>
    );
}

export default Footer;
