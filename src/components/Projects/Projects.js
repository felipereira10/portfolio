import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import crud from "../../Assets/Projects/CRUDProject.png";
import fspay from "../../Assets/Projects/FSPayProject.png";
import gsw from "../../Assets/Projects/GSWProject.png";
import jjm from "../../Assets/Projects/JJMProject.png";
import gastronomy from "../../Assets/Projects/MyGastronomyProject.png";
import pro4tech from "../../Assets/Projects/Pro4TechProject.png";
import xertica from "../../Assets/Projects/Xertica.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="blue">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gastronomy}
              isBlog={false}
              title="My Gastronomy"
              description="An online ordering app with menu management and administrative preferences."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://www.youtube.com/watch?v=eP41sppiERA"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fspay}
              isBlog={false}
              title="FSPay"
              description="A fintech app developed to practice modern technologies and stack integration."
              ghLink="https://github.com/felipereira10/FSPay"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crud}
              isBlog={false}
              title="CRUD FullStack"
              description="A CRUD app built for learning purposes with fullstack integration."
              ghLink="https://github.com/felipereira10/CRUD-FullStack"
              // demoLink="https://editor.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={xertica}
              isBlog={false}
              title="Integrated Project VI"
              description="Nutrition app for Xertica.ai, powered by AI and designed to provide insights through data analysis."
              ghLink="https://github.com/DriftOps/API-VI"
              demoLink="https://www.youtube.com/watch?v=s6LwfTT1MOU"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gsw}
              isBlog={false}
              title="Integrated Project V"
              description="Mobile app for GSW company to manage expense reimbursements."
              ghLink="https://github.com/DriftOps/API-V"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jjm}
              isBlog={false}
              title="Integrated Project IV"
              description="Logistics system for JJM Log company to integrate its sectors and activities."
              ghLink="https://github.com/DriftOps/API-IV"
              demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
