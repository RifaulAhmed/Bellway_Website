import React, { useState } from 'react';
import ReactCardSlider from 'react-card-slider-component';
import './ProductStackCards.css';

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

    const slides = [
        [
            { image: "https://picsum.photos/200/300", title: "This is a title 1", description: "This is a description 1" },
            { image: "https://picsum.photos/600/500", title: "This is a second title 1", description: "This is a second description 1" },
            { image: "https://picsum.photos/700/600", title: "This is a third title 1", description: "This is a third description 1" },
            { image: "https://picsum.photos/500/400", title: "This is a fourth title 1", description: "This is a fourth description 1" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
        ],
        [
            { image: "https://picsum.photos/200/300", title: "This is a title 2", description: "This is a description 2" },
            { image: "https://picsum.photos/800/700", title: "This is a second title 2", description: "This is a second description 2" },
            { image: "https://picsum.photos/300/400", title: "This is a third title 2", description: "This is a third description 2" },
            { image: "https://picsum.photos/600/500", title: "This is a fourth title 2", description: "This is a fourth description 2" },
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
                        <div className="button-group flex space-x-2 mb-4 flex-wrap absolute top-0 left-0 right-0 bg-[#52B2CF] p-3 z-10 rounded-[7rem]">
                            <button
                                onClick={() => buttonClickHandler(1, 1)}
                                className={` hover:border-b-2 text-white font-bold py-2 px-1 rounded focus:outline-none focus:shadow-outline ${selectedButton1 === 1 && 'border-b-2'}`}
                            >
                                Skilled Professionals
                            </button>
                            <button
                                onClick={() => buttonClickHandler(1, 2)}
                                className={` hover:border-b-2 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${selectedButton1 === 2 && 'border-b-2'}`}
                            >
                                Innovative Strategy
                            </button>

                            <button
                                onClick={() => buttonClickHandler(1, 3)}
                                className={` hover:border-b-2 text-white font-bold py-1 px-2 rounded focus:outline-none focus:shadow-outline ${selectedButton1 === 3 && 'border-b-2'}`}
                            >
                                Consumer Help Service
                            </button>
                        </div>
                        <h2 className="mb-56 flex absolute text-white text-3xl">Admin Functionality</h2><br />
                        <div className="slider-container">
                            <ReactCardSlider
                                slides={slides[selectedButton1 - 1]}
                                autoSlide={true}
                                slideInterval={3000}
                                showDots={true}
                                showNav={false}
                            />
                        </div>
                    </div>
                </li>
                <li className="card2 sticky top-24 pt-12">
                    <div className="card-body bg-orange-400 relative">
                        <div className="button-group flex space-x-2 mb-4 flex-wrap absolute top-0 left-0 right-0 bg-[#E5A36F] p-3 z-10 rounded-[7rem]">
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
                        </div>
                        <h2 className="mb-56 flex absolute text-white text-3xl">Delivery Boy Mobile App</h2>
                        <div className="slider-container">
                            <ReactCardSlider
                                slides={slides[selectedButton2 - 1]}
                                autoSlide={true}
                                slideInterval={3000}
                                showDots={true}
                                showNav={false}
                            />
                        </div>
                    </div>
                </li>
                <li className="card3 sticky top-42 pt-18">
                    <div className="card-body bg-blue-200 relative">
                        <div className="button-group flex space-x-2 mb-4 flex-wrap absolute top-0 left-0 right-0 bg-[#9CADCE] p-3 z-10 rounded-[7rem] ">
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
                        </div>
                        <h2 className="mb-56 flex absolute text-white text-3xl">Merchant Panel</h2>
                        <div className="slider-container">
                            <ReactCardSlider
                                slides={slides[selectedButton3 - 1]}
                                autoSlide={true}
                                slideInterval={3000}
                                showDots={true}
                                showNav={false}
                            />
                        </div>
                    </div>
                </li>
                <li className="card4 sticky top-60 pt-24">
                    <div className="card-body bg-pink-200 relative">
                        <div className="button-group flex space-x-2 mb-4 flex-wrap absolute top-0 left-0 right-0 bg-[#D4AFB9] p-3 z-10 rounded-[7rem]">
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
                        </div>
                        <h2 className="mb-56 flex absolute text-white text-3xl">Card 4</h2>
                        <div className="slider-container">
                            <ReactCardSlider
                                slides={slides[selectedButton4 - 1]}
                                autoSlide={true}
                                slideInterval={3000}
                                showDots={true}
                                showNav={false}
                            />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default ProductStackCards;
