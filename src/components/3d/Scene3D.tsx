import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Environment, Loader } from '@react-three/drei';

interface Scene3DProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
  className?: string;
}

const Scene3D: React.FC<Scene3DProps> = ({
  children,
  cameraPosition = [0, 0, 5],
  enableControls = true,
  className = "w-full h-64",
}) => {
  return (
    <div className={className}>
      <Suspense fallback={<Loader />}>
        <Canvas
          camera={{ position: cameraPosition, fov: 45 }}
          gl={{ antialias: true, alpha: true }}
        >
          <Environment preset="city" />
          <ambientLight intensity={0.4} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -5]} intensity={0.5} color="#00A3E0" />
          
          {children}
          
          {enableControls && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              maxPolarAngle={Math.PI / 2}
              minPolarAngle={Math.PI / 4}
            />
          )}
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Scene3D;