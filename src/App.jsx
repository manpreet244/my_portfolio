import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useRef, useMemo } from "react";
import Page1 from "./components/Page1.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";

function Particles({ mouse }) {
  const pointsRef = useRef();
  const speedRef = useRef([]);

  const circleTexture = useMemo(() => {
    const size = 64;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      0,
      size / 2,
      size / 2,
      size / 2
    );
    gradient.addColorStop(0, "white");
    gradient.addColorStop(1, "transparent");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    const texture = new THREE.CanvasTexture(canvas);
    return texture;
  }, []);

  const particles = useMemo(() => {
    const positions = [];
    const speeds = [];

    for (let i = 0; i < 500; i++) {
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.5) * 10);
      positions.push((Math.random() - 0.5) * 10);

      speeds.push(Math.random() * 0.002 + 0.001);
    }

    speedRef.current = speeds;

    return new Float32Array(positions);
  }, []);

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    if (pointsRef.current) {
      const positions = pointsRef.current.geometry.attributes.position.array;
      const speeds = speedRef.current;

      for (let i = 0; i < positions.length; i += 3) {
        positions[i] += Math.sin(elapsedTime + i) * speeds[i / 3] * 0.5;
        positions[i + 1] += Math.cos(elapsedTime + i) * speeds[i / 3] * 0.5;
        positions[i + 2] += Math.sin(elapsedTime + i) * speeds[i / 3] * 0.5;
      }

      pointsRef.current.geometry.attributes.position.needsUpdate = true;

      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.x += 0.0002;

      const targetX = mouse.current.x * 0.0005;
      const targetY = mouse.current.y * 0.0005;
      pointsRef.current.rotation.y += (targetX - pointsRef.current.rotation.y) * 0.05;
      pointsRef.current.rotation.x += (targetY - pointsRef.current.rotation.x) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        map={circleTexture}
        transparent
        alphaTest={0.5}
        color="white"
        size={0.1}
        sizeAttenuation
      />
    </points>
  );
}

export default function App() {
  const mouse = useRef({ x: 0, y: 0 });

  return (
    <div
      className="w-screen min-h-screen overflow-x-hidden"
      onMouseMove={(e) => {
        mouse.current = {
          x: e.clientX - window.innerWidth / 2,
          y: e.clientY - window.innerHeight / 2,
        };
      }}
    >
      {/* Hero Section */}
      <div className="relative w-full h-screen">
        {/* Nav Content Layer */}
        <div className="relative z-20">
          <Page1 />
        </div>

        {/* Canvas Background */}
        <div className="absolute top-0 left-0 w-full h-screen z-0">
          <Canvas
            camera={{ position: [0, -5, 5], fov: 75 }}
            style={{
              background: "white",
              width: "100%",
              height: "100vh",  // Ensures the canvas takes only up to 100vh
            }}
          >
            <ambientLight />
            <Particles mouse={mouse} />
          </Canvas>
        </div>
      </div>

      {/* Remove margin/padding or any extra spacing between sections */}
      <Experience />
      <Contact />
    </div>
  );
}
