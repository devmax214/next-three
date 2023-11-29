import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function CloseIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 24 25"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path
        d="M1 23L23 0.999999"
        stroke="#292F3D"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M1 1.2207L23 23.2207"
        stroke="#292F3D"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Box>
  );
}

export default memo(CloseIcon);
