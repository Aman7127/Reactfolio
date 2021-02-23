/* eslint-disable no-whitespace-before-property */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import react from "react";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import skillsdata from "./skills-data";
import "./skills.styles.css";



const Skills = () => {
    return( 
        <div id="skills">
         <div className="about">
        <h1 className="pt-3 text font-details-b pb-4">TECH SKILLS</h1>
        <hr size="2" noshade />
        <CardDeck>
        <Row className="d-flex justify-content-around">
        {/* -- frontend --  */}
        <Col md={4}>
            <Card className="focus mt-2 mb-2">
            <Card.Body>
            <Card.Title className="text-center  card-title">Frontend</Card.Title>
            <hr />
            <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillsdata.frontend.map((skill, index) => (
                    <span className="p-2" key={`${skillsdata.skillName}${index}`}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>

            </Card.Body>
            </Card>
            </Col>
                    {/* -- Backend -- */}


                    <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Backend</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillsdata.backend.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
           


                    {/* Hosting Platforms */}
            <Card className="focus mt-2 mb-2 ">
              <Card.Body>
                <Card.Title className="text-center  card-title">Hosting Platforms</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillsdata.hostingplatforms.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            
               {/* Version Control */}

               <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Version Control</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  <span className="p-2">
                    <a className="text-dark text-decoration-none" href={skillsdata. versioncontrol[0].link} target="_blank" rel="noopener noreferrer">
                      <Image src={skillsdata. versioncontrol[0].imgSrc} alt={skillsdata. versioncontrol[0].imgAltText} rounded className="image-style m-1"></Image> {skillsdata. versioncontrol[0].skillName}
                    </a>
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

       {/* Programming Languages */}
          <Col md={4}>
            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Programming Languages</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillsdata.programminglanguages.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>

            {/* Database */}

            <Card className="focus mt-2 mb-2">
              <Card.Body>
                <Card.Title className="text-center  card-title">Database</Card.Title>
                <hr />
                <Card.Text className="card-text d-flex justify-content-start flex-column">
                  {skillsdata.databases.map((skill, index) => (
                    <span className="p-2" key={index}>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </span>
                  ))}
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>

          

        </Row>
        </CardDeck>
        

        </div>
        </div>
    );
};

export default Skills;

