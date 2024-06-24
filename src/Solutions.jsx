import React from "react";
import laravel from './assets/laravel.png';
import flutter from './assets/flutter.png';
import js from './assets/js.png';
import php from './assets/php.png';
import magneto from './assets/magneto.png';
import react from './assets/react.png';
import vue from './assets/vue.png';
import python from './assets/python.png';
import net from './assets/net.png';
import android from './assets/androidapp.png';
import crm from './assets/apple.png';
import apple from './assets/node1.jpeg';

const Solutions = () => {
    return (
        <div className="containerx mx-auto py-15 px-4 sm:px-6 lg:px-8">
            <div className="text-center mt-9">
                <h2 className="text-4xl font-bold mb-4">Solutions</h2>
                <p className="text-lg text-gray-600 mb-8">
                    Being a Mobile App development and web development company Bellway consistently acumen into latest Technologies 
                    for providing nothing <br />less than best to our Clients and Prospects.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {solutionsData.map((solution, index) => (
                    <div 
                        key={index} 
                        className="bg-gray-50 shadow-md rounded-md p-2 text-center transition duration-300 hover:bg-gray-200 hover:shadow-2xl"
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
    );
};

const solutionsData = [
    { image: laravel, alt: "Laravel", title: "Laravel Solutions" },
    { image: flutter, alt: "Flutter", title: "Flutter Solutions" },
    { image: js, alt: "JavaScript", title: "JavaScript Solutions" },
    { image: php, alt: "PHP", title: "PHP" },
    { image: magneto, alt: "Magneto", title: "Magento Solutions" },
    { image: react, alt: "React", title: "React App Solutions" },
    { image: python, alt: "Python", title: "Python Solutions" },
    { image: net, alt: ".NET", title: ".NET Solutions" },
    { image: android, alt: "Android App", title: "Android App Development" },
    { image: crm, alt: "CRM", title: "iOS Development" },
    { image: vue, alt: "Vue.js", title: "Vue.js" },
    { image: apple, alt: "iOS", title: "Node js" },
];

export default Solutions;
