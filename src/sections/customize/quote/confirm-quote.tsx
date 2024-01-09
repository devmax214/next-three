import React, { useRef, useEffect } from "react";
import useStore, { getState, setState } from '@/helpers/store'
import { Box, FormControlLabel, Button, Switch, Checkbox, Typography, Grid, Stack } from "@mui/material";
import Image from "@/components/image";
import { secondaryFont } from "@/theme/typography";
import { PATH_CONFIGURATOR } from "@/routers/path";
import { useRouter } from "next/router"; "@next/router";
import { CustomizeProvider } from "@/components/customize/context";
import ConfigurationCanvas from "../configurator/configuration-canvas";
import { typeIndexToLabel } from "@/helpers/common";
import CheckedIcon from "@/components/icons/checked-icon";
import UnCheckedIcon from "@/components/icons/unchecked-icon";
import { ICustomizeQuoteItem } from "@/@types/customize";
import {
  StyledSwitchLabel,
  StyledButton,
  cordLabels,
  tipLabels,
  artworks,
  positions,
  sizeLabels,
  GENDERS,
  sizes,
} from "@/constant/embelConst";
import { Texture } from "three";

export default function ConfirmQuote(props: any) {
  const router = useRouter();
  const context = JSON.parse(localStorage.getItem('context') as string) as ICustomizeQuoteItem;
  const dbCtx = context;
  const productType = localStorage.getItem('productType') as string;

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
          Cord: <span style={{ color: "#292F3D", fontWeight: 500 }}>{cordLabels[dbCtx.cord ? dbCtx.cord : "Cord1" as string]}</span>
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
              sx={{ flexGrow: 1, mt: 0, px: 2, py: 0, mr: 2, color: "#292F3D", fontSize: 14, lineHeight: 2, fontWeight: 700 }}>
              Text
              <span
                style={{
                  color: "#292F3D",
                  fontWeight: 500,
                  fontFamily: dbCtx.embellishment[embelIndex].font,
                  fontSize: 14
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
  const canvasRef = useRef<any>(null)
  const textureRef = useRef<Texture>(null)
  setState({ isMaskAdded: false })

  return (
    <CustomizeProvider passInitState={context}>
      <Box component={"div"} sx={{ textAlign: { xs: "center", md: "start" } }}>
        <Grid container spacing={5}>
          <Grid item md={7} xs={12}>
            <Box component={"div"} sx={{ mt: 2, mb: 2 }}>
              <ConfigurationCanvas
                canvasRef={canvasRef}
                textureRef={textureRef}
                page="customize-edit-view"
                ctx={context}
                arrowLeftCount={0}
                arrowRightCount={0}
                id="myCanvas"
                {...props}
                type={productType}
              />
            </Box>

          </Grid>

          <Grid item md={5} xs={12}>
            <Stack gap={6} sx={{ ml: { md: 8, xs: 0 }, mt: 2 }}>
              <Typography
                sx={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#292F3D",
                  fontFamily: secondaryFont.style.fontFamily,
                  textAlign: "start"
                }}
              >
                Please confirm your choice
              </Typography>

              <Typography
                sx={{
                  fontSize: 28,
                  fontWeight: 600,
                  color: "#292F3D",
                  fontFamily: secondaryFont.style.fontFamily,
                  textAlign: "start",
                  lineHeight: '26px',
                  mt: -3
                }}
              >
                {productType}
              </Typography>

              <Grid container>
                <Grid item md={12} xs={12}>
                  {renderMain}
                </Grid>
              </Grid>
              <Grid container>
                <Grid item md={6} xs={6}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      width: "75%", height: 40, ml: 2, bgcolor: "#bfbfbf",
                      "&:hover ": { bgcolor: "#6AB67A" },
                    }}
                    onClick={() => router.push({
                      pathname: PATH_CONFIGURATOR.product.create(productType),
                      query: {
                        isEdit: true,
                        customProduct: JSON.stringify({ context: context })
                      }
                    }, PATH_CONFIGURATOR.product.create(productType))}
                  >
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#fff",
                        fontFamily: secondaryFont.style.fontFamily,
                      }}
                    >
                      EDIT
                    </Typography>
                  </Button>
                </Grid>
                <Grid item md={6} xs={6}>
                  <Button
                    variant="contained"
                    size="large"
                    sx={{
                      width: "75%", height: 40, ml: 2, bgcolor: '#292F3D',
                      "&:hover": { bgcolor: "#6AB67A" },
                    }}
                    onClick={props.onConfirm}
                  >
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 500,
                        color: "#fff",
                        fontFamily: secondaryFont.style.fontFamily,
                      }}
                    >
                      CONFIRM
                    </Typography>
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </CustomizeProvider>
  );
}
