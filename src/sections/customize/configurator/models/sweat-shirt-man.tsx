import * as THREE from "three";
import React, { useCallback, useEffect, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomizeContext } from "@/components/customize/context";
import { isEmpty } from "lodash";
import { hexToRgba } from "@uiw/color-convert";

type GLTFResult = GLTF & {
  nodes: {
    StitchMatShape_111634_Node: THREE.Mesh
    StitchMatShape_111795_Node: THREE.Mesh
    StitchMatShape_111956_Node: THREE.Mesh
    StitchMatShape_112115_Node: THREE.Mesh
    StitchMatShape_112284_Node: THREE.Mesh
    StitchMatShape_112453_Node: THREE.Mesh
    StitchMatShape_112659_Node: THREE.Mesh
    StitchMatShape_112753_Node: THREE.Mesh
    StitchMatShape_113165_Node: THREE.Mesh
    StitchMatShape_113259_Node: THREE.Mesh
    StitchMatShape_113417_Node: THREE.Mesh
    ['SWEATWR-FRENTE']: THREE.Mesh
    ['SWEATWR-FRENTE_1']: THREE.Mesh
    ['SWEATWR-FRENTE_2']: THREE.Mesh
    ['SWEATWR-COSTA']: THREE.Mesh
    ['SWEATWR-COSTA_1']: THREE.Mesh
    ['SWEATWR-COSTA_2']: THREE.Mesh
    ['SWEATWR-MANGA']: THREE.Mesh
    ['SWEATWR-MANGA_1']: THREE.Mesh
    ['SWEATWR-MANGA_2']: THREE.Mesh
    ['SWEATWR-PUNHO']: THREE.Mesh
    ['SWEATWR-PUNHO_1']: THREE.Mesh
    ['SWEATWR-PUNHO_2']: THREE.Mesh
    ['SWEATWR-CINTO']: THREE.Mesh
    ['SWEATWR-CINTO_1']: THREE.Mesh
    ['SWEATWR-CINTO_2']: THREE.Mesh
    ['SWEATWR-MANGA_1_1']: THREE.Mesh
    ['SWEATWR-MANGA_1_2']: THREE.Mesh
    ['SWEATWR-MANGA_1_3']: THREE.Mesh
    ['SWEATWR-PUNHO_1_1']: THREE.Mesh
    ['SWEATWR-PUNHO_1_2']: THREE.Mesh
    ['SWEATWR-PUNHO_1_3']: THREE.Mesh
    ['SWEATWR-MEIALUA']: THREE.Mesh
    ['SWEATWR-MEIALUA_1']: THREE.Mesh
    ['SWEATWR-MEIALUA_2']: THREE.Mesh
    ['SWEATWR-GOLA_2']: THREE.Mesh
    ['SWEATWR-GOLA_2_1']: THREE.Mesh
    ['SWEATWR-GOLA_2_2']: THREE.Mesh
    Pattern_51588_Node: THREE.Mesh
  }
  materials: {
    Material2948: THREE.MeshStandardMaterial
    Material3224: THREE.MeshStandardMaterial
    Material3500: THREE.MeshStandardMaterial
    Material25312: THREE.MeshStandardMaterial
    Knit_Fleece_Terry_FRONT_25193: THREE.MeshStandardMaterial
    Rib_1X1_486gsm_FRONT_2628: THREE.MeshStandardMaterial
    Knit_Fleece_Terry_BACK_25193: THREE.MeshStandardMaterial
    ['seam cover_FRONT_40709']: THREE.MeshStandardMaterial
    ['seam cover_BACK_40709']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function SWEATManModel(props: JSX.IntrinsicElements["group"]) {
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
    "/models/SWEATWR_man/SWEATWR_transform.glb"
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
          `/models/SWEATWR_man/tags/Man/${tagName}/${tagName}.glb`
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
      } else return '';
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

  materials.Knit_Fleece_Terry_FRONT_25193.side = THREE.DoubleSide;
  materials.Rib_1X1_486gsm_FRONT_2628.side = THREE.DoubleSide;

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.StitchMatShape_111634_Node.geometry} material={materials.Material2948} />
      <mesh geometry={nodes.StitchMatShape_111795_Node.geometry} material={materials.Material2948} />
      <mesh geometry={nodes.StitchMatShape_111956_Node.geometry} material={materials.Material2948} />
      <mesh geometry={nodes.StitchMatShape_112115_Node.geometry} material={materials.Material3224} />
      <mesh geometry={nodes.StitchMatShape_112284_Node.geometry} material={materials.Material2948} />
      <mesh geometry={nodes.StitchMatShape_112453_Node.geometry} material={materials.Material2948} />
      <mesh geometry={nodes.StitchMatShape_112659_Node.geometry} material={materials.Material3500} />
      <mesh geometry={nodes.StitchMatShape_112753_Node.geometry} material={materials.Material25312} />
      <mesh geometry={nodes.StitchMatShape_113165_Node.geometry} material={materials.Material25312} />
      <mesh geometry={nodes.StitchMatShape_113259_Node.geometry} material={materials.Material25312} />
      <mesh geometry={nodes.StitchMatShape_113417_Node.geometry} material={materials.Material25312} />
      <mesh geometry={nodes['SWEATWR-FRENTE'].geometry} material={materials.Knit_Fleece_Terry_FRONT_25193}>
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
      <mesh geometry={nodes['SWEATWR-FRENTE_1'].geometry} material={materials.Knit_Fleece_Terry_BACK_25193} />
      <mesh geometry={nodes['SWEATWR-FRENTE_2'].geometry} material={materials.Knit_Fleece_Terry_FRONT_25193} />
      <mesh geometry={nodes['SWEATWR-COSTA'].geometry} material={materials.Knit_Fleece_Terry_FRONT_25193} />
      <mesh geometry={nodes['SWEATWR-COSTA_1'].geometry} material={materials.Knit_Fleece_Terry_BACK_25193} />
      <mesh geometry={nodes['SWEATWR-COSTA_2'].geometry} material={materials.Knit_Fleece_Terry_FRONT_25193} />
      <mesh geometry={nodes['SWEATWR-MANGA'].geometry} material={materials.Knit_Fleece_Terry_FRONT_25193} />
      <mesh geometry={nodes['SWEATWR-MANGA_1'].geometry} material={materials.Knit_Fleece_Terry_BACK_25193} />
      <mesh geometry={nodes['SWEATWR-MANGA_2'].geometry} material={materials.Knit_Fleece_Terry_FRONT_25193} />
      <mesh geometry={nodes['SWEATWR-PUNHO'].geometry} material={materials.Rib_1X1_486gsm_FRONT_2628} />
      <mesh geometry={nodes['SWEATWR-PUNHO_1'].geometry} material={materials.Rib_1X1_486gsm_FRONT_2628} />
      <mesh geometry={nodes['SWEATWR-PUNHO_2'].geometry} material={materials.Rib_1X1_486gsm_FRONT_2628} />
      <mesh geometry={nodes['SWEATWR-CINTO'].geometry} material={materials.Rib_1X1_486gsm_FRONT_2628} />
      <mesh geometry={nodes['SWEATWR-CINTO_1'].geometry} material={materials.Rib_1X1_486gsm_FRONT_2628} />
      <mesh geometry={nodes['SWEATWR-CINTO_2'].geometry} material={materials.Rib_1X1_486gsm_FRONT_2628} />
      <mesh geometry={nodes['SWEATWR-MANGA_1_1'].geometry} material={materials.Knit_Fleece_Terry_FRONT_25193} />
      <mesh geometry={nodes['SWEATWR-MANGA_1_2'].geometry} material={materials.Knit_Fleece_Terry_BACK_25193} />
      <mesh geometry={nodes['SWEATWR-PUNHO_1_1'].geometry} material={materials.Rib_1X1_486gsm_FRONT_2628} />
      <mesh geometry={nodes['SWEATWR-PUNHO_1_2'].geometry} material={materials.Rib_1X1_486gsm_FRONT_2628} />
      <mesh geometry={nodes['SWEATWR-MEIALUA'].geometry} material={materials.Knit_Fleece_Terry_FRONT_25193} />
      <mesh geometry={nodes['SWEATWR-MEIALUA_1'].geometry} material={materials.Knit_Fleece_Terry_BACK_25193} />
      <mesh geometry={nodes['SWEATWR-MEIALUA_2'].geometry} material={materials.Knit_Fleece_Terry_FRONT_25193} />
      <mesh geometry={nodes['SWEATWR-GOLA_2'].geometry} material={materials.Rib_1X1_486gsm_FRONT_2628} />
      <mesh geometry={nodes['SWEATWR-GOLA_2_1'].geometry} material={materials.Rib_1X1_486gsm_FRONT_2628} />
      <mesh geometry={nodes['SWEATWR-GOLA_2_2'].geometry} material={materials.Rib_1X1_486gsm_FRONT_2628} />
      <mesh geometry={nodes.Pattern_51588_Node.geometry} material={materials['seam cover_FRONT_40709']}>
        {customize.tag.edit ? tag() : ""}
      </mesh>
    </group>
  );
}

// useGLTF.preload
("/models/SWEATWR_man/GU22SWEATWR_man.gltf");
useGLTF.preload("/models/SWEATWR_man/tags/Man/label-45x45_black/label-45x45_black.glb")
useGLTF.preload("/models/SWEATWR_man/tags/Man/label-45x45_white/label-45x45_white.glb")
useGLTF.preload("/models/SWEATWR_man/tags/Man/label-55x30_black/label-55x30_black.glb")
useGLTF.preload("/models/SWEATWR_man/tags/Man/label-55x30_white/label-55x30_white.glb")
useGLTF.preload("/models/SWEATWR_man/tags/Man/print-label_black/print-label_black.glb")
useGLTF.preload("/models/SWEATWR_man/tags/Man/print-label_white/print-label_white.glb")