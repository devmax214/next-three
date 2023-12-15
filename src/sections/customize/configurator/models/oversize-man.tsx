import * as THREE from "three";
import React, { useCallback, useEffect, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomizeContext } from "@/components/customize/context";
import { useFrame } from "@react-three/fiber";

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

export default function OversizeManModel(props: any) {
  const customize = useCustomizeContext();
  const [tagName, setTagName] = useState("");
  const { embelIndex } = props;
  console.log('embelIndex', embelIndex)

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
    if (customize.tag.file) {
      loader.loadAsync(URL.createObjectURL(customize.tag.file)).then((result) => {
        setTagTexture(result);
      });
    }
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

        const material: any = materials[Object.keys(materials)[0]];
        let keys: string[] = Object.keys(nodes);
        keys = keys.filter((key) => (nodes[key].isMesh));
        const positionY = customize.tag.size.startsWith("45x45") ? 1.603 : customize.tag.size.startsWith("55") ? 1.609 : 1.615;
        const scaleYZ = customize.tag.size.startsWith("45x45") ? 0.02 : customize.tag.size.startsWith("55") ? 0.015 : 0.025;
        const scaleX = !tagTexture.source.data ? 0 : scaleYZ * tagTexture.source.data.naturalWidth / tagTexture.source.data.naturalHeight;

        return (
          <group dispose={null}>
            {keys.map((key: string, idx: number) => (
              idx === 0 ? (
                <mesh name={`pattern_tag_${idx}`} geometry={nodes[key].geometry} material={material} key={key}>
                  <Decal
                    position={[0, positionY, -0.085]}
                    rotation={[0, 0, 0]}
                    scale={[scaleX, scaleYZ, 0.2]}
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
      <mesh geometry={nodes.MG100Y__MAN2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.008']} >
        <Decal
          position={[0.25, 1.42, -0.03]}
          rotation={[0, 0, THREE.MathUtils.degToRad(15)]}
          scale={[0.07, 0.08, 0.066]}
          map={texture[2]}
        />
      </mesh>
      <mesh geometry={nodes.MG100Y__MAN2_1.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.008']} />
      <mesh geometry={nodes.MG100Y__MAN2_2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.008']} />
      <mesh geometry={nodes.MG100Y__MAN3.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.009']} >
        <Decal
          position={[-0.245, 1.41, -0.02]}
          rotation={[0, 0, THREE.MathUtils.degToRad(-15)]}
          scale={[0.07, 0.08, 0.066]}
          map={texture[3]}
        />
      </mesh>
      <mesh geometry={nodes.MG100Y__MAN3_1.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.009']} />
      <mesh geometry={nodes.MG100Y__MAN3_2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.009']} />
      <mesh geometry={nodes.MG100Y_COS2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.006']} >
        <Decal
          position={[0, 1.43, -0.24]}
          rotation={[THREE.MathUtils.degToRad(5), THREE.MathUtils.degToRad(180), 0]}
          scale={[0.23, 0.31, 0.26]}
          map={texture[0]}
        />
      </mesh>
      <mesh geometry={nodes.MG100Y_COS2_1.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.006']} />
      <mesh geometry={nodes.MG100Y_COS2_2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.006']} />
      <mesh geometry={nodes.MG100Y_COS4.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.006']} />
      <mesh geometry={nodes.MG100Y_COS4_1.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.006']} />
      <mesh geometry={nodes.MG100Y_COS4_2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.006']} />
      <mesh geometry={nodes.MG100Y_FRE2.geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.007']}>
        <Decal
          position={[0, 1.38, 0.15]}
          rotation={[0, 0, 0]}
          scale={[0.23, 0.31, 0.26]}
          map={texture[1]}
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