
// import { useRef, useMemo } from 'react';

// function Particles() {
//   const pointsRef = useRef();

//   // Create random positions for particles
//   const particles = useMemo(() => {
//     const positions = [];
//     for (let i = 0; i < 500; i++) {
//       positions.push((Math.random() - 0.5) * 10);
//       positions.push((Math.random() - 0.5) * 10);
//       positions.push((Math.random() - 0.5) * 10);
//     }
//     return new Float32Array(positions);
//   }, []);

//   // Animate the particles
//   useFrame(() => {
//     if (pointsRef.current) {
//       pointsRef.current.rotation.y += 0.001; // slow rotation
//       pointsRef.current.rotation.x += 0.001; // slow rotation
//     }
//   });

//   return (
//     <points ref={pointsRef}>
//       <bufferGeometry>
//         <bufferAttribute
//           attach="attributes-position"
//           count={particles.length / 3}
//           array={particles}
//           itemSize={3}
//         />
//       </bufferGeometry>
//       <pointsMaterial
//         color="white"
//         size={0.05}
//         sizeAttenuation={true}
//       />
//     </points>
//   );
// }
