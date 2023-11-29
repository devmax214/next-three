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
  size: string
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
  embellishment: IEmbellishmentItem;
  cord: string;
  cordTip: string;
  text: string;
  color: string;
  careLabel: number;
  sizeLabel: number;
  washing: IWashingInstructionTagItem;
}

export type CustomizeContextProps = ICustomizeQuoteItem & {
  onColorChange: (itemId: string) => void;
  onTagEditChange: () => void;
  onTagNeckChange: () => void;
  onTagColorChange: () => void;
  onTagSizeChange: (size: string) => void;
  onTagEditVisible: () => void;
  onEmbelEditVisible: () => void;
  onEmbelSelectType: (type: string) => void;
  onEmbelSelectSize: (size: number) => void;
  onEmbelSelectArtworkType: (type: number) => void;
  onEmbelSelectViewType: (type: number) => void;
  onEmbelVisibleText: () => void;
  onEmbelSelectFile: (file: any) => void;
  onEmbelChangePosition: (position: any) => void;
  onEmbelChangeReqText: (value: string) => void;
  onEmbelChangeTextureText: (value: string) => void;
  onEmbelChnageFont: (value: string) => void;
  onCordTypeChange: (value: string) => void;
  onCordTipChange: (value: string) => void;
  onCareLabelChange: (value: number) => void;
  onSizeLabelChange: (value: number) => void;
};