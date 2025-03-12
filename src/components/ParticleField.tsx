
import { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { Canvas } from '@react-three/fiber';
import gsap from 'gsap';

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uMouseVelocity;
  uniform vec2 uResolution;
  
  varying vec2 vUv;
  varying float vDistance;
  
  void main() {
    vUv = uv;
    
    // Calculate distance from this vertex to mouse position
    vec2 mousePos = uMouse / uResolution;
    vec2 centered = (vUv - 0.5) * 2.0;
    vec2 vertexPos = centered;
    
    float dist = distance(vertexPos, mousePos * 2.0);
    float repulsionRadius = 0.5;
    
    // Apply magnetic repulsion effect
    if (dist < repulsionRadius) {
      float force = (repulsionRadius - dist) * uMouseVelocity * 0.1;
      vec2 dir = normalize(vertexPos - mousePos * 2.0);
      vertexPos += dir * force;
    }
    
    // Apply subtle wave effect
    float wave = sin(dist * 10.0 - uTime) * 0.02;
    vertexPos += wave;
    
    // Auto-animation when idle
    if (uMouseVelocity < 0.01) {
      float idleWave = sin(vertexPos.x * 5.0 + uTime) * cos(vertexPos.y * 5.0 + uTime) * 0.02;
      vertexPos += idleWave;
    }
    
    vDistance = dist;
    
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x + vertexPos.x * 0.1, position.y + vertexPos.y * 0.1, position.z, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  uniform float uMouseVelocity;
  
  varying vec2 vUv;
  varying float vDistance;
  
  void main() {
    // Create base color based on time and UV coordinates
    vec3 baseColor = vec3(0.0, 1.0, 0.53); // #00ff88
    
    // Gradient based on distance from mouse
    float distFactor = smoothstep(0.0, 0.5, vDistance);
    
    // Color modulation
    vec3 color = mix(baseColor, vec3(0.02, 0.02, 0.02), distFactor);
    
    // Opacity based on distance and velocity
    float opacity = mix(0.8, 0.2, distFactor);
    opacity = opacity * (0.4 + uMouseVelocity * 0.6);
    
    // Pulse effect
    float pulse = sin(uTime * 0.5) * 0.1 + 0.9;
    opacity *= pulse;
    
    gl_FragColor = vec4(color, opacity);
  }
`;

const ParticleMesh = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  
  // Store previous mouse position and time for velocity calculation
  const prevMousePos = useRef({ x: 0, y: 0 });
  const prevTime = useRef(0);
  const mouseVelocity = useRef(0);
  const isPointerDown = useRef(false);
  
  // Mouse state
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handlePointerMove = (e: PointerEvent) => {
      const now = performance.now();
      const dt = now - prevTime.current;
      
      // Calculate normalized mouse position
      const x = e.clientX;
      const y = e.clientY;
      
      // Calculate velocity (with smoothing)
      if (dt > 0) {
        const dx = x - prevMousePos.current.x;
        const dy = y - prevMousePos.current.y;
        const newVelocity = Math.sqrt(dx * dx + dy * dy) * 0.5 / dt;
        
        // Apply damping (inertia)
        mouseVelocity.current = mouseVelocity.current * 0.92 + newVelocity * 0.08;
      }
      
      // Update state
      setMouse({ x, y });
      
      // Store for next frame
      prevMousePos.current = { x, y };
      prevTime.current = now;
    };
    
    const handlePointerDown = () => {
      isPointerDown.current = true;
    };
    
    const handlePointerUp = () => {
      isPointerDown.current = false;
      
      // Apply velocity decay when pointer is released
      gsap.to(mouseVelocity, {
        current: 0,
        duration: 1.5,
        ease: "power2.out"
      });
    };
    
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointerup', handlePointerUp);
    
    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointerup', handlePointerUp);
    };
  }, []);
  
  useFrame(({ clock }) => {
    if (!meshRef.current || !materialRef.current) return;
    
    const material = materialRef.current;
    
    // Update uniforms
    material.uniforms.uTime.value = clock.getElapsedTime();
    material.uniforms.uMouse.value = new THREE.Vector2(mouse.x, window.innerHeight - mouse.y);
    material.uniforms.uMouseVelocity.value = mouseVelocity.current;
    
    // Apply subtle rotation based on mouse movement when not directly interacting
    if (!isPointerDown.current) {
      meshRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.2) * 0.02;
      meshRef.current.rotation.y = Math.cos(clock.getElapsedTime() * 0.3) * 0.02;
    }
  });
  
  return (
    <mesh ref={meshRef} scale={[2, 2, 1]}>
      <planeGeometry args={[1, 1, 32, 32]} />
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        transparent={true}
        uniforms={{
          uTime: { value: 0 },
          uMouse: { value: new THREE.Vector2(0, 0) },
          uMouseVelocity: { value: 0 },
          uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) }
        }}
      />
    </mesh>
  );
};

const ParticleField = () => {
  const [domReady, setDomReady] = useState(false);
  
  useEffect(() => {
    setDomReady(true);
    
    // Handle resize
    const handleResize = () => {
      // Update resolution uniform if available
      const canvas = document.querySelector('canvas');
      if (canvas) {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  // Only render on client side
  if (!domReady) return null;
  
  return (
    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
      <Canvas
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
        camera={{
          position: [0, 0, 1],
          fov: 75,
          near: 0.01,
          far: 100
        }}
        style={{ background: '#0a0a0a' }}
      >
        <ParticleMesh />
      </Canvas>
    </div>
  );
};

export default ParticleField;
