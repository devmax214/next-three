import { useContext } from "react";
import { ButtonBase, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CustomizeContext } from "@/components/customize/context/customize-context";

const sizes = [
  { label: "XS" },
  { label: "S" },
  { label: "M" },
  { label: "L" },
  { label: "XL" },
];

export const StyledButton = styled(ButtonBase)(({ theme }) => ({
  fontSize: 16,
  color: "#292F3D",
  padding: 10,
}));

type Props = {};

export default function SizeControl(props: Props) {
  const context = useContext(CustomizeContext);
  return (
    <Stack direction="row" gap={2}>
      {sizes.map((size, index) => (
        <StyledButton
          key={index}
          sx={context.embellishment.size === index ? { border: "1px solid #F05A4A", borderRadius: "7px", width: "45px", height: "45px" } : { width: "45px", height: "45px" }}
          onClick={() => context.onEmbelSelectSize(index)} disabled={context.embellishment.type !== "image"}
        >{size.label}</StyledButton>
      ))}
    </Stack>
  );
}
