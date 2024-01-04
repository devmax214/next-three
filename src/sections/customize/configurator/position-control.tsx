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
import { styled } from "@mui/material/styles";
import { CustomizeContext } from "@/components/customize/context/customize-context";
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
  type: string;
  ptype: string;
  embelIndex: number;
  canvasRef: Canvas;
};

export default function PositionControl(props: Props) {
  const customize = useContext(CustomizeContext);
  const [state, setState] = useState(0);
  const { canvasRef, ptype, type, embelIndex } = props;
  useEffect(() => {
    setState(customize.embellishment[props.embelIndex].position.type);
  }, [customize.embellishment[props.embelIndex].type]);
  const handleChangePosition = (index: number) => {
    customize.onAllEmbelChange(embelIndex, {
      position: {
        ...customize.embellishment[embelIndex].position,
        type: index,
      },
    });
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
    setState(index);
  };
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
                border: state == index ? "1px solid red" : "",
                borderRadius: 1,
                svg: {
                  path: {
                    stroke: state == index ? "#5C6166" : "#ACB1B8",
                  },
                  rect: {
                    fill: state === index ? "#5C6166" : "#ACB1B8",
                  },
                },
              }}
              onClick={() => handleChangePosition(index)}
            >
              {pos.icon}
            </StyledButton>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
