import * as THREE from "three";
import React, {
  useCallback,
  useEffect,
  useState,
  useRef,
} from "react";
import { Decal, useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomizeContext } from "@/components/customize/context";
import { useThree } from "@react-three/fiber";
import { isEmpty } from "@/helpers/common";
import FabricEditableTexture from "./fabric-texture";
import { useRaycast } from "@/hooks/use-custom-raycast";
import useCustomTextures from "@/hooks/use-custom-texture";

type GLTFResult = GLTF & {
  nodes: {
    StitchMatShape_57843_Node: THREE.Mesh;
    StitchMatShape_58208_Node: THREE.Mesh;
    StitchMatShape_58366_Node: THREE.Mesh;
    StitchMatShape_58524_Node: THREE.Mesh;
    StitchMatShape_59203_Node: THREE.Mesh;
    StitchMatShape_59552_Node: THREE.Mesh;
    StitchMatShape_59741_Node: THREE.Mesh;
    StitchMatShape_59891_Node: THREE.Mesh;
    StitchMatShape_60041_Node: THREE.Mesh;
    StitchMatShape_60720_Node: THREE.Mesh;
    StitchMatShape_60948_Node: THREE.Mesh;
    StitchMatShape_61245_Node: THREE.Mesh;
    StitchMatShape_61693_Node: THREE.Mesh;
    StitchMatShape_61931_Node: THREE.Mesh;
    StitchMatShape_62228_Node: THREE.Mesh;
    StitchMatShape_62676_Node: THREE.Mesh;
    StitchMatShape_63048_Node: THREE.Mesh;
    StitchMatShape_63412_Node: THREE.Mesh;
    MG100Y__MAN2: THREE.Mesh;
    MG100Y__MAN2_1: THREE.Mesh;
    MG100Y__MAN2_2: THREE.Mesh;
    MG100Y__MAN3: THREE.Mesh;
    MG100Y__MAN3_1: THREE.Mesh;
    MG100Y__MAN3_2: THREE.Mesh;
    MG100Y_COS2: THREE.Mesh;
    MG100Y_COS2_1: THREE.Mesh;
    MG100Y_COS2_2: THREE.Mesh;
    MG100Y_COS4: THREE.Mesh;
    MG100Y_COS4_1: THREE.Mesh;
    MG100Y_COS4_2: THREE.Mesh;
    MG100Y_FRE2: THREE.Mesh;
    MG100Y_FRE2_1: THREE.Mesh;
    MG100Y_FRE2_2: THREE.Mesh;
    MG100Y_GOLA_COSTA: THREE.Mesh;
    MG100Y_GOLA_COSTA_1: THREE.Mesh;
    MG100Y_GOLA_COSTA_2: THREE.Mesh;
    MG100Y_GOLA_FRT: THREE.Mesh;
    MG100Y_GOLA_FRT_1: THREE.Mesh;
    MG100Y_GOLA_FRT_2: THREE.Mesh;
  };
  materials: {
    Material3329: THREE.MeshStandardMaterial;
    Material3150: THREE.MeshStandardMaterial;
    Material2976: THREE.MeshStandardMaterial;
    Material2802: THREE.MeshStandardMaterial;
    Material3503: THREE.MeshStandardMaterial;
    ["Knit_Cotton_Jersey_FRONT_2530.008"]: THREE.MeshStandardMaterial;
    ["Knit_Cotton_Jersey_FRONT_2530.009"]: THREE.MeshStandardMaterial;
    ["Knit_Cotton_Jersey_FRONT_2530.006"]: THREE.MeshStandardMaterial;
    ["Knit_Cotton_Jersey_FRONT_2530.007"]: THREE.MeshStandardMaterial;
    ["Rib_1X1_319gsm_FRONT_2550.004"]: THREE.MeshStandardMaterial;
    ["Rib_1X1_319gsm_FRONT_2550.003"]: THREE.MeshStandardMaterial;
  };
};

