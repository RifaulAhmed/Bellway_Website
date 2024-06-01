import React from 'react'

const Card = ({ image, title, link }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    <img className="w-full h-2/3" src={image} alt={title} />
    <div className="px-6 py-4">
      <div className="font-bold text-xl text-center mb-2">{title}</div>
    </div>
    <div className="px-6 pt-4 pb-2 text-center">
      <a
        href={link}
        className="inline-block bg-black  text-white font-bold px-28 py-4 rounded"
      >
        Visit
      </a>
    </div>
  </div>
);

const WD = () => {
  return (
    <>
       <div class="containerx mx-auto my-5 bg-black p-8">
  <div class="flex flex-col md:flex-row items-center">
    <div class="md:w-1/2 text-left mb-4 md:mb-0">
      <h1 class="text-8xl font-bold mb-4 text-white">Web Development...</h1>
      <h3 class="text-2xl text-white">
        <a href="/" class="text-red-600 hover:underline">Home</a> / Case-Study / Web Development
      </h3>
    </div>
    <div class="md:w-1/2 text-right">
      <img src="https://plus.unsplash.com/premium_photo-1678565869434-c81195861939?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fHdlYiUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww" alt="Web Image" class="w-full h-auto"/>
    </div>
  </div>
</div>

<div className="flex flex-col items-center mt-32 ">
      <h1 className="text-5xl font-bold text-black mb-12">Our Case Studies</h1>
      <div className="flex flex-wrap justify-center">
        <Card
         
         image="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fGZvb2QlMjByZXN0cnxlbnwwfHwwfHx8MA%3D%3D"
         title="D-Cart-Eats"
         link='/case-study/web/eat-cart'
        />
        <Card
          image="https://images.unsplash.com/photo-1583507171283-0d663f8416c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbG9yaWV8ZW58MHx8MHx8fDA%3D"
          title="Calorie-Care"
          link='/case-study/web/calorie-care'
        />
        <Card
            image="https://images.unsplash.com/photo-1607869549913-c73078fde439?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJpbmd8ZW58MHx8MHx8fDA%3D"
            title="Hazel-Jewells"
            link='/case-study/web/hazel-jewells'
        />

       <Card
             image="https://images.unsplash.com/photo-1560223716-0be2cdfa9b42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTB8fGJhemFyfGVufDB8fDB8fHww"
             title="Lazy-Bazar"
             link='/case-study/web/lazy-bazar'
        />
          <Card
            image="https://plus.unsplash.com/premium_photo-1717003486758-182a8d80c225?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JlZW4lMjBnYXN8ZW58MHx8MHx8fDA%3D"
            title="Flying-Volt"
            link= '/case-study/web/flying-volt'
        />
          <Card
            image="https://plus.unsplash.com/premium_photo-1699967520283-3215b2922ee7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGFzdHJvJTIwem9kaWFjfGVufDB8fDB8fHww"
            title="GoTo-Astro"
            link="/case-study/web/goto-astro"
        />
         <Card
            image="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwfGVufDB8fDB8fHww"
            title="OneApp-Plus"
            link= '/case-study/web/oneapp-plus'
        />
         <Card
           image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D"
           title="Property-Dekho"
           link="/case-study/web/property-dekho"
        />
      </div>
    </div>
    </>
  )
}

export default WD
