import { useContext, useState, useEffect, useRef, Ref } from "react";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { TShartMan, HoodyMan, PantMan, ShortMan, SWEATMAN, OversizeMan } from "@/sections/customize/configurator/models";
import { CustomizeContext } from '@/components/customize/context/customize-context';

type Props = {
  type: string
};

export default function ConfigurationCanvas(props: Props) {
  const customize = useContext(CustomizeContext);
  const [state, setState] = useState({});
  const canvasRef = useRef();

  useEffect(() => {
    if (customize.tag.visible) {
      setState({
        scale: [5, 5, 5],
        bottom: true,
        position: [0, 0.4, 0.4],
        rotation: [0, 0, 0]
      })
    } else if (customize.embellishment.visible) {
      if (customize.embellishment.view) {
        setState({
          scale: [2, 2, 2],
          rotation: [0, Math.PI, 0]
        })
      } else {
        setState({
          scale: [2, 2, 2],
          rotation: [0, 0, 0]
        })
      }
    } else {
      setState({});
    };
  }, [customize.tag.visible, customize.embellishment.visible, customize.embellishment.view]);
  return (
    <Canvas
      shadows
      ref={canvasRef}
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 2.5], fov: 25 }}
      style={{ height: 600, background: "radial-gradient(circle, rgba(229,229,229,1) 0%, rgba(149,149,149,1) 100%)", borderRadius: 20 }}
    >
      <ambientLight intensity={0.5} />

      <Environment files="/models/potsdamer_platz_1k.hdr" />

      <Center {...state}>
        {props.type === 'hoodies' ?
          <HoodyMan /> : props.type === 'pants' ?
            <PantMan /> : props.type === 'shorts' ?
              <ShortMan /> : props.type === 'sweatshirts' ?
                <SWEATMAN /> : props.type === 'tshirts' ?
                  <TShartMan /> : <OversizeMan />}

      </Center>

      <OrbitControls />
    </Canvas>
  );
}
//
// function Shirt() {
//   const texture = useTexture("/models/decor_img.jpg");
//
//   const { nodes, materials } = useGLTF(
//     "/models/TAIJ-shirt_baked_collapsed.glb"
//   );
//
//   // materials.lambert1.color = "#ff0000";
//
//   materials.lambert1.color = new THREE.Color("#ffffff");
//
//   return (
//     <mesh
//       geometry={nodes.T_Shirt_male.geometry}
//       material={materials.lambert1}
//       material-roughness={1}
//     >
//       <Decal
//         position={[0, 0.04, 0.15]}
//         rotation={[0, 0, 0]}
//         scale={0.15}
//         map={texture}
//         // map-anisotropy={16}
//       />
//       {/*<meshLambertMaterial color={0xff0000} />*/}
//     </mesh>
//   );
// }
