import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

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
  },
  {
    title: "Martial Arts",
    img: ThaiImg,
    text: "I practice Muay Thai and Brazilian Jiu Jitsu, which taught me discipline and respect. My idol is the Poatan.",
  },
  {
    title: "Animes and Manga",
    img: AnimeImg,
    text: "I love anime and manga — they’ve taught me a lot since I was a kid! (One Piece, Hunter x Hunter, Death Note, Kimetsu no Yaiba, and more).",
  },
  {
    title: "Travel",
    img: TravelImg,
    text: "I'm passionate about traveling and discovering new cultures — I love talking to people and learning their customs.",
  },
  {
    title: "Gym",
    img: GymImg,
    text: "The gym keeps me physically and mentally strong — it has always helped me a lot.",
  },
  {
    title: "Music",
    img: ThaiImg,
    text: "I love listening to music, I basically have it on all day. My taste is mixed — classical music, pagode, trap, and more. My favorite song is “Tá Escrito” by Grupo Revelação.",
  },
  {
    title: "My Team",
    img: TeamImg,
    text: "Of course, I have my team. Corinthians since I was born — thanks to my hero, MY DAD!",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1400 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1400, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
  },
};

export default function StyledCarousel() {
  return (
    <div
      style={{
        background: "transparent",
        padding: "20px 0",
        overflow: "visible",
        minHeight: "450px",
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
      >
        {items.map((item, index) => (
          <Card
            key={index}
            style={{
              backgroundColor: "#0f172a9a",
              borderRadius: "16px",
              outline: "1.5px solid #60d3e7",
              boxShadow: "4px 5px 4px rgba(89, 4, 168, 0.137)",
              color: "white",
              overflow: "hidden",
              width: "90%",
              height: "420px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              margin: "0 auto",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "scale(1.03)";
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(96, 211, 231, 0.3)";
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
                >
                  View More
                </Button>
              </div>
            </Card.Body>
          </Card>
        ))}
      </Carousel>
    </div>
  );
}
