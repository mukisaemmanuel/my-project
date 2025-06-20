import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Text3D } from '@react-three/drei';
import * as THREE from 'three';

const FloatingLogo: React.FC = () => {
  const logoRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (logoRef.current) {
      logoRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.1}
      floatIntensity={0.5}
      floatingRange={[0, 0.2]}
    >
      <group ref={logoRef} position={[0, 0, 0]}>
        {/* Main Logo Sphere */}
        <mesh>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial 
            color="#0066CC" 
            metalness={0.7}
            roughness={0.2}
            emissive="#001133"
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Orbiting Elements */}
        <group>
          {[...Array(3)].map((_, i) => (
            <mesh
              key={i}
              position={[
                Math.cos((i * Math.PI * 2) / 3) * 1.5,
                Math.sin((i * Math.PI * 2) / 3) * 0.2,
                Math.sin((i * Math.PI * 2) / 3) * 1.5,
              ]}
            >
              <sphereGeometry args={[0.1, 16, 16]} />
              <meshStandardMaterial color="#00A3E0" />
            </mesh>
          ))}
        </group>

        {/* Communication Waves */}
        <group>
          {[...Array(5)].map((_, i) => (
            <mesh
              key={i}
              position={[0, 0, 0]}
              scale={[1 + i * 0.3, 1 + i * 0.3, 1 + i * 0.3]}
            >
              <ringGeometry args={[0.9, 1.0, 32]} />
              <meshBasicMaterial 
                color="#00A3E0" 
                transparent 
                opacity={0.1 - i * 0.02}
                side={THREE.DoubleSide}
              />
            </mesh>
          ))}
        </group>
      </group>
    </Float>
  );
};

export default FloatingLogo;