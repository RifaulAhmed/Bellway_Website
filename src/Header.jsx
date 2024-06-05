// import React from 'react';
// import './Header.css';
// import video1 from './assets/video2.mp4';

// function Header() {
//     return (
//         <div className="header-container">
//             <div className="header-content container-fluid">
//                 <div className="row align-items-center">
//                     <div className="col-md-6 text-center text-md-left">
//                         <header className="header-text" >
//                             <h1 style={{marginTop:'3rem'}}>Custom App <br/>
//                                 Development <br/>Company</h1>
//                             <p className="text">We have developed over 500+ Android and iOS-based mobile <br/>applications for the world’s leading enterprises and startups.</p>
//                             <button id='button' className="btn btn-danger"> Book Your Free Consultation</button>
//                         </header>
//                     </div>
//                     <div className="col-md-6 text-center">
//                         <video
//                             autoPlay
//                             loop
//                             muted
//                             className="rounded-lg w-100">
//                             <source src={video1} type="video/mp4" />
//                             Your browser does not support the video tag.
//                         </video> 
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Header;





import React from 'react';
import video1 from './assets/video2.mp4';

function Header() {
    return (
        <div className="w-screen h-[85vh] bg-black text-white overflow-hidden pt-8">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 text-center md:text-left">
                        <header className="mt-2 ml-8">
                            <h1 className="text-4xl md:text-5xl font-bold mt-2 bg-gradient-to-r from-red-600 to-white bg-clip-text text-transparent animate-redFlow text-left">
                                Custom App <br />
                                Development <br />Company
                            </h1>
                            <p className="mt-2 text-lg md:text-left text-left">
                                We have developed over 500+ Android and iOS-based mobile <br className="hidden md:inline" />applications for the world’s leading enterprises and startups.
                            </p>
                            <div className="text-left"> 
                                <button className="mt-2 mb-4 text-white bg-red-600 hover:bg-red-700 px-6 py-2 rounded-full animate-pulse transform transition-transform duration-300 hover:scale-105">
                                    Book Your Free Consultation
                                </button>
                            </div>
                        </header>
                    </div>
                    <div className="md:w-1/2 text-center mt-1 md:mt-0">
                        <video
                            autoPlay
                            loop
                            muted
                            className="rounded-lg border-4 border-red-600 w-full max-w-full mt-2 md:mt-0">
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
