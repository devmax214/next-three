import { createContext, useContext, useState, useMemo, useCallback } from "react";
import { ICustomizeQuoteItem, CustomizeContextProps } from "@/@types/customize";

export const CustomizeContext = createContext({} as CustomizeContextProps);

export const useCustomizeContext = () => {
  const context = useContext(CustomizeContext);

  if (!context)
    throw new Error("useCustomizeContext must be use inside CusotimzeProvider");

  return context;
};

type CustomizeProviderProps = {
  children: React.ReactNode;
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
    file: null
  },
  embellishment: {
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
  },
  color: "",
  cord: "",
  cordTip: "",
  text: "",
  careLabel: 0,
  sizeLabel: 0,
  washing: {},
  material: "",
  lace: "",
  laceTip: "",
}

export function CustomizeProvider({ children }: CustomizeProviderProps) {
  const [values, setValues] = useState(initialState);

  //tags props
  const onColorChange = useCallback(
    (color: string) => {
      setValues((prevStatus: any) => ({
        ...prevStatus,
        color: color
      }))
    }, [values.color]
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

  const onTagSelectFile = useCallback((file: any) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      tag: {
        ...prevStatus.tag,
        file: file
      }
    }))
  }, [values.embellishment.file]);

  //Embellishement props
  const onEmbelEditVisible = useCallback(() => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      embellishment: {
        ...prevStatus.embellishment,
        visible: !prevStatus.embellishment.visible
      }
    }))
  }, [values.embellishment.visible]);

  const onEmbelSelectType = useCallback((type: string) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      embellishment: {
        ...prevStatus.embellishment,
        type: type
      }
    }))
  }, [values.embellishment.type]);

  const onEmbelSelectSize = useCallback((size: number) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      embellishment: {
        ...prevStatus.embellishment,
        size: size
      }
    }))
  }, [values.embellishment.size]);

  const onEmbelSelectArtworkType = useCallback((type: number) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      embellishment: {
        ...prevStatus.embellishment,
        artwork: type
      }
    }))
  }, [values.embellishment.artwork]);

  const onEmbelSelectViewType = useCallback((type: string) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      embellishment: {
        ...prevStatus.embellishment,
        view: type
      }
    }))
  }, [values.embellishment.view]);

  const onEmbelVisibleText = useCallback(() => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      embellishment: {
        ...prevStatus.embellishment,
        visibleText: !prevStatus.embellishment.visibleText
      }
    }))
  }, [values.embellishment.visibleText]);

  const onEmbelSelectFile = useCallback((file: any) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      embellishment: {
        ...prevStatus.embellishment,
        file: file
      }
    }))
  }, [values.embellishment.file]);

  const onEmbelChangePosition = useCallback((position: any) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      embellishment: {
        ...prevStatus.embellishment,
        position: position
      }
    }))
  }, [values.embellishment.position]);

  const onEmbelChangeReqText = useCallback((text: string) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      embellishment: {
        ...prevStatus.embellishment,
        reqText: text
      }
    }))
  }, [values.embellishment.reqText]);

  const onEmbelChangeTextureText = useCallback((text: string) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      embellishment: {
        ...prevStatus.embellishment,
        textureText: text
      }
    }))
  }, [values.embellishment.textureText]);

  const onEmbelChangeFont = useCallback((value: string) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      embellishment: {
        ...prevStatus.embellishment,
        font: value
      }
    }))
  }, [values.embellishment.font]);

  const onCordTypeChange = useCallback((value: string) => {
    setValues((prevStatus: any) => ({
      ...prevStatus,
      cord: value
    }))
  }, [values.cord]);

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

  const memoizedValue = useMemo(() => {
    return {
      ...values,
      onColorChange,
      onTagEditChange,
      onTagNeckChange,
      onTagColorChange,
      onTagSizeChange,
      onTagEditVisible,
      onTagSelectFile,
      onEmbelEditVisible,
      onEmbelSelectType,
      onEmbelSelectSize,
      onEmbelSelectArtworkType,
      onEmbelSelectViewType,
      onEmbelVisibleText,
      onEmbelSelectFile,
      onEmbelChangePosition,
      onEmbelChangeReqText,
      onEmbelChangeTextureText,
      onEmbelChangeFont,
      onCordTypeChange,
      onCordTipChange,
      onCareLabelChange,
      onSizeLabelChange,
      onMaterialChange,
      onLaceChange,
      onLaceTipChange,
    };
  }, [values]) as any;

  return (
    <CustomizeContext.Provider value={memoizedValue}>
      {children}
    </CustomizeContext.Provider>
  );
}
