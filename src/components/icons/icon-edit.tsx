import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function EditIcon({ color = "#292F3D", ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 13 16"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g clipPath="url(#clip0_4301_19948)">
        <path
          d="M0.634921 16C0.380952 16 0 15.746 0 15.3651C0 15.1111 0.253968 14.7302 0.634921 14.7302H12.1905C12.4444 14.7302 12.8254 14.9841 12.8254 15.3651C12.8254 15.619 12.5714 16 12.1905 16H0.634921ZM0.507936 12.6984C0.380952 12.6984 0.253968 12.6984 0.126984 12.5714C0 12.3175 0 12.1905 0 12.0635L0.380952 8.63492C0.380952 8.25397 0.507936 8 0.761905 7.74603L8.12698 0.380952C8.38095 0.126984 8.7619 0 9.01587 0C9.39682 0 9.65079 0.126984 10.0317 0.380952L12.3175 2.66667C12.8254 3.1746 12.8254 4.06349 12.3175 4.57143L4.95238 11.9365C4.69841 12.1905 4.44444 12.3175 4.06349 12.3175L0.507936 12.6984ZM1.52381 8.63492L1.14286 11.4286L4.06349 11.1746L8.88889 6.34921L6.34921 3.80952L1.52381 8.63492ZM7.11111 3.04762L9.65079 5.5873L11.6825 3.68254L9.01587 1.01587L7.11111 3.04762Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_4301_19948">
          <rect width="12.6984" height="16" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(EditIcon);
