import React from "react";
import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { useBoolean } from "@/hooks";
import { styled, useTheme } from "@mui/material/styles";
import { useCheckoutContext } from "@/components/checkout/context";
import { ProductCard3 } from "@/components/proudct-cards";
import { fCurrency } from "@/utils/formatNumber";
import Carousel, {
  CarouselArrows,
  CarouselDots,
  useCarousel,
} from "@/components/carousel";
import SvgColor from "@/components/svg-color";
import Image from "@/components/image";
import { _ads } from "@/@mockup/others";
import { PATH_CONFIGURATOR, PATH_SHOP } from "@/routers/path";
import Scrollbar from "@/components/scrollbar";
import { secondaryFont } from "@/theme/typography";
import IconClose from "@/layouts/shop/header/button/icon-close";

const Wrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: 82,
  top: 40,
  width: "100%",
  maxWidth: 480,
  zIndex: 99999,
  [theme.breakpoints.down("md")]: {
    maxWidth: "calc(100% - 20px)",
    right: 10,
    top: 20,
  },
}));

export default function CartButton() {
  const theme = useTheme();

  const checkout = useCheckoutContext();

  const cart = useBoolean();

  const carouselADS = useCarousel({
    rtl: false,
    autoplay: true,
    draggable: true,
    adaptiveHeight: true,
    ...CarouselDots({
      sx: {
        right: "50%",
        bottom: 5,
        position: "absolute",
        color: "primary.light",
        transform: "translateX(50%)",
      },
    }),
  });

  const displayShipping = checkout.shipping !== null ? "Free" : "-";

  const renderCarts = (
    <Grid container>
      {checkout.items.map((item) => (
        <Grid key={item.id} xs={12} md={12}>
          <ProductCard3
            item={item}
            onIncrease={() => {
              checkout.onIncreaseQuantity(item.id);
            }}
            onDecrease={() => {
              checkout.onDecreaseQuantity(item.id);
            }}
            onDelete={() => {
              checkout.onDeleteCart(item.id);
            }}
          />
        </Grid>
      ))}
    </Grid>
  );

  const renderAds = (
    <>
      <Box
        component="div"
        sx={{
          mt: 1,
          mb: 1,
          borderRadius: 2,
          overflow: "hidden",
          position: "relative",
        }}
      >
        <CarouselArrows
          onNext={carouselADS.onNext}
          onPrev={carouselADS.onPrev}
          leftButtonProps={{
            size: "small",
            sx: { top: "calc(50%)", left: 0 },
          }}
          rightButtonProps={{
            size: "small",
            sx: { top: "calc(50% )", right: 0 },
          }}
        >
          <Carousel
            ref={carouselADS.carouselRef}
            {...carouselADS.carouselSettings}
          >
            {_ads.map((ad, index) => (
              <Box
                key={index}
                component="div"
                sx={{ background: "#F9F5EE", py: 2, px: 3, pb: 3 }}
              >
                <Stack direction="row" alignItems="center" gap={2}>
                  <Box
                    component="div"
                    sx={{
                      borderRadius: "8px",
                      background: "#ffffff",
                    }}
                  >
                    <Image
                      src={ad.coverUrl}
                      ratio="1/1"
                      sx={{
                        width: 70,
                        height: 70,
                      }}
                    />
                  </Box>

                  <Stack>
                    <Typography
                      sx={{
                        fontSize: { xs: 15, md: 16 },
                        fontWeight: 500,
                        color: "#292F3D",
                        fontFamily: secondaryFont.style.fontFamily,
                      }}
                    >
                      {ad.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: 13, md: 14 },
                        fontWeight: 500,
                        color: "#5C6166",
                        fontFamily: secondaryFont.style.fontFamily,
                      }}
                    >
                      {ad.subtitle}
                    </Typography>
                  </Stack>
                </Stack>
              </Box>
            ))}
          </Carousel>
        </CarouselArrows>
      </Box>
    </>
  );

  const renderPrice = (
    <Stack gap={1} py={2} sx={{ borderBottom: "1px solid #EEEEEE" }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          sx={{
            fontSize: { xs: 13, md: 14 },
            fontWeight: 500,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
            lineHeight: '18.9px'
          }}
        >
          Discount:
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 13, md: 14 },
            fontWeight: 500,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          {fCurrency(checkout.discount)}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <Typography
          sx={{
            fontSize: { xs: 13, md: 14 },
            fontWeight: 500,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
            lineHeight: '18.9px'
          }}
        >
          Subtotal:
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 13, md: 14 },
            fontWeight: 500,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          {fCurrency(checkout.subTotal)}
        </Typography>
      </Stack>

      <Stack direction="row" justifyContent="space-between">
        <Typography
          sx={{
            fontSize: { xs: 13, md: 14 },
            fontWeight: 500,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
            lineHeight: '18.9px'
          }}
        >
          Shipment:
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 13, md: 14 },
            fontWeight: 600,
            lineHeight: '18.9px',
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          {checkout.shipping ? fCurrency(checkout.shipping) : displayShipping}
        </Typography>
      </Stack>
    </Stack>
  );

  const renderAction = (
    <Stack direction="row" gap={1} justifyContent="space-between" pt={3} pb={5}>
      <Stack>
        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '18.9px',
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Total
        </Typography>
        <Stack direction="row" gap={1}>
          <Typography
            sx={{
              textDecoration: "line-through",
              color: "text.disabled",
              fontSize: { xs: 17, md: 19 },
              fontWeight: 500,
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            {fCurrency(checkout.total)}
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: 17, md: 19 },
              fontWeight: 600,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            {fCurrency(checkout.subTotal)}
          </Typography>
        </Stack>
      </Stack>
      <Stack gap={1}>
        <Button
          variant="contained"
          size="large"
          href={PATH_CONFIGURATOR.checkout}
          sx={{
            fontSize: { xs: 13, md: 16 },
            fontWeight: 500,
            width: '275px',
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 500,
              lineHeight: '21.6px',
              color: "#fff",
              fontFamily: secondaryFont.style.fontFamily,
            }}>
            PROCEED TO CHECKOUT
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );

  return (
    <>
      {/*<IconButton onClick={cart.onTrue}>*/}
      {/*  <Badge badgeContent={4} color="error">*/}
      {/*    <SvgColor src="/icons/cart.svg" sx={{ width: 20, height: 20 }} />*/}
      {/*  </Badge>*/}
      {/*</IconButton>*/}

      <IconButton onClick={cart.onTrue} disableRipple>
        <SvgColor src="/icons/cart.svg" sx={{ bgcolor: "#292F3D", width: 24, height: 24 }} />

        {checkout.items.length > 0 && (
          <Box
            component="div"
            sx={{
              width: 13,
              height: 13,
              bgcolor: "#F05A4A",
              borderRadius: "50%",
              color: "white",
              fontSize: 10,
              display: "flex",
              justifyContent: "center",
              alignItem: "center",
              position: "absolute",
            }}
          >
            {checkout.items.length}
          </Box>
        )}
      </IconButton>

      <Modal open={cart.value}>
        <>
          <Wrapper>
            <IconButton
              disableRipple
              sx={{ position: "absolute", right: { xs: 0, md: 0 }, top: -2 }}
              onClick={cart.onFalse}
            >
              <IconClose />
            </IconButton>

            <Stack direction="row" alignItems="center" gap={1}>
              <Typography
                sx={{
                  fontSize: { xs: 22, md: 28 },
                  mb: 1.5,
                  fontWeight: 700,
                  lineHeight: '34.13px',
                  color: "#ffffff",
                }}
              >
                My Cart,
              </Typography>

              <Typography
                sx={{
                  fontSize: { xs: 17, md: 19 },
                  fontWeight: 500,
                  color: "#ACB1B8",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                {checkout.items.length > 0 && `(${checkout.items.length} items)`}
              </Typography>
            </Stack>

            <Scrollbar sx={{ maxHeight: "90vh" }}>
              <Stack
                sx={{
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 5,
                  p: 2,
                }}
              >
                {renderCarts}

                {/* {renderAds} */}

                {renderPrice}

                {renderAction}
              </Stack>
            </Scrollbar>
          </Wrapper>
        </>
      </Modal>
    </>
  );
}
