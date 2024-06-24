import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Contact from './Contact';
import Product from './Product';
import Service from './Service';
import AboutUs from './Components/About/AboutUs';
import Career from './Components/About/Career';
import TraineeForm from './Components/About/TraineeForm';
import ExperienceJoineeForm from './Components/About/ExperienceJoineeForm';
import Blogs from './Components/Blogs/Blogs';
import MobileBlog from './Components/Blogs/MobileApp';
import SeoManagement from './Components/Blogs/SeoManagement';
import EcommerceBlog from './Components/Blogs/EcommerceBlog';
import LinkingBlog from './Components/Blogs/LinkingBlog';
import FutureTech from './Components/Blogs/FutureTech';
import ReactBlog from './Components/Blogs/ReactBlog';
import LaravelBlog from './Components/Blogs/LaravelBlog';
import DigitalMarketing from './Components/Blogs/DigitalMarketing';
import CyberSecurity from './Components/Blogs/CyberSecurity';
import CryptoBlog from './Components/Blogs/CryptoBlog';
import Case_Study from './Components/CaseStudy/CS';
import App_Development from './Components/CaseStudy/App Development/AD';
import GoToAstro_AD from './Components/CaseStudy/App Development/GoToAstro';
import FlyingVolt_AD from './Components/CaseStudy/App Development/FlyingVolt';
import Lazy_Bazar_AD from './Components/CaseStudy/App Development/Lazy_Bazar';
import Cart_Eats_AD from './Components/CaseStudy/App Development/Cart_Eats';
import Digital_Marketing from './Components/CaseStudy/Digital Marketing/DM';
import Ur_Fine_DM from './Components/CaseStudy/Digital Marketing/Ur_Fine';
import OneAppPlus_DM from './Components/CaseStudy/Digital Marketing/OneAppPlus';
import CalorieCare_DM from './Components/CaseStudy/Digital Marketing/CalorieCare';
import Seo from './Components/CaseStudy/Digital Marketing/Seo';
import Graphic_Design from './Components/CaseStudy/Graphic Design/GD';
import Ur_Fine from './Components/CaseStudy/Graphic Design/Ur_Fine';
import Make_Your_Trip from './Components/CaseStudy/Graphic Design/MakeYourTrip';
import PropertyDekho_GD from './Components/CaseStudy/Graphic Design/PropertyDekho';
import HazelJewells_GD from './Components/CaseStudy/Graphic Design/HazelJewells';
import Team_11 from './Components/CaseStudy/Graphic Design/Team11';
import MoviKat from './Components/CaseStudy/Graphic Design/MoviKat';
import Web_Development from './Components/CaseStudy/Web Development/WD';
import Lazy_Bazar from './Components/CaseStudy/Web Development/Lazy_Bazar';
import GoToAstro from './Components/CaseStudy/Web Development/GoToAstro';
import PropertyDekho from './Components/CaseStudy/Web Development/PropertyDekho';
import Cart_Eats from './Components/CaseStudy/Web Development/Cart_Eats';
import OneAppPlus from './Components/CaseStudy/Web Development/OneAppPlus';
import CalorieCare from './Components/CaseStudy/Web Development/CalorieCare';
import FlyingVolt from './Components/CaseStudy/Web Development/FlyingVolt';
import HazelJewells from './Components/CaseStudy/Web Development/HazelJewells';
import Web from './Web';
import Cloud from './Cloud';
import Data from './Data';
import Dedicated from './Dedicated';
import Design from './Design';
import Figma from './Figma';
import Commerce from './Product2';
import Digital2 from './Digital2';
import Web4 from './Web4';
import Urfine from './Urfine';
import AI from './AI';
import Mobile1 from './Mobile1';
import Web1 from './Web1';
import Ux from './Ux';
import Digitalmarketing from './Digitalmarketing';
import Fresh from './Fresh';
import Team11 from './Team11';
import ScrollToTop from './ScrolltoTop';
import Loader from './Loader';
import CircleLoader from "react-spinners/CircleLoader";
// import Movikat from './Movikat2'
import Movikat2 from './Movikat2'
import MakeYourTrip from './MakeYourTrip';
import GoHotel from './GoHotel';
import MultiService from './MultiService';
import DailyBills from './DailyBills';
import HomeC from './HomeC';
import Foodo from './Foodo';
import BellStore from './BellStore';
import Brobo from './Components/Brobo'
function App() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Show loader on route change
    setLoading(true);

    // Hide loader after route change
    setTimeout(() => {
      setLoading(false);
    }, 200); // Adjust the timeout as needed
  }, [location]);
  useEffect(() => {
    if (loading) {
      document.body.classList.add('loading-background');
    } else {
      document.body.classList.remove('loading-background');
    }
  }, [loading]);

  return (
    <>
      {loading?
      <div className='loader-container'>
       <CircleLoader
       color={'red'}
       loading={loading}

       size={90}
      
     />
     </div>
  :
      <Routes>
        <Route path='/blog' element={<Blogs />} />
        <Route path="/blogs/mobileApplicationBlog" element={<MobileBlog />} />
        <Route path="/blogs/seoManagementBlog" element={<SeoManagement />} />
        <Route path="/blogs/scratchEcommerceBlog" element={<EcommerceBlog />} />
        <Route path="/blogs/internalLinkingBlog" element={<LinkingBlog />} />
        <Route path="/blogs/futureTechBlog" element={<FutureTech />} />
        <Route path="/blogs/reactBlog" element={<ReactBlog />} />
        <Route path="/blogs/laravelBlog" element={<LaravelBlog />} />
        <Route path="/blogs/digitalMarketingBlog" element={<DigitalMarketing />} />
        <Route path="/blogs/cyberSecurityBlog" element={<CyberSecurity />} />
        <Route path="/blogs/cryptoMarketBlog" element={<CryptoBlog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/career-with-us" element={<Career />} />
        <Route path="/traineeForm" element={<TraineeForm />} />
        <Route path="/experienceJoineeForm" element={<ExperienceJoineeForm />} />
        <Route path="/case-study/web/lazy-bazar" element={<Lazy_Bazar />} />
        <Route path="/case-study/graphic-design/ur-fine" element={<Ur_Fine />} />
        <Route path="/case-study/graphic-design/make-your-trip" element={<Make_Your_Trip />} />
        <Route path="/case-study/graphic-design/team-11" element={<Team_11 />} />
        <Route path="/case-study/graphic-design/property-dekho" element={<PropertyDekho_GD />} />
        <Route path="/case-study/graphic-design/GD" element={<Graphic_Design />} />
        <Route path="/case-study/graphic-design/hazel-jewells" element={<HazelJewells_GD />} />
        <Route path="/case-study/graphic-design/movikat" element={<MoviKat />} />
        <Route path="/case-study/web/eat-cart" element={<Cart_Eats />} />
        <Route path="/case-study/digital-marketing/DM" element={<Digital_Marketing />} />
        <Route path="/case-study/digital-marketing/seo" element={<Seo />} />
        <Route path="/case-study/digital-marketing/ur-fine" element={<Ur_Fine_DM />} />
        <Route path="/case-study/digital-marketing/calorie-care" element={<CalorieCare_DM />} />
        <Route path="/case-study/digital-marketing/oneapp-plus" element={<OneAppPlus_DM />} />
        <Route path="/case-study/app/AD" element={<App_Development />} />
        <Route path="/case-study/app/eat-cart" element={<Cart_Eats_AD />} />
        <Route path="/case-study/app/lazy-bazar" element={<Lazy_Bazar_AD />} />
        <Route path="/case-study/app/goto-astro" element={<GoToAstro_AD />} />
        <Route path="/case-study/app/flying-volt" element={<FlyingVolt_AD />} />
        <Route path="/case-study/web/WD" element={<Web_Development />} />
        <Route path="/case-study/web/goto-astro" element={<GoToAstro />} />
        <Route path="/case-study/web/property-dekho" element={<PropertyDekho />} />
        <Route path="/case-study/web/oneapp-plus" element={<OneAppPlus />} />
        <Route path="/case-study/web/calorie-care" element={<CalorieCare />} />
        <Route path="/case-study/web/flying-volt" element={<FlyingVolt />} />
        <Route path="/case-study/web/hazel-jewells" element={<HazelJewells />} />
        <Route path="/case-study/CS" element={<Case_Study />} />
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/service/:id" element={<Service />} />
        <Route path="/web" element={<Web />} />
        <Route path="/cloud" element={<Cloud />} />
        <Route path="/data" element={<Data />} />
        <Route path="/dedicated" element={<Dedicated />} />
        <Route path="/design" element={<Design />} />
        <Route path="/figma" element={<Figma />} />
        <Route path="/commerce" element={<Commerce />} />
        <Route path="/digital2" element={<Digital2 />} />
        <Route path="/web4" element={<Web4 />} />
        <Route path="/ai" element={<AI />} />
        <Route path="/mobile1" element={<Mobile1 />} />
        <Route path="/web1" element={<Web1 />} />
        <Route path="/ux" element={<Ux />} />
        <Route path='/digital' element={<Digitalmarketing />} />
        <Route path='/fresh' element={<Fresh />} />
        <Route path='/urfine' element={<Urfine />} />
        <Route path='/team11' element={<Team11 />} />
        <Route path ='/foodo' element ={<Foodo/>}/>
        <Route path ='/home-C' element ={<HomeC/>}/>
        <Route path ='/make-your-trip' element ={<MakeYourTrip/>}/>
        <Route path ='/go-hotel' element ={<GoHotel/>}/>
        <Route path ='/multi-service' element ={<MultiService/>}/>
        <Route path ='/daily-bills' element ={<DailyBills/>}/>
        <Route path ='/movikat2' element ={<Movikat2/>}/>
        <Route path ='/bell-store' element ={<BellStore/>}/>
        <Route path ='/brobo' element ={<Brobo/>}/>
      </Routes>
      
}
    </>
  );
}
export default App;
