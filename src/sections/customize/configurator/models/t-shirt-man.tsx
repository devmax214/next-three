import * as THREE from "three";
import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomizeContext } from "@/components/customize/context";
import { isEmpty } from "@/helpers/common";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { Texture } from "@mui/icons-material";
import useStore, { setState } from "@/helpers/store";
import useFirstRenderModel from "@/hooks/use-first-render-model";
import FabricEditableTexture from "./fabric-texture";
import { useRaycast } from "@/hooks/use-custom-raycast";
import useCustomTextures from "@/hooks/use-custom-texture";

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

export default function TShirtManModel(props: any) {
  const customize = useCustomizeContext();
  const { embelIndex, canvasRef, textureRef, canvasRenderedRef, controlsRef } = props;
  const modelRef = useRef<any>();

  let loader = new THREE.TextureLoader();
  loader.setCrossOrigin("");

  const [tagName, setTagName] = useState("");
  const [tagTexture, setTagTexture] = useState(new THREE.Texture()) as any;

  const { nodes, materials } = useGLTF(
    "/models/TSHIRTWR_man/TSHIRT_MAN2.glb"
  ) as GLTFResult;

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
        const scaleX = !tagTexture.source.data ? 0 : scaleYZ * tagTexture.source.data.naturalWidth / tagTexture.source.data.naturalHeight;

        return (
          <group dispose={null}>
            {keys.map((key: string, idx: number) => (
              idx === 0 ? (
                <mesh name={`pattern_tag_${idx}`} position={[0, 0, 0]} geometry={nodes[key].geometry} material={material} key={key}>
                  <Decal
                    position={[0, positionY, -0.085]}
                    rotation={[0, 0, 0]}
                    scale={[scaleX, scaleYZ, scaleYZ]}
                    map={!tagName.startsWith("print-label") && tagTexture}
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

  useEffect(() => {
    if (!isEmpty(customize.tag.file)) {
      loader.loadAsync(typeof customize.tag.file === "string" ? customize.tag.file : URL.createObjectURL(customize.tag.file)).then((result) => {
        setTagTexture(result);
      });
    }
  }, [customize.tag.file])

  if (!isEmpty(customize.color)) {
    const color = customize.color;
    for (let key in materials) {
      delete materials[key]['_listeners'];
      materials[key] = new THREE.MeshStandardMaterial({ ...materials[key], color: color })
    }
  }

  let scaleY = 0.021, scaleX = 0.043;
  try {
    scaleX = !tagTexture.source.data ? 0 : scaleY * tagTexture.source.data.naturalWidth / tagTexture.source.data.naturalHeight;
  } catch (error) { }
  var geometry = new THREE.BoxGeometry(scaleX, scaleY, 0); // give the cube it's dimensions (width, height, depth)
  var material = new THREE.MeshLambertMaterial({ transparent: true }); // creates material and gives it a color
  material.wireframe = false;
  material.map = tagTexture;

  /*
    30 DECEMBER 2023
    NAO ADDING RAYCAST FEATURE
  */

  const { normalShirt, bumpShirt, normalCollar, bumpCollar } = useCustomTextures();
  const { camera, gl, raycaster, scene, mouse, pointer } = useThree();
  useRaycast(
    controlsRef,
    canvasRef,
    canvasRenderedRef,
    textureRef,
    "T-Shirts",
    customize,
    embelIndex,
    camera,
    gl,
    raycaster,
    scene,
    mouse,
    pointer
  );
  // NAO
  return (
    <group position={[0, 0, 0]} {...props} dispose={null} ref={modelRef}>
      {customize.tag.edit && tagName.startsWith("print-label") && <mesh geometry={geometry} material={material} position={[0, 1.616, -0.08]} />}
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
      <mesh geometry={nodes['TSHIRTWR-COS005'].geometry} >
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={-0.5}
          bumpScale={1}
          normalMap={normalShirt}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh geometry={nodes['TSHIRTWR-COS005_1'].geometry} >
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={0.2}
          bumpScale={1}
          normalMap={normalShirt}
          color={customize.color}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh geometry={nodes['TSHIRTWR-COS005_2'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.010']} />
      <mesh geometry={nodes['TSHIRTWR-FRE005'].geometry} >
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={-0.5}
          bumpScale={1}
          normalMap={normalShirt}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh geometry={nodes['TSHIRTWR-FRE005_1'].geometry} >
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={0.2}
          bumpScale={1}
          normalMap={normalShirt}
          color={customize.color}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh geometry={nodes['TSHIRTWR-FRE005_2'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.012']} />
      <mesh geometry={nodes['TSHIRTWR-GOLA005'].geometry}  >
        <FabricEditableTexture
          bumpMap={bumpCollar}
          normalScale={-0.5}
          bumpScale={1}
          normalMap={normalCollar}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh geometry={nodes['TSHIRTWR-GOLA005_1'].geometry} material={materials['Rib_1X1_319gsm_FRONT_2550.005']} />
      <mesh geometry={nodes['TSHIRTWR-GOLA005_2'].geometry} material={materials['Rib_1X1_319gsm_FRONT_2550.005']} />
      <mesh geometry={nodes['TSHIRTWR-MANGA_1005'].geometry} >
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={-0.5}
          bumpScale={1}
          normalMap={normalShirt}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh geometry={nodes['TSHIRTWR-MANGA_1005_1'].geometry} >
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={0.2}
          bumpScale={1}
          normalMap={normalShirt}
          color={customize.color}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh geometry={nodes['TSHIRTWR-MANGA_1005_2'].geometry} material={materials['Knit_Cotton_Jersey_FRONT_2530.011']} />
      <mesh geometry={nodes['TSHIRTWR-MANGA005'].geometry} >
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={-0.5}
          bumpScale={1}
          normalMap={normalShirt}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh geometry={nodes['TSHIRTWR-MANGA005_1'].geometry} >
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={0.2}
          bumpScale={1}
          normalMap={normalShirt}
          color={customize.color}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
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