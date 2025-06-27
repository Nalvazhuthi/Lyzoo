import React, { useEffect } from 'react'
import { useGLTF } from '@react-three/drei'

// Define props type
type ModelProps = {
  onLoad?: () => void
}

export const Model: React.FC<ModelProps> = ({ onLoad }) => {
  const { scene } = useGLTF('/model/brokenGlass.glb')

  useEffect(() => {
    if (scene) {
      scene.position.set(0, 0, 0)

      if (onLoad) onLoad()
    }
  }, [scene, onLoad])

  return (
    <primitive
      object={scene}
      scale={[5, 5, 5]}
      rotation={[0, 0, 0]}
      position={[0, 0, 0]}
    />
  )
}
