import React from "react";
import {
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { MotionViewport } from "@/components/animate";
import { PATH_SHOP } from "@/routers/path";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import ContactForm from "../contact-form";
import FacebookIcon from "@/components/icons/icon-facebook";
import LinkedinIcon from "@/components/icons/icon-linkedin";
import TiktokIcon from "@/components/icons/icon-tiktok";
import WhatsappIcon from "@/components/icons/icon-whatsapp";
import InstagramIcon from "@/components/icons/icon-instagram";
import { secondaryFont } from "@/theme/typography";

type Props = { mode?: "colored" | "dark" };

export default function ContactView({ mode = "colored" }: Props) {
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
            py: { xs: 10, md: 10 },
          }}
        >
          <CustomBreadCrumbs
            mode={mode}
            heading="CONTACT"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              { name: "Contact" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />

          <Grid container spacing={{ xs: 2, md: 8 }}>
            <Grid item xs={12} md={6}>
              <Stack gap={{ xs: 2, md: 6 }}>
                <Typography
                  sx={{
                    fontSize: { xs: 22, md: 28 },
                    fontWeight: 700,
                    color: "#292F3D",
                  }}
                >
                  Do you need our help?
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 15, md: 16 },
                    fontWeight: 500,
                    color: "#5C6166",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  Rua do Monte 453, Cávado Park – Pav. # 1,4750-552 Manhente –
                  Barcelos, Portugal
                </Typography>
                <Typography
                  sx={{
                    fontSize: { xs: 17, md: 19 },
                    fontWeight: 500,
                    color: mode === "dark" ? "#858585" : "#F05A4A",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  general@wonder-raw.com
                </Typography>

                <Stack direction="row" gap={2}>
                  <IconButton>
                    <FacebookIcon sx={{ width: 9, height: 18 }} />
                  </IconButton>

                  <IconButton>
                    <InstagramIcon sx={{ width: 19, height: 18 }} />
                  </IconButton>

                  <IconButton>
                    <LinkedinIcon sx={{ width: 19, height: 18 }} />
                  </IconButton>

                  <IconButton>
                    <TiktokIcon sx={{ width: 16, height: 18 }} />
                  </IconButton>

                  <IconButton>
                    <WhatsappIcon sx={{ width: 18, height: 18 }} />{" "}
                  </IconButton>
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <ContactForm mode={mode} />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
