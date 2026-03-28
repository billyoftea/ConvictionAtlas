'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

const TEXTURE_PATHS = [
  '/textures/_eclipse_new13.jpg',
  '/textures/_texture_3_8.jpg',
  '/textures/_texture_5.jpg',
  '/textures/4_4_ethereal.jpg',
];

const HERO_TIMELINE = {
  n: [{ t: 0, value: 2 }],
  posClip: [{ t: 0, value: 1 }],
  negClip: [{ t: 0, value: 1 }],
  stereo: [{ t: 0.5, value: 1 }],
  rotation: [
    { t: -3, value: 0 },
    { t: 0, value: 0 },
    { t: 5.5, value: 0 },
    { t: 9, value: 0 },
  ],
  translation: [
    { t: 0, value: 0 },
    { t: 0.5, value: 1.2 },
    { t: 2, value: 1.2 },
    { t: 4, value: 1.2 },
    { t: 5.5, value: 1.2 },
    { t: 6, value: 0 },
  ],
  scale: [
    { t: 0, value: 1.5 / Math.sqrt(2 / 3) },
    { t: 0.9, value: 0.55 },
    { t: 1.7, value: 0.65 },
    { t: 4.3, value: 0.65 },
    { t: 5.1, value: 0.6 },
    { t: 6, value: 1.5 / Math.sqrt(2 / 3) },
  ],
  t: [
    { t: 0, value: 1 / (2 / 3) },
    { t: 2, value: 1 / (2 / 3) },
    { t: 4, value: -1 / (2 / 3) },
    { t: 6, value: -1 / (2 / 3) },
  ],
  alpha: [
    { t: 0, value: 0.00001 },
    { t: 1, value: 1 },
    { t: 5, value: 1 },
    { t: 6, value: 0.00001 },
  ],
  beta: [
    { t: 0, value: 1 },
    { t: 1, value: 1 / 20 },
    { t: 5, value: 1 / 20 },
    { t: 6, value: 1 },
  ],
  xi: [
    { t: 0, value: 0 },
    { t: 2, value: 1 },
    { t: 4, value: 1 },
    { t: 5, value: 0 },
    { t: 6, value: 0 },
  ],
  lambda: [
    { t: 0, value: 0 },
    { t: 2, value: 1 },
    { t: 4, value: 1 },
    { t: 6, value: 0 },
  ],
  q: [{ t: 0, value: 2 / 3 }],
  eta: [{ t: 0, value: 1 }],
  omega: [{ t: 0, value: 2 }],
  Qinv: [{ t: 0, value: 1 / (2 / 3) }],
} as const;

