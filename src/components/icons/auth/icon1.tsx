import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function Icon1({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="22"
      height="22"
      fill="none"
      viewBox="0 0 22 22"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path d="M11 22C17.0751 22 22 17.0751 22 11C22 4.92487 17.0751 0 11 0C4.92487 0 0 4.92487 0 11C0 17.0751 4.92487 22 11 22Z" fill="#6B6FB5" />
    </Box>
  );
}

export default memo(Icon1);
