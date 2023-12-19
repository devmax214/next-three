import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { m } from "framer-motion";
import { MotionViewport, varFade } from "@/components/animate";
import Icon1 from "@/components/icons/home/icon1";
import Icon3 from "@/components/icons/home/icon3";
import { useResponsive } from "@/hooks";
import { secondaryFont } from "@/theme/typography";

type Props = {
  title: string;
  image: string;
  description1: string;
  description2: string;
  direction: "left" | "right";
  mode: "white" | "dark";
  isIcon?: boolean;
};

export default function CommunityItem({
  title,
  image,
  description1,
  description2,
  direction,
  mode,
  isIcon,
}: Props) {
  const mdUp = useResponsive("up", "md");

  const renderDescription = (
    <>
      <Box
        component="div"
        sx={{
          textAlign: { xs: "left", md: "unset" },
          mt: { xs: 0, md: 20 },
          pr: { xs: 0, md: 8 },
          ...((direction === "right" && window.screen.width > 768) && {
            pl: { xs: 4, md: 8 },
            pr: { xs: 0, md: 0 },
          }),
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography
            component="div"
            sx={{
              color: "#292F3D",
              fontSize: { xs: 22, md: 28 },
              fontWeight: 700,
              mb: { md: 4, xs: 4 },
              ...((mode === "dark" && window.screen.width > 768) && { color: "#ffffff" }),
            }}
          >
            {title}
          </Typography>
        </m.div>

        <m.div variants={varFade().inUp}>
          <Stack gap={2}>
            <Typography
              sx={{
                color: "#5C6166",
                fontSize: { xs: 15, md: 16 },
                fontWeight: 500,
                fontFamily: secondaryFont.style.fontFamily,
                ...((mode === "dark" && window.screen.width > 768) && { color: "#ffffff" }),
              }}
            >
              {description1}
            </Typography>

            <Typography
              sx={{
                color: "#5C6166",
                fontSize: { xs: 15, md: 16 },
                fontWeight: 500,
                fontFamily: secondaryFont.style.fontFamily,
                ...((mode === "dark" && window.screen.width > 768) && { color: "#ffffff" }),
              }}
            >
              {description2}
            </Typography>
          </Stack>
        </m.div>
      </Box>
    </>
  );

  const renderImg = (
    <>
      <Box
        component={m.img}
        src={image}
        variants={varFade().in}
        sx={{
          height: { xs: 1, md: 1 },
          width: { xs: 1, md: 0.5 },
          objectFit: "cover",
          position: { md: "absolute" },
          ...((direction === "right" && window.screen.width > 768) && { left: 0 }),
        }}
      />
    </>
  );

  return (
    <>
      <Box
        component="div"
        sx={{
          minHeight: { md: 700, xs: 100 },
          position: "relative",
          ...((mode === "dark" && window.screen.width > 768) && { bgcolor: "#6B6FB5" }),
        }}
      >
        <Container component={MotionViewport} sx={{ paddingBottom: { xs: "0 !important;" }, paddingLeft: { xs: 0 }, paddingRight: { xs: 0 } }}>
          <Grid container>
            {direction === "left" || window.screen.width < 768 ? (
              <>
                <Grid xs={12} md={6} sx={{ paddingLeft: { xs: 1 }, paddingRight: { xs: 1 }, paddingTop: { xs: 5 } }}>
                  {renderDescription}
                </Grid>
                <Grid xs={12} md={6} sx={{ mt: { xs: 5 } }}>
                  {renderImg}
                </Grid>
              </>
            ) : (
              <>
                <Grid xs={12} md={6}>
                  {renderImg}
                </Grid>
                <Grid xs={12} md={6}>
                  {renderDescription}
                </Grid>
              </>
            )}
          </Grid>
        </Container>

        {isIcon && (
          <>
            <Box
              component="div"
              sx={{
                position: "absolute",
                width: { md: 72, xs: 50 },
                height: { md: 137, xs: 80 },
                left: 0,
                top: 0,
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <Icon1 />
            </Box>

            <Box
              component="div"
              sx={{
                position: "absolute",
                width: { md: 75, xs: 50 },
                height: { md: 152, xs: 90 },
                right: 0,
                bottom: 0,
                transform: "translateY(50%)",
                zIndex: 1,
              }}
            >
              <Icon3 />
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
