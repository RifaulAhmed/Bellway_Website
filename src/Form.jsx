import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './Form.css';
import backg from './assets/b2.jpg';

function Login() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        date: '',
        time: '',
        message: '',
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        const modal = new window.bootstrap.Modal(document.getElementById('exampleModalLong'));
        modal.show();
    };

    return (
        <div className="login-containerTT">
            <img className="background-image" src={backg} alt="Background" />
            <div className="login-formTT">
                <h2>Get in Touch</h2>
                <form>
                    <div className="form-group">
                        <label htmlFor="username">Email</label>
                        <input style={{backgroundColor:'white'}} type="text" id="username" name="username" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input style={{backgroundColor:'white'}} type="password" id="password" name="password" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea style={{backgroundColor:'white'}}  id="message" name="message" rows="4" required></textarea>
                    </div>
                    <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center" }}>
                        <button className="form-button" type="submit">Submit</button>
                        <hr style={{ border: "1px solid hsl(29, 44%, 16%)", height: "3rem", padding: "0", margin: "0" }}></hr>
                        <button type="button" className="form-button-2" data-toggle="modal" data-target="#exampleModalLong">
                            Get a Call
                        </button>
                    </div>
                </form>
            </div>

            <div className="modal fade" id="exampleModalLong" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5  className="modal-title" id="exampleModalLongTitle">Schedule a Call</h5>
                            {/* <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button> */}
                        </div>
                        <div className="modal-body">
                            {!submitted ? (
                                <>
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input style={{backgroundColor:'white'}} 
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                placeholder="Name"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="phone">Phone</label>
                                            <input style={{backgroundColor:'white'}} 
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                placeholder="Phone"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="date">Date</label>
                                            <input style={{backgroundColor:'white'}} 
                                                type="date"
                                                id="date"
                                                name="date"
                                                value={formData.date}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="time">Time</label>
                                            <input style={{backgroundColor:'white'}} 
                                                type="time"
                                                id="time"
                                                name="time"
                                                value={formData.time}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="message">Message</label>
                                            <textarea style={{backgroundColor:'white'}} 
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Message"
                                                required
                                            ></textarea>
                                        </div>
                                        <div className='d-flex justify-content-around'>
                                            <button type="submit" className="form-button">Schedule</button>
                                            <button type="button" className="form-button-2" data-dismiss="modal">Close</button>
                                        </div>
                                    </form>
                                </>
                            ) : (
                                <div className="meeting-details">
                                    <h3>Call Scheduled Successfully</h3>
                                    <p  style={{color:'white'}}>Your Call is scheduled with the following details:</p>
                                    <p style={{color:'white'}} ><strong>Name:</strong> {formData.name}</p>
                                    <p style={{color:'white'}}><strong>Phone:</strong> {formData.phone}</p>
                                    <p style={{color:'white'}}><strong>Date:</strong> {formData.date}</p>
                                    <p style={{color:'white'}}><strong>Time:</strong> {formData.time}</p>
                                    <p style={{color:'white'}}><strong>Message:</strong> {formData.message}</p>
                                    <button  type="button" className="form-button-2" data-dismiss="modal">Close</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
