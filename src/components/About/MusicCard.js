import { Box } from "@mui/material";
import CardBootstrap from "react-bootstrap/Card";
// import { useState, useRef, useEffect } from "react";
// import { Card, CardContent, IconButton, Typography } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// import PauseIcon from "@mui/icons-material/Pause";
// import GraphicEqIcon from "@mui/icons-material/GraphicEq";

// const songs = [
//   {
//     title: "Tá Escrito",
//     artist: "Grupo Revelação",
//     preview: "https://filesamples.com/samples/audio/mp3/sample3.mp3",
//   },
//   {
//     title: "Mockingbird",
//     artist: "Eminem",
//     preview:
//       "https://p.scdn.co/mp3-preview/ca3d7a22d8c8b0a9d097d3a7cf7a2351e6658bc1?cid=774b29d4f13844c495f206cafdad9c86",
//   },
//   {
//     title: "God’s Plan",
//     artist: "Drake",
//     preview:
//       "https://p.scdn.co/mp3-preview/4a6b2dd8a8c6f8eac94a3e6c89b03f97a0939b60?cid=774b29d4f13844c495f206cafdad9c86",
//   },
// ];

function MusicCard() {
  return (
    <Box>
      <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
        My <strong className="blue">Favorite Songs</strong>
      </h1>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          mt: 3,
        }}
      >
        {/* --- Tá Escrito --- */}
        <CardBootstrap
          style={{
            width: 340,
            backgroundColor: "#0f172a9a",
            borderRadius: "12px",
            outline: "1.5px solid #60d3e7",
            boxShadow: "4px 5px 4px rgba(89, 4, 168, 0.137)",
            color: "#fff",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.03)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(96, 211, 231, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "4px 5px 4px rgba(89, 4, 168, 0.137)";
          }}
        >
          <CardBootstrap.Body>
            <CardBootstrap.Title
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Tá Escrito
            </CardBootstrap.Title>
            <CardBootstrap.Subtitle
              style={{ color: "#91d2ddff", fontSize: "0.9rem" }}
            >
              Grupo Revelação
            </CardBootstrap.Subtitle>

            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                height: "152px",
                width: "100%",
              }}
            >
              <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/0rOQyLZJ9oASgtdoDZgrmK?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </CardBootstrap.Body>
        </CardBootstrap>

        {/* --- Mockingbird --- */}
        <CardBootstrap
          style={{
            width: 340,
            backgroundColor: "#0f172a9a",
            borderRadius: "12px",
            outline: "1.5px solid #60d3e7",
            boxShadow: "4px 5px 4px rgba(89, 4, 168, 0.137)",
            color: "#fff",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.03)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(96, 211, 231, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "4px 5px 4px rgba(89, 4, 168, 0.137)";
          }}
        >
          <CardBootstrap.Body>
            <CardBootstrap.Title
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              Mockingbird
            </CardBootstrap.Title>
            <CardBootstrap.Subtitle
              style={{ color: "#91d2ddff", fontSize: "0.9rem" }}
            >
              Eminem
            </CardBootstrap.Subtitle>

            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                height: "152px",
                width: "100%",
              }}
            >
              <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/3hOZtCS0ltjmBnoDkrYogk?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </CardBootstrap.Body>
        </CardBootstrap>

        {/* --- God’s Plan --- */}
        <CardBootstrap
          style={{
            width: 340,
            backgroundColor: "#0f172a9a",
            borderRadius: "12px",
            outline: "1.5px solid #60d3e7",
            boxShadow: "4px 5px 4px rgba(89, 4, 168, 0.137)",
            color: "#fff",
            overflow: "hidden",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.03)";
            e.currentTarget.style.boxShadow = "0 0 20px rgba(96, 211, 231, 0.3)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow =
              "4px 5px 4px rgba(89, 4, 168, 0.137)";
          }}
        >
          <CardBootstrap.Body>
            <CardBootstrap.Title
              style={{ fontSize: "1.2rem", fontWeight: "bold" }}
            >
              God’s Plan
            </CardBootstrap.Title>
            <CardBootstrap.Subtitle
              style={{ color: "#91d2ddff", fontSize: "0.9rem" }}
            >
              Drake
            </CardBootstrap.Subtitle>
            <div
              style={{
                borderRadius: "12px",
                overflow: "hidden",
                height: "152px",
                width: "100%",
              }}
            >
              <iframe data-testid="embed-iframe" style={{ borderRadius: "12px" }} src="https://open.spotify.com/embed/track/6DCZcSspjsKoFjzjrWoCdn?utm_source=generator&theme=0" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
            </div>
          </CardBootstrap.Body>
        </CardBootstrap>
      </Box>
    </Box>
  );
}

export default MusicCard;
