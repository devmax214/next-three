import * as THREE from "three";
import React, {
  useCallback,
  useEffect,
  useState,
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
    StitchMatShape_39172_Node: THREE.Mesh;
    StitchMatShape_39333_Node: THREE.Mesh;
    StitchMatShape_39494_Node: THREE.Mesh;
    StitchMatShape_39653_Node: THREE.Mesh;
    StitchMatShape_39822_Node: THREE.Mesh;
    StitchMatShape_39991_Node: THREE.Mesh;
    StitchMatShape_40197_Node: THREE.Mesh;
    ["SWEATWR-CINTO001"]: THREE.Mesh;
    ["SWEATWR-CINTO001_1"]: THREE.Mesh;
    ["SWEATWR-CINTO001_2"]: THREE.Mesh;
    ["SWEATWR-COSTA001"]: THREE.Mesh;
    ["SWEATWR-COSTA001_1"]: THREE.Mesh;
    ["SWEATWR-COSTA001_2"]: THREE.Mesh;
    ["SWEATWR-FRENTE001"]: THREE.Mesh;
    ["SWEATWR-FRENTE001_1"]: THREE.Mesh;
    ["SWEATWR-FRENTE001_2"]: THREE.Mesh;
    ["SWEATWR-GOLA_2001"]: THREE.Mesh;
    ["SWEATWR-GOLA_2001_1"]: THREE.Mesh;
    ["SWEATWR-GOLA_2001_2"]: THREE.Mesh;
    ["SWEATWR-MANGA_1001"]: THREE.Mesh;
    ["SWEATWR-MANGA_1001_1"]: THREE.Mesh;
    ["SWEATWR-MANGA_1001_2"]: THREE.Mesh;
    ["SWEATWR-MANGA001"]: THREE.Mesh;
    ["SWEATWR-MANGA001_1"]: THREE.Mesh;
    ["SWEATWR-MANGA001_2"]: THREE.Mesh;
    ["SWEATWR-MEIALUA"]: THREE.Mesh;
    ["SWEATWR-MEIALUA_1"]: THREE.Mesh;
    ["SWEATWR-MEIALUA_2"]: THREE.Mesh;
    ["SWEATWR-PUNHO_1001"]: THREE.Mesh;
    ["SWEATWR-PUNHO_1001_1"]: THREE.Mesh;
    ["SWEATWR-PUNHO_1001_2"]: THREE.Mesh;
    ["SWEATWR-PUNHO001"]: THREE.Mesh;
    ["SWEATWR-PUNHO001_1"]: THREE.Mesh;
    ["SWEATWR-PUNHO001_2"]: THREE.Mesh;
  };
  materials: {
    ["Material2816.002"]: THREE.MeshStandardMaterial;
    ["Material2994.002"]: THREE.MeshStandardMaterial;
    Material3172: THREE.MeshStandardMaterial;
    ["Rib_1X1_486gsm_FRONT_2548.001"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2530.002"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2530.003"]: THREE.MeshStandardMaterial;
  };
};

