import { motion } from 'motion/react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Sphere, Icosahedron } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function HeroOrb() {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;
    }
    if (wireframeRef.current) {
       wireframeRef.current.rotation.x = -time * 0.1;
       wireframeRef.current.rotation.y = -time * 0.15;
    }
  });

  return (
    <group>
      <Float speed={4} rotationIntensity={1} floatIntensity={2}>
        {/* Inner Distorted Sphere */}
        <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
          <MeshDistortMaterial
            color="#1a0b2e"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.1}
            metalness={0.9}
            emissive="#7000ff"
            emissiveIntensity={0.5}
          />
        </Sphere>
        
        {/* Outer Geometric Wireframe */}
        <Icosahedron ref={wireframeRef} args={[1, 1]} scale={2.8}>
           <meshBasicMaterial color="#00f3ff" wireframe transparent opacity={0.15} />
        </Icosahedron>
      </Float>
    </group>
  );
}

function Scene() {
   const groupRef = useRef<THREE.Group>(null);
   
   useFrame((state) => {
     if (groupRef.current) {
        // Smooth mouse tilt interaction
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.mouse.x * 0.5, 0.1);
        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -state.mouse.y * 0.5, 0.1);
     }
   });
   
   return (
     <group ref={groupRef}>
       <HeroOrb />
     </group>
   );
}

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background Layer for Hero */}
      <div className="absolute inset-0 z-0 opacity-80">
        <Canvas camera={{ position: [0, 0, 6] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} color="#00f3ff" intensity={2} />
          <Scene />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pointer-events-auto"
        >
          <h2 className="text-neon-blue font-mono text-lg mb-4 tracking-widest uppercase">
            Hello, I am
          </h2>
          <h1 className="text-6xl md:text-8xl font-bold font-display tracking-tighter mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500">
              SURAJ PAWAR
            </span>
          </h1>
          <h3 className="text-2xl md:text-4xl text-gray-400 font-light mb-8">
            Android Automation & <span className="text-neon-purple font-semibold">Web Developer in Progress</span>
          </h3>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-12">
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(0, 243, 255, 0.6), inset 0 0 10px rgba(0, 243, 255, 0.4)",
                textShadow: "0 0 10px rgba(0, 243, 255, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-neon-blue text-neon-blue rounded-full font-medium tracking-wide hover:bg-neon-blue/10 transition-all duration-300 relative overflow-hidden group"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 bg-neon-blue/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 0 30px rgba(188, 19, 254, 0.6), inset 0 0 10px rgba(188, 19, 254, 0.4)",
                textShadow: "0 0 10px rgba(188, 19, 254, 0.8)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-neon-purple text-white rounded-full font-medium tracking-wide hover:bg-purple-600 transition-all duration-300 shadow-[0_0_20px_rgba(188,19,254,0.3)]"
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ delay: 1, duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 pointer-events-none"
      >
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-neon-blue rounded-full animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
}
