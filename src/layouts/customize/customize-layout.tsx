import React from "react";
import { Box } from "@mui/material";
import Header from "./header/header";
import Footer from "./footer";
import { CheckoutProvider } from "@/components/checkout/context";
import Icon1 from '@/components/icons/auth/icon1';
import Icon2 from '@/components/icons/auth/icon2';
import Icon3 from '@/components/icons/auth/icon3';
import Icon4 from '@/components/icons/auth/icon4';

type Props = {
  children: React.ReactNode;
};

export default function CustomizeLayout({ children }: Props) {
  return (
    <CheckoutProvider>
      <Box
        component="div"
        sx={{ display: "flex", flexDirection: "column", height: 1 }}
      >
        <Header />

        <Box
          component="main"
          sx={{
            position: "relative",
            flexGrow: 1,
            top: { xs: 63, md: 80 },
            '.MuiContainer-root': {
              maxWidth: 1350,
              pb: {md: 20, xs: 12}
            },
            // bgcolor: "#F9F5EE",
          }}
        >
          {children}
          <Box
            component="div"
            sx={{
              position: "absolute",
              left: {xs: 38, md: 67},
              top: {xs: 1.44, md: 5},
              width: { xs: 17, md: "22px" },
              height: { xs: 18.23, md: "22px" },
              transform: "translateY(-50%)",
            }}
          >
            <Icon1 />
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              left: {xs: 4, md: 24},
              top: {xs: 40, md: 80},
              width: { xs: 10, md: "12px" },
              height: { xs: 10.73, md: "12px" },
              transform: "translateY(-50%)",
            }}
          >
            <Icon2 />
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              right: { xs: 20, md: 26},
              top: { xs:1.44, md: 5},
              width: { xs: 18, md: "24px" },
              height: { xs: 19.31, md: "24px" },
              transform: "translateY(-50%)",
            }}
          >
            <Icon3 />
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              right: { xs: 7, md: 10},
              top: { xs: 60, md: 80},
              width: { xs: 10, md: "14px" },
              height: { xs: 10.73, md: "14px" },
              transform: "translateY(-50%)",
            }}
          >
            <Icon4 />
          </Box>
        </Box>

        <Footer />
      </Box>
    </CheckoutProvider>
  );
}
