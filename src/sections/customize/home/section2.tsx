import { Box, Container, Grid, Typography } from "@mui/material";
import { MotionViewport } from "@/components/animate";
import { secondaryFont } from "@/theme/typography";
import ConfiguratorCard from "@/sections/customize/home/configurator-card";
import Icon1 from "@/components/icons/customize/icon1";

type Props = {};

export default function Section2(props: Props) {
  const renderCircles = (
    <>
      <Box
        component="div"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          bgcolor: "#550248",
          borderRadius: 50,
          transform: "translate(-50%, -50%)",
        }}
      />

      <Box
        component="div"
        sx={{
          position: "absolute",
          top: 50,
          left: 20,
          width: 11,
          height: 11,
          bgcolor: "#F3BC1A",
          borderRadius: 50,
          transform: "translate(-50%, -50%)",
        }}
      />

      <Box
        component="div"
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          width: { md: 90, xs: 40 },
          height: { md: 167, xs: 80 },
          transform: "translateY(-50%)",
        }}
      >
        <Icon1 />
      </Box>
    </>
  );

  return (
    <Box
      component="div"
      sx={{
        bgcolor: "#EDE9DC",
        position: "relative",
      }}
    >
      <Container
        component={MotionViewport}
        sx={{
          textAlign: "center",
          py: { xs: 10, md: 10 },
        }}
      >
        <Typography
          sx={{
            fontSize: { md: 28, xs: 22 },
            fontWeight: 700,
            color: "#292F3D",
          }}
        >
          Create your own style with our 3D Configurator
        </Typography>
        <Typography
          sx={{
            fontSize: { md: 19, xs: 17 },
            fontWeight: 500,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Start by picking the clothing item
        </Typography>

        <Grid container spacing={2} mt={{ md: 8, xs: 4 }}>
          {lists.map((l) => (
            <Grid key={l.id} item md={6} xs={12}>
              <ConfiguratorCard data={l} />
            </Grid>
          ))}
        </Grid>
      </Container>

      {renderCircles}
    </Box>
  );
}

const lists = [
  {
    id: "configuration1",
    name: "Pants",
    description:
      "Explore trendy, comfortable pants for all occasions – from casual to formal – at our online store.",
    image: "images/customize/pants.png",
    startPrice: 29.5,
    attributes: [
      {
        name: "Fit",
        value: `Unisex
                Pre-shrunk (0-3%)`,
      },
      {
        name: "Fabric",
        value: `Composition: 100% organic cotton
                Ring compact spun, long staple
                Weight: 200g/m2
                Type, count: jersey, 24/1`,
      },
      {
        name: "Construction",
        value: `Neck rib: 2cm, neck tape
                Rib: 1x1, 1 cable
                Sleeve & bottom hem: 2.5cm
                Cover stitch: single-needle 5mm (sleeve & bottom hem)
                Thread gauge: 40/2`,
      },
      {
        name: "Finishing",
        value: `Dye technique: garment / reactive dye
                Finishing: anti-pilling / pre-shrinkage`,
      },
      {
        name: "Origin",
        value: `Spinning, Knitting, Dyeing: Portugal`,
      },
    ],
  },
  {
    id: "configuration2",
    name: "Shorts",
    description:
      "Your go-to destination for the latest shorts trends, offering comfort, style, and versatility for all.",
    image: "images/customize/shorts.png",
    startPrice: 24.2,
    attributes: [
      {
        name: "Fit",
        value: `Unisex
                Pre-shrunk (0-3%)`,
      },
      {
        name: "Fabric",
        value: `Composition: 100% organic cotton
                Ring compact spun, long staple
                Weight: 200g/m2
                Type, count: jersey, 24/1`,
      },
      {
        name: "Construction",
        value: `Neck rib: 2cm, neck tape
                Rib: 1x1, 1 cable
                Sleeve & bottom hem: 2.5cm
                Cover stitch: single-needle 5mm (sleeve & bottom hem)
                Thread gauge: 40/2`,
      },
      {
        name: "Finishing",
        value: `Dye technique: garment / reactive dye
                Finishing: anti-pilling / pre-shrinkage`,
      },
      {
        name: "Origin",
        value: `Spinning, Knitting, Dyeing: Portugal`,
      },
    ],
  },
  {
    id: "configuration3",
    name: "T-Shirts",
    description:
      "Shop quality t-shirts in various styles and colors for effortless everyday comfort and style.",
    image: "images/customize/t-shirt.png",
    startPrice: 14.3,
    attributes: [
      {
        name: "Fit",
        value: `Unisex
                Pre-shrunk (0-3%)`,
      },
      {
        name: "Fabric",
        value: `Composition: 100% organic cotton
                Ring compact spun, long staple
                Weight: 200g/m2
                Type, count: jersey, 24/1`,
      },
      {
        name: "Construction",
        value: `Neck rib: 2cm, neck tape
                Rib: 1x1, 1 cable
                Sleeve & bottom hem: 2.5cm
                Cover stitch: single-needle 5mm (sleeve & bottom hem)
                Thread gauge: 40/2`,
      },
      {
        name: "Finishing",
        value: `Dye technique: garment / reactive dye
                Finishing: anti-pilling / pre-shrinkage`,
      },
      {
        name: "Origin",
        value: `Spinning, Knitting, Dyeing: Portugal`,
      },
    ],
  },
  {
    id: "configuration4",
    name: "Sweatshirts",
    description:
      "Browse and buy trendy sweatshirts, perfect for comfort and adding a touch of style.",
    image: "images/customize/sweatshirt.png",
    startPrice: 28.1,
    attributes: [
      {
        name: "Fit",
        value: `Unisex
                Pre-shrunk (0-3%)`,
      },
      {
        name: "Fabric",
        value: `Composition: 100% organic cotton
                Ring compact spun, long staple
                Weight: 200g/m2
                Type, count: jersey, 24/1`,
      },
      {
        name: "Construction",
        value: `Neck rib: 2cm, neck tape
                Rib: 1x1, 1 cable
                Sleeve & bottom hem: 2.5cm
                Cover stitch: single-needle 5mm (sleeve & bottom hem)
                Thread gauge: 40/2`,
      },
      {
        name: "Finishing",
        value: `Dye technique: garment / reactive dye
                Finishing: anti-pilling / pre-shrinkage`,
      },
      {
        name: "Origin",
        value: `Spinning, Knitting, Dyeing: Portugal`,
      },
    ],
  },
  {
    id: "configuration5",
    name: "Hoodies",
    description:
      "Discover cozy hoodies for ultimate comfort and urban style. Your perfect layering essential.",
    image: "images/customize/hoody.png",
    startPrice: 29.3,
    attributes: [
      {
        name: "Fit",
        value: `Unisex
                Pre-shrunk (0-3%)`,
      },
      {
        name: "Fabric",
        value: `Composition: 100% organic cotton
                Ring compact spun, long staple
                Weight: 200g/m2
                Type, count: jersey, 24/1`,
      },
      {
        name: "Construction",
        value: `Neck rib: 2cm, neck tape
                Rib: 1x1, 1 cable
                Sleeve & bottom hem: 2.5cm
                Cover stitch: single-needle 5mm (sleeve & bottom hem)
                Thread gauge: 40/2`,
      },
      {
        name: "Finishing",
        value: `Dye technique: garment / reactive dye
                Finishing: anti-pilling / pre-shrinkage`,
      },
      {
        name: "Origin",
        value: `Spinning, Knitting, Dyeing: Portugal`,
      },
    ],
  },
  {
    id: "configuration6",
    name: "Oversize",
    description:
      "Shop quality Oversize various styles and colors for effortless everyday comport and style.",
    image: "images/customize/t-shirt.png",
    startPrice: 29.3,
    attributes: [
      {
        name: "Fit",
        value: `Unisex
                Pre-shrunk (0-3%)`,
      },
      {
        name: "Fabric",
        value: `Composition: 100% organic cotton
                Ring compact spun, long staple
                Weight: 200g/m2
                Type, count: jersey, 24/1`,
      },
      {
        name: "Construction",
        value: `Neck rib: 2cm, neck tape
                Rib: 1x1, 1 cable
                Sleeve & bottom hem: 2.5cm
                Cover stitch: single-needle 5mm (sleeve & bottom hem)
                Thread gauge: 40/2`,
      },
      {
        name: "Finishing",
        value: `Dye technique: garment / reactive dye
                Finishing: anti-pilling / pre-shrinkage`,
      },
      {
        name: "Origin",
        value: `Spinning, Knitting, Dyeing: Portugal`,
      },
    ],
  },
];
