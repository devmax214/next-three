import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function TiktokIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 16 18"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <g clipPath="url(#clip0_4110_13781)">
        <path
          d="M13.7937 3.79844C13.6937 3.69844 13.5938 3.69844 13.3938 3.59844C13.0938 3.39844 12.7937 3.09844 12.4937 2.79844C11.7937 1.99844 11.5938 1.19844 11.4937 0.698438C11.3937 0.198438 11.4937 -0.101562 11.4937 -0.101562H8.29375V11.8984C8.29375 12.0984 8.29375 12.1984 8.29375 12.3984C8.29375 12.3984 8.29375 12.3984 8.29375 12.4984C8.19375 13.3984 7.69375 14.1984 6.99375 14.5984C6.59375 14.7984 6.19375 14.8984 5.69375 14.8984C4.29375 14.8984 3.09375 13.6984 3.09375 12.2984C3.09375 10.8984 4.29375 9.69844 5.69375 9.69844C5.99375 9.69844 6.19375 9.69844 6.49375 9.79844V6.69844C4.89375 6.49844 3.29375 6.89844 2.09375 7.99844C1.59375 8.39844 1.09375 8.99844 0.79375 9.59844C0.69375 9.79844 0.19375 10.6984 0.09375 12.1984C0.09375 12.9984 0.29375 13.8984 0.39375 14.2984C0.49375 14.4984 0.79375 15.1984 1.19375 15.7984C1.69375 16.2984 2.09375 16.6984 2.59375 16.9984C4.09375 17.9984 5.79375 17.9984 5.79375 17.9984C6.09375 17.9984 6.99375 17.9984 8.09375 17.4984C9.29375 16.8984 9.99375 16.0984 9.99375 16.0984C10.3937 15.5984 10.7937 14.9984 10.9937 14.3984C11.2937 13.6984 11.3938 12.7984 11.3938 12.3984V5.99844L11.8938 6.39844C11.8938 6.39844 12.5938 6.89844 13.6938 7.19844C14.4938 7.39844 15.5938 7.49844 15.5938 7.49844V4.29844C15.2937 4.39844 14.4937 4.19844 13.7937 3.79844Z"
          fill="#ffffff"
        />
      </g>
      <defs>
        <clipPath id="clip0_4110_13781">
          <rect
            width="15.6"
            height="18"
            fill="white"
            transform="translate(0.09375)"
          />
        </clipPath>
      </defs>
    </Box>
  );
}

export default memo(TiktokIcon);
