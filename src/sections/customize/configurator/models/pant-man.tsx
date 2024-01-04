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
    StitchMatShape_25119_Node: THREE.Mesh;
    StitchMatShape_25332_Node: THREE.Mesh;
    StitchMatShape_25545_Node: THREE.Mesh;
    StitchMatShape_25758_Node: THREE.Mesh;
    StitchMatShape_25971_Node: THREE.Mesh;
    StitchMatShape_26154_Node: THREE.Mesh;
    StitchMatShape_26367_Node: THREE.Mesh;
    StitchMatShape_26580_Node: THREE.Mesh;
    StitchMatShape_26793_Node: THREE.Mesh;
    StitchMatShape_27006_Node: THREE.Mesh;
    StitchMatShape_27082_Node: THREE.Mesh;
    StitchMatShape_27153_Node: THREE.Mesh;
    StitchMatShape_27238_Node: THREE.Mesh;
    StitchMatShape_27307_Node: THREE.Mesh;
    StitchMatShape_27392_Node: THREE.Mesh;
    StitchMatShape_27485_Node: THREE.Mesh;
    StitchMatShape_27493_Node: THREE.Mesh;
    StitchMatShape_27501_Node: THREE.Mesh;
    StitchMatShape_27555_Node: THREE.Mesh;
    StitchMatShape_27625_Node: THREE.Mesh;
    StitchMatShape_27684_Node: THREE.Mesh;
    StitchMatShape_27759_Node: THREE.Mesh;
    StitchMatShape_27842_Node: THREE.Mesh;
    StitchMatShape_27850_Node: THREE.Mesh;
    StitchMatShape_27858_Node: THREE.Mesh;
    WRCALCA_BOLSO001: THREE.Mesh;
    WRCALCA_BOLSO001_1: THREE.Mesh;
    WRCALCA_BOLSO001_2: THREE.Mesh;
    WRCALCABOLINF_1001: THREE.Mesh;
    WRCALCABOLINF_1001_1: THREE.Mesh;
    WRCALCABOLINF_1001_2: THREE.Mesh;
    WRCALCABOLINF001: THREE.Mesh;
    WRCALCABOLINF001_1: THREE.Mesh;
    WRCALCABOLINF001_2: THREE.Mesh;
    WRCALCABOLSUP_1001: THREE.Mesh;
    WRCALCABOLSUP_1001_1: THREE.Mesh;
    WRCALCABOLSUP_1001_2: THREE.Mesh;
    WRCALCABOLSUP001: THREE.Mesh;
    WRCALCABOLSUP001_1: THREE.Mesh;
    WRCALCABOLSUP001_2: THREE.Mesh;
    WRCALCACNTCOS001: THREE.Mesh;
    WRCALCACNTCOS001_1: THREE.Mesh;
    WRCALCACNTCOS001_2: THREE.Mesh;
    WRCALCACNTFRE001: THREE.Mesh;
    WRCALCACNTFRE001_1: THREE.Mesh;
    WRCALCACNTFRE001_2: THREE.Mesh;
    WRCALCACSDI_1001: THREE.Mesh;
    WRCALCACSDI_1001_1: THREE.Mesh;
    WRCALCACSDI_1001_2: THREE.Mesh;
    WRCALCACSDI_2001: THREE.Mesh;
    WRCALCACSDI_2001_1: THREE.Mesh;
    WRCALCACSDI_2001_2: THREE.Mesh;
    WRCALCACSDI_3001: THREE.Mesh;
    WRCALCACSDI_3001_1: THREE.Mesh;
    WRCALCACSDI_3001_2: THREE.Mesh;
    WRCALCACSDI_4001: THREE.Mesh;
    WRCALCACSDI_4001_1: THREE.Mesh;
    WRCALCACSDI_4001_2: THREE.Mesh;
    WRCALCAFRE_1001: THREE.Mesh;
    WRCALCAFRE_1001_1: THREE.Mesh;
    WRCALCAFRE_1001_2: THREE.Mesh;
    WRCALCAFRE_2001: THREE.Mesh;
    WRCALCAFRE_2001_1: THREE.Mesh;
    WRCALCAFRE_2001_2: THREE.Mesh;
    WRCALCAFRE_3001: THREE.Mesh;
    WRCALCAFRE_3001_1: THREE.Mesh;
    WRCALCAFRE_3001_2: THREE.Mesh;
    WRCALCAFRE_4001: THREE.Mesh;
    WRCALCAFRE_4001_1: THREE.Mesh;
    WRCALCAFRE_4001_2: THREE.Mesh;
  };
  materials: {
    Material3558: THREE.MeshStandardMaterial;
    Material3004: THREE.MeshStandardMaterial;
    Material3280: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2649.005"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_BACK_2649.005"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2649.007"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_BACK_2649.007"]: THREE.MeshStandardMaterial;
    Knit_Fleece_Terry_FRONT_2649: THREE.MeshStandardMaterial;
    Knit_Fleece_Terry_BACK_2649: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2649.009"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_BACK_2649.009"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2649.001"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_BACK_2649.001"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2649.004"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_BACK_2649.004"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2649.003"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_BACK_2649.003"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2649.015"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_BACK_2649.015"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2603.009"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2649.013"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_BACK_2649.013"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2603.015"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2603.012"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2649.011"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_BACK_2649.011"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2603.006"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_FRONT_2649.016"]: THREE.MeshStandardMaterial;
    ["Knit_Fleece_Terry_BACK_2649.016"]: THREE.MeshStandardMaterial;
  };
};

