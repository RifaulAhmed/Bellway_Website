import React from "react";
import './HomeServices.css';

function HomeServices() {
    return (
        <>
            {/* <div className="app-main-home">
                <h1 className="services">BELLWAY</h1><br/>
                <p className="s">S</p>
                <p className="e">E</p>
                <p className="c">C</p>
                <p className="i">I</p>
                <p className="v">V</p>
                <p className="r">R</p>
                <p className="e2">E</p>
                <p className="s2">S</p>
            </div> */}

            <div className="app-main-home relative bg-antiquewhite h-screen flex items-center justify-start">
                <div className="ml-[-12rem] flex items-center">
                    <h1 className="transform -rotate-90 text-6xl md:text-8xl lg:text-9xl text-black font-bold">BELLWAY</h1>
                    <div className="flex flex-col ml-[-14rem] items-center ">
                        <p className="transform -rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">S</p>
                        <p className="transform -rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">E</p>
                        <p className="transform -rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">C</p>
                        <p className="transform -rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">I</p>
                        <p className="transform -rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">V</p>
                        <p className="transform -rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">R</p>
                        <p className="transform -rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">E</p>
                        <p className="transform -rotate-90 text-2xl md:text-4xl lg:text-5xl font-medium text-black">S</p>
                    </div>
                </div>
            </div>

            <div className="app-main4-home">
                <div className="container-home">
                    <div className="container-item-home">
                        <div className="heading">Artificial Intelligence</div>
                        <div className="content">
                            <h2>Artificial Intelligence</h2><br />
                            <span>Our AI specialists harness the power of cutting-edge technologies to develop intelligent systems that revolutionize processes and drive transformative outcomes across industries.</span>
                        </div>
                    </div>
                    <div className="container-item-home">
                        <div className="heading mt-3">Mobile Application <br /> Development</div>
                        <div className="content">
                            <h2>Mobile Application Development</h2><br />
                            <span>Our mobile application development team combines innovation and expertise to create user-centric apps that seamlessly integrate with modern mobile platforms.</span>
                        </div>
                    </div>
                    <div className="container-item-home">
                        <div className="heading mt-3">Web Application <br /> Development</div>
                        <div className="content">
                            <h2>Web Application Development</h2><br />
                            <span>Our dedicated team of designers and web app developers specializes in creating seamless, browser-optimized applications.</span>
                        </div>
                    </div>
                    <div className="container-item-home">
                        <div className="heading">UI / UX Design</div>
                        <div className="content">
                            <h2>UI / UX Design</h2><br />
                            <span>Our UI/UX design team crafts intuitive and engaging user experiences, ensuring every interaction is both aesthetically pleasing and highly functional.</span>
                        </div>
                    </div>
                    <div className="container-item-home">
                        <div className="heading">Digital Marketing</div>
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


