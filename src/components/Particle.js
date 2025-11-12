import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function Particle() {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: { color: { value: "#0a192f" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
          },
        },
        particles: {
          color: { value: "#E0FFFF" },
          links: { color: "#E0FFFF", distance: 150, enable: true },
          move: { enable: true, speed: 2 },
          number: { value: 60 },
          opacity: { value: 0.3 },
          size: { value: 2 },
        },
      }}
    />
  );
}

export default Particle;