import { useContext, Suspense, useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls, Stats } from "@react-three/drei";
import { TShartMan, HoodyMan, PantMan, ShortMan, SWEATMAN, OversizeMan } from "@/sections/customize/configurator/models";
import { CustomizeContext } from '@/components/customize/context/customize-context';
import { useFirstRender, useResponsive } from "@/hooks";
import { initPatch } from "@/helpers/fabricPatch";
import OversizeManModel from "./models/oversize-man";

type Props = {
  textureRef: any;
  canvasRef: any;
  type: string;
  id: string;
  page: string;
  arrowLeftCount: number;
  arrowRightCount: number;
  ctx: object;
};

export default function ConfigurationCanvas(props: Props) {
  const customize = useContext(CustomizeContext);
  const [state, setState] = useState({});
  const [embelIndex, setEmbelIndex] = useState(0);
  // START REF NAO
  const canvasRenderedRef = useRef<any>(null)
  const controlsRef = useRef<any>(null)
  // END REF NAO
  useEffect(() => {
    setEmbelIndex(customize.embelIndex);

    if (customize.tag.visible) {
      setState({ scale: [10, 10, 10], bottom: true, position: [-0.02, 0.4, 0.4], rotation: [0.1, 0, 0] })
    } else if (customize.embellishment[embelIndex].visible) {
      if (props.type === "Pants") {
        switch (embelIndex) {
          case 0:
            setState({ scale: [1.2, 1.2, 1.2], position: [-0.15, 0, 0], rotation: [0, 0, 0] });
            break;
          case 1:
            setState({ scale: [1.2, 1.2, 1.2], position: [0.2, 0, 0], rotation: [0, 0, 0] });
            break;
          case 2:
            setState({ scale: [1.2, 1.2, 1.2], position: [0.2, 0, 0], rotation: [0, THREE.MathUtils.degToRad(180), 0] });
            break;
          case 3:
            setState({ scale: [1.5, 1.5, 1.5], position: [-0.2, 0.12, 0], rotation: [0, THREE.MathUtils.degToRad(180), 0] });
            break;
          case 4:
            setState({ scale: [3, 3, 3], position: [-0.3, -1, 0], rotation: [0, THREE.MathUtils.degToRad(180), 0] });
            break;
          default:
            break;
        }
      } else if (props.type === "Shorts") {
        switch (embelIndex) {
          case 0:
            setState({ scale: [2, 2, 2], position: [-0.15, 0.05, 0], rotation: [0, 0, 0] });
            break;
          case 1:
            setState({ scale: [2, 2, 2], position: [0.2, 0.05, 0], rotation: [0, 0, 0] });
            break;
          case 2:
            setState({ scale: [2, 2, 2], position: [0.2, 0.05, 0], rotation: [0, THREE.MathUtils.degToRad(180), 0] });
            break;
          case 3:
            setState({ scale: [2.5, 2.5, 2], position: [-0.2, 0.2, 0], rotation: [0, THREE.MathUtils.degToRad(180), 0] });
            break;
          case 4:
            setState({ scale: [3, 3, 3], position: [-0.3, -0.4, 0], rotation: [0, THREE.MathUtils.degToRad(180), 0] });
            break;
          default:
            break;
        }
      } else {
        switch (embelIndex) {
          case 0:
            setState({ scale: [1.5, 1.5, 1.5], position: [0, 0, 0], rotation: [0, THREE.MathUtils.degToRad(180), 0] });
            break;
          case 1:
            setState({ scale: [1.5, 1.5, 1.5], position: [0, 0, 0], rotation: [0, 0, 0] });
            break;
          case 2:
            setState({ scale: [1.5, 1.5, 1.5], position: [0, 0, 0], rotation: [0, THREE.MathUtils.degToRad(-90), 0] });
            break;
          case 3:
            setState({ scale: [1.5, 1.5, 1.5], position: [0, 0, 0], rotation: [0, THREE.MathUtils.degToRad(90), 0] });
            break;
          default:
            break;
        }
      }
    } else {
      setState({});
    };

  }, [customize.tag.visible, customize.embelIndex, customize.embellishment[embelIndex].visible]);

  useEffect(() => {
    if (customize.cordVisible) {
      if (props.type === "Shorts") {
        setState({ scale: [2, 2, 2], position: [0, -0.2, 0], rotation: [THREE.MathUtils.degToRad(60), THREE.MathUtils.degToRad(-140), 0] });
      } else if (props.type === "Pants") {
        setState({ scale: [2, 2, 2], position: [0, -0.4, 0], rotation: [THREE.MathUtils.degToRad(60), THREE.MathUtils.degToRad(-140), 0] });
      } else {
        setState({ scale: [2, 2, 2], position: [0, -0.4, 0], rotation: [0, 0, 0] });
      }
    } else {
      setState({});
    }
  }, [customize.cordVisible]);

  useEffect(() => {
    setState({ rotation: [0, THREE.MathUtils.degToRad(props.arrowLeftCount * -90), 0] });
  }, [props.arrowLeftCount]);

  useEffect(() => {
    setState({ rotation: [0, THREE.MathUtils.degToRad(props.arrowRightCount * 90), 0] });
  }, [props.arrowRightCount]);

  const smDown = useResponsive("down", "sm");

  useFirstRender({ canvasRef: props.canvasRef, textureRef: props.textureRef })
  const [threeProps, setThreeProps] = useState({
    camera: null,
    pointer: null,
    scene: null,
    raycaster: null,
    mouse: null,
    gl: null,
  })
  const memoizedInitPatch = useMemo(() => {
    initPatch({ threeProps, canvasRenderedRef, canvasRef: props.canvasRef, textureRef: props.textureRef })
  }, [props.canvasRef, props.textureRef, threeProps])

  return (
    <Canvas
      ref={canvasRenderedRef}
      id={props.id}
      shadows
      // flat
      onPointerDown={(e) => {
        e.stopPropagation()
        memoizedInitPatch
      }}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 2.5], fov: 25 }}
      style={{
        height: props.page === 'gallery' ? (smDown ? 'auto' : 280) : window.screen.width > 760 ? 600 : 280,
        background: props.page === 'gallery' ? "" : "radial-gradient(circle, rgba(229,229,229,1) 0%, rgba(149,149,149,1) 100%)",
        borderRadius: 10
      }}
      onCreated={({ camera, pointer, scene, raycaster, gl, mouse }: any) => {
        gl.setClearAlpha(0)
        setThreeProps({ camera, pointer, scene, raycaster, gl, mouse })
      }}
    >
      <ambientLight intensity={0.5} />

      <Environment files="/models/potsdamer_platz_1k.hdr" />

      <Suspense fallback={null}>
        <Center {...state} >
          {props.type === 'Hoodies' ?
            <HoodyMan controlsRef={controlsRef} canvasRenderedRef={canvasRenderedRef} textureRef={props.textureRef} canvasRef={props.canvasRef} ctx={props.ctx} embelIndex={embelIndex} /> : props.type === 'Pants' ?
              <PantMan controlsRef={controlsRef} canvasRenderedRef={canvasRenderedRef} textureRef={props.textureRef} canvasRef={props.canvasRef} ctx={props.ctx} embelIndex={embelIndex} /> : props.type === 'Shorts' ?
                <ShortMan controlsRef={controlsRef} canvasRenderedRef={canvasRenderedRef} textureRef={props.textureRef} canvasRef={props.canvasRef} ctx={props.ctx} embelIndex={embelIndex} /> : props.type === 'Sweatshirts' ?
                  <SWEATMAN controlsRef={controlsRef} canvasRenderedRef={canvasRenderedRef} textureRef={props.textureRef} canvasRef={props.canvasRef} ctx={props.ctx} embelIndex={embelIndex} /> : props.type === 'Oversize' ?
                    <OversizeManModel controlsRef={controlsRef} canvasRenderedRef={canvasRenderedRef} textureRef={props.textureRef} canvasRef={props.canvasRef} ctx={props.ctx} embelIndex={embelIndex} /> : props.type === 'T-Shirts' ?
                      <TShartMan controlsRef={controlsRef} canvasRenderedRef={canvasRenderedRef} textureRef={props.textureRef} canvasRef={props.canvasRef} ctx={props.ctx} embelIndex={embelIndex} /> : <OversizeMan controlsRef={controlsRef} canvasRenderedRef={canvasRenderedRef} textureRef={props.textureRef} canvasRef={props.canvasRef} ctx={props.ctx} embelIndex={embelIndex} />}

        </Center>
      </Suspense>
      <OrbitControls ref={controlsRef} />
    </Canvas>
  );
}