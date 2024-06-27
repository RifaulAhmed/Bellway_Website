import React, { useState } from 'react';
import map from './assets/conact-page-map.jpg';
import CNavbar from './CNavbar';
import Footer from './Footer';
import { Helmet } from "react-helmet";
import vector from './assets/Vector.png'
import ReCAPTCHA from 'react-google-recaptcha';
//6Lc-ZgIqAAAAAJJnEsBoxdgWRYPsL0v2EaOvjM5D

function ContactForm() {

    //ReCAPTCHA validations
    const[capVal, setCapVal] = useState(null)

    // Handler for input change in contact number field
    const handleContactNumberChange = (event) => {
        const input = event.target.value;

        // Validate if input is numeric and limit to 10 digits
        if (/^\d{0,10}$/.test(input)) {
            setContactNumber(input); // Update the state if input is valid
        }
        // You can add further validation or feedback if needed
    };
    // const [callContactNumber, setCallContactNumber] = useState('');
    const [countryCode, setCountryCode] = useState('+1'); // Initial country code

    const handleCountryCodeChange = (event) => {
        setCountryCode(event.target.value);
    };

    const handleSubmit2 = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log('Phone Number:', countryCode + callContactNumber);
        // Reset the form fields after submission
        setCallContactNumber('');
        setCountryCode('+1'); // Reset to initial country code
    };
    // State for the contact form
    const [selectedServices, setSelectedServices] = useState([]);
    const [FullName, setFirstName] = useState('');
    const [City, setLastName] = useState('');
    const [Email, setEmail] = useState('');
    const [ContactNumber, setContactNumber] = useState('');
    const [Requirements, setRequirements] = useState('');

    // State for the call form
    const [callFirstName, setCallFirstName] = useState('');
    const [callLastName, setCallLastName] = useState('');
    const [callContactNumber, setCallContactNumber] = useState('');
    const [callDate, setCallDate] = useState('');
    const [callTime, setCallTime] = useState('');
    const [callMessage, setCallMessage] = useState('');

    const [showCallForm, setShowCallForm] = useState(false);
    const handelContactsale = () => {
        setTimeout(() => {
            console.log("Hello, World!");
        }, 2000)
    }
    const handleCheckboxChange = (event) => {
        const service = event.target.value;
        if (selectedServices.includes(service)) {
            setSelectedServices(selectedServices.filter((item) => item !== service));
        } else {
            setSelectedServices([...selectedServices, service]);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', {
            FullName,
            City,
            Email,
            ContactNumber,
            selectedServices,
            Requirements,
        });
    };

    const handleCallFormSubmit = (event) => {
        event.preventDefault();
        console.log('Call form submitted:', {
            firstName: callFirstName,
            lastName: callLastName,
            contactNumber: callContactNumber,
            callDate,
            callTime,
            callMessage,
        });
        setShowCallForm(false);
    };
    return (
        <>
            <Helmet>
                <title>BELLWAY INFOTECH - Contact Us</title>
                <meta name="description" content="For any query or inquiry regarding our Web & App Development or their uses, please feel free to contact us directly. As we are just mail far from you. Contact us at info@bellwayinfotech.com" />

            </Helmet>
            <CNavbar />
            <div className="flex h-full mt-16">
                <div className="w-1/2 bg-black text-white p-10 rounded-lg shadow-md">
                    <h1 className="text-5xl font-bold mt-24">Contact our sales team</h1>
                    <p className="mb-10">
                        We're happy to answer questions and get you acquainted with Slack.
                    </p>
                    <ul className="mb-8">
                        <li className="flex items-center mb-2">
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            Learn how to increase team productivity
                        </li>
                        <li className="flex items-center mb-2">
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            Get pricing information
                        </li>
                        <li className="flex items-center mb-2">
                            <svg
                                className="w-4 h-4 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            Explore use cases for your team
                        </li>
                    </ul>
                    <div className="flex justify-between items-center mb-4">
                        For technical issues and product questions, please visit our Help Centre.
                    </div>
                    <hr style={{ borderColor: 'red', borderWidth: '2px', fontWeight: 'bold', marginTop: '15px' }} /> <br />
                    <div className="flex flex-col justify-end gap-4">
                        <p className="text-lg font-normal">Call us on</p>
                        <p className="text-3xl font-bold">+91-9981866409</p>
                        <p className="text-lg font-normal">Mail us</p>
                        <p className="text-base font-bold">info@bellwayinfotech.com</p>
                        <p className="text-base font-bold">hr@bellwayinfotech.com</p>
                        <p className="text-lg font-medium">Follow us</p>
                        <div className="flex gap-4">

                            <a href="https://www.facebook.com/bellwayinfotechh/"><svg width={"1.8rem"} className='hover:bg-red-500 hover:text-black hover:rounded-md trasition-all duration-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path></svg></a>

                            <svg width={"1.4rem"} className='hover:bg-red-500 hover:text-black hover:rounded-md trasition-all duration-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z"></path></svg>

                            <a href="https://www.instagram.com/bellwayinfo/"><svg width={"1.8rem"} className='hover:bg-red-500 hover:text-black hover:rounded-md trasition-all duration-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M12.001 9C10.3436 9 9.00098 10.3431 9.00098 12C9.00098 13.6573 10.3441 15 12.001 15C13.6583 15 15.001 13.6569 15.001 12C15.001 10.3427 13.6579 9 12.001 9ZM12.001 7C14.7614 7 17.001 9.2371 17.001 12C17.001 14.7605 14.7639 17 12.001 17C9.24051 17 7.00098 14.7629 7.00098 12C7.00098 9.23953 9.23808 7 12.001 7ZM18.501 6.74915C18.501 7.43926 17.9402 7.99917 17.251 7.99917C16.5609 7.99917 16.001 7.4384 16.001 6.74915C16.001 6.0599 16.5617 5.5 17.251 5.5C17.9393 5.49913 18.501 6.0599 18.501 6.74915ZM12.001 4C9.5265 4 9.12318 4.00655 7.97227 4.0578C7.18815 4.09461 6.66253 4.20007 6.17416 4.38967C5.74016 4.55799 5.42709 4.75898 5.09352 5.09255C4.75867 5.4274 4.55804 5.73963 4.3904 6.17383C4.20036 6.66332 4.09493 7.18811 4.05878 7.97115C4.00703 9.0752 4.00098 9.46105 4.00098 12C4.00098 14.4745 4.00753 14.8778 4.05877 16.0286C4.0956 16.8124 4.2012 17.3388 4.39034 17.826C4.5591 18.2606 4.7605 18.5744 5.09246 18.9064C5.42863 19.2421 5.74179 19.4434 6.17187 19.6094C6.66619 19.8005 7.19148 19.9061 7.97212 19.9422C9.07618 19.9939 9.46203 20 12.001 20C14.4755 20 14.8788 19.9934 16.0296 19.9422C16.8117 19.9055 17.3385 19.7996 17.827 19.6106C18.2604 19.4423 18.5752 19.2402 18.9074 18.9085C19.2436 18.5718 19.4445 18.2594 19.6107 17.8283C19.8013 17.3358 19.9071 16.8098 19.9432 16.0289C19.9949 14.9248 20.001 14.5389 20.001 12C20.001 9.52552 19.9944 9.12221 19.9432 7.97137C19.9064 7.18906 19.8005 6.66149 19.6113 6.17318C19.4434 5.74038 19.2417 5.42635 18.9084 5.09255C18.573 4.75715 18.2616 4.55693 17.8271 4.38942C17.338 4.19954 16.8124 4.09396 16.0298 4.05781C14.9258 4.00605 14.5399 4 12.001 4ZM12.001 2C14.7176 2 15.0568 2.01 16.1235 2.06C17.1876 2.10917 17.9135 2.2775 18.551 2.525C19.2101 2.77917 19.7668 3.1225 20.3226 3.67833C20.8776 4.23417 21.221 4.7925 21.476 5.45C21.7226 6.08667 21.891 6.81333 21.941 7.8775C21.9885 8.94417 22.001 9.28333 22.001 12C22.001 14.7167 21.991 15.0558 21.941 16.1225C21.8918 17.1867 21.7226 17.9125 21.476 18.55C21.2218 19.2092 20.8776 19.7658 20.3226 20.3217C19.7668 20.8767 19.2076 21.22 18.551 21.475C17.9135 21.7217 17.1876 21.89 16.1235 21.94C15.0568 21.9875 14.7176 22 12.001 22C9.28431 22 8.94514 21.99 7.87848 21.94C6.81431 21.8908 6.08931 21.7217 5.45098 21.475C4.79264 21.2208 4.23514 20.8767 3.67931 20.3217C3.12348 19.7658 2.78098 19.2067 2.52598 18.55C2.27848 17.9125 2.11098 17.1867 2.06098 16.1225C2.01348 15.0558 2.00098 14.7167 2.00098 12C2.00098 9.28333 2.01098 8.94417 2.06098 7.8775C2.11014 6.8125 2.27848 6.0875 2.52598 5.45C2.78014 4.79167 3.12348 4.23417 3.67931 3.67833C4.23514 3.1225 4.79348 2.78 5.45098 2.525C6.08848 2.2775 6.81348 2.11 7.87848 2.06C8.94514 2.0125 9.28431 2 12.001 2Z"></path></svg></a>

                            <a href="https://www.linkedin.com/company/bellwayinfotech"><svg width={"1.8rem"} className='hover:bg-red-500 hover:text-black hover:rounded-md trasition-all duration-600' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(255,255,255,1)"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></a>
                        </div>
                    </div>

                    <hr style={{ borderColor: 'red', borderWidth: '2px', fontWeight: 'bold', marginTop: '15px' }} /> <br /><br />

                    <div className=''>
                        <p className='text-3xl font-bold'>join Us !</p><br />
                        <p>Be a part of our in-house team and play your part in uplifting the corporate ecosystem by making it easier for brands and talents to connect with each other.</p><br />
                        <a href="/career-with-us" class="relative inline-flex items-center justify-center p-2 px-6 py-1 overflow-hidden font-medium text-red-600 transition duration-300 ease-out border-2 border-red-600 rounded-full shadow-md group ">
                            <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span class="absolute flex items-center justify-center w-full h-full text-red-600 transition-all duration-300 transform group-hover:translate-x-full ease">Join Now</span>
                            <span class="relative invisible">Join Now</span>
                        </a>
                    </div>
                </div>

                <div className="w-1/2 bg-white p-10 rounded-lg shadow-2xl">
                    <div className='flex justify-end'>
                        {showCallForm ? (
                            <button
                                className="relative inline-flex items-center justify-center p-3 px-6 py-1 overflow-hidden font-medium text-red transition duration-300 ease-out border-2 border-red-600 rounded-full shadow-md group"
                                onClick={() => setShowCallForm(false)}
                            >
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l-7 7m0 0l7 7m-7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-red-600 transition-all duration-300 transform group-hover:translate-x-full ease">Back</span>
                                <span className="relative invisible">Back</span>
                            </button>
                        ) : (
                            <button
                                className="relative inline-flex items-center justify-center p-3 px-6 py-1 overflow-hidden font-medium text-red transition duration-300 ease-out border-2 border-red-600 rounded-full shadow-md group"
                                onClick={() => setShowCallForm(true)}
                            >
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-600 group-hover:translate-x-0 ease">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-red-600 transition-all duration-300 transform group-hover:translate-x-full ease">Get a call</span>
                                <span className="relative invisible">Get a call</span>
                            </button>
                        )}
                    </div>

                    <h1 className="text-black text-3xl font-bold text-center mt-3">{showCallForm ? 'Schedule your call' : 'Ready to serve you first!'}</h1><br/><hr/>
                    {!showCallForm ? (
                        <form action='https://api.sheetmonkey.io/form/4cLQKKRrpSS5GpPLwYzcLz' method='post'>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2"
                                        htmlFor="first-name"
                                    >
                                        Full Name *
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        id="first-name"
                                        type="text"
                                        value={FullName}
                                        onChange={(event) => setFirstName(event.target.value)}
                                        required
                                        name='FullName'
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2"
                                        htmlFor="last-name"
                                    >
                                        City *
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        id="last-name"
                                        type="text"
                                        value={City}
                                        onChange={(event) => setLastName(event.target.value)}
                                        required
                                        name='City'
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2"
                                        htmlFor="email"
                                    >
                                        email address *
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        id="email"
                                        type="email"
                                        value={Email}
                                        onChange={(event) => setEmail(event.target.value)}
                                        required
                                        name='Email'
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2"
                                        htmlFor="contact-number"
                                    >
                                        Contact number *
                                    </label>
                                    <div

                                        className="appearance-none block w-full flex  bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        id="contact-number"
                                        type="text" // Changed type to text for custom validation
                                        value={ContactNumber}
                                        onChange={handleContactNumberChange}
                                        maxLength={10} // Limit the maximum length of input to 10 characters
                                        required
                                        name='ContactNumber'
                                    >
                                        <select class="w-1/4 bg-gray-200 h-full">
                                            <option>+91</option>
                                            <option>+1</option>
                                            <option>+44</option>
                                            <option>+69</option>

                                        </select>
                                        <input class="w-full bg-gray-200 border-0 focus:outline-none" type="number"
                                            value={ContactNumber}
                                            onChange={handleContactNumberChange}
                                            maxLength={10}
                                            required
                                            name='ContactNumber'
                                        />
                                    </div>
                                </div>
                            </div>


                            <h1 className="text-black text-xl font-bold text-center">Service of Interest</h1><br />
                            <div className="mx-auto px-4">
                                <h4 className="text-1xl font-bold mb-4">Which services are you looking for?*</h4>
                                <hr style={{ borderColor: 'red', borderWidth: '2px', fontWeight: 'bold' }} />
                                <div className="grid grid-cols-3">
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            value="Web Design & Development"
                                            className="w-6 h-6 text-red-600 border-gray-300 rounded focus:ring-red-500"
                                            onChange={handleCheckboxChange}
                                            name='Services-Of-Interest'
                                        />
                                        <label className="ml-2 text-gray-700" htmlFor="web-design">
                                            Web Design & Development
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            value="Graphic Design"
                                            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                                            onChange={handleCheckboxChange}
                                            name='Services-Of-Interest'
                                        />
                                        <label className="ml-2 text-gray-700 mt-1" htmlFor="graphic-design">
                                            UI/UX Design
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            value="Mobile App Development"
                                            className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500"
                                            onChange={handleCheckboxChange}
                                            name='Services-Of-Interest'
                                        />
                                        <label className="ml-2 text-gray-700" htmlFor="mobile-app-development">
                                            Mobile App Development
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            value="eCommerce and CMS"
                                            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                                            onChange={handleCheckboxChange}
                                            name='Services-Of-Interest'
                                        />
                                        <label className="ml-2 text-gray-700" htmlFor="ecommerce">
                                            Artificial Intelligence
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            value="Custom Software Development"
                                            className="w-6 h-6 text-red-600 border-gray-300 rounded focus:ring-red-500 "
                                            onChange={handleCheckboxChange}
                                            name='Services-Of-Interest'
                                        />
                                        <label className="ml-2 text-gray-700" htmlFor="custom-software">
                                            Custom Software Development
                                        </label>
                                    </div>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            value="SEO"
                                            className="w-4 h-4 text-red-600 border-gray-300 rounded focus:ring-red-500"
                                            onChange={handleCheckboxChange}
                                            name='Services-Of-Interest'
                                        />
                                        <label className="ml-2 text-gray-700 mt-1" htmlFor="seo">
                                            SEO
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className="text-gray-700 mt-6">
                                <h2 className="font-bold text-lg mr-32">
                                    Share your requirements*
                                    <span className="text-gray-500 text-sm"></span>
                                </h2>
                                <hr style={{ borderColor: 'red', borderWidth: '2px', fontWeight: 'bold', marginTop: '15px' }} />
                                <br />
                                <textarea
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-md"
                                    rows="6"
                                    // value={requirements}
                                    // onChange={(event) => setRequirements(event.target.value)}
                                    required
                                    // minLength={250}
                                    placeholder="Please share your requirements..."
                                    name='Your-Requirements'
                                />
                            </div>
                            <br />
                            <ReCAPTCHA
                            sitekey='6Lc-ZgIqAAAAAJJnEsBoxdgWRYPsL0v2EaOvjM5D'
                            onChange={(val) => setCapVal(val)}
                            />
                            <br />
                            <div className="flex justify-center">
                                <button disabled={!capVal}
                                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                    type="submit" value="Submit"
                                    onClick={() => { handelContactsale() }}
                                >
                                    Contact Sales
                                </button>
                            </div>
                        </form>
                        
                    ) : (

                        <form action='https://api.sheetmonkey.io/form/fgdGfEcdRL25CCWcewUzfz' method='post'>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2"
                                        htmlFor="first-name-call"
                                    >
                                        Name *
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        id="first-name-call"
                                        type="text"
                                        value={callFirstName}
                                        onChange={(event) => setCallFirstName(event.target.value)}
                                        required
                                        name='Name'
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2"
                                        htmlFor="last-name-call"
                                    >
                                        City*
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        id="last-name-call"
                                        type="text"
                                        value={callLastName}
                                        onChange={(event) => setCallLastName(event.target.value)}
                                        required
                                        name='City'
                                    />
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2"
                                        htmlFor="contact-number-call"
                                    >
                                        Phone Number *
                                    </label>
                                    <div className="flex gap-4">
                                        {/* Country code dropdown */}
                                        <select
                                            className="bg-gray-200 w-1/4 text-gray-700 border border-gray-200 rounded-l  px-1 leading-tight h-14 focus:outline-none focus:bg-white rounded-lg
                                                "
                                        >
                                            <option value="+1">+11 (USA)</option>
                                            <option value="+91">+91 (India)</option>
                                            <option value="+91">+01 (USA)</option>
                                            <option value="+91">+08 (UK)</option>
                                            <option value="+91">+32 (Iran)</option>
                                            {/* Add more options for different country codes */}
                                        </select>
                                        {/* Phone number input */}
                                        <input
                                            className="appearance-none block w-ful bg-gray-200 text-gray-700 border border-gray-200 rounded-r py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                            id="contact-number-call"
                                            type="text"
                                            value={callContactNumber}
                                            onChange={(event) => setCallContactNumber(event.target.value)}
                                            required
                                            name='Phone-Number'
                                            placeholder="Enter your phone number"
                                            maxLength={10}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                    <label
                                        className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2"
                                        htmlFor="call-date"
                                    >
                                        Date *
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        id="call-date"
                                        type="date"
                                        value={callDate}
                                        onChange={(event) => setCallDate(event.target.value)}
                                        required
                                        name='Date'
                                    />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2"
                                        htmlFor="call-time"
                                    >
                                        Time *
                                    </label>
                                    <input
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        id="call-time"
                                        type="time"
                                        value={callTime}
                                        onChange={(event) => setCallTime(event.target.value)}
                                        required
                                        name='Time'
                                    />
                                </div>
                            </div>
                            <div className="flex flex-wrap -mx-3 mb-6">
                                <div className="w-full px-3">
                                    <label
                                        className="block uppercase tracking-wide text-gray-900 text-sm font-bold mb-2"
                                        htmlFor="call-message"
                                    >
                                        Message *
                                    </label>
                                    <textarea
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white"
                                        id="call-message"
                                        rows="4"
                                        value={callMessage}
                                        onChange={(event) => setCallMessage(event.target.value)}
                                        required
                                        name='Message'
                                    />
                                </div>
                            </div>
                            <ReCAPTCHA
                            sitekey='6Lc-ZgIqAAAAAJJnEsBoxdgWRYPsL0v2EaOvjM5D'
                            onChange={(val) => setCapVal(val)}
                            />
                            <br />
                            <div className="flex justify-center">
                                <button disabled = {!capVal}
                                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Request a call
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>

            <div className="relative h-full">
                <h1 className="text-2xl font-bold text-center mt-8 text-black">Locate us here!</h1><br />
                <img src={map} alt="map" className="w-full h-full" />
                <div className="absolute bottom-80 right-24 w-96 px-3 py-1 bg-white rounded-lg shadow-md">
                    <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full flex items-center justify-center">
                            <img src={vector} alt="" />
                        </div>
                        <div className="ml-5">
                            <h3 className="text-lg font-bold">
                                <a
                                    href="https://maps.app.goo.gl/bvf8pUpPLTWtJ3T39"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-800 hover:underline"
                                >
                                    B405, Anmol Spaces, Baikunth Dham
                                </a>
                            </h3>
                            <p className="text-gray-600">Indore (M.P.) India</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContactForm