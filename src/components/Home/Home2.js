import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import myImg from "../../Assets/home/lightbulb.svg";

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
              I’m a Full-Stack Developer with over 2 years of experience
              building scalable, high-performance web applications. My core
              expertise is in the modern JavaScript ecosystem, specifically
              using <b className="blue">React</b> and{" "}
              <b className="blue">Node.js</b> across the stack.
              <br />
              <br />I enjoy tackling complex challenges, particularly in
              developing robust <b className="blue">Web Applications</b>. I
              leverage my proficiency in languages like{" "}
              <b className="blue">Python</b>, <b className="blue">TypeScript</b>
              , <b className="blue">C++</b>, and <b className="blue">Rust</b> to
              build solutions from the database (<b className="blue">MongoDB</b>
              , <b className="blue">MySQL</b>) to the cloud (
              <b className="blue">AWS</b> and{" "}
              <b className="blue">Google Cloud certified</b>).
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <div className="tilt-placeholder">
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{
                  maxHeight: "450px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              />
            </div>
          </Col>
        </Row>

        {/* EXPERIENCES SECTION */}
        <h1 style={{ fontSize: "2.6em" }}>
          MY <span className="blue"> EXPERIENCES </span>
        </h1>
        <Row style={{ marginTop: "60px" }}>
          <Col md={6}>
            <Card className="exp-card bg-dark text-light">
              <Card.Body>
                <Card.Title>
                  <strong className="blue">
                    Full Stack Developer - Intern
                  </strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Redenção Turismo | Jan 2025 - Present
                </Card.Subtitle>
                <Card.Text>
                  Software development support with{" "}
                  <b>Python, Java, TypeScript, JavaScript, React</b> and{" "}
                  <b>Node.js</b>.
                  <br />
                  Database maintenance (<b>noSQL</b> & <b>SQL</b>), helpdesk
                  service, and Linux system administration.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6}>
            <Card className="exp-card bg-dark text-light">
              <Card.Body>
                <Card.Title>
                  <strong className="blue">Software Developer</strong>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  2023 - 2024
                </Card.Subtitle>
                <Card.Text>
                  Developed and maintained full-stack applications using{" "}
                  <b>React, FastAPI</b>, and <b>MySQL</b>.
                  <br />
                  Focused on building secure authentication systems and
                  interactive user dashboards.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* CALL TO ACTION */}
        <Row style={{ marginTop: "60px" }}>
          <Col>
            <p className="home-about-body">
              Reach out if you'd like to learn more about my work or discuss new
              opportunities!
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
