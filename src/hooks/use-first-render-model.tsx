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
import { maskPosition } from "@/constant/fabricConst";
import { fabricAddImage, fabricChangeColors, fabricAddText } from '@/utils/fabric'

interface Props {
  handleClick: (e: MouseEvent | TouchEvent) => void
  controlsRef: MutableRefObject<OrbitControls>
  textureRef: MutableRefObject<Texture>
  canvasRef: MutableRefObject<Canvas>
  type: string
  customize: any
}

const useFirstRenderModel = ({
  controlsRef,
  canvasRef,
  textureRef,
  handleClick,
  type,
  customize,
}: Props) => {
  const context = useCustomizeContext();
  useEffect(() => {
    if (!getState().isMaskAdded) {
      const currentClipPath = (clipPath as any)[type]
      currentClipPath.forEach((rect: any) => {
        const mask = new fabric.Rect({
          name: rect.id,
          stroke: '#F05A4A',
          strokeWidth: 0,
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
      setTimeout(() => {
        for (let i = 0; i < customize.embellishment.length; i++) {
          if (customize.embellishment[i].type == 'text' && customize.embellishment[i].textureText) {
            fabricAddText(canvasRef.current, customize.embellishment[i].textureText, maskPosition[type][i], true);
          } else if (customize.embellishment[i].file != null) {
            fabricAddImage(canvasRef.current, customize.embellishment[i].file, maskPosition[type][i], type, true)
          }
        }
        fabricChangeColors(canvasRef.current, customize.color);
      }, 200);
    }
    if (
      canvasRef.current &&
      !getState().firstLoadTexture
    ) {
      const handelEvent = (e: MouseEvent) => {
        for (let i = 0; i < context.embellishment.length; i++) {
          if (context.embellishment[i].visible)
            return handleClick(e);
        }
        const element = document.getElementsByTagName("body")[0];
        element.style.cursor = "default";
      }
      document.getElementsByTagName('canvas')[0].addEventListener('mousedown', handelEvent)
      document.getElementsByTagName('canvas')[0].addEventListener('mousemove', handelEvent)
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
