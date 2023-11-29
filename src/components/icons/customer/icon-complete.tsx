import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function CompleteIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 16 15"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g clipPath="url(#clip0_3913_10608)">
        <path
          d="M7.59994 11.4999L3.69994 7.09994C3.29994 6.69994 3.39994 5.99994 3.89994 5.69994C4.39994 5.29994 5.09994 5.39994 5.49994 5.89994L7.49994 8.09994L13.3999 0.899943C13.7999 0.399943 14.4999 0.299943 14.9999 0.699943C15.4999 0.999943 15.5999 1.69994 15.2999 2.09994L7.59994 11.4999Z"
          fill="#ACB1B8"
        />
        <path
          d="M7.5 15C3.4 15 0 11.6 0 7.5C0 3.4 3.4 0 7.5 0C11.6 0 15 3.4 15 7.5C15 11.6 11.6 15 7.5 15ZM7.5 1C3.9 1 1 3.9 1 7.5C1 11.1 3.9 14 7.5 14C11.1 14 14 11.1 14 7.5C14 3.9 11.1 1 7.5 1Z"
          fill="#ACB1B8"
        />
      </g>
      <defs>
        <clipPath id="clip0_3913_10608">
          <rect width="15.5" height="15" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(CompleteIcon);
