import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import { secondaryFont } from "@/theme/typography";

type Props = {
  title: string;
  children: React.ReactNode;
  mode?: "colored" | "dark";
};

export default function FaqBlock({ mode, title, children }: Props) {
  return (
    <>
      <Stack gap={2}>
        <Typography
          sx={{
            fontSize: 19,
            fontWeight: 600,
            color: mode === "colored" ? "#F05A4A" : "#858585",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          {title}
        </Typography>

        <Box component="div">{children}</Box>
      </Stack>

      <Divider sx={{ borderColor: "#ACB1B8" }} />
    </>
  );
}
