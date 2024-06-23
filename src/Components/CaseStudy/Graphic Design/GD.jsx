import React from 'react'
import { Link } from 'react-router-dom'
import CNavbar from '../../../CNavbar';
import Footer from '../../../Footer';


const Card = ({ image, title, link }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <img className="w-full h-2/3" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-center mb-2">{title}</div>
    </div>
    <div className="px-6  pb-2 text-center">
      <Link to={link}
        className="inline-block bg-black  text-white font-bold px-28 py-2 rounded"
      >
        Visit
      </Link>
    </div>
  </div>
);
const GD = () => {
  return (
    <>
      <CNavbar />
      <div className="mybg">
        <div class="containerx mx-auto  bg-black p-8 mt-20">
          <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 text-left mb-4 md:mb-0 p-8">
              <h1 class="sm:text-8xl font-bold mb-4 text-white">Graphic Design...</h1>
              <h3 class="sm:text-2xl text-white">
                <Link to="/" class="text-red-600 hover:underline">Home</Link> / Case-Study / Graphic Design
              </h3>
            </div>
            <div class="md:w-1/2 text-right">
              <img src="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D" alt="Graphic Design Image" class="w-full h-auto" />
            </div>
          </div>
        </div>



        <div className="flex flex-col items-center mt-32 ">
          <h1 className="text-5xl font-bold text-black mb-12">Our Case Studies</h1>
          <div className="flex flex-wrap justify-center">
            <Card
              image="https://plus.unsplash.com/premium_photo-1661766718556-13c2efac1388?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yc3xlbnwwfHwwfHx8MA%3D%3D"
              title="UR-Fine"
              link='/case-study/graphic-design/ur-fine'
            />
            <Card
              image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D"
              title="Property-Dekho"
              link="/case-study/graphic-design/property-dekho"
            />
            <Card
              image="https://images.unsplash.com/photo-1607869549913-c73078fde439?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJpbmd8ZW58MHx8MHx8fDA%3D"
              title="Hazel-Jewells"
              link='/case-study/graphic-design/hazel-jewells'
            />
          </div>
        </div>
        <br /><br />
        <Footer />
      </div>
    </>
  )
}

export default GD
