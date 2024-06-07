import React, { useState, useEffect } from "react";
import './Applications2.css';
import burgir from './assets/grocery2.jpg';
import burgir2 from './assets/grocery.jpg';
import line1 from './assets/line.jpg';
import line2 from './assets/line2.jpg';

function Applications() {
    const [showingFirstSet, setShowingFirstSet] = useState(true);

    useEffect(() => {
        const arrowIcon = document.querySelector('.arrow-icon');

        const toggleSliderItems = () => {
            setShowingFirstSet(prevState => !prevState);
        };

        arrowIcon.addEventListener('click', toggleSliderItems);

        return () => {
            arrowIcon.removeEventListener('click', toggleSliderItems);
        };
    }, []);

    return (
        <>
            <div className="app-main">
                <div className="border-rectangle"></div>
                <div>
                    <img className="burgir" src={burgir} alt="" />
                </div>
                <div>
                    <img className="line1" src={line1} alt="" />
                </div>
                <div>
                    <img className="line2" src={line2} alt="" />
                </div>
                <div className="glass-card">
                    <h2>Bellway Grocery</h2>
                    <hr />
                    <p>
                        Tired after a long day? Craving your favourite cuisine? Don't worry, Delicious Meals Delivery App is here to satisfy your cravings and make mealtime a delightful experience. Discover the amazing ways you can use our app to enjoy scrumptious meals delivered right to your doorstep.
                        <br /><br />
                        Open the app and explore a diverse range of restaurants and cuisines in your area. From Italian to Thai, burgers to sushi, our app offers an array of options to please every palate.
                    </p>
                </div>
            </div>

            <div className="app-main2">
                <div className="glass-card2">
                    <p className="p1">WHAT IS,</p>
                    <p className="p2"> Bellway Grocery <hr /></p>
                    <br />
                    <p className="p3">
                        In today's fast-paced world, finding time to prepare a nutritious and mouthwatering meal can be <br />a challenge. That's where Delicious Meal Delivery Service comes to the rescue! Our service is <br />designed to provide you with a convenient and flavorful dining experience, offering a wide variety <br /> of delectable dishes delivered straight to your doorstep.
                        <br /><br />
                        Have specific dietary requirements or preferences? Customize your order accordingly. Whether <br />it's vegan, gluten-free, or extra spicy, we aim to cater to your unique needs.
                        <br /><br />
                        Planning a family dinner or a meal with friends? The app makes it easy to place large orders, <br /> ensuring everyone gets their favourite dish.
                    </p>
                    <div>
                        <img className="burgir2" src={burgir2} alt="" />
                    </div>
                </div>
            </div>

            <div className="app-main3">
                <h1 className="clients">CLIENTS</h1><br/>
                <p className="r">R</p>
                <p className="e">E</p>
                <p className="v">V</p>
                <p className="i">I</p>
                <p className="e2">E</p>
                <p className="w">W</p>
                <p className="s">S</p>
            </div>

            <div className="app-main4">
                <div className="slider-container">
                    <div className={`slider-item ${!showingFirstSet && 'hidden'}`}>
                        <div className="content">
                            <h2>Fernando Alonso</h2>
                            <span>UI & UX Designer</span>
                        </div>
                    </div>
                    <div className={`slider-item ${!showingFirstSet && 'hidden'}`}>
                        <div className="content">
                            <h2>Kimi Raikkonen</h2>
                            <span>CEO Expert</span>
                        </div>
                    </div>
                    <div className={`slider-item ${!showingFirstSet && 'hidden'}`}>
                        <div className="content">
                            <h2>Sebastian Vettel</h2>
                            <span>Web Designer</span>
                        </div>
                    </div>
                    <div className={`slider-item ${!showingFirstSet && 'hidden'}`}>
                        <div className="content">
                            <h2>Lewis Hamilton</h2>
                            <span>Marketing Coordinator</span>
                        </div>
                    </div>
                    <div className={`slider-item ${showingFirstSet && 'hidden'}`}>
                        <div className="content">
                            <h2>Driver 5</h2>
                            <span>Role</span>
                        </div>
                    </div>
                    <div className={`slider-item ${showingFirstSet && 'hidden'}`}>
                        <div className="content">
                            <h2>Driver 6</h2>
                            <span>Role</span>
                        </div>
                    </div>
                    <div className={`slider-item ${showingFirstSet && 'hidden'}`}>
                        <div className="content">
                            <h2>Driver 7</h2>
                            <span>Role</span>
                        </div>
                    </div>
                    <div className={`slider-item ${showingFirstSet && 'hidden'}`}>
                        <div className="content">
                            <h2>Driver 8</h2>
                            <span>Role</span>
                        </div>
                    </div>
                    <div className="arrow-icon">
                        <span>&#9654;</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Applications;