export default function PANTManModel(props: any) {
  const customize = useCustomizeContext();
  const { embelIndex, canvasRef, textureRef, canvasRenderedRef, controlsRef } = props;

  const [tagName, setTagName] = useState("");
  const [tagTexture, setTagTexture] = useState(new THREE.Texture()) as any;

  let loader = new THREE.TextureLoader();
  loader.setCrossOrigin("");

  const { nodes, materials } = useGLTF(
    "/models/PANTWR_man/PANTS_MAN2.glb"
  ) as GLTFResult;

  const tag = useCallback(() => {
    try {
      if (!!tagName) {
        const { nodes, materials } = useGLTF(
          `/models/PANTWR_man/tags/Man/${tagName}/${tagName}.glb`
        ) as any;

        const material: any = materials[Object.keys(materials)[0]];
        let keys: string[] = Object.keys(nodes);
        keys = keys.filter((key) => nodes[key].isMesh);
        const positionY = customize.tag.size.startsWith("45x45")
          ? 1.088
          : customize.tag.size.startsWith("55")
            ? 1.094
            : 1.615;
        const scaleYZ = customize.tag.size.startsWith("45x45")
          ? 0.02
          : customize.tag.size.startsWith("55")
            ? 0.017
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
                    position={[-0.0025, positionY, -0.105]}
                    rotation={[0, 0, 0]}
                    scale={[scaleX, scaleYZ, scaleYZ]}
                    map={tagTexture}
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

  const cord = useCallback(() => {
    try {
      if (!!customize.cord) {
        const { nodes, materials } = useGLTF(
          `/models/PANTWR_man/cords/Man/${customize.cord}/${customize.cord}.glb`
        ) as any;

        const keys: string[] = Object.keys(nodes);
        const material: any = materials[Object.keys(materials)[0]];

        return (
          <group {...props} dispose={null} position={[0, 0, -0.0025]}>
            {keys.map((key: string, idx: number) => (
              <mesh
                name={`cords_${idx}`}
                geometry={nodes[key].geometry}
                material={material}
                key={key}
              />
            ))}
          </group>
        );
      } else return "";
    } catch (err) {
      console.log(err);
    }
  }, [customize.cord]);

  const cordTipItem = useCallback(() => {
    try {
      if (!!customize.cord && !!customize.cordTip) {
        if (customize.cordTip === "mental_end") {
          const { nodes, materials } = useGLTF(
            `/models/PANTWR_man/cords/Man/${customize.cord}/${customize.cordTip}/${customize.cordTip}.glb`
          ) as any;
          switch (customize.cord) {
            case "Cord1":
              return (
                <group {...props} dispose={null} position={[0, 0, -0.004]}>
                  <mesh
                    geometry={nodes.MatShape_87974_Node.geometry}
                    material={materials["Material4631.002"]}
                    position={[0.278, -0.351, -0.351]}
                    rotation={[0.081, 0.243, 0.289]}
                    scale={[1.458, 0.959, 1.458]}
                  />
                  <mesh
                    geometry={nodes.MatShape_89430_Node.geometry}
                    material={materials["Material4631.002"]}
                    position={[-0.279, -0.431, 0.114]}
                    rotation={[-2.902, -0.142, -2.874]}
                    scale={[1.458, 0.959, 1.458]}
                  />
                </group>
              );
              break;
            case "Cord2":
              return (
                <group {...props} dispose={null} position={[0, 0, -0.004]}>
                  <mesh
                    geometry={nodes.MatShape_78808_Node.geometry}
                    material={materials["Material4631.006"]}
                    position={[-0.283, -0.333, -0.38]}
                    rotation={[-2.979, 1.532, -2.851]}
                    scale={[1.458, 0.959, 1.458]}
                  />
                  <mesh
                    geometry={nodes.MatShape_98967_Node.geometry}
                    material={materials["Material98960.002"]}
                    position={[-0.013, 0.908, 0.115]}
                    rotation={[0.34, -0.046, 0.225]}
                  />
                </group>
              );
              break;
            case "Cord3":
              return (
                <group {...props} dispose={null} position={[0, 0, -0.004]}>
                  <mesh
                    geometry={nodes.MatShape_87974_Node.geometry}
                    material={materials["Material4631.008"]}
                    position={[0.278, -0.351, -0.351]}
                    rotation={[0.081, 0.243, 0.289]}
                    scale={[1.458, 0.959, 1.458]}
                  />
                  <mesh
                    geometry={nodes.MatShape_89430_Node.geometry}
                    material={materials["Material4631.008"]}
                    position={[-0.279, -0.431, 0.114]}
                    rotation={[-2.902, -0.142, -2.874]}
                    scale={[1.458, 0.959, 1.458]}
                  />
                </group>
              );
              break;
            case "Cord4":
              return (
                <group {...props} dispose={null} position={[0, 0, -0.004]}>
                  <mesh
                    geometry={nodes.MatShape_87974_Node.geometry}
                    material={materials["Material4631.010"]}
                    position={[0.278, -0.351, -0.351]}
                    rotation={[0.081, 0.243, 0.289]}
                    scale={[1.458, 0.959, 1.458]}
                  />
                  <mesh
                    geometry={nodes.MatShape_89430_Node.geometry}
                    material={materials["Material4631.010"]}
                    position={[-0.279, -0.431, 0.114]}
                    rotation={[-2.902, -0.142, -2.874]}
                    scale={[1.458, 0.959, 1.458]}
                  />
                </group>
              );
              break;
            default:
              break;
          }
          return null;
        }
        const { nodes, materials } = useGLTF(
          `/models/PANTWR_man/cords/Man/${customize.cord}/${customize.cordTip}/${customize.cordTip}.gltf`
        ) as any;

        const keys: string[] = Object.keys(nodes);
        const material: any = materials[Object.keys(materials)[0]];
        return (
          <group
            {...props}
            dispose={null}
            position={[
              0,
              0,
              customize.cordTip === "silicone_end" ? -0.007 : -0.005,
            ]}
          >
            {keys.map((key: string, idx: number) => (
              <mesh
                name={`cords_${idx}`}
                geometry={nodes[key].geometry}
                material={material}
                key={key}
              />
            ))}
          </group>
        );
      } else return null;
    } catch (err) {
      return null;
    }
  }, [customize.cordTip, customize.cord]);

  useEffect(() => {
    if (customize.tag.neck)
      setTagName(
        `label-${customize.tag.size}_${customize.tag.color ? "black" : "white"}`
      );
    else setTagName(`print-label_${customize.tag.color ? "black" : "white"}`);
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

  /*
    30 DECEMBER 2023
    NAO ADDING RAYCAST FEATURE
  */
  const { bumpOutMap, normalOutMap, bumpInMap, normalInMap } = useCustomTextures();
  const { camera, gl, raycaster, scene, mouse, pointer } = useThree();
  useRaycast(
    controlsRef,
    canvasRef,
    canvasRenderedRef,
    textureRef,
    "Pants",
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
      <mesh
        geometry={nodes.StitchMatShape_25119_Node.geometry}
        material={materials.Material3558}
      >
        {customize.tag.edit ? tag() : ""}
      </mesh>
      <mesh
        geometry={nodes.StitchMatShape_25332_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_25545_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_25758_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_25971_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_26154_Node.geometry}
        material={materials.Material3558}
      />
      <mesh
        geometry={nodes.StitchMatShape_26367_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_26580_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_26793_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_27006_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_27082_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_27153_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_27238_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_27307_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_27392_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_27485_Node.geometry}
        material={materials.Material3280}
      />
      <mesh
        geometry={nodes.StitchMatShape_27493_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_27501_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_27555_Node.geometry}
        material={materials.Material3558}
      />
      <mesh
        geometry={nodes.StitchMatShape_27625_Node.geometry}
        material={materials.Material3558}
      />
      <mesh
        geometry={nodes.StitchMatShape_27684_Node.geometry}
        material={materials.Material3558}
      />
      <mesh
        geometry={nodes.StitchMatShape_27759_Node.geometry}
        material={materials.Material3558}
      />
      <mesh
        geometry={nodes.StitchMatShape_27842_Node.geometry}
        material={materials.Material3280}
      />
      <mesh
        geometry={nodes.StitchMatShape_27850_Node.geometry}
        material={materials.Material3004}
      />
      <mesh
        geometry={nodes.StitchMatShape_27858_Node.geometry}
        material={materials.Material3004}
      />

      <mesh
        geometry={nodes.WRCALCA_BOLSO001_1.geometry}
        material={materials["Knit_Fleece_Terry_BACK_2649.005"]}
      />
      <mesh
        geometry={nodes.WRCALCA_BOLSO001_2.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2649.005"]}
      />
      <mesh
        geometry={nodes.WRCALCABOLINF_1001.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2649.007"]}
      />
      <mesh
        geometry={nodes.WRCALCABOLINF_1001_1.geometry}>
        <FabricEditableTexture
          bumpMap={bumpInMap}
          normalScale={0.001}
          color={customize.color}
          normalMap={normalInMap}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.WRCALCABOLINF_1001_2.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2649.007"]}
      />
      <mesh
        geometry={nodes.WRCALCABOLINF001.geometry}
        material={materials.Knit_Fleece_Terry_FRONT_2649}
      />
      <mesh
        geometry={nodes.WRCALCABOLINF001_1.geometry}>
        <FabricEditableTexture
          bumpMap={bumpInMap}
          normalScale={0.001}
          color={customize.color}
          normalMap={normalInMap}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.WRCALCABOLINF001_2.geometry}
        material={materials.Knit_Fleece_Terry_FRONT_2649}
      />
      <mesh
        geometry={nodes.WRCALCABOLSUP_1001.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2649.009"]}
      />
      <mesh
        geometry={nodes.WRCALCABOLSUP_1001_1.geometry}
        material={materials["Knit_Fleece_Terry_BACK_2649.009"]}
      />
      <mesh
        geometry={nodes.WRCALCABOLSUP_1001_2.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2649.009"]}
      />
      <mesh
        geometry={nodes.WRCALCABOLSUP001.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2649.001"]}
      />
      <mesh
        geometry={nodes.WRCALCABOLSUP001_1.geometry}
        material={materials["Knit_Fleece_Terry_BACK_2649.001"]}
      />
      <mesh
        geometry={nodes.WRCALCABOLSUP001_2.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2649.001"]}
      />
      <mesh
        geometry={nodes.WRCALCACNTCOS001.geometry}>
        <FabricEditableTexture
          bumpMap={bumpOutMap}
          normalScale={0.001}
          color={customize.color}
          normalMap={normalOutMap}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.WRCALCACNTCOS001_1.geometry}
        material={materials["Knit_Fleece_Terry_BACK_2649.004"]}
      />
      <mesh
        geometry={nodes.WRCALCACNTCOS001_2.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2649.004"]}
      />
      <mesh
        geometry={nodes.WRCALCACNTFRE001.geometry}>
        <FabricEditableTexture
          bumpMap={bumpOutMap}
          normalScale={0.001}
          color={customize.color}
          normalMap={normalOutMap}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.WRCALCACNTFRE001_1.geometry}
        material={materials["Knit_Fleece_Terry_BACK_2649.003"]}
      >
        {cord()}
        {cordTipItem()}
      </mesh>
      <mesh
        geometry={nodes.WRCALCACNTFRE001_2.geometry}>
        <FabricEditableTexture
          bumpMap={bumpOutMap}
          normalScale={0.001}
          color={customize.color}
          normalMap={normalOutMap}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>

      <mesh
        geometry={nodes.WRCALCACSDI_1001_1.geometry}>
        <FabricEditableTexture
          bumpMap={bumpInMap}
          normalScale={0.001}
          color={customize.color}
          normalMap={normalInMap}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.WRCALCACSDI_1001_2.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2649.015"]}
      />
      <mesh geometry={nodes.WRCALCA_BOLSO001.geometry}>
        <FabricEditableTexture
          canvasRef={canvasRef}
          textureRef={textureRef}
          normalMap={normalOutMap}
          bumpMap={bumpOutMap}
        />
      </mesh>
      <mesh geometry={nodes.WRCALCACSDI_1001.geometry}>
        <FabricEditableTexture
          bumpMap={bumpOutMap}
          normalMap={normalOutMap}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh geometry={nodes.WRCALCAFRE_2001.geometry}>
        <FabricEditableTexture
          canvasRef={canvasRef}
          textureRef={textureRef}
          normalMap={normalOutMap}
          bumpMap={bumpOutMap}
        />
      </mesh>
      <mesh geometry={nodes.WRCALCACSDI_3001.geometry}>
        <FabricEditableTexture
          canvasRef={canvasRef}
          textureRef={textureRef}
          normalMap={normalOutMap}
          bumpMap={bumpOutMap}
        />
      </mesh>
      <mesh geometry={nodes.WRCALCAFRE_4001.geometry}>
        <FabricEditableTexture
          canvasRef={canvasRef}
          textureRef={textureRef}
          normalMap={normalOutMap}
          bumpMap={bumpOutMap}
        />
      </mesh>
      <mesh
        geometry={nodes.WRCALCACSDI_2001.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2603.009"]}
      />
      <mesh
        geometry={nodes.WRCALCACSDI_2001_1.geometry}>
        <FabricEditableTexture
          bumpMap={bumpInMap}
          normalScale={0.001}
          color={customize.color}
          normalMap={normalInMap}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.WRCALCACSDI_2001_2.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2603.009"]}
      />

      <mesh
        geometry={nodes.WRCALCACSDI_3001_1.geometry}>
        <FabricEditableTexture
          bumpMap={bumpInMap}
          normalScale={0.001}
          color={customize.color}
          normalMap={normalInMap}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.WRCALCACSDI_3001_2.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2649.013"]}
      />
      <mesh
        geometry={nodes.WRCALCACSDI_4001.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2603.015"]}
      />
      <mesh
        geometry={nodes.WRCALCACSDI_4001_1.geometry}>
        <FabricEditableTexture
          bumpMap={bumpInMap}
          normalScale={0.001}
          color={customize.color}
          normalMap={normalInMap}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.WRCALCACSDI_4001_2.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2603.015"]}
      />
      <mesh
        geometry={nodes.WRCALCAFRE_1001.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2603.012"]}
      />
      <mesh
        geometry={nodes.WRCALCAFRE_1001_1.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2603.012"]}
      />
      <mesh
        geometry={nodes.WRCALCAFRE_1001_2.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2603.012"]}
      />

      <mesh
        geometry={nodes.WRCALCAFRE_2001_1.geometry}>
        <FabricEditableTexture
          bumpMap={bumpInMap}
          normalScale={0.001}
          color={customize.color}
          normalMap={normalInMap}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.WRCALCAFRE_2001_2.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2649.011"]}
      />
      <mesh
        geometry={nodes.WRCALCAFRE_3001.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2603.006"]}
      />
      <mesh
        geometry={nodes.WRCALCAFRE_3001_1.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2603.006"]}
      />
      <mesh
        geometry={nodes.WRCALCAFRE_3001_2.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2603.006"]}
      />

      <mesh
        geometry={nodes.WRCALCAFRE_4001_1.geometry}>
        <FabricEditableTexture
          bumpMap={bumpInMap}
          normalScale={0.001}
          color={customize.color}
          normalMap={normalInMap}
          canvasRef={canvasRef}
          textureRef={textureRef}
        />
      </mesh>
      <mesh
        geometry={nodes.WRCALCAFRE_4001_2.geometry}
        material={materials["Knit_Fleece_Terry_FRONT_2649.016"]}
      />
    </group>
  );
}

// useGLTF.preload
("/models/PANTWR_man/GU22PANTSWR_man.gltf");
useGLTF.preload(
  "/models/PANTWR_man/tags/Man/label-45x45_black/label-45x45_black.glb"
);
useGLTF.preload(
  "/models/PANTWR_man/tags/Man/label-45x45_white/label-45x45_white.glb"
);
useGLTF.preload(
  "/models/PANTWR_man/tags/Man/label-55x30_black/label-55x30_black.glb"
);
useGLTF.preload(
  "/models/PANTWR_man/tags/Man/label-55x30_white/label-55x30_white.glb"
);
useGLTF.preload("/models/PANTWR_man/cords/Man/Cord1/Cord1.glb");
useGLTF.preload("/models/PANTWR_man/cords/Man/Cord2/Cord2.glb");
useGLTF.preload("/models/PANTWR_man/cords/Man/Cord3/Cord3.glb");
useGLTF.preload("/models/PANTWR_man/cords/Man/Cord4/Cord4.glb");

useGLTF.preload("/models/PANTWR_man/cords/Man/Cord1/mental_end/mental_end.glb");
useGLTF.preload(
  "/models/PANTWR_man/cords/Man/Cord1/plastic_end/plastic_end.gltf"
);
useGLTF.preload(
  "/models/PANTWR_man/cords/Man/Cord1/silicone_end/silicone_end.gltf"
);

useGLTF.preload("/models/PANTWR_man/cords/Man/Cord2/mental_end/mental_end.glb");
useGLTF.preload(
  "/models/PANTWR_man/cords/Man/Cord2/plastic_end/plastic_end.gltf"
);
useGLTF.preload(
  "/models/PANTWR_man/cords/Man/Cord2/silicone_end/silicone_end.gltf"
);

useGLTF.preload("/models/PANTWR_man/cords/Man/Cord3/mental_end/mental_end.glb");
useGLTF.preload(
  "/models/PANTWR_man/cords/Man/Cord3/plastic_end/plastic_end.gltf"
);
useGLTF.preload(
  "/models/PANTWR_man/cords/Man/Cord3/silicone_end/silicone_end.gltf"
);

useGLTF.preload("/models/PANTWR_man/cords/Man/Cord4/mental_end/mental_end.glb");
useGLTF.preload(
  "/models/PANTWR_man/cords/Man/Cord4/plastic_end/plastic_end.gltf"
);
useGLTF.preload(
  "/models/PANTWR_man/cords/Man/Cord4/silicone_end/silicone_end.gltf"
);
