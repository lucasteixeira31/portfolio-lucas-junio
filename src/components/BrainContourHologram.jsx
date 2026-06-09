import React, { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Center, useGLTF } from "@react-three/drei";
import { Bloom, ChromaticAberration, EffectComposer, Noise } from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import "./BrainContourHologram.css";

const contourVertexShader = `
  uniform float uGlitch;
  uniform float uGlitchSeed;
  varying vec3 vNormalView;
  varying vec3 vViewDir;
  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;

  void main() {
    vLocalPosition = position;

    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;
    vNormalView = normalize(normalMatrix * normal);
    vViewDir = normalize(cameraPosition - worldPosition.xyz);

    gl_Position = projectionMatrix * viewMatrix * worldPosition;

    float glitchBand = step(0.965, sin((position.y + uGlitchSeed) * 82.0) * 0.5 + 0.5);
    float glitchOffset = sin(position.y * 180.0 + uGlitchSeed * 11.0) * 0.006 * uGlitch * glitchBand;
    gl_Position.x += glitchOffset * gl_Position.w;
  }
`;

const contourFragmentShader = `
  uniform vec3 uPrimaryColor;
  uniform vec3 uSecondaryColor;
  uniform vec3 uHighlightColor;
  uniform float uOpacity;
  uniform float uContourCount;
  uniform float uLineWidth;
  uniform float uTime;
  uniform float uGlitch;
  uniform float uGlitchSeed;

  varying vec3 vNormalView;
  varying vec3 vViewDir;
  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;

  float hologramNoise(vec3 p) {
    return fract(sin(dot(p, vec3(17.13, 43.71, 91.17))) * 43758.5453);
  }

  void main() {
    float slicePosition = vLocalPosition.y * uContourCount + uTime * 0.014;
    float distanceToLine = abs(fract(slicePosition) - 0.5);
    float scanline = 1.0 - smoothstep(uLineWidth, uLineWidth + 0.08, distanceToLine);

    float fresnel = pow(1.0 - abs(dot(normalize(vNormalView), normalize(vViewDir))), 1.35);
    float rim = clamp(fresnel * 3.55, 0.0, 1.0);

    float foldA = sin(vLocalPosition.x * 48.0 + vLocalPosition.z * 36.0 + vLocalPosition.y * 19.0);
    float foldB = sin(vLocalPosition.x * 76.0 - vLocalPosition.z * 31.0 + vLocalPosition.y * 35.0);
    float foldDetail = smoothstep(0.35, 0.92, (foldA * 0.64 + foldB * 0.36) * 0.5 + 0.5);
    float grooveShadow = 1.0 - smoothstep(0.25, 0.75, foldDetail);

    float depthLayerA = sin(length(vLocalPosition) * 48.0 - uTime * 0.18) * 0.5 + 0.5;
    float depthLayerB = sin((vLocalPosition.y + vLocalPosition.z * 0.34) * 64.0 + uTime * 0.14) * 0.5 + 0.5;
    float volumetricLayer = smoothstep(0.55, 0.94, depthLayerA) * 0.12 + smoothstep(0.64, 0.96, depthLayerB) * 0.09;
    float innerShell = sin(length(vLocalPosition) * 80.0 + vLocalPosition.y * 21.0 + uTime * 0.1) * 0.5 + 0.5;
    innerShell = smoothstep(0.55, 0.94, innerShell) * (1.0 - rim * 0.62);

    float noise = hologramNoise(vLocalPosition * 42.0 + vec3(uTime * 0.16));
    float animatedNoise = (noise - 0.5) * 0.045;
    float pulse = 0.96 + sin(uTime * 0.95) * 0.035 - uGlitch * 0.04;
    float interferenceLine = step(0.976, sin(vLocalPosition.y * 155.0 + uGlitchSeed * 23.0) * 0.5 + 0.5);
    float interferenceBreak = step(0.62, hologramNoise(vec3(vLocalPosition.x * 18.0, vLocalPosition.y * 9.0, uGlitchSeed)));
    float digitalInterference = interferenceLine * interferenceBreak * uGlitch;

    float depthFade = smoothstep(0.18, 0.92, length(vLocalPosition) * 0.012);
    float centerFade = 1.0 - smoothstep(0.16, 0.9, length(vLocalPosition) * 0.01);
    float innerEnergy = (volumetricLayer * 1.2 + innerShell * 0.24 + foldDetail * 0.12) * (1.0 - rim * 0.68);
    float rimEnergy = rim * 1.28 + scanline * 0.1;
    float alpha = (0.02 + innerEnergy + rimEnergy + animatedNoise + digitalInterference * 0.055 + uGlitch * 0.018) * uOpacity;
    alpha *= 1.0 - centerFade * 0.58;

    vec3 color = mix(uPrimaryColor, uSecondaryColor, 0.14 + rim * 0.42 + volumetricLayer);
    color = mix(color, uHighlightColor, rim * 0.36 + scanline * 0.07);
    color.r += uGlitch * 0.035;
    color.b += uGlitch * 0.055;
    color.g *= 1.0 - uGlitch * 0.02;
    color += uHighlightColor * digitalInterference * 0.18;
    color *= 0.38 + depthFade * 0.22;
    color *= 1.0 - grooveShadow * 0.34 * (1.0 - rim * 0.34);
    color *= pulse * (0.34 + innerEnergy * 0.72 + rim * 1.72 + scanline * 0.13 + foldDetail * 0.2 + innerShell * 0.18);
    color = min(color, vec3(0.64, 0.5, 1.0));

    gl_FragColor = vec4(color, alpha);
  }
`;

