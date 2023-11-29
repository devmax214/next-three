import React from "react";
import { Box, Button, Container, Grid, Stack, Typography } from "@mui/material";
import { MotionViewport, varFade } from "@/components/animate";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import { secondaryFont } from "@/theme/typography";
import { m } from "framer-motion";

type Props = {};

export default function PromoView(props: Props) {
  const renderImg = (
    <>
      <Box
        component={m.img}
        src="/images/promo.jpg"
        variants={varFade().in}
        sx={{
          height: 1,
          width: 0.5,
          objectFit: "cover",
          position: "absolute",
          left: 0,
        }}
      />

      <Box
        component="div"
        sx={{ position: "absolute", textAlign: "center", pt: 12 }}
      >
        <Typography
          sx={{
            fontSize: { xs: 72, md: 98 },
            fontWeight: 700,
            color: "#858585",
          }}
        >
          SALE
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 22, md: 28 },
            fontWeight: 700,
            color: "#fff",
          }}
        >
          UP TO 75% OFF
          <br /> SELECTED ITEMS
        </Typography>
      </Box>
    </>
  );

  const renderDescription = (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ height: 1 }}
    >
      <m.div variants={varFade().inUp}>
        {
          <Box component="div">
            <Typography
              sx={{
                fontSize: 19,
                fontWeight: 600,
                color: "#292F3D",
                mb: 2,
                fontFamily: secondaryFont.style.fontFamily,
              }}
            >
              Fashion for the ones who do care
            </Typography>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: "#5C6166",
                mb: 4,
                fontFamily: secondaryFont.style.fontFamily,
              }}
            >
              Discover unmatched deals! From trendy fashion to cutting-edge
              gadgets, find all you need at unbeatable prices. Browse now and
              elevate your shopping experience with us. Your one-stop shop for
              quality and savings.
            </Typography>

            <Button
              variant="contained"
              size="large"
              sx={{
                width: 180,
                bgcolor: "#000000",
                color: "#fff",
                "&:hover": {
                  color: "#000000",
                  bgcolor: "#E6E6E6",
                },
              }}
            >
              Learn more
            </Button>
          </Box>
        }
      </m.div>
    </Stack>
  );

  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: "#fff",
          position: "relative",
          py: { xs: 10, md: 10 },
        }}
      >
        <Container component={MotionViewport}>
          <CustomBreadCrumbs
            heading="PROMO"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              { name: "Promo" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />
        </Container>

        <Box component="div" sx={{ position: "relative" }}>
          <Container component={MotionViewport}>
            <Grid container sx={{ minHeight: 500 }}>
              <Grid xs={12} md={6}>
                {renderImg}
              </Grid>
              <Grid xs={12} md={6} p={8}>
                {renderDescription}
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}
