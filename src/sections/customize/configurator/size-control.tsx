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

type Props = {
  embelIndex: number
};

export default function SizeControl({ embelIndex }: Props) {
  const context = useContext(CustomizeContext);
  return (
    <Stack direction="row" gap={2}>
      {sizes.map((size, index) => (
        <StyledButton
          key={index}
          sx={context.embellishment[embelIndex].size === index ? { border: "1px solid #F05A4A", borderRadius: "7px", width: "45px", height: "45px" } : { width: "45px", height: "45px" }}
          onClick={() => context.onAllEmbelChange(embelIndex, { size: index })} disabled={context.embellishment[embelIndex].type !== "image"}
        >{size.label}</StyledButton>
      ))}
    </Stack>
  );
}
