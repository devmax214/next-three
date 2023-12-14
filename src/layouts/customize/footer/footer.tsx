import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  TextField,
  Modal,
  Card,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import Logo from "@/components/logo";
import { RouterLink } from "@/routers/components";
import FootIcon1 from "@/components/icons/footer/icon1";
import FootIcon2 from "@/components/icons/footer/icon2";
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
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider, { RHFTextField } from "@/components/hook-form";
import * as Yup from "yup";
import { styled } from "@mui/material/styles";
import Icon2 from '@/components/icons/auth/icon2';
import Icon3 from '@/components/icons/auth/icon3';
import ModalFootIcon from '@/components/icons/footer/modal';
import Iconify from "@/components/iconify";

const SubscribeSchema = Yup.object().shape({
  email: Yup.string()
    .required("Email is required")
    .email("Email must be a valid email address"),
});

const defaultValues = {
  email: "",
};

const Wrapper = styled(Box)<{}>(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: 100,
  transform: "translateX(-50%)",
  width: "40%",
  outline: "none",
}));

export default function Footer() {
  const upMd = useResponsive("up", "md");

  const methods = useForm({
    resolver: yupResolver(SubscribeSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const [subscribed, setSubscribed] = useState(false);
  const onSubmit = handleSubmit(async (data) => {
    setSubscribed(true);
  });

  const renderModal = (
    <>
      <Modal open={subscribed}>
        <Wrapper>
          <Card sx={{ px: 5, py: 18 }}>
            <Box
              component="div"
              sx={{
                position: "absolute",
                left: 20,
                top: 20,
                width: { xs: 93, md: "20px" },
                height: { xs: 68.55, md: "20px" },
              }}
            >
              <Icon3 />
            </Box>
            <Box
              component="div"
              sx={{
                position: "absolute",
                left: 67,
                top: 35,
                width: { xs: 93, md: "12px" },
                height: { xs: 68.55, md: "12px" },
              }}
            >
              <Icon2 />
            </Box>
            <Box
              component="div"
              sx={{
                position: "absolute",
                rotate: "-90deg",
                right: 15,
                bottom: -5,
                width: { xs: 93, md: "60px" },
                height: { xs: 68.55, md: "65px" },
              }}
            >
              <ModalFootIcon />
            </Box>
            <Stack alignItems="end">
              <IconButton
                onClick={() => {
                  setSubscribed(false)
                }}
                sx={{ fontWeight: 300, position: "absolute", top: 5, right: 5 }}
              >
                <Iconify
                  icon="material-symbols:close"
                  width={{ xs: 24, md: 42 }}
                  color="#5C6166"
                  fontWeight={300}
                />
              </IconButton>
            </Stack>
            <Typography
              sx={{
                flexGrow: 1,
                fontSize: 22,
                fontweight: 500,
                textAlign: "center",
                fontFamily: secondaryFont.style.fontFamily
              }}>
              Thank you for subscribing.<br />Please check your email to get the Discount Code
            </Typography>
          </Card>
        </Wrapper>
      </Modal>
    </>
  );

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
        marginTop: "65px"
      }}
    >
      {renderModal}
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
          gap={{ xs: 4, md: 0 }}
        >
          <Stack gap={10}>
            <Logo sx={{ mb: {xs: 0, md: 3}}} />

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

          <Stack gap={1} sx={{flexWrap: "wrap",  height: {md: "auto", xs: "85px"}}}>
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

          <Stack gap={2} sx={{ maxWidth: { xs: "auto", md: "300px" }, mt: {xs: "20px", md: 0} }}>
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

              <FormProvider methods={methods} onSubmit={onSubmit}>
                <Stack direction="row" alignItems="flex-start" gap={3}>
                  <RHFTextField sx={{ width: "70%" }} size="small" name="email" placeholder="Email address" />
                  <Button
                    type="submit"
                    sx={{ bgcolor: "#F05A4A", width: 120 }}
                    variant="contained"
                  >
                    Subscribe
                  </Button>
                </Stack>
              </FormProvider>
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

          <Stack gap={2} sx={{flexWrap: "wrap", height: {xs: "115px", md: "auto"}}}>
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

            <Stack direction="row" gap={1} sx={{mt: {xs: "30px", md: 0}}}>
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
            width: { xs: 75, md: "149.598px" },
            height: { xs: 93, md: "185.287px" },
            transform: "translateY(-50%)",
          }}
        >
          <FootIcon1 />
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
          <FootIcon2 />
        </Box>
      </Container>
    </Box>
  );
}
