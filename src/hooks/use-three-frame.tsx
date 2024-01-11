import { useFrame } from "@react-three/fiber";
import { getState, setState } from "@/helpers/store";
import { Canvas } from "fabric/fabric-impl";
import { clipPath } from "@/constant/fabricConst";

const useThreeFrame = (canvasRef: any, controlsRef: any, ptype: string) => {
  const canvas = canvasRef.current as Canvas;
  const element = document.getElementsByTagName("body")[0];
  const setCursor = (e: any) => {
    element.style.cursor = "default";
    if (e.target && (e.target.text || e.target.name.includes("image"))) {
      element.style.cursor = canvas.upperCanvasEl.style.cursor;
    }
  }

  useFrame(() => {
    controlsRef.current?.update();

    canvas.on("mouse:up", (e: any) => {
      controlsRef.current.enabled = true;
    });
    canvas.on("mouse:down", (e: any) => {
      setCursor(e);
      if (e.target && (e.target.text || e.target.name.includes("image"))) {
        controlsRef.current.enabled = false;
      }
    });
    canvas.on("mouse:move", (e: any) => {
      setCursor(e)
    });
    var zeroBeforeX = 0, zeroBeforeY = 0;
    canvas.on("object:moving", (e: any) => {
      setCursor(e)
      const position = e.target.name.split("-").slice(1).join('-');
      const rect: any = canvas
        .getObjects()
        .find((o) => o.name == "mask-" + position);
      let boundingRect = rect.getBoundingRect();
      let targetWidth = e.target.scaleX * e.target.width;
      let targetHeight = e.target.scaleY * e.target.height;

      if (e.target.left > 0) {
        zeroBeforeX = e.target.left;
      } else {
        e.target.left = zeroBeforeX
        e.target.top = zeroBeforeY;
      }
      if (e.target.top > 0) {
        zeroBeforeY = e.target.top;
      } else {
        e.target.top = zeroBeforeY;
        e.target.left = zeroBeforeX;
      }

      if (e.target.left - targetWidth / 2 < boundingRect.left) {
        e.target.left = boundingRect.left + targetWidth / 2;
      } else if (
        e.target.left + targetWidth / 2 >
        boundingRect.left + boundingRect.width
      ) {
        e.target.left = boundingRect.left + boundingRect.width - targetWidth / 2;
      }

      if (e.target.top - targetHeight / 2 < boundingRect.top) {
        e.target.top = boundingRect.top + targetHeight / 2;
      } else if (
        e.target.top + targetHeight / 2 >
        boundingRect.top + boundingRect.height
      ) {
        e.target.top = boundingRect.top + boundingRect.height - targetHeight / 2;
      }
      e.target.setCoords();
    });

    var gScaleX = 0, gScaleY = 0;
    canvas.on("object:scaling", (e: any) => {
      const position = e.target.name.split("-").slice(1).join('-');
      const productData = clipPath[ptype].find((path: any) => path.id.includes("mask-" + position));
      let targetWidth = e.target.scaleX * e.target.width;
      let targetHeight = e.target.scaleY * e.target.height;

      var imgWidth = e.target.width * e.target.scaleX * productData.rWidth / productData.cWidth;
      var imgHeight = e.target.height * e.target.scaleY * productData.rHeight / productData.cHeight;

      if (imgWidth <= productData.rWidth && imgHeight <= productData.rHeight) {
        gScaleX = e.target.scaleX;
        gScaleY = e.target.scaleY;
      } else {
        e.target.set('scaleX', gScaleX);
        e.target.set('scaleY', gScaleY);
      }

      if (e.target.name.split("-")[0] == 'image' && canvasRef.setImageSize && canvasRef.setImageSize[position]) {
        const limitRatio = productData.cWidth / productData.cHeight;
        const imageRatio = e.target.width / e.target.height;
        if (limitRatio < imageRatio) {
          canvasRef.setImageSize[position]((prevState: any) => {
            return ({
              ...prevState,
              ...{
                width: Math.ceil(imgWidth),
                height: imgHeight.toFixed(2)
              }
            })
          });
        } else {
          canvasRef.setImageSize[position]((prevState: any) => {
            return ({
              ...prevState,
              ...{
                width: imgWidth.toFixed(2),
                height: Math.ceil(imgHeight)
              }
            })
          });
        }
      }
    });
  });
};

export default useThreeFrame;
