import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { MotionViewport } from "@/components/animate";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { PATH_SHOP } from "@/routers/path";
import FaqBlock from "@/sections/shop/common/faq-block";
import { _faqs } from "@/@mockup/others";
import PlusIcon from "@/components/icons/icon-plus";
import Icon1 from "@/components/icons/home/icon1";
import Icon4 from "@/components/icons/home/icon4";
import { secondaryFont } from "@/theme/typography";

type Props = {
  mode?: "colored" | "dark";
};

export default function FaqsView({ mode }: Props) {
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
            heading="FAQ & HELP"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              { name: "FAQ & Help" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />

          <Stack gap={3}>
            {_faqs.map((faq) => (
              <FaqBlock title={faq.title} mode={mode}>
                {faq.list.map((d, index) => (
                  <Accordion key={index}>
                    <AccordionSummary
                      sx={{
                        fontSize: { xs: 13, md: 14 },
                        fontWeight: 500,
                        color: "#292F3D",
                        fontFamily: secondaryFont.style.fontFamily,
                        "& .MuiAccordionSummary-expandIconWrapper": {
                          // transition: "none",
                          "&.Mui-expanded": {
                            transform: "rotate(45deg)",
                          },
                        },
                      }}
                      expandIcon={<PlusIcon sx={{ width: 15, height: 15 }} />}
                    >
                      {d.title}
                    </AccordionSummary>

                    <AccordionDetails>
                      <Typography
                        sx={{
                          fontSize: { xs: 13, md: 14 },
                          fontWeight: 500,
                          color: "#5C6166",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        {d.description}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </FaqBlock>
            ))}
          </Stack>
        </Container>

        {mode === "colored" && (
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
