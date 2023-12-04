import { memo } from "react";
import { useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

function BottomIcon({ ...other }: BoxProps) {
  const theme = useTheme();

  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 17 13"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path d="M6.5 1L1 6.5L6.5 12" stroke="#F05A4A" stroke-linecap="round" />
      <path d="M15.6674 6.5L1.00069 6.5" stroke="#F05A4A" stroke-linecap="round" />
    </Box>
  );
}

export default memo(BottomIcon);
