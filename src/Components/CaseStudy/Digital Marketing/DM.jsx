import React from 'react'
import { Link } from 'react-router-dom'
import CNavbar from '../../../CNavbar';



const Card = ({ image, title, link }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <img className="w-full h-2/3" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-center mb-2">{title}</div>
    </div>
    <div className="px-6 pb-2 text-center">
      <Link to={link}
        className="inline-block bg-black  text-white font-bold px-28 py-2 rounded"
      >
        Visit
      </Link>
    </div>
  </div>
);

const DM = () => {
  return (
    <>
    <CNavbar/>
     <div class="containerx mx-auto  bg-black p-8 mt-20">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0 p-8">
      <h1 class="sm:text-8xl font-bold mb-4 text-white">Digital Marketing...</h1>
      <h3 class="sm:text-2xl text-white">
        <Link to ="/" class="text-red-600 hover:underline">Home</Link> / Case-Study / Digital Marketing
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlnaXRhbCUyMG1hcmtldGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="Digital Marketing Image" class="w-full h-auto"/>
    </div>
  </div>
</div>  
 

<div className="flex flex-col items-center mt-32 ">
      <h1 className="text-5xl font-bold text-black mb-12">Our Case Studies</h1>
      <div className="flex flex-wrap justify-center">
        <Card
          image="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwfGVufDB8fDB8fHww"
          title="OneApp-Plus"
          link= '/case-study/digital-marketing/oneapp-plus'
        />
        <Card
          image="https://images.unsplash.com/photo-1637606346315-d23ed32a6cfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VvfGVufDB8fDB8fHww"
          title="SEO"
          link="/case-study/digital-marketing/seo"
        />
        <Card
          image="https://images.unsplash.com/photo-1583507171283-0d663f8416c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbG9yaWV8ZW58MHx8MHx8fDA%3D"
          title="Calorie-Care"
          link='/case-study/digital-marketing/calorie-care'
        />

<Card
          image="https://plus.unsplash.com/premium_photo-1661607056340-7a0b658f7a31?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGRvY3RvciUyMGdpcmx8ZW58MHx8MHx8fDA%3D"
          title="UR-Fine"
          link='/case-study/digital-marketing/ur-fine'
        />
      </div>
    </div>

    
    </>
  )
}

export default DM 
