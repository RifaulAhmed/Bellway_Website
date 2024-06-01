import React from 'react';
import Frame from './assets/logo.png';
import './Footer.css';

function Footer() {
    return (
        <>
        
        <div className='footer'>
            <div className='footer-section'>
                <img className='footer-logo' src={Frame} alt="Logo"/>
                <p className='footer-description'>Bellway Infotech combines passion and innovation to bring real to customers' business</p>
                <div className='social-icons'>
                    <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                    <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                </div>
            </div>

            <div className='footer-section'>
                <p style={{marginLeft:'-130px'}} className='footer-title'>Quick Links</p>
                <a href="#Home" className='footer-link'><i className="fas fa-home"></i> Home</a>
                <a href="#AboutUs" className='footer-link'><i className="fas fa-info-circle"></i> About Us</a>
                <a href="#Services" className='footer-link'><i className="fas fa-cogs"></i> Services</a>
                <a href="#Blogs" className='footer-link'><i className="fas fa-blog"></i> Blogs</a>
                <a href="#Testimonials" className='footer-link'><i className="fas fa-star"></i> Testimonials</a>
                <a href="#ContactUs" className='footer-link'><i className="fas fa-envelope"></i> Contact Us</a>
            </div>

            <div className='footer-section'>
                <p style={{marginLeft:'-220px'}}className='footer-title'>Services</p>
                <p style={{marginLeft:'-30px'}}className='footer-link'>Web Application Development</p>
                <p style={{marginLeft:'-30px'}} className='footer-link'>Mobile Application Development</p>
                <p style={{marginLeft:'-30px'}}className='footer-link'>UI/UX Designing</p>
                <p style={{marginLeft:'-30px'}}className='footer-link'>Digital Marketing</p>
                <p style={{marginLeft:'-30px'}}className='footer-link'>SaaS Development</p>
                <p style={{marginLeft:'-30px'}}className='footer-link'>MVP Development</p>
                <p style={{marginLeft:'-30px'}} className='footer-link'>WordPress Development</p>
            </div>

            <div className='footer-section'>
                <p style={{marginLeft:'-110px'}}className='footer-title'>Company Info</p>
                <p className='footer-link'>About Us</p>
                <p className='footer-link'>Careers</p>
                <p className='footer-link'>FAQ</p>
                <p className='footer-link'>Privacy Policy</p>
                <p className='footer-link'>Support</p>
                <p className='footer-link'>E-commerce Business</p>
            </div>

            <div className='footer-section'>
                <p style={{marginLeft:'-110px'}}className='footer-title'>Contact</p>
                <div className='contact-item'>
                    <i style={{marginTop: '-55px'}} className="fas fa-map-marker-alt"></i>
                    <p style={{textAlign:'left'}}>B-405 Anmol Space Baikunth Dham, Khajrana Main Road Indore 452018</p>
                </div>
                
                <div className='contact-item'>
                    <i style={{marginTop: '-15px'}} className="fas fa-phone"></i>
                    <p>+91-9981866409</p>
                </div>
                <div className='contact-item'>
                    <i style={{marginTop: '-10px'}} className="far fa-envelope"></i>
                    <p>info@bellwayinfotech.com</p> 
                </div>
            </div>

            <div className='dmca-rights' >
                <p>© 2024 All right reserved by Bellway <img style={{marginLeft:'25rem',marginTop:'-20px'}}src="https://www.bellwayinfotech.com/assets/uploads/media-uploader/dmca-logo1660313111.jpg" alt="Image"/> </p>
            </div>
        </div>
      
        </>
    );
}

export default Footer;







   
   