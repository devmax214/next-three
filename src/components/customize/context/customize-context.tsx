import { createContext, useContext, useState, useMemo, useCallback } from "react";
import { ICustomizeQuoteItem, CustomizeContextProps } from "@/@types/customize";
import { Any } from "@react-spring/three";
import { number } from "yup";

export const CustomizeContext = createContext({} as CustomizeContextProps);

export const useCustomizeContext = () => {
  const context = useContext(CustomizeContext);

  if (!context)
    throw new Error("useCustomizeContext must be use inside CusotimzeProvider");

  return context;
};

type CustomizeProviderProps = {
  children: React.ReactNode;
  passInitState: object;
};

const initialState = {
  category: {},
  garment: "",
  tag: {
    visible: false,
    edit: true,
    neck: true,
    color: true,
    size: "45x45",
    file: null,
    fileName: "",
  },
  embellishment: [{
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    fileName: '',
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: {
        content: -1,
        item: -1,
      }
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: {
        content: -1,
        item: -1,
      }
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: {
        content: -1,
        item: -1,
      }
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: {
        content: -1,
        item: -1,
      }
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }],
  color: "",
  pantone: "11-0601 TCX",
  cord: "",
  cordTip: "",
  text: "",
  careLabel: 0,
  sizeLabel: 0,
  washing: {},
  material: "",
  lace: "",
  laceTip: "",
  embelIndex: 0,
  cordVisible: false,
}

export function CustomizeProvider({ children, passInitState = {} }: CustomizeProviderProps) {

  let restInit = passInitState;
  if (passInitState.embellishment) {
    const { embellishment, ...rest } = passInitState;
    restInit = rest;
  }
  const [values, setValues] = useState({ ...initialState, ...restInit });

  //tags props
  const onColorChange = useCallback(
    (color: string) => {
      setValues((prevStatus: any) => ({
        ...prevStatus,
        color: color
      }))
    }, [values.color]
  )

  const onPantoneChange = useCallback(
    (pantone: string) => {
      setValues((prevStatus: any) => ({
        ...prevStatus,
        pantone: pantone
      }))
    }, [values.pantone]
  )

  const onTagEditChange = useCallback(
    () => {
      setValues((prevStatus: any) => ({
        ...prevStatus,
        tag: {
          ...prevStatus.tag,
          edit: !prevStatus.tag.edit
        }
      }))
    }, [values.tag.edit]
  )

  const onTagNeckChange = useCallback(
    () => {
      setValues((prevStatus: any) => ({
        ...prevStatus,
        tag: {
          ...prevStatus.tag,
          neck: !prevStatus.tag.neck
        }
      }))
    }, [values.tag.neck]
  )

  const onTagColorChange = useCallback(
    () => {
      setValues((prevStatus: any) => ({
        ...prevStatus,
        tag: {
          ...prevStatus.tag,
          color: !prevStatus.tag.color
        }
      }))
    }, [values.tag.color]
  )

  const onTagSizeChange = useCallback(
    (size: string) => {
      setValues((prevStatus: any) => ({
        ...prevStatus,
        tag: {
          ...prevStatus.tag,
          size: size
        }
      }))
    }, [values.tag.size]
  )

  const onTagEditVisible = useCallback(
    () => {
      setValues((prevStatus: any) => ({
        ...prevStatus,
        tag: {
          ...prevStatus.tag,
          visible: !prevStatus.tag.visible
        }
      }))
    }, [values.tag.visible]
  )

  const onTagSelectFile = useCallback((file: any, fileName: string) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      tag: {
        ...prevStatus.tag,
        file: file,
        fileName: fileName
      }
    }))
  }, [values.tag.file]);

  //Embellishement props
  const onAllEmbelChange = useCallback((index: number, data: object) => {
    setValues((prevStatus: any) => {
      let newEmbel = prevStatus.embellishment;
      newEmbel[index] = {
        ...prevStatus.embellishment[index],
        ...data
      }
      return {
        ...prevStatus,
        embelIndex: index,
        embellishment: newEmbel
      }
    })
  }, [values.embellishment]);

  const onAllContextChange = useCallback((data: object) => {
    setValues((prevStatus: any) => {
      const { embellishment, ...rest } = data;
      return {
        ...prevStatus,
        ...rest,
      }
    })
  }, [values]);

  const onCordTypeChange = useCallback((value: string) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      cord: value
    }))
  }, [values.cord]);

  const onCordEditable = useCallback((value: boolean) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      cordVisible: value,
    }))
  }, [values.cordVisible]);

  const onCordTipChange = useCallback((value: string) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      cordTip: value
    }))
  }, [values.cordTip]);

  const onCareLabelChange = useCallback((value: number) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      careLabel: value
    }))
  }, [values.careLabel]);

  const onSizeLabelChange = useCallback((value: number) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      sizeLabel: value
    }))
  }, [values.sizeLabel]);

  const onMaterialChange = useCallback((value: number) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      material: value
    }))
  }, [values.material]);

  const onLaceChange = useCallback((value: number) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      lace: value
    }))
  }, [values.lace]);

  const onLaceTipChange = useCallback((value: number) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      laceTip: value
    }))
  }, [values.laceTip]);

  const onTextChange = useCallback((value: string) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      text: value
    }))
  }, [values.text]);

  const memoizedValue = useMemo(() => {
    return {
      ...values,
      onColorChange,
      onPantoneChange,
      onTagEditChange,
      onTagNeckChange,
      onTagColorChange,
      onTagSizeChange,
      onTagEditVisible,
      onTagSelectFile,
      onAllEmbelChange,
      onAllContextChange,
      onCordTypeChange,
      onCordEditable,
      onCordTipChange,
      onCareLabelChange,
      onSizeLabelChange,
      onMaterialChange,
      onLaceChange,
      onLaceTipChange,
      onTextChange,
    };
  }, [values]) as any;

  return (
    <CustomizeContext.Provider value={memoizedValue}>
      {children}
    </CustomizeContext.Provider>
  );
}
