import { Box, Button, Stack, Typography } from "@mui/material";
import { _categories } from "@/@mockup/_product";
import { PATH_SHOP } from "@/routers/path";
import { secondaryFont } from "@/theme/typography";

type Props = {};

export default function Section1(props: Props) {
  return (
    <>
      <Stack direction={{ xs: "column", md: "row" }}>
        {_categories.map((category) => (
          <CategoryCard key={category.id} item={category} />
        ))}
      </Stack>
    </>
  );
}

function CategoryCard({
  item,
}: {
  item: {
    name: string;
    coverUrl: string;
  };
}) {
  const { name, coverUrl } = item;
  return (
    <Stack
      sx={{
        width: "100%",
        height: "100vh",
        position: "relative",
        backgroundImage: `url(${coverUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        overflow: "hidden",
        "&:hover": {
          width: "150%",
          transition: (theme) =>
            theme.transitions.create("all", {
              easing: theme.transitions.easing.easeInOut,
              duration: theme.transitions.duration.complex,
            }),
          "& .here-title": {
            fontSize: 55,
          },
        },
      }}
    >
      {/*<Box>*/}
      {/*  <Image alt={name} src={coverUrl} ratio="1/1" />*/}
      {/*</Box>*/}

      <Box
        component="div"
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Stack alignItems="center" gap={4}>
          <Typography
            className="here-title"
            sx={{
              fontSize: { xs: 36, md: 48 },
              fontWeight: 700,
              textAlign: "center",
            }}
            color="#ffffff"
          >
            {name}'S CLOTHES
          </Typography>

          <Button
            href={PATH_SHOP.product.search}
            variant="contained"
            size="large"
            sx={{
              minWidth: "200px",
              fontSize: { xs: 17, md: 19 },
              fontWeight: 500,
              fontFamily: secondaryFont.style.fontFamily,
              "&:hover": { bgcolor: "#E6E6E6", color: "#000" },
            }}
          >
            FOR {name}
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
}
