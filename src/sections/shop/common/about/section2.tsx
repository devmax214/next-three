import { Box, Container, Grid, Typography } from "@mui/material";
import { m } from "framer-motion";
import { MotionViewport, varFade } from "@/components/animate";
import Icon1 from "@/components/icons/home/icon1";
import React from "react";
import Icon3 from "@/components/icons/home/icon3";
import { secondaryFont } from "@/theme/typography";

type Props = { mode?: "colored" | "dark" };

export default function Section2({ mode = "colored" }: Props) {
  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: mode === "dark" ? "#fff" : "#EDE9DC",
          position: "relative",
        }}
      >
        <Container
          component={MotionViewport}
          sx={{
            py: { xs: 10, md: 20 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography
              sx={{
                fontSize: 28,
                fontWeight: 400,
                color: "#292F3D",
                mb: 4,
              }}
            >
              <Typography
                component="span"
                sx={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: "#292F3D",
                }}
              >
                Sustainability,
              </Typography>{" "}
              <Typography
                component="span"
                sx={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: mode === "dark" ? "#858585" : "#F05A4A",
                }}
              >
                Responsibility
              </Typography>{" "}
              <br />
              and Authenticity
            </Typography>
          </m.div>

          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#5C6166",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  We are synonymous with sustainability, responsibility, and
                  authenticity. We want to transform the perspective of the
                  textile sector with a commitment to preserve our environment
                  with an on-demand production base.
                </Typography>
              </m.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <m.div variants={varFade().inUp}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#5C6166",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  Knowing that the textile industry has a big impact on the
                  global footprint, WonderRaw seeks to differentiate itself in
                  the way it uses inputs, in the transport of goods and in
                  logistics.
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

            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 23,
                height: 23,
                borderRadius: "50%",
                bgcolor: "#F05A4A",
                left: 140,
                top: 80,
              }}
            />

            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 16,
                height: 16,
                borderRadius: "50%",
                bgcolor: "#6B6FB5",
                left: 40,
                bottom: 80,
              }}
            />

            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 32,
                height: 32,
                borderRadius: "50%",
                bgcolor: "#F3BC1A",
                left: 80,
                bottom: 30,
              }}
            />

            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 13,
                height: 13,
                borderRadius: "50%",
                bgcolor: "#6AB67A",
                right: 30,
                top: 80,
              }}
            />
          </>
        )}
      </Box>
    </>
  );
}
