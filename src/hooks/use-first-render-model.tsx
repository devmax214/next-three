import useStore, { getState, setState } from '@/helpers/store'
import { MutableRefObject, useCallback, useEffect, useLayoutEffect } from 'react'
import type { OrbitControls } from 'three-stdlib'
import { Texture } from 'three/src/textures/Texture'
import type { Group } from 'three/src/objects/Group'
import type { Canvas } from 'fabric/fabric-impl'
import useThreeFrame from './use-three-frame';
import { clipPath } from '@/constant/fabricConst'
import { fabric } from 'fabric'
import { useCustomizeContext } from "@/components/customize/context";

interface Props {
  handleClick: (e: MouseEvent | TouchEvent) => void
  controlsRef: MutableRefObject<OrbitControls>
  textureRef: MutableRefObject<Texture>
  canvasRef: MutableRefObject<Canvas>
  type: string
}

const useFirstRenderModel = ({
  controlsRef,
  canvasRef,
  textureRef,
  handleClick,
  type
}: Props) => {
  const context = useCustomizeContext();
  useEffect(() => {
    if (!getState().isMaskAdded) {
      const currentClipPath = (clipPath as any)[type]
      currentClipPath.forEach((rect: any) => {
        const mask = new fabric.Rect({
          name: rect.id,
          stroke: '#FDF010',
          strokeWidth: 2,
          fill: '#f4f5f0',
          width: rect.width,
          height: rect.height,
          left: rect.left,
          top: rect.top,
          absolutePositioned: true,
          selectable: false,
        })
        canvasRef.current?.add(mask)
        canvasRef.current?.sendToBack(mask)
      });
      canvasRef.current?.renderAll()
      setState({
        isMaskAdded: true
      })
    }
    if (
      canvasRef.current &&
      !getState().firstLoadTexture
    ) {
      document
        .getElementsByTagName('canvas')[0]
        .addEventListener('mousedown', (e) => {
          for (let i = 0; i < context.embellishment.length; i++) {
            if (context.embellishment[i].visible)
              return handleClick(e);
          }
        })
    }
  }, [
    canvasRef,
    controlsRef,
    handleClick,
    textureRef,
  ])
  useThreeFrame(canvasRef.current, controlsRef, type);
}

export default useFirstRenderModel
