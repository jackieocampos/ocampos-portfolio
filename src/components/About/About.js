import React from "react";
import { Container, Row,  } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import developer from "../../Assets/developer.jpg";



function About() {
  return (
    <Container fluid className="about-section">
      <Container style={{padding: "50px"}}>
        <Row style={{padding: "15px" }}>
      
            <h1 style={{ fontSize: "2.1em", paddingTop: "0px"}}>
              <strong className="purple">About Jackie Ocampos</strong>
            </h1>
            <Aboutcard />
          
          <Row className="about-img">
            <img src={developer} alt="about" className="image-style"  />
    
          </Row>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
