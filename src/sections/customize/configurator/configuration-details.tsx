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
  FormGroup,
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
import { set } from "lodash";

const sizes = ["XS", "S", "M", "L", "XL"];

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

type Props = {
  type: string,
  // price: string
};
// let selectedData = [];
const setSelectedData = (itemName: string) => {
  let resultData = [];
  resultData = [
    {
      key: itemName + "01",
      color: <Box component={"div"} sx={{ display: "flex", justifyContent: "start", pt: 1, mt: -1, mb: -1 }}>
        <Box component={"div"} sx={{ width: 20, height: 20, borderRadius: 1, mb: 1.3, mr: 1, backgroundColor: `orange` }} />
        <Typography>{itemName} 01</Typography>
      </Box>
    },
    {
      key: itemName + "02",
      color: <Box component={"div"} sx={{ display: "flex", justifyContent: "start", pt: 1, mt: -1, mb: -1 }}>
        <Box component={"div"} sx={{ width: 20, height: 20, borderRadius: 1, mb: 1.3, mr: 1, backgroundColor: `red` }} />
        <Typography>{itemName} 02</Typography>
      </Box>
    },

    {
      key: itemName + "03",
      color: <Box component={"div"} sx={{ display: "flex", justifyContent: "start", pt: 1, mt: -1, mb: -1 }}>
        <Box component={"div"} sx={{ width: 20, height: 20, borderRadius: 1, mb: 1.3, mr: 1, backgroundColor: `green` }} />
        <Typography>{itemName} 03</Typography>
      </Box>
    },

    {
      key: itemName + "04",
      color: <Box component={"div"} sx={{ display: "flex", justifyContent: "start", pt: 1, mt: -1, mb: -1 }}>
        <Box component={"div"} sx={{ width: 20, height: 20, borderRadius: 1, mb: 1.3, mr: 1, backgroundColor: `purple` }} />
        <Typography>material 04</Typography>
      </Box>
    },
  ];
  return resultData;
}


