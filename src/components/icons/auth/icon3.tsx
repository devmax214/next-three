import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function Icon1({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37259 18.6274 0 12 0C5.37258 0 0 5.37259 0 12C0 18.6274 5.37258 24 12 24Z" fill="#F3BC1A" />
    </Box>
  );
}

export default memo(Icon1);
