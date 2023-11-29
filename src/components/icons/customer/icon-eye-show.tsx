import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function EyeShowIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 16 13"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g clipPath="url(#clip0_4006_13019)">
        <path
          d="M15.9004 6.1C14.3004 2.3 11.3004 0 8.00039 0C4.70039 0 1.70039 2.3 0.100391 6.1C0.000390626 6.3 0.000390626 6.5 0.100391 6.7C1.70039 10.5 4.80039 12.8 8.00039 12.8C11.2004 12.8 14.3004 10.5 15.9004 6.7C16.0004 6.5 16.0004 6.3 15.9004 6.1ZM8.00039 11.2C5.50039 11.2 3.10039 9.4 1.70039 6.4C3.10039 3.4 5.50039 1.6 8.00039 1.6C10.5004 1.6 12.9004 3.4 14.3004 6.4C12.9004 9.4 10.5004 11.2 8.00039 11.2ZM8.00039 3.2C6.20039 3.2 4.80039 4.6 4.80039 6.4C4.80039 8.2 6.20039 9.6 8.00039 9.6C9.80039 9.6 11.2004 8.2 11.2004 6.4C11.2004 4.6 9.80039 3.2 8.00039 3.2ZM8.00039 8C7.10039 8 6.40039 7.3 6.40039 6.4C6.40039 5.5 7.10039 4.8 8.00039 4.8C8.90039 4.8 9.60039 5.5 9.60039 6.4C9.60039 7.3 8.90039 8 8.00039 8Z"
          fill="#5C6166"
        />
      </g>
      <defs>
        <clipPath id="clip0_4006_13019">
          <rect width="16" height="12.8" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(EyeShowIcon);
