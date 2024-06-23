import React, { useState } from 'react';
import { Link } from "react-router-dom";
import logo from './assets/logo9.png';
import './Navbar.css';

const serviceDropdown = [
  { id: 1, title: "AI", path: "/ai", cName: "submenu-item" },
<<<<<<< HEAD
  { id: 2, title: "Mobile Application Development", path: "/mobile-application-development", cName: "submenu-item" },
  { id: 3, title: "Web Application Development", path: "/web-application-development", cName: "submenu-item" },
  { id: 4, title: "UX/UI Design", path: "/ui/ux-design", cName: "submenu-item" },
  { id: 5, title: "Digital Marketing", path: "/digital-marketing", cName: "submenu-item" },
];

const productDropdown = [
  { id: 1, title: "Bellway Grocery", path: "/bellway-grocery" },
  { id: 2, title: "Delicious Meals Delivery", path: "/delicious-meals-delivery" },
  { id: 3, title: "Fresh and Red Delivery", path: "/fresh-and-red-delivery" },
=======
  { id: 2, title: "Mobile Application Development", path: "/mobile1", cName: "submenu-item" },
  { id: 3, title: "Web Application Development", path: "/web1", cName: "submenu-item" },
  { id: 4, title: "UX/UI Design", path: "/ux", cName: "submenu-item" },
  { id: 5, title: "Digital Marketing", path: "/digital", cName: "submenu-item" },
];

const productDropdown = [
  { id: 1, title: "Bellway Grocery", path: "/commerce" },
  { id: 2, title: "Delicious Meals Delivery", path: "/product" },
  { id: 3, title: "Fresh and Red Delivery", path: "/fresh" },
>>>>>>> b8d297e54582819edc738b99ff0bc0fa21e077e5
  { id: 4, title: "Ur Fine", path: "/urfine" },
  { id: 5, title: "Team-11", path: "/team11" },
];

const aboutDropdown = [
  { id: 1, title: "About", path: "/about-us" },
  { id: 2, title: "Career With Us", path: "/career-with-us" },
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
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <a href="/">
            <img src={logo} className="logo" alt="Logo" />
          </a>
        </div>
        <div className="navbar-toggle" onClick={toggleMobileMenu}>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
          <span className="navbar-toggler-icon"></span>
        </div>
        <div className={`navbar-collapse ${mobileMenuVisible ? 'show' : ''}`}>
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
                <Dropdown visible={serviceDropdownVisible} items={serviceDropdown} />
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
