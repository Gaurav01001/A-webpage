import { Environment, Float, OrbitControls } from "@react-three/drei";
import { Book } from "./Book";

export const Experience = () => {
    return (
        <>
            <Float
                rotation-x={-Math.PI / 4}
                floatIntensity={1}
                speed={2}
                rotationIntensity={2}
            >
                <Book />
            </Float>
            <OrbitControls />
            <ambientLight intensity={1} />
            <directionalLight
                position={[2, 5, 2]}
                intensity={2.5}
            />
            <mesh position-y={-1.5} rotation-x={-Math.PI / 2} receiveShadow>
                <planeGeometry args={[100, 100]} />
                <shadowMaterial transparent opacity={0.2} />
            </mesh>
        </>
    );
};
