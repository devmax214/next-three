import { memo } from "react";
import { useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

function DiscountIcon({ ...other }: BoxProps) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const WARNING_LIGHT = theme.palette.warning.light;

  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 16 14"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g clipPath="url(#clip0_3763_7850)">
        <path
          d="M15.44 5.6C15.76 5.6 16 5.36 16 5.04V4.32C16 0.96 15.04 0 11.68 0H4.24C0.96 0 0 0.96 0 4.32V4.72C0 5.04 0.24 5.28 0.56 5.28C1.28 5.28 1.84 5.84 1.84 6.56C1.84 7.28 1.28 7.84 0.56 7.84C0.24 7.84 0 8.08 0 8.4V8.8C0 12.08 0.96 13.04 4.24 13.04H11.68C14.96 13.04 16 12.08 16 8.8C16 8.48 15.76 8.24 15.44 8.24C14.72 8.24 14.16 7.68 14.16 6.96C14.16 6.16 14.72 5.6 15.44 5.6ZM5.6 4C6.08 4 6.4 4.32 6.4 4.8C6.4 5.28 6.08 5.6 5.6 5.6C5.12 5.6 4.8 5.28 4.8 4.8C4.8 4.4 5.12 4 5.6 4ZM10.4 9.6C9.92 9.6 9.6 9.28 9.6 8.8C9.6 8.32 9.92 8 10.4 8C10.88 8 11.2 8.32 11.2 8.8C11.2 9.28 10.88 9.6 10.4 9.6ZM11.12 4.48L5.76 9.84C5.68 9.92 5.52 10 5.36 10C5.2 10 5.04 9.92 4.96 9.84C4.72 9.6 4.72 9.2 4.96 8.96L10.32 3.6C10.56 3.36 10.96 3.36 11.2 3.6C11.36 3.92 11.36 4.24 11.12 4.48Z"
          fill="#EEEEEE"
        />
      </g>
      <defs>
        <clipPath id="clip0_3763_7850">
          <rect width="16" height="13.04" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(DiscountIcon);
