'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

function createEnvironmentTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;

  const context = canvas.getContext('2d');

  if (!context) {
    const fallback = new THREE.DataTexture(new Uint8Array([18, 18, 18, 255]), 1, 1);
    fallback.colorSpace = THREE.SRGBColorSpace;
    fallback.mapping = THREE.EquirectangularReflectionMapping;
    fallback.needsUpdate = true;
    return fallback;
  }

  const baseGradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  baseGradient.addColorStop(0, '#080513');
  baseGradient.addColorStop(0.24, '#181152');
  baseGradient.addColorStop(0.52, '#3142bf');
  baseGradient.addColorStop(0.78, '#4f71ff');
  baseGradient.addColorStop(1, '#87deff');
  context.fillStyle = baseGradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const warmBloom = context.createRadialGradient(220, 108, 0, 220, 108, 210);
  warmBloom.addColorStop(0, 'rgba(255, 163, 118, 0.88)');
  warmBloom.addColorStop(0.45, 'rgba(255, 163, 118, 0.18)');
  warmBloom.addColorStop(1, 'rgba(255, 163, 118, 0)');
  context.fillStyle = warmBloom;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const coolBloom = context.createRadialGradient(792, 196, 0, 792, 196, 240);
  coolBloom.addColorStop(0, 'rgba(212, 240, 255, 0.86)');
  coolBloom.addColorStop(0.38, 'rgba(134, 196, 255, 0.2)');
  coolBloom.addColorStop(1, 'rgba(134, 196, 255, 0)');
  context.fillStyle = coolBloom;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const floorGlow = context.createRadialGradient(682, 420, 0, 682, 420, 270);
  floorGlow.addColorStop(0, 'rgba(80, 126, 255, 0.72)');
  floorGlow.addColorStop(0.42, 'rgba(80, 126, 255, 0.16)');
  floorGlow.addColorStop(1, 'rgba(80, 126, 255, 0)');
  context.fillStyle = floorGlow;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.needsUpdate = true;
  return texture;
}

function createGlowTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 512;

  const context = canvas.getContext('2d');

  if (!context) {
    const fallback = new THREE.DataTexture(new Uint8Array([255, 255, 255, 255]), 1, 1);
    fallback.colorSpace = THREE.SRGBColorSpace;
    fallback.needsUpdate = true;
    return fallback;
  }

  const gradient = context.createRadialGradient(256, 256, 0, 256, 256, 256);
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.96)');
  gradient.addColorStop(0.24, 'rgba(200, 224, 255, 0.72)');
  gradient.addColorStop(0.55, 'rgba(111, 157, 255, 0.22)');
  gradient.addColorStop(1, 'rgba(111, 157, 255, 0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function sculptGeometry(geometry: THREE.BufferGeometry) {
  const position = geometry.getAttribute('position');
  const vertex = new THREE.Vector3();

  for (let index = 0; index < position.count; index += 1) {
    vertex.fromBufferAttribute(position, index);
    const normal = vertex.clone().normalize();
    const displacement =
      1 +
      0.16 * Math.sin(normal.x * 5.2) * Math.cos(normal.y * 4.4) +
      0.11 * Math.sin(normal.z * 6.6) +
      0.04 * Math.cos((normal.x + normal.z) * 9.8);

    vertex.multiplyScalar(displacement);
    position.setXYZ(index, vertex.x, vertex.y, vertex.z);
  }

  position.needsUpdate = true;
  geometry.computeVertexNormals();
}

