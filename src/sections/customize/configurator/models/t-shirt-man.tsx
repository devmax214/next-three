import * as THREE from "three";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomizeContext } from "@/components/customize/context";
import { isEmpty } from "lodash";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    StitchMatShape_23735_Node: THREE.Mesh
    StitchMatShape_24030_Node: THREE.Mesh
    StitchMatShape_24325_Node: THREE.Mesh
    StitchMatShape_24515_Node: THREE.Mesh
    StitchMatShape_24809_Node: THREE.Mesh
    StitchMatShape_25104_Node: THREE.Mesh
    StitchMatShape_25398_Node: THREE.Mesh
    StitchMatShape_25611_Node: THREE.Mesh
    StitchMatShape_25820_Node: THREE.Mesh
    StitchMatShape_26028_Node: THREE.Mesh
    StitchMatShape_26246_Node: THREE.Mesh
    StitchMatShape_26455_Node: THREE.Mesh
    StitchMatShape_26663_Node: THREE.Mesh
    Pattern2D_190184005: THREE.Mesh
    Pattern2D_190184005_1: THREE.Mesh
    Pattern2D_190184005_2: THREE.Mesh
    ['TSHIRTWR-COS005']: THREE.Mesh
    ['TSHIRTWR-COS005_1']: THREE.Mesh
    ['TSHIRTWR-COS005_2']: THREE.Mesh
    ['TSHIRTWR-FRE005']: THREE.Mesh
    ['TSHIRTWR-FRE005_1']: THREE.Mesh
    ['TSHIRTWR-FRE005_2']: THREE.Mesh
    ['TSHIRTWR-GOLA005']: THREE.Mesh
    ['TSHIRTWR-GOLA005_1']: THREE.Mesh
    ['TSHIRTWR-GOLA005_2']: THREE.Mesh
    ['TSHIRTWR-MANGA_1005']: THREE.Mesh
    ['TSHIRTWR-MANGA_1005_1']: THREE.Mesh
    ['TSHIRTWR-MANGA_1005_2']: THREE.Mesh
    ['TSHIRTWR-MANGA005']: THREE.Mesh
    ['TSHIRTWR-MANGA005_1']: THREE.Mesh
    ['TSHIRTWR-MANGA005_2']: THREE.Mesh
  }
  materials: {
    ['Material3180.002']: THREE.MeshStandardMaterial
    ['Material2818.002']: THREE.MeshStandardMaterial
    ['Material2996.002']: THREE.MeshStandardMaterial
    ['Knit_Cotton_Jersey_FRONT_2530.014']: THREE.MeshStandardMaterial
    ['Knit_Cotton_Jersey_FRONT_2530.010']: THREE.MeshStandardMaterial
    ['Knit_Cotton_Jersey_FRONT_2530.012']: THREE.MeshStandardMaterial
    ['Rib_1X1_319gsm_FRONT_2550.005']: THREE.MeshStandardMaterial
    ['Knit_Cotton_Jersey_FRONT_2530.011']: THREE.MeshStandardMaterial
    ['Knit_Cotton_Jersey_FRONT_2530.013']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function TShirtManModel(props: JSX.IntrinsicElements["group"]) {
  const customize = useCustomizeContext();

  const [tagName, setTagName] = useState("");
  let loader = new THREE.TextureLoader();
  loader.setCrossOrigin("");
  const [texture, setTexture] = useState(new THREE.Texture()) as any;
  const [tagTexture, setTagTexture] = useState(undefined) as any;

  useEffect(() => {
    if (customize.embellishment.file)
      setTexture(loader.load(customize.embellishment.file));
  }, [customize.embellishment.file]);

  useEffect(() => {
    if (customize.tag.file)
      setTagTexture(loader.load(customize.tag.file));
  }, [customize.tag.file])

  useEffect(() => {
    var textCanvas = document.createElement("canvas");
    textCanvas.width = 200;
    textCanvas.height = 100;
    var ctx = textCanvas.getContext("2d");
    if (ctx !== null && customize.embellishment.font) {
      ctx.fillStyle = "black";
      ctx.font = `30px ${customize.embellishment.font}`;
      ctx.fillText(customize.embellishment.textureText, 0, 100);
      const myTexture = new THREE.CanvasTexture(textCanvas);
      setTexture(myTexture)
    }
  }, [customize.embellishment.textureText, customize.embellishment.font])

  const { nodes, materials } = useGLTF(
    "/models/TSHIRTWR_man/TSHIRT_MAN.glb"
  ) as GLTFResult;

  if (!isEmpty(customize.color)) {
    const color = customize.color;
    for (let key in materials) {
      materials[key] = new THREE.MeshStandardMaterial({ ...materials[key], color: color })
    }
  }

  const tag = useCallback(() => {
    try {
      if (!!tagName) {
        const { nodes, materials } = useGLTF(
          `/models/TSHIRTWR_man/tags/Man/${tagName}/${tagName}.glb`
        ) as any;

        const keys: string[] = Object.keys(nodes);
        const material: any = materials[Object.keys(materials)[0]];

        return (
          <group dispose={null}>
            {keys.map((key: string, idx: number) => (
              idx === 0 ? (
                <mesh name={`pattern_${idx}`} geometry={nodes[key].geometry} material={material} key={key}>
                  {/* <Decal
                    position={[0, 1.31, 0.15]}
                    rotation={[0, 0, 0]}
                    scale={0.25}
                    map={tagTexture}
                  // debug={true}
                  // depthTest={true}
                  // map-anisotropy={16}
                  /> */}
                </mesh>
              ) : (
                <mesh name={`pattern_${idx}`} geometry={nodes[key].geometry} material={material} key={key} />
              )))}
          </group>
        )
      } else {
        return '';
      }
    } catch (err: any) {
      console.log(err);
    }
  }, [tagName])

  useEffect(() => {
    if (customize.tag.neck) {
      const newName = `label-${customize.tag.size}_${customize.tag.color ? "black" : "white"}`
      setTagName(newName);
    } else {
      setTagName(`print-label_${customize.tag.color ? "black" : "white"}`);
    }
  }, [customize.tag])

  useFrame(state => {
    if (customize.tag.visible) {
      state.camera.position.set(0, 0, 2.5);
    }
  })

  return (
    <group position={[0, 0, 0]} {...props} dispose={null}>
      <mesh geometry={nodes.StitchMatShape_23735_Node.geometry} material={materials['Material3180.002']}>
        {customize.tag.edit ? tag() : ""}
      </mesh>
      <mesh geometry={nodes.StitchMatShape_24030_Node.geometry} material={materials['Material2818.002']} />
      <mesh geometry={nodes.StitchMatShape_24325_Node.geometry} material={materials['Material2818.002']} />
      <mesh geometry={nodes.StitchMatShape_24515_Node.geometry} material={materials['Material2996.002']} />
      <mesh geometry={nodes.StitchMatShape_24809_Node.geometry} material={materials['Material3180.002']} />
      <mesh geometry={nodes.StitchMatShape_25104_Node.geometry} material={materials['Material2818.002']} />
      <mesh geometry={nodes.StitchMatShape_25398_Node.geometry} material={materials['Material2818.002']} />
      <mesh geometry={nodes.StitchMatShape_25611_Node.geometry} material={materials['Material3180.002']} />
      <mesh geometry={nodes.StitchMatShape_25820_Node.geometry} material={materials['Material2818.002']} />
      <mesh geometry={nodes.StitchMatShape_26028_Node.geometry} material={materials['Material2818.002']} />
      <mesh geometry={nodes.StitchMatShape_26246_Node.geometry} material={materials['Material3180.002']} />
      <mesh geometry={nodes.StitchMatShape_26455_Node.geometry} material={materials['Material2818.002']} />
      <mesh geometry={nodes.StitchMatShape_26663_Node.geometry} material={materials['Material2818.002']} />
      <mesh geometry={nodes.Pattern2D_190184005.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.014']} />
      <mesh geometry={nodes.Pattern2D_190184005_1.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.014']} />
      <mesh geometry={nodes.Pattern2D_190184005_2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.014']} />
      <mesh geometry={nodes['TSHIRTWR-COS005'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.010']} />
      <mesh geometry={nodes['TSHIRTWR-COS005_1'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.010']} />
      <mesh geometry={nodes['TSHIRTWR-COS005_2'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.010']} />
      <mesh geometry={nodes['TSHIRTWR-FRE005'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.012']}>
        <Decal
          position={[0, 1.31, 0.15]}
          rotation={[0, 0, 0]}
          scale={0.25}
          map={texture}
        // debug={true}
        // depthTest={true}
        // map-anisotropy={16}
        />
      </mesh>
      <mesh geometry={nodes['TSHIRTWR-FRE005_1'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.012']} />
      <mesh geometry={nodes['TSHIRTWR-FRE005_2'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.012']} />
      <mesh geometry={nodes['TSHIRTWR-GOLA005'].geometry} material={materials['Rib_1X1_319gsm_FRONT_2550.005']} />
      <mesh geometry={nodes['TSHIRTWR-GOLA005_1'].geometry} material={materials['Rib_1X1_319gsm_FRONT_2550.005']} />
      <mesh geometry={nodes['TSHIRTWR-GOLA005_2'].geometry} material={materials['Rib_1X1_319gsm_FRONT_2550.005']} />
      <mesh geometry={nodes['TSHIRTWR-MANGA_1005'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.011']} />
      <mesh geometry={nodes['TSHIRTWR-MANGA_1005_1'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.011']} />
      <mesh geometry={nodes['TSHIRTWR-MANGA_1005_2'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.011']} />
      <mesh geometry={nodes['TSHIRTWR-MANGA005'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.013']} />
      <mesh geometry={nodes['TSHIRTWR-MANGA005_1'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.013']} />
      <mesh geometry={nodes['TSHIRTWR-MANGA005_2'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.013']} />
    </group>
  );
}

// useGLTF.preload
("/models/TSHIRTWR_man/TSHIRT_MAN.gltf");
useGLTF.preload("/models/TSHIRTWR_man/tags/Man/label-45x45_black/label-45x45_black.glb")
useGLTF.preload("/models/TSHIRTWR_man/tags/Man/label-45x45_white/label-45x45_white.glb")
useGLTF.preload("/models/TSHIRTWR_man/tags/Man/label-55x30_black/label-55x30_black.glb")
useGLTF.preload("/models/TSHIRTWR_man/tags/Man/label-55x30_white/label-55x30_white.glb")
useGLTF.preload("/models/TSHIRTWR_man/tags/Man/print-label_black/print-label_black.glb")
useGLTF.preload("/models/TSHIRTWR_man/tags/Man/print-label_white/print-label_white.glb")