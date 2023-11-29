import { MotionViewport } from "@/components/animate";
import { Box, Container, Stack, Typography } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import React from "react";
import { _termsOfUse } from "@/@mockup/others";
import Markdown from "@/components/mark-down";
import { secondaryFont } from "@/theme/typography";

type Props = { mode?: "colored" | "dark" };

export default function TermsOfUseView({ mode = "colored" }: Props) {
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
            heading="TERMS OF USE"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              { name: "Terms of use" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />

          <Stack gap={3}>
            {_termsOfUse.map((t, i) => (
              <Stack key={i} gap={2}>
                <Typography
                  sx={{
                    fontSize: { xs: 22, md: 28 },
                    fontWeight: 700,
                    color: "#292F3D",
                  }}
                >
                  {t.title}
                </Typography>

                <Markdown
                  children={t.description}
                  sx={{
                    "& p, li": {
                      fontSize: { xs: 13, md: 14 },
                      fontWeight: 500,
                      color: "#5C6166",
                      fontFamily: secondaryFont.style.fontFamily,
                    },
                    "& ul": {
                      pl: 1.8,
                      "& li": {
                        "&::marker": {
                          content: "counter(list-item)'. '",
                          mr: 1,
                        },
                      },
                    },
                  }}
                />
              </Stack>
            ))}
          </Stack>
        </Container>
      </Box>
    </>
  );
}
