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
import CheckedIcon from "@/components/icons/checked-icon";
import UnCheckedIcon from "@/components/icons/unchecked-icon";
import { typeIndexToLabel } from "@/helpers/common";
import { fontList } from '@/helpers/common';

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

type Props = {
  embelIndex: number;
  ptype: string;
};

export default function EmbellishmentButton({ embelIndex, ptype }: Props) {
  const [font, setFont] = useState("ABeeZee")

  const customize = useContext(CustomizeContext);
  const popover = usePopover();

  const clickConfirm = () => {
    popover.onClose();
    customize.onAllEmbelChange(embelIndex, { visible: !customize.embellishment[embelIndex].visible });
  };

  const onOpen = (ev: MouseEvent<HTMLElement>) => {
    popover.onOpen(ev);
    customize.onAllEmbelChange(embelIndex, { visible: !customize.embellishment[embelIndex].visible });
  }

  const onClose = () => {
    popover.onClose();
    customize.onAllEmbelChange(embelIndex, { visible: !customize.embellishment[embelIndex].visible });
  }

  const checkImage = (ev: boolean, type: string) => {
    if (ev) customize.onAllEmbelChange(embelIndex, { type: type });
    else customize.onAllEmbelChange(embelIndex, { type: "" });
  }

  const checkArtwork = (ev: boolean, type: number) => {
    if (ev)
      customize.onAllEmbelChange(embelIndex, { artwork: type })
    else
      customize.onAllEmbelChange(embelIndex, { artwork: -1 })
  }

  const checkViewType = (ev: boolean, type: number) => {
    if (ev)
      customize.onAllEmbelChange(embelIndex, { view: type })
  }

  const checkNotPrint = () => {
    customize.onAllEmbelChange(embelIndex, { visibleText: !customize.embellishment[embelIndex].visibleText })
  }

  const fileSelect = (ev: any) => {
    if (ev.target.files && ev.target.files.length > 0) {
      var userImage = ev.target.files[0];
      customize.onAllEmbelChange(embelIndex, { file: userImage });
    }
  }

  const changeTextureText = (value: string) => {
    customize.onAllEmbelChange(embelIndex, { textureText: value });
  }

  const changeReqText = (value: string) => {
    customize.onAllEmbelChange(embelIndex, { reqText: value });
  }

  const handleChange = (event: SelectChangeEvent) => {
    setFont(event.target.value as string);
    customize.onAllEmbelChange(embelIndex, { font: event.target.value })
  };

  const renderImage = (
    <>
      <FormControlLabel
        sx={{ mb: -2 }}
        control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} color="default" disabled={customize.embellishment[embelIndex].type === "image"} checked={customize.embellishment[embelIndex].type === "image"} onClick={(ev) => checkImage(ev.target.checked, "image")} />}
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

      <SizeControl embelIndex={embelIndex} />
    </>
  );

  const renderArtwork = (
    <>
      <StyledHeader1>Artwork</StyledHeader1>

      {artworks.map((artwork, i) => (
        <FormControlLabel
          sx={{ mt: -1 }}
          key={i}
          control={<Switch color="primary" checked={customize.embellishment[embelIndex].artwork === i} onClick={ev => checkArtwork(ev.target.checked, i)} />}
          label={<StyledSwitchLabel>{artwork.label}</StyledSwitchLabel>}
          disabled={customize.embellishment[embelIndex].type !== "image" || customize.embellishment[embelIndex].visibleText}
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
          control={<Switch color="primary" checked={customize.embellishment[embelIndex].view === i} onClick={ev => checkViewType(ev.target.checked, i)} />}
          label={<StyledSwitchLabel>{artwork.label}</StyledSwitchLabel>}
          disabled={customize.embellishment[embelIndex].type !== "image" || customize.embellishment[embelIndex].visibleText}
        />
      ))}
    </>
  );

  const renderPrintingStyle = (
    <Stack sx={{ mt: -2 }}>
      <FormControlLabel
        sx={{ mt: -1 }}
        key={1}
        control={<Switch color="primary" checked={customize.embellishment[embelIndex].visibleText} onClick={checkNotPrint} />}
        label={<StyledSwitchLabel>These arn't the printing options i want</StyledSwitchLabel>}
        disabled={customize.embellishment[embelIndex].type !== "image"}
      />
      <TextField
        fullWidth
        size="small"
        multiline
        rows={3}
        placeholder="Describe the printing style you are looking for"
        style={{ display: customize.embellishment[embelIndex].visibleText ? "contents" : "none" }}
        disabled={customize.embellishment[embelIndex].type !== "image"}
      />
    </Stack>
  )

  const renderFile = (
    <>
      <StyledHeader1>File</StyledHeader1>

      <input type="file" disabled={customize.embellishment[embelIndex].type !== "image"} onChange={fileSelect} />
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
              disabled={customize.embellishment[embelIndex].type !== "image"}
              onChange={(e) => customize.onAllEmbelChange(embelIndex, { position: { ...customize.embellishment[embelIndex].position, width: e.target.value } })}
              inputProps={{
                step: 1,
                min: 0,
                max: 22,
                type: 'number',
                className: 'showspin',
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
              disabled={customize.embellishment[embelIndex].type !== "image"}
              onChange={(e) => customize.onAllEmbelChange(embelIndex, { position: { ...customize.embellishment[embelIndex].position, neck: e.target.value } })}
              inputProps={{
                step: 1,
                min: 0,
                max: 22,
                type: 'number',
                className: 'showspin',
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
              disabled={customize.embellishment[embelIndex].type !== "image"}
              onChange={(e) => customize.onAllEmbelChange(embelIndex, { position: { ...customize.embellishment[embelIndex].position, center: e.target.value } })}
              inputProps={{
                step: 1,
                min: 0,
                max: 22,
                type: 'number',
                className: 'showspin',
                'aria-labelledby': 'input-slider',
              }} />
          </Grid>
        </Grid>
      </Stack>

      <Stack>
        <StyledHeader2>Position</StyledHeader2>
        <PositionControl embelIndex={embelIndex} type="image" />
      </Stack>
    </Stack>
  );

  const renderText = (
    <>
      <Stack gap={2}>
        <FormControlLabel
          sx={{ mb: -2 }}
          control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} color="default" disabled={customize.embellishment[embelIndex].type === "text"} checked={customize.embellishment[embelIndex].type === "text"} onClick={(ev) => checkImage(ev.target.checked, "text")} />}
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
            value={customize.embellishment[embelIndex].textureText}
            placeholder="Write your text"
            disabled={customize.embellishment[embelIndex].type !== "text"}
            onChange={(ev) => changeTextureText(ev.target.value)}
          />
        </Stack>

        <Select fullWidth size="small" value={font} onChange={handleChange} disabled={customize.embellishment[embelIndex].type !== "text"}>
          {fontList.map((font) => (
            <MenuItem value={font.family} >{font.family}</MenuItem>
          ))}
        </Select>
      </Stack>
      <Stack mt={1}>
        <StyledHeader2>Position</StyledHeader2>
        <PositionControl embelIndex={embelIndex} type="text" />
      </Stack>
    </>
  );

  return (
    <>
      <ControlButton
        label={`Embellishment or Text - ${typeIndexToLabel(ptype, embelIndex)}`}
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
            {/* {renderView} */}
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
