import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import { extend, useThree } from "@react-three/fiber";
import { useCursor, Decal, PivotControls, useGLTF, useTexture } from "@react-three/drei";
import { useCustomizeContext } from "@/components/customize/context";
import { useControls } from 'leva'
import { fabric } from "fabric";
import { proxy, useSnapshot } from 'valtio'
import { subscribe } from "diagnostics_channel";

const proxyState = proxy({ current: null, mode: 0 })

interface Props {
  position: THREE.Vector3Tuple;
  rotation?: THREE.Vector3Tuple;
  mainScale: THREE.Vector3Tuple;
  subScale: THREE.Vector3Tuple;
  index: number;
  textures: THREE.Texture[];
}

function CustomTexture(props: Props) {
  const { textures, position, rotation, mainScale, subScale, index, ...other } = props;
  const customize = useCustomizeContext();

  var raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();

  const snap = useSnapshot(proxyState)
  const scene = useThree((proxyState) => proxyState.scene)

  const [canvas, setCanvas] = useState<fabric.Canvas>();
  const [texture, setTexture] = useState<THREE.CanvasTexture>();
  const [mouseClicked, setMouseClicked] = useState<Boolean>(false);

  const mainSize = 500;

  const initCanvas = () => {

  }
  useEffect(() => {
    if (index !== 1) return
    const textCanvas = document.getElementById("canvas") as HTMLCanvasElement;
    const c = new fabric.Canvas("canvas", {
      width: mainSize * mainScale[0],
      height: mainSize * mainScale[1],
      backgroundColor: "#9ef3",
    });
    c.on("after:render", function () {
      if (scene.getObjectByName("embel" + index)) {
        if (scene.getObjectByName("embel" + index).material.map) {
          scene.getObjectByName("embel" + index).material.map.needsUpdate = true;
        }
      }
    });

    c.on("mousedown", () => {
      console.log('down')
      setMouseClicked(true)
      // c.getActiveObject()?.onDeselect();
    });
    c.on("mouseup", () => {
      console.log('up')
      setMouseClicked(false)
    })
    // settings for all canvas in the app
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.cornerColor = "#2BEBC8";
    fabric.Object.prototype.cornerStyle = "rect";
    fabric.Object.prototype.cornerStrokeColor = "#2BEBC8";
    fabric.Object.prototype.cornerSize = 6;
    setCanvas(c);

    const txt = new THREE.CanvasTexture(textCanvas);
    setTexture(txt);
  }, []);

  useEffect(() => {
    try {
      canvas?.getObjects().map((obj) => canvas.remove(obj));
      const file = customize.embellishment[index].file;
      fabric.Image.fromURL(typeof file === "string" ? file : URL.createObjectURL(file), (img) => {
        img.scale(mainSize * subScale[0] / img?.width)
        canvas?.add(img);
        canvas?.requestRenderAll();
      });
    } catch (error) { }
  }, [customize.embellishment[index].file])

  useEffect(() => {
    try {
      canvas?.getObjects().map((obj) => canvas.remove(obj));
      const textureText = customize.embellishment[index].textureText;
      const font = customize.embellishment[index].font;
      const ftext = new fabric.IText(textureText, {
        top: 0,
        left: 0,
        textAlign: 'center',
        fontFamily: font,
        fontSize: 22,
        lineHeight: 1.2,
      });
      canvas?.add(ftext);
      canvas?.requestRenderAll();
    } catch (error) { }
  }, [customize.embellishment[index].textureText, customize.embellishment[index].font])

  useEffect(() => {
  }, [mouseClicked]);

  if (index !== 1) {
    return (<></>)
  }

  return (
    <>
      <Decal
        position={position}
        rotation={rotation}
        scale={mainScale}
        name={"embel" + index}
      // onClick={(e) => setMouseClicked(true)}
      // onPointerMissed={(e) => setMouseClicked(false)}
      >
        <meshPhysicalMaterial
          transparent
          polygonOffset
          polygonOffsetFactor={-2}
          map={texture ? texture : textures[index]}
          map-anisotropy={16}
          needsUpdate
        />
      </Decal>
    </>
  );
}

export default CustomTexture;