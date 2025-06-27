import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { Model } from './model'

// Define props type
type SceneProps = {
    onModelLoad?: () => void
}

const Scene: React.FC<SceneProps> = ({ onModelLoad }) => {
    return (
        <div className="canvas-container">
            <Canvas
                style={{ pointerEvents: "none", zIndex: -1 }}
                camera={{ position: [0, 0, 5], fov: 50 }}
                shadows
            >
                <ambientLight intensity={0.3} />
                <directionalLight
                    castShadow
                    position={[5, 10, 5]}
                    intensity={1.5}
                    shadow-mapSize-width={1024}
                    shadow-mapSize-height={1024}
                />

                <React.Suspense fallback={null}>
                    <Model onLoad={onModelLoad} />
                    <Environment preset="studio" />
                </React.Suspense>

                <ContactShadows
                    position={[0, -0.8, 0]}
                    opacity={0.5}
                    scale={10}
                    blur={2}
                    far={4}
                />
            </Canvas>
        </div>
    )
}

export default Scene
