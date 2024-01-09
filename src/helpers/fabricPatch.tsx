import { MutableRefObject, useEffect } from 'react'
import { fabric } from 'fabric'
import { Canvas, Control } from 'fabric/fabric-impl'
import { Texture } from 'three/src/textures/Texture'
import { setState } from './store'
import { clipPath, svgRotCursor, svgRotIcon } from "@/constant/fabricConst";
import { isArguments } from 'lodash'
import { Context } from 'react-markdown/lib/ast-to-react'

interface Props {
  threeProps: {
    camera: any
    pointer: any
    scene: any
    raycaster: any
    mouse: any
    gl: any
  }
  canvasRenderedRef: MutableRefObject<HTMLCanvasElement>
  canvasRef: MutableRefObject<Canvas>
  textureRef: MutableRefObject<any>
}

export const initPatch = ({
  threeProps,
  canvasRenderedRef,
  canvasRef,
  textureRef,
}: Props) => {
  const { camera, pointer, scene, raycaster, mouse } = threeProps
  if (!camera || !pointer || !scene || !raycaster || !mouse) {
    return
  }

  fabric.Object.prototype.transparentCorners = false;
  fabric.Object.prototype.cornerColor = '#F05A4A';
  fabric.Object.prototype.cornerStyle = 'circle';
  fabric.Object.prototype.cornerSize = 26;
  fabric.Object.prototype.borderDashArray = [10]
  fabric.Object.prototype.borderColor = 'black'
  fabric.Object.prototype.objectCaching = true;
  fabric.Object.prototype.minScaleLimit = 0.1;

  // if (editText || isAddText) {
  fabric.Canvas.prototype.getPointer = (e: any, ignoreZoom) => {
    const canvasElement = canvasRef.current.getSelectionElement();
    const bounds = canvasElement.getBoundingClientRect();
    const boundsWidth = bounds.width || 0;
    const boundsHeight = bounds.height || 0;
    const pointerFabric = fabric.util.getPointer(e, canvasElement);
    const canvasCenter = canvasRef.current.getCenter();
    pointerFabric.x = Math.round(pointerFabric.x) - canvasCenter.left;
    pointerFabric.y = Math.round(pointerFabric.y) - canvasCenter.top;

    if (e.target !== canvasElement) {
      const rect = canvasRenderedRef.current.getBoundingClientRect();
      let array = [];
      if (e.changedTouches) {
        array = [
          (e.changedTouches[0].clientX - rect.left) / rect.width,
          (e.changedTouches[0].clientY - rect.top) / rect.height,
        ];
      } else {
        array = [
          (e.clientX - rect.left) / rect.width,
          (e.clientY - rect.top) / rect.height,
        ];
      }
      pointer.fromArray(array);
      mouse.set(pointer.x * 2 - 1, -(pointer.y * 2) + 1);
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(scene.children);
      if (intersects.length > 0 && intersects[0].uv) {
        let uv = intersects[0].uv;
        pointerFabric.x = Math.round(uv.x * 2048) - 4.5;
        pointerFabric.y = Math.round(uv.y * 2048) - 5.5;

        // Update texture
        // canvasRef.current.renderAll();
        // textureRef.current.flipY = false;
        // textureRef.current.needsUpdate = true;
        setState({ changed: true });
      }
    }

    let cssScale;
    if (boundsWidth === 0 || boundsHeight === 0) {
      cssScale = { width: 1, height: 1 };
    } else {
      cssScale = {
        width: canvasElement.width / boundsWidth,
        height: canvasElement.height / boundsHeight,
      };
    }

    return {
      x: pointerFabric.x * cssScale.width,
      y: pointerFabric.y * cssScale.height,
    };
  };

  fabric.Object.prototype.drawControls = function (ctx) {
    if (!this.hasControls) {
      return this;
    }

    var wh = this._calculateCurrentDimensions();
    var width = wh.x,
      height = wh.y,
      rectSize = 18,
      scaleOffset = 18,
      left = -(width + scaleOffset) / 2,
      top = -(height + scaleOffset) / 2;

    ctx.save();
    this._setLineDash(ctx, this.cornerDashArray as number[]);

    ctx.roundRect(left, top, rectSize, rectSize, 5);
    ctx.roundRect(left + width, top, rectSize, rectSize, 5);
    ctx.roundRect(left, top + height, rectSize, rectSize, 5);
    ctx.roundRect(left + width, top + height, rectSize, rectSize, 5);

    if (this.hasRotatingPoint) {
      const rotateIcon = `data:image/svg+xml;utf8,${svgRotIcon}`
      const imgIcon = document.createElement('img');
      imgIcon.src = rotateIcon;
      var rotateLeft, rotateTop, rotateSize = 26;
      rotateLeft = left + width / 2 - 4;
      rotateTop = top - (this.rotatingPointOffset as number) - 4;
      // ctx.roundRect(rotateLeft, rotateTop, rotateSize, rotateSize, 5);
      ctx.drawImage(imgIcon, rotateLeft, rotateTop, rotateSize, rotateSize);
    }
    ctx.fillStyle = this.cornerColor as string;
    ctx.fill();
    ctx.restore();

    return this;
  }
}