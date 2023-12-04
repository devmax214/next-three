import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import NextLink from "next/link";
import { _bestSellers, _selections } from "@/@mockup/_product";
import { RouterLink } from "@/routers/components";
import Image from "@/components/image";
import { secondaryFont } from "@/theme/typography";

type Props = {};

export default function ManMenu(props: Props) {
  return (
    <Grid container>
      <Grid xs={12} md={4}>
        <Stack gap={2}>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 600,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            PRODUCTS
          </Typography>

          <Stack>
            {_selections.map((s, index) => (
              <Box key={index}>
                <Link
                  component={NextLink}
                  href="/"
                  sx={{
                    display: "contents",
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#5C6166",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  {s.name}
                </Link>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Grid>
      <Grid xs={12} md={8}>
        <Stack gap={2}>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 600,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            BESTSELLERS
          </Typography>

          <Stack direction="row" gap={1}>
            {_bestSellers.slice(0, 2).map((s, index) => (
              <Stack key={index} gap={2}>
                <Box
                  sx={{
                    width: 140,
                    height: 140,
                    borderRadius: "8px",
                    overflow: "hidden",
                    bgcolor: "lightgray",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  <Link href={"/"} component={RouterLink}>
                    <Image src={s.coverUrl} ratio="1/1" />
                  </Link>
                </Box>

                <Typography
                  sx={{
                    fontSize: 14,
                    color: "#292F3D",
                    fontWeight: 500,
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  {s.name}
                </Typography>
                <Stack direction="row" gap={1} alignItems="center">
                  <Typography
                    sx={{
                      fontSize: 12,
                      textDecoration: "line-through",
                      color: "#5C6166",
                      fontWeight: 500,
                      fontFamily: secondaryFont.style.fontFamily,
                    }}
                  >
                    76 €
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: "#292F3D",
                      fontWeight: 600,
                      fontFamily: secondaryFont.style.fontFamily,
                    }}
                  >
                    50 €
                  </Typography>
                </Stack>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
}
