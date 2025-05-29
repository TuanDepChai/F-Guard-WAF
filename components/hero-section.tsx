"use client"

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { useRef, useState, useMemo, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment, Stars, Trail, Float, Sparkles } from "@react-three/drei"
import * as THREE from "three"

function Particles() {
  const count = 1000
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return positions
  }, [])

  const ref = useRef<THREE.Points>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.1
      ref.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#4f46e5"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

function EnergyField() {
  const { viewport } = useThree()
  const ref = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.z = state.clock.elapsedTime * 0.1
      ref.current.scale.x = viewport.width * 2
      ref.current.scale.y = viewport.height * 2
    }
  })

  return (
    <mesh ref={ref} position={[0, 0, -1]}>
      <planeGeometry />
      <meshBasicMaterial
        color="#4f46e5"
        transparent
        opacity={0.1}
        side={THREE.DoubleSide}
      />
    </mesh>
  )
}

function Shield() {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)
  const [clicked, setClicked] = useState(false)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5
      if (hovered) {
        meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2
        meshRef.current.rotation.z = Math.cos(state.clock.elapsedTime) * 0.2
      }
      if (clicked) {
        meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, 1.2, 0.1)
        meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, 1.2, 0.1)
        meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, 1.2, 0.1)
      } else {
        meshRef.current.scale.x = THREE.MathUtils.lerp(meshRef.current.scale.x, 1, 0.1)
        meshRef.current.scale.y = THREE.MathUtils.lerp(meshRef.current.scale.y, 1, 0.1)
        meshRef.current.scale.z = THREE.MathUtils.lerp(meshRef.current.scale.z, 1, 0.1)
      }
    }
  })

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
    >
      <mesh 
        ref={meshRef}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => setClicked(!clicked)}
      >
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshPhysicalMaterial
          color="#4f46e5"
          metalness={0.8}
          roughness={0.2}
          emissive="#4f46e5"
          emissiveIntensity={0.2}
          clearcoat={1}
          clearcoatRoughness={0.2}
          envMapIntensity={1}
        />
      </mesh>
      {hovered && (
        <Trail
          width={2}
          color="#4f46e5"
          length={8}
          decay={1}
          local={false}
          stride={0}
          interval={1}
        >
          <mesh>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshBasicMaterial color="#4f46e5" />
          </mesh>
        </Trail>
      )}
      <Sparkles
        count={50}
        scale={[4, 4, 4]}
        size={0.4}
        speed={0.4}
        color="#4f46e5"
      />
    </Float>
  )
}

function Scene({ isHovered }: { isHovered: boolean }) {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 5]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <Shield />
      <Particles />
      <EnergyField />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <OrbitControls 
        enableZoom={false} 
        enablePan={false}
        autoRotate={!isHovered}
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
      <Environment preset="city" />
    </>
  )
}

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  }
}

const buttonVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99]
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95
  }
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8])
  const rotate = useTransform(scrollYProgress, [0, 0.5], [0, 10])

  return (
    <section ref={containerRef} className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.3
                }
              }
            }}
            className="text-left"
          >
            <motion.h1 
              variants={textVariants}
              className="text-4xl font-bold tracking-tight sm:text-6xl"
            >
              Protect Your Web Applications with{" "}
              <motion.span 
                className="text-gradient-animate bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light"
                animate={{
                  backgroundPosition: ["0%", "100%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                F-Guard WAF
              </motion.span>
            </motion.h1>
            <motion.p 
              variants={textVariants}
              className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
            >
              A modern Web Application Firewall solution designed to protect your web applications from cyber attacks.
            </motion.p>
            <motion.div 
              variants={textVariants}
              className="mt-10 flex items-center gap-x-6"
            >
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button 
                  size="lg" 
                  className="button-effect bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-primary text-white relative overflow-hidden group"
                >
                  <span className="relative z-10">Get Started For Free</span>
                  <motion.div 
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="button-effect border-primary text-primary hover:bg-primary/10 relative overflow-hidden group"
                >
                  <span className="relative z-10">Learn More</span>
                  <motion.div 
                    className="absolute inset-0 bg-primary/5"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="relative h-[500px] w-full"
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            <Canvas
              dpr={[1, 2]}
              performance={{ min: 0.5 }}
              gl={{ 
                antialias: true,
                alpha: true,
                powerPreference: "high-performance"
              }}
            >
              <Suspense fallback={null}>
                <Scene isHovered={isHovered} />
              </Suspense>
            </Canvas>
          </motion.div>
        </div>
      </div>

      {/* Animated Background */}
      <motion.div 
        className="absolute inset-0 -z-10"
        style={{ y, opacity, scale, rotate }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent" />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"
          animate={{ 
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        variants={floatingVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-primary-light/20 rounded-full blur-3xl"
      />

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-2 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
