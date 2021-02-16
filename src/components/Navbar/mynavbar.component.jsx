/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'

const Mynavbar = () => {
    return(
        <>
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">My portfolio </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#about">ABOUT</Nav.Link>
      <Nav.Link href="#projects">PROJECTS</Nav.Link>
      <Nav.Link href="#skills"> SKILLS </Nav.Link>
      <Nav.Link href="#contact">CONTACT ME</Nav.Link>      
    </Nav>
  
  </Navbar.Collapse>
</Navbar>

        </>

    )
}

export default Mynavbar;



