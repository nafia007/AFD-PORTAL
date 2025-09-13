import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface ThreeDRobotProps {
  mousePosition: { x: number; y: number };
  animationTime: number;
}

function ThreeDRobot({ mousePosition, animationTime }: ThreeDRobotProps) {
  const robotRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const leftArmRef = useRef<THREE.Mesh>(null);
  const rightArmRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (robotRef.current) {
      // Follow cursor
      robotRef.current.rotation.y = mousePosition.x * 0.5;
      robotRef.current.rotation.x = -mousePosition.y * 0.3;
      
      // Continuous spinning
      robotRef.current.rotation.y += 0.01;
      
      // Floating motion
      robotRef.current.position.y = Math.sin(state.clock.elapsedTime * 2) * 0.1;
    }

    if (headRef.current) {
      headRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 3) * 0.1;
    }

    if (leftArmRef.current) {
      leftArmRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.2 + 0.3;
    }

    if (rightArmRef.current) {
      rightArmRef.current.rotation.z = -Math.sin(state.clock.elapsedTime * 2) * 0.2 - 0.3;
    }
  });

  return (
    <group ref={robotRef} position={[0, 0, 0]}>
      {/* Head */}
      <Box ref={headRef} position={[0, 1.5, 0]} args={[0.8, 0.8, 0.8]}>
        <meshStandardMaterial color="#8b5cf6" metalness={0.3} roughness={0.4} />
      </Box>
      
      {/* Eyes */}
      <Sphere position={[-0.2, 1.6, 0.4]} args={[0.1]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
      </Sphere>
      <Sphere position={[0.2, 1.6, 0.4]} args={[0.1]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.5} />
      </Sphere>
      
      {/* Antenna */}
      <Box position={[0, 2.2, 0]} args={[0.05, 0.4, 0.05]}>
        <meshStandardMaterial color="#8b5cf6" />
      </Box>
      <Sphere position={[0, 2.5, 0]} args={[0.1]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.8} />
      </Sphere>
      
      {/* Body */}
      <Box position={[0, 0.5, 0]} args={[1.2, 1.5, 0.8]}>
        <meshStandardMaterial color="#7c3aed" metalness={0.2} roughness={0.6} />
      </Box>
      
      {/* Chest Panel */}
      <Box position={[0, 0.7, 0.41]} args={[0.6, 0.4, 0.02]}>
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.3} />
      </Box>
      
      {/* Arms */}
      <Box ref={leftArmRef} position={[-0.8, 0.8, 0]} args={[0.3, 1, 0.3]}>
        <meshStandardMaterial color="#8b5cf6" />
      </Box>
      <Box ref={rightArmRef} position={[0.8, 0.8, 0]} args={[0.3, 1, 0.3]}>
        <meshStandardMaterial color="#8b5cf6" />
      </Box>
      
      {/* Hands */}
      <Sphere position={[-0.8, 0.2, 0]} args={[0.2]}>
        <meshStandardMaterial color="#7c3aed" />
      </Sphere>
      <Sphere position={[0.8, 0.2, 0]} args={[0.2]}>
        <meshStandardMaterial color="#7c3aed" />
      </Sphere>
      
      {/* Legs */}
      <Box position={[-0.3, -0.8, 0]} args={[0.3, 1.2, 0.3]}>
        <meshStandardMaterial color="#6d28d9" />
      </Box>
      <Box position={[0.3, -0.8, 0]} args={[0.3, 1.2, 0.3]}>
        <meshStandardMaterial color="#6d28d9" />
      </Box>
      
      {/* Feet */}
      <Box position={[-0.3, -1.6, 0.2]} args={[0.4, 0.2, 0.6]}>
        <meshStandardMaterial color="#581c87" />
      </Box>
      <Box position={[0.3, -1.6, 0.2]} args={[0.4, 0.2, 0.6]}>
        <meshStandardMaterial color="#581c87" />
      </Box>
      
      {/* Floating Energy Orbs */}
      {[...Array(6)].map((_, i) => {
        const angle = (i / 6) * Math.PI * 2;
        const radius = 2;
        const x = Math.cos(angle + animationTime * 0.001) * radius;
        const y = Math.sin(angle + animationTime * 0.001) * radius * 0.5;
        const z = Math.sin(angle * 2 + animationTime * 0.002) * 0.5;
        
        return (
          <Sphere key={i} position={[x, y, z]} args={[0.05]}>
            <meshStandardMaterial 
              color="#06b6d4" 
              emissive="#06b6d4" 
              emissiveIntensity={0.8}
              transparent
              opacity={0.7}
            />
          </Sphere>
        );
      })}
    </group>
  );
}

export default ThreeDRobot;