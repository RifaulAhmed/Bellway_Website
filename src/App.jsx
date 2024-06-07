import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import About from './About';
import Contact from './Contact';
import Product from './Product';
import Service from './Service';
// import CaseStudy from './CaseStudy';

//Irfan
import AboutUs from './Components/About/AboutUs'
import Career from './Components/About/Career'
// import TestimonialData from './Components/About/TestimonialData'

import TraineeForm from './Components/About/TraineeForm'
import ExperienceJoineeForm from './Components/About/ExperienceJoineeForm'

import Blogs from './Components/Blogs/Blogs'
import MobileBlog from './Components/Blogs/MobileApp'
import SeoManagement from './Components/Blogs/SeoManagement'
import EcommerceBlog from './Components/Blogs/EcommerceBlog'
import LinkingBlog from './Components/Blogs/LinkingBlog'
import FutureTech from './Components/Blogs/FutureTech'
import ReactBlog from './Components/Blogs/ReactBlog'
import LaravelBlog from './Components/Blogs/LaravelBlog'
import DigitalMarketing from './Components/Blogs/DigitalMarketing'
import CyberSecurity from './Components/Blogs/CyberSecurity'
import CryptoBlog from './Components/Blogs/CryptoBlog'


import Case_Study  from './Components/CaseStudy/CS'

import App_Development from './Components/CaseStudy/App Development/AD'
import GoToAstro_AD from './Components/CaseStudy/App Development/GoToAstro'
import FlyingVolt_AD from './Components/CaseStudy/App Development/FlyingVolt'
import Lazy_Bazar_AD from './Components/CaseStudy/App Development/Lazy_Bazar'
import Cart_Eats_AD from './Components/CaseStudy/App Development/Cart_Eats'

import Digital_Marketing from './Components/CaseStudy/Digital Marketing/DM'
import Ur_Fine_DM from './Components/CaseStudy/Digital Marketing/Ur_Fine'
import OneAppPlus_DM from './Components/CaseStudy/Digital Marketing/OneAppPlus'
import CalorieCare_DM from './Components/CaseStudy/Digital Marketing/CalorieCare'
import Seo from './Components/CaseStudy/Digital Marketing/Seo'


import Graphic_Design from './Components/CaseStudy/Graphic Design/GD'
import Ur_Fine from './Components/CaseStudy/Graphic Design/Ur_Fine'
import Make_Your_Trip from './Components/CaseStudy/Graphic Design/MakeYourTrip'
import PropertyDekho_GD from './Components/CaseStudy/Graphic Design/PropertyDekho'
import HazelJewells_GD from './Components/CaseStudy/Graphic Design/HazelJewells'
import Team_11 from './Components/CaseStudy/Graphic Design/Team11'
import MoviKat from './Components/CaseStudy/Graphic Design/MoviKat'


import Web_Development from './Components/CaseStudy/Web Development/WD'
import Lazy_Bazar from './Components/CaseStudy/Web Development/Lazy_Bazar'
import GoToAstro from './Components/CaseStudy/Web Development/GoToAstro'
import PropertyDekho from './Components/CaseStudy/Web Development/PropertyDekho'
import Cart_Eats from './Components/CaseStudy/Web Development/Cart_Eats'
import OneAppPlus from './Components/CaseStudy/Web Development/OneAppPlus'
import CalorieCare from './Components/CaseStudy/Web Development/CalorieCare'
import FlyingVolt from './Components/CaseStudy/Web Development/FlyingVolt'
import HazelJewells from './Components/CaseStudy/Web Development/HazelJewells'

