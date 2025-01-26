'use client'
import { Canvas } from "@react-three/fiber"

export function ClientWrapper({ children }) {
  return (
    <Canvas
      shadows
      dpr={[1, 2]}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      {children}
    </Canvas>
  )
} 