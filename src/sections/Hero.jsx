import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera } from '@react-three/drei'
import { Suspense } from "react";
import { useMediaQuery } from 'react-responsive';
import { calculateSizes } from '../constants/index';
import HackerRoom from "../components/HackerRoom";
import CanvasLoader from "../components/CanvasLoader";
import Target from "../components/Target";
import ReactLogo from "../components/ReactLogo";
import Cube from "../components/Cube";
import Rings from "../components/Rings";
import HeroCamera from "../components/HeroCamera";
import Button from "../components/Button";

const Hero = () => {
    // Use media queries to determine screen size
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section className="relative flex flex-col w-full min-h-screen" id="home">
            <div className="flex flex-col w-full gap-3 mx-auto mt-20 sm:mt-36 c-space">
                <p className="text-xl font-medium text-center text-white sm:text-3xl font-generalsans">
                    Hi, I am Arun Rawat <span className="waving-hand">👋</span>
                </p>
                <p className="hero_tag text-gray_gradient">a Software Engineer</p>
            </div>

            <div className="absolute inset-0 w-full h-full">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />

                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom scale={sizes.deskScale} position={sizes.deskPosition} rotation={[0.1, -Math.PI, 0]} />
                        </HeroCamera>

                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Rings position={sizes.ringPosition} />
                            <Cube position={sizes.cubePosition} />
                        </group>

                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute left-0 right-0 z-10 w-full bottom-7 c-space">
                <a href="#about" className="w-fit">
                    <Button name="Let's work together" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    );
};

export default Hero;