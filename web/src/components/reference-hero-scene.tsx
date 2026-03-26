'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type ServiceVariant = 'memo' | 'signal' | 'research' | 'reputation';

type ServiceNodeConfig = {
  accent: string;
  anchor: [number, number, number];
  rotation: [number, number, number];
  variant: ServiceVariant;
  wobbleSpeed: number;
  phase: number;
  packetSpeed: number;
};

const SERVICE_NODES: ServiceNodeConfig[] = [
  {
    accent: '#dfeeff',
    anchor: [2.25, 1.05, 1.1],
    rotation: [-0.18, -0.46, 0.06],
    variant: 'memo',
    wobbleSpeed: 0.92,
    phase: 0.1,
    packetSpeed: 0.085,
  },
  {
    accent: '#7fb8ff',
    anchor: [2.9, -0.18, -0.38],
    rotation: [0.08, -0.62, -0.14],
    variant: 'signal',
    wobbleSpeed: 0.78,
    phase: 1.2,
    packetSpeed: 0.11,
  },
  {
    accent: '#8ce3ff',
    anchor: [1.52, -1.18, 1.34],
    rotation: [0.2, -0.26, -0.22],
    variant: 'research',
    wobbleSpeed: 1.08,
    phase: 2.7,
    packetSpeed: 0.095,
  },
  {
    accent: '#ffb287',
    anchor: [1.05, 1.35, -1.24],
    rotation: [-0.18, 0.08, 0.2],
    variant: 'reputation',
    wobbleSpeed: 0.88,
    phase: 3.8,
    packetSpeed: 0.075,
  },
];

