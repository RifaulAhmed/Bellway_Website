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
import CaseStudy from './CaseStudy';
import Blog from './Blog';
import Web from './Web'
import Cloud from './Cloud'
import Data from './Data'
import Dedicated from './Dedicated'
import Career from './Career'
import Testimonial from './Testimonial'
import TraineeForm from './TraineeForm'
import ExperienceJoineeForm from './ExperienceJoineeForm'
import Design from './Design'
import Figma from './Figma'
import Commerce from './Commerce'
import MobileApp from './MobileApp'
import Digital2 from './Digital2'
import Web4 from './Web4'
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
        <Route path="/casestudy" element={<CaseStudy/>} />
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
      </Routes>
      </>
  )
}

export default App
