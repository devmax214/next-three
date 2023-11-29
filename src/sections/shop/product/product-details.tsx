import React from "react";
import { Grid } from "@mui/material";
import ProductDetailsCarousel from "./product-details-carousel";
import ProductDetailsSummary from "./product-details-summary";
import { IProductItem } from "@/@types/product";

type Props = { product: IProductItem };

export default function ProductDetails({ product }: Props) {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <ProductDetailsCarousel product={product} />
      </Grid>

      <Grid item xs={12} md={6}>
        <ProductDetailsSummary product={product} />
      </Grid>
    </Grid>
  );
}
