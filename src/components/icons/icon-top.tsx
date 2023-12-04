import { memo } from "react";
import { useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

function TopIcon({ ...other }: BoxProps) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const WARNING_LIGHT = theme.palette.warning.light;

  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 47 26"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g clipPath="url(#clip0_3782_9362)">
        <path
          d="M9.23858 18.4772C14.3409 18.4772 18.4772 14.3409 18.4772 9.23858C18.4772 4.13625 14.3409 0 9.23858 0C4.13625 0 0 4.13625 0 9.23858C0 14.3409 4.13625 18.4772 9.23858 18.4772Z"
          fill="#F3BC1A"
        />
        <path
          d="M41.9695 26.0659C44.5571 26.0659 46.6547 23.9682 46.6547 21.3806C46.6547 18.793 44.5571 16.6953 41.9695 16.6953C39.3818 16.6953 37.2842 18.793 37.2842 21.3806C37.2842 23.9682 39.3818 26.0659 41.9695 26.0659Z"
          fill="#6AB67A"
        />
      </g>
      <defs>
        <clipPath id="clip0_3782_9362">
          <rect width="46.6548" height="26" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(TopIcon);
