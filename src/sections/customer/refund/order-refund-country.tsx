import React from "react";
import { Box, Button, Container, Grid, Link, Stack, Typography } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import { secondaryFont } from "@/theme/typography";
import { countries } from "@/@mockup/country";
import Iconify from "@/components/iconify";
import { RHFAutocomplete } from "@/components/hook-form";

type Props = { onNext: VoidFunction };

export default function OrderRefundFirst({ onNext }: Props) {
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
            heading="ORDER REFUND/REPLACEMENT"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              {
                name: "Order Refund",
                href: PATH_SHOP.customer.root,
              },
              { name: "Replacement" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />

          <Grid container spacing={15}>
            <Grid item md={6}>
              <Stack gap={5}>
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#292F3D",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  Please choose your location from the dropdown below for your
                  delivery and return options:
                </Typography>

                <RHFAutocomplete
                  name="country"
                  placeholder="Select Country"
                  sx={{ width: '50%' }}
                  options={countries.map((country) => country.label)}
                  getOptionLabel={(option) => option}
                  renderOption={(props, option) => {
                    const { code, label, phone } = countries.filter(
                      (country) => country.label === option
                    )[0];

                    if (!label) {
                      return null;
                    }

                    return (
                      <li {...props} key={label}>
                        <Iconify
                          key={label}
                          icon={`circle-flags:${code.toLowerCase()}`}
                          width={28}
                          sx={{ mr: 1 }}
                        />
                        {label} ({code}) +{phone}
                      </li>
                    );
                  }}
                />

                <Stack gap={2}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#292F3D",
                      fontFamily: secondaryFont.style.fontFamily,
                    }}
                  >
                    THINGS YOU NEED TO KNOW
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#5C6166",
                      fontFamily: secondaryFont.style.fontFamily,
                    }}
                  >
                    You'll receive a confirmation email once your order is
                    placed, followed by a second email containing your tracking
                    information once your order has been shipped from our
                    warehouse.

                    Gift Card purchases don't count towards the free
                    shipping threshold.
                  </Typography>
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={6}>
              <Stack gap={4}>
                <Stack gap={2}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#000",
                      fontFamily: secondaryFont.style.fontFamily,
                    }}
                  >
                    Shipping
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#5C6166",
                      fontFamily: secondaryFont.style.fontFamily,
                    }}
                  >
                    STANDARD DELIVERY - $11 CADEstimated delivery time 2-3
                    working daysFree standard delivery available for orders
                    above $150 CADWe ship all standard orders with DHL
                  </Typography>
                </Stack>
                <Stack gap={2}>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      color: "#292F3D",
                      fontFamily: secondaryFont.style.fontFamily,
                    }}
                  >
                    Returns
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: "#5C6166",
                      fontFamily: secondaryFont.style.fontFamily,
                    }}
                  >
                    Should you, against expectations, regret your purchase, then
                    any goods can be returned within 90 days of reception of the
                    goods. Should you regret your purchase, then return the
                    goods in substantial state and quantity that you received
                    your goods in. The purchase price will be refunded to your
                    account within 14 working days. Please remember to enclose
                    information with your name and invoice number.Please note we
                    do not provide free return labels. You can either choose to
                    purchase a return label or select self post within our
                    return portal. If selecting self-postage, please note you
                    are responsible for the return until the package reaches the
                    final destination. We recommend you save your return receipt
                    and tracking number in case you need them later. Please have
                    your order number (e.g. #CS123456), the email used when
                    placing the order and your zip code ready.
                  </Typography>

                  <Link
                    href="https://www.google.com"
                    underline="none"
                    sx={{
                      fontSize: 14,
                      fontWeight: 500,
                      color: '#F05A4A',
                      fontFamily: secondaryFont.style.fontFamily
                    }}
                  >Return Portal</Link>
                </Stack>
              </Stack>
            </Grid>
          </Grid>

          <Stack alignItems="center" pt={8}>
            <Button
              variant="contained"
              size="large"
              sx={{
                width: 242,
                bgcolor: "#292F3D",
                color: "#fff",
                "&:hover": {
                  bgcolor: "#550248",
                },
              }}
              onClick={onNext}
            >
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#ffffff",
                  lineHeight: "normal",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                START REPLACEMENT
              </Typography>
            </Button>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
