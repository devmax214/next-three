import React, { useEffect, useContext } from "react";
import Head from "next/head";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs";
import CustomizeLayout from "@/layouts/customize";
import { PATH_SHOP } from "@/routers/path";
import Image from "@/components/image";
import { RouterLink } from "@/routers/components";
import ConfigurationCanvas from "@/sections/customize/configurator/configuration-canvas";
import { typeIndexToLabel } from "@/helpers/common";
import { CustomizeProvider } from "@/components/customize/context";
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
import { CustomizeContext, useCustomizeContext } from '@/components/customize/context/customize-context';
import { Customize, dbConnect } from "@/helpers/db";
import mongoose from "mongoose"
import {
  LeftPosition,
  RightPosition,
  TopCenterPosition,
  TopPosition,
  CenterPosition,
  BottomPosition
} from "@/components/icons/customize/position/position";
import { useCheckoutContext } from "@/components/checkout/context";
import { useRouter } from "next/router";

export const StyledSwitchLabel = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 500,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  textWrap: "nowrap",
}));

export const StyledButton = styled(ButtonBase)(({ theme }) => ({
  padding: 4,
}));

const cordLabels = {
  "Cord1": "Cord 01",
  "Cord2": "Cord 02",
  "Cord3": "Cord 03",
  "Cord4": "Cord 04",
}

const tipLabels = {
  "mental_end": "Tip 01",
  "plastic_end": "Tip 01",
  "silicone_end": "Tip 01",
}

const artworks = [
  "Digital Print",
  "Screen Print",
  "Embroidery",
];


const positions = [
  {
    value: "left",
    icon: <LeftPosition />,
  },
  {
    value: "horizontal-center",
    icon: <CenterPosition />,
  },
  {
    value: "right",
    icon: <RightPosition />,
  },
  {
    value: "top",
    icon: <TopPosition />,
  },
  {
    value: "vertical-center",
    icon: <TopCenterPosition />,
  },
  {
    value: "bottom",
    icon: <BottomPosition />,
  },
];

const sizeLabels = [
  "Size label sewn on the side the brand label",
  "Brand label on the garment seam, 10cm from the bottom",
  "Decide later, in a back office conversation",
];

