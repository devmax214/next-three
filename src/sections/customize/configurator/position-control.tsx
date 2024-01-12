import { useContext, useEffect, useState } from "react";
import { ButtonBase, Grid } from "@mui/material";
import {
  BottomPosition,
  CenterPosition,
  LeftPosition,
  RightPosition,
  TopCenterPosition,
  TopPosition,
} from "@/components/icons/customize/position/position";
import { CustomizeContext } from "@/components/customize/context/customize-context";
import { styled } from "@mui/material/styles";
import { Canvas } from "fabric/fabric-impl";
import { clipPath, maskPosition } from "@/constant/fabricConst";

export const StyledButton = styled(ButtonBase)(({ theme }) => ({
  padding: 10,
}));

const positions = [
  {
    value: "left",
    icon: <LeftPosition />,
  },
  {
    value: "horizontal-center",
    icon: <CenterPosition />,
  },
  {
    value: "right",
    icon: <RightPosition />,
  },
  {
    value: "top",
    icon: <TopPosition />,
  },
  {
    value: "vertical-center",
    icon: <TopCenterPosition />,
  },
  {
    value: "bottom",
    icon: <BottomPosition />,
  },
];

type Props = {
  positionType: string;
  type: string;
  ptype: string;
  embelIndex: number;
  canvasRef: Canvas;
  canvasAllRef: any;
};

export default function PositionControl(props: Props) {
  const customize = useContext(CustomizeContext);
  const [state, setState] = useState({
    content: customize.embellishment[props.embelIndex].position.type.content,
    item: customize.embellishment[props.embelIndex].position.type.item
  });
  const { canvasRef, ptype, type, embelIndex } = props;
  useEffect(() => {
    if (customize.embellishment[props.embelIndex].type == props.positionType) {
      if (props.positionType == 'image' && !customize.embellishment[props.embelIndex].file) return;
      setState({
        content: customize.embellishment[props.embelIndex].position.type.content,
        item: customize.embellishment[props.embelIndex].position.type.item,
      });
    }
  }, [customize.embellishment[props.embelIndex].type]);

  const handleChangePosition = (index: number, callLocation: number) => {
    if (props.positionType == 'image' && !customize.embellishment[props.embelIndex].file) return;
    const contentIndex = callLocation == 1 ? 1 : callLocation == 2 ? -1 : [0, 1, 2].includes(index) ? index : customize.embellishment[props.embelIndex].position.type.content;
    const itemIndex = callLocation == 1 ? 4 : callLocation == 2 ? -1 : ![0, 1, 2].includes(index) ? index : customize.embellishment[props.embelIndex].position.type.item;
    customize.onAllEmbelChange(embelIndex, {
      position: {
        ...customize.embellishment[embelIndex].position,
        type: {
          content: contentIndex,
          item: itemIndex,
        }
      },
    });
    setState({
      content: contentIndex,
      item: itemIndex,
    });
    if (callLocation) return;
    const currentObj: any = canvasRef
      .getObjects()
      .find(
        (obj: any) =>
          obj.type == type && obj.name.includes(maskPosition[ptype][embelIndex])
      );
    const currentMaskData = clipPath[ptype].find(
      (data: any) => data.id == "mask-" + maskPosition[ptype][embelIndex]
    );
    let objWidth = currentObj.angle == 0 ? currentObj.width : currentObj.height;
    let objHeight =
      currentObj.angle == 0 ? currentObj.height : currentObj.width;
    if (type == "text") {
      changePosition(currentMaskData, currentObj, index, objWidth, objHeight);
    } else {
      objWidth =
        currentObj.angle == 0
          ? currentObj.width * currentObj.scaleX
          : currentObj.height * currentObj.scaleY;
      objHeight =
        currentObj.angle == 0
          ? currentObj.height * currentObj.scaleY
          : currentObj.width * currentObj.scaleX;
      changePosition(currentMaskData, currentObj, index, objWidth, objHeight);
    }
  };

  useEffect(() => {
    if (!ptype) return;
    if (!props.canvasAllRef.handleChangePosition) props.canvasAllRef.handleChangePosition = {};
    props.canvasAllRef.handleChangePosition = {
      ...props.canvasAllRef.handleChangePosition,
      [`${props.positionType}-${maskPosition[ptype][embelIndex]}`]: handleChangePosition
    };
  }, [props.ptype, props.positionType])

  const changePosition = (
    currentMaskData: any,
    currentObj: any,
    index: number,
    objWidth: number,
    objHeight: number
  ) => {
    switch (index) {
      case 0:
        currentObj?.set({
          left: currentMaskData.left + objWidth / 2,
        });
        break;
      case 1:
        currentObj?.set({
          left: currentMaskData.dLeft,
        });
        break;
      case 2:
        currentObj?.set({
          left: currentMaskData.width + currentMaskData.left - objWidth / 2,
        });
        break;
      case 3:
        currentObj?.set({
          top:
            currentMaskData.dTop - currentMaskData.height / 2 + objHeight / 2,
        });
        break;
      case 4:
        currentObj?.set({
          top: currentMaskData.dTop,
        });
        break;
      case 5:
        currentObj?.set({
          top:
            currentMaskData.dTop + currentMaskData.height / 2 - objHeight / 2,
        });
        break;

      default:
        break;
    }
  };
  return (
    <>
      <Grid container>
        {positions.map((pos, index: number) => (
          <Grid key={index} item md={2}>
            <StyledButton
              disabled={customize.embellishment[props.embelIndex].type !== type}
              sx={{
                border: state.content == index || state.item == index ? "1px solid red" : "",
                borderRadius: 1,
                svg: {
                  path: {
                    stroke: state.content == index || state.item == index ? "#5C6166" : "#ACB1B8",
                  },
                  rect: {
                    fill: state.content == index || state.item == index ? "#5C6166" : "#ACB1B8",
                  },
                },
              }}
              onClick={() => handleChangePosition(index, 0)}
            >
              {pos.icon}
            </StyledButton>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
