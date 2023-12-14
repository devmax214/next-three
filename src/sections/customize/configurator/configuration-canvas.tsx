import { useContext, useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import { Center, Environment, OrbitControls } from "@react-three/drei";
import { TShartMan, HoodyMan, PantMan, ShortMan, SWEATMAN, OversizeMan } from "@/sections/customize/configurator/models";
import { CustomizeContext } from '@/components/customize/context/customize-context';

type Props = {
  type: string;
  id: string;
};

export default function ConfigurationCanvas(props: Props) {
  const customize = useContext(CustomizeContext);
  const [state, setState] = useState({});
  const [embelIndex, setEmbelIndex] = useState(0);

  useEffect(() => {
    setEmbelIndex(customize.embelIndex);

    if (customize.tag.visible) {
      setState({
        scale: [10, 10, 10],
        bottom: true,
        position: [-0.02, 0.4, 0.4],
        rotation: [0.1, 0, 0]
      })
    } else if (customize.embellishment[embelIndex].visible) {
      const typeOne = ["Pants", "Shorts"];
      if ((typeOne.includes(props.type) && [0, 1].includes(embelIndex))) {
        setState({
          scale: props.type == "Pants" ? [1.5, 1.5, 1.5] : [2, 2, 2],
          position: [0, props.type == "Pants" ? -0.2 : 0, 0],
          rotation: [0, 0, 0]
        })
      } else if ((typeOne.includes(props.type) && [2, 3, 4].includes(embelIndex))) {
        setState({
          scale: props.type == "Pants" ? [1.5, 1.5, 1.5] : [2, 2, 2],
          position: [0, props.type == "Pants" ? -0.2 : 0, 0],
          rotation: [0, Math.PI, 0]
        })
      }
    } else {
      setState({});
    };

  }, [customize.tag.visible, customize.embelIndex, customize.embellishment[embelIndex].visible]);

  return (
    <Canvas
      id={props.id}
      shadows
      gl={{ preserveDrawingBuffer: true }}
      camera={{ position: [0, 0, 2.5], fov: 25 }}
      style={{ 
        height: window.screen.width > 760 ? 600 : "85%", 
        background: "radial-gradient(circle, rgba(229,229,229,1) 0%, rgba(149,149,149,1) 100%)", 
        borderRadius: 20 
      }}
    >
      <ambientLight intensity={0.5} />

      <Environment files="/models/potsdamer_platz_1k.hdr" />

      <Center {...state} >
        {props.type === 'Hoodies' ?
          <HoodyMan embelIndex={embelIndex} /> : props.type === 'Pants' ?
            <PantMan embelIndex={embelIndex} /> : props.type === 'Shorts' ?
              <ShortMan embelIndex={embelIndex} /> : props.type === 'Sweatshirts' ?
                <SWEATMAN embelIndex={embelIndex} /> : props.type === 'T-Shirts' ?
                  <TShartMan embelIndex={embelIndex} /> : <OversizeMan embelIndex={embelIndex} />}

      </Center>

      <OrbitControls />
    </Canvas>
  );
}