export default function ConfigurationDetails(props: Props) {
  const context = useCustomizeContext();
  const cart = useBoolean();
  const [washing, setWashing] = useState(true);

  const handleChange = (ev: any) => {
    setWashing(ev.target.checked);
  };

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

        <Controller
          name="size"
          render={({ field }) => {
            return (
              <SizePicker
                sizes={sizes}
                selected={field}
                onSelectSize={(size) => field.onChange(size as string)}
              />
            )
          }
          }
        />
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

  const materials = setSelectedData("material");
  const laces = setSelectedData("lace");
  const laceTips = setSelectedData("lace tip");
  const materialSelect = (
    <Box component="div">
      <RhfSelect name="material" label="Material" sx={{ fontFamily: secondaryFont.style.fontFamily, fontSize: 14, fontWeight: 500 }}>{
        materials.map(item => (
          <MenuItem value={item.key}>{item.color}</MenuItem>
        ))
      }</RhfSelect>
    </Box>
  );
  let isActiveLace = false;
  if (props.type !== undefined) {
    isActiveLace = props.type.toLowerCase() == "shorts" || props.type.toLowerCase() == "pants" || props.type.toLowerCase() == "hoodie";
  }

  const laceSelect = isActiveLace ? (
    <Box component="div">
      <RhfSelect name="lace" label="Lace">{
        laces.map(item => (
          <MenuItem value={item.key}>{item.color}</MenuItem>
        ))
      }</RhfSelect>
    </Box>
  ) : (
    <Box component="div">
      <RhfSelect name="lace" label="Lace" disabled>{
        laces.map(item => (
          <MenuItem value={item.key}>{item.color}</MenuItem>
        ))
      }</RhfSelect>
    </Box>
  );

  const laceTipSelect = isActiveLace ? (
    <Box component="div">
      <RhfSelect name="laceTip" label="Lace Tip">{
        laceTips.map(item => (
          <MenuItem value={item.key}>{item.color}</MenuItem>
        ))
      }</RhfSelect>
    </Box>
  ) : (
    <Box component="div">
      <RhfSelect name="laceTip" label="Lace Tip" disabled>{
        laceTips.map(item => (
          <MenuItem value={item.key}>{item.color}</MenuItem>
        ))
      }</RhfSelect>
    </Box>
  );

  const renderProperty = (
    <Grid container rowSpacing={2} columnSpacing={5}>
      <Grid item md={6}>
        {materialSelect}
      </Grid>
      <Grid item md={6}>
        <SelectColorButton name="Color" isShowIcon={false} />
      </Grid>
      <Grid item md={6}>
        {laceSelect}
      </Grid>
      <Grid item md={6}>
        {laceTipSelect}
      </Grid>
    </Grid>
  );

  const renderTag = (
    <>
      <Stack>
        <Stack sx={{ mt: -1 }} direction="row" alignItems="center">
          <Typography
            sx={{
              width: 1,
              fontSize: 16,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            Washing Instruction Tag
          </Typography>

          <Button
            component={RouterLink}
            href={PATH_CONFIGURATOR.product.create(productType)}
            startIcon={
              <EditIcon color="#F05A4A" sx={{ width: 10, height: 12 }} />
            }
            sx={{ fontSize: 12, color: "#F05A4A", mr: 0.5 }}
          >
            Edit
          </Button>

          <Button
            component={RouterLink}
            href={PATH_SHOP.customer.address.edit("1111")}
            startIcon={
              <CartDeleteIcon
                color="#F05A4A"
                sx={{ width: 11, height: 12 }}
              />
            }
            sx={{ fontSize: 12, color: "#F05A4A", mt: '-2px', mr: 0.5 }}
          >
            Delete
          </Button>
        </Stack>
        <FormGroup >
          <FormControlLabel
            sx={{ mr: 0 }}
            control={<Checkbox checked={washing} onChange={handleChange} color="default" sx={{ color: '#333333' }} />}
            label={
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#5C6166",
                  fontFamily: secondaryFont.style.fontFamily,
                  lineHeight: '28px'
                }}
              >
                Use Standard Wonder Row Washing tag
              </Typography>
            } />

          <FormControlLabel
            sx={{ mr: 0 }}
            control={<Checkbox disabled={washing} color="default" sx={{ color: '#333333', mt: -6 }} />}
            label={
              <TextField
                fullWidth
                size="small"
                multiline
                disabled={washing}
                rows={3}
                sx={{
                  width: 354,
                  ".css-1qheboz-MuiInputBase-input-MuiOutlinedInput-input": {
                    fontSize: 12,
                    fontWeight: 500,
                    fontFamily: secondaryFont.style.fontFamily
                  }
                }
                }
                placeholder="Describe the custom washing tag instructions tag you want"
              />
            } />
        </FormGroup>
      </Stack>
    </>
  );

  const renderItems = (
    <>
      <TableContainer sx={{ mt: -2 }}>
        <Table>
          <TableBody>
            <ConfigurationPropertyRow
              title="Text"
              content={
                <Typography sx={{ fontSize: 16, fontWeight: 500, fontFamily: secondaryFont.style.fontFamily }}>
                  I'm the coolest man in the world
                </Typography>}
              productType={productType} />
            <ConfigurationPropertyRow title="Tag" content={"Image"} productType={productType} />
            <ConfigurationPropertyRow title="Image" content={"Image"} productType={productType} />
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );

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
        onClick={() => {
          // cart.onTrue();
          push({
            pathname: "/quote",
            query: {
              id: 1,
            }
          }, '/quote')
        }}
      >
        <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: secondaryFont.style.fontFamily }}>
          REQUEST FOR QUOTE
        </Typography>
      </Button>

      <Button variant="outlined" sx={{ p: 1, minWidth: "auto" }}>
        <SvgColor src="/icons/favorite-off.svg" />
      </Button>
    </Stack>
  );

  const renderModal = (
    <>
      <Modal open={cart.value}>
        <Wrapper>
          <Stack alignItems="end">
            <IconButton
              onClick={() => {
                cart.onFalse();
              }}
            >
              <Iconify
                icon="material-symbols:close"
                width={{ xs: 20, md: 36 }}
                color="#ffffff"
              />
            </IconButton>
          </Stack>
          <Card sx={{ px: 4, py: 6 }}>
            <Grid container spacing={2}>
              <Grid item md={8}>
                <Image
                  src="/images/customize/screenshot.jpg"
                  sx={{ width: 1 }}
                />
              </Grid>
              <Grid item md={4}>
                <Stack gap={3}>
                  <RHFTextField name="name" placeholder="Product name" />

                  <LoadingButton fullWidth variant="contained">
                    SAVE
                  </LoadingButton>
                </Stack>
              </Grid>
            </Grid>
          </Card>
        </Wrapper>
      </Modal>
    </>
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
                <TableCell sx={{ py: 1, fontSize: 16, lineHeight: '32px' }}>{price.price} €</TableCell>
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

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack gap={3}>
        {renderSize}

        {renderPrice}

        {renderProperty}

        {renderItems}

        {renderTag}

        {renderActions}

        {renderModal}

        {renderPrices}

        {renderPeriod}
      </Stack>
    </FormProvider>
  );
}
