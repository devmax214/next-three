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
import { RouterLink } from "@/routers/components";
import Icon1 from "@/components/icons/footer/icon1";
import Icon2 from "@/components/icons/footer/icon2";
import FacebookIcon from "@/components/icons/icon-facebook";
import InstagramIcon from "@/components/icons/icon-instagram";
import LinkedinIcon from "@/components/icons/icon-linkedin";
import TiktokIcon from "@/components/icons/icon-tiktok";
import WhatsappIcon from "@/components/icons/icon-whatsapp";
import SizeGuideButton from "./size-guide-button";
import { useResponsive } from "@/hooks";
import { PATH_SHOP } from "@/routers/path";
import { secondaryFont } from "@/theme/typography";
import { LINKS } from "./config-footer";

export default function Footer() {
  const upMd = useResponsive("up", "md");

  return (
    <Box
      component="footer"
      sx={{
        position: "relative",
        bgcolor: "#550248",
        color: "#ffffff",
        '.MuiContainer-root': {
          maxWidth: 1280
        },
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
            <Logo sx={{ mb: 3 }} />

            {upMd && (
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#ACB1B8",
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
                    color: "#ACB1B8",
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
                color: "#fff",
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
                  color: "#fff",
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
                    sx={{ bgcolor: "#F05A4A", width: 120 }}
                    variant="contained"
                  >
                    Subscribe
                  </Button>
                </Box>
              </Stack>

              <Typography
                sx={{
                  fontSize: { xs: 10, md: 11 },
                  color: "#ACB1B899",
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
                  sx={{ color: "#ACB1B899", textDecoration: "underline" }}
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
                color: "#fff",
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
                color: "#ACB1B8",
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
                  sx={{ width: 9, height: 18, "& path": { fill: "#ffffff" } }}
                />
              </IconButton>
              <IconButton>
                <InstagramIcon
                  sx={{ width: 19, height: 18, "& path": { fill: "#ffffff" } }}
                />
              </IconButton>
              <IconButton>
                <LinkedinIcon
                  sx={{ width: 19, height: 18, "& path": { fill: "#ffffff" } }}
                />
              </IconButton>
              <IconButton>
                <TiktokIcon
                  sx={{ width: 16, height: 18, "& path": { fill: "#ffffff" } }}
                />
              </IconButton>
              <IconButton>
                <WhatsappIcon
                  sx={{ width: 18, height: 18, "& path": { fill: "#ffffff" } }}
                />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>

        <Box
          component="div"
          sx={{
            position: "absolute",
            right: 0,
            top: 0,
            width: { xs: 93, md: "149.598px" },
            height: { xs: 68.55, md: "185.287px" },
            transform: "translateY(-50%)",
          }}
        >
          <Icon1 />
        </Box>

        <Box
          component="div"
          sx={{
            position: "absolute",
            left: 0,
            top: { xs: -10, md: 25 },
            width: { xs: 55, md: '137.1px' },
            height: { xs: 47.82, md: '186px' },
            transform: "translateY(-100%)",
          }}
        >
          <Icon2 />
        </Box>
      </Container>
    </Box>
  );
}
