import React, { useCallback } from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useBoolean, useResponsive } from "@/hooks";
import { styled } from "@mui/material/styles";
import CartDeleteIcon from "@/components/icons/icon-cart-delete";
import { ProductCard4 } from "@/components/proudct-cards";
import Icon1 from "@/components/icons/wishlist/icon1";
import Icon2 from "@/components/icons/wishlist/icon2";
import { secondaryFont } from "@/theme/typography";
import FavoriteIcon from "@/components/icons/icon-favorite";
import IconClose from "@/layouts/shop/header/button/icon-close";
import { useWishListContext } from "@/components/wishlist/context/wishlist-content";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { PATH_CONFIGURATOR } from "@/routers/path";

const Wrapper = styled(Box)<{
  expand: boolean;
}>(({ theme, expand }) => ({
  position: "absolute",
  right: expand ? "50%" : 82,
  top: 20,
  width: "100%",
  maxWidth: expand ? 1300 : 430,
  transform: expand ? "translateX(50%)" : "",
  zIndex: 99999,
  outline: "none",
  [theme.breakpoints.down("md")]: {
    maxWidth: "calc(100% - 20px)",
    right: 10,
    top: 10,
  },
}));

export default function WishListButton() {
  const { items, onDeleteAllWishlist } = useWishListContext();

  const mdUp = useResponsive("up", "md");

  const wish = useBoolean();

  const expand = useBoolean();

  const { push } = useRouter();

  const { status } = useSession();

  const onClick = useCallback(() => {
    if (status === "authenticated") {
      push(PATH_CONFIGURATOR.gallery);
    } else {
      // push(PATH_CONFIGURATOR.);
    }
  }, [status]);

  return (
    <>
      <IconButton onClick={onClick} disableRipple>
        <FavoriteIcon sx={{ width: 24, height: 24 }} />
      </IconButton>

      <Modal open={wish.value}>
        <Wrapper expand={expand.value}>
          <Stack alignItems="end">
            <IconButton
              onClick={() => {
                wish.onFalse();
                expand.onFalse();
              }}
            >
              <IconClose />
            </IconButton>
          </Stack>

          <Stack
            sx={{
              bgcolor: "#F9F5EE",
              px: expand.value ? 6 : 2,
              py: 3,
              borderRadius: "8px",
            }}
            gap={2}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography
                sx={{
                  fontSize: { xs: 22, md: 28 },
                  fontWeight: 700,
                  color: "#292F3D",
                }}
              >
                WISHLIST
              </Typography>

              <Button
                startIcon={<CartDeleteIcon sx={{ width: 13.4, height: 16 }} />}
                sx={{
                  fontSize: { xs: 15, md: 16 },
                  fontWeight: 500,
                  fontFamily: secondaryFont.style.fontFamily,
                }}
                onClick={onDeleteAllWishlist}
              >
                Remove all
              </Button>
            </Stack>

            <Grid container spacing={2}>
              {items
                ?.slice(0, expand.value ? items.length : 4)
                .map((wish, index) => (
                  <Grid key={index} item xs={6} md={expand.value ? 2 : 6}>
                    <ProductCard4 product={wish} />
                  </Grid>
                ))}
            </Grid>

            {mdUp && !expand.value && (
              <Stack direction="row" justifyContent="center">
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    width: 220,
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                  onClick={expand.onTrue}
                >
                  Open Wishlist
                </Button>
              </Stack>
            )}
          </Stack>

          {expand.value && (
            <>
              <Box
                component="div"
                sx={{
                  position: "absolute",
                  left: 0,
                  bottom: 0,
                  width: 80,
                  height: 100,
                  zIndex: 0,
                }}
              >
                <Icon1 />
              </Box>

              <Box
                component="div"
                sx={{
                  position: "absolute",
                  right: 0,
                  bottom: 0,
                  width: 149,
                  height: 105,
                  zIndex: 0,
                }}
              >
                <Icon2 />
              </Box>
            </>
          )}
        </Wrapper>
      </Modal>
    </>
  );
}
