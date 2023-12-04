import { useState, useContext, MouseEvent } from "react";
import CustomPopover, { usePopover } from "@/components/custom-popover";
import ControlButton from "@/sections/customize/configurator/control-button";
import {
  Button,
  FormControlLabel,
  Grid,
  MenuItem,
  Select,
  Stack,
  Switch,
  TextField,
  Typography,
  Checkbox,
  SelectChangeEvent,
  OutlinedInput as Input
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { secondaryFont } from "@/theme/typography";
import PositionControl from "./position-control";
import SizeControl from "./size-control";
import { CustomizeContext } from "@/components/customize/context/customize-context";

export const StyledHeader1 = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 600,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  marginBottom: "10px",
}));

export const StyledHeader2 = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 500,
  color: "#5C6166",
  fontFamily: secondaryFont.style.fontFamily,
  marginBottom: "5px",
}));

export const StyledSwitchLabel = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 500,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  textWrap: "nowrap",
}));

const artworks = [
  { label: "Digital Print" },
  { label: "Screen Print" },
  { label: "Embroidery" },
];

const views = [{ label: "Front view" }, { label: "Back view" }];

type Props = {};

export default function EmbellishmentButton(props: Props) {
  const [font, setFont] = useState("Arial")

  const customize = useContext(CustomizeContext);
  const popover = usePopover();

  const clickConfirm = () => {
    popover.onClose();
  };

  const onOpen = (ev: MouseEvent<HTMLElement>) => {
    popover.onOpen(ev);
    customize.onEmbelEditVisible();
  }

  const onClose = () => {
    popover.onClose();
    customize.onEmbelEditVisible();
  }

  const checkImage = (ev: boolean, type: string) => {
    if (ev)
      customize.onEmbelSelectType(type);
    else customize.onEmbelSelectType("");
  }

  const checkArtwork = (ev: boolean, type: number) => {
    if (ev)
      customize.onEmbelSelectArtworkType(type)
    else
      customize.onEmbelSelectArtworkType(-1)
  }

  const checkViewType = (ev: boolean, type: number) => {
    if (ev)
      customize.onEmbelSelectViewType(type)
  }

  const checkNotPrint = () => {
    customize.onEmbelVisibleText()
  }

  const fileSelect = (ev: any) => {
    if (ev.target.files && ev.target.files.length > 0) {
      var userImage = ev.target.files[0];
      customize.onEmbelSelectFile(userImage);
    }
  }

  const changeTextureText = (value: string) => {
    customize.onEmbelChangeTextureText(value);
  }

  const changeReqText = (value: string) => {
    customize.onEmbelChangeReqText(value);
  }

  const handleChange = (event: SelectChangeEvent) => {
    setFont(event.target.value as string);
    customize.onEmbelChangeFont(event.target.value)
  };

  const renderImage = (
    <>
      <FormControlLabel
        sx={{ mb: -2 }}
        control={<Checkbox color="default" checked={customize.embellishment.type === "image"} onClick={(ev) => checkImage(ev.target.checked, "image")} />}
        label={
          <Typography
            sx={{
              width: 1,
              fontSize: 16,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            Add Image
          </Typography>
        } />
    </>
  )

  const renderLabel = (
    <>
      <StyledHeader1>Label</StyledHeader1>

      <StyledHeader2>Size</StyledHeader2>

      <SizeControl />
    </>
  );

  const renderArtwork = (
    <>
      <StyledHeader1>Artwork</StyledHeader1>

      {artworks.map((artwork, i) => (
        <FormControlLabel
          sx={{ mt: -1 }}
          key={i}
          control={<Switch color="primary" checked={customize.embellishment.artwork === i} onClick={ev => checkArtwork(ev.target.checked, i)} />}
          label={<StyledSwitchLabel>{artwork.label}</StyledSwitchLabel>}
          disabled={customize.embellishment.type !== "image" || customize.embellishment.visibleText}
        />
      ))}
    </>
  );

  const renderView = (
    <>
      <StyledHeader1>Views</StyledHeader1>

      {views.map((artwork, i) => (
        <FormControlLabel
          sx={{ mt: -1 }}
          key={i}
          control={<Switch color="primary" checked={customize.embellishment.view === i} onClick={ev => checkViewType(ev.target.checked, i)} />}
          label={<StyledSwitchLabel>{artwork.label}</StyledSwitchLabel>}
          disabled={customize.embellishment.type !== "image" || customize.embellishment.visibleText}
        />
      ))}
    </>
  );

  const renderPrintingStyle = (
    <Stack sx={{ mt: -2 }}>
      <FormControlLabel
        sx={{ mt: -1 }}
        key={1}
        control={<Switch color="primary" checked={customize.embellishment.visibleText} onClick={checkNotPrint} />}
        label={<StyledSwitchLabel>These arn't the printing options i want</StyledSwitchLabel>}
        disabled={customize.embellishment.type !== "image"}
      />
      <TextField
        fullWidth
        size="small"
        multiline
        rows={3}
        placeholder="Describe the printing style you are looking for"
        style={{ display: customize.embellishment.visibleText ? "contents" : "none" }}
        disabled={customize.embellishment.type !== "image"}
      />
    </Stack>
  )

  const renderFile = (
    <>
      <StyledHeader1>File</StyledHeader1>

      <input type="file" onChange={fileSelect} />
    </>
  );

  const renderSizeAndPosition = (
    <Stack gap={1}>
      <StyledHeader1>Size and position</StyledHeader1>

      <Stack>
        <StyledHeader2>Position</StyledHeader2>
        <Grid container spacing={1}>
          <Grid item md={4}>
            <StyledSwitchLabel sx={{ fontSize: 11 }}>
              Artwork width (cm)
            </StyledSwitchLabel>
            <Input
              size="small"
              defaultValue={22}
              fullWidth

              inputProps={{
                step: 1,
                min: 0,
                max: 100,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }} />
          </Grid>
          <Grid item md={4}>
            <StyledSwitchLabel sx={{ fontSize: 11 }}>
              From neck seam (cm)
            </StyledSwitchLabel>
            <Input
              size="small"
              defaultValue={22}
              fullWidth
              inputProps={{
                step: 1,
                min: 0,
                max: 100,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }} />
          </Grid>
          <Grid item md={4}>
            <StyledSwitchLabel sx={{ fontSize: 11 }}>
              From center (cm)
            </StyledSwitchLabel>
            <Input
              size="small"
              defaultValue={22}
              fullWidth
              inputProps={{
                step: 1,
                min: 0,
                max: 100,
                type: 'number',
                'aria-labelledby': 'input-slider',
              }} />
          </Grid>
        </Grid>
      </Stack>

      <Stack>
        <StyledHeader2>Position</StyledHeader2>
        <PositionControl type="image" />
      </Stack>
    </Stack>
  );

  const renderText = (
    <>
      <Stack gap={2}>
        <FormControlLabel
          sx={{ mb: -2 }}
          control={<Checkbox color="default" checked={customize.embellishment.type === "text"} onClick={(ev) => checkImage(ev.target.checked, "text")} />}
          label={
            <Typography
              sx={{
                width: 1,
                fontSize: 16,
                color: "#292F3D",
                fontFamily: secondaryFont.style.fontFamily,
              }}
            >
              Add Text
            </Typography>
          }
        />

        <Stack>
          <TextField
            multiline
            rows={3}
            size="small"
            placeholder="Write your text"
            disabled={customize.embellishment.type !== "text"}
            onChange={(ev) => changeTextureText(ev.target.value)}
          />
        </Stack>

        <Select fullWidth size="small" value={font} onChange={handleChange} disabled={customize.embellishment.type !== "text"}>
          <MenuItem value="Arial" >Arial</MenuItem>
          <MenuItem value="monospace">Monospace</MenuItem>
        </Select>
      </Stack>
    </>
  );

  return (
    <>
      <ControlButton
        label="Embellishment or Text"
        isOpen={Boolean(popover.open)}
        onClick={onOpen}
      />

      <CustomPopover
        hiddenArrow
        open={popover.open}
        onClose={onClose}
        sx={{ p: 2, width: 400, height: 600, overflowY: 'scroll' }}
      >
        <Grid container spacing={2}>
          <Grid item md={12}>
            {renderImage}
          </Grid>

          <Grid item md={12}>
            {renderLabel}
          </Grid>

          <Grid item md={6}>
            {renderArtwork}
          </Grid>

          <Grid item md={6}>
            {renderView}
          </Grid>

          <Grid item md={12}>
            {renderPrintingStyle}
          </Grid>

          <Grid item md={12}>
            {renderFile}
          </Grid>

          <Grid item md={12}>
            {renderSizeAndPosition}
          </Grid>

          <Grid item md={12}>
            {renderText}
          </Grid>
        </Grid>

        <Stack alignItems="center" sx={{ mt: 2 }}>
          <Button
            sx={{
              width: 130,
              bgcolor: "#5C6166",
              "&:hover": { bgcolor: "#6AB67A" },
            }}
            variant="contained"
            onClick={clickConfirm}
          >
            <Typography
              sx={{
                fontSize: 14,
                fontWeight: 0,
                color: "#ffffff",
                fontFamily: secondaryFont.style.fontFamily,
              }}
            >
              Confirm
            </Typography>
          </Button>
        </Stack>
      </CustomPopover>
    </>
  );
}
