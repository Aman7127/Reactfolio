/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Mynavbar from "./components/Navbar/mynavbar.component";
import Mycarousal from "./components/carousel/mycarousel.components";
import TitleMessage from "./components/my-title/my-title.component";
import About from "./pages/about/about.component";
import { Parallax , Background } from "react-parallax";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import Container from "react-bootstrap/Container";
import Flip from "react-reveal/Flip";
import Skills from "./pages/skills/skills.component";
import TimeLine from "./components/projects-timeline/projects-timeline.component";



import "./App.css";


const App = () => {
  return (
    <div className="App" style={{ position: "relative" }}>
    <Mynavbar />
    
      <Mycarousal />
      
      
     
      <TitleMessage />
      
      
              
      
 
      
      {/* <Particles
        className="particles particles-box"
        params={particlesOptions}
      /> */}

      <div>
      <Parallax strength={300}>
        <Background className="custom-bg">
            <img src="https://images.pexels.com/photos/950241/pexels-photo-950241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="bg-1" />
            <hr></hr>
        </Background>
    
            <Container className="container-box rounded">
              <Fade left>
                <About />
              </Fade>
            </Container>
            
          
        </Parallax>
      </div>
      
        <Slide bottom duration={500}>
         
          <Skills />
        </Slide>
        <div>
        <Container className="container-box rounded">
        <Slide bottom duration={500}>
          <hr />
          <TimeLine />
        </Slide>
      </Container>
        </div>
     
      
      </div>
  );
};

export default App;
