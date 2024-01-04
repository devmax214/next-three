import {create} from 'zustand'
import {shallow} from 'zustand/shallow'

interface State {
  changed: boolean
  isMaskAdded: boolean
  activeObject: any
  firstLoadTexture: boolean
  colorChanged: boolean
  textureChanged: boolean
  setTextureChanged: (param: boolean) => void
  textChanged: boolean
  textActive: boolean
  setActiveObject: (data: any) => void
  setTextActive: (param: boolean) => void
  insertText: string
  allText: Array<string>
  allImages: Array<string>
  allTextInput: Array<string>
  editText: boolean
  productType: string,
  activeText: {
    text: string
    fontFamily: string
    fill: string
    fontSize: number
    angle: number
    stroke: string
    strokeWidth: number
  }
}

const useStoreImpl = create<State>()((set, get) => ({
  changed: false,
  isMaskAdded: false,
  activeObject: null,
  setActiveObject: (data: any) => set(() => ({ activeObject: data })),
  colorChanged: false,
  textureChanged: false,
  productType:'',
  setTextureChanged: (param) => set(() => ({ textureChanged: param })),
  textChanged: false,
  firstLoadTexture: false,
  textActive: false,
  setTextActive: (param) => set(() => ({ textActive: param })),
  insertText: '',
  allText: [],
  allImages: [],
  allTextInput: [],
  editText: false,
  activeText: {
    text: '',
    fontFamily: 'Arial',
    fill: '#000000',
    fontSize: 0,
    angle: 0,
    stroke: '#000000',
    strokeWidth: 0,
  },
}))

const useStore = (sel: { (state: any): any }) => useStoreImpl(sel, shallow)
Object.assign(useStore, useStoreImpl)

const { getState, setState, subscribe } = useStoreImpl

export { getState, setState, subscribe }
export default useStore
