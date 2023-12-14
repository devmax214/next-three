import { ICategoryItem } from "@/@types/product";

type IQuoteItem = {
  seq: string;
  status: string;
};

type ICustomizeTagItem = {
  visible: boolean,
  edit: boolean,
  neck: boolean,
  color: boolean,
  size: string,
  file: any
};

type IEmbellishmentItem = {
  visible: boolean,
  type: string,
  size: number,
  artwork: number,
  view: number,
  visibleText: boolean,
  file: any,
  position: {
    width: number,
    neck: number,
    center: number,
    type: number
  },
  reqText: string,
  textureText: string,
  font: string
}

type IWashingInstructionTagItem = {};

export interface ICustomizeQuoteItem {
  category: ICategoryItem;
  garment: string;
  tag: ICustomizeTagItem;
  embellishment: IEmbellishmentItem[];
  cord: string;
  cordTip: string;
  text: string;
  color: string;
  careLabel: number;
  sizeLabel: number;
  washing: IWashingInstructionTagItem;
  laceTip: string;
  lace: string;
  material: string;
  embelIndex: number;
}

export interface ICustomizeItem {
  name: string;
  // images: string[];
  // sizes: string[];
  customer: string;
  // color: string[];
  material: string;
  code: string;
  price: number;
  category: string;
  publish: string;
  quoteState: number;
  // gender: string[]
}

export type CustomizeContextProps = ICustomizeQuoteItem & {
  onColorChange: (itemId: string) => void;
  onTagEditChange: () => void;
  onTagNeckChange: () => void;
  onTagColorChange: () => void;
  onTagSizeChange: (size: string) => void;
  onTagEditVisible: () => void;
  onTagSelectFile: (file: any) => void;
  onAllEmbelChange: (index: number, data: object) => void;
  onCordTypeChange: (value: string) => void;
  onCordTipChange: (value: string) => void;
  onCareLabelChange: (value: number) => void;
  onSizeLabelChange: (value: number) => void;
  onMaterialChange: (value: number) => void;
  onLaceChange: (value: number) => void;
  onLaceTipChange: (value: number) => void;
};