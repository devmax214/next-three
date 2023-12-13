import React from "react";
import { bgBlur } from "@/theme/css";
import { AppBar, Box, Container, Stack, Toolbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Logo from "@/components/logo";
import { useOffsetTop, useResponsive } from "@/hooks";
import NavDesktop from "@/layouts/shop/header/nav-desktop";
import { CashTypeButton, LanguageButton } from "@/layouts/shop/header/button";

import CartButton from "./cart-button";
import WishListButton from "./wish-list-button";
import UserButton from "./user-button";

import { navConfig } from "./config-navigation";
import { HEADER } from "../../../../global-config";
import NavMobile from "./nav-mobile";
import DiscountBar from "@/layouts/shop/discount";

type Props = {};

export default function Header(props: Props) {
  const theme = useTheme();

  const mdUp = useResponsive("up", "md");

  const offsetTop = useOffsetTop(HEADER.H_DESKTOP);

  return (
    <AppBar>
      <Toolbar
        disableGutters
        sx={{
          height: {
            xs: HEADER.H_MOBILE,
            md: HEADER.H_DESKTOP,
          },
          transition: theme.transitions.create(["height"], {
            easing: theme.transitions.easing.easeInOut,
            duration: theme.transitions.duration.shorter,
          }),
          ...(offsetTop && {
            ...bgBlur({
              color: theme.palette.background.default,
            }),
            height: {
              md: HEADER.H_DESKTOP_OFFSET,
            },
          }),
          '.MuiContainer-root': {
            maxWidth: 1280
          }
        }}
      >
        <Container sx={{ height: 1, display: "flex", alignItems: "center" }}>
          <Logo color="colored" sx={{ width: { xs: 158, md: 200 } }} />

          {mdUp && <NavDesktop offsetTop={offsetTop} data={navConfig} />}

          <Box component="div" sx={{ flexGrow: 1 }} />

          {mdUp && (
            <Stack direction="row" gap={3} sx={{ mr: 4 }}>
              <CashTypeButton />

              <LanguageButton />
            </Stack>
          )}

          <Stack direction="row" gap={1}>
            <UserButton />

            <WishListButton />

            <CartButton />

            {!mdUp && <NavMobile offsetTop={offsetTop} />}
          </Stack>
        </Container>
      </Toolbar>
      <DiscountBar />
    </AppBar>
  );
}
