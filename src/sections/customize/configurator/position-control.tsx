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
  type: string,
  embelIndex: number
};

export default function PositionControl(props: Props) {
  const customize = useContext(CustomizeContext);
  const [state, setState] = useState(0);

  useEffect(() => {
    setState(customize.embellishment[props.embelIndex].position.type)
  }, [customize.embellishment[props.embelIndex].type]);

  return (
    <>
      <Grid container>
        {positions.map((pos, index) => (
          <Grid key={index} item md={2}>
            <StyledButton disabled={customize.embellishment[props.embelIndex].type !== props.type} sx={{
              border: state == index ? "1px solid red" : "",
              borderRadius: 1,
              "svg": {
                "path": {
                  stroke: state == index ? "#5C6166" : "#ACB1B8"
                },
                "rect": {
                  fill: state === index ? "#5C6166" : "#ACB1B8"
                }
              }
            }} onClick={() => {
              customize.onAllEmbelChange(props.embelIndex, { position: { ...customize.embellishment[props.embelIndex].position, type: index } });
              setState(index)
            }}>{pos.icon}</StyledButton>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