const MAIN_VERTEX_SHADER = `precision highp float;
attribute vec2 uv;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
varying vec3 vPosition, vNormal;
varying vec2 vUV;
varying vec2 ovUV;
uniform float t, q, xi, eta, alpha, lambda, beta, n, omega, scale, translation;
uniform float stereo, rotation, Qinv, posClip, negClip;
#define PI 3.141592653589

float safepow(float x, float n) {
   return pow(abs(x), n);
}
float sqr(float x) {
   return x * x;
}

float intpow(float x, float n) {
   return pow(abs(x), n) * (mod(n, 2.0) == 0.0 ? 1.0 : sign(x));
}

vec3 f(vec2 uv) {
   uv.x = min(PI * 0.5 - 1e-5, uv.x);
   uv.x = max(-PI * 0.5 + 1e-5, uv.x);
   float theta = uv.x;
   float phi = uv.y;
   float cphi = cos(phi);
   float sphi = sin(phi);
   float sth = sin(theta);
   float cosnth = intpow(cos(theta), n);
   float h = omega * sth / cosnth;

   float p = 1.0 - abs(q * t);
   float kappa = mix(0.0, 0.5 * (n - 1.0) / n, stereo);

   float x, y, z;
   bool eq4 = abs(t) < Qinv - 1e-5;
   if (eq4) {
      x = t * cphi + p * sin((n - 1.0) * phi) - h * sphi;
      y = t * sphi + p * cos((n - 1.0) * phi) + h * cphi;
      z = h * sin(n * phi) - (t / n) * cos(n * phi) - q * t * h;
   } else {
      x = (t * (1.0 - lambda + lambda * cosnth) * cphi - lambda * omega * sth * sphi) / cosnth;
      y = (t * (1.0 - lambda + lambda * cosnth) * sphi + lambda * omega * sth * cphi) / cosnth;
      z = lambda * (omega * sth * (sin(n * phi) - q * t) / cosnth - (t / n) * cos(n * phi)) - (1.0 - lambda) * pow(eta, 1.0 + kappa) * t * pow(abs(t), 2.0 * kappa) * sth / sqr(cosnth);
   }

   float xiex2y2 = xi + eta * (x * x + y * y);
   float xp = x / safepow(xiex2y2, kappa);
   float yp = y / safepow(xiex2y2, kappa);
   float zp = z / mix(1.0, xiex2y2, stereo);

   float gamma = mix(1.0, 2.0 * sqrt(alpha * beta), stereo);
   float bxpyp = beta * (xp * xp + yp * yp);
   float egz = exp(gamma * zp);
   float xpp = xp * mix(1.0, egz / (alpha + bxpyp), stereo);
   float ypp = yp * mix(1.0, egz / (alpha + bxpyp), stereo);
   float zpp = mix(zp, (alpha - bxpyp) / (alpha + bxpyp) * egz / gamma - (alpha - beta) / (alpha + beta) / gamma, stereo);

   vec3 pos = vec3(xpp, ypp, zpp).xzy * vec3(1.0, 1.0, -1.0) * scale + vec3(0.0, translation, 0.0);

   float cr = cos(rotation);
   float sr = sin(rotation);
   mat2 R = mat2(cr, sr, -sr, cr);
   pos.xz = R * pos.xz;
   return pos;
}

void main () {
   vec2 cuv = vec2(mix(-PI * .5, PI * .5, uv.y), mix(-PI, PI, uv.x));
   vUV = cuv * vec2(cuv.x > 0.0 ? posClip : negClip, 1.0);
   ovUV = uv;
   vPosition = f(vUV);
   float dx = 2e-2;
   vec3 pu = f(vUV + vec2(dx, 0.0));
   vec3 pv = f(vUV + vec2(0.0, dx));
   vec3 dpdu = pu - vPosition;
   vec3 dpdv = pv - vPosition;
   vNormal = normalize(cross(dpdu, dpdv));

   gl_Position = projectionMatrix * modelViewMatrix * vec4(vPosition, 1.0);
}`;

const MAIN_FRAGMENT_SHADER = `precision highp float;
varying vec2 ovUV;
uniform sampler2D texture;
uniform sampler2D texture2;

void main () {
   vec4 front = texture2D(texture, ovUV);
   vec4 back = texture2D(texture2, ovUV);
   gl_FragColor = gl_FrontFacing ? front : back;
}`;

const BACKGROUND_VERTEX_SHADER = `precision highp float;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
attribute vec3 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
   vUv = uv;
   vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
   gl_Position = projectionMatrix * modelViewPosition;
}`;

const BACKGROUND_FRAGMENT_SHADER = `precision highp float;
varying vec2 vUv;
uniform sampler2D texture;
uniform sampler2D texture2;
uniform float textureTransitionAmount;

void main() {
   vec4 tex = texture2D(texture, vUv);
   vec4 tex2 = texture2D(texture2, vec2(1.0 - vUv.x, 1.0 - vUv.y));
   gl_FragColor = mix(tex, tex2, textureTransitionAmount);
}`;

type TimelineValue = number;
type TimelineStep = {
  t: number;
  value: TimelineValue;
  ease?: (progress: number) => number;
};

function cubicEaseInOut(progress: number) {
  return progress < 0.5
    ? 4 * progress * progress * progress
    : 0.5 * Math.pow(2 * progress - 2, 3) + 1;
}

function power1InOut(progress: number) {
  return progress < 0.5
    ? 2 * progress * progress
    : 1 - Math.pow(-2 * progress + 2, 2) / 2;
}

