import React from "react";
import { Box, Button, Typography, Grid, TableCell, TableRow, TableContainer, Table, TableBody, Stack } from "@mui/material";
import Image from "@/components/image";
import { secondaryFont } from "@/theme/typography";

type Props = { onConfirm: VoidFunction };

export default function ConfirmQuote({ onConfirm }: Props) {
  return (
    <Box component={"div"} sx={{ textAlign: "start" }}>
      <Grid container spacing={5}>
        <Grid item md={7}>
          <Box component={"div"} sx={{ mt: 5, mb: 7 }}>
            <Image src="/images/customize/quote.jpg" />
          </Box>
        </Grid>

        <Grid item md={4}>
          <Stack gap={6} sx={{ mt: 5 }}>
            <Typography
              sx={{
                fontSize: 16,
                fontWeight: 500,
                color: "#292F3D",
                fontFamily: secondaryFont.style.fontFamily,
                textAlign: "start"
              }}
            >
              Please confirm your choice
            </Typography>

            <Typography
              sx={{
                fontSize: 19,
                fontWeight: 600,
                color: "#292F3D",
                fontFamily: secondaryFont.style.fontFamily,
                textAlign: "start",
                lineHeight: '26px',
                mt: -3
              }}
            >
              T-shirt
            </Typography>

            <TableContainer sx={{ mt: -5 }}>
              <Table>
                <TableBody>
                  <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                    <TableCell sx={{ pl: 0, pb: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#ACB1B8",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        Size
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pb: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          color: "#292F3D",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        XS
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                    <TableCell sx={{ pl: 0, pb: 0.7, pt: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#ACB1B8",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        Material
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pb: 0.7, pt: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          color: "#292F3D",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        Option
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                    <TableCell sx={{ pl: 0, pb: 0.7, pt: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#ACB1B8",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        Color
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pb: 0.7, pt: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          color: "#292F3D",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        Black
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                    <TableCell sx={{ pl: 0, pb: 0.7, pt: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#ACB1B8",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        Lace
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pb: 0.7, pt: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          color: "#292F3D",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        Option
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                    <TableCell sx={{ pl: 0, pb: 0.7, pt: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#ACB1B8",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        Tip
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pb: 0.7, pt: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          color: "#292F3D",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        Option
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                    <TableCell sx={{ pl: 0, pb: 0.7, pt: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#ACB1B8",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        Text
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pb: 0.7, pt: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          color: "#292F3D",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        I'm the coolest man in the world
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow sx={{ borderBottom: "1px solid #ACB1B8" }}>
                    <TableCell sx={{ pl: 0, pb: 0.7, pt: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#ACB1B8",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        Tag
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pb: 0.7, pt: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          color: "#292F3D",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        <Image src="/models/decor_img.jpg" width={25} height={20} mb={0.5} /> Image
                      </Typography>
                    </TableCell>
                  </TableRow>
                  <TableRow >
                    <TableCell sx={{ pl: 0, pb: 0.7, pt: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#ACB1B8",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        Image
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ pb: 0.7, pt: 0.7 }}>
                      <Typography
                        sx={{
                          fontSize: 16,
                          fontWeight: 500,
                          color: "#292F3D",
                          fontFamily: secondaryFont.style.fontFamily,
                        }}
                      >
                        <Image src="/models/decor_img.jpg" width={25} height={20} mb={0.5} /> Image
                      </Typography>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer >

            <Button
              variant="contained"
              size="large"
              sx={{ width: 340, height: 40, ml: 2 }}
              onClick={onConfirm}
            >
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#fff",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                CONFIRM
              </Typography>
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
