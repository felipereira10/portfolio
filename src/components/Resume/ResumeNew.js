import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import * as pdfjsLib from "pdfjs-dist";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  const pdf = process.env.PUBLIC_URL + "/Felipe-Pereira.pdf";

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container
        fluid
        className="resume-section d-flex flex-column align-items-center justify-content-center"
        style={{
          minHeight: "100vh",
          background: "rgba(10, 10, 25, 0.6)",
          backdropFilter: "blur(8px)",
          paddingTop: "60px",
          paddingBottom: "60px",
        }}
      >
        <Particle />

        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "40px",
          }}
        >
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{
              maxWidth: "250px",
              marginRight: "15px",
              background: "rgba(0, 123, 255, 0.2)",
              border: "1px solid rgba(0, 123, 255, 0.4)",
              boxShadow: "0 0 10px rgba(0, 123, 255, 0.5)",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(0, 123, 255, 0.4)";
              e.target.style.boxShadow = "0 0 20px rgba(0, 123, 255, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(0, 123, 255, 0.2)";
              e.target.style.boxShadow = "0 0 10px rgba(0, 123, 255, 0.5)";
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV in English
          </Button>

          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{
              maxWidth: "250px",
              background: "rgba(0, 123, 255, 0.2)",
              border: "1px solid rgba(0, 123, 255, 0.4)",
              boxShadow: "0 0 10px rgba(0, 123, 255, 0.5)",
              transition: "all 0.3s ease-in-out",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "rgba(0, 123, 255, 0.4)";
              e.target.style.boxShadow = "0 0 20px rgba(0, 123, 255, 0.7)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "rgba(0, 123, 255, 0.2)";
              e.target.style.boxShadow = "0 0 10px rgba(0, 123, 255, 0.5)";
            }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV em Português
          </Button>
        </Row>

        <Row
          className="resume"
          style={{
            justifyContent: "center",
            width: "100%",
          }}
        >
          <div
            style={{
              background: "rgba(20, 20, 40, 0.8)",
              borderRadius: "16px",
              padding: "30px",
              boxShadow: "0 0 30px rgba(0, 123, 255, 0.3)",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <Document file={pdf} className="d-flex justify-content-center">
              <Page pageNumber={1} scale={width > 786 ? 1.5 : 0.6} />
            </Document>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;