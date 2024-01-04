import React from "react";
import { AppBar, Box, Container, Stack, Toolbar } from "@mui/material";

import { bgBlur } from "@/theme/css";
import { useTheme } from "@mui/material/styles";
import Logo from "@/components/logo";

import DiscountBar from "@/layouts/shop/discount";
import { useOffsetTop, useResponsive } from "@/hooks";
import {
  CartButton,
  CashTypeButton,
  LanguageButton,
  Searchbar,
  UserButton,
  WishListButton,
} from "./button";
import NavDesktop from "./nav-desktop";
import NavMobile from "./nav-mobile";
import { HEADER } from "../../../../global-config";
import { navConfig } from "./config-navigation";

type Props = {};

export default function Header({ }: Props) {
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
        }}
      >
        <Container sx={{ height: 1, display: "flex", alignItems: "center" }}>
          <Logo color="dark" sx={{ width: { xs: 158, md: 200 } }} />

          {mdUp && (
            <>
              <NavDesktop offsetTop={offsetTop} data={navConfig} />
              <Stack direction="row" gap={3} sx={{ ml: 3 }}>
                <CashTypeButton />

                <LanguageButton />
              </Stack>
            </>
          )}

          <Box component="div" sx={{ flexGrow: 1 }} />

          <Stack direction="row" gap={1}>
            {mdUp && <Searchbar />}

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
