import * as THREE from "three";
import React, { useCallback, useEffect, useState, useRef } from "react";
import { Decal, useGLTF, useTexture } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { useCustomizeContext } from "@/components/customize/context";
import { useFrame } from "@react-three/fiber";
import { isEmpty } from "@/helpers/common";

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

  const modelRef = useRef<any>();
  const [zoomFactor, setZoomFactor] = useState<number>(1);

  let loader = new THREE.TextureLoader();
  loader.setCrossOrigin("");

  useEffect(() => {
    if (!isEmpty(customize.tag.file)) {
      loader.loadAsync(typeof customize.tag.file === "string" ? customize.tag.file : URL.createObjectURL(customize.tag.file)).then((result) => {
        setTagTexture(result);
      });
    }
  }, [customize.tag.file])

  const reverseIndex = [2, 3, 4], embelSize = 5, smallIndex = [3, 4];
  const setTextTexture = (factor = 1) => {
    let tmpTexture = texture;
    for (let i = 0; i < embelSize; i++) {
      if (customize.embellishment[i].type === "image") continue;
      const textCanvas = document.createElement("canvas");
      textCanvas.style.cssText = "border: 1px solid grey"
      const baseWidth = smallIndex.includes(i) ? 100 : 150;
      const baseHeight = smallIndex.includes(i) ? 200 : 250;
      const fontSize = smallIndex.includes(i) ? 16 : 24;
      const lineHeight = smallIndex.includes(i) ? 18 : 26;
      textCanvas.width = baseWidth * factor;
      textCanvas.height = baseHeight * factor;
      var ctx = textCanvas.getContext("2d");
      var fillTextX = 0, fillTextY = 0;
      const lines = customize.embellishment[i].textureText.split('\n');

      if (ctx !== null && customize.embellishment[i].font) {
        ctx.font = `${fontSize}pt '${customize.embellishment[i].font}'`;
        ctx.scale(factor, factor);
        const ele = document.getElementsByTagName('header')
        ele.item(0)?.style.setProperty("fontFamily", customize.embellishment[i].font);
        ele.item(0)?.style.setProperty("backgroundColor", 'red');
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
        }
      } else if (tmpCtx.embellishment[i].type === 'text') {
        const textCanvas = document.createElement("canvas");
        textCanvas.style.cssText = "border: 1px solid grey"
        const baseWidth = smallIndex.includes(i) ? 100 : 150;
        const baseHeight = smallIndex.includes(i) ? 200 : 250;
        const fontSize = smallIndex.includes(i) ? 16 : 24;
        const lineHeight = smallIndex.includes(i) ? 18 : 26;
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
    "/models/SHORTWR_man/Shorts.glb"
  ) as GLTFResult;

  if (customize.color.length > 0) {
    // const rgb = hexToRgba(customize.color)
    // const color = new THREE.Color(rgb.r, rgb.g, rgb.b);
    const color = customize.color;
    for (let key in materials) {
      delete materials[key]['_listeners'];
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
        const scaleYZ = customize.tag.size.startsWith("45x45") ? 0.02 : customize.tag.size.startsWith("55") ? 0.017 : 0.025;
        const scaleX = !tagTexture.source.data ? 0 : scaleYZ * tagTexture.source.data.naturalWidth / tagTexture.source.data.naturalHeight;

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
      if (!!customize.cord) {
        const { nodes, materials } = useGLTF(
          `/models/SHORTWR_man/cords/Man/${customize.cord}/${customize.cord}.glb`
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
  }, [customize.cord]);

  const cordTipItem = useCallback(() => {
    try {
      if (!!customize.cord && !!customize.cordTip) {
        if (customize.cordTip === 'mental_end') {
          const { nodes, materials } = useGLTF(
            `/models/SHORTWR_man/cords/Man/${customize.cord}/${customize.cordTip}/${customize.cordTip}.glb`
          ) as any;
          switch (customize.cord) {
            case "Cord1":
              return (
                <group {...props} dispose={null}>
                  <mesh geometry={nodes.MatShape_47733_Node.geometry} material={materials.Material4631} position={[0.223, -0.038, -0.271]} rotation={[0.173, -0.378, 0.17]} scale={[1.31, 0.74, 1.31]} />
                  <mesh geometry={nodes.MatShape_51848_Node.geometry} material={materials.Material4631} position={[-0.28, -0.057, -0.193]} rotation={[-0.032, -0.257, -0.236]} scale={[1.31, 0.74, 1.31]} />
                </group>
              )
              break;
            case "Cord2":
              return (
                <group {...props} dispose={null}>
                  <mesh geometry={nodes.MatShape_35688_Node.geometry} material={materials['Material4631.001']} position={[0.245, -0.293, -0.255]} rotation={[-2.512, 0.488, 2.887]} scale={[1.332, 0.916, 1.332]} />
                  <mesh geometry={nodes.MatShape_64172_Node.geometry} material={materials['Material4631.001']} position={[0.225, -0.126, -0.59]} rotation={[0.539, -1.074, 0.12]} scale={[1.332, 0.916, 1.332]} />
                </group>
              )
              break;
            case "Cord3":
              return (
                <group {...props} dispose={null}>
                  <mesh geometry={nodes.MatShape_47733_Node.geometry} material={materials['Material4631.003']} position={[0.223, -0.038, -0.272]} rotation={[0.173, -0.378, 0.17]} scale={[1.31, 0.74, 1.31]} />
                  <mesh geometry={nodes.MatShape_51848_Node.geometry} material={materials['Material4631.003']} position={[-0.2794, -0.057, -0.195]} rotation={[-0.032, -0.257, -0.236]} scale={[1.31, 0.74, 1.31]} />
                </group>
              )
              break;
            case "Cord4":
              return (
                <group {...props} dispose={null}>
                  <mesh geometry={nodes.MatShape_47733_Node.geometry} material={materials['Material4631.004']} position={[0.224, -0.046, -0.273]} rotation={[0.173, -0.378, 0.17]} scale={[1.31, 0.74, 1.31]} />
                  <mesh geometry={nodes.MatShape_51848_Node.geometry} material={materials['Material4631.004']} position={[-0.282, -0.069, -0.197]} rotation={[-0.032, -0.257, -0.236]} scale={[1.31, 0.74, 1.31]} />
                </group>
              )
              break;
            default:
              break;
          }
          return null;
        } else if (customize.cordTip === 'plastic_end') {
          const { nodes, materials } = useGLTF(
            `/models/SHORTWR_man/cords/Man/${customize.cord}/${customize.cordTip}/${customize.cordTip}.glb`
          ) as any;
          switch (customize.cord) {
            case "Cord1":
              return (
                <group {...props} dispose={null}>
                  <group {...props} dispose={null} position={[0, -0.022, -0.007]} >
                    <mesh geometry={nodes.Pattern2D_244421002.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2628']} />
                    <mesh geometry={nodes.Pattern2D_244421002_1.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2628']} />
                    <mesh geometry={nodes.Pattern2D_244421002_2.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2628']} />
                  </group>
                  <group {...props} dispose={null} position={[0.005, -0.0165, -0.008]} >
                    <mesh geometry={nodes.Pattern2D_244423.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2628.002']} />
                    <mesh geometry={nodes.Pattern2D_244423_1.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2628.002']} />
                    <mesh geometry={nodes.Pattern2D_244423_2.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2628.002']} />
                  </group>
                </group>
              )
              break;
            case "Cord2":
              return (
                <group {...props} dispose={null}>
                  <group {...props} dispose={null} position={[-0.03, 0.01, -0.008]}>
                    <mesh geometry={nodes.Pattern2D_244424.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2670']} />
                    <mesh geometry={nodes.Pattern2D_244424_1.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2670']} />
                    <mesh geometry={nodes.Pattern2D_244424_2.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2670']} />
                  </group>
                  <group {...props} dispose={null} position={[0.00, 0, -0.002]}>
                    <mesh geometry={nodes.Pattern2D_244425.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2670.002']} />
                    <mesh geometry={nodes.Pattern2D_244425_1.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2670.002']} />
                    <mesh geometry={nodes.Pattern2D_244425_2.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2670.002']} />
                  </group>
                </group>
              )
              break;
            case "Cord3":
              return (
                <group {...props} dispose={null}>
                  <group {...props} dispose={null} position={[0, -0.027, -0.003]}>
                    <mesh geometry={nodes.Pattern2D_244421009.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2670.004']} />
                    <mesh geometry={nodes.Pattern2D_244421009_1.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2670.004']} />
                    <mesh geometry={nodes.Pattern2D_244421009_2.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2670.004']} />
                  </group>
                  <group {...props} dispose={null} position={[0.0, -0.023, -0.0036]}>
                    <mesh geometry={nodes.Pattern2D_244423001.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2670.006']} />
                    <mesh geometry={nodes.Pattern2D_244423001_1.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2670.006']} />
                    <mesh geometry={nodes.Pattern2D_244423001_2.geometry} material={materials['Polyester_Taffeta Copy 1_FRONT_2670.006']} />
                  </group>
                </group>
              )
              break;
            case "Cord4":
              return (
                <group {...props} dispose={null}>
                  <group {...props} dispose={null} position={[0, -0.027, -0.003]}>
                    <mesh geometry={nodes.Pattern2D_244421012.geometry} material={materials['Polyester_Taffeta Copy 2_FRONT_2670']} />
                    <mesh geometry={nodes.Pattern2D_244421012_1.geometry} material={materials['Polyester_Taffeta Copy 2_FRONT_2670']} />
                    <mesh geometry={nodes.Pattern2D_244421012_2.geometry} material={materials['Polyester_Taffeta Copy 2_FRONT_2670']} />
                  </group>
                  <group {...props} dispose={null} position={[0.0, -0.023, -0.0036]}>
                    <mesh geometry={nodes.Pattern2D_244423002.geometry} material={materials['Polyester_Taffeta Copy 2_FRONT_2670.002']} />
                    <mesh geometry={nodes.Pattern2D_244423002_1.geometry} material={materials['Polyester_Taffeta Copy 2_FRONT_2670.002']} />
                    <mesh geometry={nodes.Pattern2D_244423002_2.geometry} material={materials['Polyester_Taffeta Copy 2_FRONT_2670.002']} />
                  </group>
                </group>
              )
              break;
            default:
              break;
          }
          return null;
        }
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
      } else return null;
    } catch (err) {
      return null;
    }
  }, [customize.cordTip, customize.cord]);

  useEffect(() => {
    if (customize.tag.neck)
      setTagName(`label-${customize.tag.size}_${customize.tag.color ? "black" : "white"}`);
    else
      setTagName(`print-label_${customize.tag.color ? "black" : "white"}`);
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

  return (
    <group position={[0, 0, 0]} {...props} dispose={null} ref={modelRef}>
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
          rotation={[THREE.MathUtils.degToRad(5), 0, 0]}
          scale={[0.07, 0.1, 0.2]}
        >
          <meshPhysicalMaterial
            transparent
            polygonOffset
            polygonOffsetFactor={-2}
            map={texture[4]}
            map-anisotropy={16}
          />
        </Decal>
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
          position={customize.embellishment[3].type === 'text' ? [-0.10, 0.75, -0.12] : [-0.10, 0.77, -0.12]}
          rotation={[0, 0, 0]}
          scale={customize.embellishment[3].type === 'text' ? [0.155, 0.3, 0.2] : [0.08, 0.12, 0.2]}
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
      <mesh geometry={nodes.WRCALCAOCOSDRT_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2603.006']} />
      <mesh geometry={nodes.WRCALCAOCOSDRT_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.102']} />
      <mesh geometry={nodes.WRCALCAOCOSDRTR.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.105']} >
        <Decal
          position={customize.embellishment[2].type === 'text' ? [0.1, 0.845, -0.1] : [0.07, 0.84, -0.16]}
          rotation={[THREE.MathUtils.degToRad(-5), 0, 0]}
          scale={customize.embellishment[2].type === 'text' ? [0.14, 0.5, 0.2] : [0.08, 0.48, 0.2]}
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
      <mesh geometry={nodes.WRCALCAOCOSDRTR_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2603.009']} />
      <mesh geometry={nodes.WRCALCAOCOSDRTR_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.105']} />
      <mesh geometry={nodes.WRCALCAOFRE.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.098']} >
        <Decal
          position={customize.embellishment[1].type === 'text' ? [-0.1, 0.827, 0.1] : [-0.08, 0.82, 0.1]}
          rotation={[THREE.MathUtils.degToRad(5), 0, 0]}
          scale={customize.embellishment[1].type === 'text' ? [0.14, 0.47, 0.2] : [0.08, 0.45, 0.2]}
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
      <mesh geometry={nodes.WRCALCAOFRE_1.geometry} material={materials['Knit_Fleece_Terry_BACK_2603.002']} />
      <mesh geometry={nodes.WRCALCAOFRE_2.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.098']} />
      <mesh geometry={nodes.WRCALCAOFRER.geometry} material={materials['Knit_Fleece_Terry_FRONT_2603.104']} >
        <Decal
          position={customize.embellishment[0].type === 'text' ? [0.1, 0.827, 0.1] : [0.1, 0.82, 0.1]}
          rotation={[THREE.MathUtils.degToRad(5), 0, 0]}
          scale={customize.embellishment[0].type === 'text' ? [0.14, 0.47, 0.2] : [0.08, 0.45, 0.2]}
        >
          <meshPhysicalMaterial
            transparent
            polygonOffset
            polygonOffsetFactor={-2}
            map={texture[0]}
            map-anisotropy={16}
          />
        </Decal>
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

useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord1/mental_end/mental_end.glb")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord1/plastic_end/plastic_end.glb")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord1/silicone_end/silicone_end.gltf")

useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord2/mental_end/mental_end.glb")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord2/plastic_end/plastic_end.glb")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord2/silicone_end/silicone_end.gltf")

useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord3/mental_end/mental_end.glb")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord3/plastic_end/plastic_end.glb")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord3/silicone_end/silicone_end.gltf")

useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord4/mental_end/mental_end.glb")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord4/plastic_end/plastic_end.glb")
useGLTF.preload("/models/SHORTWR_man/cords/Man/Cord4/silicone_end/silicone_end.gltf")