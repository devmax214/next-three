import { useLoader } from "@react-three/fiber";
import { useEffect, useState } from "react";
import THREE, { Texture, TextureLoader } from "three";

interface Props {
  canvasRef: any;
  textureRef: any;
  normalMap: Texture;
  bumpMap: Texture;
  normalScale?: number;
  bumpScale?: number;
  color?: string;
}
function FabricEditableTexture(props: Props) {
  const [map, setMap] = useState<Texture>()
  useEffect(() => {
    if (props.color) {
      setMap(props.bumpMap)
    } else {
      setMap(props.textureRef.current)
    }
  })
  return (
    <meshPhysicalMaterial
      attach="material"
      // roughness={0.7}
      // emissive={1}
      normalMap={props.normalMap}
      normalScale={props.normalScale ? props.normalScale : -0.05}
      bumpMap={props.bumpMap}
      bumpScale={props.bumpScale ? props.bumpScale : 0.0005}
      map={map}
      color={props.color}
      needsUpdate
    >
      <texture attach="map" image={props.canvasRef.current.getElement()} />
    </meshPhysicalMaterial>
  );
}

export default FabricEditableTexture;
