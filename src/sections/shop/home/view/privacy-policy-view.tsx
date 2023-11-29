import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { MotionViewport } from "@/components/animate";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import { useLocales } from "@/locales";
import { PATH_SHOP } from "@/routers/path";
import Icon4 from "@/components/icons/home/icon4";
import Icon1 from "@/components/icons/home/icon1";
import { secondaryFont } from "@/theme/typography";

type Props = { mode?: "colored" | "dark" };

export default function PrivacyPolicyView({ mode = "colored" }: Props) {
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
            heading="PRIVACY POLICY"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              { name: "Privacy Policy" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />

          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              color: "#5C6166",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            Wonder Raw, Lda recognizes the importance of protecting your
            personal data, whatever its nature and values, above all, honesty
            and transparency, so that it is possible to build a solid and
            lasting relationship with our customers, based on trust and mutual
            benefit. Thus, and with the entry into force of the new General Data
            Protection Regulation of the European Union (EU 2016/679), Wonder
            Raw has developed a set of security measures aimed at protecting
            your data, which we reflect in our Privacy Policy.
          </Typography>
        </Container>
      </Box>

      <Box
        component="div"
        sx={{
          bgcolor: mode === "dark" ? "#fff" : "#EDE9DC",
          position: "relative",
        }}
      >
        <Container
          component={MotionViewport}
          sx={{
            py: { xs: 10, md: 10 },
          }}
        >
          <Stack gap={2}>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 500,
                color: "#5C6166",
                fontFamily: secondaryFont.style.fontFamily,
                mb: 2,
              }}
            >
              This Privacy Policy aims to explain to you the personal data
              processing policy of Wonder Raw, Lda, since in order to make your
              purchase in our online store, you will have to accept our privacy
              policy given the fact that it is essential and imperative for the
              delivery of our products. However, if you have any questions
              regarding this Policy, you can contact us at the following email
              address: geral@wonder-raw.com or by letter addressed to: Wonder
              Raw, Lda., Rua do Parque Industrial 60, 4755-036 Alvelos-Barcelos,
              ​​Portugal.
            </Typography>

            <PrivacyItem
              title="privacy1"
              content={["privacy1.1", "privacy1.2"]}
            />
            <PrivacyItem
              title="privacy2"
              content={["privacy2.1", "privacy2.2", "privacy2.3"]}
            />
            <PrivacyItem
              title="privacy3"
              content={["privacy3.1", "privacy3.2"]}
            />
            <PrivacyItem
              title="privacy4"
              content={[
                "privacy4.1",
                "privacy4.2",
                "privacy4.3",
                "privacy4.4",
                "privacy4.5",
              ]}
            />
            <PrivacyItem title="privacy5" content={["privacy5.1"]} />
            <PrivacyItem
              title="privacy6"
              content={["privacy6.1", "privacy6.2"]}
            />
            <PrivacyItem
              title="privacy7"
              content={["privacy7.1", "privacy7.2"]}
            />
            <PrivacyItem
              title="privacy8"
              content={["privacy8.1", "privacy8.2"]}
            />
            <PrivacyItem title="privacy9" content={["privacy9.1"]} />
            <PrivacyItem title="privacy10" content={["privacy10.1"]} />
            <PrivacyItem title="privacy11" content={["privacy11.1"]} />
          </Stack>
        </Container>

        {mode === "colored" && (
          <>
            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 70,
                height: 167,
                left: 0,
                top: "20%",
                transform: "translateY(50%)",
                zIndex: 1,
              }}
            >
              <Icon1 />
            </Box>

            <Box
              component="div"
              sx={{
                position: "absolute",
                width: 111,
                height: 132,
                right: 0,
                bottom: "40%",
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

function PrivacyItem({ title, content }: { title: string; content: string[] }) {
  const { t } = useLocales();

  return (
    <Box component="div">
      <Typography
        sx={{
          fontSize: 16,
          fontWeight: 500,
          color: "#292F3D",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        {t(title)}
      </Typography>

      {content.map((c, index) => (
        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 500,
            color: "#5C6166",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          {t(c)}
        </Typography>
      ))}
    </Box>
  );
}