const GENDERS = [
  { value: "man", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];
const sizes = ["XS", "S", "M", "L", "XL"];

OrderSamplePage.getLayout = (page: React.ReactElement) => (
  <CustomizeLayout>{page}</CustomizeLayout>
);
type Props = {};
const prices = [
  { items: 50, price: 12.5 },
  { items: 100, price: 14.5 },
  { items: 150, price: 16.5 },
  { items: 300, price: 19.5 },
];

const sample1 = {
  category: {},
  garment: "",
  tag: {
    visible: false,
    edit: true,
    neck: true,
    color: true,
    size: "45x45",
    file: null
  },
  embellishment: [{
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "text",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "tester test",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }],
  color: "#5ecbf2",
  pantone: "11-0601 TCX",
  cord: "Cord1",
  cordTip: "mental_end",
  text: "",
  careLabel: 0,
  sizeLabel: 0,
  washing: {},
  material: "",
  lace: "",
  laceTip: "",
  embelIndex: 0,
  cordVisible: false,
}

const sample2 = {
  category: {},
  garment: "",
  tag: {
    visible: false,
    edit: true,
    neck: true,
    color: true,
    size: "45x45",
    file: null
  },
  embellishment: [{
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }, {
    visible: false,
    type: "image",
    size: 0,
    artwork: 0,
    view: 0,
    visibleText: false,
    file: null,
    position: {
      width: 22,
      neck: 22,
      center: 22,
      type: 0
    },
    reqText: "",
    textureText: "",
    font: "Arial"
  }],
  color: "#d361f2",
  pantone: "11-0601 TCX",
  cord: "Cord1",
  cordTip: "mental_end",
  text: "",
  careLabel: 0,
  sizeLabel: 0,
  washing: {},
  material: "",
  lace: "",
  laceTip: "",
  embelIndex: 0,
  cordVisible: false,
}

export default function OrderSamplePage(props: any) {
  const router = useRouter();
  const productType = router.query.id
  const checkoutContext = useCheckoutContext();
  const { onAddToCart } = checkoutContext;
  const customProduct1 = { context: { ...sample1 }, product: productType };
  const customProduct2 = { context: { ...sample2 }, product: productType };

  return (
    <>
      <CustomizeProvider passInitState={{}}>
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
              heading="Order Sample"
              links={[
                {
                  name: "Home",
                  href: PATH_SHOP.home,
                },
                { name: "Order Sample" },
              ]}
              sx={{
                mb: { xs: 3, md: 5 },
              }}
            />

            {renderCustomizedProduct(customProduct1, 1)}
            {renderCustomizedProduct(customProduct2, 2)}
          </Container>

        </Box>
      </CustomizeProvider>
    </>
  )
}


function renderCustomizedProduct(customProduct: object, customIndex: number) {
  const context = customProduct.context;
  const dbCtx = context;
  const productType = customProduct.product;

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

  let isActiveLace = false;
  if (productType !== undefined) {
    isActiveLace = productType.toLowerCase() == "shorts" || productType.toLowerCase() == "pants" || productType.toLowerCase() == "hoodies";
  }

  const renderLace = (
    <>
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
          Cord: <span style={{ color: "#292F3D", fontWeight: 500 }}>{cordLabels[dbCtx.cord ? dbCtx.cord : "Cord1"]}</span>
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
          Cord Tip: <span style={{ color: "#292F3D", fontWeight: 500 }}>{tipLabels[dbCtx.cordTip ? dbCtx.cordTip : "mental_end"]}</span>
        </Typography>
      </Stack>
    </>
  );

  const isPrintLabel = productType === 'Oversize' || productType === 'T-Shirts' || productType === 'Sweatshirts';

  const indexes = productType === 'Shorts' || productType === 'Pants' ? [1, 0, 3, 2, 4] : [1, 0, 3, 2];
  const renderEmbels = (indexes.map((embelIndex: number) => (
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
        {`Embelleshment or Text - ${typeIndexToLabel(productType, embelIndex)}`}: &nbsp;&nbsp;&nbsp;&nbsp;
        {dbCtx.embellishment[embelIndex].type === "image" ?
          dbCtx.embellishment[embelIndex].file && <Image
            src={dbCtx.embellishment[embelIndex].file}
            sx={{
              borderRadius: "2px",
              width: "20px",
              verticalAlign: "top",
              height: "20px"
            }} />
          : (
            <Box
              sx={{
                flexGrow: 1,
                mt: 0,
                px: 2,
                py: 0,
                mr: 2,
                color: "#292F3D",
                fontSize: 14,
                lineHeight: 2,
                fontWeight: 700,
              }}>
              Text
              <span
                style={{
                  color: "#292F3D", fontWeight: 500, fontFamily: dbCtx.embellishment[embelIndex].font,
                  fontSize: 14,
                  fontWeight: 500,
                }}>
                &nbsp;&nbsp;&nbsp;&nbsp;{dbCtx.embellishment[embelIndex].textureText}
              </span>
            </Box>
          )}
      </Typography>
      {
        dbCtx.embellishment[embelIndex].type === "image" &&
        <Typography
          sx={{
            flexGrow: 1,
            px: 2,
            mt: 0,
            py: 1,
            color: "#292F3D",
            fontSize: 14,
            fontWeight: 700,
          }}>
          Artwork&nbsp;&nbsp;
          <FormControlLabel
            sx={{ mt: 0 }}
            key={0}
            control={<Switch color="default" className="bg-black" checked={true} />}
            label={<StyledSwitchLabel>{artworks[dbCtx.embellishment[embelIndex].artwork]}</StyledSwitchLabel>}
            disabled={true}
          />&nbsp;
        </Typography>
      }
      < Typography
        sx={{
          flexGrow: 1,
          mt: 0,
          px: 2,
          py: 0,
          mr: 2,
          color: "#292F3D",
          fontSize: 14,
          lineHeight: 2,
          fontWeight: 700,
        }}>
        Size and position
      </Typography >
      {
        dbCtx.embellishment[embelIndex].type === "image" &&
        <Typography
          sx={{
            flexGrow: 1,
            mt: 0,
            py: 0,
            px: 2,
            mr: 2,
            color: "#5C6166",
            fontSize: 12,
            lineHeight: 2,
            fontWeight: 600,
          }}>
          artwork with: {dbCtx.embellishment[embelIndex].position.width}cm &nbsp;
          From neck seam: {dbCtx.embellishment[embelIndex].position.neck}cm &nbsp;
          From center: {dbCtx.embellishment[embelIndex].position.center}cm
        </Typography>
      }
      < Typography
        sx={{
          flexGrow: 1,
          mt: 0,
          py: 2,
          px: 2,
          mr: 2,
          color: "#292F3D",
          fontSize: 14,
          fontWeight: 600,
        }}>
        Position &nbsp;&nbsp;&nbsp;&nbsp;
        <StyledButton sx={{
          border: "2px solid #f38565",
          borderRadius: 1,
          "svg": {
            "path": {
              stroke: "#5C6166",
            },
            "rect": {
              fill: "#5C6166"
            },
          }
        }}>{positions[dbCtx.embellishment[embelIndex].position.type].icon}</StyledButton>
      </Typography >
    </Stack >
  )))

  const renderMain = (
    <Box component={"div"}>
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
          SIZE: <span style={{ color: "#292F3D", fontWeight: 500 }}>{sizes[dbCtx.embellishment[0].size]}</span>
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
          Garment Dye: &nbsp;&nbsp;&nbsp;&nbsp;
          <Box
            sx={{
              backgroundColor: (!dbCtx.color ? "lightgrey" : dbCtx.color),
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
          Tag: &nbsp;&nbsp;&nbsp;&nbsp;
          {dbCtx.tag.file && <Image
            src={dbCtx.tag.file}
            sx={{
              borderRadius: "2px",
              width: "20px",
              verticalAlign: "top",
              height: "20px"
            }} />}
        </Typography>
        <Box
          sx={{
            px: 2,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#292F3D",
            fontSize: 14,
            fontWeight: 700,
          }}>
          <Grid md={3}>
            Neck label: &nbsp;
          </Grid>
          <FormControlLabel
            sx={{ mt: 0 }}
            control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} color="default" checked={isPrintLabel || dbCtx.tag.neck} disabled={true} />}
            label={
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#5C6166",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                {isPrintLabel ? "Printed Neck label" : "Waven Neck label"};
              </Typography>
            } />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            px: 2,
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            color: "#292F3D",
            fontSize: 14,
            fontWeight: 700,
          }}>
          <Grid md={3}>
            Label color: &nbsp;
          </Grid>
          <FormControlLabel
            sx={{ mt: 0 }}
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
                {dbCtx.tag.color ? "Balck" : "White"}
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
            Size: &nbsp;&nbsp;&nbsp;&nbsp;
          </Grid>
          <Box
            component="div"
            sx={{
              width: 17,
              height: 17,
              border: "1px dashed #292F3D",
              fontSize: 12, fontFamily: secondaryFont.style.fontFamily,
              fontWeight: 500
            }}
          />
          <Box sx={{
            fontSize: 12, fontFamily: secondaryFont.style.fontFamily,
            fontWeight: 500
          }}>&nbsp;&nbsp;&nbsp;&nbsp;{dbCtx.tag.size} mm</Box>
        </Box>
      </Stack>
      {renderEmbels}
      {isActiveLace && renderLace}
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
          Size Label: <span style={{ color: "#292F3D", fontWeight: 500 }}>{sizeLabels[dbCtx.sizeLabel]}</span>
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
          Care Tag: <span style={{ color: "#292F3D", fontWeight: 500 }}>{sizeLabels[dbCtx.careLabel]}</span>
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
          Notes: <span style={{ color: "#292F3D", fontWeight: 500 }}>{dbCtx.text}</span>
        </Typography>
      </Stack>
    </Box>
  )

  return (
    <>
      <CustomizeProvider passInitState={context}>
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
          {"customize product - " + customIndex}
        </Typography>
        <Grid container sx={{ mb: 10 }} spacing={6}>
          <Grid item md={6} xs={12}>
            <ConfigurationCanvas page="customize-edit-view" ctx={context} arrowLeftCount={0} arrowRightCount={0} id={"myCanvas_" + customIndex} type={productType} />
            <Typography
              sx={{
                flexGrow: 1,
                color: "#292F3D",
                fontSize: 26,
                fontWeight: 700,
                mt: 5
              }}>
              Product Info:
            </Typography>
            {renderMain}
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={5}>
            <Stack gap={6} sx={{ mt: 0 }}>
              {renderPrices}
            </Stack>
          </Grid>
        </Grid>
      </CustomizeProvider>
    </>
  );
}