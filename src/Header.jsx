
import React from 'react';
import video2 from './assets/video1.mp4';

function Header() {
    return (
        <div className="w-screen h-[85vh] bg-black text-white overflow-hidden pt-12">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2">
                        <header className="mt-2 md:ml-8">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent animate-redFlow text-left">
                                <br />Custom App <br />
                                Development <br />Company
                            </h1><br />
                            <p className="mt-2 text-base sm:text-lg md:text-left text-left">
                                We have developed over 500+ Android and iOS-based mobile <br className="hidden md:inline" />applications for the world’s leading enterprises and startups.
                            </p>
                            <br />
                            <div className="mt-3">
                            <a href="/contact" class="relative inline-flex items-center justify-center p-5 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-3 border-red-500 rounded-full shadow-md group">
                                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
                                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span class="absolute flex items-center justify-center w-full h-full text-red-500 transition-all duration-300 transform group-hover:translate-x-full ease">Let's Talk</span>
                                <span class="relative invisible">Button Text</span>
                            </a></div>
                        </header>
                    </div>
                    <div className="md:w-1/2 text-center mt-5 md:mt-0">
                        <video
                            autoPlay
                            loop
                            muted
                            className="rounded-lg border-4 border-red-600 w-full max-w-full mt-2 md:mt-0">
                            <source src={video2} type="video/mp4"/>
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;

