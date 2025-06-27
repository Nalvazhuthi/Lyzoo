import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF, Environment, ContactShadows } from '@react-three/drei'
import * as THREE from 'three'

const Model = () => {
    const { scene } = useGLTF('/model/brokenGlass.glb')
    console.log('scene: ', scene);

    scene.scale.set(1, 1, 1)
    scene.position.set(0, 0, 0)

    return (

        <primitive
            object={scene}
            scale={[5, 5, 5]}
            rotation={[0, 0, 0]}
            position={[0, 0, 0]}
        />
    )
}

const Scene = () => {
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

                <Suspense fallback={null}>
                    <Model />
                    <Environment preset="studio" />
                </Suspense>

                <ContactShadows
                    position={[0, -0.8, 0]}
                    opacity={0.5}
                    scale={10}
                    blur={2}
                    far={4}
                />

                {/* <OrbitControls /> */}
            </Canvas>
        </div>
    )
}

export default Scene
