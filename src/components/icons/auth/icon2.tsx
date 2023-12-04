import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function Icon1({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="12"
      height="13"
      fill="none"
      viewBox="0 0 12 13"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path d="M6 12.3008C9.31371 12.3008 12 9.61449 12 6.30078C12 2.98707 9.31371 0.300781 6 0.300781C2.68629 0.300781 0 2.98707 0 6.30078C0 9.61449 2.68629 12.3008 6 12.3008Z" fill="#6AB67A" />
    </Box>
  );
}

export default memo(Icon1);
