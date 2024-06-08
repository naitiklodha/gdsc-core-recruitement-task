import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Stars from "../components/Stars";
import { Text3D, OrbitControls, useGLTF, Text } from "@react-three/drei";

function Model() {
  const gltf = useGLTF("Astronaut.glb");
  return <primitive object={gltf.scene} />;
}

const ThreeDText = () => {
  return (
    <Suspense fallback={null}>
      <Canvas>
        <Stars />
        <ambientLight />
        {/* Model on the right side */}
        <Model scale={[0.05, 0.05, 0.05]} position={[2, 0, 0]} />
        <OrbitControls />
        {/* Text on the left side */}
        <Text3D position={[-4, 0, 0]} font="font/Roboto_Regular.json">
          {"Naitik  Lodha"}
          <meshNormalMaterial />
        </Text3D>
        <Text color="white" position={[0, -1.25, 0]} scale={[0.3, 0.3, 0.3]}>
          I am a passionate web developer with a focus on learning and exploring
          new technologies.
        </Text>
      </Canvas>
    </Suspense>
  );
};

export default ThreeDText;
