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

export default function TShirtManModel(props: any) {
  const customize = useCustomizeContext();
  const { embelIndex } = props;
  const [tagName, setTagName] = useState("");
  let loader = new THREE.TextureLoader();
  loader.setCrossOrigin("");
  const [tagTexture, setTagTexture] = useState(new THREE.Texture()) as any;
  const [texture, setTexture] = useState({
    0: new THREE.Texture(),
    1: new THREE.Texture(),
    2: new THREE.Texture(),
    3: new THREE.Texture(),
    4: new THREE.Texture(),
  }) as any;


  useEffect(() => {
    if (customize.tag.file)
      setTagTexture(loader.load(URL.createObjectURL(customize.tag.file)));
  }, [customize.tag.file])

  const setTextTexture = () => {
    var textCanvas = document.createElement("canvas");
    textCanvas.width = 200;
    textCanvas.height = 200;
    var ctx = textCanvas.getContext("2d");

    if (ctx !== null && customize.embellishment[embelIndex].font) {
      ctx.fillStyle = "black";
      ctx.font = `30px ${customize.embellishment[embelIndex].font}`;
      switch (customize.embellishment[embelIndex].position.type) {
        case 0:
          ctx.textAlign = 'left';
          ctx.textBaseline = 'middle';
          ctx.fillText(customize.embellishment[embelIndex].textureText, 0, 100);
          break;
        case 1:
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(customize.embellishment[embelIndex].textureText, 100, 100);
          break;
        case 2:
          ctx.textAlign = 'right';
          ctx.textBaseline = 'middle';
          ctx.fillText(customize.embellishment[embelIndex].textureText, 200, 100);
          break;
        case 3:
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(customize.embellishment[embelIndex].textureText, 100, 0);
          break;
        case 4:
          ctx.textAlign = 'center';
          ctx.textBaseline = 'middle';
          ctx.fillText(customize.embellishment[embelIndex].textureText, 100, 100);
          break;
        case 5:
          ctx.textAlign = 'center';
          ctx.textBaseline = 'bottom';
          ctx.fillText(customize.embellishment[embelIndex].textureText, 100, 200);
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

        const material: any = materials[Object.keys(materials)[0]];
        let keys: string[] = Object.keys(nodes);
        keys = keys.filter((key) => (nodes[key].isMesh));
        const positionY = customize.tag.size.startsWith("45x45") ? 1.609 : customize.tag.size.startsWith("55") ? 1.614 : 1.615;
        const scaleYZ = customize.tag.size.startsWith("45x45") ? 0.02 : customize.tag.size.startsWith("55") ? 0.015 : 0.025;

        return (
          <group dispose={null}>
            {keys.map((key: string, idx: number) => (
              idx === 0 ? (
                <mesh name={`pattern_tag_${idx}`} geometry={nodes[key].geometry} material={material} key={key}>
                  <Decal
                    position={[0, positionY, -0.085]}
                    rotation={[0, 0, 0]}
                    scale={[0.03, scaleYZ, scaleYZ]}
                    map={tagTexture}
                    depthTest={true}
                  />
                </mesh>
              ) : (
                <mesh name={`pattern_tag_${idx}`} geometry={nodes[key].geometry} material={material} key={key} />
              )))}
          </group>
        )
      } else {
        return '';
      }
    } catch (err: any) {
      console.log(err);
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
    if (customize.tag.visible || customize.cordVisible || customize.embellishment[embelIndex].visible) {
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
      <mesh geometry={nodes['TSHIRTWR-COS005'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.010']} >
        <Decal
          position={[0, 1.43, -0.24]}
          rotation={[THREE.MathUtils.degToRad(5), THREE.MathUtils.degToRad(180), 0]}
          scale={[0.23, 0.31, 0.26]}
          map={texture[0]}
        />
      </mesh>
      <mesh geometry={nodes['TSHIRTWR-COS005_1'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.010']} >

      </mesh>
      <mesh geometry={nodes['TSHIRTWR-COS005_2'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.010']} />
      <mesh geometry={nodes['TSHIRTWR-FRE005'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.012']}>
        <Decal
          position={[0, 1.38, 0.15]}
          rotation={[0, 0, 0]}
          scale={[0.23, 0.31, 0.26]}
          map={texture[1]}
        />
      </mesh>
      <mesh geometry={nodes['TSHIRTWR-FRE005_1'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.012']} />
      <mesh geometry={nodes['TSHIRTWR-FRE005_2'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.012']} />
      <mesh geometry={nodes['TSHIRTWR-GOLA005'].geometry} material={materials['Rib_1X1_319gsm_FRONT_2550.005']} />
      <mesh geometry={nodes['TSHIRTWR-GOLA005_1'].geometry} material={materials['Rib_1X1_319gsm_FRONT_2550.005']} />
      <mesh geometry={nodes['TSHIRTWR-GOLA005_2'].geometry} material={materials['Rib_1X1_319gsm_FRONT_2550.005']} />
      <mesh geometry={nodes['TSHIRTWR-MANGA_1005'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.011']} >
        <Decal
          position={[-0.245, 1.47, -0.02]}
          rotation={[0, 0, THREE.MathUtils.degToRad(-15)]}
          scale={[0.05, 0.078, 0.066]}
          map={texture[3]}
        />
      </mesh>
      <mesh geometry={nodes['TSHIRTWR-MANGA_1005_1'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.011']} />
      <mesh geometry={nodes['TSHIRTWR-MANGA_1005_2'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.011']} />
      <mesh geometry={nodes['TSHIRTWR-MANGA005'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.013']} >
        <Decal
          position={[0.25, 1.46, -0.03]}
          rotation={[0, 0, THREE.MathUtils.degToRad(15)]}
          scale={[0.05, 0.078, 0.066]}
          map={texture[2]}
        />
      </mesh>
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