function createEnvironmentTexture() {
  const canvas = document.createElement('canvas');
  canvas.width = 1024;
  canvas.height = 512;

  const context = canvas.getContext('2d');

  if (!context) {
    const fallback = new THREE.DataTexture(new Uint8Array([12, 10, 28, 255]), 1, 1);
    fallback.colorSpace = THREE.SRGBColorSpace;
    fallback.mapping = THREE.EquirectangularReflectionMapping;
    fallback.needsUpdate = true;
    return fallback;
  }

  const baseGradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  baseGradient.addColorStop(0, '#06040d');
  baseGradient.addColorStop(0.2, '#140d38');
  baseGradient.addColorStop(0.46, '#202978');
  baseGradient.addColorStop(0.72, '#3650c8');
  baseGradient.addColorStop(1, '#6d93ff');
  context.fillStyle = baseGradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const leftBloom = context.createRadialGradient(180, 120, 0, 180, 120, 210);
  leftBloom.addColorStop(0, 'rgba(255, 166, 118, 0.88)');
  leftBloom.addColorStop(0.34, 'rgba(255, 166, 118, 0.26)');
  leftBloom.addColorStop(1, 'rgba(255, 166, 118, 0)');
  context.fillStyle = leftBloom;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const rightBloom = context.createRadialGradient(798, 156, 0, 798, 156, 238);
  rightBloom.addColorStop(0, 'rgba(217, 237, 255, 0.84)');
  rightBloom.addColorStop(0.38, 'rgba(138, 188, 255, 0.22)');
  rightBloom.addColorStop(1, 'rgba(138, 188, 255, 0)');
  context.fillStyle = rightBloom;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const floorGlow = context.createRadialGradient(720, 408, 0, 720, 408, 278);
  floorGlow.addColorStop(0, 'rgba(96, 132, 255, 0.72)');
  floorGlow.addColorStop(0.42, 'rgba(96, 132, 255, 0.16)');
  floorGlow.addColorStop(1, 'rgba(96, 132, 255, 0)');
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
  gradient.addColorStop(0, 'rgba(255, 255, 255, 0.98)');
  gradient.addColorStop(0.24, 'rgba(202, 224, 255, 0.76)');
  gradient.addColorStop(0.55, 'rgba(114, 157, 255, 0.24)');
  gradient.addColorStop(1, 'rgba(114, 157, 255, 0)');
  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function createServiceCardTexture(accent: string, variant: ServiceVariant) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 672;

  const context = canvas.getContext('2d');

  if (!context) {
    const fallback = new THREE.DataTexture(new Uint8Array([18, 20, 42, 255]), 1, 1);
    fallback.colorSpace = THREE.SRGBColorSpace;
    fallback.needsUpdate = true;
    return fallback;
  }

  context.fillStyle = '#0a0d1b';
  context.fillRect(0, 0, canvas.width, canvas.height);

  const backgroundGradient = context.createLinearGradient(0, 0, canvas.width, canvas.height);
  backgroundGradient.addColorStop(0, 'rgba(255, 255, 255, 0.12)');
  backgroundGradient.addColorStop(1, 'rgba(255, 255, 255, 0.02)');
  context.fillStyle = backgroundGradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.strokeStyle = 'rgba(255,255,255,0.12)';
  context.lineWidth = 5;
  context.strokeRect(24, 24, canvas.width - 48, canvas.height - 48);

  context.fillStyle = accent;
  context.globalAlpha = 0.88;
  context.fillRect(40, 52, 132, 14);
  context.globalAlpha = 0.24;
  context.fillRect(40, 92, canvas.width - 80, 2);

  context.globalAlpha = 0.18;
  for (let row = 0; row < 4; row += 1) {
    context.fillRect(40, 132 + row * 34, canvas.width - 80, 2);
  }

  context.globalAlpha = 0.68;
  context.fillStyle = accent;

  if (variant === 'memo') {
    context.fillRect(40, 144, 188, 12);
    context.fillRect(40, 182, 272, 10);
    context.fillRect(40, 218, 232, 10);
    context.fillRect(40, 254, 210, 10);
    context.globalAlpha = 0.2;
    context.fillRect(332, 140, 132, 164);
  }

  if (variant === 'signal') {
    context.strokeStyle = accent;
    context.lineWidth = 8;
    context.beginPath();
    context.moveTo(44, 262);
    context.lineTo(118, 224);
    context.lineTo(182, 238);
    context.lineTo(256, 166);
    context.lineTo(326, 188);
    context.lineTo(398, 126);
    context.lineTo(464, 144);
    context.stroke();

    context.globalAlpha = 0.18;
    for (let index = 0; index < 6; index += 1) {
      context.fillRect(56 + index * 72, 314 - index * 18, 28, 88 + index * 16);
    }
  }

  if (variant === 'research') {
    context.globalAlpha = 0.2;
    for (let column = 0; column < 4; column += 1) {
      for (let row = 0; row < 2; row += 1) {
        context.fillRect(40 + column * 106, 146 + row * 98, 80, 70);
      }
    }

    context.globalAlpha = 0.75;
    context.fillRect(40, 368, 418, 10);
    context.fillRect(40, 404, 358, 10);
    context.fillRect(40, 440, 262, 10);
  }

  if (variant === 'reputation') {
    context.strokeStyle = accent;
    context.lineWidth = 10;
    context.beginPath();
    context.arc(152, 222, 82, -Math.PI * 0.78, Math.PI * 0.35, false);
    context.stroke();

    context.globalAlpha = 0.18;
    context.fillRect(274, 166, 176, 24);
    context.fillRect(274, 210, 140, 18);
    context.fillRect(274, 246, 188, 18);

    context.globalAlpha = 0.7;
    for (let index = 0; index < 4; index += 1) {
      context.fillRect(76, 356 + index * 44, 290 - index * 28, 12);
    }
  }

  context.globalAlpha = 0.24;
  context.fillStyle = accent;
  context.fillRect(40, canvas.height - 112, canvas.width - 80, 2);
  context.fillRect(40, canvas.height - 82, 238, 10);
  context.fillRect(40, canvas.height - 52, 178, 10);

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.needsUpdate = true;
  return texture;
}

function createCurvePoints(anchor: THREE.Vector3) {
  return [
    new THREE.Vector3(0.42, anchor.y * 0.16, anchor.z * 0.14),
    new THREE.Vector3(anchor.x * 0.18, anchor.y * 0.34, anchor.z * 0.2),
    new THREE.Vector3(anchor.x * 0.62, anchor.y * 0.78, anchor.z * 0.56),
    anchor.clone().multiplyScalar(0.94),
  ];
}

