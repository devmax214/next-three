import React, { useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import {
  Box,
  Button,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
  Checkbox,
  FormGroup,
  FormControlLabel,
  MenuItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import FormProvider, { RhfSelect } from "@/components/hook-form";
import { useForm } from "react-hook-form";
import { secondaryFont } from "@/theme/typography";
import SelectColorButton from "./select-color-button";
import EditTagButton from "./edit-tag-button";
import EmbellishmentButton from "./embellishment-button";
import TableHead from "@mui/material/TableHead";
import { CheckBox } from "@mui/icons-material";
import { RouterLink } from "@/routers/components";
import { PATH_CONFIGURATOR, PATH_SHOP } from "@/routers/path";
import EditIcon from "@/components/icons/icon-edit";
import CartDeleteIcon from "@/components/icons/icon-cart-delete";
import { CustomizeContext } from "@/components/customize/context/customize-context";
import CheckedIcon from "@/components/icons/checked-icon";
import UnCheckedIcon from "@/components/icons/unchecked-icon";
import { useCheckoutContext } from "@/components/checkout/context";
import { endpoints } from "../../../../global-config";
import axios from "axios";
import { fromPairs } from "lodash";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 500,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: { fontSize: "13px" },
}));

const defaultValues = {};

const prices = [
  { items: 50, price: 12.5 },
  { items: 100, price: 14.5 },
  { items: 150, price: 16.5 },
  { items: 300, price: 19.5 },
];

const cords = [
  {
    key: "Cord1",
    color: <Box component={"div"} sx={{ display: "flex", justifyContent: "start", pt: 1, mt: -1, mb: -1 }}>
      {/* <Box component={"div"} sx={{ width: 20, height: 20, borderRadius: 1, mb: 1.3, mr: 1, backgroundColor: `gray` }} /> */}
      <Typography>cord 01</Typography>
    </Box>
  },
  {
    key: "Cord2",
    color: <Box component={"div"} sx={{ display: "flex", justifyContent: "start", pt: 1, mt: -1, mb: -1 }}>
      {/* <Box component={"div"} sx={{ width: 20, height: 20, borderRadius: 1, mb: 1.3, mr: 1, backgroundColor: `red` }} /> */}
      <Typography>cord 02</Typography>
    </Box>
  },
  {
    key: "Cord3",
    color: <Box component={"div"} sx={{ display: "flex", justifyContent: "start", pt: 1, mt: -1, mb: -1 }}>
      {/* <Box component={"div"} sx={{ width: 20, height: 20, borderRadius: 1, mb: 1.3, mr: 1, backgroundColor: `pink` }} /> */}
      <Typography>cord 03</Typography>
    </Box>
  },
  {
    key: "Cord4",
    color: <Box component={"div"} sx={{ display: "flex", justifyContent: "start", pt: 1, mt: -1, mb: -1 }}>
      {/* <Box component={"div"} sx={{ width: 20, height: 20, borderRadius: 1, mb: 1.3, mr: 1, backgroundColor: `blue` }} /> */}
      <Typography>cord 04</Typography>
    </Box>
  }
]

const tips = [
  {
    key: "mental_end",
    name: "tip01",
    color: <Box component={"div"} sx={{ display: "flex", justifyContent: "start", pt: 1, mt: -1, mb: -1 }}>
      {/* <Box component={"div"} sx={{ width: 20, height: 20, borderRadius: 1, mb: 1.3, mr: 1, backgroundColor: `gray` }} /> */}
      <Typography>tip 01</Typography>
    </Box>
  },
  {
    key: "plastic_end",
    name: "tip02",
    color: <Box component={"div"} sx={{ display: "flex", justifyContent: "start", pt: 1, mt: -1, mb: -1 }}>
      {/* <Box component={"div"} sx={{ width: 20, height: 20, borderRadius: 1, mb: 1.3, mr: 1, backgroundColor: `red` }} /> */}
      <Typography>tip 02</Typography>
    </Box>
  },
  {
    key: "silicone_end",
    name: "tip03",
    color: <Box component={"div"} sx={{ display: "flex", justifyContent: "start", pt: 1, mt: -1, mb: -1 }}>
      {/* <Box component={"div"} sx={{ width: 20, height: 20, borderRadius: 1, mb: 1.3, mr: 1, backgroundColor: `pink` }} /> */}
      <Typography>tip 03</Typography>
    </Box>
  },
]

type Props = {
  type: string;
};

