import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function VideoIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 16 11"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g clip-path="url(#clip0_4785_28072)">
        <path d="M2.1 10.9C0.9 10.9 0 10 0 8.8V2.1C0 0.9 0.9 0 2.1 0H9.7C10.9 0 11.8 0.9 11.8 2.1V4.3L14.3 2C14.5 1.8 14.7 1.7 15 1.7C15.1 1.7 15.3 1.7 15.4 1.8C15.8 1.9 16 2.3 16 2.6V8.3C16 8.7 15.8 9 15.4 9.2C15.3 9.3 15.1 9.3 15 9.3C14.7 9.3 14.5 9.2 14.3 9L11.8 6.7V8.9C11.8 10.1 10.9 11 9.7 11H2.1V10.9ZM2.1 0.8C1.4 0.8 0.8 1.4 0.8 2.1V8.8C0.8 9.5 1.4 10.1 2.1 10.1H9.7C10.4 10.1 11 9.5 11 8.8V2.1C11 1.4 10.4 0.8 9.7 0.8H2.1ZM11.7 5.5L15.1 8.7V2.3L11.7 5.5Z" fill="white" />
      </g>
      <defs>
        <clipPath id="clip0_4785_28072">
          <rect width="16" height="10.9" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(VideoIcon);
