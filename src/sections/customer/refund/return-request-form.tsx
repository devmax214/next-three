import React from "react";
import { Button, Link, Stack, Typography } from "@mui/material";
import { RHFTextField } from "@/components/hook-form";
import { RouterLink } from "@/routers/components";
import { PATH_CONFIGURATOR, PATH_SHOP } from "@/routers/path";
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
      <RHFTextField size="small" name="ordernumber" placeholder="Your order number" />

      <RHFTextField size="small" name="email" placeholder="Your email" />

      <RHFTextField size="small" name="postcode" placeholder="Your Postcode/Zip code" />

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
    <Stack gap={4} sx={{ width: { md: 400, xs: "100%" } }}>
      {renderHead}

      {renderForm}

      {renderAction}
    </Stack>
  );
}
