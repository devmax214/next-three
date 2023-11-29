import { useContext, useState } from "react";
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
  type: string
};

export default function PositionControl(props: Props) {
  const customize = useContext(CustomizeContext);
  const [state, setState] = useState(0);

  return (
    <>
      <Grid container>
        {positions.map((pos, index) => (
          <Grid key={index} item md={2}>
            <StyledButton disabled={customize.embellishment.type !== props.type} sx={{
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
            }} onClick={() => setState(index)}>{pos.icon}</StyledButton>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
