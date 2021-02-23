/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import profile from "../../assets/img/profile/profile.jpg";
import "../about/about.styles.css";
import Button from "react-bootstrap/Button";


const About = () => {
    return (
        <div id="about">
        <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <hr size="2" noshade />
        <Container fluid>
            <Row className="pt-3 pb-5 align-items-center">
                    {/* profile pic*/}
                <Col xs={12} md={6}>
                <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile"src={profile}  fluid />
                </Row>
                </Col>

                    {/* profile description*/}

                 <Col xs={12} md={6}>
                 <Row className=" align-items-start p-2 my-details rounded"> {/* description */}
                 <center>Hello everyone! I am</center><br /><strong>&nbsp;Aman ghumra</strong>
                <br />I am currently an 3rd year undergrad at IIIT Vadodara , currently pursuing my bachelors in Information Technology.
                <br />
                I am a full stack web developer with react.js , node.js , express.js, mongoDB as my tech stack. I am also very keen in learning about new technologies.
                <br />
              
                Along with that, i have a fair share of hobbies such as playing football , binge watching animes and  Netflix as well as learning about stock market.
                <br />I love learning about new technologies, what problems are they solving and How can I use them to build better and scalable products.
                <br /> <br />        
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="#contact">
                      <Button className="m-2" variant="outline-primary"><i class="fab fa-tumblr"></i>&nbsp;
                        Let's talk
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href= "#resume" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-success"><i class="fas fa-file"></i>&nbsp;
                        My Resume
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://github.com/Aman7127" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark"><i class="fab fa-github"></i>&nbsp;
                        GitHub
                      </Button>
                    </a>
                  </div>
                  <div>
                    <a href="https://www.linkedin.com/in/aman-ghumra-491031205/" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-info"><i class="fab fa-linkedin"></i>&nbsp;
                        LinkedIn
                      </Button>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;