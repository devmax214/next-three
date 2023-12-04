import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function PlusIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path
        d="M0.787109 7.63672L13.7871 7.63672"
        stroke="#292F3D"
        strokeLinecap="round"
      />
      <path
        d="M7.07031 13.9141L7.07031 0.914063"
        stroke="#292F3D"
        strokeLinecap="round"
      />
    </Box>
  );
}

export default memo(PlusIcon);
