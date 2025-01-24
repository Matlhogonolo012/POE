import React, { useEffect, useState, useRef } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // Using the slim package for smaller bundle size
import lottie from "lottie-web";
import animationData from "../src/assets/Animation-about.json"; 
import HomePage from "../src/pages/home";
import BackToTop from "../src/components/backToTheTop";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";

const TsParticles = () => {
  const [init, setInit] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // State to manage loading animation
  const lottieContainer = useRef(null); // Ref for Lottie container

  // Initialize the tsParticles engine
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load the slim version of tsparticles
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Load Lottie animation when the component mounts
  useEffect(() => {
    if (lottieContainer.current) {
      const anim = lottie.loadAnimation({
        container: lottieContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData, // Your Lottie JSON file
      });

      // Hide the loading animation after 4 seconds
      const timeout = setTimeout(() => {
        setIsLoading(false);
        anim.destroy(); // Stop and remove the Lottie animation
      }, 4000); // 4000ms = 4 seconds

      return () => {
        clearTimeout(timeout);
        anim.destroy(); // Cleanup animation on unmount
      };
    }
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      {/* Loading Lottie Animation */}
      {isLoading && (
        <div
          ref={lottieContainer}
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "200px", // Default size for desktop
            height: "200px", // Default size for desktop
            zIndex: 1000, // Ensure it stays on top
          }}
        ></div>
      )}

      {/* Background with Reduced Opacity */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(255, 255, 255, 0.5)", // Semi-transparent white background
          zIndex: 999, // Just below the loading animation
          display: isLoading ? "block" : "none", // Show only when loading
        }}
      ></div>

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
            opacity: isLoading ? 0.5 : 1, // Reduce opacity while loading
            transition: "opacity 0.5s ease", // Smooth transition
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
                  value: 25,
                },
                opacity: {
                  value: 0.5,
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
          zIndex: 10, // Higher z-index than particles
          padding: "20px",
          color: "#000", // Text color for visibility
          opacity: isLoading ? 0.5 : 1, // Reduce opacity while loading
          transition: "opacity 0.5s ease", // Smooth transition
        }}
      >
        <Header />
        <HomePage />
        <BackToTop />
      </div>
    </div>
  );
};

export default TsParticles;