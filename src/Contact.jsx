import React from 'react';
import './Herosection.css';
import picture from './assets/c3.jpg';
import instagram from './assets/ig.png';
import twitter from './assets/twt.png';
import youtube from './assets/ytb.png';
import gmail from './assets/mail.png';
import CNavbar from './CNavbar';
import Touch from './Touch';
import Form from './Form';
import Map from './Map';
import Footer from './Footer';
function Herosection() {
    return (
    
        <>
            <CNavbar/>
            <div className='hero-main'>
                <div className='main-text'>
                    <p>Contact Us...</p>
                </div>
                <img className='image' src={picture} alt="" />
            </div>
            <div>
                <p className='sub-text'>Looking for help? Tell us your requirements,</p>
                <p className='sub-text2' >and we'll link you with the right team.</p>
            </div>
            <h4 className='phone'>Phone</h4>
            <a href=""><h6 className='number'>+91 9752196529</h6></a>
            <div className='icons'>
                <a href=""><img src={youtube} alt="" /></a>
                <a href=""><img src={twitter} alt="" /></a>
                <a href=""><img src={instagram} alt="" /></a>
                <a href=""><img src={gmail} alt="" /></a>
            </div>
            <Form/>
            <Touch/>
            <Map/>
            <Footer/>
        </>
    );
}

export default Herosection;