export default function OversizeManModel(props: any) {
  const customize = useCustomizeContext();
  const { embelIndex, canvasRef, textureRef, canvasRenderedRef, controlsRef } = props;
  const modelRef = useRef<any>();

  let loader = new THREE.TextureLoader();
  loader.setCrossOrigin("");

  const [tagName, setTagName] = useState("");
  const [tagTexture, setTagTexture] = useState(new THREE.Texture()) as any;

  const { nodes, materials } = useGLTF(
    "/models/Oversize/Oversized2.glb"
  ) as GLTFResult;

  const tag = useCallback(() => {
    try {
      if (!!tagName) {
        const { nodes, materials } = useGLTF(
          `/models/Oversize/tags/Man/${tagName}/${tagName}.glb`
        ) as any;

        const material: any = materials[Object.keys(materials)[0]];
        let keys: string[] = Object.keys(nodes);
        keys = keys.filter((key) => nodes[key].isMesh);
        const positionY = customize.tag.size.startsWith("45x45")
          ? 1.603
          : customize.tag.size.startsWith("55")
            ? 1.609
            : 1.615;
        const scaleYZ = customize.tag.size.startsWith("45x45")
          ? 0.02
          : customize.tag.size.startsWith("55")
            ? 0.015
            : 0.025;
        const scaleX = !tagTexture.source.data
          ? 0
          : (scaleYZ * tagTexture.source.data.naturalWidth) /
          tagTexture.source.data.naturalHeight;

        return (
          <group dispose={null}>
            {keys.map((key: string, idx: number) =>
              idx === 0 ? (
                <mesh
                  name={`pattern_tag_${idx}`}
                  geometry={nodes[key].geometry}
                  material={material}
                  key={key}
                >
                  <Decal
                    position={[0, positionY, -0.085]}
                    rotation={[0, 0, 0]}
                    scale={[scaleX, scaleYZ, 0.2]}
                    map={!tagName.startsWith("print-label") && tagTexture}
                    // debug={true}
                    depthTest={true}
                  />
                </mesh>
              ) : (
                <mesh
                  name={`pattern_tag_${idx}`}
                  geometry={nodes[key].geometry}
                  material={material}
                  key={key}
                />
              )
            )}
          </group>
        );
      } else return "";
    } catch (err) {
      console.log(err);
    }
  }, [tagName, tagTexture]);

  useEffect(() => {
    if (!isEmpty(customize.tag.file)) {
      loader
        .loadAsync(
          typeof customize.tag.file === "string"
            ? customize.tag.file
            : URL.createObjectURL(customize.tag.file)
        )
        .then((result) => {
          setTagTexture(result);
        });
    }
  }, [customize.tag.file]);

  useEffect(() => {
    if (customize.tag.neck) {
      const newName = `label-${customize.tag.size}_${customize.tag.color ? "black" : "white"
        }`;
      setTagName(newName);
    } else {
      setTagName(`print-label_${customize.tag.color ? "black" : "white"}`);
    }
  }, [customize.tag]);

  useEffect(() => {
    props.setLoading(false)
  }, [])

  let scaleY = 0.018, scaleX = 0.038;
  try {
    scaleX = !tagTexture.source.data
      ? 0
      : (scaleY * tagTexture.source.data.naturalWidth) /
      tagTexture.source.data.naturalHeight;
  } catch (error) { }
  var geometry = new THREE.BoxGeometry(scaleX, scaleY, 0); // give the cube it's dimensions (width, height, depth)
  var material = new THREE.MeshLambertMaterial({ transparent: true }); // creates material and gives it a color
  material.wireframe = false;
  material.map = tagTexture;

  if (customize.color.length > 0) {
    const color = customize.color;
    for (let key in materials) {
      delete materials[key]["_listeners"];
      materials[key] = new THREE.MeshStandardMaterial({
        ...materials[key],
        color: color,
      });
    }
  }

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
    "Oversize",
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
    <group position={[0, 0, 0]} {...props} dispose={null}>
      {customize.tag.edit && tagName.startsWith("print-label") && (
        <mesh
          geometry={geometry}
          material={material}
          position={[0, 1.613, -0.08]}
        />
      )}
      <mesh
        geometry={nodes.StitchMatShape_57843_Node.geometry}
        material={materials.Material3329}
      />
      <mesh
        geometry={nodes.StitchMatShape_58208_Node.geometry}
        material={materials.Material3150}
      />
      <mesh
        geometry={nodes.StitchMatShape_58366_Node.geometry}
        material={materials.Material2976}
      />
      <mesh
        geometry={nodes.StitchMatShape_58524_Node.geometry}
        material={materials.Material2976}
      />
      <mesh
        geometry={nodes.StitchMatShape_59203_Node.geometry}
        material={materials.Material2802}
      />
      <mesh
        geometry={nodes.StitchMatShape_59552_Node.geometry}
        material={materials.Material3329}
      />
      <mesh
        geometry={nodes.StitchMatShape_59741_Node.geometry}
        material={materials.Material2976}
      />
      <mesh
        geometry={nodes.StitchMatShape_59891_Node.geometry}
        material={materials.Material2976}
      />
      <mesh
        geometry={nodes.StitchMatShape_60041_Node.geometry}
        material={materials.Material2976}
      />
      <mesh
        geometry={nodes.StitchMatShape_60720_Node.geometry}
        material={materials.Material2802}
      />
      <mesh
        geometry={nodes.StitchMatShape_60948_Node.geometry}
        material={materials.Material3329}
      />
      <mesh
        geometry={nodes.StitchMatShape_61245_Node.geometry}
        material={materials.Material2976}
      />
      <mesh
        geometry={nodes.StitchMatShape_61693_Node.geometry}
        material={materials.Material2802}
      />
      <mesh
        geometry={nodes.StitchMatShape_61931_Node.geometry}
        material={materials.Material3329}
      />
      <mesh
        geometry={nodes.StitchMatShape_62228_Node.geometry}
        material={materials.Material2976}
      />
      <mesh
        geometry={nodes.StitchMatShape_62676_Node.geometry}
        material={materials.Material2802}
      />
      <mesh
        geometry={nodes.StitchMatShape_63048_Node.geometry}
        material={materials.Material3503}
      >
        {customize.tag.edit ? tag() : ""}
      </mesh>
      <mesh
        geometry={nodes.StitchMatShape_63412_Node.geometry}
        material={materials.Material3503}
      />
      <mesh geometry={nodes.MG100Y__MAN2.geometry}>
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={-0.3}
          bumpScale={1}
          normalMap={normalShirt}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.MG100Y__MAN2_1.geometry}>
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
      <mesh
        geometry={nodes.MG100Y__MAN2_2.geometry}
        material={materials["Knit_Cotton_Jersey_FRONT_2530.008"]}
      />
      <mesh geometry={nodes.MG100Y__MAN3.geometry} ref={modelRef}>
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={-0.3}
          bumpScale={1}
          normalMap={normalShirt}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.MG100Y__MAN3_1.geometry}>
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
      <mesh
        geometry={nodes.MG100Y__MAN3_2.geometry}
        material={materials["Knit_Cotton_Jersey_FRONT_2530.009"]}
      />
      <mesh geometry={nodes.MG100Y_COS2.geometry}>
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={-0.3}
          bumpScale={1}
          normalMap={normalShirt}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.MG100Y_COS2_1.geometry}>
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
      <mesh
        geometry={nodes.MG100Y_COS2_2.geometry}
        material={materials["Knit_Cotton_Jersey_FRONT_2530.006"]}
      />
      <mesh
        geometry={nodes.MG100Y_COS4.geometry}>
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
      <mesh
        geometry={nodes.MG100Y_COS4_1.geometry}
        material={materials["Knit_Cotton_Jersey_FRONT_2530.006"]}
      />
      <mesh
        geometry={nodes.MG100Y_COS4_2.geometry}
        material={materials["Knit_Cotton_Jersey_FRONT_2530.006"]}
      />
      <mesh geometry={nodes.MG100Y_FRE2.geometry}>
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={-0.3}
          bumpScale={1}
          normalMap={normalShirt}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.MG100Y_FRE2_1.geometry}>
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
      <mesh
        geometry={nodes.MG100Y_FRE2_2.geometry}
        material={materials["Knit_Cotton_Jersey_FRONT_2530.007"]}
      />
      <mesh
        geometry={nodes.MG100Y_GOLA_COSTA.geometry}>
        <FabricEditableTexture
          bumpMap={bumpCollar}
          normalScale={0.2}
          bumpScale={1}
          normalMap={normalCollar}
          color={customize.color}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.MG100Y_GOLA_COSTA_1.geometry}
        material={materials["Rib_1X1_319gsm_FRONT_2550.004"]}
      />
      <mesh
        geometry={nodes.MG100Y_GOLA_COSTA_2.geometry}
        material={materials["Rib_1X1_319gsm_FRONT_2550.004"]}
      />
      <mesh
        geometry={nodes.MG100Y_GOLA_FRT.geometry}>
        <FabricEditableTexture
          bumpMap={bumpCollar}
          normalScale={0.2}
          bumpScale={1}
          normalMap={normalCollar}
          color={customize.color}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.MG100Y_GOLA_FRT_1.geometry}
        material={materials["Rib_1X1_319gsm_FRONT_2550.003"]}
      />
      <mesh
        geometry={nodes.MG100Y_GOLA_FRT_2.geometry}
        material={materials["Rib_1X1_319gsm_FRONT_2550.003"]}
      />
    </group>
  );
}

// useGLTF.preload
("/models/Oversize/Oversized2.glb");
useGLTF.preload(
  "/models/Oversize/tags/Man/label-45x45_black/label-45x45_black.glb"
);
useGLTF.preload(
  "/models/Oversize/tags/Man/label-45x45_white/label-45x45_white.glb"
);
useGLTF.preload(
  "/models/Oversize/tags/Man/label-55x30_black/label-55x30_black.glb"
);
useGLTF.preload(
  "/models/Oversize/tags/Man/label-55x30_white/label-55x30_white.glb"
);
useGLTF.preload(
  "/models/Oversize/tags/Man/print-label_black/print-label_black.glb"
);
useGLTF.preload(
  "/models/Oversize/tags/Man/print-label_white/print-label_white.glb"
);
