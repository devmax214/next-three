import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function StoreIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g clipPath="url(#clip0_3913_11120)">
        <path
          d="M1.9 13.9C1.7 13.9 1.5 13.7 1.5 13.4V6.3H1.3C0.5 5.8 0 5 0 4V3.9V3.8L1.4 0.3C1.5 0.1 1.7 0 1.9 0H12C12.2 0 12.4 0.1 12.5 0.3L13.9 3.9V4C13.9 4.9 13.4 5.8 12.6 6.2L12.5 6.3V13.3C12.5 13.5 12.3 13.8 12 13.8H1.9V13.9ZM8.4 8.6C8.6 8.6 8.9 8.8 8.9 9.1V13H11.6V6.7H11.3C10.5 6.7 9.8 6.4 9.3 5.8L9.1 5.5L8.9 5.8C8.8 5.8 8.7 5.9 8.7 6C8.2 6.4 7.6 6.6 6.9 6.6C6.2 6.6 5.4 6.3 4.9 5.7L4.8 5.5L4.6 5.8C4.1 6.4 3.4 6.7 2.6 6.7H2.3V13H5V9.1C5 8.9 5.2 8.6 5.5 8.6H8.4ZM5.9 13H7.9V9.5H5.9V13ZM0.9 4.1C0.9 5.1 1.7 5.8 2.6 5.8C3.6 5.8 4.3 5 4.3 4C4.3 3.8 4.5 3.6 4.8 3.6C5.1 3.6 5.3 3.8 5.3 4.1C5.2 5 6 5.8 6.9 5.8C7.8 5.8 8.6 5 8.6 4.1C8.6 3.9 8.8 3.6 9.1 3.6C9.4 3.6 9.5 3.8 9.5 4.1C9.5 5 10.3 5.8 11.2 5.8C12.1 5.8 12.8 5.1 12.9 4.2V4.1L11.6 0.9H2.2L0.9 4.1Z"
          fill="#292F3D"
        />
      </g>
      <defs>
        <clipPath id="clip0_3913_11120">
          <rect width="13.9" height="13.9" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(StoreIcon);