function interpolateValue(from: TimelineValue, to: TimelineValue, progress: number) {
  return from + (to - from) * progress;
}

function sampleTrack(track: readonly TimelineStep[], position: number) {
  let previous = track[0];

  for (let index = 0; index < track.length; index += 1) {
    const next = track[index];

    if (position < next.t) {
      const span = next.t - previous.t;
      const rawProgress = span === 0 ? 1 : (position - previous.t) / span;
      const easedProgress = (next.ease ?? cubicEaseInOut)(THREE.MathUtils.clamp(rawProgress, 0, 1));
      return interpolateValue(previous.value, next.value, easedProgress);
    }

    previous = next;
  }

  return previous.value;
}

function sampleHeroState(position: number) {
  return Object.fromEntries(
    Object.entries(HERO_TIMELINE).map(([key, track]) => [key, sampleTrack(track, position)]),
  ) as Record<keyof typeof HERO_TIMELINE, number>;
}

function createPlaceholderTexture() {
  const texture = new THREE.DataTexture(new Uint8Array([0, 0, 0, 255]), 1, 1);
  texture.needsUpdate = true;
  return texture;
}

function configureTexture(texture: THREE.Texture) {
  texture.minFilter = THREE.LinearFilter;
  texture.magFilter = THREE.LinearFilter;
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  texture.needsUpdate = true;
  return texture;
}

function applyTexturePair(
  sequenceIndex: number,
  textures: THREE.Texture[],
  mainMaterial: THREE.RawShaderMaterial,
  backgroundMaterial: THREE.RawShaderMaterial,
) {
  if (textures.length === 0) {
    return;
  }

  const currentIndex = sequenceIndex % textures.length;
  const nextIndex = (sequenceIndex + 1) % textures.length;
  const current = textures[currentIndex];
  const next = textures[nextIndex];

  if (sequenceIndex === 0) {
    mainMaterial.uniforms.texture.value = current;
    mainMaterial.uniforms.texture2.value = next;
    backgroundMaterial.uniforms.texture.value = current;
    backgroundMaterial.uniforms.texture2.value = next;
    return;
  }

  if (currentIndex % 2 === 0) {
    mainMaterial.uniforms.texture2.value = next;
    backgroundMaterial.uniforms.texture2.value = next;
  } else {
    mainMaterial.uniforms.texture.value = next;
    backgroundMaterial.uniforms.texture.value = next;
  }
}