export default function SWEATManModel(props: any) {
  const customize = useCustomizeContext();
  const { embelIndex, canvasRef, textureRef, canvasRenderedRef, controlsRef } = props;

  let loader = new THREE.TextureLoader();
  loader.setCrossOrigin("");

  const [tagName, setTagName] = useState("");
  const [tagTexture, setTagTexture] = useState(new THREE.Texture()) as any;

  const { nodes, materials } = useGLTF(
    "/models/SWEATWR_man/SWEATSHIRT_MAN2.glb"
  ) as GLTFResult;

  const tag = useCallback(() => {
    try {
      if (!!tagName) {
        const { nodes, materials } = useGLTF(
          `/models/SWEATWR_man/tags/Man/${tagName}/${tagName}.gltf`
        ) as any;

        const material: any = materials[Object.keys(materials)[0]];
        let keys: string[] = Object.keys(nodes);
        keys = keys.filter((key) => nodes[key].isMesh);

        const positionY = customize.tag.size.startsWith("45x45")
          ? 1.602
          : customize.tag.size.startsWith("55")
            ? 1.611
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
          <group dispose={null} position={[0, 0, 0.001]}>
            {keys.map((key: string, idx: number) =>
              idx === 0 ? (
                <mesh
                  name={`pattern_tag_${idx}`}
                  geometry={nodes[key].geometry}
                  material={material}
                  key={key}
                  position={[0, 0, tagName.startsWith("print") ? 0.002 : 0]}
                >
                  <Decal
                    position={[0, positionY, -0.085]}
                    rotation={[0, 0, 0]}
                    scale={[scaleX, scaleYZ, scaleYZ]}
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
    if (customize.tag.neck) {
      const newName = `label-${customize.tag.size}_${customize.tag.color ? "black" : "white"
        }`;
      setTagName(newName);
    } else {
      setTagName(`print-label_${customize.tag.color ? "black" : "white"}`);
    }
  }, [customize.tag]);

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

  /*
    30 DECEMBER 2023
    NAO ADDING RAYCAST FEATURE
  */
  const { normalShirt, bumpShirt, normalCollar, bumpCollar } =
    useCustomTextures();
  const { camera, gl, raycaster, scene, mouse, pointer } = useThree();
  useRaycast(
    controlsRef,
    canvasRef,
    canvasRenderedRef,
    textureRef,
    "Sweatshirts",
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
          position={[0, 1.607, -0.08]}
        />
      )}
      <mesh
        geometry={nodes.StitchMatShape_39172_Node.geometry}
        material={materials["Material2816.002"]}
      />
      <mesh
        geometry={nodes.StitchMatShape_39333_Node.geometry}
        material={materials["Material2816.002"]}
      />
      <mesh
        geometry={nodes.StitchMatShape_39494_Node.geometry}
        material={materials["Material2816.002"]}
      />
      <mesh
        geometry={nodes.StitchMatShape_39653_Node.geometry}
        material={materials["Material2994.002"]}
      />
      <mesh
        geometry={nodes.StitchMatShape_39822_Node.geometry}
        material={materials["Material2816.002"]}
      />
      <mesh
        geometry={nodes.StitchMatShape_39991_Node.geometry}
        material={materials["Material2816.002"]}
      />
      <mesh
        geometry={nodes.StitchMatShape_40197_Node.geometry}
        material={materials.Material3172}
      />
      <mesh geometry={nodes["SWEATWR-CINTO001"].geometry}>
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
        geometry={nodes["SWEATWR-CINTO001_1"].geometry}
        material={materials["Rib_1X1_486gsm_FRONT_2548.001"]}
      />
      <mesh
        geometry={nodes["SWEATWR-CINTO001_2"].geometry}
        material={materials["Rib_1X1_486gsm_FRONT_2548.001"]}
      />
      <mesh geometry={nodes["SWEATWR-COSTA001"].geometry}>
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
        geometry={nodes["SWEATWR-COSTA001_1"].geometry}>
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={1}
          bumpScale={1}
          normalMap={normalShirt}
          color={customize.color}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes["SWEATWR-COSTA001_2"].geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2530.002"]}
      />
      <mesh geometry={nodes["SWEATWR-FRENTE001"].geometry}>
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
        geometry={nodes["SWEATWR-FRENTE001_1"].geometry}>
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={1}
          bumpScale={1}
          normalMap={normalShirt}
          color={customize.color}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes["SWEATWR-FRENTE001_2"].geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2530.002"]}
      />
      <mesh geometry={nodes["SWEATWR-GOLA_2001"].geometry}>
        {customize.tag.edit ? tag() : ""}
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
        geometry={nodes["SWEATWR-GOLA_2001_1"].geometry}
        material={materials["Rib_1X1_486gsm_FRONT_2548.001"]}
      />
      <mesh geometry={nodes["SWEATWR-GOLA_2001_2"].geometry}>
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
      <mesh geometry={nodes["SWEATWR-MANGA_1001"].geometry}>
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
        geometry={nodes["SWEATWR-MANGA_1001_1"].geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2530.002"]}
      />
      <mesh
        geometry={nodes["SWEATWR-MANGA_1001_2"].geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2530.002"]}
      />
      <mesh geometry={nodes["SWEATWR-MANGA001"].geometry}>
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
        geometry={nodes["SWEATWR-MANGA001_1"].geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2530.002"]}
      />
      <mesh
        geometry={nodes["SWEATWR-MANGA001_2"].geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2530.002"]}
      />
      <mesh
        geometry={nodes["SWEATWR-MEIALUA"].geometry}>
        <FabricEditableTexture
          bumpMap={bumpShirt}
          normalScale={1}
          bumpScale={1}
          normalMap={normalShirt}
          color={customize.color}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes["SWEATWR-MEIALUA_1"].geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2530.003"]}
      />
      <mesh
        geometry={nodes["SWEATWR-MEIALUA_2"].geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2530.003"]}
      />
      <mesh geometry={nodes["SWEATWR-PUNHO_1001"].geometry}>
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
        geometry={nodes["SWEATWR-PUNHO_1001_1"].geometry}
        material={materials["Rib_1X1_486gsm_FRONT_2548.001"]}
      />
      <mesh
        geometry={nodes["SWEATWR-PUNHO_1001_2"].geometry}
        material={materials["Rib_1X1_486gsm_FRONT_2548.001"]}
      />
      <mesh geometry={nodes["SWEATWR-PUNHO001"].geometry}>
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
        geometry={nodes["SWEATWR-PUNHO001_1"].geometry}
        material={materials["Rib_1X1_486gsm_FRONT_2548.001"]}
      />
      <mesh
        geometry={nodes["SWEATWR-PUNHO001_2"].geometry}
        material={materials["Rib_1X1_486gsm_FRONT_2548.001"]}
      />
    </group>
  );
}

// useGLTF.preload
("/models/SWEATWR_man/GU22SWEATWR_man.gltf");
useGLTF.preload(
  "/models/SWEATWR_man/tags/Man/label-45x45_black/label-45x45_black.gltf"
);
useGLTF.preload(
  "/models/SWEATWR_man/tags/Man/label-45x45_white/label-45x45_white.gltf"
);
useGLTF.preload(
  "/models/SWEATWR_man/tags/Man/label-55x30_black/label-55x30_black.gltf"
);
useGLTF.preload(
  "/models/SWEATWR_man/tags/Man/label-55x30_white/label-55x30_white.gltf"
);
useGLTF.preload(
  "/models/SWEATWR_man/tags/Man/print-label_black/print-label_black.gltf"
);
useGLTF.preload(
  "/models/SWEATWR_man/tags/Man/print-label_white/print-label_white.gltf"
);
