import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function Icon1({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="14"
      height="14"
      fill="none"
      viewBox="0 0 14 14"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path d="M7 14C10.866 14 14 10.866 14 7C14 3.13401 10.866 0 7 0C3.13401 0 0 3.13401 0 7C0 10.866 3.13401 14 7 14Z" fill="#F05A4A" />
    </Box>
  );
}

export default memo(Icon1);
