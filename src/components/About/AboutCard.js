import React from "react";
import Card from "react-bootstrap/Card";
import { GoIssueClosed } from "react-icons/go";

function AboutCard() {
  return (
    <>
      <Card className="quote-card-view">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p style={{ textAlign: "justify" }}>
              Hi everyone! I’m <span className="blue">Felipe Pereira</span> from{" "}
              <span className="blue"> São Paulo, Brazil</span>.
              <br />
              I’m currently working as a{" "}
              <span className="blue">Intern Software Developer</span> at{" "}
              <span className="blue">Redenção Turismo</span>.
              <br />I hold two Degrees in{" "}
              <span className="blue">
                Systems Analysis and Development
              </span> and <span className="blue">Logistics</span> from{" "}
              <span className="blue">FATEC São José dos Campos</span>.
              <br />
              <br />
              Outside of coding, I love engaging in activities that keep me
              creative and inspired:
            </p>

            <ul>
              <li className="about-activity">
                <span className="blue">
                  {" "}
                  <GoIssueClosed />{" "}
                </span>{" "}
                I’m passionate about technology and innovation — I love
                exploring AI, automation, and everything that feels like magic
                but is actually code.
              </li>

              <li className="about-activity">
                <span className="blue">
                  {" "}
                  <GoIssueClosed />{" "}
                </span>{" "}
                I’m always learning something new — tech never stops, and
                neither do I.
              </li>

              <li className="about-activity">
                <span className="blue">
                  {" "}
                  <GoIssueClosed />{" "}
                </span>{" "}
                I enjoy creating projects from scratch and bringing ideas to
                life through code.
              </li>
            </ul>

            <p style={{ color: "#91d2ddff" }}>
              "I've always been a dreamer, that's what keeps me alive!"
            </p>
            <footer className="blockquote-footer">Racionais MC's</footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
}

export default AboutCard;