export default function ReferenceHeroScene() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mountNode = mountRef.current;

    if (!mountNode) {
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x121212);

    const getViewportSize = () => {
      const width = mountNode.clientWidth || window.innerWidth;
      const height = mountNode.clientHeight || window.innerHeight;
      return { width, height: Math.max(height, 1) };
    };

    const initialViewport = getViewportSize();
    const camera = new THREE.PerspectiveCamera(
      40,
      initialViewport.width / initialViewport.height,
      1,
      50,
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
    renderer.setSize(initialViewport.width, initialViewport.height, false);
    renderer.domElement.className = 'reference-hero-canvas';
    mountNode.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.minPolarAngle = 0.7;
    controls.maxPolarAngle = 1.75;
    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.rotateSpeed = 1.5;

    const placeholderTexture = createPlaceholderTexture();

    const mainMaterial = new THREE.RawShaderMaterial({
      uniforms: {
        t: { value: 0 },
        q: { value: 2 / 3 },
        xi: { value: 0 },
        eta: { value: 1 },
        alpha: { value: 0.00001 },
        lambda: { value: 0 },
        beta: { value: 1 },
        n: { value: 2 },
        omega: { value: 2 },
        scale: { value: 1.5 / Math.sqrt(2 / 3) },
        translation: { value: 0 },
        stereo: { value: 0 },
        rotation: { value: 0 },
        Qinv: { value: 1 / (2 / 3) },
        posClip: { value: 1 },
        negClip: { value: 1 },
        texture: { value: placeholderTexture },
        texture2: { value: placeholderTexture },
      },
      vertexShader: MAIN_VERTEX_SHADER,
      fragmentShader: MAIN_FRAGMENT_SHADER,
      side: THREE.DoubleSide,
    });

    const backgroundMaterial = new THREE.RawShaderMaterial({
      uniforms: {
        texture: { value: placeholderTexture },
        texture2: { value: placeholderTexture },
        textureTransitionAmount: { value: 0 },
      },
      vertexShader: BACKGROUND_VERTEX_SHADER,
      fragmentShader: BACKGROUND_FRAGMENT_SHADER,
      side: THREE.FrontSide,
    });

    const segments = initialViewport.width < 768 ? 200 : 400;
    const mainGeometry = new THREE.PlaneGeometry(1, 1, segments, segments);
    const backgroundGeometry = new THREE.SphereGeometry(5, 50, 50);

    const mainMesh = new THREE.Mesh(mainGeometry, mainMaterial);
    const backgroundMesh = new THREE.Mesh(backgroundGeometry, backgroundMaterial);
    scene.add(mainMesh);
    scene.add(backgroundMesh);

    function applyCameraLayout() {
      const { width, height } = getViewportSize();
      camera.position.set(0, 3, width > 768 ? 7 : 11);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
      controls.update();
    }

    const loader = new THREE.TextureLoader();
    const loadedTextures: THREE.Texture[] = [];
    let textureSequenceIndex = -1;
    let lastRepeatIndex = -1;
    let frameId = 0;
    let disposed = false;
    const startTime = performance.now();
    let resizeObserver: ResizeObserver | null = null;

    applyCameraLayout();

    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => applyCameraLayout());
      resizeObserver.observe(mountNode);
    }

    void Promise.all(TEXTURE_PATHS.map(async (path) => configureTexture(await loader.loadAsync(path))))
      .then((textures) => {
        if (disposed) {
          textures.forEach((texture) => texture.dispose());
          return;
        }

        loadedTextures.push(...textures);

        if (textureSequenceIndex < 0) {
          textureSequenceIndex = 0;
        }

        applyTexturePair(textureSequenceIndex, loadedTextures, mainMaterial, backgroundMaterial);
      })
      .catch(() => {
        // Keep the placeholder texture if one of the mirrored assets fails to load.
      });

    function animate() {
      if (disposed) {
        return;
      }

      frameId = window.requestAnimationFrame(animate);

      const elapsedSeconds = (performance.now() - startTime) / 1000;
      const repeatIndex = Math.floor(elapsedSeconds / 12);

      if (repeatIndex !== lastRepeatIndex) {
        lastRepeatIndex = repeatIndex;
        textureSequenceIndex += 1;
        applyTexturePair(textureSequenceIndex, loadedTextures, mainMaterial, backgroundMaterial);
      }

      const cycleProgress = (elapsedSeconds % 12) / 12;
      const yoyoProgress = repeatIndex % 2 === 0 ? cycleProgress : 1 - cycleProgress;
      const position = power1InOut(yoyoProgress) * 6;
      const state = sampleHeroState(position);

      for (const [key, value] of Object.entries(state)) {
        if (key in mainMaterial.uniforms) {
          mainMaterial.uniforms[key].value = value;
        }
      }

      backgroundMaterial.uniforms.textureTransitionAmount.value = THREE.MathUtils.clamp(
        (position - 1.75) / 1.75,
        0,
        1,
      );

      controls.update();
      renderer.render(scene, camera);
    }

    animate();

    window.addEventListener('resize', applyCameraLayout);

    return () => {
      disposed = true;
      window.cancelAnimationFrame(frameId);
      window.removeEventListener('resize', applyCameraLayout);
      resizeObserver?.disconnect();
      controls.dispose();
      mainGeometry.dispose();
      backgroundGeometry.dispose();
      mainMaterial.dispose();
      backgroundMaterial.dispose();
      placeholderTexture.dispose();
      loadedTextures.forEach((texture) => texture.dispose());
      renderer.dispose();
      renderer.forceContextLoss();

      if (mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="reference-hero-scene-mount" aria-hidden="true" />;
}
