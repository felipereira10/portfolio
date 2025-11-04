import React from "react";
import Card from "react-bootstrap/Card";
import { GoIssueClosed } from "react-icons/go";

function AboutCard() {
  return (
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
            <br />I hold two Graduations in{" "}
            <span className="blue">Análise e Desenvolvimento de Sistemas</span> and <span className="blue">Logística</span> from{" "}
            <span className="blue">FATEC São José dos Campos</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <span className="blue"> <GoIssueClosed /> </span> I love games, because it helps me in logical thinking, I met good stories and made great friends. The MVP is Red Dead Redemption 2!!!
            </li>
            <li className="about-activity">
              <span className="blue"> <GoIssueClosed /> </span> I practice Muay Thai and Brazilian Jiu Jitsu, from where I bring discipline and respect! My idol is the Poatan
            </li>
            <li className="about-activity">
              <span className="blue"> <GoIssueClosed /> </span> I love anime and manga, because I have been taught a lot since I was a kid! (Example: One Piece, Hunter x Hunter, Death Note, Nanatsu no Taizai and many others too)
            </li>
            <li className="about-activity">
              <span className="blue"> <GoIssueClosed /> </span> I am passionate about traveling and exploring new places, it is curious to know new cultures and customs. Cause I like talking a lot
            </li>
            <li className="about-activity">
              <span className="blue"> <GoIssueClosed /> </span> And of course, I have my heart team. Corinthians since I was born, thanks to my hero, MY DAD!
            </li>
          </ul>

          <p style={{ color: "#91d2ddff" }}>
            "I've always been a dreamer, that's what keeps me alive!"{" "}
          </p>
          <footer className="blockquote-footer">Racionais MC's</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
