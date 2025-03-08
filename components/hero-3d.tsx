"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Environment, Float, Text } from "@react-three/drei"
import * as THREE from "three"

function DataParticles({ count = 500 }) {
  const mesh = useRef<THREE.InstancedMesh>(null)
  const dummy = new THREE.Object3D()
  const particles = useRef<{ position: THREE.Vector3; velocity: THREE.Vector3; acceleration: THREE.Vector3 }[]>([])

  useEffect(() => {
    if (!mesh.current) return

    // Initialize particles
    particles.current = Array.from({ length: count }, () => ({
      position: new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
      ),
      acceleration: new THREE.Vector3(0, 0, 0),
    }))

    // Set initial positions
    particles.current.forEach((particle, i) => {
      dummy.position.copy(particle.position)
      dummy.updateMatrix()
      mesh.current?.setMatrixAt(i, dummy.matrix)
    })

    mesh.current.instanceMatrix.needsUpdate = true
  }, [count])

  useFrame(() => {
    if (!mesh.current) return

    // Update particles
    particles.current.forEach((particle, i) => {
      // Add some attraction to center
      const direction = particle.position.clone().negate().normalize().multiplyScalar(0.0005)
      particle.acceleration.copy(direction)

      // Update velocity and position
      particle.velocity.add(particle.acceleration)
      particle.position.add(particle.velocity)

      // Limit distance from center
      if (particle.position.length() > 5) {
        particle.position.normalize().multiplyScalar(5)
        particle.velocity.multiplyScalar(-0.5)
      }

      // Update instance
      dummy.position.copy(particle.position)
      dummy.updateMatrix()
      mesh.current.setMatrixAt(i, dummy.matrix)
    })

    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshStandardMaterial color="#4f46e5" emissive="#4338ca" emissiveIntensity={0.5} />
    </instancedMesh>
  )
}

function DataConnections({ count = 100 }) {
  const mesh = useRef<THREE.LineSegments>(null)
  const positions = useRef<Float32Array>(new Float32Array(count * 6))
  const colors = useRef<Float32Array>(new Float32Array(count * 6))
  const dummy = new THREE.Object3D()
  const lines = useRef<{ start: THREE.Vector3; end: THREE.Vector3; life: number; maxLife: number }[]>([])

  useEffect(() => {
    // Initialize lines
    lines.current = Array.from({ length: count }, () => {
      const start = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10,
      )
      const end = new THREE.Vector3((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10)
      return {
        start,
        end,
        life: Math.random() * 1,
        maxLife: 1 + Math.random() * 2,
      }
    })
  }, [count])

  useFrame(() => {
    const posArray = positions.current
    const colorArray = colors.current

    // Update lines
    lines.current.forEach((line, i) => {
      line.life += 0.01
      if (line.life > line.maxLife) {
        line.life = 0
        line.start.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10)
        line.end.set((Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 10)
      }

      const alpha = Math.sin((line.life / line.maxLife) * Math.PI)

      // Set positions
      posArray[i * 6] = line.start.x
      posArray[i * 6 + 1] = line.start.y
      posArray[i * 6 + 2] = line.start.z
      posArray[i * 6 + 3] = line.end.x
      posArray[i * 6 + 4] = line.end.y
      posArray[i * 6 + 5] = line.end.z

      // Set colors
      const color1 = new THREE.Color(0x4f46e5)
      const color2 = new THREE.Color(0xd946ef)
      colorArray[i * 6] = color1.r
      colorArray[i * 6 + 1] = color1.g
      colorArray[i * 6 + 2] = color1.b
      colorArray[i * 6 + 3] = color2.r
      colorArray[i * 6 + 4] = color2.g
      colorArray[i * 6 + 5] = color2.b
    })

    if (mesh.current) {
      mesh.current.geometry.attributes.position.needsUpdate = true
      mesh.current.geometry.attributes.color.needsUpdate = true
    }
  })

  return (
    <lineSegments ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count * 2} array={positions.current} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count * 2} array={colors.current} itemSize={3} />
      </bufferGeometry>
      <lineBasicMaterial vertexColors attach="material" transparent opacity={0.6} />
    </lineSegments>
  )
}

function FloatingText() {
  return (
    <group position={[0, 0, 0]}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Text
          font="/fonts/Geist-Bold.ttf"
          position={[0, 0, 0]}
          fontSize={0.5}
          color="#d946ef"
          anchorX="center"
          anchorY="middle"
        >
          AI & ML
        </Text>
      </Float>
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.4}>
        <Text
          font="/fonts/Geist-Bold.ttf"
          position={[2, 1, -1]}
          fontSize={0.4}
          color="#4f46e5"
          anchorX="center"
          anchorY="middle"
        >
          Data Science
        </Text>
      </Float>
      <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.6}>
        <Text
          font="/fonts/Geist-Bold.ttf"
          position={[-2, -1, 1]}
          fontSize={0.4}
          color="#8b5cf6"
          anchorX="center"
          anchorY="middle"
        >
          Full Stack
        </Text>
      </Float>
      <Float speed={1.3} rotationIntensity={0.35} floatIntensity={0.5}>
        <Text
          font="/fonts/Geist-Bold.ttf"
          position={[-1.5, 1.5, -0.5]}
          fontSize={0.3}
          color="#d946ef"
          anchorX="center"
          anchorY="middle"
        >
          Python
        </Text>
      </Float>
      <Float speed={1.6} rotationIntensity={0.3} floatIntensity={0.7}>
        <Text
          font="/fonts/Geist-Bold.ttf"
          position={[1.5, -1.5, 0.5]}
          fontSize={0.3}
          color="#4f46e5"
          anchorX="center"
          anchorY="middle"
        >
          Next.js
        </Text>
      </Float>
    </group>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <DataParticles count={300} />
      <DataConnections count={50} />
      <FloatingText />
      <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
      <Environment preset="night" />
    </>
  )
}

export default function Hero3D() {
  return (
    <div className="w-full h-[500px] md:h-[600px]">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <Scene />
      </Canvas>
    </div>
  )
}

