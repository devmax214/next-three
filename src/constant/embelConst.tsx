import { secondaryFont } from "@/theme/typography";
import {
  LeftPosition,
  RightPosition,
  TopCenterPosition,
  TopPosition,
  CenterPosition,
  BottomPosition
} from "@/components/icons/customize/position/position";
import { styled } from "@mui/material/styles";
import { ButtonBase, Typography } from "@mui/material";

export const StyledSwitchLabel = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  textWrap: "nowrap",
}));

export const StyledButton = styled(ButtonBase)(({ theme }) => ({
  padding: 4,
}));

export const cordLabels: any = {
  "Cord1": "Cord 01",
  "Cord2": "Cord 02",
  "Cord3": "Cord 03",
  "Cord4": "Cord 04",
}

export const tipLabels: any = {
  "mental_end": "Tip 01",
  "plastic_end": "Tip 01",
  "silicone_end": "Tip 01",
}

export const artworks: any = [
  "Digital Print",
  "Screen Print",
  "Embroidery",
];


export const positions: any = [
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
    icon: <CenterPosition />,
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

export const sizeLabels: any = [
  "Size label sewn on the side the brand label",
  "Brand label on the garment seam, 10cm from the bottom",
  "Decide later, in a back office conversation",
];

export const GENDERS: any = [
  { value: "man", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

export const sizes: any = ["XS", "S", "M", "L", "XL"];