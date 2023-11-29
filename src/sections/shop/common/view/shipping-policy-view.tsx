import { Box, Container, Stack, Typography } from "@mui/material";
import { MotionViewport } from "@/components/animate";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import React from "react";
import { _shippingPolicy } from "@/@mockup/others";
import Icon1 from "@/components/icons/home/icon1";
import Icon4 from "@/components/icons/home/icon4";
import { useResponsive } from "@/hooks";

type Props = { mode?: "colored" | "dark" };

export default function ShippingPolicyView({ mode = "colored" }: Props) {
  const mdUp = useResponsive("up", "md");

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
            heading="SHIPPING POLICY"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              { name: "Shipping Policy" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />

          <Stack gap={3}>
            {_shippingPolicy.map((p, index) => (
              <Stack key={index} gap={2}>
                <Typography
                  sx={{
                    fontSize: { xs: 22, md: 28 },
                    fontWeight: 700,
                    color: "#292F3D",
                  }}
                >
                  {p.title}
                </Typography>

                <Stack gap={2}>
                  {p.descriptions.map((d, i) => (
                    <Box component="div" key={i}>
                      {d.title && (
                        <Typography
                          sx={{
                            fontSize: { xs: 13, md: 14 },
                            fontWeight: 600,
                            color: "#5C6166",
                          }}
                        >
                          {d.title}
                        </Typography>
                      )}

                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#5C6166",
                        }}
                      >
                        {d.content}
                      </Typography>

                      {d.items && (
                        <>
                          {d.items.map((i, ii) => (
                            <Typography
                              key={ii}
                              sx={{
                                fontSize: 14,
                                fontWeight: 500,
                                color: "#5C6166",
                              }}
                            >
                              {i}
                            </Typography>
                          ))}
                        </>
                      )}
                    </Box>
                  ))}
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Container>

        {mdUp && mode === "colored" && (
          <>
            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 72,
                height: 137,
                left: 0,
                top: "40%",
                transform: "translateY(-50%)",
                zIndex: 1,
              }}
            >
              <Icon1 />
            </Box>

            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 110,
                height: 131,
                right: 44,
                bottom: "30%",
                transform: "translateY(50%)",
                zIndex: 1,
              }}
            >
              <Icon4 />
            </Box>
          </>
        )}
      </Box>
    </>
  );
}
