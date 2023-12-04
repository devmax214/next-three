import { useState } from "react";
import CustomPopover, { usePopover } from "@/components/custom-popover";
import { ControlDropButton } from "@/sections/customize/configurator/control-button";
import { Box, Button, Grid, Stack, Typography, Input, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import Wheel from '@uiw/react-color-wheel';
import ShadeSlider from '@uiw/react-color-shade-slider';
import { hsvaToHex, hsvaToRgba, ColorResult } from '@uiw/color-convert';
import { useCustomizeContext } from "@/components/customize/context";
import { secondaryFont } from "@/theme/typography";

type Props = {};

export const StyledLabel = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  color: "#5C6166",
  fontFamily: secondaryFont.style.fontFamily,
  marginBottom: "10px",
}));

export default function SelectColorButton(props: Props) {

  const customize = useCustomizeContext();
  const popover = usePopover();

  const clickConfirm = () => {
    popover.onClose();
  };

  const [hsva, setHsva] = useState({ h: 0, s: 0, v: 95, a: 1 });

  const changeColor = (color: ColorResult) => {
    setHsva({
      ...hsva,
      ...color.hsva
    })
    customize.onColorChange(hsvaToHex(color.hsva))
  }

  return (
    <>
      <ControlDropButton
        label={!props.name ? "Garment Dye" : props.name}
        isShowIcon={props.isShowIcon == undefined ? true : props.isShowIcon}
        isOpen={Boolean(popover.open)}
        onClick={popover.onOpen}
        box={<Box component={"div"} sx={{ width: 20, height: 20, mr: 1, backgroundColor: `${hsvaToHex(hsva)}`, borderRadius: 1 }} />}
      />

      <CustomPopover
        open={popover.open}
        hiddenArrow
        onClose={popover.onClose}
        sx={{ p: 2, width: 400 }}
      >
        {/* <Stack gap={1}> */}
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Stack alignItems="center">
              <Wheel color={hsva} width={180} height={180} onChange={changeColor} />
              <ShadeSlider
                hsva={hsva}
                width={180}
                style={{ marginTop: 3 }}
                bgProps={{ style: { borderRadius: 5 } }}
                onChange={(newShade) => {
                  setHsva({ ...hsva, ...newShade });
                  customize.onColorChange(hsvaToHex({ ...hsva, ...newShade }))
                }}
              />
              <Button
                sx={{
                  mt: 2,
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
          </Grid>

          <Grid item md={6} sx={{ mt: 3 }}>
            <Stack direction={"row"} alignItems={"center"} spacing={0.6}>
              <Box component={"div"} sx={{ width: 20, height: 20, borderRadius: 1, mb: 1.3, mr: 1, backgroundColor: `${hsvaToHex(hsva)}` }} />
              <StyledLabel>{`R: ${hsvaToRgba(hsva).r}`}</StyledLabel>
              <StyledLabel>{`G: ${hsvaToRgba(hsva).g}`}</StyledLabel>
              <StyledLabel>{`B: ${hsvaToRgba(hsva).b}`}</StyledLabel>
            </Stack>
            <StyledLabel sx={{ ml: 4, mt: -1 }}>{`${hsvaToHex(hsva)}`}</StyledLabel>
            <Typography
              sx={{
                fontSize: 12,
                fontWeight: 500,
                color: "#5C6166",
                fontFamily: secondaryFont.style.fontFamily,
              }}
            >
              Insert Pantone Reference
            </Typography>
            <TextField defaultValue={"11-0601 TCX"} disabled variant="outlined" size="small" inputProps={{ style: { backgroundColor: "#f8f8f8" } }} />
          </Grid>
        </Grid>
        {/* </Stack> */}
      </CustomPopover>
    </>
  );
}
