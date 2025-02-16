import React from "react";
import "./NavbarHeader.css";

import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container } from "react-bootstrap";
// import { Button, Col, Container, Nav, Navbar, NavbarCollapse, NavbarToggle, Row } from "react-bootstrap";

const NavbarHeader = () => {

  // const navItems = [
  //   {
  //     title: "Home",
  //     href: "/",
  //   },
  //   {
  //     title: "About",
  //     href: "/about",
  //   },
  //   {
  //     title: "Contact",
  //     href: "/contact",
  //   },
  //   {
  //     title: "Our Location",
  //     href: "/location",
  //   },
  //    Add more nav items as needed...
  // ]

  return (
    <div className="container">
    {/* Navbar */}
     <nav>
      <div className="row">
        <div className="col-md-12 navbar">
            <div className="brand">
              <h1>Hamxa_Shah.</h1>
            </div>
            <div className="social_links">
              <a href="http://www.linkedin.com/in/muhammadhamzashah462" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/Hamxak462"><i className="bi bi-github"></i></a>
            </div>
        </div>
      </div>
     </nav>

    </div>
  );
};

export default NavbarHeader;
