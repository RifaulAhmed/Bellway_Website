import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Product from './Product';
import Service from './Service';
// import CaseStudy from './CaseStudy';
import Blog from './Blog';
import Web from './Web'
import Cloud from './Cloud'
import Data from './Data'
import Dedicated from './Dedicated'
import Career from './Career'
import Testimonial from './Testimonial'
import TraineeForm from './TraineeForm'
import ExperienceJoineeForm from './ExperienceJoineeForm'
import Digital_Marketing from './Components/CaseStudy/Digital Marketing/DM'
import Design from './Design'
import Figma from './Figma'
import Commerce from './Commerce'
import MobileApp from './MobileApp'
import Digital2 from './Digital2'
import Web4 from './Web4'
import Case_Study  from './Components/CaseStudy/CS'
import Graphic_Design from './Components/CaseStudy/Graphic Design/GD'
import App_Development from './Components/CaseStudy/App Development/AD'
import Web_Development from './Components/CaseStudy/Web Development/WD'
function App() {
  const [count, setCount] = useState(0)

  return (
 <>
  
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:id" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/product" element={<Product/>} />
        <Route path="/service/:id" element={<Service/>} />
        {/* <Route path="/casestudy" element={<CaseStudy/>} /> */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/web" element={<Web/>} />
        <Route path="/cloud" element={<Cloud/>} />
        <Route path="/data" element={<Data/>} />
        <Route path="/dedicated" element={<Dedicated/>} />
        <Route path="/career" element={<Career/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
        <Route path="/traineeform" element={<TraineeForm/>} />
        <Route path="/experienceJoineeForm" element={<ExperienceJoineeForm/>} />
        <Route path="/design" element={<Design/>} />
        <Route path="/figma" element={<Figma/>} />
        <Route path="/commerce" element={<Commerce/>} />
        <Route path="/mobileapp" element={<MobileApp/>} />
        <Route path="/digital2" element={<Digital2/>} />
        <Route path="/web4" element={<Web4/>} />
        <Route path="/case-study/CS" element={<Case_Study></Case_Study>}></Route>
        <Route path="/case-study/graphic-design/GD" element={<Graphic_Design></Graphic_Design>}></Route>
        <Route path="/case-study/digital-marketing/DM" element={<Digital_Marketing></Digital_Marketing>}></Route>
        <Route path="/case-study/app/AD" element={<App_Development></App_Development>}></Route>
        <Route path="/case-study/web/WD" element={<Web_Development></Web_Development>}></Route>
      </Routes>
      </>
  )
}

export default App
