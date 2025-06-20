import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float, Box } from '@react-three/drei';
import * as THREE from 'three';

interface ProductModelProps {
  type: 'radio' | 'camera' | 'alarm';
  position?: [number, number, number];
}

const ProductModel: React.FC<ProductModelProps> = ({ 
  type, 
  position = [0, 0, 0] 
}) => {
  const modelRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  const getProductGeometry = () => {
    switch (type) {
      case 'radio':
        return (
          <group ref={modelRef} position={position}>
            {/* Radio Base */}
            <Box args={[0.8, 1.2, 0.3]}>
              <meshStandardMaterial color="#2a2a2a" metalness={0.7} roughness={0.3} />
            </Box>
            {/* Antenna */}
            <mesh position={[0, 0.8, 0]}>
              <cylinderGeometry args={[0.02, 0.02, 0.6]} />
              <meshStandardMaterial color="#666666" metalness={0.9} roughness={0.1} />
            </mesh>
            {/* LED Indicator */}
            <mesh position={[0, 0.3, 0.16]}>
              <sphereGeometry args={[0.05, 16, 16]} />
              <meshStandardMaterial color="#00FF00" emissive="#00AA00" emissiveIntensity={0.5} />
            </mesh>
          </group>
        );
      
      case 'camera':
        return (
          <group ref={modelRef} position={position}>
            {/* Camera Body */}
            <mesh>
              <cylinderGeometry args={[0.4, 0.5, 0.8]} />
              <meshStandardMaterial color="#f0f0f0" metalness={0.1} roughness={0.8} />
            </mesh>
            {/* Lens */}
            <mesh position={[0, 0, 0.4]}>
              <cylinderGeometry args={[0.25, 0.25, 0.2]} />
              <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.1} />
            </mesh>
            {/* Mount */}
            <mesh position={[0, -0.6, 0]}>
              <boxGeometry args={[0.3, 0.2, 0.3]} />
              <meshStandardMaterial color="#666666" metalness={0.7} roughness={0.3} />
            </mesh>
          </group>
        );
      
      case 'alarm':
        return (
          <group ref={modelRef} position={position}>
            {/* Alarm Box */}
            <Box args={[1.0, 0.6, 0.8]}>
              <meshStandardMaterial color="#e0e0e0" metalness={0.2} roughness={0.7} />
            </Box>
            {/* Display */}
            <mesh position={[0, 0, 0.41]}>
              <boxGeometry args={[0.6, 0.3, 0.02]} />
              <meshStandardMaterial color="#000000" emissive="#003300" emissiveIntensity={0.3} />
            </mesh>
            {/* Warning Light */}
            <mesh position={[0, 0.35, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshStandardMaterial color="#FF0000" emissive="#AA0000" emissiveIntensity={0.7} />
            </mesh>
          </group>
        );
      
      default:
        return null;
    }
  };

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.3}>
      {getProductGeometry()}
    </Float>
  );
};

export default ProductModel;