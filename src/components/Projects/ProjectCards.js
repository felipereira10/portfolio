import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card
      className="project-card-view"
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "12px",
        backgroundColor: "#0f172a",
        border: "1px solid rgba(96, 211, 231, 0.3)",
        overflow: "hidden",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "200px",
          width: "100%",
          objectFit: "contain",
          backgroundColor: "#2f446e9a",
          padding: "10px",
          borderBottom: "1px solid rgba(96, 211, 231, 0.2)",
        }}
      />

      <Card.Body style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        <Card.Title style={{ color: "#60d3e7", fontWeight: 600 }}>
          {props.title}
        </Card.Title>

        <Card.Text
          style={{
            textAlign: "justify",
            color: "#cbd5e1",
            fontSize: "0.95rem",
            flex: 1, // empurra os botões pra baixo
          }}
        >
          {props.description}
        </Card.Text>

        <div style={{ marginTop: "auto" }}>
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{
              backgroundColor: "#60d3e7",
              border: "none",
              color: "#0f172a",
              fontWeight: 600,
            }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{
                marginLeft: "10px",
                backgroundColor: "#60d3e7",
                border: "none",
                color: "#0f172a",
                fontWeight: 600,
              }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
