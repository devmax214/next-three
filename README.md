React + Next + Three.js

## Fabricjs
Fabricjs related code is inside these files
- utils/fabric.ts this contains functions to modify fabricjs object
- helpers/fabricPatch.tsx this one contains pathes for fabricjs to work with the raycast from threejs
- constant/fabricConst this contains constants necessary for each product to handle the active ptype and create mask/bounding limit

## Usage
First make sure u already do
- Manage UV of the 3d model
- Define the mask/bounding limit position and scale inside `constants/fabricConst`

Now let's add this hook
```ts
  const { camera, gl, raycaster, scene, mouse, pointer } = useThree();
  useRaycast(
    controlsRef,
    canvasRef,
    canvasRenderedRef,
    textureRef,
    "Hoodies",
    customize,
    embelIndex,
    camera,
    gl,
    raycaster,
    scene,
    mouse,
    pointer
  );
```
Change Hoodies to your product name, this one need to have the same value as ptype.

Change the mesh material form 
```tsx
<mesh geometry={...}  material={...}/>
```

to use FabricEditableTexture component

```tsx
// if the texture is for the outside use this
<mesh geometry={...}>
  <FabricEditableTexture
    bumpMap={bumpOutMap}
    normalMap={normalOutMap}
    canvasRef={canvasRef}
    textureRef={textureRef}
  />
</mesh>
// if the texture is for the inside use this, the component checked if the prop color is passed, if it is then it'll use bump in image
<mesh geometry={...}>
  <FabricEditableTexture
    bumpMap={bumpInMap}
    normalScale={0}
    color={customize.color}
    bumpScale={2}
    normalMap={normalInMap}
    canvasRef={canvasRef}
    textureRef={textureRef}
  />
</mesh>
```

U're good to go