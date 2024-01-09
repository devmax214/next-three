import { useEffect, useRef, useCallback, useLayoutEffect } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import useStore, { setState } from "@/helpers/store";
import useFirstRenderModel from "./use-first-render-model";

export function useRaycast(
  controlsRef: any,
  canvasRef: any,
  canvasRenderedRef: any,
  textureRef: any,
  type: string,
  customize: any,
  embelIndex: number,
  camera: any,
  gl: any,
  raycaster: any,
  scene: any,
  mouse: any,
  pointer: any
) {
  const changed = useStore((state) => state.changed);
  useEffect(() => {
    if (changed) {
      setState({ changed: false });
    }
  }, [changed]);
  useFrame((state) => {
    if (
      customize.tag.visible ||
      customize.cordVisible ||
      customize.embellishment[embelIndex].visible
    ) {
      state.camera.position.set(0, 0, 2.5);
    }
  });
  // NAO
  const getPosition = useCallback(
    (e: any) => {
      const rect = canvasRenderedRef.current.getBoundingClientRect();
      let clientSize = {
        clientX: e.clientX,
        clientY: e.clientY,
      };
      if (e.changedTouches) {
        clientSize = {
          clientX: e.changedTouches[0].clientX,
          clientY: e.changedTouches[0].clientY,
        };
      }
      const array = [
        (clientSize.clientX - rect.left) / rect.width,
        (clientSize.clientY - rect.top) / rect.height,
      ];
      pointer.fromArray(array);
      // Get intersects
      mouse.set(pointer.x * 2 - 1, -(pointer.y * 2) + 1);
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children);
      textureRef.current.needsUpdate = true;

      if (intersects.length > 0 && intersects[0].uv) {
        let uv = intersects[0].uv;
        return {
          x: Math.round(uv.x * 2048) - 4.5,
          y: Math.round(uv.y * 2048) - 5.5,
        };
      }
      return null;
    },
    [pointer, mouse, raycaster, camera, scene.children, textureRef]
  );
  const handleClick = useCallback(
    (e: any) => {
      const positionOnScene = getPosition(e);
      if (positionOnScene) {
        const canvasRect = canvasRef.current.getCenter();
        const simEvt = new MouseEvent(e.type, {
          clientX: canvasRect.left + positionOnScene.x,
          clientY: canvasRect.top + positionOnScene.y,
        });
        canvasRef.current.upperCanvasEl.dispatchEvent(simEvt);
      }
    },
    [canvasRef, getPosition]
  );
  useLayoutEffect(() => {
    textureRef.current = new THREE.CanvasTexture(
      canvasRef.current.getElement()
    );
    textureRef.current.flipY = false;
    textureRef.current.needsUpdate = true;
    canvasRef.current.renderAll();
    canvasRenderedRef.current = document.getElementsByTagName("canvas")[0];
  });
  useFirstRenderModel({
    controlsRef,
    canvasRef,
    textureRef,
    handleClick,
    type,
    customize,
  });
}
