import {
  Box,
  ButtonBase,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { m } from "framer-motion";
import { MotionViewport, varFade } from "@/components/animate";
import Image from "@/components/image";
import { _selections } from "@/@mockup/_product";
import { PATH_SHOP } from "@/routers/path";
import SvgColor from "@/components/svg-color";

type Props = {};

export default function Section3(props: Props) {
  return (
    <>
      <Container
        component={MotionViewport}
        sx={{
          textAlign: "center",
          py: { xs: 10, md: 10 },
        }}
      >
        <m.div variants={varFade().inUp}>
          <Typography
            sx={{
              fontSize: { xs: 36, md: 48 },
              fontWeight: 700,
              color: "#292F3D",
              mt: 2.5,
              mb: 10,
            }}
          >
            THE SELECTION
          </Typography>
        </m.div>

        <Grid container spacing={0.5}>
          {_selections.map((selection) => (
            <SelectionCard key={selection.id} item={selection} />
          ))}
        </Grid>
      </Container>
    </>
  );
}

function SelectionCard({
  item,
}: {
  item: { id: string; name: string; coverUrl: string; color: string };
}) {
  const { name, coverUrl, color } = item;

  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        position: "relative",
        "&:hover .cover-image": { transform: "scale(1.2)" },
        "&:hover .open-search-button": { gap: 2.5 },
      }}
    >
      <Box sx={{ overflow: "hidden" }}>
        <Image
          className="cover-image"
          alt={name}
          src={coverUrl}
          ratio="1/1"
          sx={{
            transform: "scale(1)",
            transition: (theme) =>
              theme.transitions.create("all", {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.standard,
              }),
          }}
        />
      </Box>

      <ButtonBase
        href={PATH_SHOP.product.search}
        sx={{
          position: "absolute",
          left: "20px",
          bottom: "15px",
        }}
      >
        <Stack
          className="open-search-button"
          direction="row"
          gap={1}
          alignItems="center"
          sx={{
            transition: (theme) =>
              theme.transitions.create("all", {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.standard,
              }),
          }}
        >
          <Typography sx={{ fontSize: 28, fontWeight: 700 }} color={color}>
            {name}
          </Typography>

          <SvgColor
            src="/icons/arrow-right.svg"
            color={color}
            sx={{ width: 35, height: 35 }}
          />
        </Stack>
      </ButtonBase>
    </Grid>
  );
}
