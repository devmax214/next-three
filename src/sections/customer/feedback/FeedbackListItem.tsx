import { Box, Button, Rating, Stack, Typography } from "@mui/material";
import { secondaryFont } from "@/theme/typography";
import Image from "@/components/image";
import { PATH_SHOP } from "@/routers/path";
import { RouterLink } from "@/routers/components";

type Props = {
  hasReview?: boolean;
};

export function FeedbackListItem({ hasReview }: Props) {
  const renderProduct = (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="start"
      justifyContent="space-between"
    >
      <Stack direction="row" gap={2}>
        <Box
          sx={{
            width: 100,
            height: 100,
            borderRadius: "10px",
            background:
              "linear-gradient(180deg, rgb(211 211 223) 0%, rgba(247,254,255,1) 100%)",
          }}
        >
          <Image src="/images/product/product_1.png" ratio="1/1" />
        </Box>

        <Typography
          sx={{
            fontSize: { xs: 15, md: 16 },
            fontWeight: 600,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          Women's Light Organic Tee T-Shirt
          <br />
          24 €
        </Typography>
      </Stack>

      {!hasReview && (
        <Button
          component={RouterLink}
          variant="contained"
          href={PATH_SHOP.customer.feedback.rating("1111")}
          sx={{
            width: 168,
            bgcolor: "#292F3D",
            "&:hover": { bgcolor: "#550248" },
            padding: "8px 16px"
          }}
        >
          <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              fontFamily: secondaryFont.style.fontFamily,
              color: "#fff",
              padding: "1px 0px 1px 0px"
            }}
          >
            Give your review
          </Typography>
        </Button>
      )}
    </Stack>
  );

  const renderReview = (
    <Stack
      direction={{ xs: "column", md: "row" }}
      alignItems="start"
      justifyContent="space-between"
    >
      <Stack gap={1} sx={{ width: { xs: "100", md: "75%" } }}>
        <Stack direction="row" gap={5}>
          <Typography
            sx={{
              fontSize: 16,
              fontWeight: 500,
              fontFamily: secondaryFont.style.fontFamily,
              color: "#292F3D",
            }}
          >
            António Pereira
          </Typography>

          <Rating size="small" value={3} readOnly />
        </Stack>

        <Typography
          sx={{
            fontSize: 14,
            fontWeight: 500,
            fontFamily: secondaryFont.style.fontFamily,
            color: "#5C6166",
          }}
        >
          Comfortable, stylish, and great fit! Love the design. Highly
          recommended for casual wear. Will buy more! 5/5 stars.
        </Typography>

        <Typography
          sx={{
            fontSize: 12,
            fontWeight: 500,
            fontFamily: secondaryFont.style.fontFamily,
            color: "#292F3D",
          }}
        >
          23th July 2023
        </Typography>
      </Stack>

      <Button
        variant="contained"
        sx={{
          width: 168,
          bgcolor: "#ACB1B8",
          "&:hover": { bgcolor: "#550248" },
          padding: "8px 16px"
        }}
      >
        <Typography
            sx={{
              fontSize: 14,
              fontWeight: 500,
              fontFamily: secondaryFont.style.fontFamily,
              color: "#fff",
              padding: "1px 0px 1px 0px"
            }}
          >
            Delete review
          </Typography>
      </Button>
    </Stack>
  );

  return (
    <Stack sx={{ borderBottom: "1px solid #ACB1B8", paddingLeft: '8px' }} py={2} gap={2}>
      {renderProduct}

      {hasReview && renderReview}
    </Stack>
  );
}
