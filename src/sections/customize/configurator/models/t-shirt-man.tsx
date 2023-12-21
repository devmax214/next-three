import * as THREE from "three";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomizeContext } from "@/components/customize/context";
import { isEmpty } from "@/helpers/common";
import { useFrame } from "@react-three/fiber";
import { Texture } from "@mui/icons-material";

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

  const modelRef = useRef<any>();
  const [zoomFactor, setZoomFactor] = useState<number>(1);

  useEffect(() => {
    if (!isEmpty(customize.tag.file)) {
      loader.loadAsync(typeof customize.tag.file === "string" ? customize.tag.file : URL.createObjectURL(customize.tag.file)).then((result) => {
        setTagTexture(result);
      });

    }
  }, [customize.tag.file])

  const reverseIndex = [2, 3], embelSize = 4, smallIndex = [2, 3];
  const setTextTexture = (factor = 1) => {
    let tmpTexture = texture;
    for (let i = 0; i < embelSize; i++) {
      if (customize.embellishment[i].type === "image") continue;
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
        } else {
          tmpTexture[i] = new THREE.Texture();
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

        if (ctx !== null && tmpCtx.embellishment[i].font) {
          ctx.font = `${fontSize}pt ${tmpCtx.embellishment[i].font}`;
          ctx.scale(factor, factor);
          switch (tmpCtx.embellishment[i].position.type) {
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
        const scaleX = !tagTexture.source.data ? 0 : scaleYZ * tagTexture.source.data.naturalWidth / tagTexture.source.data.naturalHeight;

        return (
          <group dispose={null}>
            {keys.map((key: string, idx: number) => (
              idx === 0 ? (
                <mesh name={`pattern_tag_${idx}`} position={[0, 0, 0.01]} geometry={nodes[key].geometry} material={material} key={key}>
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

  let scaleY = 0.021, scaleX = 0.043;
  try {
    scaleX = !tagTexture.source.data ? 0 : scaleY * tagTexture.source.data.naturalWidth / tagTexture.source.data.naturalHeight;
  } catch (error) { }
  var geometry = new THREE.BoxGeometry(scaleX, scaleY, 0); // give the cube it's dimensions (width, height, depth)
  var material = new THREE.MeshLambertMaterial({ transparent: true }); // creates material and gives it a color
  material.wireframe = false;
  material.map = tagTexture;

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