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
            flexGrow: 1,
            pt: { xs: 8, md: 10 },
            '.MuiContainer-root': {
              maxWidth: 1350,
              pb: 30
            },
            // bgcolor: "#F9F5EE",
          }}
        >
          {children}
          <Box
            component="div"
            sx={{
              position: "absolute",
              left: 67,
              top: 85,
              width: { xs: 93, md: "22px" },
              height: { xs: 68.55, md: "22px" },
              transform: "translateY(-50%)",
            }}
          >
            <Icon1 />
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              left: 24,
              top: 126,
              width: { xs: 93, md: "12px" },
              height: { xs: 68.55, md: "12px" },
              transform: "translateY(-50%)",
            }}
          >
            <Icon2 />
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              right: 26,
              top: 85,
              width: { xs: 93, md: "24px" },
              height: { xs: 68.55, md: "24px" },
              transform: "translateY(-50%)",
            }}
          >
            <Icon3 />
          </Box>
          <Box
            component="div"
            sx={{
              position: "absolute",
              right: 10,
              top: 165,
              width: { xs: 93, md: "14px" },
              height: { xs: 68.55, md: "14px" },
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