const pointContourVertexShader = `
  uniform float uPointSize;
  uniform float uGlitch;
  uniform float uGlitchSeed;
  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;

  void main() {
    vLocalPosition = position;

    vec4 worldPosition = modelMatrix * vec4(position, 1.0);
    vWorldPosition = worldPosition.xyz;

    vec4 mvPosition = viewMatrix * worldPosition;
    gl_Position = projectionMatrix * mvPosition;

    float glitchBand = step(0.965, sin((position.y + uGlitchSeed) * 82.0) * 0.5 + 0.5);
    float glitchOffset = sin(position.y * 180.0 + uGlitchSeed * 11.0) * 0.006 * uGlitch * glitchBand;
    gl_Position.x += glitchOffset * gl_Position.w;

    gl_PointSize = uPointSize;
  }
`;

const pointContourFragmentShader = `
  uniform vec3 uPrimaryColor;
  uniform vec3 uSecondaryColor;
  uniform vec3 uHighlightColor;
  uniform float uOpacity;
  uniform float uContourCount;
  uniform float uLineWidth;
  uniform float uTime;
  uniform float uGlitch;
  uniform float uGlitchSeed;

  varying vec3 vLocalPosition;
  varying vec3 vWorldPosition;

  float hologramNoise(vec3 p) {
    return fract(sin(dot(p, vec3(17.13, 43.71, 91.17))) * 43758.5453);
  }

  void main() {
    vec2 center = gl_PointCoord - vec2(0.5);
    float pointMask = 1.0 - smoothstep(0.28, 0.5, length(center));

    float slicePosition = vLocalPosition.y * uContourCount + uTime * 0.014;
    float distanceToLine = abs(fract(slicePosition) - 0.5);
    float scanline = 1.0 - smoothstep(uLineWidth, uLineWidth + 0.08, distanceToLine);

    vec3 viewDir = normalize(cameraPosition - vWorldPosition);
    vec3 fakeNormal = normalize(vLocalPosition + vec3(0.0001));
    float fresnel = pow(1.0 - abs(dot(fakeNormal, viewDir)), 1.3);
    float rim = clamp(fresnel * 3.6, 0.0, 1.0);

    float foldA = sin(vLocalPosition.x * 48.0 + vLocalPosition.z * 36.0 + vLocalPosition.y * 19.0);
    float foldB = sin(vLocalPosition.x * 76.0 - vLocalPosition.z * 31.0 + vLocalPosition.y * 35.0);
    float foldDetail = smoothstep(0.35, 0.92, (foldA * 0.64 + foldB * 0.36) * 0.5 + 0.5);
    float grooveShadow = 1.0 - smoothstep(0.25, 0.75, foldDetail);

    float depthLayerA = sin(length(vLocalPosition) * 48.0 - uTime * 0.18) * 0.5 + 0.5;
    float depthLayerB = sin((vLocalPosition.y + vLocalPosition.z * 0.34) * 64.0 + uTime * 0.14) * 0.5 + 0.5;
    float volumetricLayer = smoothstep(0.55, 0.94, depthLayerA) * 0.14 + smoothstep(0.64, 0.96, depthLayerB) * 0.11;
    float innerShell = sin(length(vLocalPosition) * 80.0 + vLocalPosition.y * 21.0 + uTime * 0.1) * 0.5 + 0.5;
    innerShell = smoothstep(0.55, 0.94, innerShell) * (1.0 - rim * 0.62);

    float noise = hologramNoise(vLocalPosition * 42.0 + vec3(uTime * 0.16));
    float animatedNoise = (noise - 0.5) * 0.048;
    float pulse = 0.96 + sin(uTime * 0.95) * 0.035 - uGlitch * 0.04;
    float interferenceLine = step(0.976, sin(vLocalPosition.y * 155.0 + uGlitchSeed * 23.0) * 0.5 + 0.5);
    float interferenceBreak = step(0.62, hologramNoise(vec3(vLocalPosition.x * 18.0, vLocalPosition.y * 9.0, uGlitchSeed)));
    float digitalInterference = interferenceLine * interferenceBreak * uGlitch;

    float depthFade = smoothstep(0.18, 0.92, length(vLocalPosition) * 0.012);
    float centerFade = 1.0 - smoothstep(0.16, 0.9, length(vLocalPosition) * 0.01);
    float innerEnergy = (volumetricLayer * 1.22 + innerShell * 0.26 + foldDetail * 0.13) * (1.0 - rim * 0.66);
    float rimEnergy = rim * 1.34 + scanline * 0.12;
    float alpha = pointMask * (0.018 + innerEnergy + rimEnergy + animatedNoise + digitalInterference * 0.06 + uGlitch * 0.018) * uOpacity;
    alpha *= 1.0 - centerFade * 0.58;
    if (alpha < 0.015) discard;

    vec3 color = mix(uPrimaryColor, uSecondaryColor, 0.14 + rim * 0.44 + volumetricLayer);
    color = mix(color, uHighlightColor, rim * 0.38 + scanline * 0.07);
    color.r += uGlitch * 0.035;
    color.b += uGlitch * 0.055;
    color.g *= 1.0 - uGlitch * 0.02;
    color += uHighlightColor * digitalInterference * 0.2;
    color *= 0.36 + depthFade * 0.24;
    color *= 1.0 - grooveShadow * 0.36 * (1.0 - rim * 0.34);
    color *= pulse * (0.34 + innerEnergy * 0.76 + rim * 1.8 + scanline * 0.15 + foldDetail * 0.22 + innerShell * 0.2);
    color = min(color, vec3(0.64, 0.5, 1.0));
    gl_FragColor = vec4(color, alpha);
  }
`;

function createContourMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uPrimaryColor: { value: new THREE.Color("#4A3DFF") },
      uSecondaryColor: { value: new THREE.Color("#6A5CFF") },
      uHighlightColor: { value: new THREE.Color("#A78BFF") },
      uOpacity: { value: 0.72 },
      uContourCount: { value: 42 },
      uLineWidth: { value: 0.04 },
      uTime: { value: 0 },
      uGlitch: { value: 0 },
      uGlitchSeed: { value: 0 }
    },
    vertexShader: contourVertexShader,
    fragmentShader: contourFragmentShader,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    side: THREE.DoubleSide,
    blending: THREE.AdditiveBlending,
    toneMapped: false
  });
}

function createPointContourMaterial() {
  return new THREE.ShaderMaterial({
    uniforms: {
      uPrimaryColor: { value: new THREE.Color("#4A3DFF") },
      uSecondaryColor: { value: new THREE.Color("#6A5CFF") },
      uHighlightColor: { value: new THREE.Color("#A78BFF") },
      uOpacity: { value: 0.74 },
      uContourCount: { value: 42 },
      uLineWidth: { value: 0.04 },
      uPointSize: { value: 1.48 },
      uTime: { value: 0 },
      uGlitch: { value: 0 },
      uGlitchSeed: { value: 0 }
    },
    vertexShader: pointContourVertexShader,
    fragmentShader: pointContourFragmentShader,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    blending: THREE.AdditiveBlending,
    toneMapped: false
  });
}

