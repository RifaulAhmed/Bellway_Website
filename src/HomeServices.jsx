import React, { useState, useEffect } from "react";
import './HomeServices.css';

function HomeServices() {

    return (
        <>
            <div className="app-main-home">
                <h1 className="services">SERVICES</h1><br />
            </div>

            <div className="app-main4-home">
                <div className="container-home">
                    <div className="container-item-home">
                        <div className="content">
                            <h2>Artificial Intelligence</h2>
                            <span>AI / ML</span>
                        </div>
                    </div>
                    <div className="container-item-home">
                        <div className="content">
                            <h2>Mobile Application Development</h2>
                        </div>
                    </div>
                    <div className="container-item-home">
                        <div className="content">
                            <h2>Web Application Development</h2>
                        </div>
                    </div>
                    <div className="container-item-home">
                        <div className="content">
                            <h2>UI / UX Design</h2>
                        </div>
                    </div>
                    <div className="container-item-home">
                        <div className="content">
                            <h2>Digital Marketing</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeServices;
