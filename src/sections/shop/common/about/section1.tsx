import { MotionViewport, varFade } from "@/components/animate";
import { Box, Container, Grid, Typography } from "@mui/material";
import { m } from "framer-motion";
import React from "react";
import { secondaryFont } from "@/theme/typography";

type Props = { mode?: "colored" | "dark" };

export default function Section1({ mode = "colored" }: Props) {
  return (
    <>
      <Box
        component="div"
        sx={{
          position: "relative",
          bgcolor: mode === "dark" ? "#fff" : "#F9F5EE",
          color: "#292F3D",
        }}
      >
        <Container component={MotionViewport}>
          <Grid container sx={{ minHeight: 600 }} spacing={10}>
            <Grid
              item
              xs={12}
              md={6}
              // sx={{
              //   display: "flex",
              //   flexDirection: "column",
              //   alignItems: "center",
              //   justifyContent: "center",
              // }}
            >
              <Typography
                sx={{
                  fontSize: { xs: 15, md: 16 },
                  fontWeight: 500,
                  mt: 10,
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: mode === "colored" ? "#F05A4A" : "#858585",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  WonderRaw
                </Typography>{" "}
                came about through the junction of two words –{" "}
                <Typography
                  component="span"
                  sx={{
                    color: mode === "colored" ? "#F05A4A" : "#858585",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  Wonder
                </Typography>{" "}
                +{" "}
                <Typography
                  component="span"
                  sx={{
                    color: mode === "colored" ? "#F05A4A" : "#858585",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  Raw
                </Typography>{" "}
                – that represents our main mission: to make it possible for the
                desire to do something new, unique and original (Wonder) to come
                true, from garments in their natural state (Raw), being able to
                transform and customize them.
                <br />
                <br /> We are located in the north of Portugal and we have a
                high level of know-how in the textile sector.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component={m.img}
                src="/images/about3.png"
                variants={varFade().in}
                sx={{
                  width: "40vw",
                  objectFit: "cover",
                  position: "absolute",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
