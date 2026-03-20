'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduced(media.matches);

    sync();
    media.addEventListener('change', sync);
    return () => media.removeEventListener('change', sync);
  }, []);

  return reduced;
}

const vertexShader = `
  uniform float uTime;

  varying vec3 vNormalDir;
  varying vec3 vWorldPosition;

  void main() {
    vec3 transformed = position;
    float breathing = sin(uTime * 0.42) * 0.018;
    transformed += normal * breathing;

    vec4 worldPosition = modelMatrix * vec4(transformed, 1.0);
    vWorldPosition = worldPosition.xyz;
    vNormalDir = normalize(normalMatrix * normal);

    gl_Position = projectionMatrix * viewMatrix * worldPosition;
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uPointer;

  varying vec3 vNormalDir;
  varying vec3 vWorldPosition;

  void main() {
    vec3 normal = normalize(vNormalDir);
    vec3 viewDir = normalize(cameraPosition - vWorldPosition);

    vec3 blue = vec3(0.12, 0.17, 0.99);
    vec3 red = vec3(0.97, 0.35, 0.27);
    vec3 violet = vec3(0.42, 0.11, 0.88);
    vec3 highlightWarm = vec3(1.00, 0.93, 0.72);
    vec3 highlightCool = vec3(0.82, 0.93, 1.00);

    float horizontalMix = smoothstep(-0.82, 0.92, normal.x * 0.95 + normal.y * 0.08);
    float diagonalMix = smoothstep(-0.25, 0.92, normal.z * 0.72 - normal.y * 0.22 + normal.x * 0.24);
    float warmBand = smoothstep(-0.55, 0.75, normal.y + normal.x * 0.32);

    vec3 color = mix(blue, red, horizontalMix);
    color = mix(color, violet, diagonalMix * 0.72);
    color = mix(color, red, warmBand * 0.24);

    vec3 lightA = normalize(vec3(-0.45 + uPointer.x * 0.32, 1.05 + uPointer.y * 0.22, 1.25));
    vec3 lightB = normalize(vec3(0.92, 0.12, 1.1));

    float specA = pow(max(dot(reflect(-lightA, normal), viewDir), 0.0), 30.0);
    float specB = pow(max(dot(reflect(-lightB, normal), viewDir), 0.0), 16.0);
    float fresnel = pow(1.0 - max(dot(viewDir, normal), 0.0), 3.6);

    color += highlightWarm * specA * 0.95;
    color += highlightCool * specB * 0.22;
    color += highlightCool * fresnel * 0.12;

    float slowShift = sin(uTime * 0.22 + normal.x * 2.6 - normal.y * 1.8) * 0.035;
    color += vec3(slowShift * 0.4, slowShift * 0.24, slowShift * 0.55);

    gl_FragColor = vec4(color, 1.0);
  }
`;

function GradientSphere({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uPointer: { value: new THREE.Vector2(0, 0) },
    }),
    [],
  );

  useFrame((state, delta) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
      materialRef.current.uniforms.uPointer.value.lerp(
        new THREE.Vector2(state.pointer.x, state.pointer.y),
        0.06,
      );
    }

    if (groupRef.current) {
      const targetX = reducedMotion ? 0.04 : -state.pointer.y * 0.16;
      const targetY = reducedMotion ? -0.32 : state.pointer.x * 0.42 - 0.28;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetX,
        0.045,
      );
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetY,
        0.045,
      );
      groupRef.current.rotation.z += reducedMotion ? 0 : delta * 0.03;
      groupRef.current.position.y = THREE.MathUtils.lerp(
        groupRef.current.position.y,
        reducedMotion ? 0.02 : Math.sin(state.clock.getElapsedTime() * 0.45) * 0.08,
        0.04,
      );
    }
  });

  return (
    <group ref={groupRef} position={[1.9, 0.18, 0]}>
      <mesh scale={[1.34, 1.34, 1.34]}>
        <sphereGeometry args={[2.24, 192, 192]} />
        <meshBasicMaterial
          color="#fff0a8"
          transparent
          opacity={0.18}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>
      <mesh scale={[1.04, 1.04, 1.04]}>
        <sphereGeometry args={[2.04, 192, 192]} />
        <shaderMaterial
          ref={materialRef}
          uniforms={uniforms}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
        />
      </mesh>
    </group>
  );
}

function Scene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <>
      <color attach="background" args={['transparent']} />
      <ambientLight intensity={0.35} />
      <GradientSphere reducedMotion={reducedMotion} />
      <OrbitControls
        enablePan={false}
        enableZoom={false}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.24}
        rotateSpeed={0.42}
        dampingFactor={0.08}
        enableDamping
        minPolarAngle={Math.PI * 0.35}
        maxPolarAngle={Math.PI * 0.65}
        minAzimuthAngle={-Math.PI / 3.2}
        maxAzimuthAngle={Math.PI / 3.2}
      />
    </>
  );
}

export default function HomeHeroScene() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 8.7], fov: 20 }}
      gl={{ alpha: true, antialias: true }}
    >
      <Scene reducedMotion={reducedMotion} />
    </Canvas>
  );
}
