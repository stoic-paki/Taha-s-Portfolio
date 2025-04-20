import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { Room } from "./Room";
import HeroLights from "./HeroLights";
// let isTablet = false;


const HeroExperience = () => {
  const isTablet = useMediaQuery({query: '(max-width: 1024px)'});
  const isMobile = useMediaQuery({query: '(max-width: 768px)'});
  return (
    <Canvas camera={{ position: [0, 0, 15], fov: 45 }}>
 

      <OrbitControls enablePan={false} enableZoom={false} maxDistance={20} minDistance={10} minPolarAngle={Math.PI / 5} maxPolarAngle={Math.PI / 2} />

    <HeroLights/>

      <group scale={isMobile ? 1:1} position={[0, -3.5, 0]} rotation={[0, -Math.PI/ 4, 0]}>
      <Room/>
      </group>

    </Canvas>
  );
};

export default HeroExperience;

