import React from "react";
import { Button, Link, Stack, Typography } from "@mui/material";
import { RHFTextField } from "@/components/hook-form";
import { RouterLink } from "@/routers/components";
import { PATH_SHOP } from "@/routers/path";
import { secondaryFont } from "@/theme/typography";

type Props = {};

export default function ReturnRequestForm(props: Props) {
  const renderHead = (
    <Stack gap={2}>
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 500,
          color: "#292F3D",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        Enter your details below to get started
      </Typography>

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 500,
          color: "#5C6166",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        Please note a printer may be required
      </Typography>
    </Stack>
  );

  const renderForm = (
    <Stack gap={2.5}>
      <RHFTextField name="order number" placeholder="Your order number" />

      <RHFTextField name="email" placeholder="Your email" />

      <RHFTextField name="postcode" placeholder="Your Postcode/Zip code" />

      <Typography
        sx={{
          fontSize: 14,
          fontWeight: 500,
          color: "#5C6166",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        If you have a voucher code from the seller
        <Link
          component={RouterLink}
          href={PATH_SHOP.forgot}
          underline="always"
          sx={{ color: "#F05A4A", textDecoration: "none", pl: 1 }}
        >
          click here
        </Link>
      </Typography>
    </Stack>
  );

  const renderAction = (
    <Stack sx={{ mx: "auto" }}>
      <Button
        type="submit"
        variant="contained"
        size="large"
        sx={{
          width: 300,
          bgcolor: "#292F3D",
          color: "#fff",
          "&:hover": {
            bgcolor: "#550248",
          },
        }}
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
          SEND REQUEST TO SUPPORT
        </Typography>
      </Button>

    </Stack>
  );

  return (
    <Stack gap={4} sx={{ width: 400 }}>
      {renderHead}

      {renderForm}

      {renderAction}
    </Stack>
  );
}
