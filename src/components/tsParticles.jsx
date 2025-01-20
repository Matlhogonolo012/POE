import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Using the slim package for smaller bundle size

const TsParticles = () => {
  const [init, setInit] = useState(false);

  // Initialize the tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the slim version of tsparticles
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh" }}>
      {/* Particles Background */}
      {init && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: -1, // Ensure it stays behind the content
          }}
        >
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={{
              background: {
                color: {
                  value: "#ffffff", // White background
                },
              },
              fpsLimit: 120,
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push", // Add particles on click
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse", // Repulse particles on hover
                  },
                  resize: true,
                },
                modes: {
                  push: {
                    quantity: 4, // Number of particles to add on click
                  },
                  repulse: {
                    distance: 200, // Distance of repulsion
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#6a5acd", // Purple particles
                },
                links: {
                  color: "#800080", // Purple links between particles
                  distance: 150, // Maximum distance for links
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
                move: {
                  direction: "none",
                  enable: true,
                  outModes: {
                    default: "bounce", // Particles bounce off the edges
                  },
                  random: false,
                  speed: 6, // Movement speed of particles
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    area: 800, // Density of particles
                  },
                  value: 80, // Number of particles
                },
                opacity: {
                  value: 0.5, // Opacity of particles
                },
                shape: {
                  type: "circle", // Shape of particles
                },
                size: {
                  value: { min: 1, max: 5 }, // Random size between 1 and 5
                },
              },
              detectRetina: true,
            }}
          />
        </div>
      )}

      {/* Your Content */}
      <div
        style={{
          position: "relative", // Ensure content is above the particles
          zIndex: 1, // Higher z-index than particles
          padding: "20px",
          color: "#000", // Text color for visibility
        }}
      >
     
      </div>
    </div>
  );
};

export default TsParticles;