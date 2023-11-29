import { memo } from "react";
import Box, { BoxProps } from "@mui/material/Box";

function FacebookIcon({ ...other }: BoxProps) {
  return (
    <Box
      component="svg"
      width="100%"
      height="100%"
      fill="none"
      viewBox="0 0 9 18"
      xmlns="http://www.w3.org/2000/svg"
      {...other}
    >
      <path
        d="M1.90636 3.62838C1.90636 4.09459 1.90636 6.2027 1.90636 6.2027H0V9.34459H1.90636V18H5.82158V9.34459H8.44539C8.44539 9.34459 8.69137 7.82432 8.81437 6.18243C8.46589 6.18243 5.84208 6.18243 5.84208 6.18243C5.84208 6.18243 5.84208 4.35811 5.84208 4.03378C5.84208 3.70946 6.27255 3.28378 6.68252 3.28378C7.11299 3.28378 7.99443 3.28378 8.81437 3.28378C8.81437 2.85811 8.81437 1.37838 8.81437 0C7.70745 0 6.45704 0 5.90358 0C1.80387 0 1.90636 3.14189 1.90636 3.62838Z"
        fill="#292F3D"
      />
    </Box>
  );
}

export default memo(FacebookIcon);
