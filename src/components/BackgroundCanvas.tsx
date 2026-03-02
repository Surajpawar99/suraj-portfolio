import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useState, useRef } from 'react';
import * as random from 'maath/random';

function Stars(props: any) {
  const ref = useRef<any>(null);
  const [sphere] = useState(() => {
    // Reduce particle count on mobile for performance
    const count = window.innerWidth < 768 ? 2000 : 5000;
    const data = random.inSphere(new Float32Array(count), { radius: 1.5 });
    return data || new Float32Array(count); 
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

export default function BackgroundCanvas() {
  return (
    <div className="fixed inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Stars />
        {/* <FloatingShape />  - Maybe keep it simple for background, or add it to Hero specifically */}
      </Canvas>
    </div>
  );
}
