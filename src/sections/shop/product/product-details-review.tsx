import React from "react";
import { IProductReview } from "@/@types/product";
import { Rating, Stack, Typography } from "@mui/material";
import { fDate } from "@/utils/formatTime";
import Scrollbar from "@/components/scrollbar";
import { styled } from "@mui/material/styles";
import { secondaryFont } from "@/theme/typography";

const StyledTypography1 = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  [theme.breakpoints.down("md")]: { fontSize: "15px" },
}));

const StyledTypography2 = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: "#5C6166",
  fontFamily: secondaryFont.style.fontFamily,
  [theme.breakpoints.down("md")]: { fontSize: "13px" },
}));

type Props = { reviews: IProductReview[] };

export default function ProductDetailsReview({ reviews }: Props) {
  return (
    <Scrollbar sx={{ height: "250px" }}>
      {reviews.map((review) => (
        <ProductReviewItem key={review.id} review={review} />
      ))}
    </Scrollbar>
  );
}

function ProductReviewItem({ review }: { review: IProductReview }) {
  const { name, rating, comment, postedAt } = review;

  const renderInfo = (
    <Stack direction="row" spacing={2} alignItems="center">
      <StyledTypography1>{name}</StyledTypography1>

      <Rating size="small" value={rating} precision={0.1} readOnly />
    </Stack>
  );

  const renderContent = <StyledTypography2>{comment}</StyledTypography2>;

  const renderDate = (
    <Typography variant="subtitle2" textAlign="right">
      {fDate(postedAt)}
    </Typography>
  );

  return (
    <Stack gap={1} sx={{ py: 2 }}>
      {renderInfo}

      {renderContent}

      {renderDate}
    </Stack>
  );
}
