import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Line, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const NetworkVisualization: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  const nodes = useMemo(() => {
    const nodePositions = [];
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 2 + Math.random() * 1;
      nodePositions.push([
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 2,
        Math.sin(angle) * radius,
      ]);
    }
    return nodePositions;
  }, []);

  const connections = useMemo(() => {
    const lines = [];
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.6) {
          lines.push([nodes[i], nodes[j]]);
        }
      }
    }
    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Network Nodes */}
      {nodes.map((position, index) => (
        <Sphere
          key={index}
          position={position as [number, number, number]}
          args={[0.05, 16, 16]}
        >
          <meshStandardMaterial 
            color="#00A3E0" 
            emissive="#001133"
            emissiveIntensity={0.2}
          />
        </Sphere>
      ))}

      {/* Network Connections */}
      {connections.map((connection, index) => (
        <Line
          key={index}
          points={connection}
          color="#0066CC"
          lineWidth={1}
          transparent
          opacity={0.6}
        />
      ))}

      {/* Central Hub */}
      <Sphere position={[0, 0, 0]} args={[0.1, 32, 32]}>
        <meshStandardMaterial 
          color="#0066CC"
          metalness={0.8}
          roughness={0.2}
          emissive="#003366"
          emissiveIntensity={0.3}
        />
      </Sphere>
    </group>
  );
};

export default NetworkVisualization;