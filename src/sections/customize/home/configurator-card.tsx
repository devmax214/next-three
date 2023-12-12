import { Box, Button, Grid, Typography } from "@mui/material";
import PropertyItem from "@/sections/customize/home/property-item";
import { secondaryFont } from "@/theme/typography";
import Image from "@/components/image";
import { IConfigurationCategory } from "@/@types/configuration";
import { PATH_CONFIGURATOR } from "@/routers/path";
import { useResponsive } from "@/hooks";
import { useBoolean } from "@/hooks";
import TouchRipple from "@mui/material/ButtonBase";
import SvgColor from "@/components/svg-color";

type Props = {
  data: IConfigurationCategory;
};

export default function ConfiguratorCard({ data }: Props) {
  const upMd = useResponsive("up", "md");

  const showMore = useBoolean(upMd);

  const { name, description, image, startPrice, attributes } = data;

  const linkTo = PATH_CONFIGURATOR.product.edit(name);

  return (
    <Box
      component="div"
      sx={{
        boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.18)",
        bgcolor: "#ffffff",
        borderRadius: "14px",
        textAlign: "left",
      }}
      p={3}
    >
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <Box component="div">
            <Grid container spacing={1}>
              <Grid
                component="div"
                sx={{
                  bgcolor: "#F9F5EE",
                  border: "1px solid #EDE9DC",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: 2,
                }}
                item
                md={12}
                xs={6}
              >
                <Image src={image} ratio="1/1" />
              </Grid>

              <Grid item sx={{ width: 1 }} md={12} xs={6}>
                {!upMd && (
                  <Typography
                    sx={{
                      fontSize: 19,
                      fontWeight: 600,
                      color: "#292F3D",
                      fontFamily: secondaryFont.style.fontFamily,
                    }}
                  >
                    {name}
                  </Typography>
                )}

                <Box
                  component="div"
                  sx={{
                    textAlign: { md: "center", xs: "left" },
                    my: { md: 3, xs: 1 },
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: 11,
                      fontWeight: 500,
                      color: "#5C6166",
                      fontFamily: secondaryFont.style.fontFamily,
                    }}
                  >
                    PRICE PER ITEM
                  </Typography>

                  <Typography
                    sx={{
                      fontSize: { md: 14, xs: 13 },
                      fontWeight: 500,
                      color: "#292F3D",
                      fontFamily: secondaryFont.style.fontFamily,
                    }}
                  >
                    from{" "}
                    <Typography
                      component="span"
                      sx={{
                        fontSize: { md: 19, xs: 17 },
                        fontWeight: 600,
                        color: "#292F3D",
                      }}
                    >
                      {startPrice} €
                    </Typography>
                  </Typography>

                  <Button
                    fullWidth
                    variant="contained"
                    href={linkTo}
                    sx={{
                      width: 130,
                      height: 40,
                      top: 30,
                      "&:hover": { bgcolor: "#6AB67A" },
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: 14,
                        fontWeight: 500,
                        lineHeight: '18.9px',
                        color: "#ffffff",
                        fontFamily: secondaryFont.style.fontFamily,
                      }}
                    >
                      SELECT
                    </Typography>
                  </Button>
                </Box>


              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid item md={8} xs={12}>
          {!upMd && !showMore.value && (
            <TouchRipple onClick={showMore.onTrue}>
              <Typography sx={{ fontSize: 13, fontWeight: 500, mr: 1 }}>
                See more
              </Typography>

              <SvgColor
                src="/icons/arrow-right.svg"
                sx={{ width: 20, height: 18 }}
              />
            </TouchRipple>
          )}

          {showMore.value && (
            <>
              <Typography
                sx={{
                  fontSize: 19,
                  fontWeight: 600,
                  color: "#292F3D",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                {name}
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                  fontWeight: 500,
                  color: "#292F3D",
                  fontFamily: secondaryFont.style.fontFamily,
                }}
              >
                {description}
              </Typography>

              <Box component="div" sx={{ width: 1 }}>
                {/*<PropertyItem />*/}
                {attributes.map((attribute, index) => (
                  <PropertyItem
                    key={index}
                    title={attribute.name}
                    value={attribute.value}
                  />
                ))}
              </Box>
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  );
}
