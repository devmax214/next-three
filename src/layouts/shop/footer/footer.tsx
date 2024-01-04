import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import Logo from "@/components/logo";
import { LINKS } from "@/layouts/shop/footer/config-footer";
import { RouterLink } from "@/routers/components";
import FacebookIcon from "@/components/icons/icon-facebook";
import InstagramIcon from "@/components/icons/icon-instagram";
import LinkedinIcon from "@/components/icons/icon-linkedin";
import TiktokIcon from "@/components/icons/icon-tiktok";
import WhatsappIcon from "@/components/icons/icon-whatsapp";
import SizeGuideButton from "./size-guide-button";
import { useResponsive } from "@/hooks";
import { PATH_SHOP } from "@/routers/path";
import { secondaryFont } from "@/theme/typography";

export default function Footer() {
  const upMd = useResponsive("up", "md");

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        bgcolor: "#E6E6E6",
        color: "#5C6166",
      }}
    >
      <Divider />

      <Container
        sx={{
          pt: 10,
          pb: 10,
          textAlign: { xs: "left", md: "unset" },
        }}
      >
        <Stack
          sx={{ flexDirection: { xs: "column", md: "row" } }}
          justifyContent="space-between"
          gap={{ xs: 5, md: 0 }}
        >
          <Stack gap={10}>
            <Logo color="dark" sx={{ mb: 3 }} />

            {upMd && (
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#5C6166",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                Copyright 2023 WonderRaw
              </Typography>
            )}
          </Stack>

          <Stack gap={1}>
            <>
              {LINKS.map((link) => (
                <Link
                  key={link.name}
                  component={RouterLink}
                  href={link.href}
                  sx={{
                    color: "#5C6166",
                    fontSize: 14,
                    fontWeight: 500,
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  {link.name}
                </Link>
              ))}

              <SizeGuideButton />
            </>
          </Stack>

          <Stack gap={1}>
            <Typography
              sx={{
                fontSize: { xs: 13, md: 14 },
                color: "#000",
                fontWeight: 600,
                fontFamily: secondaryFont.style.fontFamily,
              }}
            >
              Payment Options
            </Typography>

            <Box
              component="img"
              src="/images/payment.svg"
              sx={{ width: { xs: 172, md: 167 } }}
            />
          </Stack>

          <Stack gap={2} sx={{ maxWidth: { xs: "auto", md: "300px" } }}>
            <Stack gap={2}>
              <Typography
                component="div"
                sx={{
                  fontSize: { xs: 13, md: 14 },
                  color: "#000",
                  fontWeight: 600,
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                Newsletter
              </Typography>

              <Stack direction="row" alignItems="center" gap={3}>
                <TextField size="small" placeholder="Email address" fullWidth />

                <Box component="div" sx={{ flexShrink: 0 }}>
                  <Button
                    sx={{
                      bgcolor: "#5C6166",
                      width: 120,
                      "&:hover": { bgcolor: "#000" },
                    }}
                    variant="contained"
                  >
                    Subscribe
                  </Button>
                </Box>
              </Stack>

              <Typography
                sx={{
                  fontSize: { xs: 10, md: 11 },
                  color: "#5C6166",
                  fontWeight: 700,
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                Sign me up for Colorful Standard emails about new products,
                restocks and events (you can unsubscribe at any time) - Full
                details of your rights in relation to your data are set out in
                our Privacy Policy{" "}
                <Link
                  component={NextLink}
                  href={PATH_SHOP.privacy}
                  sx={{ color: "#5C6166", textDecoration: "underline" }}
                >
                  here
                </Link>
              </Typography>
            </Stack>
          </Stack>

          <Stack gap={2}>
            <Typography
              sx={{
                fontSize: { xs: 13, md: 14 },
                color: "#000",
                fontWeight: 600,
                fontFamily: secondaryFont.style.fontFamily,
              }}
            >
              Contact us
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: 13, md: 14 },
                fontWeight: 500,
                color: "#5C6166",
                fontFamily: secondaryFont.style.fontFamily,
              }}
            >
              Free hotline
              <br /> 0800 - 3 230 111 2
              <br />
              <br />
              info@wonder-raw.com
            </Typography>

            <Stack direction="row" gap={1}>
              <IconButton>
                <FacebookIcon
                  sx={{ width: 9, height: 18, "& path": { fill: "#000000" } }}
                />
              </IconButton>
              <IconButton>
                <InstagramIcon
                  sx={{ width: 19, height: 18, "& path": { fill: "#000000" } }}
                />
              </IconButton>
              <IconButton>
                <LinkedinIcon
                  sx={{ width: 19, height: 18, "& path": { fill: "#000000" } }}
                />
              </IconButton>
              <IconButton>
                <TiktokIcon
                  sx={{ width: 16, height: 18, "& path": { fill: "#000000" } }}
                />
              </IconButton>
              <IconButton>
                <WhatsappIcon
                  sx={{ width: 18, height: 18, "& path": { fill: "#000000" } }}
                />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>

        {/*<Box*/}
        {/*  component="div"*/}
        {/*  sx={{*/}
        {/*    position: "absolute",*/}
        {/*    right: 0,*/}
        {/*    top: 0,*/}
        {/*    width: { xs: 93, md: 159 },*/}
        {/*    height: { xs: 68.55, md: 138 },*/}
        {/*    transform: "translateY(-50%)",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Icon1 />*/}
        {/*</Box>*/}

        {/*<Box*/}
        {/*  component="div"*/}
        {/*  sx={{*/}
        {/*    position: "absolute",*/}
        {/*    left: 10,*/}
        {/*    top: { xs: -10, md: -30 },*/}
        {/*    width: { xs: 55, md: 106 },*/}
        {/*    height: { xs: 47.82, md: 92 },*/}
        {/*    transform: "translateY(-100%)",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Icon2 />*/}
        {/*</Box>*/}
      </Container>
    </Box>
  );
}
