import React from "react";
import Card from "react-bootstrap/Card";
import { GoIssueClosed } from "react-icons/go";
import RecipeReviewCard from "./RecipeReviewCard";

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
            <span className="blue">Systems Analysis and Development</span> and <span className="blue">Logistics</span> from{" "}
            <span className="blue">FATEC São José dos Campos</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
            creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <span className="blue"> <GoIssueClosed /> </span> I love games — they improve my logical thinking, introduced me to amazing stories, and helped me make great friends. The GOAT is Red Dead Redemption 2!!!
            </li>
            <li className="about-activity">
              <span className="blue"> <GoIssueClosed /> </span> I practice Muay Thai and Brazilian Jiu Jitsu, which taught me discipline and respect. My idol is the Poatan
            </li>
            <li className="about-activity">
              <span className="blue"> <GoIssueClosed /> </span> I love anime and manga, because I have been taught a lot since I was a kid! (Example: One Piece, Hunter x Hunter, Death Note, Nanatsu no Taizai and many others too)
            </li>
            <li className="about-activity">
              <span className="blue"> <GoIssueClosed /> </span>I'm passionate about traveling and discovering new cultures — I love talking to people and learning their customs.
            </li>
            <li className="about-activity">
              <span className="blue"> <GoIssueClosed /> </span> The gym keeps me physically and mentally strong — it has always helped me a lot.
            </li>
            <li className="about-activity">
              <span className="blue"> <GoIssueClosed /> </span> I love listening to music, I basically have it on all day. My taste is mixed — classical music, pagode, trap, and more. My favorite song is “Tá Escrito” by Grupo Revelação.
            </li>
            <li className="about-activity">
              <span className="blue"> <GoIssueClosed /> </span> And of course, I have my team. Corinthians since I was born — thanks to my hero, MY DAD!
            </li>
          </ul>

          <p style={{ color: "#91d2ddff" }}>
            "I've always been a dreamer, that's what keeps me alive!"
          </p>
          <footer className="blockquote-footer">Racionais MC's</footer>
        </blockquote>
      </Card.Body>
    </Card>
    <RecipeReviewCard />
    </>
  );
}

export default AboutCard;