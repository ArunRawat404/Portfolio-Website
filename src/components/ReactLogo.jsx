import { Float, useGLTF } from '@react-three/drei';

const ReactLogo = (props) => {
    const { nodes, materials } = useGLTF('/models/react.glb');

    return (
        <Float floatIntensity={2}>
            <group position={[1, 10, 0]} scale={0.4} {...props} dispose={null}>
                <mesh
                    geometry={nodes['React-Logo_Material002_0'].geometry}
                    material={materials['Material.002']}
                    position={[0, 0.8, 0.18]}
                    rotation={[0, 0, -Math.PI / 2]}
                    scale={[0.39, 0.39, 0.52]}
                />
            </group>
        </Float>
    );
};

useGLTF.preload('/models/react.glb');

export default ReactLogo;