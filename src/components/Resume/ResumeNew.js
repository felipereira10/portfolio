import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import Folder from './Folder';
// import { Document, Page, pdfjs } from "react-pdf";

// O PDF.js worker não é necessário para o <iframe>, mas se você precisar
// usar outros recursos do PDF.js, esta é a forma correta de configurá-lo.
// pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  // O caminho do PDF, que deve estar na sua pasta 'public'
  const pdf = "/Felipe-Pereira.pdf";
  const pdfUrlWithParams = `${pdf}#toolbar=0&zoom=100,0,0`;

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

        {/* 1. Botões de Download */}
        <Row
          style={{
            justifyContent: "center",
            position: "relative",
            marginBottom: "40px",
          }}
        >
          {/* Botão em Inglês */}
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

          {/* Botão em Português */}
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

        {/* 2. Visualizador do Currículo (iframe) */}
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
              width: width > 786 ? "80%" : "100%",
              height: "1000px", // Define a altura para o iframe
              overflow: "hidden",
            }}
          >
            <iframe
              src={pdfUrlWithParams}
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: "8px",
                overflow: "auto",
              }}
              title="Visualizador de Currículo"
            >
              <p>
                O seu navegador não suporta a visualização de PDF integrada.
              </p>
            </iframe>

            <div style={{ height: "600px", position: "relative" }}>
              <Folder size={2} color="#5227FF" className="custom-folder" />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
