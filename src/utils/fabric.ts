import { Canvas } from "fabric/fabric-impl"
import { fabric } from "fabric"
import { useCallback } from "react";
import { Camera, CanvasTexture, Raycaster, Scene, Vector2 } from "three";
import { clipPath, hideControls } from "@/constant/fabricConst";

export const fabricChangeColors = (canvas: Canvas, color: string) => {
    let masks = canvas.getObjects().filter(obj => obj.name?.includes('mask'))
    canvas.backgroundColor = color;
    masks.forEach(rect => {
        rect.set('fill', color)
    });
    canvas.renderAll();
}
export const fabricAddText = (canvas: Canvas, text: string, position: string, auto?: boolean) => {
    const mask: any = canvas.getObjects().find((mask: any) => mask.name == 'mask-' + position)
    canvas.getObjects().map((m: any) => {
        if (m.name == 'image-' + position || m.name == 'text-' + position) canvas.remove(m)
    });
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
        clipPath: mask,
        lockScalingFlip: true,
    })
    canvas.add(canvasText);
    canvasText.setControlsVisibility(hideControls)
    canvasText.objectCaching = false
    fabric.Object.prototype.objectCaching = false
    fabric.util.clearFabricFontCache();
    !auto && canvas.setActiveObject(canvasText);
    canvas.bringToFront(canvasText);
    canvas.renderAll();
}
export const fabricAddImage = (canvas: Canvas, canvasAllRef: any, url: string, position: string, ptype: string, auto?: boolean) => {
    if (canvasAllRef.setLoading) canvasAllRef.setLoading(true);
    const productData = clipPath[ptype].find((path: any) => path.id.includes('mask-' + position));
    const mask: any = canvas.getObjects().find((mask: any) => mask.name == 'mask-' + position)

    canvas.getObjects().map((m: any) => {
        if (m.name == 'image-' + position || m.name == 'text-' + position) canvas.remove(m)
    });
    if (!mask) return;
    fabric.Image.fromURL(url, (image: any) => {
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
            lockScalingFlip: true,
        })
        canvas.add(image)
        image.setControlsVisibility(hideControls)
        image.objectCaching = false
        const limitRatio = productData.cWidth / productData.cHeight;
        const imageRatio = image.width / image.height;
        limitRatio < imageRatio
            ? image.scaleToWidth(productData.cWidth, false)
            : image.scaleToHeight(productData.cHeight, false)
        fabric.util.clearFabricFontCache();
        !auto && canvas.setActiveObject(image);
        canvas.bringToFront(image);
        canvas.renderAll();
        if (canvasAllRef.setImageSize && canvasAllRef.setImageSize[position]) {
            canvasAllRef.setImageSize[position]((prevState: any) => {
                return ({
                    ...prevState,
                    ...{
                        width: (image.width * image.scaleX * productData.rWidth / productData.cWidth).toFixed(2),
                        height: (image.height * image.scaleY * productData.rHeight / productData.cHeight).toFixed(2)
                    }
                })
            });
        }
        if (canvasAllRef.setLoading) {
            setTimeout(() => {
                canvasAllRef.setLoading(false);
            }, 200);
        }
    })
}
export const fabricModifyText = (canvas: Canvas, value: string, position: string, property: string) => {
    const canvasText: any = canvas.getObjects().find((mask: any) => mask.name == 'text-' + position)
    if (!canvasText) return;
    canvasText.set(property, value);
    canvas.setActiveObject(canvasText);
    canvas.renderAll();
}

export const fabricChangeSize = (canvas: Canvas, state: any, calcType: number, position: string, ptype: string, setImageSize: any) => {
    const pd = clipPath[ptype].find((path: any) => path.id.includes('mask-' + position));
    const image: any = canvas.getObjects().find((mask: any) => mask.name == 'image-' + position)
    if (!image) {
        setImageSize((prevState: any) => ({
            ...prevState,
            ...{ width: pd.rWidth, height: pd.rHeight }
        }))
        return;
    }

    const limitRatio = pd.cWidth / pd.cHeight;
    const imageRatio = image.width / image.height;
    if (limitRatio < imageRatio) {
        const value = calcType == -1 ? (state.width > 0 ? state.width - 1 : state.width) : state.width < pd.rWidth ? state.width + 1 : state.width;
        image.scaleToWidth(pd.cWidth / pd.rWidth * parseFloat(value), false)
        canvas.renderAll();
        setImageSize((prevState: any) => ({
            ...prevState,
            ...{ width: Math.ceil(parseFloat(value)), height: (image.height * image.scaleY * pd.rHeight / pd.cHeight).toFixed(2) }
        }));
        return 'width';
    } else {
        const value = calcType == -1 ? (state.height > 0 ? state.height - 1 : state.height) : state.height < pd.rHeight ? state.height + 1 : state.height;
        image.scaleToHeight(pd.cHeight / pd.rHeight * parseFloat(value), false);
        canvas.renderAll();
        setImageSize((prevState: any) => ({
            ...prevState,
            ...{ width: (image.width * image.scaleX * pd.rWidth / pd.cWidth).toFixed(2), height: Math.ceil(parseFloat(value)) }
        }));

        return 'height';
    }
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