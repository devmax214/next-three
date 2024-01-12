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
  FormControl,
  MenuItem,
  OutlinedInput
} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
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
import { isEmpty } from "@/helpers/common";
import { embelRenders } from "@/constant/embelConst";

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
  const context = useContext(CustomizeContext);
  const checkoutContext = useCheckoutContext();
  const { onAddToCart } = checkoutContext;
  const { push } = useRouter();

  const { renderPrices, renderPeriod } = embelRenders(props.type, context);

  const methods = useForm({
    defaultValues,
  });
  const { reset, watch, control, setValue, handleSubmit } = methods;

  const onSubmit = handleSubmit(async (data) => { });

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

  const [cord, setCord] = useState([]);
  const [cordTip, setCordTip] = useState([]);

  useEffect(() => {
    setCord(["Cord1"]);
    setCordTip(['mental_end'])
    context.onCordTypeChange("Cord1");
    context.onCordTipChange("mental_end");
  }, [])

  const changeCord = (event: SelectChangeEvent<typeof cord>) => {
    const { target: { value } } = event;
    const tmpList = typeof value === 'string' ? value.split(',') : value;

    setCord([tmpList[tmpList.length - 1]]);
    context.onCordTypeChange(tmpList[tmpList.length - 1]);
  }

  const changeCordTip = (event: SelectChangeEvent<typeof cordTip>) => {
    const { target: { value } } = event;
    const tmpList = typeof value === 'string' ? value.split(',') : value;
    setCordTip([tmpList[tmpList.length - 1]]);
    context.onCordTipChange(tmpList[tmpList.length - 1]);
  }

  const renderCardType = (
    <Box component="div">
      <StyledTypography>Cord type</StyledTypography>
      <FormControl sx={{ width: 1 }}>
        <Select
          labelId="cord-m"
          id="cord"
          multiple
          size="small"
          value={cord}
          onChange={changeCord}
          onOpen={() => context.onCordEditable(true)}
          onClose={() => context.onCordEditable(false)}
        >
          {cords.map((cord, i) => (
            <MenuItem value={cord.key} key={i}>{cord.color}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );

  const renderCardTip = (
    <Box component="div">
      <StyledTypography>Cord tip</StyledTypography>
      <FormControl sx={{ width: 1 }}>
        <Select
          labelId="cordtips-m"
          id="cordtips"
          multiple
          size="small"
          value={cordTip}
          onChange={changeCordTip}
          onOpen={() => context.onCordEditable(true)}
          onClose={() => context.onCordEditable(false)}
        >
          {tips.map((tip, i) => (
            <MenuItem value={tip.key} key={i}>{tip.color}</MenuItem>
          ))}
        </Select>
      </FormControl>
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

      localStorage.setItem('productType', props.type);
      localStorage.setItem('context', JSON.stringify(context));
      push(`/quote/${props.type}/ordersample`)

    } catch (error) { }
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
            localStorage.setItem('productType', props.type);
            localStorage.setItem('context', JSON.stringify(context));
            push('/quote')
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

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack gap={3}>
        <SelectColorButton {...props} />

        <EditTagButton canvasAllRef={props.canvasAllRef} {...props} />

        <EmbellishmentButton canvasRef={props.canvasRef} canvasAllRef={props.canvasAllRef} embelIndex={1} ptype={props.type} />
        <EmbellishmentButton canvasRef={props.canvasRef} canvasAllRef={props.canvasAllRef} embelIndex={0} ptype={props.type} />
        <EmbellishmentButton canvasRef={props.canvasRef} canvasAllRef={props.canvasAllRef} embelIndex={3} ptype={props.type} />
        <EmbellishmentButton canvasRef={props.canvasRef} canvasAllRef={props.canvasAllRef} embelIndex={2} ptype={props.type} />
        {props.type === 'Pants' || props.type === 'Shorts' ? <EmbellishmentButton canvasRef={props.canvasRef} canvasAllRef={props.canvasAllRef} embelIndex={4} ptype={props.type} /> : ""}

        {props.type === 'Pants' || props.type === 'Shorts' || props.type === 'Hoodies' ? renderCardType : ""}
        {props.type === 'Pants' || props.type === 'Shorts' || props.type === 'Hoodies' ? renderCardTip : ""}

        {renderCareLabel}
        {renderSizeLabel}
        {renderNotes}

        {renderButtons}

        {renderPrices}

        {renderPeriod}
      </Stack>
    </FormProvider>
  );
}
