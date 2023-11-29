import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function AddressIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 15 20"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g clipPath="url(#clip0_3920_7057)">
        <path
          d="M7.4 10.3C5.8 10.3 4.5 9 4.5 7.4C4.5 5.8 5.8 4.5 7.4 4.5C9 4.5 10.3 5.8 10.3 7.4C10.3 9 9 10.3 7.4 10.3ZM7.4 5.7C6.5 5.7 5.7 6.5 5.7 7.4C5.7 8.3 6.5 9.1 7.4 9.1C8.3 9.1 9.1 8.3 9.1 7.4C9.1 6.5 8.3 5.7 7.4 5.7Z"
          fill="#292F3D"
        />
        <path
          d="M7.4 20C7 20 6.7 19.8 6.4 19.5L1.2 11.5C0.4 10.2 0 8.8 0 7.4C0 3.3 3.3 0 7.4 0C11.2 0 14.4 2.9 14.8 6.6C14.8 6.9 14.8 7.1 14.8 7.4C14.8 8.8 14.4 10.2 13.6 11.4L8.4 19.4C8.3 19.5 8.2 19.6 8.1 19.7C7.8 19.9 7.6 20 7.4 20ZM7.4 1.1C5.7 1.1 4.1 1.8 2.9 2.9C0.9 5 0.5 8.4 2.1 10.8L7.4 18.9L12.7 10.8C14.3 8.3 14 5 11.9 2.9C10.7 1.8 9.1 1.1 7.4 1.1Z"
          fill="#292F3D"
        />
      </g>
      <defs>
        <clipPath id="clip0_3920_7057">
          <rect width="14.8" height="20" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(AddressIcon);
