
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from './assets/logo9.png';
import './Navbar.css';

const serviceDropdown = [
  { id: 1, title: "AI", path: "/ai", cName: "submenu-item" },
  { id: 2, title: "Mobile Application Development", path: "/mobile", cName: "submenu-item" },
  { id: 1, title: "Web Application Development", path: "/web2", cName: "submenu-item" },
  { id: 3, title: "UX/UI Design", path: "/ux", cName: "submenu-item" },
  { id: 4, title: "Digital Marketing", path: "/marketing", cName: "submenu-item" },
];

const productDropdown = [
  { id: 2, title: "Ecommerce Business", path: "/commerce" },
  { id: 1, title: "Food Delivery Business", path: "/product" },
  // { id: 3, title: "Product 3", path: "/product/3" },
];

const aboutDropdown = [
  { id: 1, title: "About", path: "/about-us" },
  // { id: 2, title: "Testimonial", path: "/testimonial" },
  { id: 3, title: "Career With Us", path: "/career-with-us" },
];

const dropdownIcon = <span className="dropdown-icon">&#9660;</span>;

function Dropdown({ visible, items }) {
  return (
    <ul className={`services-submenu ${visible ? 'show' : ''}`}>
      {items.map((item) => (
        <li key={item.id}>
          <Link to={item.path} className="submenu-item">
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}

const CNavbar = () => {
  const [serviceDropdownVisible, setServiceDropdownVisible] = useState(false);
  const [productDropdownVisible, setProductDropdownVisible] = useState(false);
  const [aboutDropdownVisible, setAboutDropdownVisible] = useState(false);
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  return (
    <nav style={{border:''}} className="navbar">
      <div style={{border:''}} className="container">
        <div style={{border:''}} className="navbar-brand">
          <a href="/">
            <img src={logo} className="logo " alt="Logo" style={{ width: '198px', marginLeft:"0.2rem", marginTop:"-2rem"}} />
          </a>
        </div>
        <div style={{marginRight:"-4rem", marginTop:"-6rem"}} className="navbar-toggle" onClick={toggleMobileMenu}>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </div>
        <div style={{ marginTop:"-100px"}} className={`navbar-collapse ${mobileMenuVisible ? 'show' : ''}`}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onMouseEnter={() => setAboutDropdownVisible(true)}
                onMouseLeave={() => setAboutDropdownVisible(false)}
              >
                About Us {dropdownIcon}
                <Dropdown visible={aboutDropdownVisible} items={aboutDropdown} />
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onMouseEnter={() => setServiceDropdownVisible(true)}
                onMouseLeave={() => setServiceDropdownVisible(false)}
              >
                Services {dropdownIcon}
                <Dropdown visible={serviceDropdownVisible} items={serviceDropdown}/>
              </div>
            </li>
            <li className="nav-item">
              <div
                className="nav-link"
                onMouseEnter={() => setProductDropdownVisible(true)}
                onMouseLeave={() => setProductDropdownVisible(false)}
              >
                Products {dropdownIcon}
                <Dropdown visible={productDropdownVisible} items={productDropdown} />
              </div>
            </li>
            {/* <li className="nav-item">
              <Link to="/faq" className="nav-link">FAQ</Link>
            </li> */}
            <li className="nav-item">
              <Link to="/blog" className="nav-link">Blog</Link>
            </li>
            <li className="nav-item">
              <Link to="/case-study/CS" className="nav-link">Case Study</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default CNavbar;





// import React, { useState } from 'react';
// import Logo from './assets/logo.png'
// import { Link } from 'react-router-dom';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-gray-800 text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 " style={{ maxWidth: '90rem' }} >
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0">
//               <img className="h-20 " src={Logo} alt="Logo" />
//             </div>
//           </div>
//           <div className="hidden md:flex items-center space-x-4">
//             <Link to='/home' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
//             <Link to ="/about/1" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</Link>
//             <Link to ="/product" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Product</Link>
//             <Link to ="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</Link>
//             <Link to='/blogs' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Blogs</Link>
//             <Link to ="/case-study/CS" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Case Study</Link>
//             <Link to='/faq-page' className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">FAQ</Link>
//             <Link to ="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</Link>
//           </div>
//           <div className="flex md:hidden">
//             <button
//               onClick={toggleMenu}
//               className="text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white p-2 rounded-md"
//             >
//               <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
//                 {isOpen ? (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//                 ) : (
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
//                 )}
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           <Link to ="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
//           <Link to="/about/1" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
//           <Link to="/product" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Product</Link>
//           <Link to ="/services" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</Link>
//           <Link to ="/blogs" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Blogs</Link>
//           <Link to ="/case-study/CS" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Case Study</Link>
//           <Link to ="/faq-page" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">FAQ</Link>
//           <Link to ="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
