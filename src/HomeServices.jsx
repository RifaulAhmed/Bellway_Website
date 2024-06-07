import React, { useState, useEffect } from "react";
import './HomeServices.css';

function HomeServices() {


    return (
        <>

            <div className="app-main3t">
                <h1 className="clients">SERVICES</h1><br/>
            </div>

            <div class="app-main4t">
                <div class="container">
                    <div class="container-item">
                        <div class="content">
                            <h2>Fernando Alonso</h2>
                            <span>UI & UX Designer</span>
                        </div>
                    </div>
                    <div class="container-item">
                        <div class="content">
                            <h2>Kimi Raikkonen</h2>
                            <span>CEO Expert</span>
                        </div>
                    </div>
                    <div class="container-item">
                        <div class="content">
                            <h2>Sebastian Vettel</h2>
                            <span>Web Designer</span>
                        </div>
                    </div>
                    <div class="container-item">
                        <div class="content">
                            <h2>Lewis Hamilton</h2>
                            <span>Marketing Coordinator</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeServices;
