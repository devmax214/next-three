import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const useCustomTextures = () => {
  const bumpOutMap = useLoader(THREE.TextureLoader, '/textures/bump-out.jpg');
  const bumpShirt = useLoader(THREE.TextureLoader, '/textures/shirt-col2.png');
  const normalShirt = useLoader(THREE.TextureLoader, '/textures/shirt-norm2.jpg');
  const bumpCollar = useLoader(THREE.TextureLoader, '/textures/shirt-col2.png');
  const normalCollar = useLoader(THREE.TextureLoader, '/textures/shirt-norm2.jpg');
  const normalOutMap = useLoader(THREE.TextureLoader, '/textures/normal-out.jpg');
  const bumpInMap = useLoader(THREE.TextureLoader, '/textures/bump-in.png');
  const normalInMap = useLoader(THREE.TextureLoader, '/textures/normal-in.jpg');

  const setTextureProperties = (texture: THREE.Texture, repeatS: number, repeatT: number) => {
    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    texture.offset.set(0, 0);
    texture.repeat.set(repeatS, repeatT);
  };

  setTextureProperties(normalOutMap, 18, 18);
  setTextureProperties(bumpOutMap, 18, 18);
  setTextureProperties(normalInMap, 18, 18);
  setTextureProperties(bumpInMap, 30, 30);
  setTextureProperties(normalShirt, 50, 50);
  setTextureProperties(bumpShirt, 50, 50);
  setTextureProperties(normalCollar, 25, 25);
  setTextureProperties(bumpCollar, 25, 25);

  return { bumpOutMap, normalOutMap, bumpInMap, normalInMap, bumpShirt, normalShirt, bumpCollar, normalCollar };
};

export default useCustomTextures;
