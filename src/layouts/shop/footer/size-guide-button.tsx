import React from "react";
import {
  Box,
  IconButton,
  Modal,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import Iconify from "@/components/iconify";
import { _sizes1, _sizes2 } from "@/@mockup/others";
import Icon1 from "@/components/icons/wishlist/icon1";
import Icon2 from "@/components/icons/wishlist/icon2";
import Scrollbar from "@/components/scrollbar";
import { secondaryFont } from "@/theme/typography";
import { useBoolean } from "@/hooks";

const Wrapper = styled(Box)(({ theme }) => ({
  position: "absolute",
  right: "50%",
  top: 10,
  width: "100%",
  maxWidth: "70vw",
  transform: "translateX(50%)",
  zIndex: 99999,
  outline: "none",
  [theme.breakpoints.down("md")]: {
    maxWidth: "calc(100% - 20px)",
    right: 10,
    top: 10,
    transform: "none",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#EDE9DC",
  },
  "& td": {
    padding: "5px 15px 5px 15px",
    fontSize: "14px",
    fontWeight: 500,
    color: "#292F3D",
    borderRight: "1px solid #ACB1B8 !important",
    fontFamily: secondaryFont.style.fontFamily,
    [theme.breakpoints.down("md")]: {
      fontSize: "13px",
    },
  },
  "& td:last-child": {
    border: "0 !important",
  },
}));

type Props = {};

export default function SizeGuideButton(props: Props) {
  const guide = useBoolean();

  return (
    <>
      <Typography
        sx={{
          color: "#ACB1B8",
          fontSize: 14,
          fontWeight: 500,
          cursor: "pointer",
          fontFamily: secondaryFont.style.fontFamily,
          "&:hover": { textDecoration: "underline" },
        }}
        onClick={guide.onTrue}
      >
        Size guide
      </Typography>

      <Modal open={guide.value}>
        <Wrapper>
          <Stack alignItems="end">
            <IconButton onClick={guide.onFalse}>
              <Iconify
                icon="material-symbols:close"
                width={{ xs: 20, md: 36 }}
                color="#ffffff"
              />
            </IconButton>
          </Stack>

          <Stack
            sx={{
              backgroundColor: "#F9F5EE",
              borderRadius: 5,
              px: { xs: 2, md: 20 },
              pt: 3,
              pb: 6,
            }}
          >
            <Scrollbar sx={{ maxHeight: "80vh" }}>
              <Stack alignItems="center" gap={1}>
                <Typography
                  sx={{
                    fontSize: { xs: 22, md: 28 },
                    fontWeight: 700,
                    color: "#292F3D",
                  }}
                >
                  SIZE GUIDE
                </Typography>

                <Typography
                  sx={{
                    fontSize: { xs: 13, md: 14 },
                    fontWeight: 500,
                    color: "#5C6166",
                    textAlign: "center",
                    px: { xs: 1, md: 3 },
                    py: { xs: 1, md: 4 },
                    borderTop: "1px solid #ACB1B8",
                    borderBottom: "1px solid #ACB1B8",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  Below you will find the body measurements that we use along
                  with a handy conversion guide for international sizing. Our
                  'Standard' womenswear range has been designed for a women
                  whose height is 168cm (5ft 6") and who has an inside leg of
                  79cm. The fit of a garment may vary depending on the cut,
                  style and fabric.
                </Typography>

                <Box sx={{ textAlign: "left", width: 1 }}>
                  <Stack direction="row" gap={1} alignItems="center">
                    <Typography
                      sx={{
                        fontSize: { xs: 15, md: 16 },
                        fontWeight: 500,
                        color: "#292F3D",
                        fontFamily: secondaryFont.style.fontFamily,
                      }}
                    >
                      View in:
                    </Typography>
                    <ToggleButtonGroup value="cms">
                      <ToggleButton value="cms">CMS</ToggleButton>
                      <ToggleButton value="inch">INCHES</ToggleButton>
                    </ToggleButtonGroup>
                  </Stack>
                </Box>

                <Box sx={{ width: 1 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 15, md: 16 },
                      fontWeight: 600,
                      color: "#292F3D",
                      fontFamily: secondaryFont.style.fontFamily,
                    }}
                  >
                    General
                  </Typography>

                  <TableContainer>
                    <Table>
                      <TableBody>
                        {_sizes1.map((d, index) => (
                          <StyledTableRow key={index}>
                            <TableCell>{d.title}</TableCell>
                            <>
                              {d.values.map((v, ii) => (
                                <TableCell key={ii}>{v}</TableCell>
                              ))}
                            </>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>

                <Box sx={{ width: 1 }}>
                  <Typography
                    sx={{
                      fontSize: { xs: 15, md: 16 },
                      fontWeight: 600,
                      color: "#292F3D",
                    }}
                  >
                    General
                  </Typography>
                  <TableContainer>
                    <Table>
                      <TableBody>
                        {_sizes2.map((d, index) => (
                          <StyledTableRow key={index}>
                            <TableCell>{d.title}</TableCell>
                            <>
                              {d.values.map((v, ii) => (
                                <TableCell key={ii}>{v}</TableCell>
                              ))}
                            </>
                          </StyledTableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              </Stack>
            </Scrollbar>
          </Stack>

          <Box
            component="div"
            sx={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: { xs: 40, md: 80 },
              height: { xs: 50, md: 100 },
              zIndex: 0,
            }}
          >
            <Icon1 />
          </Box>

          <Box
            component="div"
            sx={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: { xs: 74, md: 149 },
              height: { xs: 52, md: 105 },
              zIndex: 0,
            }}
          >
            <Icon2 />
          </Box>
        </Wrapper>
      </Modal>
    </>
  );
}
