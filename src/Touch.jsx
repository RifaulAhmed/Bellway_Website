import React from "react";
import './Touch.css';
import line from './assets/line.jpg';
import line2 from './assets/line2.jpg';
import mark from './assets/mark.png';
import mail2 from './assets/mail2.png';
import whatsapp from './assets/whatsapp.png';

function Touch() {
    return(
        <div className="t-main">
            <h1  className="text-main" >Reach Us Here</h1>
            <img className="line" src={line} alt=""/>
            <h5 className="text-sub" >Let's discuss your specific requirements and how we <br />can assist you further.</h5>

            <div className="address">
            <img style={{marginLeft:'20rem'}} src={mark} alt=""/>
                <h4>Address</h4>
                <h6>405 B, Anmol Space <br /> Baikundham Indore</h6>
            </div>

            
            <div>
            <img className="line-img" src={line2} alt="" />
            <h4 className="email" >Email</h4>
            <h6 className="text-mail" >rifaul@gmail.com</h6>
            </div>
            <img className="mail2" src={mail2} alt="" />

            <div>
            <img className="line-img-2" src={line2} alt="" />
            <img className="whatsapp-img" src={whatsapp} alt="" />
            <h4 className="whatsapp" >WhatsApp</h4>
            <h6 className="w-number" >+91-9752196529</h6>
            </div>
        </div>
    );
}

export default Touch;
