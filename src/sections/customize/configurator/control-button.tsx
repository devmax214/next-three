import { ReactElement } from "react";
import { styled } from "@mui/material/styles";
import { ButtonBase, ButtonBaseProps, Stack } from "@mui/material";
import { secondaryFont } from "@/theme/typography";
import EditIcon from "@/components/icons/icon-edit";

export const StyledButton = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: "white",
  padding: "10px 5px",
  border: "1px solid #ACB1B8",
  borderRadius: "5px",
  fontSize: 16,
  color: "#292F3D",
  fontWeight: 500,
  fontFamily: secondaryFont.style.fontFamily,
}));

type Props = {
  isOpen: boolean;
  label: string;
};

export default function ControlButton({
  label,
  isOpen,
  onClick,
}: { label: string; isOpen: boolean } & ButtonBaseProps) {
  return (
    <StyledButton onClick={onClick}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: 1, px: 1 }}
      >
        {label}

        <EditIcon sx={{ width: 10, height: 12 }} />
      </Stack>
    </StyledButton>
  );
}

export function ControlDropButton({
  label,
  isOpen,
  onClick,
  box,
}: { label: string; isOpen: boolean, box: ReactElement } & ButtonBaseProps) {
  return (
    <StyledButton onClick={onClick}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ width: 1, px: 1 }}
      >
        <Stack direction={"row"}>
          {box}
          {label}
        </Stack>

        <EditIcon sx={{ width: 10, height: 12 }} />
      </Stack>
    </StyledButton>
  );
}