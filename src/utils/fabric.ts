import { Canvas } from "fabric/fabric-impl"
import { fabric } from "fabric"
import { useCallback } from "react";
import { Camera, Raycaster, Scene, Vector2 } from "three";

export const fabricChangeColors = (canvas: Canvas, color: string) => {
    let masks = canvas.getObjects().filter(obj => obj.name?.includes('mask'))
    canvas.backgroundColor = color;
    masks.forEach(rect => {
        rect.set('fill', color)
    });
    canvas.renderAll();
}
export const fabricAddText = (canvas: Canvas, text: string, position: string) => {
    const mask: any = canvas.getObjects().find((mask: any) => mask.name == 'mask-' + position)
    if (!mask) return;
    const canvasText = new fabric.Text(text, {
        text: text,
        angle: 0,
        fontSize: 50,
        textAlign: 'center',
        selectable: true,
        originX: 'center',
        name: 'text-' + position,
        originY: 'center',
        left: mask.left + (mask.width / 2),
        top: mask.top + (mask.height / 2),
        clipPath: mask
    })
    canvas.add(canvasText);
    canvasText.objectCaching = false
    fabric.Object.prototype.objectCaching = false
    fabric.util.clearFabricFontCache();
    canvas.setActiveObject(canvasText);
    canvas.bringToFront(canvasText);
    canvas.renderAll();
}
export const fabricAddImage = (canvas: Canvas, url: string, position: string) => {
    const mask: any = canvas.getObjects().find((mask: any) => mask.name == 'mask-' + position)
    if (!mask) return;
    fabric.Image.fromURL(url, (image) => {
        image.set({
            angle: 0,
            left: mask?.left + mask?.width / 2,
            top: mask?.top + mask?.height / 2,
            originX: 'center',
            name: 'image-' + position,
            originY: 'center',
            clipPath: mask,
            transparentCorners: false,
            centeredScaling: true,
            type: 'image',
        })
        canvas.add(image)
        image.objectCaching = false
        fabric.Object.prototype.objectCaching = false
        image.scaleToWidth(250, false);
        fabric.util.clearFabricFontCache();
        canvas.setActiveObject(image);
        canvas.bringToFront(image);
        canvas.renderAll();
    })
}
export const fabricModifyText = (canvas: Canvas, value: string, position: string, property: string) => {
    const canvasText: any = canvas.getObjects().find((mask: any) => mask.name == 'text-' + position)
    if (!canvasText) return;
    canvasText.set(property, value);
    canvas.setActiveObject(canvasText);
    canvas.renderAll();
}


export const getMousePosition = (e: any, canvasRenderedRef: any, pointer: Vector2, mouse: Vector2, raycaster: Raycaster, camera: Camera, scene: Scene, textureRef: any) => {
    const rect = canvasRenderedRef.current.getBoundingClientRect()
    let clientSize = {
        clientX: e.clientX,
        clientY: e.clientY,
    }
    if (e.changedTouches) {
        clientSize = {
            clientX: e.changedTouches[0].clientX,
            clientY: e.changedTouches[0].clientY,
        }
    }
    const array = [
        (clientSize.clientX - rect.left) / rect.width,
        (clientSize.clientY - rect.top) / rect.height,
    ]
    pointer.fromArray(array)
    // Get intersects
    mouse.set(pointer.x * 2 - 1, -(pointer.y * 2) + 1)
    raycaster.setFromCamera(mouse, camera)
    const intersects = raycaster.intersectObjects(scene.children)
    textureRef.current.needsUpdate = true

    if (intersects.length > 0 && intersects[0].uv) {
        let uv = intersects[0].uv
        return {
            x: Math.round(uv.x * 2048) - 4.5,
            y: Math.round(uv.y * 2048) - 5.5,
        }
    }
    return null
}