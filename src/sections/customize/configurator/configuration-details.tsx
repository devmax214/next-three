import {
  Box,
  Button,
  Card,
  Grid,
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
  MenuItem,
  TextField,
  Checkbox,
  Switch,
  FormGroup,
  ButtonBase,
  FormControlLabel,
} from "@mui/material";
import Image from "@/components/image";
import SvgColor from "@/components/svg-color";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { SizePicker } from "@/components/size-utils";
import FormProvider, { RhfSelect, RHFTextField } from "@/components/hook-form";
import { fCurrency } from "@/utils/formatNumber";
import ConfigurationPropertyRow from "./configuration-property-row";
import { useBoolean } from "@/hooks";
import { styled } from "@mui/material/styles";
import LoadingButton from "@mui/lab/LoadingButton";
import Iconify from "@/components/iconify";
import { useRouter } from "next/router";
import SelectColorButton from "./select-color-button";
import { secondaryFont } from "@/theme/typography";
import { RouterLink } from "@/routers/components";
import { PATH_CONFIGURATOR, PATH_SHOP } from "@/routers/path";
import EditIcon from "@/components/icons/icon-edit";
import CartDeleteIcon from "@/components/icons/icon-cart-delete";
import { useCustomizeContext } from "@/components/customize/context/customize-context";
import { uploadImage } from "@/services/upload";
import { endpoints } from "../../../../global-config";
import axios from "axios";
import CheckedIcon from "@/components/icons/checked-icon";
import UnCheckedIcon from "@/components/icons/unchecked-icon";
import {
  LeftPosition,
  RightPosition,
  TopCenterPosition,
  TopPosition,
  CenterPosition,
  BottomPosition
} from "@/components/icons/customize/position/position";
import { NoInfer } from "@react-spring/three";
import { typeIndexToLabel } from "@/helpers/common";
import product from "@/helpers/db/models/product";

const sizes = ["XS", "S", "M", "L", "XL"];

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

const defaultValues = { size: sizes[0] };

const Wrapper = styled(Box)<{}>(({ theme }) => ({
  position: "absolute",
  left: "50%",
  top: 60,
  transform: "translateX(-50%)",
  width: 1057,
  outline: "none",
}));

const prices = [
  { items: 50, price: 12.5 },
  { items: 100, price: 14.5 },
  { items: 150, price: 16.5 },
  { items: 300, price: 19.5 },
];

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

type Props = {
  type: string,
  // price: string
};

export default function ConfigurationDetails(props: any) {
  const context = useCustomizeContext();

  const dbCtx = props.context;

  const cart = useBoolean();

  const price = 50;

  const priceSale = 80.03;

  const methods = useForm({
    defaultValues,
  });

  const productType = props.type == undefined ? "T-Shirts" : props.type;

  const { reset, watch, control, setValue, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => { });

  const renderSize = (
    <>
      <Stack>
        <Typography
          sx={{
            flexGrow: 1,
            color: "#5C6166",
            fontSize: 14,
            fontweight: 500,
            fontFamily: secondaryFont.style.fontFamily
          }}>
          SIZE:
        </Typography>

        <Grid container>
          <Grid item md={7}>
            <Controller
              name="size"
              render={({ field }) => {
                return (
                  <SizePicker
                    sizes={sizes}
                    selected={field}
                    onSelectSize={(size) => {
                      context.onSizeLabelChange(size)
                      field.onChange(size as string)
                    }}
                  />
                )
              }
              }
            />
          </Grid>
          <Grid item md={5}>
            <RhfSelect name="gender" value={"man"}>
              {GENDERS.map((gender, index) => (
                <MenuItem key={index} selected={gender.value === "man"} value={gender.value}>
                  {gender.label}
                </MenuItem>
              ))}
            </RhfSelect>
          </Grid>
        </Grid>


      </Stack>
    </>
  );

  const renderPrice = (
    <>
      <Box sx={{ typography: "h4" }}>
        {priceSale && (
          <Box
            component="span"
            sx={{
              color: "text.disabled",
              textDecoration: "line-through",
              mr: 2.5,
              fontWeight: 400,
            }}
          >
            {fCurrency(priceSale)}
          </Box>
        )}

        {fCurrency(price)}
      </Box>
    </>
  );

  let isActiveLace = false;
  if (props.type !== undefined) {
    isActiveLace = props.type.toLowerCase() == "shorts" || props.type.toLowerCase() == "pants" || props.type.toLowerCase() == "hoodies";
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
  const { push } = useRouter();
  const renderActions = (
    <Stack direction="row" spacing={2}>
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
        onClick={async () => {
          push({
            pathname: "/quote",
            query: {
              customProduct: JSON.stringify(props)
            }
          }, '/quote')
        }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: secondaryFont.style.fontFamily }}>
          REQUEST FOR QUOTE
        </Typography>
      </Button>
    </Stack >
  );

  const renderPrices = (
    <>
      <TableContainer sx={{ width: 1 }}>
        <Table>
          <TableHead sx={{ px: 2, py: 1, bgcolor: "#EDE9DC" }}>
            <TableCell
              sx={{
                py: 1,
                fontSize: 14,
                fontFamily: 500,
                color: '#5C6166'
              }}
            >From </TableCell>
            <TableCell
              sx={{
                py: 1,
                fontSize: 14,
                fontFamily: 500,
                color: '#5C6166'
              }}
            >Price per item </TableCell>
          </TableHead>
          <TableBody>
            {prices.map((price, index) => (
              <TableRow key={index} sx={{ borderBottom: "1px solid #EDE9DC" }}>
                <TableCell sx={{ py: 1, fontSize: 16, lineHeight: '32px' }}>{price.items} items</TableCell>
                <TableCell sx={{ py: 1, fontSize: 16, lineHeight: '32px' }}>{price.price} {JSON.parse(localStorage.getItem('currency')).value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );

  const renderPeriod = (
    <>
      <Box component="div" sx={{ px: 2, py: 1, bgcolor: "#EDE9DC" }}>
        <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#5C6166", fontFamily: secondaryFont.style.fontFamily }}>
          Lead time:{" "}
          <Typography
            component="span"
            sx={{ fontSize: 16, fontWeight: 500, color: "#292F3D", fontFamily: secondaryFont.style.fontFamily }}
          >
            to 2-4 weeks
          </Typography>
        </Typography>
      </Box>
    </>

  );

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
          artwork&nbsp;&nbsp;
          <FormControlLabel
            sx={{ mt: 0 }}
            key={0}
            control={<Switch color="default" checked={true} />}
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
              fill: "#ACB1B8"
            }
          }
        }}>{positions[dbCtx.embellishment[embelIndex].position.type].icon}</StyledButton>
      </Typography >
    </Stack >
  )))

  const renderMain = (
    <Box component={"div"}>
      <Typography
        sx={{
          flexGrow: 1,
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
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack gap={4}>
        {renderSize}

        {renderPrice}

        {renderMain}

        {renderActions}

        {renderPrices}

        {renderPeriod}
      </Stack>
    </FormProvider>
  );
}
