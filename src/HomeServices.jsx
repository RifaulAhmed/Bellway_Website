import React, { useState, useEffect } from "react";
import './HomeServices.css';

function HomeServices() {

    return (
        <>
            <div className="app-main-home">
                <h1 className="services">BELLWAY</h1><br/>
                <p className="s">S</p>
                <p className="e">E</p>
                <p className="r">C</p>
                <p className="v">I</p>
                <p className="i">V</p>
                <p className="c">R</p>
                <p className="e">E</p>
                <p className="s">S</p>
            </div>

            <div className="app-main4-home">
                <div className="container-home">
                    <div className="container-item-home">
                        <div className="content">
                            <h2>Artificial Intelligence</h2><br />
                            <span>Our AI specialists harness the power of cutting-edge technologies to develop intelligent systems that revolutionize processes and drive transformative outcomes across industries.</span>
                        </div>
                    </div>
                    <div className="container-item-home">
                        <div className="content">
                            <h2>Mobile Application Development</h2><br />
                            <span>Our mobile application development team combines innovation and expertise to create user-centric apps that seamlessly integrate with modern mobile platforms.</span>
                        </div>
                    </div>
                    <div className="container-item-home">
                        <div className="content">
                            <h2>Web Application Development</h2><br/>
                            <span>Our dedicated team of designers and web app developers specializes in creating seamless, browser-optimized applications.</span>
                        </div>
                    </div>
                    <div className="container-item-home">
                        <div className="content">
                            <h2>UI / UX Design</h2><br />
                            <span>Our UI/UX design team crafts intuitive and engaging user experiences, ensuring every interaction is both aesthetically pleasing and highly functional.</span>
                        </div>
                    </div>
                    <div className="container-item-home">
                        <div className="content">
                            <h2>Digital Marketing</h2><br />
                            <span>Our digital marketing experts leverage cutting-edge strategies to boost your online presence, drive engagement, and maximize conversions across all digital platforms.</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeServices;
