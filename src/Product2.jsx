import React from "react";
import './Product2.css';
import CNavbar from "./CNavbar";
import Applications2 from "./Applications2";
import Footer from './Footer';
function Product2(){
    return (
        <>
            <CNavbar/>
            <div className="rifaul-grocery2">
                <div className="hollow-border-rectangle"></div>
                <div className="text-container">
                    <p className="bellway">BELLWAY</p>
                    <p className="grocery">GROCERY</p>
                </div>
            </div>
            <Applications2/>
            <Footer/>
        </>
    );
}

export default Product2;

