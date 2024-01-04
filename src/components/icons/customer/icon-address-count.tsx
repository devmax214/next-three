import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function AddressCountIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 0 16 14"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g clipPath="url(#clip0_3827_10278)">
        <path
          d="M15.8 1.1C15.6 1 15.5 0.9 15.3 1L10.5 2.5L5.7 0C5.6 0 5.4 0 5.3 0L0.3 2C0.1 2.2 0 2.3 0 2.6V12.8C0 13.1 0.2 13.3 0.5 13.3C0.6 13.3 0.6 13.3 0.7 13.3L5.5 11.3L10.3 13.8C10.4 13.8 10.4 13.9 10.5 13.9H10.6L15.6 12.3C15.8 12.2 16 12 15.9 11.8V1.5C16 1.3 15.9 1.2 15.8 1.1ZM15 11.3L10.8 12.6V11.5H10V12.5L5.8 10.3V9.5H5V10.4L1 12V2.9L5 1.2V2.4H5.8V1.2L10 3.4V4.4H10.8V3.5L15 2.2V11.3Z"
          fill="#292F3D"
        />
        <path d="M10 5.5H10.8V7.4H10V5.5Z" fill="#292F3D" />
        <path d="M10 8.5H10.8V10.4H10V8.5Z" fill="#292F3D" />
        <path d="M5 3.5H5.8V5.4H5V3.5Z" fill="#292F3D" />
        <path d="M5 6.5H5.8V8.4H5V6.5Z" fill="#292F3D" />
      </g>
      <defs>
        <clipPath id="clip0_3827_10278">
          <rect width="16" height="13.8" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(AddressCountIcon);
