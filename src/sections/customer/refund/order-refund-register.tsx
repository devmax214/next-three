import React, { useState, useEffect } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_CONFIGURATOR } from "@/routers/path";
import ReturnRequestForm from "./return-request-form";
import { secondaryFont } from "@/theme/typography";
import { useResponsive } from "@/hooks";

type Props = {};

export default function OrderRefundRegister(props: any) {
  const smDown = useResponsive("down", "sm");
  useEffect(() => {
    smDown &&
      window.scrollTo({
        top: 300,
        left: 0,
        behavior: 'smooth'
      });
  }, [])

  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: "#F9F5EE",
          position: "relative",
        }}
      >
        <Container
          sx={{
            py: { xs: 10, md: 10 },
          }}
        >
          <CustomBreadCrumbs
            heading="CREATE YOUR RETURN"
            links={[
              {
                name: "Home",
                href: PATH_CONFIGURATOR.root,
              },
              { name: "Create your return" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />

          <Stack sx={{ width: { md: "60%", xs: "100%" } }} gap={5}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: "#5C6166",
                fontFamily: secondaryFont.style.fontFamily,
                width: { md: 595, xs: "100%" }
              }}
            >
              To help us find your order please enter your order number below
              including the hashtag and the two letters like the following
              example{" "}
              <Typography
                component="span"
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#292F3D",
                }}
              >
                #CS123456.
              </Typography>
            </Typography>

            <ReturnRequestForm />

            {props.submited &&
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#292F3D",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                Request submited. Our support team will contact you in 48 hours.
              </Typography>
            }
          </Stack>
        </Container>
      </Box>
    </>
  );
}
