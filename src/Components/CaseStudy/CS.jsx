import React from 'react';
import CNavbar from '../../CNavbar';
import './CS.css'
import brobo from '../../assets/Rectangle 40460.png'
import desi from '../../assets/connect.png'
import dcart from '../../assets/counter2.png'
import grow from '../../assets/grow.png'
import LLN from '../../assets/LLN2.png'
import munch from '../../assets/munch.png'
import jyotish from '../../assets/ShriJyotish.png'
import match from '../../assets/match.png'
import haze from '../../assets/haze2.png'
import app from '../../assets/app.png'
import logo from '../../assets/logo2.png'
import logo2 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import logo5 from '../../assets/logo5.png'
import logo6 from '../../assets/logo6.png'
import logo7 from '../../assets/logo7.png'
import logo8 from '../../assets/logo8.png'
import logo12 from '../../assets/logo12.png'
import logo13 from '../../assets/logo13.png'
import logo15 from '../../assets/logo15.png'
import logo16 from '../../assets/logo16.png'
import logo17 from '../../assets/logo17.png'
import online from '../../assets/Online3.png'
import yml from '../../assets/Rectangle 40471.png'
import dCart from '../../assets/Rectangle 40469 (1).png'
import { Helmet } from "react-helmet";
const Card = ({ image, category, title, description, logo, url }) => {
  return (
    <div className="max-w-sm h-50  rounded overflow-hidden shadow-lg m-4">
      <div className="relative">
        <img
          src={image}
          alt="Card Image"
          className="w-full h-auto object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
        />
        <div style={{
          backgroundColor: '#ff1493',
          backgroundImage: 'linear-gradient(319deg, #ff1493 0%, #0000ff 37%, #ff8c00 100%)'
        }}
          className="absolute top-0 left-0  bg-opacity-50 text-white text-xs font-bold uppercase p-2">
          {category}
        </div>
      </div>
      <div className="px-4 py-4">
        <h2 className="font-bold text-xl mb-2 text-left">{title}</h2>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        <img src={logo} alt="Logo" className="h-8 w-18" />
        <a href={url}><button className='custom-button'>
          View Case Study
        </button></a>



      </div>
    </div>
  );
};

const CS = () => {
  const cardsData = [
    {
      image: brobo,
      category: 'brobo',
      title: 'Brobo',
      description: 'A HIPAA compliant Telemedicine App for USA where patient and doctors can register to give',
      logo: logo2,
      url: '/brobo'
    },
    {
      image: desi,
      category: 'Go Connect',
      title: 'Go Connect',
      description: 'A HIPAA compliant Telemedicine App for USA where patient and doctors can register to give',
      logo: logo4,
      url: '/brobo'
    },
    {
      image: dcart,
      category: 'Coupon Counter',
      title: 'Coupon Counter',
      description: 'A HIPAA compliant Telemedicine App for USA where patient and doctors can register to give',
      logo: logo5,
      url: '/brobo'
    },
    {
      image: grow,
      category: 'Desi Grow',
      title: 'Desi Grow',
      description: 'A HIPAA compliant Telemedicine App for USA where patient and doctors can register to give',
      logo: logo,
      url: '/brobo'
    },
    {
      image: LLN,
      category: 'LLN',
      title: 'LLN',
      description: 'A HIPAA compliant Telemedicine App for USA where patient and doctors can register to give',
      logo: logo6,
      url: '/brobo'
    },
    {
      image: munch,
      category: 'Maza Munch',
      title: 'Maza Munch',
      description: 'A HIPAA compliant Telemedicine App for USA where patient and doctors can register to give',
      logo: logo7,
      url: '/brobo'
    },
    {
      image: jyotish,
      category: 'Shri Jyotish',
      title: 'Shri Jyotish',
      description: 'A HIPAA compliant Telemedicine App for USA where patient and doctors can register to give',
      logo: logo8,
      url: '/brobo'
    },
    {
      image: haze,
      category: 'Truely Match',
      title: 'Truely Match',
      description: 'A HIPAA compliant Telemedicine App for USA where patient and doctors can register to give',
      logo: logo12,
      url: '/brobo'
    },
    {
      image: app,
      category: 'OneApp plus',
      title: 'OneApp plus',
      description: 'A HIPAA compliant Telemedicine App for USA where patient and doctors can register to give',
      logo: logo13,
      url: '/brobo'
    },
    {
      image: online,
      category: 'Online Store Web',
      title: 'Online Store Web',
      description: 'A HIPAA compliant Telemedicine App for USA where patient and doctors can register to give',
      logo: logo15,
      url: '/brobo'
    },
    {
      image: yml,
      category: 'YML Mart',
      title: 'YML Mart',
      description: 'A HIPAA compliant Telemedicine App for USA where patient and doctors can register to give',
      logo: logo16,
      url: '/brobo'
    },
    {
      image: dCart,
      category: 'DCart',
      title: 'DCart',
      description: 'A HIPAA compliant Telemedicine App for USA where patient and doctors can register to give',
      logo: logo17,
      url: '/brobo'
    }
  ];

  return (
    <>
      <Helmet>
        <title>BELLWAY INFOTECH | Case Study - Innovation In Action</title>
        <meta name="description" content="Explore our in-depth case studies showcasing our expertise. Discover how we've helped clients achieve their business goals through innovative solutions and strategic insights" />

      </Helmet>
      <CNavbar />
      <div className="flex flex-col items-center mt-8">
        <h1 className="text-2xl font-semibold mt-20 text-black">CASE STUDIES</h1>
        <p className="text-4xl mt-2">
          <span className="font-bold text-black">Explore</span> Our Recent <span className="font-bold text-black">Work</span>
        </p>
        <h1 className='font-semi-bold text-black text-center font-sans mt-2'>People expect more experience than ever before. Bellway intersects customer experiences and design to create<br /> immersive solutions that shouts details. Making it easy and everlastingly memorable. Scroll to feel.</h1>
        <div className="flex flex-wrap justify-center mt-12">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              category={card.category}
              title={card.title}
              description={card.description}
              logo={card.logo}
              url={card.url}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CS;




