import * as THREE from "three";
import React, { useCallback, useEffect, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomizeContext } from "@/components/customize/context";
import { useFrame } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    StitchMatShape_21660_Node: THREE.Mesh
    StitchMatShape_21827_Node: THREE.Mesh
    StitchMatShape_21994_Node: THREE.Mesh
    StitchMatShape_22161_Node: THREE.Mesh
    StitchMatShape_22328_Node: THREE.Mesh
    StitchMatShape_22395_Node: THREE.Mesh
    StitchMatShape_22497_Node: THREE.Mesh
    StitchMatShape_22600_Node: THREE.Mesh
    StitchMatShape_22702_Node: THREE.Mesh
    StitchMatShape_22710_Node: THREE.Mesh
    StitchMatShape_22718_Node: THREE.Mesh
    StitchMatShape_22783_Node: THREE.Mesh
    StitchMatShape_22855_Node: THREE.Mesh
    StitchMatShape_22914_Node: THREE.Mesh
    StitchMatShape_22986_Node: THREE.Mesh
    StitchMatShape_23046_Node: THREE.Mesh
    StitchMatShape_23184_Node: THREE.Mesh
    StitchMatShape_23312_Node: THREE.Mesh
    StitchMatShape_23440_Node: THREE.Mesh
    StitchMatShape_23613_Node: THREE.Mesh
    StitchMatShape_23781_Node: THREE.Mesh
    StitchMatShape_23949_Node: THREE.Mesh
    StitchMatShape_24117_Node: THREE.Mesh
    StitchMatShape_24285_Node: THREE.Mesh
    StitchMatShape_24352_Node: THREE.Mesh
    StitchMatShape_24454_Node: THREE.Mesh
    StitchMatShape_24557_Node: THREE.Mesh
    StitchMatShape_24659_Node: THREE.Mesh
    StitchMatShape_24667_Node: THREE.Mesh
    StitchMatShape_24675_Node: THREE.Mesh
    StitchMatShape_24808_Node: THREE.Mesh
    StitchMatShape_24936_Node: THREE.Mesh
    StitchMatShape_25064_Node: THREE.Mesh
    WRCALCAOBOLCOS: THREE.Mesh
    WRCALCAOBOLCOS_1: THREE.Mesh
    WRCALCAOBOLCOS_2: THREE.Mesh
    WRCALCAOBOLINF: THREE.Mesh
    WRCALCAOBOLINF_1: THREE.Mesh
    WRCALCAOBOLINF_2: THREE.Mesh
    WRCALCAOBOLINFL: THREE.Mesh
    WRCALCAOBOLINFL_1: THREE.Mesh
    WRCALCAOBOLINFL_2: THREE.Mesh
    WRCALCAOBOLINFR: THREE.Mesh
    WRCALCAOBOLINFR_1: THREE.Mesh
    WRCALCAOBOLINFR_2: THREE.Mesh
    WRCALCAOBOLINFRR: THREE.Mesh
    WRCALCAOBOLINFRR_1: THREE.Mesh
    WRCALCAOBOLINFRR_2: THREE.Mesh
    WRCALCAOCNTCOS: THREE.Mesh
    WRCALCAOCNTCOS_1: THREE.Mesh
    WRCALCAOCNTCOS_2: THREE.Mesh
    WRCALCAOCNTFRE: THREE.Mesh
    WRCALCAOCNTFRE_1: THREE.Mesh
    WRCALCAOCNTFRE_2: THREE.Mesh
    WRCALCAOCOSDRT: THREE.Mesh
    WRCALCAOCOSDRT_1: THREE.Mesh
    WRCALCAOCOSDRT_2: THREE.Mesh
    WRCALCAOCOSDRTR: THREE.Mesh
    WRCALCAOCOSDRTR_1: THREE.Mesh
    WRCALCAOCOSDRTR_2: THREE.Mesh
    WRCALCAOFRE: THREE.Mesh
    WRCALCAOFRE_1: THREE.Mesh
    WRCALCAOFRE_2: THREE.Mesh
    WRCALCAOFRER: THREE.Mesh
    WRCALCAOFRER_1: THREE.Mesh
    WRCALCAOFRER_2: THREE.Mesh
  }
  materials: {
    ['Material3537.002']: THREE.MeshStandardMaterial
    ['Material2983.006']: THREE.MeshStandardMaterial
    ['Material3259.006']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.099']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.003']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.100']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.004']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.106']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.010']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.107']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.011']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.108']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.012']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.097']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.001']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.096']: THREE.MeshStandardMaterial
    Knit_Fleece_Terry_BACK_2603: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.102']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.006']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.105']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.009']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.098']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.002']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_FRONT_2603.104']: THREE.MeshStandardMaterial
    ['Knit_Fleece_Terry_BACK_2603.008']: THREE.MeshStandardMaterial
  }
}

