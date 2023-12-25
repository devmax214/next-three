import * as THREE from "three";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomizeContext } from "@/components/customize/context";
import { useFrame } from "@react-three/fiber";
import { promises } from "dns";
import { isEmpty } from "@/helpers/common";

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
    if (!isEmpty(customize.tag.file)) {
      loader.loadAsync(typeof customize.tag.file === "string" ? customize.tag.file : URL.createObjectURL(customize.tag.file)).then((result) => {
        setTagTexture(result);
      });
    }
  }, [customize.tag.file])

  const reverseIndex = [3], embelSize = 4, smallIndex = [2, 3];
  const setTextTexture = (factor = 1) => {
    let tmpTexture = texture;
    for (let i = 0; i < embelSize; i++) {
      if (customize.embellishment[i].type === "image") continue;
      const textCanvas = document.createElement("canvas");
      textCanvas.style.cssText = "border: 1px solid grey"
      const baseWidth = smallIndex.includes(i) ? 150 : 300;
      const baseHeight = smallIndex.includes(i) ? 300 : 400;
      const fontSize = smallIndex.includes(i) ? 16 : 30;
      const lineHeight = smallIndex.includes(i) ? 18 : 32;
      textCanvas.width = baseWidth * factor;
      textCanvas.height = baseHeight * factor;
      var ctx = textCanvas.getContext("2d");
      var fillTextX = 0, fillTextY = 0;
      const lines = customize.embellishment[i].textureText.split('\n');

      if (ctx !== null && customize.embellishment[i].font) {
        ctx.font = `${fontSize}pt ${customize.embellishment[i].font}`;
        ctx.scale(factor, factor);
        switch (customize.embellishment[i].position.type) {
          case 0:
            ctx.textAlign = 'left';
            ctx.textBaseline = 'middle';
            fillTextX = 0;
            fillTextY = (baseHeight - lineHeight * lines.length) / 2 + fontSize;
            break;
          case 1:
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            fillTextX = baseWidth / 2;
            fillTextY = (baseHeight - lineHeight * lines.length) / 2 + fontSize;
            break;
          case 2:
            ctx.textAlign = 'right';
            ctx.textBaseline = 'middle';
            fillTextX = baseWidth;
            fillTextY = (baseHeight - lineHeight * lines.length) / 2 + fontSize;
            break;
          case 3:
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            fillTextX = baseWidth / 2;
            fillTextY = fontSize;
            break;
          case 4:
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            fillTextX = baseWidth / 2;
            fillTextY = (baseHeight - lineHeight * lines.length) / 2 + fontSize;
            break;
          case 5:
            ctx.textAlign = 'center';
            ctx.textBaseline = 'bottom';
            fillTextX = baseWidth / 2;
            fillTextY = (baseHeight - lineHeight * lines.length) + fontSize;
            break;
        }
        for (let k = 0; k < lines.length; k++) {
          ctx.fillText(lines[k], fillTextX, fillTextY + (k * lineHeight));
        }

        const myTexture = new THREE.CanvasTexture(textCanvas);
        if (reverseIndex.includes(i)) {
          myTexture.wrapS = THREE.RepeatWrapping;
          myTexture.repeat.x = -1;
        }
        tmpTexture[i] = myTexture;
      }
      setTexture({ ...texture, ...tmpTexture });
    }
  }

  useEffect(() => {
    if (customize.embellishment[embelIndex].type === 'image') {
      if (!isEmpty(customize.embellishment[embelIndex].file))
        loader.loadAsync(typeof customize.embellishment[embelIndex].file === "string" ? customize.embellishment[embelIndex].file : URL.createObjectURL(customize.embellishment[embelIndex].file)).then((result) => {
          if (reverseIndex.includes(embelIndex)) {
            result.wrapS = THREE.RepeatWrapping;
            result.repeat.x = -1;
          }
          setTexture({ ...texture, [embelIndex]: result });
        })
    } else if (customize.embellishment[embelIndex].type === 'text') {
      setTextTexture();
    }
  }, [customize.embellishment[embelIndex].position, customize.embellishment[embelIndex].type, customize.embellishment[embelIndex].file, customize.embellishment[embelIndex].textureText, customize.embellishment[embelIndex].font]);

  useEffect(() => {
    let factor = 1;
    let tmpTexture = {
      0: new THREE.Texture(),
      1: new THREE.Texture(),
      2: new THREE.Texture(),
      3: new THREE.Texture(),
      4: new THREE.Texture(),
    };
    let tmpCtx = customize;
    if (props.ctx.embellishment) {
      tmpCtx = props.ctx;
    }
    let promises = [];
    let indexes = [];
    for (let i = 0; i < embelSize; i++) {
      if (tmpCtx.embellishment[i].type === 'image') {
        if (!isEmpty(tmpCtx.embellishment[i].file)) {
          indexes.push(i);
          promises.push(loader.loadAsync(typeof tmpCtx.embellishment[i].file === "string" ? tmpCtx.embellishment[i].file : URL.createObjectURL(tmpCtx.embellishment[i].file)))
        }

      } else if (tmpCtx.embellishment[i].type === 'text') {
        const textCanvas = document.createElement("canvas");
        textCanvas.style.cssText = "border: 1px solid grey"
        const baseWidth = smallIndex.includes(i) ? 200 : 250;
        const baseHeight = smallIndex.includes(i) ? 300 : 350;
        const fontSize = smallIndex.includes(i) ? 30 : 35;
        const lineHeight = smallIndex.includes(i) ? 32 : 37;
        textCanvas.width = baseWidth * factor;
        textCanvas.height = baseHeight * factor;
        var ctx = textCanvas.getContext("2d");
        var fillTextX = 0, fillTextY = 0;
        const lines = tmpCtx.embellishment[i].textureText.split('\n');

        if (ctx !== null && customize.embellishment[i].font) {
          ctx.font = `${fontSize}pt ${customize.embellishment[i].font}`;
          ctx.scale(factor, factor);
          switch (customize.embellishment[i].position.type) {
            case 0:
              ctx.textAlign = 'left';
              ctx.textBaseline = 'middle';
              fillTextX = 0;
              fillTextY = (baseHeight - lineHeight * lines.length) / 2 + fontSize;
              break;
            case 1:
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              fillTextX = baseWidth / 2;
              fillTextY = (baseHeight - lineHeight * lines.length) / 2 + fontSize;
              break;
            case 2:
              ctx.textAlign = 'right';
              ctx.textBaseline = 'middle';
              fillTextX = baseWidth;
              fillTextY = (baseHeight - lineHeight * lines.length) / 2 + fontSize;
              break;
            case 3:
              ctx.textAlign = 'center';
              ctx.textBaseline = 'top';
              fillTextX = baseWidth / 2;
              fillTextY = 0;
              break;
            case 4:
              ctx.textAlign = 'center';
              ctx.textBaseline = 'middle';
              fillTextX = baseWidth / 2;
              fillTextY = (baseHeight - lineHeight * lines.length) / 2 + fontSize;
              break;
            case 5:
              ctx.textAlign = 'center';
              ctx.textBaseline = 'bottom';
              fillTextX = baseWidth / 2;
              fillTextY = (baseHeight - lineHeight * lines.length) + fontSize;
              break;
          }
          for (let k = 0; k < lines.length; k++) {
            ctx.fillText(lines[k], fillTextX, fillTextY + (k * lineHeight));
          }

          const myTexture = new THREE.CanvasTexture(textCanvas);
          if (reverseIndex.includes(i)) {
            myTexture.wrapS = THREE.RepeatWrapping;
            myTexture.repeat.x = -1;
          }
          tmpTexture[i] = myTexture;
        }
      }
    }
    Promise.all(promises).then((result) => {
      for (let i = 0; i < result.length; i++) {
        if (reverseIndex.includes(indexes[i])) {
          result[i].wrapS = THREE.RepeatWrapping;
          result[i].repeat.x = -1;
        }
        tmpTexture[indexes[i]] = result[i];
      }
      setTexture({ ...texture, ...tmpTexture });
    });
  }, []);

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
                    map={!tagName.startsWith("print-label") && tagTexture}
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
    setTextTexture(zoomFactor)
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

  let scaleY = 0.018, scaleX = 0.038;
  try {
    scaleX = !tagTexture.source.data ? 0 : scaleY * tagTexture.source.data.naturalWidth / tagTexture.source.data.naturalHeight;
  } catch (error) { }
  var geometry = new THREE.BoxGeometry(scaleX, scaleY, 0); // give the cube it's dimensions (width, height, depth)
  var material = new THREE.MeshLambertMaterial({ transparent: true }); // creates material and gives it a color
  material.wireframe = false;
  material.map = tagTexture;

  return (
    <group position={[0, 0, 0]} {...props} dispose={null} ref={modelRef}>
      {customize.tag.edit && tagName.startsWith("print-label") && <mesh geometry={geometry} material={material} position={[0, 1.607, -0.08]} />}
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
          position={customize.embellishment[0].type === 'text' ? [0, 1.28, -0.24] : [0, 1.38, -0.24]}
          rotation={customize.embellishment[0].type === 'text' ? [THREE.MathUtils.degToRad(-10), THREE.MathUtils.degToRad(180), 0] : [THREE.MathUtils.degToRad(5), THREE.MathUtils.degToRad(180), 0]}
          scale={customize.embellishment[0].type === 'text' ? [0.34, 0.7, 1] : [0.23, 0.31, 0.26]}
        >
          <meshPhysicalMaterial
            transparent
            polygonOffset
            polygonOffsetFactor={-1}
            map={texture[0]}
            map-anisotropy={16}
          />
        </Decal>
      </mesh>
      <mesh geometry={nodes['SWEATWR-COSTA001_1'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-COSTA001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-FRENTE001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']}>
        <Decal
          position={customize.embellishment[1].type === 'text' ? [0, 1.29, 0.01] : [0, 1.38, 0.15]}
          rotation={[0, 0, 0]}
          scale={customize.embellishment[1].type === 'text' ? [0.31, 0.58, 0.31] : [0.23, 0.31, 0.26]}
        >
          <meshPhysicalMaterial
            transparent
            polygonOffset
            polygonOffsetFactor={-2}
            map={texture[1]}
            map-anisotropy={16}
          />
        </Decal>
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
          position={customize.embellishment[3].type === 'text' ? [-0.35, 1.265, -0.005] : [-0.3, 1.15, -0.005]}
          rotation={customize.embellishment[3].type === 'text' ? [THREE.MathUtils.degToRad(-5), THREE.MathUtils.degToRad(90), 0] : [THREE.MathUtils.degToRad(-10), THREE.MathUtils.degToRad(90), 0]}
          scale={customize.embellishment[3].type === 'text' ? [0.07, 0.52, 0.3] : [0.05, 0.26, 0.1]}
        >
          <meshPhysicalMaterial
            transparent
            polygonOffset
            polygonOffsetFactor={-2}
            map={texture[3]}
            map-anisotropy={16}
          />
        </Decal>
      </mesh>
      <mesh geometry={nodes['SWEATWR-MANGA_1001_1'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-MANGA_1001_2'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} />
      <mesh geometry={nodes['SWEATWR-MANGA001'].geometry} material={materials['Knit_Fleece_Terry_FRONT_2530.002']} >
        <Decal
          position={customize.embellishment[2].type === 'text' ? [0.35, 1.265, -0.02] : [0.3, 1.15, -0.005]}
          rotation={customize.embellishment[2].type === 'text' ? [THREE.MathUtils.degToRad(10), THREE.MathUtils.degToRad(90), THREE.MathUtils.degToRad(-14)] : [THREE.MathUtils.degToRad(-10), THREE.MathUtils.degToRad(90), 0]}
          scale={customize.embellishment[2].type === 'text' ? [0.07, 0.52, 0.25] : [0.05, 0.26, 0.1]}
        >
          <meshPhysicalMaterial
            transparent
            polygonOffset
            polygonOffsetFactor={-2}
            map={texture[2]}
            map-anisotropy={16}
          />
        </Decal>
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