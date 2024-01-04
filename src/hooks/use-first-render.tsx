
import { useCustomizeContext } from "@/components/customize/context";
import { getState } from "@/helpers/store";
import { clipPath } from "@/constant/fabricConst";
import { fabric } from "fabric";
import { MutableRefObject, useCallback, useEffect } from "react";
import { Texture } from "three";

interface Props { 
    canvasRef: MutableRefObject<any>;
    textureRef: any
}
const useFirstRender = ({ canvasRef, textureRef }: Props) => {
    const setupInitialLoad = useCallback(async () => {
        const fabricCanvas = new fabric.Canvas('canvas', {
            preserveObjectStacking: true,
            imageSmoothingEnabled: true,
            selection: false,
            width: 2048,
            height: 2048,
            backgroundColor:'#f4f5f0',
            renderOnAddRemove: false
          })
        canvasRef.current = fabricCanvas
        const text = new fabric.Text('SAMPLE',{
            text: 'SAMPLE',
            name:'sample',
            fontFamily: 'Arial',
            fill: '#000000',
            fontSize: 50,
            angle: 0,
            stroke: '#000000',
            strokeWidth: 0,
            textAlign: 'center',
            fontWeight: 'bold',
            left: 1164,
            top: 1536,
            originX: 'center',
            originY: 'center',
            hasRotatingPoint: true,
            selectable: true,
            centeredScaling: true,
        })
        canvasRef.current.skipOffscreen = true;
        // canvasRef.current?.add(text)
        textureRef.current = new Texture(canvasRef.current.getElement());
        textureRef.current.flipY = true;
        textureRef.current.needsUpdate = true;
        canvasRef.current?.renderAll();
        canvasRef.current?.calcOffset();
    }, [canvasRef, textureRef])
    useEffect(() => {
        setupInitialLoad()
    }, [setupInitialLoad])
}
export default useFirstRender
