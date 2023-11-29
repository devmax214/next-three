import { forwardRef } from "react";
import { Box, BoxProps, Link } from "@mui/material";
import NextLink from "next/link";

export interface LogoProps extends BoxProps {
  color?: "dark" | "white" | "colored";
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, color = "white", sx, ...other }, ref) => {
    const logo = (
      <Box ref={ref} component="div">
        <Box
          component="img"
          src={
            color === "white"
              ? "/images/logo/logo_white.png"
              : color === "dark"
              ? "/images/logo/logo_grey.png"
              : "/images/logo/logo_color.png"
          }
          sx={{ width: "180px", ...sx }}
        />
      </Box>
    );

    return (
      <Link component={NextLink} href="/" sx={{ display: "contents" }}>
        {logo}
      </Link>
    );
  }
);

export default Logo;
