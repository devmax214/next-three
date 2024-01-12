import { secondaryFont } from "@/theme/typography";
import {
  LeftPosition,
  RightPosition,
  TopCenterPosition,
  TopPosition,
  CenterPosition,
  BottomPosition
} from "@/components/icons/customize/position/position";
import Image from "@/components/image";
import { styled } from "@mui/material/styles";
import { typeIndexToLabel } from "@/helpers/common";
import {
  Box,
  Grid,
  Switch,
  Stack,
  Table,
  TableBody,
  TableContainer,
  TableCell,
  TableRow,
  TableHead,
  Typography,
  Checkbox,
  ButtonBase,
  FormControlLabel,
} from "@mui/material";

import CheckedIcon from "@/components/icons/checked-icon";
import UnCheckedIcon from "@/components/icons/unchecked-icon";

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

export const cordLabels: any = {
  "Cord1": "Cord 01",
  "Cord2": "Cord 02",
  "Cord3": "Cord 03",
  "Cord4": "Cord 04",
}

export const tipLabels: any = {
  "mental_end": "Tip 01",
  "plastic_end": "Tip 01",
  "silicone_end": "Tip 01",
}

export const artworks: any = [
  "Digital Print",
  "Screen Print",
  "Embroidery",
];


export const positions: any = [
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
    icon: <CenterPosition />,
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

export const sizeLabels: any = [
  "Size label sewn on the side the brand label",
  "Brand label on the garment seam, 10cm from the bottom",
  "Decide later, in a back office conversation",
];

export const GENDERS: any = [
  { value: "man", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

export const sizes: any = ["XS", "S", "M", "L", "XL"];


export const prices: any = [
  { items: 50, price: 12.5 },
  { items: 100, price: 14.5 },
  { items: 150, price: 16.5 },
  { items: 300, price: 19.5 },
];

export const embelRenders = (productType: string, dbCtx: any) => {
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
            {prices.map((price: any, index: number) => (
              <TableRow key={index} >
                <TableCell sx={{ py: 1, fontSize: 16, lineHeight: '20px' }}>{price.items} items</TableCell>
                <TableCell sx={{ py: 1, fontSize: 16, lineHeight: '20px' }}>{price.price} {JSON.parse(localStorage.getItem('currency') as string).value}</TableCell>
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
        {`Embellishment or Text - ${typeIndexToLabel(productType, embelIndex)}`}: &nbsp;&nbsp;&nbsp;&nbsp;
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
                display: "flex",
                justifyContent: "flex-start",
                alignContent: "center",
                mt: 2,
                px: 2,
                py: 0,
                mr: 2,
                color: "#292F3D",
                fontSize: 14,
                lineHeight: 2,
                fontWeight: 700,
              }}
            >
              Text
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
                  <Box
                    sx={{
                      mr: "5px", ml: "15px",
                      color: dbCtx.embellishment[embelIndex].textureTextColor, fontWeight: 500, fontFamily: dbCtx.embellishment[embelIndex].font,
                    }}>
                    {dbCtx.embellishment[embelIndex].textureText}
                  </Box>
                  <Box sx={{ ml: "0px" }}>
                    {dbCtx.embellishment[embelIndex].textureTextColor}
                  </Box>
                </Box>
                {dbCtx.pantone != "11-0601 TCX" &&
                  <Typography>
                    <Box sx={{
                      marginLeft: "15px",
                      color: "#292F3D",
                      fontWeight: 700,
                    }}>
                      Pantone Reference:
                      <span style={{ marginLeft: "15px", fontWeight: 500 }}>{dbCtx.embellishment[embelIndex].textureTextPantone}</span>
                    </Box>
                  </Typography>
                }
              </Box>
            </Box >
          )}
      </Typography >
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
      {
        dbCtx.embellishment[embelIndex].type === "text"
          && dbCtx.embellishment[embelIndex].position.type.content == -1
          && dbCtx.embellishment[embelIndex].position.type.item == -1 ? null :
          dbCtx.embellishment[embelIndex].type === "image"
            && !dbCtx.embellishment[embelIndex].file
            && dbCtx.embellishment[embelIndex].position.type.content == -1
            && dbCtx.embellishment[embelIndex].position.type.item == -1 ? null :
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
      }
      {
        dbCtx.embellishment[embelIndex].type === "image" && dbCtx.embellishment[embelIndex].file &&
        <Typography
          sx={{
            flexGrow: 1,
            mt: 0,
            py: 0,
            px: 2,
            mr: 2,
            mb: (dbCtx.embellishment[embelIndex].position.type.content == -1 && dbCtx.embellishment[embelIndex].position.type.item == -1 ? 2 : 0),
            color: "#5C6166",
            fontSize: 12,
            lineHeight: 2,
            fontWeight: 600,
          }}>
          Artwork With: {dbCtx.embellishment[embelIndex].position.width}cm &nbsp;
          Artwork Height: {dbCtx.embellishment[embelIndex].position.neck}cm &nbsp;
        </Typography>
      }
      {
        ((dbCtx.embellishment[embelIndex].type === "image" && dbCtx.embellishment[embelIndex].file) &&
          (dbCtx.embellishment[embelIndex].position.type.content != -1 || dbCtx.embellishment[embelIndex].position.type.item != -1)) ||
        ((dbCtx.embellishment[embelIndex].type === "text" && dbCtx.embellishment[embelIndex].textureText) &&
          (dbCtx.embellishment[embelIndex].position.type.content != -1 || dbCtx.embellishment[embelIndex].position.type.item != -1)) &&

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
          {
            positions[dbCtx.embellishment[embelIndex].position.type.content] &&
            <StyledButton sx={{
              border: "2px solid #f38565",
              mr: "10px",
              width: "40px",
              height: "40px",
              borderRadius: 1,
              "svg": {
                "path": {
                  stroke: "#5C6166",
                },
                "rect": {
                  fill: "#5C6166"
                },
              }
            }}>{positions[dbCtx.embellishment[embelIndex].position.type.content].icon}</StyledButton>
          }
          {
            positions[dbCtx.embellishment[embelIndex].position.type.item] &&
            <StyledButton sx={{
              border: "2px solid #f38565",
              width: "40px",
              height: "40px",
              borderRadius: 1,
              "svg": {
                "path": {
                  stroke: "#5C6166",
                },
                "rect": {
                  fill: "#5C6166"
                },
              }
            }}>{positions[dbCtx.embellishment[embelIndex].position.type.item].icon}</StyledButton>
          }
        </Typography >
      }
    </Stack >
  )))


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

  const renderMain = (
    <Box component={"div"}>
      {/* <Stack sx={{ borderBottom: "1px solid lightgrey" }}>
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
      </Stack> */}
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
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start' }}>
              <Box
                sx={{
                  backgroundColor: dbCtx.color,
                  borderRadius: "3px",
                  width: "20px",
                  maxHeight: "20px",
                }}
              />
              <Box sx={{ ml: "5px" }}>
                {dbCtx.color}
              </Box>
            </Box>

            {dbCtx.pantone != "11-0601 TCX" &&
              <Box>
                <Box sx={{
                  color: "#292F3D",
                  fontWeight: 700,
                }}>
                  Pantone Reference:
                  <span style={{ marginLeft: "15px", fontWeight: 500 }}>{dbCtx.pantone}</span>
                </Box>
              </Box>
            }
          </Box>
        </Box>
      </Stack >
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
                {isPrintLabel ? "Printed Neck label" : "Woven Neck label"};
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
                {dbCtx.tag.color ? "Black" : "White"}
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
    </Box >
  )

  return {
    renderPrices,
    renderLace,
    renderEmbels,
    renderPeriod,
    renderMain,
  }
};