export default function ReferenceHeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountNode = mountRef.current;

    if (!mountNode) {
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.08;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.domElement.className = 'reference-hero-canvas';
    mountNode.appendChild(renderer.domElement);

    const environmentTexture = createEnvironmentTexture();
    const glowTexture = createGlowTexture();
    scene.environment = environmentTexture;

    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    const solidGeometry = new THREE.IcosahedronGeometry(1.34, 4);
    sculptGeometry(solidGeometry);

    const shellGeometry = solidGeometry.clone();
    const edgeGeometry = new THREE.EdgesGeometry(solidGeometry, 18);

    const solidMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#f4f8ff'),
      emissive: new THREE.Color('#3659d8'),
      emissiveIntensity: 0.16,
      metalness: 0.22,
      roughness: 0.08,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      envMapIntensity: 1.95,
      transmission: 0.12,
      thickness: 1.8,
      ior: 1.22,
      attenuationColor: new THREE.Color('#5e8eff'),
      attenuationDistance: 2.4,
    });

    const shellMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#b2caff'),
      transparent: true,
      opacity: 0.12,
      metalness: 0.6,
      roughness: 0.18,
      clearcoat: 1,
      clearcoatRoughness: 0.2,
      envMapIntensity: 2.5,
      side: THREE.BackSide,
      depthWrite: false,
    });

    const edgeMaterial = new THREE.LineBasicMaterial({
      color: new THREE.Color('#eef5ff'),
      transparent: true,
      opacity: 0.16,
    });

    const solidMesh = new THREE.Mesh(solidGeometry, solidMaterial);
    const shellMesh = new THREE.Mesh(shellGeometry, shellMaterial);
    shellMesh.scale.setScalar(1.085);
    const edgeLines = new THREE.LineSegments(edgeGeometry, edgeMaterial);
    edgeLines.scale.setScalar(1.02);

    const outerRing = new THREE.Mesh(
      new THREE.TorusGeometry(2.3, 0.022, 18, 220),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#9db7ff'),
        transparent: true,
        opacity: 0.22,
      }),
    );
    outerRing.rotation.set(Math.PI * 0.22, 0, Math.PI * 0.16);

    const innerRing = new THREE.Mesh(
      new THREE.TorusGeometry(1.88, 0.014, 16, 180),
      new THREE.MeshBasicMaterial({
        color: new THREE.Color('#dfeeff'),
        transparent: true,
        opacity: 0.18,
      }),
    );
    innerRing.rotation.set(Math.PI * 0.7, Math.PI * 0.25, 0);

    const glow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: glowTexture,
        color: new THREE.Color('#87b7ff'),
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
      }),
    );
    glow.scale.set(6.6, 6.6, 1);
    glow.position.set(0.08, 0.06, -0.8);

    mainGroup.add(glow, outerRing, innerRing, shellMesh, edgeLines, solidMesh);

    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);

    for (let index = 0; index < particleCount; index += 1) {
      const radius = THREE.MathUtils.randFloat(3.1, 5.2);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0.4, Math.PI - 0.42);

      particlePositions[index * 3] = radius * Math.sin(phi) * Math.cos(theta);
      particlePositions[index * 3 + 1] = radius * Math.cos(phi) * 0.7;
      particlePositions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    const particleGeometry = new THREE.BufferGeometry();
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: new THREE.Color('#d9e7ff'),
      transparent: true,
      opacity: 0.66,
      size: 0.034,
      sizeAttenuation: true,
      depthWrite: false,
    });
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    scene.add(new THREE.AmbientLight('#f5f8ff', 0.7));

    const keyLight = new THREE.DirectionalLight('#ffffff', 1.9);
    keyLight.position.set(4.2, 2.8, 5.8);
    scene.add(keyLight);

    const rimLight = new THREE.PointLight('#5a7cff', 34, 18, 2.1);
    rimLight.position.set(2.9, 1.3, 4.8);
    scene.add(rimLight);

    const coolLight = new THREE.PointLight('#8be0ff', 22, 16, 1.7);
    coolLight.position.set(-3.4, 2.6, 2.4);
    scene.add(coolLight);

    const warmLight = new THREE.PointLight('#ff946d', 14, 16, 1.6);
    warmLight.position.set(-2.6, -2.1, 2.2);
    scene.add(warmLight);

    let baseGroupY = 0;
    const pointerTarget = { x: 0, y: 0 };
    const pointerCurrent = { x: 0, y: 0 };
    const clock = new THREE.Clock();
    let frameId = 0;

    const updateSize = () => {
      const width = Math.max(mountNode.clientWidth, 1);
      const height = Math.max(mountNode.clientHeight, 1);
      const isDesktop = width >= 960;
      const isTablet = width >= 640;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.fov = isDesktop ? 29 : isTablet ? 34 : 40;
      camera.position.set(isDesktop ? 0.2 : 0, isDesktop ? 0.12 : 0.24, isDesktop ? 7.1 : 6.4);
      camera.updateProjectionMatrix();

      mainGroup.position.x = isDesktop ? 1.18 : isTablet ? 0.72 : 0;
      mainGroup.position.z = 0;
      baseGroupY = isDesktop ? 0.18 : isTablet ? 0.34 : 0.7;
      mainGroup.position.y = baseGroupY;
      mainGroup.scale.setScalar(isDesktop ? 1.12 : isTablet ? 0.96 : 0.8);
    };

    const resizeObserver = new ResizeObserver(updateSize);
    resizeObserver.observe(mountNode);
    updateSize();

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = mountNode.getBoundingClientRect();
      const normalizedX = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
      const normalizedY = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
      pointerTarget.x = THREE.MathUtils.clamp(normalizedX, -1, 1);
      pointerTarget.y = THREE.MathUtils.clamp(normalizedY, -1, 1);
    };

    const handlePointerLeave = () => {
      pointerTarget.x = 0;
      pointerTarget.y = 0;
    };

    mountNode.addEventListener('pointermove', handlePointerMove);
    mountNode.addEventListener('pointerleave', handlePointerLeave);

    const animate = () => {
      frameId = window.requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();
      pointerCurrent.x = THREE.MathUtils.lerp(pointerCurrent.x, pointerTarget.x, 0.05);
      pointerCurrent.y = THREE.MathUtils.lerp(pointerCurrent.y, pointerTarget.y, 0.05);

      mainGroup.rotation.y =
        (reduceMotion ? 0.18 : elapsed * 0.22) + pointerCurrent.x * 0.28 - 0.32;
      mainGroup.rotation.x = 0.2 + pointerCurrent.y * -0.18 + Math.sin(elapsed * 0.8) * 0.04;
      mainGroup.position.y = baseGroupY + (reduceMotion ? 0 : Math.sin(elapsed * 0.9) * 0.12);

      solidMesh.rotation.z += reduceMotion ? 0.0003 : 0.0018;
      shellMesh.rotation.z -= reduceMotion ? 0.0004 : 0.0026;
      edgeLines.rotation.z -= reduceMotion ? 0.0002 : 0.0011;
      outerRing.rotation.y += reduceMotion ? 0.0004 : 0.0024;
      outerRing.rotation.z += reduceMotion ? 0.0003 : 0.0016;
      innerRing.rotation.x -= reduceMotion ? 0.0004 : 0.002;
      particles.rotation.y = elapsed * 0.04;
      particles.rotation.x = Math.sin(elapsed * 0.2) * 0.05;
      glow.material.opacity = 0.54 + Math.sin(elapsed * 1.4) * 0.08;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      mountNode.removeEventListener('pointermove', handlePointerMove);
      mountNode.removeEventListener('pointerleave', handlePointerLeave);

      solidGeometry.dispose();
      shellGeometry.dispose();
      edgeGeometry.dispose();
      particleGeometry.dispose();
      solidMaterial.dispose();
      shellMaterial.dispose();
      edgeMaterial.dispose();
      particleMaterial.dispose();
      outerRing.geometry.dispose();
      innerRing.geometry.dispose();
      (outerRing.material as THREE.Material).dispose();
      (innerRing.material as THREE.Material).dispose();
      (glow.material as THREE.Material).dispose();
      environmentTexture.dispose();
      glowTexture.dispose();
      renderer.dispose();
      renderer.forceContextLoss();

      if (mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="reference-hero-scene-mount" aria-hidden="true" />;
}
