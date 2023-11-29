import React from "react";
import { Box, Container } from "@mui/material";
import CustomBreadCrumbs from "@/components/custom-breadcrumbs"; // import Icon3 from "@/components/icons/home/icon3";
import ProductDetails from "../product-details";
import RelationProducts from "../relation-products";
import { PATH_SHOP } from "@/routers/path";
import { ICategoryItem, IProductItem } from "@/@types/product";

type Props = {
  relationProducts: IProductItem[];
  currentProduct: IProductItem;
};

export default function ProductDetailsView({
  currentProduct,
  relationProducts,
}: Props) {
  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: "#fff",
          position: "relative",
        }}
      >
        <Container
          sx={{
            py: { xs: 10, md: 10 },
          }}
        >
          <CustomBreadCrumbs
            mode="dark"
            links={[
              {
                name: "Home",
                href: PATH_SHOP.home,
              },
              {
                name: currentProduct.gender[0] || "undefined",
                href: PATH_SHOP.product.search,
              },
              {
                name:
                  (currentProduct.category as ICategoryItem)?.name ||
                  "undefined",
                href: PATH_SHOP.product.search,
              },
              { name: currentProduct.name },
            ]}
            sx={{
              mb: { xs: 3, md: 5 },
            }}
          />
          <ProductDetails product={currentProduct} />
        </Container>

        {/*<Box*/}
        {/*  component="div"*/}
        {/*  sx={{*/}
        {/*    position: "absolute",*/}
        {/*    width: 80,*/}
        {/*    height: 167,*/}
        {/*    left: 0,*/}
        {/*    bottom: 0,*/}
        {/*    transform: "translateY(50%)",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Icon1 />*/}
        {/*</Box>*/}

        {/*<Box*/}
        {/*  component="div"*/}
        {/*  sx={{*/}
        {/*    position: "absolute",*/}
        {/*    width: 94,*/}
        {/*    height: 152,*/}
        {/*    right: 0,*/}
        {/*    bottom: 0,*/}
        {/*    transform: "translateY(50%)",*/}
        {/*  }}*/}
        {/*>*/}
        {/*  <Icon3 />*/}
        {/*</Box>*/}
      </Box>

      <RelationProducts products={relationProducts} />
    </>
  );
}
