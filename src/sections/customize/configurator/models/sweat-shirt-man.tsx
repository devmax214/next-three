import * as THREE from "three";
import React, { useCallback, useEffect, useState, useRef } from "react";
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
  const [texture, setTexture] = useState({
    0: new THREE.Texture(),
    1: new THREE.Texture(),
    2: new THREE.Texture(),
    3: new THREE.Texture(),
    4: new THREE.Texture(),
  }) as any;
  const [tagTexture, setTagTexture] = useState(new THREE.Texture()) as any;

  const modelRef = useRef<any>();
  const [zoomFactor, setZoomFactor] = useState<number>(1);

  useEffect(() => {
    if (customize.tag.file) {
      loader.loadAsync(URL.createObjectURL(customize.tag.file)).then((result) => {
        setTagTexture(result);
      });
    }
  }, [customize.tag.file])

  useEffect(() => {
    if (customize.embellishment[embelIndex].file)
      setTexture(loader.load(URL.createObjectURL(customize.embellishment[embelIndex].file)));
  }, [customize.embellishment[embelIndex].file]);

  const setTextTexture = (factor = 1) => {
    var textCanvas = document.createElement("canvas");
    textCanvas.width = 200 * factor;
    textCanvas.height = 200 * factor;
    var ctx = textCanvas.getContext("2d");
    var fontSize = embelIndex == 3 || embelIndex == 2 ? '15' : '30';
    if (ctx !== null && customize.embellishment[embelIndex].font) {
      ctx.fillStyle = "black";
      ctx.font = `${fontSize}px ${customize.embellishment[embelIndex].font}`;
      ctx.scale(factor, factor);
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
        const scaleX = !tagTexture.source.data ? 0 : scaleYZ * tagTexture.source.data.naturalWidth / tagTexture.source.data.naturalHeight;

        return (
          <group dispose={null} position={[0, 0, 0.001]}>
            {keys.map((key: string, idx: number) => (
              idx === 0 ? (
                <mesh name={`pattern_tag_${idx}`} geometry={nodes[key].geometry} material={material} key={key} position={[0, 0, tagName.startsWith("print") ? 0.002 : 0]}>
                  <Decal
                    position={[0, positionY, -0.085]}
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

  useEffect(() => {
    if (customize.tag.neck) {
      const newName = `label-${customize.tag.size}_${customize.tag.color ? "black" : "white"}`
      setTagName(newName);
    } else {
      setTagName(`print-label_${customize.tag.color ? "black" : "white"}`);
    }
  }, [customize.tag])

  useEffect(() => {
    setTextTexture(zoomFactor);
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
    <group position={[0, 0, 0]} {...props} dispose={null} ref={modelRef}>
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
      <mesh geometry={nodes['SWEATWR-COSTA001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} >
        <Decal
          position={[0, 1.38, -0.24]}
          rotation={[THREE.MathUtils.degToRad(5), THREE.MathUtils.degToRad(180), 0]}
          scale={[0.23, 0.31, 0.26]}
          map={texture[0]}
        />
      </mesh>
      <mesh geometry={nodes['SWEATWR-COSTA001_1'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-COSTA001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-FRENTE001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']}>
        <Decal
          position={[0, 1.38, 0.15]}
          rotation={[0, 0, 0]}
          scale={[0.23, 0.31, 0.26]}
          map={texture[1]}
        />
      </mesh>
      <mesh geometry={nodes['SWEATWR-FRENTE001_1'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-FRENTE001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-GOLA_2001'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']}>
        {customize.tag.edit ? tag() : ""}
      </mesh>
      <mesh geometry={nodes['SWEATWR-GOLA_2001_1'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']} />
      <mesh geometry={nodes['SWEATWR-GOLA_2001_2'].geometry} material={materials['Rib_1X1_486gsm_FRONT_2548.001']} />
      <mesh geometry={nodes['SWEATWR-MANGA_1001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} >
        <Decal
          position={[-0.3, 1.15, -0.005]}
          rotation={[THREE.MathUtils.degToRad(-10), 0, 0]}
          scale={[0.05, 0.26, 0.066]}
          map={texture[3]}
        />
      </mesh>
      <mesh geometry={nodes['SWEATWR-MANGA_1001_1'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-MANGA_1001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-MANGA001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} >
        <Decal
          position={[0.3, 1.15, -0.005]}
          rotation={[THREE.MathUtils.degToRad(-10), 0, 0]}
          scale={[0.05, 0.26, 0.066]}
          map={texture[2]}
        />
      </mesh>
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
useGLTF.preload("/models/SWEATWR_man/tags/Man/label-45x45_black/label-45x45_black.gltf")
useGLTF.preload("/models/SWEATWR_man/tags/Man/label-45x45_white/label-45x45_white.gltf")
useGLTF.preload("/models/SWEATWR_man/tags/Man/label-55x30_black/label-55x30_black.gltf")
useGLTF.preload("/models/SWEATWR_man/tags/Man/label-55x30_white/label-55x30_white.gltf")
useGLTF.preload("/models/SWEATWR_man/tags/Man/print-label_black/print-label_black.gltf")
useGLTF.preload("/models/SWEATWR_man/tags/Man/print-label_white/print-label_white.gltf")