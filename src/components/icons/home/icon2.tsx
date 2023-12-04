import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function Icon2({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 71 40"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path
        d="M56.7002 28C64.4322 28 70.7002 21.732 70.7002 14C70.7002 6.26801 64.4322 0 56.7002 0C48.9682 0 42.7002 6.26801 42.7002 14C42.7002 21.732 48.9682 28 56.7002 28Z"
        fill="#F3BC1A"
      />
      <path
        d="M7.1 39.5C11.0212 39.5 14.2 36.3213 14.2 32.4001C14.2 28.4788 11.0212 25.3 7.1 25.3C3.17878 25.3 0 28.4788 0 32.4001C0 36.3213 3.17878 39.5 7.1 39.5Z"
        fill="#6AB67A"
      />
    </Box>
  );
}

export default memo(Icon2);
