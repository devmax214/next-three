import { Box, Container, Grid, Typography } from "@mui/material";
import { MotionViewport, varFade } from "@/components/animate";
import { m } from "framer-motion";
import React from "react";
import Icon5 from "@/components/icons/home/icon5";
import { secondaryFont } from "@/theme/typography";

type Props = { mode?: "colored" | "dark" };

export default function Section3({ mode = "colored" }: Props) {
  return (
    <>
      <Box
        component="div"
        sx={{
          position: "relative",
          bgcolor: mode === "dark" ? "#fff" : "#550248",
          color: "#ffffff",
        }}
      >
        <Container component={MotionViewport}>
          <Grid container sx={{ minHeight: 600 }}>
            <Grid xs={12} md={6}>
              <Box
                component={m.img}
                src="/images/about1.jpg"
                variants={varFade().in}
                sx={{
                  height: 1,
                  width: 0.5,
                  objectFit: "cover",
                  position: "absolute",
                  left: 0,
                }}
              />
            </Grid>
            <Grid
              xs={12}
              md={6}
              pl={5}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: mode === "dark" ? "#000" : "#F3BC1A",
                    mb: 3,
                  }}
                >
                  Community
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    fontFamily: secondaryFont.style.fontFamily,
                    color: mode === "dark" ? "#000" : "#fff",
                  }}
                >
                  At WonderRaw we ensure fair, safe and ethical workplaces so
                  that everyone can prosper. We value our people, their
                  know-how, and team spirit.
                </Typography>
              </m.div>
            </Grid>
          </Grid>
        </Container>

        {mode === "colored" && (
          <>
            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 24,
                height: 24,
                borderRadius: "50%",
                bgcolor: "#F05A4A",
                right: 13,
                bottom: 16,
              }}
            />

            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 16,
                height: 16,
                borderRadius: "50%",
                bgcolor: "#6AB67A",
                right: 76,
                bottom: 76,
              }}
            />
          </>
        )}
      </Box>

      <Box
        component="div"
        sx={{
          position: "relative",
          bgcolor: mode === "dark" ? "#fff" : "#550248",
          color: mode === "dark" ? "#000" : "#ffffff",
        }}
      >
        <Container component={MotionViewport}>
          <Grid container sx={{ minHeight: 600 }}>
            <Grid
              xs={12}
              md={6}
              pr={5}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: mode === "dark" ? "#000" : "#F3BC1A",
                    mb: 3,
                  }}
                >
                  Mission
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  To make it possible for artists to create and make available
                  to the market a collection of casualwear that is customized
                  and produced in a sustainable way.
                </Typography>
              </m.div>

              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    fontSize: 28,
                    fontWeight: 700,
                    color: mode === "dark" ? "#858585" : "#F05A4A",
                    mt: 10,
                    mb: 3,
                  }}
                >
                  Vision
                </Typography>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  To be the leading company in the creation, customization and
                  rapid supply of differentiated, high-quality, and sustainably
                  produced casualwear collections.
                </Typography>
              </m.div>
            </Grid>
            <Grid xs={12} md={6}>
              <Box
                component={m.img}
                src="/images/about2.jpg"
                variants={varFade().in}
                sx={{
                  height: 1,
                  width: 0.5,
                  objectFit: "cover",
                  position: "absolute",
                }}
              />
            </Grid>
          </Grid>
        </Container>

        {mode === "colored" && (
          <>
            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 132,
                height: 111,
                right: 0,
                bottom: 0,
              }}
            >
              <Icon5 />
            </Box>

            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 22,
                height: 22,
                borderRadius: "50%",
                bgcolor: "#550248",
                right: 65,
                top: 32,
              }}
            />

            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 12,
                height: 12,
                borderRadius: "50%",
                bgcolor: "#6AB67A",
                right: "calc(50% - 68px)",
                top: 68,
              }}
            />

            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 24,
                height: 24,
                borderRadius: "50%",
                bgcolor: "#F3BC1A",
                left: 22,
                top: 70,
              }}
            />

            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 14,
                height: 14,
                borderRadius: "50%",
                bgcolor: "#F05A4A",
                left: 61,
                top: 32,
              }}
            />
          </>
        )}
      </Box>
    </>
  );
}
