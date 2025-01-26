import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export function Bike(props) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/assets/3d/bike.glb')

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    groupRef.current.rotation.y = Math.sin(t / 2) / 8
    groupRef.current.position.y = Math.sin(t / 1.5) / 10
  })

  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh
        geometry={nodes.bike.geometry}
        material={materials.bikeMaterial}
        scale={[0.8, 0.8, 0.8]}
      >
        <meshStandardMaterial
          color="#ff0000"
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
    </group>
  )
} 