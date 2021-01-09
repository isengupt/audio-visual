import React, { useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import gsap from "gsap";
import { ChromaticAberration, EffectComposer } from "react-postprocessing";
import { Canvas, extend, useFrame, useThree } from "react-three-fiber";


import Paste from "./components/paste/Paste";
var colors = require("nice-color-palettes");

extend({ OrbitControls });
let pallete = colors[96];
const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  const controls = useRef();
  useFrame((state) => controls.current.update());
  return <orbitControls ref={controls} args={[camera, domElement]} />;
};

function Scene() {
  const { viewport, aspect } = useThree();
  return (
    <div style={{ height: "100%" }}>
      <Canvas
        camera={{
          fov: 75,

          near: 0.001,
          far: 10000,

          position: [0, 0, 2],
        }}
        gl={{
          antialias: true,
          // alpha:false,
          //preserveDrawingBuffer: true,
        }}
        onCreated={({ gl, camera }) => {
          gl.physicallyCorrectLights = true;
          gl.outputEncoding = THREE.sRGBEncoding;
         // gl.setClearColor("#000");
          gl.setClearColor("#181819");
        }}
      >
        <Paste position={[0, 0, 0]} />
        <CameraControls />
    
      </Canvas>
    </div>
  );
}

const getDevicePixelRatio = (maxDpr = 2) =>
  typeof window !== "undefined"
    ? Math.min(
        Math.max(Math.round(window.devicePixelRatio), 1),
        maxDpr
      ).toFixed(1)
    : "1.0";

export default Scene;
