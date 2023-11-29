import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import ReturnRequestForm from "./return-request-form";
import { secondaryFont } from "@/theme/typography";

type Props = {};

export default function OrderRefundRegister(props: Props) {
  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: "#fff",
          position: "relative",
        }}
      >
        <Container
          sx={{
            py: { xs: 10, md: 10 },
          }}
        >
          <CustomBreadCrumbs
            mode="dark"
            heading="CREATE YOUR RETURN"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              { name: "Create your return" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />

          <Stack sx={{ width: "60%" }} gap={5}>
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: "#5C6166",
                fontFamily: secondaryFont.style.fontFamily,
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

            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 500,
                color: "#292F3D",
                fontFamily: secondaryFont.style.fontFamily,
              }}
            >
              Our support team will contact you in 48 hours
            </Typography>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
