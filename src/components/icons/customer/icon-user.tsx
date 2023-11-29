import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function OrderIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g clipPath="url(#clip0_3920_6020)">
        <path
          d="M20 19.5121H0V17.4633C0 13.756 7.02439 12.195 9.95122 12.195C12.878 12.195 19.9024 13.6584 19.9024 17.4633V19.5121H20ZM0.97561 18.5365H19.0244V17.4633C19.0244 14.8292 13.1707 13.1706 10.0488 13.1706C6.92683 13.1706 0.97561 14.8292 0.97561 17.4633V18.5365ZM9.95122 10.4389C7.02439 10.4389 4.68293 8.09747 4.68293 5.17064C4.68293 2.24381 7.02439 -0.0976562 9.95122 -0.0976562C12.878 -0.0976562 15.2195 2.24381 15.2195 5.17064C15.2195 8.09747 12.878 10.4389 9.95122 10.4389ZM9.95122 0.975515C7.60976 0.975515 5.7561 2.92673 5.7561 5.2682C5.7561 7.60966 7.70732 9.56088 10.0488 9.56088C12.3902 9.56088 14.3415 7.60966 14.3415 5.2682C14.2439 2.92673 12.2927 0.975515 9.95122 0.975515Z"
          fill="#292F3D"
        />
      </g>
      <defs>
        <clipPath id="clip0_3920_6020">
          <rect width="20" height="19.5122" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(OrderIcon);