export default function ReferenceHeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountNode = mountRef.current;

    if (!mountNode) {
      return;
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const resources: Array<{ dispose: () => void }> = [];
    const track = <T extends { dispose: () => void }>(resource: T) => {
      resources.push(resource);
      return resource;
    };

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100);
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.06;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    renderer.domElement.className = 'atlas-hero-canvas';
    mountNode.appendChild(renderer.domElement);

    const environmentTexture = track(createEnvironmentTexture());
    const glowTexture = track(createGlowTexture());
    scene.environment = environmentTexture;

    const marketGroup = new THREE.Group();
    const coreGroup = new THREE.Group();
    marketGroup.add(coreGroup);
    scene.add(marketGroup);

    const hubShellGeometry = track(new THREE.CylinderGeometry(0.76, 0.88, 2.18, 6, 1, true));
    const hubCapGeometry = track(new THREE.CircleGeometry(0.82, 6));
    const hubInnerGeometry = track(new THREE.CylinderGeometry(0.34, 0.42, 1.56, 6));
    const hubFrameGeometry = track(new THREE.CylinderGeometry(0.86, 0.98, 2.28, 6));

    const hubShellMaterial = track(
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#dce7ff'),
        transparent: true,
        opacity: 0.18,
        metalness: 0.34,
        roughness: 0.1,
        clearcoat: 1,
        clearcoatRoughness: 0.12,
        transmission: 0.08,
        thickness: 1.6,
        envMapIntensity: 2.2,
      }),
    );
    const hubCapMaterial = track(
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#93adff'),
        transparent: true,
        opacity: 0.24,
        metalness: 0.42,
        roughness: 0.18,
        clearcoat: 1,
        clearcoatRoughness: 0.16,
        envMapIntensity: 2.2,
      }),
    );
    const hubInnerMaterial = track(
      new THREE.MeshPhysicalMaterial({
        color: new THREE.Color('#edf3ff'),
        emissive: new THREE.Color('#4c74ff'),
        emissiveIntensity: 0.32,
        metalness: 0.18,
        roughness: 0.08,
        clearcoat: 1,
        clearcoatRoughness: 0.1,
        transmission: 0.18,
        thickness: 2.1,
        attenuationColor: new THREE.Color('#7495ff'),
        attenuationDistance: 2.8,
        envMapIntensity: 2.1,
      }),
    );
    const hubFrameMaterial = track(
      new THREE.LineBasicMaterial({
        color: new THREE.Color('#eef5ff'),
        transparent: true,
        opacity: 0.16,
      }),
    );

    const hubShell = new THREE.Mesh(hubShellGeometry, hubShellMaterial);
    const hubTop = new THREE.Mesh(hubCapGeometry, hubCapMaterial);
    const hubBottom = new THREE.Mesh(hubCapGeometry, hubCapMaterial);
    const hubInner = new THREE.Mesh(hubInnerGeometry, hubInnerMaterial);
    const hubFrame = new THREE.LineSegments(
      track(new THREE.EdgesGeometry(hubFrameGeometry)),
      hubFrameMaterial,
    );

    hubTop.rotation.x = -Math.PI / 2;
    hubTop.position.y = 1.09;
    hubBottom.rotation.x = Math.PI / 2;
    hubBottom.position.y = -1.09;
    hubFrame.scale.setScalar(1.01);

    const hubGlow = new THREE.Sprite(
      track(
        new THREE.SpriteMaterial({
          map: glowTexture,
          color: new THREE.Color('#85a4ff'),
          transparent: true,
          opacity: 0.42,
          blending: THREE.AdditiveBlending,
          depthWrite: false,
        }),
      ),
    );
    hubGlow.scale.set(4.2, 4.2, 1);
    hubGlow.position.set(0, 0.08, -0.18);

    const paymentRing = new THREE.Mesh(
      track(new THREE.TorusGeometry(1.42, 0.022, 18, 220)),
      track(
        new THREE.MeshBasicMaterial({
          color: new THREE.Color('#9ab7ff'),
          transparent: true,
          opacity: 0.32,
        }),
      ),
    );
    paymentRing.rotation.set(Math.PI / 2, 0.42, 0.16);

    const reputationRing = new THREE.Mesh(
      track(new THREE.TorusGeometry(1.9, 0.014, 16, 200)),
      track(
        new THREE.MeshBasicMaterial({
          color: new THREE.Color('#f0f4ff'),
          transparent: true,
          opacity: 0.16,
        }),
      ),
    );
    reputationRing.rotation.set(0.58, 0.1, 0.92);

    const settlementRing = new THREE.Mesh(
      track(new THREE.TorusGeometry(2.4, 0.012, 14, 240)),
      track(
        new THREE.MeshBasicMaterial({
          color: new THREE.Color('#80b4ff'),
          transparent: true,
          opacity: 0.14,
        }),
      ),
    );
    settlementRing.rotation.set(0.08, 0.18, -0.24);

    coreGroup.add(
      settlementRing,
      reputationRing,
      paymentRing,
      hubGlow,
      hubShell,
      hubTop,
      hubBottom,
      hubInner,
      hubFrame,
    );

    const serviceNodes: Array<{
      anchor: THREE.Group;
      card: THREE.Group;
      baseY: number;
      baseRotationZ: number;
      phase: number;
      wobbleSpeed: number;
      packet: THREE.Mesh;
      packetSpeed: number;
      curve: THREE.CatmullRomCurve3;
      halo: THREE.Sprite;
    }> = [];

    for (const config of SERVICE_NODES) {
      const anchor = new THREE.Group();
      const anchorVector = new THREE.Vector3(...config.anchor);
      anchor.position.copy(anchorVector);
      marketGroup.add(anchor);

      const cardGroup = new THREE.Group();
      cardGroup.rotation.set(...config.rotation);
      anchor.add(cardGroup);

      const cardTexture = track(createServiceCardTexture(config.accent, config.variant));
      const cardGeometry = track(new THREE.BoxGeometry(0.88, 1.18, 0.06));
      const sideMaterial = track(
        new THREE.MeshStandardMaterial({
          color: new THREE.Color('#101623'),
          metalness: 0.34,
          roughness: 0.32,
          transparent: true,
          opacity: 0.92,
        }),
      );
      const faceMaterial = track(
        new THREE.MeshPhysicalMaterial({
          map: cardTexture,
          transparent: true,
          opacity: 0.96,
          metalness: 0.22,
          roughness: 0.12,
          clearcoat: 1,
          clearcoatRoughness: 0.14,
          envMapIntensity: 1.6,
          emissive: new THREE.Color(config.accent),
          emissiveIntensity: 0.08,
        }),
      );
      const cardMesh = new THREE.Mesh(cardGeometry, [
        sideMaterial,
        sideMaterial,
        sideMaterial,
        sideMaterial,
        faceMaterial,
        faceMaterial,
      ]);
      cardGroup.add(cardMesh);

      const cardFrame = new THREE.LineSegments(
        track(new THREE.EdgesGeometry(cardGeometry)),
        track(
          new THREE.LineBasicMaterial({
            color: new THREE.Color('#eef5ff'),
            transparent: true,
            opacity: 0.2,
          }),
        ),
      );
      cardFrame.scale.setScalar(1.004);
      cardGroup.add(cardFrame);

      const halo = new THREE.Sprite(
        track(
          new THREE.SpriteMaterial({
            map: glowTexture,
            color: new THREE.Color(config.accent),
            transparent: true,
            opacity: 0.22,
            blending: THREE.AdditiveBlending,
            depthWrite: false,
          }),
        ),
      );
      halo.scale.set(2.2, 2.2, 1);
      halo.position.set(0, 0, -0.18);
      cardGroup.add(halo);

      const endpoint = new THREE.Mesh(
        track(new THREE.SphereGeometry(0.055, 18, 18)),
        track(
          new THREE.MeshBasicMaterial({
            color: new THREE.Color(config.accent),
            transparent: true,
            opacity: 0.8,
          }),
        ),
      );
      anchor.add(endpoint);

      const curve = new THREE.CatmullRomCurve3(createCurvePoints(anchorVector));
      const rail = new THREE.Mesh(
        track(new THREE.TubeGeometry(curve, 72, 0.012, 8, false)),
        track(
          new THREE.MeshBasicMaterial({
            color: new THREE.Color(config.accent),
            transparent: true,
            opacity: 0.18,
          }),
        ),
      );
      marketGroup.add(rail);

      const packet = new THREE.Mesh(
        track(new THREE.SphereGeometry(0.06, 18, 18)),
        track(
          new THREE.MeshBasicMaterial({
            color: new THREE.Color(config.accent),
            transparent: true,
            opacity: 0.95,
          }),
        ),
      );
      marketGroup.add(packet);

      serviceNodes.push({
        anchor,
        card: cardGroup,
        baseY: 0,
        baseRotationZ: config.rotation[2],
        phase: config.phase,
        wobbleSpeed: config.wobbleSpeed,
        packet,
        packetSpeed: config.packetSpeed,
        curve,
        halo,
      });
    }

    const particleCount = 120;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let index = 0; index < particleCount; index += 1) {
      const radius = THREE.MathUtils.randFloat(2.8, 5.2);
      const theta = THREE.MathUtils.randFloat(0, Math.PI * 2);
      const phi = THREE.MathUtils.randFloat(0.55, Math.PI - 0.46);

      particlePositions[index * 3] = radius * Math.sin(phi) * Math.cos(theta) + 1.2;
      particlePositions[index * 3 + 1] = radius * Math.cos(phi) * 0.72;
      particlePositions[index * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }

    const particleGeometry = track(new THREE.BufferGeometry());
    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = track(
      new THREE.PointsMaterial({
        color: new THREE.Color('#dbe8ff'),
        transparent: true,
        opacity: 0.58,
        size: 0.032,
        sizeAttenuation: true,
        depthWrite: false,
      }),
    );
    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    scene.add(new THREE.AmbientLight('#f4f7ff', 0.56));

    const keyLight = new THREE.DirectionalLight('#ffffff', 1.8);
    keyLight.position.set(4.6, 3.4, 6.1);
    scene.add(keyLight);

    const coreLight = new THREE.PointLight('#6f90ff', 34, 16, 2);
    coreLight.position.set(0.8, 0.8, 3.8);
    scene.add(coreLight);

    const coolLight = new THREE.PointLight('#8be1ff', 18, 14, 1.6);
    coolLight.position.set(3.8, 2.4, 1.8);
    scene.add(coolLight);

    const warmLight = new THREE.PointLight('#ff9b72', 14, 12, 1.5);
    warmLight.position.set(-1.6, -1.8, 2.2);
    scene.add(warmLight);

    let frameId = 0;
    let baseGroupY = 0;
    const pointerTarget = { x: 0, y: 0 };
    const pointerCurrent = { x: 0, y: 0 };
    const clock = new THREE.Clock();

    const updateSize = () => {
      const width = Math.max(mountNode.clientWidth, 1);
      const height = Math.max(mountNode.clientHeight, 1);
      const isDesktop = width >= 980;
      const isTablet = width >= 640;

      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.fov = isDesktop ? 33 : isTablet ? 35 : 39;
      camera.position.set(0, isDesktop ? 0.1 : 0.16, isDesktop ? 9.8 : isTablet ? 8.6 : 7.1);
      camera.updateProjectionMatrix();

      marketGroup.position.x = isDesktop ? 1.18 : isTablet ? 0.78 : 0.24;
      marketGroup.position.z = 0;
      baseGroupY = isDesktop ? 0.14 : isTablet ? 0.28 : 0.48;
      marketGroup.position.y = baseGroupY;
      marketGroup.scale.setScalar(isDesktop ? 0.9 : isTablet ? 0.74 : 0.58);
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
      pointerCurrent.x = THREE.MathUtils.lerp(pointerCurrent.x, pointerTarget.x, 0.04);
      pointerCurrent.y = THREE.MathUtils.lerp(pointerCurrent.y, pointerTarget.y, 0.04);

      marketGroup.rotation.y =
        (reduceMotion ? 0.1 : elapsed * 0.07) + pointerCurrent.x * 0.18 - 0.12;
      marketGroup.rotation.x = 0.05 + pointerCurrent.y * -0.08;
      marketGroup.position.y = baseGroupY + (reduceMotion ? 0 : Math.sin(elapsed * 0.62) * 0.08);

      coreGroup.rotation.y += reduceMotion ? 0.0008 : 0.0026;
      paymentRing.rotation.z += reduceMotion ? 0.0006 : 0.0028;
      reputationRing.rotation.x -= reduceMotion ? 0.0005 : 0.0018;
      settlementRing.rotation.y -= reduceMotion ? 0.0003 : 0.0011;
      hubGlow.material.opacity = 0.36 + Math.sin(elapsed * 1.25) * 0.05;

      for (const node of serviceNodes) {
        node.card.position.y = Math.sin(elapsed * node.wobbleSpeed + node.phase) * 0.08;
        node.card.rotation.z =
          node.baseRotationZ + Math.sin(elapsed * (node.wobbleSpeed + 0.24) + node.phase) * 0.045;
        node.halo.material.opacity = 0.16 + Math.sin(elapsed * 1.12 + node.phase) * 0.04;
        node.packet.position.copy(
          node.curve.getPointAt(
            (elapsed * node.packetSpeed + node.phase * 0.08) % 1,
          ),
        );
      }

      particles.rotation.y = elapsed * 0.03;
      particles.rotation.x = Math.sin(elapsed * 0.22) * 0.04;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      mountNode.removeEventListener('pointermove', handlePointerMove);
      mountNode.removeEventListener('pointerleave', handlePointerLeave);

      renderer.dispose();
      renderer.forceContextLoss();
      resources.forEach((resource) => resource.dispose());

      if (mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="atlas-hero-scene-mount" aria-hidden="true" />;
}