type ContextType = Record<
  string,
  React.ForwardRefExoticComponent<JSX.IntrinsicElements["mesh"]>
>;

export default function ShortManModel(props: any) {
  const customize = useCustomizeContext();
  const [tagName, setTagName] = useState("");
  const [cords, setCords] = useState("");
  const [tagTexture, setTagTexture] = useState(new THREE.Texture()) as any;
  const { embelIndex } = props;
  const [texture, setTexture] = useState({
    0: new THREE.Texture(),
    1: new THREE.Texture(),
    2: new THREE.Texture(),
    3: new THREE.Texture(),
    4: new THREE.Texture(),
  }) as any;

  let loader = new THREE.TextureLoader();
  loader.setCrossOrigin("");

  useEffect(() => {
    if (customize.tag.file)
      setTagTexture(loader.load(URL.createObjectURL(customize.tag.file)));
  }, [customize.tag.file])

  const setTextTexture = () => {
    var textCanvas = document.createElement("canvas");
    textCanvas.width = 50;
    textCanvas.height = 150;
    var ctx = textCanvas.getContext("2d");

    if (ctx !== null && customize.embellishment[embelIndex].font) {
      ctx.fillStyle = "black";
      ctx.font = `30px ${customize.embellishment[embelIndex].font}`;
      switch (customize.embellishment[embelIndex].position.type) {
        case 0:
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillText(customize.embellishment[embelIndex].textureText, 0, 75);
          break;
        case 1:
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(customize.embellishment[embelIndex].textureText, 25, 75);
          break;
        case 2:
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';
          ctx.fillText(customize.embellishment[embelIndex].textureText, 50, 75);
          break;
        case 3:
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(customize.embellishment[embelIndex].textureText, 25, 0);
          break;
        case 4:
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(customize.embellishment[embelIndex].textureText, 25, 75);
          break;
        case 5:
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(customize.embellishment[embelIndex].textureText, 25, 150);
          break;
      }

      const myTexture = new THREE.CanvasTexture(textCanvas);
      setTexture({ ...texture, [embelIndex]: myTexture });
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
    "/models/SHORTWR_man/Shorts.glb"
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
          `/models/SHORTWR_man/tags/Man/${tagName}/${tagName}.glb`
        ) as any;

        const material: any = materials[Object.keys(materials)[0]];
        let keys: string[] = Object.keys(nodes);
        keys = keys.filter((key) => (nodes[key].isMesh));
        const positionY = customize.tag.size.startsWith("45x45") ? 1.1 : customize.tag.size.startsWith("55") ? 1.106 : 1.615;
        const scaleYZ = customize.tag.size.startsWith("45x45") ? 0.023 : customize.tag.size.startsWith("55") ? 0.017 : 0.025;
        const scaleX = customize.tag.size.startsWith("45x45") ? 0.034 : customize.tag.size.startsWith("55") ? 0.04 : 0.04;

        return (
          <group dispose={null}>
            {keys.map((key: string, idx: number) => (
              idx === 0 ? (
                <mesh name={`pattern_tag_${idx}`} geometry={nodes[key].geometry} material={material} key={key}>
                  <Decal
                    position={[0.002, positionY, -0.1]}
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
      } else return '';
    } catch (err) {
      console.log(err)
    }
  }, [tagName, tagTexture])

  const cord = useCallback(() => {
    try {
      if (!!cords) {
        const { nodes, materials } = useGLTF(
          `/models/SHORTWR_man/cords/Man/${cords}/${cords}.glb`
        ) as any;

        const keys: string[] = Object.keys(nodes);
        const material: any = materials[Object.keys(materials)[0]];

        return (
          <group {...props} dispose={null} position={[0, 0, -0.0035]}>
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

  const cordTipItem = useCallback(() => {
    try {
      if (!!customize.cord && !!customize.cordTip) {
        const { nodes, materials } = useGLTF(
          `/models/SHORTWR_man/cords/Man/${customize.cord}/${customize.cordTip}/${customize.cordTip}.gltf`
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

  useFrame(state => {
    if (customize.tag.visible || customize.cordVisible || customize.embellishment[embelIndex].visible) {
      state.camera.position.set(0, 0, 2.5);
    }
  })

  return (
    <group position={[0, 0, 0]} {...props} dispose={null}>
      <mesh geometry={nodes.StitchMatShape_21660_Node.geometry} material={materials['Material3537.002']}>
        {customize.tag.edit ? tag() : ""}
      </mesh>
      <mesh geometry={nodes.StitchMatShape_21827_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_21994_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_22161_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_22328_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_22395_Node.geometry} material={materials['Material3259.006']} />
      <mesh geometry={nodes.StitchMatShape_22497_Node.geometry} material={materials['Material3537.002']} />
      <mesh geometry={nodes.StitchMatShape_22600_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_22702_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_22710_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_22718_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_22783_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_22855_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_22914_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_22986_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_23046_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_23184_Node.geometry} material={materials['Material3537.002']} />
      <mesh geometry={nodes.StitchMatShape_23312_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_23440_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_23613_Node.geometry} material={materials['Material3537.002']} />
      <mesh geometry={nodes.StitchMatShape_23781_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_23949_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_24117_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_24285_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_24352_Node.geometry} material={materials['Material3259.006']} />
      <mesh geometry={nodes.StitchMatShape_24454_Node.geometry} material={materials['Material3537.002']} />
      <mesh geometry={nodes.StitchMatShape_24557_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_24659_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_24667_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_24675_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_24808_Node.geometry} material={materials['Material3537.002']} />
      <mesh geometry={nodes.StitchMatShape_24936_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.StitchMatShape_25064_Node.geometry} material={materials['Material2983.006']} />
      <mesh geometry={nodes.WRCALCAOBOLCOS.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.099']} >
        <Decal
          position={[-0.11, 0.98, -0.12]}
          rotation={[0, 0, 0]}
          scale={[0.07, 0.1, 0.2]}
          map={texture[4]}
        />
      </mesh>
      <mesh geometry={nodes.WRCALCAOBOLCOS_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2603.003']} />
      <mesh geometry={nodes.WRCALCAOBOLCOS_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.099']} />
      <mesh geometry={nodes.WRCALCAOBOLINF.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.100']} />
      <mesh geometry={nodes.WRCALCAOBOLINF_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2603.004']} />
      <mesh geometry={nodes.WRCALCAOBOLINF_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.100']} />
      <mesh geometry={nodes.WRCALCAOBOLINFL.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.106']} />
      <mesh geometry={nodes.WRCALCAOBOLINFL_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2603.010']} />
      <mesh geometry={nodes.WRCALCAOBOLINFL_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.106']} />
      <mesh geometry={nodes.WRCALCAOBOLINFR.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.107']} />
      <mesh geometry={nodes.WRCALCAOBOLINFR_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2603.011']} />
      <mesh geometry={nodes.WRCALCAOBOLINFR_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.107']} />
      <mesh geometry={nodes.WRCALCAOBOLINFRR.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.108']} />
      <mesh geometry={nodes.WRCALCAOBOLINFRR_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2603.012']} />
      <mesh geometry={nodes.WRCALCAOBOLINFRR_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.108']} />
      <mesh geometry={nodes.WRCALCAOCNTCOS.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.097']} />
      <mesh geometry={nodes.WRCALCAOCNTCOS_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2603.001']} />
      <mesh geometry={nodes.WRCALCAOCNTCOS_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.097']} />
      <mesh geometry={nodes.WRCALCAOCNTFRE.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.096']}>
        {cord()}
        {cordTipItem()}
      </mesh>
      <mesh geometry={nodes.WRCALCAOCNTFRE_1.geometry} material={materials.Knit_Fleece_Terry_BACK_2603} />
      <mesh geometry={nodes.WRCALCAOCNTFRE_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.096']} />
      <mesh geometry={nodes.WRCALCAOCOSDRT.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.102']} >
        <Decal
          position={[-0.10, 0.77, -0.12]}
          rotation={[0, 0, 0]}
          scale={[0.08, 0.12, 0.2]}
          map={texture[3]}
        />
      </mesh>
      <mesh geometry={nodes.WRCALCAOCOSDRT_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2603.006']} />
      <mesh geometry={nodes.WRCALCAOCOSDRT_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.102']} />
      <mesh geometry={nodes.WRCALCAOCOSDRTR.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.105']} >
        <Decal
          position={[0.07, 0.84, -0.16]}
          rotation={[THREE.MathUtils.degToRad(-5), 0, 0]}
          scale={[0.08, 0.48, 0.2]}
          map={texture[2]}
        />
      </mesh>
      <mesh geometry={nodes.WRCALCAOCOSDRTR_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2603.009']} />
      <mesh geometry={nodes.WRCALCAOCOSDRTR_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.105']} />
      <mesh geometry={nodes.WRCALCAOFRE.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.098']} >
        <Decal
          position={[-0.08, 0.82, 0.16]}
          rotation={[THREE.MathUtils.degToRad(5), 0, 0]}
          scale={[0.08, 0.45, 0.2]}
          map={texture[1]}
        />
      </mesh>
      <mesh geometry={nodes.WRCALCAOFRE_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2603.002']} />
      <mesh geometry={nodes.WRCALCAOFRE_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.098']} />
      <mesh geometry={nodes.WRCALCAOFRER.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.104']} >
        <Decal
          position={[0.1, 0.82, 0.16]}
          rotation={[THREE.MathUtils.degToRad(5), 0, 0]}
          scale={[0.08, 0.45, 0.2]}
          map={texture[0]}
        />
      </mesh>
      <mesh geometry={nodes.WRCALCAOFRER_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2603.008']} />
      <mesh geometry={nodes.WRCALCAOFRER_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.104']} />
    </group>
  );
}

// useGLTF.preload
("/models/SHORTWR_man/Shorts-transformed.glb");

useGLTF.preload("/models/SHORTWR_man/tags/Man/label-45x45_black/label-45x45_black.glb")
useGLTF.preload("/models/SHORTWR_man/tags/Man/label-45x45_white/label-45x45_white.glb")
useGLTF.preload("/models/SHORTWR_man/tags/Man/label-55x30_black/label-55x30_black.glb")
useGLTF.preload("/models/SHORTWR_man/tags/Man/label-55x30_white/label-55x30_white.glb")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord1/Cord1.glb")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord2/Cord2.glb")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord3/Cord3.glb")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord4/Cord4.glb")

useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord1/mental_end/mental_end.gltf")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord1/plastic_end/plastic_end.gltf")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord1/silicone_end/silicone_end.gltf")

useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord2/mental_end/mental_end.gltf")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord2/plastic_end/plastic_end.gltf")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord2/silicone_end/silicone_end.gltf")

useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord3/mental_end/mental_end.gltf")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord3/plastic_end/plastic_end.gltf")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord3/silicone_end/silicone_end.gltf")

useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord4/mental_end/mental_end.gltf")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord4/plastic_end/plastic_end.gltf")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord4/silicone_end/silicone_end.gltf")