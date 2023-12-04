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
          mt: { xs: 10, md: 20 },
          pr: { xs: 4, md: 8 },
          ...(direction === "right" && {
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
              mb: 4,
              ...(mode === "dark" && { color: "#ffffff" }),
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
                ...(mode === "dark" && { color: "#ffffff" }),
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
                ...(mode === "dark" && { color: "#ffffff" }),
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
          height: 1,
          width: 0.5,
          objectFit: "cover",
          position: "absolute",
          ...(direction === "right" && { left: 0 }),
        }}
      />
    </>
  );

  return (
    <>
      <Box
        component="div"
        sx={{
          minHeight: 700,
          position: "relative",
          ...(mode === "dark" && { bgcolor: "#6B6FB5" }),
        }}
      >
        <Container component={MotionViewport}>
          <Grid container>
            {direction === "left" ? (
              <>
                <Grid xs={12} md={6}>
                  {renderDescription}
                </Grid>
                <Grid xs={12} md={6}>
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
                width: 72,
                height: 137,
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
                width: 75,
                height: 152,
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
