import React from 'react'
import './Forms.css'
import { useState } from 'react';
import CNavbar from '../../CNavbar';
import Footer from '../../Footer';

const ExperienceJoineeForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    currentCTC: '',
    noticePeriod: '',
    experience: '',
    resume: null,
    role: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send form data to a server)
    console.log('Form Data:', formData);
    alert('Application submitted successfully!');
  };

  return (
    <>
    <CNavbar/>
       <div className="bg mt-20">
   
      <div className="form">
    <div className="form-container">
      <h2 className='head'>Join with your Experience</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"Join Us with Your Experience
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="location">Current Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="currentCTC">Current CTC</label>
          <input
            type="text"
            id="currentCTC"
            name="currentCTC"
            value={formData.currentCTC}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="noticePeriod">Notice Period</label>
          <input
            type="text"
            id="noticePeriod"
            name="noticePeriod"
            value={formData.noticePeriod}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Total Experience (in years)</label>
          <input
            type="number"
            id="experience"
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="resume">Resume</label>
          <input
            type="file"
            id="resume"
            name="resume"
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
            required
          />
        </div><br/>

        <div className="form-group">
          {/* <label htmlFor="role">Preferred Role</label> */}
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
          >
            <option value="">Select Role</option>
            <option value="react">React Developer</option>
            <option value="laravel">Laravel Developer</option>
            <option value="node">Node.js Developer</option>
          </select>
        </div><br/>

       <div className='cx'>
       <button className='buttonS' type="submit">Submit Application</button>
        </div> 
      </form>
    </div>
    </div>

    </div>
    <Footer/>
    </>
  );
}

export default ExperienceJoineeForm






