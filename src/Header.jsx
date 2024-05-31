import React from 'react';
import './Header.css';
import video1 from './assets/video2.mp4';

function Header() {
    return (
        <div className="header-container">
            <div className="header-content container-fluid">
                <div className="row align-items-center">
                    <div className="col-md-6 text-center text-md-left">
                        <header className="header-text" >
                            <h1 style={{marginTop:'3rem'}}>Custom App <br/>
                                Development <br/>Company</h1>
                            <p className="text">We have developed over 500+ Android and iOS-based mobile <br/>applications for the world’s leading enterprises and startups.</p>
                            <button id='button' className="btn btn-danger"> Book Your Free Consultation</button>
                        </header>
                    </div>
                    <div className="col-md-6 text-center">
                        <video
                            autoPlay
                            loop
                            muted
                            className="rounded-lg w-100">
                            <source src={video1} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
