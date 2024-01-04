import { memo } from "react";
import { useTheme } from "@mui/material/styles";
import Box, { BoxProps } from "@mui/material/Box";

function BottomIcon({ ...other }: BoxProps) {
  const theme = useTheme();

  const PRIMARY_MAIN = theme.palette.primary.main;

  const WARNING_LIGHT = theme.palette.warning.light;

  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 79 50"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g clipPath="url(#clip0_3782_9365)">
        <path
          d="M62.9001 66.7001C75.078 66.7001 84.9501 56.828 84.9501 44.6501C84.9501 32.4722 75.078 22.6001 62.9001 22.6001C50.7222 22.6001 40.8501 32.4722 40.8501 44.6501C40.8501 56.828 50.7222 66.7001 62.9001 66.7001Z"
          fill="#550248"
        />
        <path
          d="M5.6 39.8499C8.69279 39.8499 11.2 37.3427 11.2 34.2499C11.2 31.1571 8.69279 28.6499 5.6 28.6499C2.50721 28.6499 0 31.1571 0 34.2499C0 37.3427 2.50721 39.8499 5.6 39.8499Z"
          fill="#6AB67A"
        />
        <path
          d="M52.75 12.5C56.2018 12.5 59 9.70178 59 6.25C59 2.79822 56.2018 0 52.75 0C49.2982 0 46.5 2.79822 46.5 6.25C46.5 9.70178 49.2982 12.5 52.75 12.5Z"
          fill="#F3BC1A"
        />
        <path
          d="M34.8999 68.55C33.9999 68.55 33.1499 68.15 32.5499 67.35C26.5999 59.4 24.0499 49.65 25.2999 39.8C27.9499 19.1 46.9999 4.40003 67.7499 7.05003C77.4499 8.30003 86.1499 13.15 92.2999 20.7C93.2999 21.95 93.1499 23.8 91.8999 24.8C90.6499 25.8 88.7999 25.65 87.7999 24.4C82.5999 18 75.1999 13.9 67.0499 12.85C49.4999 10.6 33.3999 23.05 31.1499 40.55C30.0999 48.85 32.2499 57.15 37.2999 63.85C38.2499 65.15 37.9999 67 36.6999 67.95C36.1499 68.4 35.4999 68.55 34.8999 68.55Z"
          fill="#F3BC1A"
        />
      </g>
      <defs>
        <clipPath id="clip0_3782_9365">
          <rect width="93" height="68.55" fill="white" />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(BottomIcon);
