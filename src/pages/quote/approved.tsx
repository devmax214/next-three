import React from "react";
import Head from "next/head";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import CustomizeLayout from "@/layouts/customize";
import { PATH_SHOP } from "@/routers/path";
import Image from "@/components/image";
import { RouterLink } from "@/routers/components";
import {
  LeftPosition,
} from "@/components/icons/customize/position/position";
import {
  Box,
  Button,
  Card,
  Grid,
  Switch,
  IconButton,
  Modal,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  Typography,
  Container,
  MenuItem,
  TextField,
  Checkbox,
  FormGroup,
  ButtonBase,
  FormControlLabel,
  Link
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { secondaryFont } from "@/theme/typography";
import CheckedIcon from "@/components/icons/checked-icon";
import UnCheckedIcon from "@/components/icons/unchecked-icon";

export const StyledSwitchLabel = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 500,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  textWrap: "nowrap",
}));

export const StyledButton = styled(ButtonBase)(({ theme }) => ({
  padding: 4,
}));

ApprovedQuotePage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);
type Props = {};
const prices = [
  { items: 50, price: 12.5 },
  { items: 100, price: 14.5 },
  { items: 150, price: 16.5 },
  { items: 300, price: 19.5 },
];
export default function ApprovedQuotePage(props: Props) {
  let customProductInfo = {
    'img': 'img',
    'color': 'color',
    'size': 'size',
    'material': 'material',
    'lace': 'lace',
    'lace-tip': 'laceTip',
  }
  try {
    customProductInfo = JSON.parse(localStorage.getItem('product-info'));
  } catch (e) { }
  console.log('qpp', customProductInfo)

  const renderPrices = (
    <>
      <TableContainer sx={{ width: 1 }}>
        <Table>
          <TableHead sx={{ px: 2, py: 1, }}>
            <TableCell
              sx={{
                py: 3,
                fontSize: 16,
                fontFamily: 500,
              }}
            >From </TableCell>
            <TableCell
              sx={{
                py: 3,
                fontSize: 16,
                fontFamily: 500,
                color: '#5C6166'
              }}
            >Price per item </TableCell>
          </TableHead>
          <TableBody>
            {prices.map((price, index) => (
              <TableRow key={index} >
                <TableCell sx={{ py: 1, fontSize: 16, lineHeight: '20px' }}>{price.items} items</TableCell>
                <TableCell sx={{ py: 1, fontSize: 16, lineHeight: '20px' }}>{price.price} {JSON.parse(localStorage.getItem('currency')).value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: "#F9F5EE",
          position: "relative",
          pt: { xs: 10, md: 10 },
        }}
      >
        <Container
          sx={{
            pb: { xs: 10, md: 10 },
          }}
        >
          <CustomBreadCrumbs
            heading="Approved"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              {
                name: "Request for Quote",
                href: "/quote",
              },
              { name: "Approved" },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />
          <Typography
            sx={{
              flexGrow: 1,
              color: "#5C6166",
              fontSize: 16,
              fontweight: 500,
              fontFamily: secondaryFont.style.fontFamily
            }}>
            Your Request:
          </Typography>
          <Typography
            sx={{
              flexGrow: 1,
              color: "#292F3D",
              fontSize: 16,
              fontweight: 700,
              fontFamily: secondaryFont.style.fontFamily
            }}>
            customize product
          </Typography>
          <Grid container spacing={6}>
            <Grid item md={5}>
              <Box component={"div"}>
                <Box style={{ marginTop: "15px", backgroundImage: "radial-gradient(circle, white, #717171)", borderRadius: "10px" }} >
                  <Image src={`${customProductInfo['img']}`} />
                </Box>
                <Typography
                  sx={{
                    flexGrow: 1,
                    mt: 2,
                    py: 1,
                    color: "#292F3D",
                    fontSize: 26,
                    fontWeight: 700,
                  }}>
                  Product Info:
                </Typography>
                <Stack sx={{ borderBottom: "1px solid lightgrey" }}>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      mt: 0,
                      py: 2,
                      color: "#292F3D",
                      fontSize: 16,
                      fontWeight: 700,
                    }}>
                    SIZE: <span style={{ color: "#292F3D", fontWeight: 500 }}>{customProductInfo['size']}</span>
                  </Typography>
                </Stack>
                <Stack sx={{ borderBottom: "1px solid lightgrey" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignContent: "center",
                      mt: 0,
                      py: 2,
                      color: "#292F3D",
                      fontSize: 16,
                      fontWeight: 700,
                    }}>
                    Garment Dye: &emsp;
                    <Box
                      sx={{
                        backgroundColor: customProductInfo['color'],
                        borderRadius: "3px",
                        width: "20px",
                        maxHeight: "20px",
                      }} />
                  </Box>
                </Stack>
                <Stack sx={{ borderBottom: "1px solid lightgrey" }}>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      mt: 0,
                      py: 2,
                      color: "#292F3D",
                      fontSize: 16,
                      fontWeight: 700,
                    }}>
                    Tag:
                  </Typography>
                  <Box
                    sx={{
                      px: 2,
                      display: "flex",
                      justifyContent: "flex-start",
                      color: "#292F3D",
                      fontSize: 14,
                      fontWeight: 700,
                    }}>
                    <Grid md={3}>
                      Neck label: &emsp;
                    </Grid>
                    <FormControlLabel
                      sx={{ mt: -1 }}
                      control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} color="default" checked={true} disabled={true} />}
                      label={
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#5C6166",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          Waven Neck label
                        </Typography>
                      } />
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 1,
                      px: 2,
                      display: "flex",
                      justifyContent: "flex-start",
                      color: "#292F3D",
                      fontSize: 14,
                      fontWeight: 700,
                    }}>
                    <Grid md={3}>
                      Label color: &emsp;
                    </Grid>
                    <FormControlLabel
                      sx={{ mt: -1 }}
                      control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} color="default" checked={true} disabled={true} />}
                      label={
                        <Typography
                          sx={{
                            fontSize: 14,
                            fontWeight: 500,
                            color: "#5C6166",
                            fontFamily: secondaryFont.style.fontFamily,
                          }}
                        >
                          Balck
                        </Typography>
                      } />
                  </Box>
                  <Box
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      justifyContent: "flex-start",
                      px: 2,
                      color: "#292F3D",
                      fontSize: 14,
                      fontWeight: 700,
                      mb: 1
                    }}>
                    <Grid md={3}>
                      Size: &emsp;
                    </Grid>
                    <Box
                      component="div"
                      sx={{
                        width: 20,
                        height: 20,
                        border: "1px dashed #292F3D",
                        fontSize: 12, fontFamily: secondaryFont.style.fontFamily,
                        fontWeight: 500
                      }}
                    />
                    <Box sx={{
                      fontSize: 14, fontFamily: secondaryFont.style.fontFamily,
                      fontWeight: 500
                    }}>&emsp;{45} x {45} mm</Box>
                  </Box>
                </Stack>
                <Stack sx={{ borderBottom: "1px solid lightgrey" }}>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      mt: 0,
                      py: 2,
                      color: "#292F3D",
                      fontSize: 16,
                      fontWeight: 700,
                    }}>
                    Embelleshment or Text: <span style={{ color: "#292F3D", fontWeight: 500 }}>I'm the best</span>
                  </Typography>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      mt: 0,
                      py: 1,
                      color: "#292F3D",
                      fontSize: 14,
                      fontWeight: 700,
                    }}>
                    artwork&nbsp;&nbsp;
                    <FormControlLabel
                      sx={{ mt: 0 }}
                      key={0}
                      control={<Switch color="default" checked={true} />}
                      label={<StyledSwitchLabel>{"Digital print"}</StyledSwitchLabel>}
                      disabled={true}
                    />&nbsp;
                    views&nbsp;&nbsp;
                    <FormControlLabel
                      sx={{ mt: 0 }}
                      key={0}
                      control={<Switch color="default" checked={true} />}
                      label={<StyledSwitchLabel>{"Front view"}</StyledSwitchLabel>}
                      disabled={true}
                    />
                  </Typography>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      mt: 0,
                      py: 0,
                      mr: 2,
                      color: "#292F3D",
                      fontSize: 14,
                      lineHeight: 2,
                      fontWeight: 700,
                    }}>
                    Size and position
                  </Typography>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      mt: 0,
                      py: 0,
                      mr: 2,
                      color: "#5C6166",
                      fontSize: 14,
                      lineHeight: 2,
                      fontWeight: 600,
                    }}>
                    artwork with: 1cm &emsp; From neck seam: 1cm &emsp; From center: 0cm
                  </Typography>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      mt: 0,
                      py: 2,
                      mr: 2,
                      color: "#292F3D",
                      fontSize: 14,
                      fontWeight: 600,
                    }}>
                    Position&emsp;
                    <StyledButton sx={{
                      border: "2px solid #f38565",
                      borderRadius: 1,
                      "svg": {
                        "path": {
                          stroke: "#5C6166",
                        },
                        "rect": {
                          fill: "#ACB1B8"
                        }
                      }
                    }}><LeftPosition /></StyledButton>
                  </Typography>
                </Stack>
                <Stack sx={{ borderBottom: "1px solid lightgrey" }}>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      mt: 0,
                      py: 2,
                      color: "#292F3D",
                      fontSize: 16,
                      fontWeight: 700,
                    }}>
                    Size Label: <span style={{ color: "#292F3D", fontWeight: 500 }}>Size label swean on the size the brand label</span>
                  </Typography>
                </Stack>
                <Stack sx={{ borderBottom: "1px solid lightgrey" }}>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      mt: 0,
                      py: 2,
                      color: "#292F3D",
                      fontSize: 16,
                      fontWeight: 700,
                    }}>
                    Care Tag: <span style={{ color: "#292F3D", fontWeight: 500 }}>Size label swean on the size the brand label</span>
                  </Typography>
                </Stack>
                <Stack sx={{ borderBottom: "1px solid lightgrey" }}>
                  <Typography
                    sx={{
                      flexGrow: 1,
                      mt: 0,
                      py: 2,
                      color: "#292F3D",
                      fontSize: 16,
                      fontWeight: 700,
                    }}>
                    Notes: <span style={{ color: "#292F3D", fontWeight: 500 }}>Please make a good print</span>
                  </Typography>
                </Stack>
              </Box>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item md={6}>
              <Stack gap={6} sx={{ mt: 0 }}>
                {renderPrices}
                <Button
                  size="large"
                  fullWidth
                  variant="contained"
                  sx={{
                    bgcolor: "#292F3D",
                    width: 337,
                    height: 40,
                    "&:hover": { bgcolor: "#550248" }
                  }}
                  href="/checkout"
                >
                  <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: secondaryFont.style.fontFamily }}>
                    ORDER PRODUCTS
                  </Typography>
                </Button>
              </Stack>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
