import { Box, Container, Typography } from "@mui/material";
import { m } from "framer-motion";
import { MotionViewport, varFade } from "@/components/animate";
import React from "react";

type Props = { mode?: "colored" | "dark" };

export default function Section4({ mode = "colored" }: Props) {
  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: mode === "dark" ? "#fff" : "#F9F5EE",
          position: "relative",
        }}
      >
        <Container
          component={MotionViewport}
          sx={{
            py: { xs: 15, md: 30 },
          }}
        >
          <m.div variants={varFade().inDown}>
            <Typography
              sx={{
                fontSize: { xs: 36, md: 48 },
                fontWeight: 400,
                color: "#292F3D",
                textAlign: "center",
              }}
            >
              “
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: 36, md: 48 },
                  fontWeight: 600,
                  color: mode === "dark" ? "#ACB1B8" : "#F05A4A",
                }}
              >
                WonderRaw
              </Typography>{" "}
              is for the
              <br />{" "}
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: 36, md: 48 },
                  fontWeight: 600,
                  color: "#000",
                }}
              >
                creative, authentic
              </Typography>{" "}
              and{" "}
              <Typography
                component="span"
                sx={{
                  fontSize: { xs: 36, md: 48 },
                  fontWeight: 600,
                  color: mode === "dark" ? "#ACB1B8" : "#F05A4A",
                }}
              >
                disruptive
              </Typography>
              ”
            </Typography>
          </m.div>
        </Container>

        {mode === "colored" && (
          <>
            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 34,
                height: 34,
                borderRadius: "50%",
                bgcolor: "#F05A4A",
                left: 200,
                top: 100,
              }}
            />

            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 22,
                height: 22,
                borderRadius: "50%",
                bgcolor: "#6AB67A",
                right: 200,
                top: 110,
              }}
            />
          </>
        )}
      </Box>
    </>
  );
}