function BrainModel({ modelPath, scale = 1.85, rotationSpeed = (Math.PI * 2) / 38 }) {
  const groupRef = useRef(null);
  const glitchRef = useRef({
    next: 8 + Math.random() * 7,
    start: -1,
    duration: 0.12,
    seed: Math.random() * 10
  });
  const { scene } = useGLTF(modelPath);

  const modelData = useMemo(() => {
    const root = scene.clone(true);
    const meshMaterial = createContourMaterial();
    const pointMaterial = createPointContourMaterial();

    root.traverse((object) => {
      if (object.isMesh) {
        object.material = meshMaterial;
        object.frustumCulled = false;
      }

      if (object.isPoints) {
        object.material = pointMaterial;
        object.frustumCulled = false;
      }
    });

    return { root, meshMaterial, pointMaterial };
  }, [scene]);

  useFrame(({ clock }, delta) => {
    const time = clock.getElapsedTime();
    const glitch = glitchRef.current;

    if (glitch.start < 0 && time >= glitch.next) {
      glitch.start = time;
      glitch.duration = 0.1 + Math.random() * 0.05;
      glitch.seed = Math.random() * 10;
    }

    let glitchAmount = 0;

    if (glitch.start >= 0) {
      const progress = (time - glitch.start) / glitch.duration;

      if (progress >= 1) {
        glitch.start = -1;
        glitch.next = time + 8 + Math.random() * 7;
      } else {
        glitchAmount = Math.sin(progress * Math.PI) * 0.16;
      }
    }

    modelData.meshMaterial.uniforms.uTime.value = time;
    modelData.pointMaterial.uniforms.uTime.value = time;
    modelData.meshMaterial.uniforms.uGlitch.value = glitchAmount;
    modelData.pointMaterial.uniforms.uGlitch.value = glitchAmount;
    modelData.meshMaterial.uniforms.uGlitchSeed.value = glitch.seed;
    modelData.pointMaterial.uniforms.uGlitchSeed.value = glitch.seed;

    if (groupRef.current) {
      groupRef.current.rotation.y += delta * rotationSpeed;
      groupRef.current.rotation.x = Math.sin(time * 0.42) * 0.06;
      groupRef.current.rotation.z = Math.sin(time * 0.3) * 0.018;
      groupRef.current.position.x = glitchAmount ? Math.sin(glitch.seed * 13.0) * 0.018 * glitchAmount : 0;
      groupRef.current.position.y = Math.sin(time * 0.63) * 0.028;
    }
  });

  return (
    <group ref={groupRef} scale={scale}>
      <Center>
        <primitive object={modelData.root} />
      </Center>
    </group>
  );
}

export default function BrainContourHologram({
  modelPath = "/assets/images/brain_point_cloud.glb",
  className,
  style,
  scale = 1.85
}) {
  return (
    <div
      className={className ? "brain-contour-hologram " + className : "brain-contour-hologram"}
      style={{
        width: "100%",
        height: "100%",
        background: "transparent",
        ...style
      }}
    >
      <Canvas
        gl={{
          alpha: true,
          antialias: true,
          premultipliedAlpha: false
        }}
        camera={{ position: [0, 0, 4.2], fov: 34 }}
        style={{ background: "transparent" }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x000000, 0);
          gl.autoClear = true;
        }}
      >
        <Suspense fallback={null}>
          <BrainModel modelPath={modelPath} scale={scale} />
          <EffectComposer multisampling={0}>
            <Bloom
              intensity={0.72}
              luminanceThreshold={0.25}
              luminanceSmoothing={0.42}
              mipmapBlur
            />
            <ChromaticAberration
              blendFunction={BlendFunction.NORMAL}
              offset={[0.00045, 0.00022]}
            />
            <Noise
              blendFunction={BlendFunction.SOFT_LIGHT}
              opacity={0.018}
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}

useGLTF.preload("/assets/images/brain_point_cloud.glb");