//end
// import Blog from './Blog';
import Web from './Web'
import Cloud from './Cloud'
import Data from './Data'
import Dedicated from './Dedicated'
// import Career from './Career'
// import Testimonial from './Testimonial'
// import TraineeForm from './TraineeForm'
// import ExperienceJoineeForm from './ExperienceJoineeForm'
// import Digital_Marketing from './Components/CaseStudy/Digital Marketing/DM'
import Design from './Design'
import Figma from './Figma'
import Commerce from './Product2'
// import MobileApp from './MobileApp'
import Digital2 from './Digital2'
import Web4 from './Web4'
// import Case_Study  from './Components/CaseStudy/CS'
// import Graphic_Design from './Components/CaseStudy/Graphic Design/GD'
// import App_Development from './Components/CaseStudy/App Development/AD'
// import Web_Development from './Components/CaseStudy/Web Development/WD'
import AI from './AI'; 
import Mobile1 from './Mobile1';
import Web1 from './Web1';



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  
    <Routes>

    <Route path='/blog' element={<Blogs></Blogs>}></Route>
    <Route path="/blogs/mobileApplicationBlog" element={<MobileBlog></MobileBlog>}></Route>
    <Route path="/blogs/seoManagementBlog" element={<SeoManagement></SeoManagement>}></Route>
    <Route path="/blogs/scratchEcommerceBlog" element={<EcommerceBlog></EcommerceBlog>}></Route>
    <Route path="/blogs/internalLinkingBlog" element={<LinkingBlog></LinkingBlog>}></Route>
    <Route path="/blogs/futureTechBlog" element={<FutureTech></FutureTech>}></Route>
    <Route path="/blogs/reactBlog" element={<ReactBlog></ReactBlog>}></Route>
    <Route path="/blogs/laravelBlog" element={<LaravelBlog></LaravelBlog>}></Route>
    <Route path="/blogs/digitalMarketingBlog" element={<DigitalMarketing></DigitalMarketing>}></Route>
    <Route path="/blogs/cyberSecurityBlog" element={<CyberSecurity></CyberSecurity>}></Route>
    <Route path="/blogs/cryptoMarketBlog" element={<CryptoBlog></CryptoBlog>}></Route>

    <Route path="/about-us" element={<AboutUs></AboutUs>}></Route>
    <Route path="/career-with-us" element={<Career></Career>}></Route>
    <Route path="/traineeForm" element={<TraineeForm></TraineeForm>}></Route>
    <Route path="/experienceJoineeForm" element={<ExperienceJoineeForm></ExperienceJoineeForm>}></Route>

    <Route path="/case-study/web/lazy-bazar" element={<Lazy_Bazar></Lazy_Bazar>}></Route>
    <Route path="/case-study/graphic-design/ur-fine" element={<Ur_Fine></Ur_Fine>}></Route>
    <Route path="/case-study/graphic-design/make-your-trip" element={<Make_Your_Trip></Make_Your_Trip>}></Route>
    <Route path="/case-study/graphic-design/team-11" element={<Team_11></Team_11>}></Route>
    <Route path="/case-study/graphic-design/property-dekho" element={<PropertyDekho_GD></PropertyDekho_GD>}></Route>
    <Route path="/case-study/graphic-design/GD" element={<Graphic_Design></Graphic_Design>}></Route>
    <Route path="/case-study/graphic-design/hazel-jewells" element={<HazelJewells_GD></HazelJewells_GD>}></Route>
    <Route path="/case-study/graphic-design/movikat" element={<MoviKat></MoviKat>}></Route>

   <Route path="/case-study/web/eat-cart" element={<Cart_Eats></Cart_Eats>}></Route>

   <Route path="/case-study/digital-marketing/DM" element={<Digital_Marketing></Digital_Marketing>}></Route>
   <Route path="/case-study/digital-marketing/seo" element={<Seo></Seo>}></Route>
   <Route path="/case-study/digital-marketing/ur-fine" element={<Ur_Fine_DM></Ur_Fine_DM>}></Route>
   <Route path="/case-study/digital-marketing/calorie-care" element={<CalorieCare_DM></CalorieCare_DM>}></Route>
   <Route path="/case-study/digital-marketing/oneapp-plus" element={<OneAppPlus_DM></OneAppPlus_DM>}></Route>
  
   <Route path="/case-study/app/AD" element={<App_Development></App_Development>}></Route>
   <Route path="/case-study/app/eat-cart" element={<Cart_Eats_AD></Cart_Eats_AD>}></Route>
   <Route path="/case-study/app/lazy-bazar" element={<Lazy_Bazar_AD></Lazy_Bazar_AD>}></Route>
   <Route path="/case-study/app/goto-astro" element={<GoToAstro_AD></GoToAstro_AD>}></Route>
   <Route path="/case-study/app/flying-volt" element={<FlyingVolt_AD></FlyingVolt_AD>}></Route>

   <Route path="/case-study/web/WD" element={<Web_Development></Web_Development>}></Route>
   <Route path="/case-study/web/goto-astro" element={<GoToAstro></GoToAstro>}></Route>
   <Route path="/case-study/web/property-dekho" element={<PropertyDekho></PropertyDekho>}></Route>
   <Route path="/case-study/web/oneapp-plus" element={<OneAppPlus></OneAppPlus>}></Route>
   <Route path="/case-study/web/calorie-care" element={<CalorieCare></CalorieCare>}></Route>
   <Route path="/case-study/web/flying-volt" element={<FlyingVolt></FlyingVolt>}></Route>
   <Route path="/case-study/web/hazel-jewells" element={<HazelJewells></HazelJewells>}></Route>
   <Route path="/case-study/CS" element={<Case_Study></Case_Study>}></Route>



        <Route path="/" element={<Home />} />
        {/* <Route path="/about/:id" element={<About/>} /> */}
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/service/:id" element={<Service/>} />
        {/* <Route path="/casestudy" element={<CaseStudy/>} /> */}
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/web" element={<Web/>} />
        <Route path="/cloud" element={<Cloud/>} />
        <Route path="/data" element={<Data/>} />
        <Route path="/dedicated" element={<Dedicated/>} />
        {/* <Route path="/career" element={<Career/>} /> */}
        {/* <Route path="/testimonial" element={<Testimonial/>} /> */}
        {/* <Route path="/traineeform" element={<TraineeForm/>} /> */}
        {/* <Route path="/experienceJoineeForm" element={<ExperienceJoineeForm/>} /> */}
        <Route path="/design" element={<Design/>} />
        <Route path="/figma" element={<Figma/>} />
        <Route path="/commerce" element={<Commerce/>} />
        {/* <Route path="/mobileapp" element={<MobileApp/>} /> */}
        <Route path="/digital2" element={<Digital2/>} />
        <Route path="/web4" element={<Web4/>} />
        {/* <Route path="/case-study/CS" element={<Case_Study></Case_Study>}></Route> */}
        {/* <Route path="/case-study/graphic-design/GD" element={<Graphic_Design></Graphic_Design>}></Route> */}
        {/* <Route path="/case-study/digital-marketing/DM" element={<Digital_Marketing></Digital_Marketing>}></Route> */}
        {/* <Route path="/case-study/app/AD" element={<App_Development></App_Development>}></Route> */}
        {/* <Route path="/case-study/web/WD" element={<Web_Development></Web_Development>}></Route> */}
        <Route path="/ai" element={<AI />} /> /
        <Route path="/mobile1" element={<Mobile1 />} /> /
        <Route path="/web1" element={<Web1 />} /> /
      </Routes>
      </>
  )
}

export default App
