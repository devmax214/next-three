import * as THREE from "three";
import React, { useCallback, useEffect, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomizeContext } from "@/components/customize/context";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    StitchMatShape_25119_Node: THREE.Mesh
    StitchMatShape_25332_Node: THREE.Mesh
    StitchMatShape_25545_Node: THREE.Mesh
    StitchMatShape_25758_Node: THREE.Mesh
    StitchMatShape_25971_Node: THREE.Mesh
    StitchMatShape_26154_Node: THREE.Mesh
    StitchMatShape_26367_Node: THREE.Mesh
    StitchMatShape_26580_Node: THREE.Mesh
    StitchMatShape_26793_Node: THREE.Mesh
    StitchMatShape_27006_Node: THREE.Mesh
    StitchMatShape_27082_Node: THREE.Mesh
    StitchMatShape_27153_Node: THREE.Mesh
    StitchMatShape_27238_Node: THREE.Mesh
    StitchMatShape_27307_Node: THREE.Mesh
    StitchMatShape_27392_Node: THREE.Mesh
    StitchMatShape_27485_Node: THREE.Mesh
    StitchMatShape_27493_Node: THREE.Mesh
    StitchMatShape_27501_Node: THREE.Mesh
    StitchMatShape_27555_Node: THREE.Mesh
    StitchMatShape_27625_Node: THREE.Mesh
    StitchMatShape_27684_Node: THREE.Mesh
    StitchMatShape_27759_Node: THREE.Mesh
    StitchMatShape_27842_Node: THREE.Mesh
    StitchMatShape_27850_Node: THREE.Mesh
    StitchMatShape_27858_Node: THREE.Mesh
    WRCALCA_BOLSO001: THREE.Mesh
    WRCALCA_BOLSO001_1: THREE.Mesh
    WRCALCA_BOLSO001_2: THREE.Mesh
    WRCALCABOLINF_1001: THREE.Mesh
    WRCALCABOLINF_1001_1: THREE.Mesh
    WRCALCABOLINF_1001_2: THREE.Mesh
    WRCALCABOLINF001: THREE.Mesh
    WRCALCABOLINF001_1: THREE.Mesh
    WRCALCABOLINF001_2: THREE.Mesh
    WRCALCABOLSUP_1001: THREE.Mesh
    WRCALCABOLSUP_1001_1: THREE.Mesh
    WRCALCABOLSUP_1001_2: THREE.Mesh
    WRCALCABOLSUP001: THREE.Mesh
    WRCALCABOLSUP001_1: THREE.Mesh
    WRCALCABOLSUP001_2: THREE.Mesh
    WRCALCACNTCOS001: THREE.Mesh
    WRCALCACNTCOS001_1: THREE.Mesh
    WRCALCACNTCOS001_2: THREE.Mesh
    WRCALCACNTFRE001: THREE.Mesh
    WRCALCACNTFRE001_1: THREE.Mesh
    WRCALCACNTFRE001_2: THREE.Mesh
    WRCALCACSDI_1001: THREE.Mesh
    WRCALCACSDI_1001_1: THREE.Mesh
    WRCALCACSDI_1001_2: THREE.Mesh
    WRCALCACSDI_2001: THREE.Mesh
    WRCALCACSDI_2001_1: THREE.Mesh
    WRCALCACSDI_2001_2: THREE.Mesh
    WRCALCACSDI_3001: THREE.Mesh
    WRCALCACSDI_3001_1: THREE.Mesh
    WRCALCACSDI_3001_2: THREE.Mesh
    WRCALCACSDI_4001: THREE.Mesh
    WRCALCACSDI_4001_1: THREE.Mesh
    WRCALCACSDI_4001_2: THREE.Mesh
    WRCALCAFRE_1001: THREE.Mesh
    WRCALCAFRE_1001_1: THREE.Mesh
    WRCALCAFRE_1001_2: THREE.Mesh
    WRCALCAFRE_2001: THREE.Mesh
    WRCALCAFRE_2001_1: THREE.Mesh
    WRCALCAFRE_2001_2: THREE.Mesh
    WRCALCAFRE_3001: THREE.Mesh
    WRCALCAFRE_3001_1: THREE.Mesh
    WRCALCAFRE_3001_2: THREE.Mesh
    WRCALCAFRE_4001: THREE.Mesh
    WRCALCAFRE_4001_1: THREE.Mesh
    WRCALCAFRE_4001_2: THREE.Mesh
  }
  materials: {
    Material3558: THREE.MeshStandardMaterial
    Material3004: THREE.MeshStandardMaterial
    Material3280: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2649.005']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2649.005']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2649.007']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2649.007']: THREE.MeshStandardMaterial
    Knit_Fleece_Terry_FRONT_2649: THREE.MeshStandardMaterial
    Knit_Fleece_Terry_BACK_2649: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2649.009']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2649.009']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2649.001']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2649.001']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2649.004']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2649.004']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2649.003']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2649.003']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2649.015']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2649.015']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.009']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2649.013']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2649.013']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.015']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.012']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2649.011']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2649.011']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.006']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2649.016']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2649.016']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function PANTManModel(props: any) {
  const customize = useCustomizeContext();
  const [tagName, setTagName] = useState("");
  const [cords, setCords] = useState("");
  const [tagTexture, setTagTexture] = useState(new THREE.Texture()) as any;
  const { embelIndex } = props;

  let loader = new THREE.TextureLoader();
  loader.setCrossOrigin("");

  useEffect(() => {
    if (customize.tag.file)
      setTagTexture(loader.load(URL.createObjectURL(customize.tag.file)));
  }, [customize.tag.file])

  const { nodes, materials } = useGLTF(
    "/models/PANTWR_man/PANTS_MAN.glb"
  ) as GLTFResult;

  if (customize.color.length > 0) {
    // const rgb = hexToRgba(customize.color)
    // const color = new THREE.Color(rgb.r, rgb.g, rgb.b);
    const color = customize.color;
    for (let key in materials) {
      materials[key] = new THREE.MeshStandardMaterial({ ...materials[key], color: color })
    }
  }

  const tag = useCallback(() => {
    try {
      if (!!tagName) {
        const { nodes, materials } = useGLTF(
          `/models/PANTWR_man/tags/Man/${tagName}/${tagName}.glb`
        ) as any;

        const material: any = materials[Object.keys(materials)[0]];
        let keys: string[] = Object.keys(nodes);
        keys = keys.filter((key) => (nodes[key].isMesh));
        const positionY = customize.tag.size.startsWith("45x45") ? 1.088 : customize.tag.size.startsWith("55") ? 1.094 : 1.615;
        const scaleYZ = customize.tag.size.startsWith("45x45") ? 0.023 : customize.tag.size.startsWith("55") ? 0.017 : 0.025;

        return (
          <group dispose={null}>
            {keys.map((key: string, idx: number) => (
              idx === 0 ? (
                <mesh name={`pattern_tag_${idx}`} geometry={nodes[key].geometry} material={material} key={key}>
                  <Decal
                    position={[-0.0025, positionY, -0.105]}
                    rotation={[0, 0, 0]}
                    scale={[0.034, scaleYZ, scaleYZ]}
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
      } else return ''
    } catch (err) {
      console.log(err)
    }
  }, [tagName, tagTexture])

  const cord = useCallback(() => {
    try {
      if (!!cords) {
        const { nodes, materials } = useGLTF(
          `/models/PANTWR_man/cords/Man/${cords}/${cords}.glb`
        ) as any;

        const keys: string[] = Object.keys(nodes);
        const material: any = materials[Object.keys(materials)[0]];

        return (
          <group {...props} dispose={null} position={[0, 0, -0.0025]}>
            {keys.map((key: string, idx: number) => (
              <mesh name={`cords_${idx}`} geometry={nodes[key].geometry} material={material} key={key} />
            ))}
          </group>
        )
      } else return '';
    } catch (err) {
      console.log(err);
    }
  }, [cords]);

  useEffect(() => {
    if (customize.tag.neck)
      setTagName(`label-${customize.tag.size}_${customize.tag.color ? "black" : "white"}`);
    else
      setTagName(`print-label_${customize.tag.color ? "black" : "white"}`);
  }, [customize.tag])

  useEffect(() => {
    setCords(customize.cord);
  }, [customize.cord])

  useFrame(state => {
    if (customize.tag.visible) {
      state.camera.position.set(0, 0, 2.5);
    }
  })

  return (
    <group position={[0, 0, 0]} {...props} dispose={null}>
      <mesh geometry={nodes.StitchMatShape_25119_Node.geometry} material={materials.Material3558}>
        {customize.tag.edit ? tag() : ""}
      </mesh>
      <mesh geometry={nodes.StitchMatShape_25332_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_25545_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_25758_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_25971_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_26154_Node.geometry} material={materials.Material3558} />
      <mesh geometry={nodes.StitchMatShape_26367_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_26580_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_26793_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_27006_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_27082_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_27153_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_27238_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_27307_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_27392_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_27485_Node.geometry} material={materials.Material3280} />
      <mesh geometry={nodes.StitchMatShape_27493_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_27501_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_27555_Node.geometry} material={materials.Material3558} />
      <mesh geometry={nodes.StitchMatShape_27625_Node.geometry} material={materials.Material3558} />
      <mesh geometry={nodes.StitchMatShape_27684_Node.geometry} material={materials.Material3558} />
      <mesh geometry={nodes.StitchMatShape_27759_Node.geometry} material={materials.Material3558} />
      <mesh geometry={nodes.StitchMatShape_27842_Node.geometry} material={materials.Material3280} />
      <mesh geometry={nodes.StitchMatShape_27850_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.StitchMatShape_27858_Node.geometry} material={materials.Material3004} />
      <mesh geometry={nodes.WRCALCA_BOLSO001.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.005']} />
      <mesh geometry={nodes.WRCALCA_BOLSO001_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2649.005']} />
      <mesh geometry={nodes.WRCALCA_BOLSO001_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.005']} />
      <mesh geometry={nodes.WRCALCABOLINF_1001.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.007']} />
      <mesh geometry={nodes.WRCALCABOLINF_1001_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2649.007']} />
      <mesh geometry={nodes.WRCALCABOLINF_1001_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.007']} />
      <mesh geometry={nodes.WRCALCABOLINF001.geometry} material={materials.Knit_Fleece_Terry_FRONT_2649} />
      <mesh geometry={nodes.WRCALCABOLINF001_1.geometry} material={materials.Knit_Fleece_Terry_BACK_2649} />
      <mesh geometry={nodes.WRCALCABOLINF001_2.geometry} material={materials.Knit_Fleece_Terry_FRONT_2649} />
      <mesh geometry={nodes.WRCALCABOLSUP_1001.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.009']} />
      <mesh geometry={nodes.WRCALCABOLSUP_1001_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2649.009']} />
      <mesh geometry={nodes.WRCALCABOLSUP_1001_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.009']} />
      <mesh geometry={nodes.WRCALCABOLSUP001.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.001']} />
      <mesh geometry={nodes.WRCALCABOLSUP001_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2649.001']} />
      <mesh geometry={nodes.WRCALCABOLSUP001_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.001']} />
      <mesh geometry={nodes.WRCALCACNTCOS001.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.004']} />
      <mesh geometry={nodes.WRCALCACNTCOS001_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2649.004']} />
      <mesh geometry={nodes.WRCALCACNTCOS001_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.004']} />
      <mesh geometry={nodes.WRCALCACNTFRE001.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.003']} />
      <mesh geometry={nodes.WRCALCACNTFRE001_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2649.003']}>
        {cord()}
      </mesh>
      <mesh geometry={nodes.WRCALCACNTFRE001_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.003']} />
      <mesh geometry={nodes.WRCALCACSDI_1001.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.015']} />
      <mesh geometry={nodes.WRCALCACSDI_1001_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2649.015']} />
      <mesh geometry={nodes.WRCALCACSDI_1001_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.015']} />
      <mesh geometry={nodes.WRCALCACSDI_2001.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.009']} />
      <mesh geometry={nodes.WRCALCACSDI_2001_1.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.009']} />
      <mesh geometry={nodes.WRCALCACSDI_2001_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.009']} />
      <mesh geometry={nodes.WRCALCACSDI_3001.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.013']} />
      <mesh geometry={nodes.WRCALCACSDI_3001_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2649.013']} />
      <mesh geometry={nodes.WRCALCACSDI_3001_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.013']} />
      <mesh geometry={nodes.WRCALCACSDI_4001.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.015']} />
      <mesh geometry={nodes.WRCALCACSDI_4001_1.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.015']} />
      <mesh geometry={nodes.WRCALCACSDI_4001_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.015']} />
      <mesh geometry={nodes.WRCALCAFRE_1001.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.012']} />
      <mesh geometry={nodes.WRCALCAFRE_1001_1.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.012']} />
      <mesh geometry={nodes.WRCALCAFRE_1001_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.012']} />
      <mesh geometry={nodes.WRCALCAFRE_2001.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.011']} />
      <mesh geometry={nodes.WRCALCAFRE_2001_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2649.011']} />
      <mesh geometry={nodes.WRCALCAFRE_2001_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.011']} />
      <mesh geometry={nodes.WRCALCAFRE_3001.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.006']} />
      <mesh geometry={nodes.WRCALCAFRE_3001_1.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.006']} />
      <mesh geometry={nodes.WRCALCAFRE_3001_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.006']} />
      <mesh geometry={nodes.WRCALCAFRE_4001.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.016']} />
      <mesh geometry={nodes.WRCALCAFRE_4001_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2649.016']} />
      <mesh geometry={nodes.WRCALCAFRE_4001_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2649.016']} />
    </group>
  )
}

// useGLTF.preload
("/models/PANTWR_man/GU22PANTSWR_man.gltf");
useGLTF.preload("/models/PANTWR_man/tags/Man/label-45x45_black/label-45x45_black.glb")
useGLTF.preload("/models/PANTWR_man/tags/Man/label-45x45_white/label-45x45_white.glb")
useGLTF.preload("/models/PANTWR_man/tags/Man/label-55x30_black/label-55x30_black.glb")
useGLTF.preload("/models/PANTWR_man/tags/Man/label-55x30_white/label-55x30_white.glb")
useGLTF.preload("/models/PANTWR_man/cords/Man/Cord1/Cord1.glb")
useGLTF.preload("/models/PANTWR_man/cords/Man/Cord2/Cord2.glb")
useGLTF.preload("/models/PANTWR_man/cords/Man/Cord3/Cord3.glb")
useGLTF.preload("/models/PANTWR_man/cords/Man/Cord4/Cord4.glb")