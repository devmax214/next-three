import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function PendingIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path
        d="M1.6 11.4V15.5H0V0H15.6C15.8 0 16 0.2 16 0.4C16 0.5 16 0.5 15.9 0.6L13 5.7L15.9 10.8C16 11 15.9 11.2 15.7 11.4C15.6 11.4 15.6 11.5 15.5 11.5L1.6 11.4ZM1.6 1.6V9.7H13.5L11.2 5.6L13.5 1.5H1.6V1.6Z"
        fill="#F05A4A"
      />
    </Box>
  );
}

export default memo(PendingIcon);
