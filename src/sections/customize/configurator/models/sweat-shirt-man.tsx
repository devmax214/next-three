import * as THREE from "three";
import React, { useCallback, useEffect, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomizeContext } from "@/components/customize/context";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    StitchMatShape_39172_Node: THREE.Mesh
    StitchMatShape_39333_Node: THREE.Mesh
    StitchMatShape_39494_Node: THREE.Mesh
    StitchMatShape_39653_Node: THREE.Mesh
    StitchMatShape_39822_Node: THREE.Mesh
    StitchMatShape_39991_Node: THREE.Mesh
    StitchMatShape_40197_Node: THREE.Mesh
    ['SWEATWR-CINTO001']: THREE.Mesh
    ['SWEATWR-CINTO001_1']: THREE.Mesh
    ['SWEATWR-CINTO001_2']: THREE.Mesh
    ['SWEATWR-COSTA001']: THREE.Mesh
    ['SWEATWR-COSTA001_1']: THREE.Mesh
    ['SWEATWR-COSTA001_2']: THREE.Mesh
    ['SWEATWR-FRENTE001']: THREE.Mesh
    ['SWEATWR-FRENTE001_1']: THREE.Mesh
    ['SWEATWR-FRENTE001_2']: THREE.Mesh
    ['SWEATWR-GOLA_2001']: THREE.Mesh
    ['SWEATWR-GOLA_2001_1']: THREE.Mesh
    ['SWEATWR-GOLA_2001_2']: THREE.Mesh
    ['SWEATWR-MANGA_1001']: THREE.Mesh
    ['SWEATWR-MANGA_1001_1']: THREE.Mesh
    ['SWEATWR-MANGA_1001_2']: THREE.Mesh
    ['SWEATWR-MANGA001']: THREE.Mesh
    ['SWEATWR-MANGA001_1']: THREE.Mesh
    ['SWEATWR-MANGA001_2']: THREE.Mesh
    ['SWEATWR-MEIALUA']: THREE.Mesh
    ['SWEATWR-MEIALUA_1']: THREE.Mesh
    ['SWEATWR-MEIALUA_2']: THREE.Mesh
    ['SWEATWR-PUNHO_1001']: THREE.Mesh
    ['SWEATWR-PUNHO_1001_1']: THREE.Mesh
    ['SWEATWR-PUNHO_1001_2']: THREE.Mesh
    ['SWEATWR-PUNHO001']: THREE.Mesh
    ['SWEATWR-PUNHO001_1']: THREE.Mesh
    ['SWEATWR-PUNHO001_2']: THREE.Mesh
  }
  materials: {
    ['Material2816.002']: THREE.MeshStandardMaterial
    ['Material2994.002']: THREE.MeshStandardMaterial
    Material3172: THREE.MeshStandardMaterial
    ['Rib_1X1_486gsm_FRONT_2548.001']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2530.002']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2530.003']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function SWEATManModel(props: any) {
  const customize = useCustomizeContext();
  const [tagName, setTagName] = useState("");
  const { embelIndex } = props;

  let loader = new THREE.TextureLoader();
  loader.setCrossOrigin("");
  const [texture, setTexture] = useState(new THREE.Texture()) as any;
  const [tagTexture, setTagTexture] = useState(new THREE.Texture()) as any;

  useEffect(() => {
    if (customize.tag.file)
      setTagTexture(loader.load(URL.createObjectURL(customize.tag.file)));
  }, [customize.tag.file])

  useEffect(() => {
    if (customize.embellishment[embelIndex].file)
      setTexture(loader.load(URL.createObjectURL(customize.embellishment[embelIndex].file)));
  }, [customize.embellishment[embelIndex].file]);

  useEffect(() => {
    var textCanvas = document.createElement("canvas");
    textCanvas.width = 200;
    textCanvas.height = 100;
    var ctx = textCanvas.getContext("2d");
    if (ctx !== null) {
      ctx.fillStyle = "black";
      ctx.font = `30px ${customize.embellishment[embelIndex].font}`;
      ctx.fillText(customize.embellishment[embelIndex].textureText, 10, 50);
      const myTexture = new THREE.CanvasTexture(textCanvas);
      setTexture(myTexture)
    }
  }, [customize.embellishment[embelIndex].textureText, customize.embellishment[embelIndex].font])

  useEffect(() => {
    setTexture(new THREE.Texture())
  }, [customize.embellishment[embelIndex].type]);

  const { nodes, materials } = useGLTF(
    "/models/SWEATWR_man/SWEATSHIRT_MAN.glb"
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
          `/models/SWEATWR_man/tags/Man/${tagName}/${tagName}.gltf`
        ) as any;

        const material: any = materials[Object.keys(materials)[0]];
        let keys: string[] = Object.keys(nodes);
        keys = keys.filter((key) => (nodes[key].isMesh));

        const positionY = customize.tag.size.startsWith("45x45") ? 1.602 : customize.tag.size.startsWith("55") ? 1.611 : 1.615;
        const scaleYZ = customize.tag.size.startsWith("45x45") ? 0.02 : customize.tag.size.startsWith("55") ? 0.015 : 0.025;

        return (
          <group dispose={null} position={[0, 0, 0.001]}>
            {keys.map((key: string, idx: number) => (
              idx === 0 ? (
                <mesh name={`pattern_tag_${idx}`} geometry={nodes[key].geometry} material={material} key={key} position={[0, 0, tagName.startsWith("print") ? 0.002 : 0]}>
                  <Decal
                    position={[0, positionY, -0.085]}
                    rotation={[0, 0, 0]}
                    scale={[0.03, scaleYZ, scaleYZ]}
                    map={tagTexture}
                    // debug={true}
                    depthTest={true}

                  />
                </mesh>
              ) : (
                <mesh name={`pattern_tag_${idx}`} geometry={nodes[key].geometry} material={material} key={key} />
              )))}
          </group>
        )
      } else return '';
    } catch (err) {
      console.log(err)
    }
  }, [tagName, tagTexture])

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
      <mesh geometry={nodes.StitchMatShape_39172_Node.geometry} material={materials['Material2816.002']} />
      <mesh geometry={nodes.StitchMatShape_39333_Node.geometry} material={materials['Material2816.002']} />
      <mesh geometry={nodes.StitchMatShape_39494_Node.geometry} material={materials['Material2816.002']} />
      <mesh geometry={nodes.StitchMatShape_39653_Node.geometry} material={materials['Material2994.002']} />
      <mesh geometry={nodes.StitchMatShape_39822_Node.geometry} material={materials['Material2816.002']} />
      <mesh geometry={nodes.StitchMatShape_39991_Node.geometry} material={materials['Material2816.002']} />
      <mesh geometry={nodes.StitchMatShape_40197_Node.geometry} material={materials.Material3172} />
      <mesh geometry={nodes['SWEATWR-CINTO001'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']} />
      <mesh geometry={nodes['SWEATWR-CINTO001_1'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']} />
      <mesh geometry={nodes['SWEATWR-CINTO001_2'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']} />
      <mesh geometry={nodes['SWEATWR-COSTA001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-COSTA001_1'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-COSTA001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-FRENTE001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']}>
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
      <mesh geometry={nodes['SWEATWR-FRENTE001_1'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-FRENTE001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-GOLA_2001'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']}>
        {customize.tag.edit ? tag() : ""}
      </mesh>
      <mesh geometry={nodes['SWEATWR-GOLA_2001_1'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']} />
      <mesh geometry={nodes['SWEATWR-GOLA_2001_2'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']} />
      <mesh geometry={nodes['SWEATWR-MANGA_1001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-MANGA_1001_1'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-MANGA_1001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-MANGA001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-MANGA001_1'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-MANGA001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-MEIALUA'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.003']} />
      <mesh geometry={nodes['SWEATWR-MEIALUA_1'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.003']} />
      <mesh geometry={nodes['SWEATWR-MEIALUA_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.003']} />
      <mesh geometry={nodes['SWEATWR-PUNHO_1001'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']} />
      <mesh geometry={nodes['SWEATWR-PUNHO_1001_1'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']} />
      <mesh geometry={nodes['SWEATWR-PUNHO_1001_2'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']} />
      <mesh geometry={nodes['SWEATWR-PUNHO001'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']} />
      <mesh geometry={nodes['SWEATWR-PUNHO001_1'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']} />
      <mesh geometry={nodes['SWEATWR-PUNHO001_2'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']} />
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