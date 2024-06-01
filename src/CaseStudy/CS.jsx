import React from 'react'
import CNavbar from '../CNavbar';


const Card = ({ image, title, link }) => (
  <div className="w-2/3  bg-white rounded overflow-hidden shadow-lg mx-auto my-8 p-4 " style={{ boxShadow: '0 0 30px rgba(0, 0, 0, 0.8)' }}>
    <img className="w-full h-96 rounded" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-4xl mb-2 text-center">{title}</div>
    </div>
    <div className="px-6 pt-4 pb-2 text-center">
      <a
        href={link}
        className="inline-block bg-black text-white font-bold px-20 py-4 rounded"
      >
        Visit
      </a>
    </div>
  </div>
);

const CS = () => {
  return (
    <>
    <CNavbar/>
 <div class="containerx mx-auto my-5 bg-black p-8">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0">
      <h1 class="text-8xl font-bold mb-4 text-white">Case Study...</h1>
      <h3 class="text-2xl text-white">
        <a href="/" class="text-red-600 hover:underline">Home</a> / Case-Study 
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://plus.unsplash.com/premium_photo-1661396926941-b7bb38f76313?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNhc2UlMjBzdHVkeXxlbnwwfHwwfHx8MA%3D%3D" alt="Web Image" class="w-full h-auto"/>
    </div>
  </div>
</div>



    <div className="min-h-screen flex flex-col items-center bg-gray-100 py-8">
      <h1 className="text-5xl font-bold mb-12 text-black">Our Case Studies</h1>
      <Card
        image="https://images.unsplash.com/photo-1626785774573-4b799315345d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JhcGhpYyUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D"
        title="Graphic Design"
        link="/case-study/graphic-design/GD"
      />
         <Card
        image="https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGRpZ2l0YWwlMjBtYXJrZXRpbmd8ZW58MHx8MHx8fDA%3D"
        title="Digital Marketing"
        link="/case-study/digital-marketing/DM"
      />
      <Card
        image="https://plus.unsplash.com/premium_photo-1661375427386-64ac35086427?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzZSUyMHN0dWR5fGVufDB8fDB8fHww"
        title="Web Development"
        link="/case-study/web/WD"
      />

      <Card
        image="https://images.unsplash.com/photo-1587840178393-079769787b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5kcm9pZHxlbnwwfHwwfHx8MA%3D%3D"
        title="App Development"
        link="/case-study/app/AD"
      />
    
    </div>
    </>
  )
}

export default CS
