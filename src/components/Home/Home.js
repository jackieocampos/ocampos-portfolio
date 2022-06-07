import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/jackie.png";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
 
    <section>
      <Container fluid className="home-section" id="home">
      
        <Container className="home-content">
        
          <Row>
          
            <Col md={6} className="home-header">
             
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Jackie Ocampos</strong>
              </h1>

              <p className="heading-description blockquote">
               I am studying at Caraga State University as fourth year
              student of Information Technology.
               
              </p>

              <div className="heading-type" >
                <TypeWriter />
              </div>
            </Col>

            <Col md={5}>
              <img src={myImg} className="profile-pic" alt="avatar" />
            </Col>
          </Row>
        </Container>
        </Container>
      
      
    </section>
  
  );
}

export default Home;
