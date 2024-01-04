import { useFrame } from '@react-three/fiber';
import { setState } from '@/helpers/store';

const useThreeFrame = (canvas:any, controlsRef:any) => {
  useFrame(() => {
    controlsRef.current?.update();
    
    canvas.on('mouse:up', (e: any) => {
      controlsRef.current.enabled = true
    })
    canvas.on('mouse:down', (e: any) => {
      if (e.target && e.target.text) {
        controlsRef.current.enabled = false
      } else if (e.target && e.target.name.includes('image')){
        controlsRef.current.enabled = false
      }
    })
    // canvas?.on('mouse:move', () => {
    //   setState({
    //     changed: true,
    //     activeObject: canvas.getActiveObject(),
    //   });
    // });
  });
};

export default useThreeFrame;
