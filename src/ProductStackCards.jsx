import React, { useState } from 'react';
import ReactCardSlider from 'react-card-slider-component';
import './ProductStackCards.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import laravel from './assets/register2.jpg';
import flutter from './assets/dashboard.jpg';
import js from './assets/dispa.jpg';
import php from './assets/categories.jpg';
import magneto from './assets/attribute.jpg';
import react from './assets/addon.jpg';
import react2 from './assets/detials.jpg';
import react3 from './assets/transaction.jpg';
import vue from './assets/report.jpg';
import python from './assets/order.jpg';
import python2 from './assets/profile.jpg';
import python3 from './assets/grocery5.jpg';
import python4 from './assets/menu.jpg';
import python5 from './assets/cart.jpg';
import python6 from './assets/checkout.jpg';
import python7 from './assets/history1.jpg';
import net from './assets/net.png';
import android from './assets/business.jpg';
import crm from './assets/customer.jpg';
import apple from './assets/product3.jpg';
import hello from './assets/delivery.jpg';
import flutter1 from './assets/notification.jpg';
import flutter2 from './assets/search.jpg';
import js2 from './assets/accept.jpg';
import js3 from './assets/live2.jpg';
import php2 from './assets/update.jpg';
import php3 from './assets/alert.jpg';
import php5 from './assets/new.jpg';
import magneto2 from './assets/history.jpg';
import magneto3 from './assets/profile2.jpg';
const ProductStackCards = () => {
    const [selectedButton1, setSelectedButton1] = useState(1);
    const [selectedButton2, setSelectedButton2] = useState(1);
    const [selectedButton3, setSelectedButton3] = useState(1);
    const [selectedButton4, setSelectedButton4] = useState(1);

    const buttonClickHandler = (cardIndex, index) => {
        switch (cardIndex) {
            case 1:
                setSelectedButton1(index);
                break;
            case 2:
                setSelectedButton2(index);
                break;
            case 3:
                setSelectedButton3(index);
                break;
            case 4:
                setSelectedButton4(index);
                break;
            default:
                break;
        }
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slides1 = [
        [
            { image: "https://i.pinimg.com/564x/f0/1f/0a/f01f0aa2df9cf174e35fb95ecc5f3265.jpg", title: "Login", description: "Social Login With Facebook/Google" },

            { image: "https://i.pinimg.com/564x/44/0e/01/440e0193d0dbbefd45b041fddf042bfc.jpg", title: "Forgot Password", description: "Login, Register& Forget Password" },

        ],
        [
            { image: "https://i.pinimg.com/736x/ae/98/bb/ae98bbd0fe7f047a3a97ee94c9b73382.jpg", title: "Dashboard", description: "Dashboard Order Statistics" },
            { image: "https://i.pinimg.com/736x/5a/d4/48/5ad44887b0d12609dfdc46a2974d465f.jpg", title: "Sales", description: "Total Sales Analytics" },
            { image: "https://i.pinimg.com/564x/9a/44/20/9a4420ad49a852fc408fc988bfe7c1f7.jpg", title: "Users Overview", description: "Users Overview" },
            { image: "https://i.pinimg.com/564x/43/f5/6c/43f56ce3a8e6982d1c190a70778d882b.jpg", title: "Selling Products", description: "Top Selling Products" },
            { image: "https://i.pinimg.com/564x/ad/74/ff/ad74ff65f9fe91d0903030b96d0b0c9d.jpg", title: "Store", description: "Popular Store" },
            { image: "https://i.pinimg.com/564x/71/2b/c4/712bc4ac83d15175aefcd862a1794a54.jpg", title: "Delivery", description: "Top delivery Man By Order Count" },
        ],
        [
            { image: "https://i.pinimg.com/564x/0b/f6/35/0bf6356f71e10ebd165edfc796fb81fc.jpg", title: "Pending Orders", description: "Pending Orders" },
            { image: "https://i.pinimg.com/736x/c0/3c/b7/c03cb7d1e831a8638ce561e1e95dcb03.jpg", title: "This is a second title 3", description: "This is a second description 3" },
            { image: "https://i.pinimg.com/564x/6e/ff/be/6effbe350013960382e62cddfbb6987c.jpg", title: "This is a third title 3", description: "This is a third description 3" },
            { image: "https://picsum.photos/800/700", title: "This is a fourth title 3", description: "This is a fourth description 3" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
        [
            { image: "https://picsum.photos/500/400", title: "This is a title 4", description: "This is a description 4" },
            { image: "https://picsum.photos/700/600", title: "This is a second title 4", description: "This is a second description 4" },
            { image: "https://picsum.photos/200/300", title: "This is a third title 4", description: "This is a third description 4" },
            { image: "https://picsum.photos/600/500", title: "This is a fourth title 4", description: "This is a fourth description 4" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
    ];

    const solutionsData = [
        { image: laravel, alt: "Laravel", title: "Login/Register" },
        { image: flutter, alt: "Flutter", title: "Dashboard" },
        { image: js, alt: "JavaScript", title: "Dispatch Management" },
        { image: php, alt: "PHP", title: "Categories" },
        { image: magneto, alt: "Magneto", title: "Attribute Features" },
        { image: react, alt: "React", title: "Addons" },
        { image: vue, alt: "Python", title: "Report & Analytics" },
        { image: python, alt: ".NET", title: "Orders" },
        { image: android, alt: "Android App", title: "Business Section" },
        { image: crm, alt: "CRM", title: "Customer Section" },
        { image: apple, alt: "Vue.js", title: "Product" },
        { image: hello, alt: "iOS", title: "Delivery Man Section" },
    ];
    const solutionsData2 = [
        { image: laravel, alt: "Laravel", title: "Login/Register" },
        { image: flutter1, alt: "Flutter", title: "New Order Notifications" },
        { image: js2, alt: "JavaScript", title: "Accept Or Cancel Order" },
        { image: php2, alt: "PHP", title: "Update Order Status" },
        { image: magneto2, alt: "Magneto", title: "Recent Order History" },
        { image: react2, alt: "React", title: "Check Account Details" },
        { image: python2, alt: "Python", title: "Profile" },
    ];
    const solutionsData3 = [
        { image: laravel, alt: "Laravel", title: "Login/Register" },
        { image: flutter2, alt: "Flutter", title: "Search By Location" },
        { image: js3, alt: "JavaScript", title: "Live Order Tracking" },
        { image: php3, alt: "PHP", title: "Notification & Alert" },
        { image: magneto3, alt: "Magneto", title: "Accounts & Profiles " },
        { image: react3, alt: "React", title: "Transactions" },
        { image: python3, alt: "Python", title: "Store Directory" },
        { image: python4, alt: "Python", title: "Menu Item Listing" },
        { image: python5, alt: "Python", title: "Cart" },
        { image: python6, alt: "Python", title: "Checkout" },
        { image: python7, alt: "Python", title: "Order History" },
    ];
    const solutionsData4 = [
        { image: laravel, alt: "Laravel", title: "Login/Register" },
        { image: magneto2, alt: "Magneto", title: "Recent Order History" },
        { image: js2, alt: "JavaScript", title: "Accept Or Cancel Order" },
        { image: python, alt: ".NET", title: "Orders" },
        { image: php2, alt: "Magneto", title: "Update Order Status- Processing/Ready " },
        { image: flutter1, alt: "React", title: "New Order Notifications" },
        { image: magneto3, alt: "Python", title: "Check Account Details" },
        { image: php5, alt: "Python", title: "New Order List " },
        { image: python2, alt: "Python", title: "Profile" },
       
    ];
    const cardSliderStyle = {
        borderRadius: '50%' // This will make the images round
    };
    const slides2 = [
        [
            { image: "https://i.pinimg.com/736x/d5/7a/b7/d57ab7855a2c422fadcd46d1a48d5b1f.jpg", title: "This is a title 2", description: "This is a description 2" },
            { image: "https://i.pinimg.com/564x/ff/5e/70/ff5e708b1b2c143536a63bbfedb06509.jpg", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://i.pinimg.com/564x/6f/cf/5b/6fcf5ba1dc677ec23295cb47b8213308.jpg", title: "This is a third title 2", description: "This is a third description 2" },
            { image: "https://picsum.photos/600/500", title: "This is a fourth title 2", description: "This is a fourth description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
        [
            { image: "https://picsum.photos/200/300", title: "This is a title 1", description: "This is a description 1" },
            { image: "https://picsum.photos/600/500", title: "This is a second title 1", description: "This is a second description 1" },
            { image: "https://picsum.photos/700/600", title: "This is a third title 1", description: "This is a third description 1" },
            { image: "https://picsum.photos/500/400", title: "This is a fourth title 1", description: "This is a fourth description 1" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
        [
            { image: "https://picsum.photos/700/600", title: "This is a title 3", description: "This is a description 3" },
            { image: "https://picsum.photos/500/400", title: "This is a second title 3", description: "This is a second description 3" },
            { image: "https://picsum.photos/200/300", title: "This is a third title 3", description: "This is a third description 3" },
            { image: "https://picsum.photos/800/700", title: "This is a fourth title 3", description: "This is a fourth description 3" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
        [
            { image: "https://picsum.photos/500/400", title: "This is a title 4", description: "This is a description 4" },
            { image: "https://picsum.photos/700/600", title: "This is a second title 4", description: "This is a second description 4" },
            { image: "https://picsum.photos/200/300", title: "This is a third title 4", description: "This is a third description 4" },
            { image: "https://picsum.photos/600/500", title: "This is a fourth title 4", description: "This is a fourth description 4" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
    ];
    const slides3 = [
        [
            { image: "https://i.pinimg.com/564x/7e/8c/a0/7e8ca02a451dd988e8219a7e90df09d8.jpg", title: "This is a title 2", description: "This is a description 2" },
            { image: "https://i.pinimg.com/564x/c7/c7/f1/c7c7f12ec7247b4d46fcd002f73efced.jpg", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://i.pinimg.com/564x/ae/88/8a/ae888aa12240f3ef1a74a6f78c546101.jpg", title: "This is a third title 2", description: "This is a third description 2" },
            { image: "https://picsum.photos/600/500", title: "This is a fourth title 2", description: "This is a fourth description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
        [
            { image: "https://picsum.photos/200/300", title: "This is a title 1", description: "This is a description 1" },
            { image: "https://picsum.photos/600/500", title: "This is a second title 1", description: "This is a second description 1" },
            { image: "https://picsum.photos/700/600", title: "This is a third title 1", description: "This is a third description 1" },
            { image: "https://picsum.photos/500/400", title: "This is a fourth title 1", description: "This is a fourth description 1" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
        [
            { image: "https://picsum.photos/700/600", title: "This is a title 3", description: "This is a description 3" },
            { image: "https://picsum.photos/500/400", title: "This is a second title 3", description: "This is a second description 3" },
            { image: "https://picsum.photos/200/300", title: "This is a third title 3", description: "This is a third description 3" },
            { image: "https://picsum.photos/800/700", title: "This is a fourth title 3", description: "This is a fourth description 3" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
        [
            { image: "https://picsum.photos/500/400", title: "This is a title 4", description: "This is a description 4" },
            { image: "https://picsum.photos/700/600", title: "This is a second title 4", description: "This is a second description 4" },
            { image: "https://picsum.photos/200/300", title: "This is a third title 4", description: "This is a third description 4" },
            { image: "https://picsum.photos/600/500", title: "This is a fourth title 4", description: "This is a fourth description 4" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
    ];
    const slides4 = [
        [
            { image: "https://i.pinimg.com/564x/f1/fa/62/f1fa6214b21bb849509efa9f80f9db99.jpg", title: "This is a title 2", description: "This is a description 2" },
            { image: "https://i.pinimg.com/564x/19/2c/c4/192cc45a767be0932794a0bedaf6db3d.jpg", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://i.pinimg.com/564x/08/3a/ee/083aee253d8e2d6a670c187208a0a277.jpg", title: "This is a third title 2", description: "This is a third description 2" },
            { image: "https://picsum.photos/600/500", title: "This is a fourth title 2", description: "This is a fourth description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
        [
            { image: "https://picsum.photos/200/300", title: "This is a title 1", description: "This is a description 1" },
            { image: "https://picsum.photos/600/500", title: "This is a second title 1", description: "This is a second description 1" },
            { image: "https://picsum.photos/700/600", title: "This is a third title 1", description: "This is a third description 1" },
            { image: "https://picsum.photos/500/400", title: "This is a fourth title 1", description: "This is a fourth description 1" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
        [
            { image: "https://picsum.photos/700/600", title: "This is a title 3", description: "This is a description 3" },
            { image: "https://picsum.photos/500/400", title: "This is a second title 3", description: "This is a second description 3" },
            { image: "https://picsum.photos/200/300", title: "This is a third title 3", description: "This is a third description 3" },
            { image: "https://picsum.photos/800/700", title: "This is a fourth title 3", description: "This is a fourth description 3" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
        [
            { image: "https://picsum.photos/500/400", title: "This is a title 4", description: "This is a description 4" },
            { image: "https://picsum.photos/700/600", title: "This is a second title 4", description: "This is a second description 4" },
            { image: "https://picsum.photos/200/300", title: "This is a third title 4", description: "This is a third description 4" },
            { image: "https://picsum.photos/600/500", title: "This is a fourth title 4", description: "This is a fourth description 4" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
    ];
    return (
        <div className="container">
            <ul id="cards" className="grid grid-cols-1 gap-4">
                <li className="card1 sticky top-16 pt-6">
                    <div className="card-body bg-blue-400 relative">
                        {/* <div className="button-group flex space-x-2 mb-4 flex-wrap absolute top-0 left-0 right-0 bg-[#52B2CF] p-3 z-10 rounded-[7rem]">
                            <button
                                onClick={() => buttonClickHandler(1, 1)}
                                className={` hover:border-b-2 text-white font-bold py-2 px-1 rounded focus:outline-none focus:shadow-outline ${selectedButton1 === 1 && 'border-b-2'}`}
                            >
                                Customer App
                            </button>
                            <button
                                onClick={() => buttonClickHandler(1, 2)}
                                className={` hover:border-b-2 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${selectedButton1 === 2 && 'border-b-2'}`}
                            >
                                A
                            </button>
                            <button
                                onClick={() => buttonClickHandler(1, 3)}
                                className={` hover:border-b-2 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${selectedButton1 === 3 && 'border-b-2'}`}
                            >
                                Orders
                            </button>
                        </div> */}
                        <h2 className="mb-96 flex absolute text-white text-3xl">Customer App</h2><br />

                        {/* <ReactCardSlider 
                                slides={slides1[selectedButton1 - 1]}
                                autoSlide={true}
                                slideInterval={3000}
                                showDots={true}
                                showNav={false}
                    
                            /> */}
                        <div className="slider-container">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 shadow-md">
                                {solutionsData3.map((solution, index) => (
                                    <div
                                        key={index}
                                        className="bg-white shadow-md rounded-md p-2 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl"
                                    >
                                        <img 
                                            src={solution.image}
                                            alt={solution.alt}
                                            className="w-10 h-10 mx-auto mb-2"
                                        />
                                        <h3 className="text-base font-semibold">{solution.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </li>
                <li className="card2 sticky top-24 pt-12">
                    <div className="card-body bg-orange-400 relative">
                        {/* <div className="button-group flex space-x-2 mb-4 flex-wrap absolute top-0 left-0 right-0 bg-[#E5A36F] p-3 z-10 rounded-[7rem]">
                            <button
                                onClick={() => buttonClickHandler(2, 1)}
                                className={` hover:border-b-2 text-white font-bold py-2 px-1 rounded focus:outline-none focus:shadow-outline ${selectedButton2 === 1 && 'border-b-2'}`}
                            >
                                Skilled Professionals
                            </button>
                            <button
                                onClick={() => buttonClickHandler(2, 2)}
                                className={` hover:border-b-2 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${selectedButton2 === 2 && 'border-b-2'}`}
                            >
                                Innovative Strategy
                            </button>
                            <button
                                onClick={() => buttonClickHandler(2, 3)}
                                className={` hover:border-b-2 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${selectedButton2 === 3 && 'border-b-2'}`}
                            >
                                Consumer Help Service
                            </button>
                        </div> */}
                        <h2 className="mb-96 flex absolute text-white text-3xl">Delivery Boy App</h2>
                        <div className="slider-container">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {solutionsData2.map((solution, index) => (
                                    <div
                                        key={index}
                                        className="bg-white shadow-md rounded-md p-2 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl"
                                    >
                                        <img
                                            src={solution.image}
                                            alt={solution.alt}
                                            className="w-10 h-10 mx-auto mb-2"
                                        />
                                        <h3 className="text-base font-semibold">{solution.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </li>
                <li className="card3 sticky top-42 pt-18">
                    <div className="card-body bg-blue-200 relative">
                        {/* <div className="button-group flex space-x-2 mb-4 flex-wrap absolute top-0 left-0 right-0 bg-[#9CADCE] p-3 z-10 rounded-[7rem] ">
                            <button
                                onClick={() => buttonClickHandler(3, 1)}
                                className={`hover:border-b-2 text-white font-bold py-2 px
1 rounded focus:outline-none focus:shadow-outline ${selectedButton3 === 1 && 'border-b-2'}`}
                            >
                                Skilled Professionals
                            </button>
                            <button
                                onClick={() => buttonClickHandler(3, 2)}
                                className={`hover:border-b-2 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${selectedButton3 === 2 && 'border-b-2'}`}
                            >
                                Innovative Strategy
                            </button>
                            <button
                                onClick={() => buttonClickHandler(3, 3)}
                                className={`hover:border-b-2 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${selectedButton3 === 3 && 'border-b-2'}`}
                            >
                                Consumer Help Service
                            </button>
                        </div> */}
                        <h2 className="mb-96 flex absolute text-white text-3xl">Admin Panel</h2>
                        <div className="slider-container">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {solutionsData.map((solution, index) => (
                                    <div
                                        key={index}
                                        className="bg-white shadow-md rounded-md p-2 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl"
                                    >
                                        <img
                                            src={solution.image}
                                            alt={solution.alt}
                                            className="w-10 h-10 mx-auto mb-2"
                                        />
                                        <h3 className="text-base font-semibold">{solution.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </li>
                <li className="card4 sticky top-60 pt-24">
                    <div className="card-body bg-pink-200 relative">
                        {/* <div className="button-group flex space-x-2 mb-4 flex-wrap absolute top-0 left-0 right-0 bg-[#D4AFB9] p-3 z-10 rounded-[7rem]">
                            <button
                                onClick={() => buttonClickHandler(4, 1)}
                                className={` hover:border-b-2 text-white font-bold py-2 px-1 rounded focus:outline-none focus:shadow-outline ${selectedButton4 === 1 && 'border-b-2'}`}
                            >
                                Skilled Professionals
                            </button>
                            <button
                                onClick={() => buttonClickHandler(4, 2)}
                                className={` hover:border-b-2 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${selectedButton4 === 2 && 'border-b-2'}`}
                            >
                                Innovative Strategy
                            </button>
                            <button
                                onClick={() => buttonClickHandler(4, 3)}
                                className={` hover:border-b-2 text-white font-bold py-1 px-2 focus:outline-none focus:shadow-outline  ${selectedButton4 === 3 && 'border-b-2'}`}
                            >
                                Consumer Help Service
                            </button>
                        </div> */}
                        <h2 className="mb-96 flex absolute text-white text-3xl">Vendor</h2>
                        <div className="slider-container">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                                {solutionsData4.map((solution, index) => (
                                    <div
                                        key={index}
                                        className="bg-white shadow-md rounded-md p-2 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl"
                                    >
                                        <img
                                            src={solution.image}
                                            alt={solution.alt}
                                            className="w-10 h-10 mx-auto mb-2"
                                        />
                                        <h3 className="text-base font-semibold">{solution.title}</h3>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div >
    );
};

export default ProductStackCards;
