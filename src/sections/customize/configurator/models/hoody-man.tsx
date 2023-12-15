/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.13 GU22HOODIEWR_man_cord01_color_cru_end_silicone.gltf --transform --types
Files: GU22HOODIEWR_man_cord01_color_cru_end_silicone.gltf [214.63KB] > GU22HOODIEWR_man_cord01_color_cru_end_silicone-transformed.glb [10.18MB] (-4643%)
*/

import * as THREE from "three";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomizeContext } from "@/components/customize/context";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    StitchMatShape_18533_Node: THREE.Mesh
    StitchMatShape_18643_Node: THREE.Mesh
    StitchMatShape_18792_Node: THREE.Mesh
    StitchMatShape_18904_Node: THREE.Mesh
    StitchMatShape_19011_Node: THREE.Mesh
    StitchMatShape_19136_Node: THREE.Mesh
    StitchMatShape_19297_Node: THREE.Mesh
    StitchMatShape_19398_Node: THREE.Mesh
    StitchMatShape_19431_Node: THREE.Mesh
    StitchMatShape_19464_Node: THREE.Mesh
    StitchMatShape_19555_Node: THREE.Mesh
    StitchMatShape_19646_Node: THREE.Mesh
    StitchMatShape_19732_Node: THREE.Mesh
    StitchMatShape_19818_Node: THREE.Mesh
    StitchMatShape_19978_Node: THREE.Mesh
    StitchMatShape_20397_Node: THREE.Mesh
    StitchMatShape_20474_Node: THREE.Mesh
    StitchMatShape_20546_Node: THREE.Mesh
    StitchMatShape_20635_Node: THREE.Mesh
    StitchMatShape_20724_Node: THREE.Mesh
    ['HOODIE-BOLSO001']: THREE.Mesh
    ['HOODIE-BOLSO001_1']: THREE.Mesh
    ['HOODIE-BOLSO001_2']: THREE.Mesh
    ['HOODIE-CA_1001']: THREE.Mesh
    ['HOODIE-CA_1001_1']: THREE.Mesh
    ['HOODIE-CA_1001_2']: THREE.Mesh
    ['HOODIE-CINTO001']: THREE.Mesh
    ['HOODIE-CINTO001_1']: THREE.Mesh
    ['HOODIE-CINTO001_2']: THREE.Mesh
    ['HOODIE-COSTA001']: THREE.Mesh
    ['HOODIE-COSTA001_1']: THREE.Mesh
    ['HOODIE-COSTA001_2']: THREE.Mesh
    ['HOODIE-FRENTE001']: THREE.Mesh
    ['HOODIE-FRENTE001_1']: THREE.Mesh
    ['HOODIE-FRENTE001_2']: THREE.Mesh
    ['HOODIE-MANGA_4001']: THREE.Mesh
    ['HOODIE-MANGA_4001_1']: THREE.Mesh
    ['HOODIE-MANGA_4001_2']: THREE.Mesh
    ['HOODIE-MANGA_5001']: THREE.Mesh
    ['HOODIE-MANGA_5001_1']: THREE.Mesh
    ['HOODIE-MANGA_5001_2']: THREE.Mesh
    ['HOODIE-MEIALUA001']: THREE.Mesh
    ['HOODIE-MEIALUA001_1']: THREE.Mesh
    ['HOODIE-MEIALUA001_2']: THREE.Mesh
    ['HOODIE-PUNHO_1001']: THREE.Mesh
    ['HOODIE-PUNHO_1001_1']: THREE.Mesh
    ['HOODIE-PUNHO_1001_2']: THREE.Mesh
    ['HOODIE-PUNHO_2001']: THREE.Mesh
    ['HOODIE-PUNHO_2001_1']: THREE.Mesh
    ['HOODIE-PUNHO_2001_2']: THREE.Mesh
    Pattern_51588001: THREE.Mesh
    Pattern_51588001_1: THREE.Mesh
    Pattern_51588001_2: THREE.Mesh
  }
  materials: {
    ['Material3319.003']: THREE.MeshStandardMaterial
    ['Material3555.003']: THREE.MeshStandardMaterial
    ['Material3791.003']: THREE.MeshStandardMaterial
    ['Material3083.003']: THREE.MeshStandardMaterial
    ['Material4029.001']: THREE.MeshStandardMaterial
    ['Material4263.001']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.027']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.033']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry hood_FRONT_2709.003']: THREE.MeshStandardMaterial
    ['Rib_1X1_486gsm_FRONT_2635.007']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.026']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.030']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.025']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.027']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.029']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.039']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.030']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.042']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.028']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.036']: THREE.MeshStandardMaterial
    ['Rib_1X1_486gsm_FRONT_2635.010']: THREE.MeshStandardMaterial
    ['Rib_1X1_486gsm_FRONT_2635.013']: THREE.MeshStandardMaterial
    ['seam cover_FRONT_2731.002']: THREE.MeshStandardMaterial
    ['seam cover_BACK_2731.002']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function Model(props: any) {
  const customize = useCustomizeContext();
  const [tagName, setTagName] = useState("");
  const [cords, setCords] = useState("");
  const { embelIndex } = props;

  const [embelIndexArr, setEmbelIndexArr] = useState<number[]>([]);

  const modelRef = useRef<any>();
  const [zoomFactor, setZoomFactor] = useState<number>(1);

  let loader = new THREE.TextureLoader();
  loader.setCrossOrigin("");
  const [texture, setTexture] = useState({
    0: new THREE.Texture(),
    1: new THREE.Texture(),
    2: new THREE.Texture(),
    3: new THREE.Texture(),
    4: new THREE.Texture(),
  }) as any;
  const [tagTexture, setTagTexture] = useState(new THREE.Texture()) as any;

  useEffect(() => {
    if (embelIndexArr.length > 0) {
      let isSameIndex = false;
      embelIndexArr.forEach(index => {
        if (index == embelIndex) {
          isSameIndex = true;
        }
      })
      if (!isSameIndex) setEmbelIndexArr([...embelIndexArr, embelIndex]);
    } else {
      setEmbelIndexArr([...embelIndexArr, embelIndex]);
    }
  }, [embelIndex])

  useEffect(() => {
    if (customize.tag.file) {
      loader.loadAsync(URL.createObjectURL(customize.tag.file)).then((result) => {
        setTagTexture(result);
      });
    }
  }, [customize.tag.file])


  const setTextTexture = (factor = 1, dataIndex = embelIndex) => {
    var textCanvas = document.createElement("canvas");
    textCanvas.width = 200 * factor;
    textCanvas.height = 200 * factor;
    var ctx = textCanvas.getContext("2d");
    var fontSize = dataIndex == 3 || dataIndex == 2 ? '15' : '30';
    if (ctx !== null && customize.embellishment[dataIndex].font) {
      ctx.scale(factor, factor);
      ctx.fillStyle = "black";
      ctx.font = `${fontSize}px ${customize.embellishment[dataIndex].font}`;
      switch (customize.embellishment[dataIndex].position.type) {
        case 0:
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillText(customize.embellishment[dataIndex].textureText, 0, 100);
          break;
        case 1:
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(customize.embellishment[dataIndex].textureText, 100, 100);
          break;
        case 2:
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';
          ctx.fillText(customize.embellishment[dataIndex].textureText, 200, 100);
          break;
        case 3:
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(customize.embellishment[dataIndex].textureText, 100, 20);
          break;
        case 4:
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(customize.embellishment[dataIndex].textureText, 100, 100);
          break;
        case 5:
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(customize.embellishment[dataIndex].textureText, 100, 200);
          break;
      }

      const myTexture = new THREE.CanvasTexture(textCanvas);
      setTexture({ ...texture, [dataIndex]: myTexture });
    }
  }

  useEffect(() => {
    if (customize.embellishment[embelIndex].type === 'image') {
      if (customize.embellishment[embelIndex].file)
        setTexture({ ...texture, [embelIndex]: loader.load(URL.createObjectURL(customize.embellishment[embelIndex].file)) });
    } else if (customize.embellishment[embelIndex].type === 'text') {
      setTextTexture();
    }
  }, [customize.embellishment[embelIndex].position, customize.embellishment[embelIndex].type, customize.embellishment[embelIndex].file, customize.embellishment[embelIndex].textureText, customize.embellishment[embelIndex].font]);

  const { nodes, materials } = useGLTF(
    "/models/Hoody/HOODIE_MAN.glb"
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
          `/models/Hoody/tags/Man/${tagName}/${tagName}.glb`
        ) as any;

        const material: any = materials[Object.keys(materials)[0]];
        let keys: string[] = Object.keys(nodes);
        keys = keys.filter((key) => (nodes[key].isMesh));
        const positionY = customize.tag.size.startsWith("45x45") ? 1.595 : customize.tag.size.startsWith("55") ? 1.603 : 1.615;
        const scaleYZ = customize.tag.size.startsWith("45x45") ? 0.02 : customize.tag.size.startsWith("55") ? 0.016 : 0.025;
        const scaleX = !tagTexture.source.data ? 0 : scaleYZ * tagTexture.source.data.naturalWidth / tagTexture.source.data.naturalHeight;

        return (
          <group dispose={null}>
            {keys.map((key: string, idx: number) => (
              idx === 0 ? (
                <mesh name={`pattern_tag_${idx}`} geometry={nodes[key].geometry} material={material} key={key}>
                  <Decal
                    position={[-0.002, positionY, -0.09]}
                    rotation={[0, 0, 0]}
                    scale={[scaleX, scaleYZ, scaleYZ]}
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
      } else {
        return ''
      }
    } catch (err) {
      console.log(err)
    }
  }, [tagName, tagTexture])

  const cord = useCallback(() => {
    try {
      if (!!cords) {
        const { nodes, materials } = useGLTF(
          `/models/Hoody/cords/Man/${cords}/${cords}.gltf`
        ) as any;

        const keys: string[] = Object.keys(nodes);
        const material: any = materials[Object.keys(materials)[0]];

        return (
          <group {...props} dispose={null}>
            {keys.map((key: string, idx: number) => (
              <mesh name={`cords_${idx}`} geometry={nodes[key].geometry} material={material} key={key} />
            ))}
          </group>
        )
      } else return ''
    } catch (err) {
      console.log(err);
    }
  }, [cords]);

  const cordTipItem = useCallback(() => {
    try {
      if (!!customize.cord && !!customize.cordTip) {
        const { nodes, materials } = useGLTF(
          `/models/Hoody/cords/Man/${customize.cord}/${customize.cordTip}/${customize.cordTip}.gltf`
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
      } else return ''
    } catch (err) {
      console.log(err);
    }
  }, [customize.cordTip]);

  useEffect(() => {
    if (customize.tag.neck)
      setTagName(`label-${customize.tag.size}_${customize.tag.color ? "black" : "white"}`);
    else
      setTagName(`print-label_${customize.tag.color ? "black" : "white"}`);
  }, [customize.tag])

  useEffect(() => {
    setCords(customize.cord);
  }, [customize.cord])

  useEffect(() => {
    if (embelIndexArr.length > 0) {
      embelIndexArr.forEach(index => {
        setTextTexture(zoomFactor, index);
      })
    }
    
  }, [zoomFactor])

  useFrame(state => {
    if (customize.tag.visible || customize.cordVisible || customize.embellishment[embelIndex].visible) {
      state.camera.position.set(0, 0, 2.5);
    } else {
      const distance = state.camera.position.distanceTo(modelRef.current.position);
      const newZoomFactor = 2.5 / distance;
      if (newZoomFactor !== zoomFactor) {
        setZoomFactor(newZoomFactor);
      }
    }
  })

  return (
    <group position={[0, 0, 0]} {...props} dispose={null}>
      <mesh geometry={nodes.StitchMatShape_18533_Node.geometry} material={materials['Material3319.003']}>
        {customize.tag.edit ? tag() : ""}
      </mesh>
      <mesh geometry={nodes.StitchMatShape_18643_Node.geometry} material={materials['Material3319.003']} />
      <mesh geometry={nodes.StitchMatShape_18792_Node.geometry} material={materials['Material3319.003']} />
      <mesh geometry={nodes.StitchMatShape_18904_Node.geometry} material={materials['Material3319.003']} />
      <mesh geometry={nodes.StitchMatShape_19011_Node.geometry} material={materials['Material3319.003']} />
      <mesh geometry={nodes.StitchMatShape_19136_Node.geometry} material={materials['Material3555.003']} />
      <mesh geometry={nodes.StitchMatShape_19297_Node.geometry} material={materials['Material3791.003']} />
      <mesh geometry={nodes.StitchMatShape_19398_Node.geometry} material={materials['Material3083.003']} />
      <mesh geometry={nodes.StitchMatShape_19431_Node.geometry} material={materials['Material3083.003']} />
      <mesh geometry={nodes.StitchMatShape_19464_Node.geometry} material={materials['Material3083.003']} />
      <mesh geometry={nodes.StitchMatShape_19555_Node.geometry} material={materials['Material3791.003']} />
      <mesh geometry={nodes.StitchMatShape_19646_Node.geometry} material={materials['Material3791.003']} />
      <mesh geometry={nodes.StitchMatShape_19732_Node.geometry} material={materials['Material3791.003']} />
      <mesh geometry={nodes.StitchMatShape_19818_Node.geometry} material={materials['Material3791.003']} />
      <mesh geometry={nodes.StitchMatShape_19978_Node.geometry} material={materials['Material4029.001']} />
      <mesh geometry={nodes.StitchMatShape_20397_Node.geometry} material={materials['Material4029.001']} />
      <mesh geometry={nodes.StitchMatShape_20474_Node.geometry} material={materials['Material4263.001']} />
      <mesh geometry={nodes.StitchMatShape_20546_Node.geometry} material={materials['Material4263.001']} />
      <mesh geometry={nodes.StitchMatShape_20635_Node.geometry} material={materials['Material4029.001']} />
      <mesh geometry={nodes.StitchMatShape_20724_Node.geometry} material={materials['Material4029.001']} />
      <mesh geometry={nodes['HOODIE-BOLSO001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.027']} />
      <mesh geometry={nodes['HOODIE-BOLSO001_1'].geometry} material={materials['Knit_Fleece_Terry_BACK_2603.033']} />
      <mesh geometry={nodes['HOODIE-BOLSO001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.027']} />
      <mesh geometry={nodes['HOODIE-CA_1001'].geometry} material={materials['Knit_Fleece_Terry hood_FRONT_2709.003']}>
        {cord()}
        {cordTipItem()}
      </mesh>
      <mesh geometry={nodes['HOODIE-CA_1001_1'].geometry} material={materials['Knit_Fleece_Terry hood_FRONT_2709.003']} />
      <mesh geometry={nodes['HOODIE-CA_1001_2'].geometry} material={materials['Knit_Fleece_Terry hood_FRONT_2709.003']} />
      <mesh geometry={nodes['HOODIE-CINTO001'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2635.007']} />
      <mesh geometry={nodes['HOODIE-CINTO001_1'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2635.007']} />
      <mesh geometry={nodes['HOODIE-CINTO001_2'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2635.007']} />
      <mesh geometry={nodes['HOODIE-COSTA001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.026']} >
        <Decal
          position={[0, 1.28, -0.24]}
          rotation={[THREE.MathUtils.degToRad(5), THREE.MathUtils.degToRad(180), 0]}
          scale={[0.23, 0.31, 0.26]}
          map={texture[0]}
        />
      </mesh>
      <mesh geometry={nodes['HOODIE-COSTA001_1'].geometry} material={materials['Knit_Fleece_Terry_BACK_2603.030']} />
      <mesh geometry={nodes['HOODIE-COSTA001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.026']} />
      <mesh geometry={nodes['HOODIE-FRENTE001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.025']} ref={modelRef}>
        <Decal
          position={[0, 1.38, 0.2]}
          rotation={[0, 0, 0]}
          scale={[0.23, 0.31, 0.26]}
          map={texture[1]}
        />
      </mesh>
      <mesh geometry={nodes['HOODIE-FRENTE001_1'].geometry} material={materials['Knit_Fleece_Terry_BACK_2603.027']} />
      <mesh geometry={nodes['HOODIE-FRENTE001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.025']} />
      <mesh geometry={nodes['HOODIE-MANGA_4001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.029']} >
        <Decal
          position={[0.3, 1.15, -0.005]}
          rotation={[THREE.MathUtils.degToRad(-10), 0, 0]}
          scale={[0.05, 0.26, 0.066]}
          map={texture[2]}
        />
      </mesh>
      <mesh geometry={nodes['HOODIE-MANGA_4001_1'].geometry} material={materials['Knit_Fleece_Terry_BACK_2603.039']} />
      <mesh geometry={nodes['HOODIE-MANGA_4001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.029']} />
      <mesh geometry={nodes['HOODIE-MANGA_5001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.030']} >
        <Decal
          position={[-0.3, 1.15, -0.005]}
          rotation={[THREE.MathUtils.degToRad(-10), 0, 0]}
          scale={[0.05, 0.26, 0.066]}
          map={texture[3]}
        />
      </mesh>
      <mesh geometry={nodes['HOODIE-MANGA_5001_1'].geometry} material={materials['Knit_Fleece_Terry_BACK_2603.042']} />
      <mesh geometry={nodes['HOODIE-MANGA_5001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.030']} />
      <mesh geometry={nodes['HOODIE-MEIALUA001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.028']} />
      <mesh geometry={nodes['HOODIE-MEIALUA001_1'].geometry} material={materials['Knit_Fleece_Terry_BACK_2603.036']} />
      <mesh geometry={nodes['HOODIE-MEIALUA001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.028']} />
      <mesh geometry={nodes['HOODIE-PUNHO_1001'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2635.010']} />
      <mesh geometry={nodes['HOODIE-PUNHO_1001_1'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2635.010']} />
      <mesh geometry={nodes['HOODIE-PUNHO_1001_2'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2635.010']} />
      <mesh geometry={nodes['HOODIE-PUNHO_2001'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2635.013']} />
      <mesh geometry={nodes['HOODIE-PUNHO_2001_1'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2635.013']} />
      <mesh geometry={nodes['HOODIE-PUNHO_2001_2'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2635.013']} />
      <mesh geometry={nodes.Pattern_51588001.geometry} material={materials['seam cover_FRONT_2731.002']} />
      <mesh geometry={nodes.Pattern_51588001_1.geometry} material={materials['seam cover_BACK_2731.002']} />
      <mesh geometry={nodes.Pattern_51588001_2.geometry} material={materials['seam cover_FRONT_2731.002']} />
    </group>
  );
}

useGLTF.preload(
  "/models/Hoody/HOODIE_MAN.glb"
);

useGLTF.preload("/models/Hoody/tags/Man/label-45x45_black/label-45x45_black.glb")
useGLTF.preload("/models/Hoody/tags/Man/label-45x45_white/label-45x45_white.glb")
useGLTF.preload("/models/Hoody/tags/Man/label-55x30_black/label-55x30_black.glb")
useGLTF.preload("/models/Hoody/tags/Man/label-55x30_white/label-55x30_white.glb")
useGLTF.preload("/models/Hoody/cords/Man/Cord1/Cord1.gltf")
useGLTF.preload("/models/Hoody/cords/Man/Cord2/Cord2.gltf")
useGLTF.preload("/models/Hoody/cords/Man/Cord3/Cord3.gltf")
useGLTF.preload("/models/Hoody/cords/Man/Cord4/Cord4.gltf")

useGLTF.preload("/models/Hoody/cords/Man/Cord1/mental_end/mental_end.gltf")
useGLTF.preload("/models/Hoody/cords/Man/Cord1/plastic_end/plastic_end.gltf")
useGLTF.preload("/models/Hoody/cords/Man/Cord1/silicone_end/silicone_end.gltf")

useGLTF.preload("/models/Hoody/cords/Man/Cord2/mental_end/mental_end.gltf")
useGLTF.preload("/models/Hoody/cords/Man/Cord2/plastic_end/plastic_end.gltf")
useGLTF.preload("/models/Hoody/cords/Man/Cord2/silicone_end/silicone_end.gltf")

useGLTF.preload("/models/Hoody/cords/Man/Cord3/mental_end/mental_end.gltf")
useGLTF.preload("/models/Hoody/cords/Man/Cord3/plastic_end/plastic_end.gltf")
useGLTF.preload("/models/Hoody/cords/Man/Cord3/silicone_end/silicone_end.gltf")

useGLTF.preload("/models/Hoody/cords/Man/Cord4/mental_end/mental_end.gltf")
useGLTF.preload("/models/Hoody/cords/Man/Cord4/plastic_end/plastic_end.gltf")
useGLTF.preload("/models/Hoody/cords/Man/Cord4/silicone_end/silicone_end.gltf")