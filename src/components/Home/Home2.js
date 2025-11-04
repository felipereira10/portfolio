import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/home/developer.svg";
// import Tilt from "react-parallax-tilt"; 

function Home2() {

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="blue"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Full-Stack Developer with over 2 years of experience building scalable, high-performance web applications. My core expertise is in the modern JavaScript ecosystem, specifically using <b className="blue">React</b> and <b className="blue">Node.js</b> across the stack.
              
              <br />
              <br />
              I enjoy tackling complex challenges, particularly in developing robust <b className="blue">Web Applications</b>. I leverage my proficiency in languages like <b className="blue">Python</b>, <b className="blue">TypeScript</b>, <b className="blue">C++</b>, and <b className="blue">Rust</b> to build solutions from the database (<b className="blue">MongoDB</b>, <b className="blue">MySQL</b>) to the cloud (<b className="blue">AWS</b> and <b className="blue">Google Cloud certified</b>).
              
              <br />
              <br />
              Reach out if you'd like to learn more about my work or discuss new opportunities!
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            {/* O Tilt foi substituído por uma div simples para evitar o erro de dependência */}
            <div className="tilt-placeholder">
              <img 
                src={myImg} 
                className="img-fluid" 
                alt="avatar"
                style={{ maxHeight: "450px", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
