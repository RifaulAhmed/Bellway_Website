import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import * as Icons from "react-icons/fa";
import logo from './assets/logo9.png';
import './Navbar.css';

// Configuration
const navItems = [
  {
    id: 1,
    title: "Home",
    path: "/",
    cName: "nav-item",
  },
  {
    id: 2,
    title: "Services",
    path: "/services",
    cName: "nav-item",
  },
  {
    id: 3,
    title: "Products",
    path: "/products",
    cName: "nav-item",
  },
  {
    id: 4,
    title: "Contact Us",
    path: "/contact",
    cName: "nav-item",
  },
];

const serviceDropdown = [
  {
    id: 1,
    title: "Marketing",
    path: "/marketing",
    cName: "submenu-item",
  },
  {
    id: 2,
    title: "Consulting",
    path: "/consulting",
    cName: "submenu-item",
  },
  {
    id: 3,
    title: "Design",
    path: "/design",
    cName: "submenu-item",
  },
  {
    id: 4,
    title: "Development",
    path: "/development",
    cName: "submenu-item",
  },
];

// Dropdown Component
function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "services-submenu clicked" : "services-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

// Main Navbar Component
const CNavbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <Navbar bg="black" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <a href="/">
            <img
              style={{ marginLeft: '-200px' }}
              src={logo}
             width="530px"
              className="logo d-inline-block align-top"
              alt="Logo"
            />
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <a style={{ color: 'white', position: 'relative', left: '-53px', top: '18px' ,fontSize:'19px'}} href="/">Home</a>
            <NavDropdown title="About" id="about-dropdown">
              <a href="/about/1" className="dropdown-item">About Us</a>
              <a href="/testimonial" className="dropdown-item">Testimonial</a>
              <a href="/career" className="dropdown-item">Career With Us</a>
            </NavDropdown>
            <NavDropdown title="Product" id="product-dropdown">
              <a href="/product" className="dropdown-item">Food Delivery Business</a>
              <a href="/commerce" className="dropdown-item">Ecommerce Business</a>
              <a href="/product/3" className="dropdown-item">Product 3</a>
            </NavDropdown>
            <NavDropdown title="Service" id="service-dropdown">
              <a href="/service/1" className="dropdown-item">Web Application Development</a>
              <a href="/mobileapp" className="dropdown-item">Mobile Application Development</a>
              <a href="/design" className="dropdown-item">UX/UI Design</a>
            </NavDropdown>
            <NavDropdown title="Case Study" id="case-study-dropdown">
              <a href="/casestudy" className="dropdown-item">Graphic Design</a>
              <a href="/digital2" className="dropdown-item">Digital Marketing</a>
              <a href="/web4" className="dropdown-item">Web Development</a>
            </NavDropdown>
            <a style={{position: 'relative', top: '10px',fontSize:'19px'}}  href="/blog" className="nav-link">Blog</a>
            <a style={{position: 'relative', top: '10px',fontSize:'19px'}} href="/contact" className="nav-link">Contact</a>
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CNavbar;

// Styles
const styles = `
.navbar {
  height: 15vh;
  background: #1b1919;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navbar-logo {
  color: white;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 10rem;
}

.nav-items {
  display: flex;
  list-style: none;
  text-align: center;
  width: 70vw;
  justify-content: flex-end;
  margin-right: 2rem;
}

.nav-item {
  display: flex;
  align-items: center;
  height: 10vh;
}

.nav-item a {
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
  margin-right: 2rem;
  padding: 6px 16px;
  border-radius: 5px;
}

.nav-item a:hover {
  background: #d62b2b;
}

.services-submenu {
  width: 10rem;
  position: absolute;
  top: 67px;
  list-style: none;
  text-align: start;
}

.services-submenu li {
  background: rgb(0, 212, 212);
  cursor: pointer;
}

.services-submenu li a:hover {
  background: rgb(0, 175, 175);
}

.services-submenu.clicked {
  display: none;
}

.submenu-item {
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: white;
  padding: 16px;
}

.btn {
  border: none;
  background: transparent;
  padding: 6px 16px;
  font-size: 1.1rem;
  color: white;
  background: rgb(0, 212, 212);
  border-radius: 5px;
  transition: 0.3s all ease-out;
  cursor: pointer;
}

.btn:hover {
  color: rgb(0, 212, 212);
  background: black;
}
`;

// Inject styles into the document head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);











