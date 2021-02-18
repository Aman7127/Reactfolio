/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from 'react-bootstrap/Nav'

const Mynavbar = () => {
    return(
        <>
        <Navbar sticky="top" fixed="top" collapseOnSelect expand="sm" bg="dark" variant="dark">
  <Navbar.Brand href="#home"><strong>My portfolio</strong> </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className="hello" href="#about"><strong>ABOUT</strong></Nav.Link><br></br>
      <Nav.Link href="#projects"><strong>PROJECTS</strong></Nav.Link>
      <Nav.Link href="#skills"> <strong>SKILLS</strong> </Nav.Link>
      <Nav.Link href="#contact"><strong>CONTACT ME</strong></Nav.Link>      
    </Nav>
  
  </Navbar.Collapse>
</Navbar>

        </>

    )
}

export default Mynavbar;



