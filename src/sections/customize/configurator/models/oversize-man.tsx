import * as THREE from "three";
import React, { useCallback, useEffect, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomizeContext } from "@/components/customize/context";

type GLTFResult = GLTF & {
  nodes: {
    StitchMatShape_57843_Node: THREE.Mesh
    StitchMatShape_58208_Node: THREE.Mesh
    StitchMatShape_58366_Node: THREE.Mesh
    StitchMatShape_58524_Node: THREE.Mesh
    StitchMatShape_59203_Node: THREE.Mesh
    StitchMatShape_59552_Node: THREE.Mesh
    StitchMatShape_59741_Node: THREE.Mesh
    StitchMatShape_59891_Node: THREE.Mesh
    StitchMatShape_60041_Node: THREE.Mesh
    StitchMatShape_60720_Node: THREE.Mesh
    StitchMatShape_60948_Node: THREE.Mesh
    StitchMatShape_61245_Node: THREE.Mesh
    StitchMatShape_61693_Node: THREE.Mesh
    StitchMatShape_61931_Node: THREE.Mesh
    StitchMatShape_62228_Node: THREE.Mesh
    StitchMatShape_62676_Node: THREE.Mesh
    StitchMatShape_63048_Node: THREE.Mesh
    StitchMatShape_63412_Node: THREE.Mesh
    MG100Y__MAN2: THREE.Mesh
    MG100Y__MAN2_1: THREE.Mesh
    MG100Y__MAN2_2: THREE.Mesh
    MG100Y__MAN3: THREE.Mesh
    MG100Y__MAN3_1: THREE.Mesh
    MG100Y__MAN3_2: THREE.Mesh
    MG100Y_COS2: THREE.Mesh
    MG100Y_COS2_1: THREE.Mesh
    MG100Y_COS2_2: THREE.Mesh
    MG100Y_COS4: THREE.Mesh
    MG100Y_COS4_1: THREE.Mesh
    MG100Y_COS4_2: THREE.Mesh
    MG100Y_FRE2: THREE.Mesh
    MG100Y_FRE2_1: THREE.Mesh
    MG100Y_FRE2_2: THREE.Mesh
    MG100Y_GOLA_COSTA: THREE.Mesh
    MG100Y_GOLA_COSTA_1: THREE.Mesh
    MG100Y_GOLA_COSTA_2: THREE.Mesh
    MG100Y_GOLA_FRT: THREE.Mesh
    MG100Y_GOLA_FRT_1: THREE.Mesh
    MG100Y_GOLA_FRT_2: THREE.Mesh
  }
  materials: {
    Material3329: THREE.MeshStandardMaterial
    Material3150: THREE.MeshStandardMaterial
    Material2976: THREE.MeshStandardMaterial
    Material2802: THREE.MeshStandardMaterial
    Material3503: THREE.MeshStandardMaterial
    ['Knit_Cotton_Jersey_FRONT_2530.008']: THREE.MeshStandardMaterial
    ['Knit_Cotton_Jersey_FRONT_2530.009']: THREE.MeshStandardMaterial
    ['Knit_Cotton_Jersey_FRONT_2530.006']: THREE.MeshStandardMaterial
    ['Knit_Cotton_Jersey_FRONT_2530.007']: THREE.MeshStandardMaterial
    ['Rib_1X1_319gsm_FRONT_2550.004']: THREE.MeshStandardMaterial
    ['Rib_1X1_319gsm_FRONT_2550.003']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function OversizeManModel(props: JSX.IntrinsicElements["group"]) {
  const customize = useCustomizeContext();
  const [tagName, setTagName] = useState("");

  let loader = new THREE.TextureLoader();
  loader.setCrossOrigin("");
  const [texture, setTexture] = useState(loader.load(customize.embellishment.file)) as any;

  useEffect(() => {
    setTexture(loader.load(customize.embellishment.file));
  }, [customize.embellishment.file]);

  useEffect(() => {
    var textCanvas = document.createElement("canvas");
    textCanvas.width = 200;
    textCanvas.height = 100;
    var ctx = textCanvas.getContext("2d");
    if (ctx !== null) {
      ctx.fillStyle = "black";
      ctx.font = `30px ${customize.embellishment.font}`;
      ctx.fillText(customize.embellishment.textureText, 10, 50);
      const myTexture = new THREE.CanvasTexture(textCanvas);
      setTexture(myTexture)
    }
  }, [customize.embellishment.textureText, customize.embellishment.font])

  const { nodes, materials } = useGLTF(
    "/models/Oversize/Oversized.glb"
  ) as GLTFResult;

  if (customize.color.length > 0) {
    const color = customize.color;
    for (let key in materials) {
      materials[key] = new THREE.MeshStandardMaterial({ ...materials[key], color: color })
    }
  }

  const tag = useCallback(() => {
    try {
      if (!!tagName) {
        const { nodes, materials } = useGLTF(
          `/models/Oversize/tags/Man/${tagName}/${tagName}.glb`
        ) as any;

        const keys: string[] = Object.keys(nodes);
        const material: any = materials[Object.keys(materials)[0]];

        return (
          <group {...props} dispose={null}>
            {keys.map((key: string, idx: number) => (
              <mesh name={`pattern_${idx}`} geometry={nodes[key].geometry} material={material} key={key} />
            ))}
          </group>
        )
      } else return ''
    } catch (err) {
      console.log(err)
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

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.StitchMatShape_57843_Node.geometry} material={materials.Material3329} />
      <mesh geometry={nodes.StitchMatShape_58208_Node.geometry} material={materials.Material3150} />
      <mesh geometry={nodes.StitchMatShape_58366_Node.geometry} material={materials.Material2976} />
      <mesh geometry={nodes.StitchMatShape_58524_Node.geometry} material={materials.Material2976} />
      <mesh geometry={nodes.StitchMatShape_59203_Node.geometry} material={materials.Material2802} />
      <mesh geometry={nodes.StitchMatShape_59552_Node.geometry} material={materials.Material3329} />
      <mesh geometry={nodes.StitchMatShape_59741_Node.geometry} material={materials.Material2976} />
      <mesh geometry={nodes.StitchMatShape_59891_Node.geometry} material={materials.Material2976} />
      <mesh geometry={nodes.StitchMatShape_60041_Node.geometry} material={materials.Material2976} />
      <mesh geometry={nodes.StitchMatShape_60720_Node.geometry} material={materials.Material2802} />
      <mesh geometry={nodes.StitchMatShape_60948_Node.geometry} material={materials.Material3329} />
      <mesh geometry={nodes.StitchMatShape_61245_Node.geometry} material={materials.Material2976} />
      <mesh geometry={nodes.StitchMatShape_61693_Node.geometry} material={materials.Material2802} />
      <mesh geometry={nodes.StitchMatShape_61931_Node.geometry} material={materials.Material3329} />
      <mesh geometry={nodes.StitchMatShape_62228_Node.geometry} material={materials.Material2976} />
      <mesh geometry={nodes.StitchMatShape_62676_Node.geometry} material={materials.Material2802} />
      <mesh geometry={nodes.StitchMatShape_63048_Node.geometry} material={materials.Material3503}>
        {customize.tag.edit ? tag() : ""}
      </mesh>
      <mesh geometry={nodes.StitchMatShape_63412_Node.geometry} material={materials.Material3503} />
      <mesh geometry={nodes.MG100Y__MAN2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.008']} />
      <mesh geometry={nodes.MG100Y__MAN2_1.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.008']} />
      <mesh geometry={nodes.MG100Y__MAN2_2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.008']} />
      <mesh geometry={nodes.MG100Y__MAN3.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.009']} />
      <mesh geometry={nodes.MG100Y__MAN3_1.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.009']} />
      <mesh geometry={nodes.MG100Y__MAN3_2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.009']} />
      <mesh geometry={nodes.MG100Y_COS2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.006']} />
      <mesh geometry={nodes.MG100Y_COS2_1.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.006']} />
      <mesh geometry={nodes.MG100Y_COS2_2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.006']} />
      <mesh geometry={nodes.MG100Y_COS4.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.006']} />
      <mesh geometry={nodes.MG100Y_COS4_1.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.006']} />
      <mesh geometry={nodes.MG100Y_COS4_2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.006']} />
      <mesh geometry={nodes.MG100Y_FRE2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.007']}>
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
      <mesh geometry={nodes.MG100Y_FRE2_1.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.007']} />
      <mesh geometry={nodes.MG100Y_FRE2_2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.007']} />
      <mesh geometry={nodes.MG100Y_GOLA_COSTA.geometry} material={materials['Rib_1X1_319gsm_FRONT_2550.004']} />
      <mesh geometry={nodes.MG100Y_GOLA_COSTA_1.geometry} material={materials['Rib_1X1_319gsm_FRONT_2550.004']} />
      <mesh geometry={nodes.MG100Y_GOLA_COSTA_2.geometry} material={materials['Rib_1X1_319gsm_FRONT_2550.004']} />
      <mesh geometry={nodes.MG100Y_GOLA_FRT.geometry} material={materials['Rib_1X1_319gsm_FRONT_2550.003']} />
      <mesh geometry={nodes.MG100Y_GOLA_FRT_1.geometry} material={materials['Rib_1X1_319gsm_FRONT_2550.003']} />
      <mesh geometry={nodes.MG100Y_GOLA_FRT_2.geometry} material={materials['Rib_1X1_319gsm_FRONT_2550.003']} />
    </group>
  );
}

// useGLTF.preload
("/models/Oversize/Oversized.glb.glb");
useGLTF.preload("/models/Oversize/tags/Man/label-45x45_black/label-45x45_black.glb")
useGLTF.preload("/models/Oversize/tags/Man/label-45x45_white/label-45x45_white.glb")
useGLTF.preload("/models/Oversize/tags/Man/label-55x30_black/label-55x30_black.glb")
useGLTF.preload("/models/Oversize/tags/Man/label-55x30_white/label-55x30_white.glb")
useGLTF.preload("/models/Oversize/tags/Man/print-label_black/print-label_black.glb")
useGLTF.preload("/models/Oversize/tags/Man/print-label_white/print-label_white.glb")