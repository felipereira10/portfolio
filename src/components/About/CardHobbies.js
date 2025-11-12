import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import GameImg from "../../Assets/about/RD2.webp";
import ThaiImg from "../../Assets/about/Thai.webp";
import AnimeImg from "../../Assets/about/luffy.gif";
import TravelImg from "../../Assets/about/farellones.webp";
import GymImg from "../../Assets/about/gym.webp";
import TeamImg from "../../Assets/about/Corinthians.webp";

const items = [
  {
    title: "Games",
    img: GameImg,
    text: "I love games — they improve my logical thinking, introduced me to amazing stories, and helped me make great friends. The GOAT is Red Dead Redemption 2!!!",
    extra:
      "I’ve always loved open-world games that tell deep, emotional stories. Rockstar set the bar with RDR2 — it’s not just a game, it’s art.",
  },
  {
    title: "Martial Arts",
    img: ThaiImg,
    text: "I practice Muay Thai and Brazilian Jiu Jitsu, which taught me discipline and respect. My idol is the Poatan.",
    extra:
      "The combination of Muay Thai and BJJ gave me focus and self-control — training is a way of life, not just a hobby.",
  },
  {
    title: "Animes and Manga",
    img: AnimeImg,
    text: "I love anime and manga — they’ve taught me a lot since I was a kid! (One Piece, Hunter x Hunter, Death Note, Kimetsu no Yaiba, and more).",
    extra:
      "Anime shaped my imagination and worldview — One Piece especially taught me about freedom, loyalty, and resilience.",
  },
  {
    title: "Travel",
    img: TravelImg,
    text: "I'm passionate about traveling and discovering new cultures — I love talking to people and learning their customs.",
    extra:
      "My dream is to visit Japan and New Zealand someday — I love exploring new landscapes and meeting people from different backgrounds.",
  },
  {
    title: "Gym",
    img: GymImg,
    text: "The gym keeps me physically and mentally strong — it has always helped me a lot.",
    extra:
      "Consistency is everything — training became a routine that keeps me balanced, confident, and focused.",
  },
  {
    title: "Music",
    img: ThaiImg,
    text: "I love listening to music, I basically have it on all day. My taste is mixed — classical music, pagode, trap, and more. My favorite song is “Tá Escrito” by Grupo Revelação.",
    extra:
      "Music is the rhythm of life — it sets my mood, drives my focus, and connects memories through sound.",
  },
  {
    title: "My Team",
    img: TeamImg,
    text: "Of course, I have my team. Corinthians since I was born — thanks to my hero, MY DAD!",
    extra:
      "Being Corinthians isn’t just about football — it’s about faith, resistance, and love passed from father to son.",
  },
];

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 1400 }, items: 3 },
  desktop: { breakpoint: { max: 1400, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 768 }, items: 2 },
  mobile: { breakpoint: { max: 768, min: 0 }, items: 1 },
};

export default function StyledCarousel() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div
      style={{
        background: "transparent",
        padding: "20px 0",
        overflow: "visible",
        minHeight: "450px",
        position: "relative",
      }}
    >
      <Carousel
        responsive={responsive}
        infinite
        autoPlay
        autoPlaySpeed={4500}
        transitionDuration={950}
        containerClass="carousel-container"
        itemClass="carousel-item-padding-40-px"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        className="custom-carousel"
      >
        {items.map((item, index) => (
          <Card
            key={index}
            style={{
              backgroundColor: "#0f172a",
              border: "none",
              outline: "1.5px solid #60d3e7",
              borderRadius: "16px",
              boxShadow: "0 0 15px rgba(96, 211, 231, 0.2)",
              color: "white",
              transformOrigin: "center center",
              overflow: "hidden",
              width: "90%",
              height: "420px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              margin: "0 auto",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow =
                "0 0 25px rgba(96, 211, 231, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow =
                "4px 5px 4px rgba(89, 4, 168, 0.137)";
            }}
          >
            <Card.Img
              variant="top"
              src={item.img}
              style={{
                height: "180px",
                objectFit: "cover",
              }}
            />
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                flexGrow: 1,
                padding: "1rem",
              }}
            >
              <div>
                <Card.Title
                  style={{
                    color: "#60d3e7",
                    fontWeight: "600",
                    textAlign: "center",
                  }}
                >
                  {item.title}
                </Card.Title>
                <Card.Text
                  style={{
                    color: "#cbd5e1",
                    fontSize: "0.95rem",
                    textAlign: "center",
                    minHeight: "100px",
                  }}
                >
                  {item.text}
                </Card.Text>
              </div>
              <div style={{ textAlign: "center" }}>
                <Button
                  style={{
                    backgroundColor: "#60d3e7",
                    border: "none",
                    color: "#0f172a",
                    fontWeight: "600",
                    borderRadius: "8px",
                    padding: "6px 16px",
                    transition: "0.3s",
                  }}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.backgroundColor = "#3cbfd1")
                  }
                  onMouseOut={(e) =>
                    (e.currentTarget.style.backgroundColor = "#60d3e7")
                  }
                  onClick={() => setSelectedItem(item)}
                >
                  View More
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Carousel>

      {/* MODAL */}
      <Modal
        show={!!selectedItem}
        onHide={() => setSelectedItem(null)}
        centered
        // 🚨 CORREÇÃO 1: Remova a propriedade 'backdrop={false}' se quiser o fundo escuro.
        // Se quiser que ele flutue sem fundo escuro (como na imagem), MANTENHA 'backdrop={false}'
        backdrop={false}

        // 🚨 CORREÇÃO 2: Use uma classe para o container principal do Modal.
        dialogClassName="custom-modal-dialog"

        contentClassName="mini-modal" // Essa classe já existe

        style={{
          background: "transparent",
        }}
      >
        {selectedItem && (
          <Modal.Body
            // 🚨 CORREÇÃO 3: Adicionar o componente de Fechar e mostrar o Header
            // O Modal padrão precisa de Modal.Header para mostrar o X de fechar

            style={{
              backgroundColor: "#0f172a",
              color: "#cbd5e1",
              border: "1px solid #60d3e7",
              borderRadius: "12px",
              boxShadow: "0 0 20px rgba(96, 211, 231, 0.4)",
              padding: "16px",
              // maxWidth: "300px", 
              // margin: "0 auto", 
              textAlign: "center",
              position: 'relative', // Para posicionar o botão Fechar
            }}
          >
            <h5 style={{ color: "#60d3e7" }}>{selectedItem.title}</h5>
            <p style={{ fontSize: "0.9rem" }}>{selectedItem.extra}</p>
            <Button
              variant="outline-light"
              size="sm"
              style={{
                borderRadius: "8px",
                border: "1px solid #60d3e7",
                color: "#60d3e7",
                marginTop: "8px",
              }}
              onClick={() => setSelectedItem(null)}
            >
              Close
            </Button>
          </Modal.Body>
        )}
      </Modal>
    </div>
  );
}
