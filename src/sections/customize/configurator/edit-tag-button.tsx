import { useContext, useState, useEffect, MouseEvent } from "react";
import CustomPopover, { usePopover } from "@/components/custom-popover";
import ControlButton from "@/sections/customize/configurator/control-button";
import { styled } from "@mui/material/styles";
import { Box, Button, Stack, Typography, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { secondaryFont } from "@/theme/typography";
import Option1Icon from "@/components/icons/customize/stitch/option1";
import Option2Icon from "@/components/icons/customize/stitch/option2";
import Option3Icon from "@/components/icons/customize/stitch/option3";
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

type Props = {
  type: string;
};

const sizes = [
  { width: 45, height: 45 },
  { width: 55, height: 30 },
];

const printSizes = [
  { width: 45, height: 50 }
]

const positions = [
  { label: "Below neck tape (5mm)" },
  { label: "On neck tape" },
];

const stitchs = [
  { label: "2-corner", icon: <Option1Icon /> },
  { label: "4-corner", icon: <Option2Icon /> },
  { label: "2 side", icon: <Option3Icon /> },
];

export default function EditTagButton(props: Props) {
  const context = useContext(CustomizeContext);
  const [selectedTagSize, setSelectedTagSize] = useState(0);
  const [labelSize, setLabelSize] = useState(sizes);

  useEffect(() => {
    if (context.tag.neck) setLabelSize(sizes);
    else setLabelSize(printSizes);
  }, [context.tag.neck]);
  const popover = usePopover();

  const clickConfirm = () => {
    popover.onClose();
  };

  const onOpen = (ev: MouseEvent<HTMLElement>) => {
    popover.onOpen(ev);
    context.onTagEditVisible();
  }

  const onClose = () => {
    popover.onClose();
    context.onTagEditVisible();
  }

  const onEditCheck = (ev: boolean) => {
    if (ev !== context.tag.edit) {
      context.onTagEditChange();
      if (context.tag.edit) setSelectedTagSize(10);
      else setSelectedTagSize(0);
    }
  }

  const onNeckCheck = (ev: boolean) => {
    if (ev !== context.tag.neck) {
      context.onTagNeckChange();
      setSelectedTagSize(0);
    }
  }

  const onColorCheck = (ev: boolean) => {
    if (ev !== context.tag.color)
      context.onTagColorChange();
  }

  const onTagSizeChange = (idx: number) => {
    if (context.tag.edit) {
      setSelectedTagSize(idx);
      context.onTagSizeChange(`${sizes[idx].width}x${sizes[idx].height}`)
    }
  }

  const fileSelect = (ev: any) => {
    if (ev.target.files && ev.target.files.length > 0) {
      var userImage = ev.target.files[0];
      var userImageURL = URL.createObjectURL(userImage);
      console.log('userImageURL', userImageURL);
      context.onTagSelectFile(userImageURL);
    }
  }

  const renderLabel = (
    <Stack>
      <Stack sx={{ mb: 1, mt: 1 }} direction="row" alignItems="center">
        <Typography
          sx={{
            width: 1,
            fontSize: 16,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Edit Labels
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ mx: 1 }} gap={1}>
        <FormGroup>
          <FormControlLabel
            sx={{ mt: -1 }}
            control={<Checkbox color="default" checked={!context.tag.edit} onClick={() => onEditCheck(false)} />}
            label={
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#5C6166",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                I have my own labels
              </Typography>
            } />
          <FormControlLabel
            sx={{ mt: -2 }}
            control={<Checkbox color="default" checked={context.tag.edit} onClick={() => onEditCheck(true)} />}
            label={
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#5C6166",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                I don't have my own labels. I want to customize.
              </Typography>
            } />
        </FormGroup>
      </Stack>

      <Stack sx={{ mb: 1, mt: 2 }} direction="row" alignItems="center">
        <Typography
          sx={{
            width: 1,
            fontSize: 16,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Neck label
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ mx: 1 }} gap={1}>
        <FormGroup>
          {props.type === 'oversize' || props.type === 'tshirts' || props.type === 'sweatshirts' ?
            <FormControlLabel
              sx={{ mt: -1 }}
              control={<Checkbox color="default" checked={!context.tag.neck} onClick={() => onNeckCheck(false)} disabled={!context.tag.edit} />}
              label={
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 500,
                    color: "#5C6166",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  Printed Neck label
                </Typography>
              } /> : <></>}
          <FormControlLabel
            sx={{ mt: -2 }}
            control={<Checkbox color="default" checked={context.tag.neck} onClick={() => onNeckCheck(true)} disabled={!context.tag.edit} />}
            label={
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#5C6166",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                Woven Neck Label
              </Typography>
            } />
          <Typography
            sx={{
              mx: 4,
              mt: -1,
              fontSize: 10,
              fontWeight: 400,
              color: "#5C6166",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            Note: Woven Neck label includes an additional care tag
          </Typography>
        </FormGroup>
      </Stack>

      <Stack sx={{ mb: 1, mt: 2 }} direction="row" alignItems="center">
        <Typography
          sx={{
            width: 1,
            fontSize: 16,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Label color
        </Typography>
      </Stack>
      <Stack direction="row" sx={{ mx: 1 }} gap={1}>
        <FormGroup>
          <FormControlLabel
            sx={{ mt: -1 }}
            control={<Checkbox color="default" checked={!context.tag.color} onClick={() => onColorCheck(false)} disabled={!context.tag.edit} />}
            label={
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#5C6166",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                White with black lettering
              </Typography>
            } />
          <FormControlLabel
            sx={{ mt: -2 }}
            control={<Checkbox color="default" checked={context.tag.color} onClick={() => onColorCheck(true)} disabled={!context.tag.edit} />}
            label={
              <Typography
                sx={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "#5C6166",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                Black with white lettering
              </Typography>
            } />
        </FormGroup>
      </Stack>

      <Stack sx={{ mb: 1 }} direction="row" alignItems="center">
        <Typography
          sx={{
            width: 1,
            fontSize: 16,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Size
        </Typography>
      </Stack>
      <Stack direction="row" gap={1}>
        <Stack direction="row" gap={2}>
          {labelSize.map((size, index) => (
            <Stack
              key={index}
              gap={0.5}
              sx={{
                width: 80,
                alignItems: "center",
                p: 1,
                border: selectedTagSize === index ? "1px solid red" : "",
                borderRadius: 3
              }}
              onClick={() => onTagSizeChange(index)}
            >
              <Box
                component="div"
                sx={{ minHeight: 45, display: "flex", alignItems: "center" }}
              >
                <Box
                  component="div"
                  sx={{
                    width: size.width,
                    height: size.height,
                    border: "1px dashed #292F3D",
                  }}
                />
              </Box>

              <Typography
                sx={{ fontSize: 10, fontFamily: secondaryFont.style.fontFamily }}
              >
                {size.width} x {size.height} mm
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );

  const renderArtwork = (
    <Stack>
      <StyledHeader1>Artwork</StyledHeader1>

      <StyledHeader2>File</StyledHeader2>
      <input type="file" onChange={fileSelect} />
    </Stack>
  );

  const renderAttachment = (
    <Stack>
      <StyledHeader1>Attachment</StyledHeader1>

      <Stack gap={1}>
        <Stack>
          <StyledHeader2>Position</StyledHeader2>
          <Stack direction="row" gap={2}>
            {positions.map((position, index) => (
              <Stack
                key={index}
                gap={0.5}
                sx={{
                  width: 144,
                  textAlign: "center",
                  alignItems: "center",
                  p: 1,
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: 97,
                    height: 28,
                    border: "1px dashed #292F3D",
                  }}
                />

                <Typography
                  sx={{
                    fontSize: 10,
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  {position.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>

        <Stack>
          <StyledHeader2>Stitch</StyledHeader2>
          <Stack direction="row" gap={1}>
            {stitchs.map((stitch, index) => (
              <Stack
                key={index}
                gap={0.5}
                sx={{
                  width: 100,
                  textAlign: "center",
                  p: 1,
                  alignItems: "center",
                }}
              >
                <Box
                  component="div"
                  sx={{
                    width: 76,
                  }}
                >
                  {stitch.icon}
                </Box>

                <Typography
                  sx={{
                    fontSize: 10,
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  {stitch.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );

  return (
    <>
      <ControlButton
        label="Edit tag"
        isOpen={Boolean(popover.open)}
        onClick={onOpen}
      />

      <CustomPopover
        open={popover.open}
        hiddenArrow
        onClose={onClose}
        sx={{ p: 2, width: 400, height: 600, overflowY: 'scroll' }}
      >
        <Stack gap={1}>
          {renderLabel}

          {renderArtwork}

          {/* {renderAttachment} */}

          <Stack alignItems="center">
            <Button
              sx={{
                mt: 5,
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
        </Stack>
      </CustomPopover>
    </>
  );
}