export default function ConfigurationProperties(props: any) {
  const [cord, setCord] = useState("Cord1");
  const [cordTip, setCordTip] = useState("mental_end");
  const context = useContext(CustomizeContext);
  const checkoutContext = useCheckoutContext();
  const { onAddToCart } = checkoutContext;
  const { push } = useRouter();

  useEffect(() => {
    setCord("Cord1");
    setCordTip("mental_end")
    context.onCordTypeChange("Cord1");
    context.onCordTipChange("mental_end");
  }, [])

  const methods = useForm({
    defaultValues,
  });
  const { reset, watch, control, setValue, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => { });

  const changeCord = (ev: any) => {
    setCord(ev.target.dataset ? ev.target.dataset.value : ev.target.value);
    context.onCordTypeChange(ev.target.dataset ? ev.target.dataset.value : ev.target.value);
  }

  const changeCordTip = (ev: any) => {
    setCordTip(ev.target.dataset ? ev.target.dataset.value : ev.target.value);
    context.onCordTipChange(ev.target.dataset ? ev.target.dataset.value : ev.target.value);
  }

  const changeCareLabel = (ev: any, value: number) => {
    if (ev.target.checked) {
      context.onCareLabelChange(value);
    }
  }

  const changeSizeLabel = (ev: any, value: number) => {
    if (ev.target.checked) {
      context.onSizeLabelChange(value);
    }
  }

  const renderCardType = (
    <Box component="div">
      <StyledTypography>Cord type</StyledTypography>

      <RhfSelect onFocus={(e) => context.onCordEditable(e.target.ariaExpanded === "true" ? true : false)} onChange={changeCord} value={cord} name="cord" placeholder="Selected Color">{
        cords.map((cord, i) => (
          <MenuItem value={cord.key} key={i} onClick={(e) => {
            changeCord(e);
            context.onCordEditable(false)
          }} onMouseEnter={changeCord}>{cord.color}</MenuItem>
        ))
      }</RhfSelect>
    </Box>
  );

  const renderCardTip = (
    <Box component="div">
      <StyledTypography>Cord tip</StyledTypography>

      <RhfSelect name="tip" onFocus={(e) => context.onCordEditable(e.target.ariaExpanded === "true" ? true : false)} value={cordTip} onChange={changeCordTip} placeholder="Selected Color">{
        tips.map((tip, i) => (
          <MenuItem value={tip.key} key={i} onClick={(e) => {
            changeCordTip(e);
            context.onCordEditable(false)
          }} onMouseEnter={changeCordTip}>{tip.color}</MenuItem>
        ))
      }</RhfSelect>
    </Box>
  );

  const renderText = (
    <TextField size="small" placeholder="Write your text" multiline rows={5} />
  );

  /**
   * by zhuzhang
   */
  const renderCareLabel = (
    <Stack>
      <Stack sx={{ mb: 1 }} direction="row" alignItems="center">
        <Typography
          sx={{
            width: 1,
            fontSize: 16,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal"
          }}
        >
          Care Label
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ mx: 2 }} gap={1}>
        <FormGroup >
          <FormControlLabel
            sx={{ mr: 0 }}
            control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} color="default" checked={context.careLabel === 0} onChange={ev => changeCareLabel(ev, 0)} sx={{ color: '#333333' }} />}
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
                Size label sewn on the side the brand label
              </Typography>
            } />
          <FormControlLabel
            sx={{ mt: -2, mr: 0 }}
            control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} color="default" checked={context.careLabel === 1} onChange={ev => changeCareLabel(ev, 1)} sx={{ color: '#333333' }} />}
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
                Brand label on the garment seam, 10cm from the bottom
              </Typography>
            } />
          <FormControlLabel
            sx={{ mt: -2, mr: 0 }}
            control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} color="default" sx={{ color: '#333333' }} checked={context.careLabel === 2} onChange={ev => changeCareLabel(ev, 2)} />}
            label={
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#5C6166",
                  fontFamily: secondaryFont.style.fontFamily,
                  lineHeight: '28px',
                  paddingTop: '1px'
                }}
              >
                Decide later, in a back office conversation
              </Typography>
            } />
        </FormGroup>
      </Stack>
    </Stack>
  )

  const renderSizeLabel = (
    <Stack>
      <Stack sx={{ mb: 1, mt: -1 }} direction="row" alignItems="center">
        <Typography
          sx={{
            width: 1,
            fontSize: 16,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Size Label
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ mx: 2 }} gap={1}>
        <FormGroup>
          <FormControlLabel
            sx={{ mr: 0 }}
            control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} color="default" checked={context.sizeLabel === 0} onChange={ev => changeSizeLabel(ev, 0)} sx={{ color: '#333333' }} />}
            label={
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#5C6166",
                  fontFamily: secondaryFont.style.fontFamily,
                  lineHeight: '28px',
                  paddingTop: '1px'
                }}
              >
                Size label sewn on the side the brand label
              </Typography>
            } />
          <FormControlLabel
            sx={{ mt: -2, mr: 0 }}
            control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} color="default" checked={context.sizeLabel === 1} onChange={ev => changeSizeLabel(ev, 1)} sx={{ color: '#333333' }} />}
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
                Brand label on the garment seam, 10cm from the bottom
              </Typography>
            } />
          <FormControlLabel
            sx={{ mt: -2, mr: 0 }}
            control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} color="default" checked={context.sizeLabel === 2} onChange={ev => changeSizeLabel(ev, 2)} sx={{ color: '#333333' }} />}
            label={
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#5C6166",
                  fontFamily: secondaryFont.style.fontFamily,
                  lineHeight: '28px',
                  paddingTop: '1px'
                }}
              >
                Decide later, in a back office conversation
              </Typography>
            } />
        </FormGroup>
      </Stack>
    </Stack>
  )

  const renderNotes = (
    <Stack>
      <Stack sx={{ mb: 1, mt: -1 }} direction="row" alignItems="center">
        <Typography
          sx={{
            width: 1,
            fontSize: 16,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Notes
        </Typography>
      </Stack>
      <Stack direction="row" gap={1}>
        <TextField
          fullWidth
          size="small"
          multiline
          rows={2}
          value={context.text}
          onChange={(e) => context.onTextChange(e.target.value)}
          placeholder="Add special requests here"
        />
      </Stack>
    </Stack>
  )

  const renderTag = (
    <>
      <Stack>
        <Stack sx={{ mb: 1 }} direction="row" alignItems="center">
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
            href={"javascript:;"}
            startIcon={
              <EditIcon color="#F05A4A" sx={{ width: 13.4, height: 16 }} />
            }
            sx={{ fontSize: 12, color: "#F05A4A" }}
          >
            Edit
          </Button>

          <Button
            component={RouterLink}
            href={"javascript:;"}
            startIcon={
              <CartDeleteIcon
                color="#F05A4A"
                sx={{ width: 13.4, height: 16 }}
              />
            }
            sx={{ fontSize: 12, color: "#F05A4A" }}
          >
            Delete
          </Button>
        </Stack>
        <Stack direction="row" gap={1}>
          <CheckBox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} />
          <Typography
            sx={{
              fontSize: 12,
              fontWeight: 500,
              color: "#5C6166",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            Use Standard Wonder Raw Washing tag
          </Typography>
        </Stack>
        <Stack direction="row" gap={1}>
          <CheckBox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} />
          <TextField
            fullWidth
            size="small"
            multiline
            rows={3}
            placeholder="Describe the custom washing tag instructions tag you want"
          />
        </Stack>
      </Stack>
    </>
  );
  const sizes = [
    { label: "XS" },
    { label: "S" },
    { label: "M" },
    { label: "L" },
    { label: "XL" },
  ];

  const handleAddCart = async () => {
    console.log("test")
    try {
      const selectedSize = sizes[context.embellishment[0].size].label;
      var canvas = document.getElementById('myCanvas')?.getElementsByTagName('canvas')[0] as any;
      var imageData = "";
      if (canvas) {
        imageData = canvas.toDataURL();
      }
      const newProduct = {
        id: props.type + (Math.random() < 0.5 ? "1" : "2"),
        name: props.type,
        coverUrl: imageData,
        price: 6,
        size: selectedSize,
        quantity: 1,
      };

      onAddToCart(newProduct);
    } catch (error) { console.log(error) }
  }
  const renderButtons = (
    <>
      <Stack direction="row" gap={1}>
        <Button
          variant="contained"
          sx={{
            width: 170,
            bgcolor: "#5C6166",
            "&:hover": { bgcolor: "#550248" },
          }}
          onClick={handleAddCart}
        >
          ORDER SAMPLE
        </Button>

        <Button
          variant="contained"
          sx={{
            width: 210,
            bgcolor: "#292F3D",
            "&:hover": { bgcolor: "#550248" },
          }}
          onClick={() => {
            push({
              pathname: "/quote",
              query: {
                customProduct: JSON.stringify({ ...props, context: context, product: props.type })
              }
            }, '/quote')
          }}
        >
          REQUEST FOR QUOTE
        </Button>
      </Stack>

      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 500,
          color: "#5C6166",
          textAlign: "center",
        }}
      >
        Maximum order of two sample pieces per product
      </Typography>
    </>
  )

  const renderPrice = (
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
  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack gap={3}>
        <SelectColorButton {...props} />

        <EditTagButton {...props} />

        <EmbellishmentButton embelIndex={1} ptype={props.type} />
        <EmbellishmentButton embelIndex={0} ptype={props.type} />
        <EmbellishmentButton embelIndex={3} ptype={props.type} />
        <EmbellishmentButton embelIndex={2} ptype={props.type} />
        {props.type === 'Pants' || props.type === 'Shorts' ? <EmbellishmentButton embelIndex={4} ptype={props.type} /> : ""}

        {props.type === 'Pants' || props.type === 'Shorts' || props.type === 'Hoodies' ? renderCardType : ""}
        {props.type === 'Pants' || props.type === 'Shorts' || props.type === 'Hoodies' ? renderCardTip : ""}

        {renderCareLabel}
        {renderSizeLabel}
        {renderNotes}

        {renderButtons}

        {renderPrice}

        {renderPeriod}
      </Stack>
    </FormProvider>
  );
}
