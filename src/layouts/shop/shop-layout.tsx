import React from "react";
import Footer from "./footer";
import Header from "./header";
import { Box } from "@mui/material";
import { usePathname } from "@/routers/hook";
import { CheckoutProvider } from "@/components/checkout/context";
import { WishListProvider } from "@/components/wishlist/context/wishlist-provider";

type Props = {
  children: React.ReactNode;
  showTopbar?: boolean;
  topIcon?: boolean;
};

export default function ShopLayout({
  children,
  showTopbar = true,
  topIcon = true,
}: Props) {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <CheckoutProvider>
      <WishListProvider>
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
              // ...(!isHome && {
              //   pt: { xs: 8, md: 10 },
              // }),
            }}
          >
            {children}

            {/*{topIcon && (*/}
            {/*  <Container*/}
            {/*    sx={{*/}
            {/*      position: "absolute",*/}
            {/*      top: 0,*/}
            {/*      left: 0,*/}
            {/*      right: 0,*/}
            {/*    }}*/}
            {/*  >*/}
            {/*    <Box component="div" sx={{ position: "relative" }}>*/}
            {/*      <Box*/}
            {/*        sx={{*/}
            {/*          position: "absolute",*/}
            {/*          width: 40,*/}
            {/*          height: 40,*/}
            {/*          borderRadius: "50%",*/}
            {/*          bgcolor: "#F3BC1A",*/}
            {/*          right: 0,*/}
            {/*          top: 90,*/}
            {/*        }}*/}
            {/*      />*/}

            {/*      <Box*/}
            {/*        component="div"*/}
            {/*        sx={{*/}
            {/*          position: "absolute",*/}
            {/*          width: 15,*/}
            {/*          height: 15,*/}
            {/*          borderRadius: "50%",*/}
            {/*          bgcolor: "#6AB67A",*/}
            {/*          right: 60,*/}
            {/*          top: 150,*/}
            {/*        }}*/}
            {/*      />*/}
            {/*    </Box>*/}
            {/*  </Container>*/}
            {/*)}*/}
          </Box>

          {/* FOOTER */}
          <Footer />
        </Box>
      </WishListProvider>
    </CheckoutProvider>
  );
}
