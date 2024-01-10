import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function LinkedinIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 19 18"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g clipPath="url(#clip0_4110_13777)">
        <path
          d="M4.01856 18H0.09375V5.95489H4.01856V18ZM2.12383 4.19549C0.90578 4.19549 0.09375 3.24812 0.09375 2.03008C0.09375 0.947368 0.90578 0 2.12383 0C3.34187 0 4.1539 0.947368 4.1539 2.03008C4.28924 3.24812 3.47721 4.19549 2.12383 4.19549ZM18.0938 18H14.1689V11.5038C14.1689 9.8797 13.6276 8.79699 12.1389 8.79699C11.1915 8.79699 10.6501 9.47368 10.2441 10.2857C10.2441 10.4211 10.1088 10.8271 10.1088 11.2331V18.1353H6.31931V5.95489H10.2441V7.57895C10.7855 6.90226 11.5975 5.68421 13.6276 5.68421C16.199 5.68421 18.0938 7.30827 18.0938 10.9624V18Z"
          fill="#ffffff"
        />
      </g>
      <defs>
        <clipPath id="clip0_4110_13777">
          <rect
            width="18"
            height="18"
            fill="white"
            transform="translate(0.09375)"
          />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(LinkedinIcon);
