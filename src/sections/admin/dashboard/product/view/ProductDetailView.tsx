import React, { useCallback, useState } from "react";
import EmptyContent from "@/components/empty-content";
import { Box, Button, Card, Grid, Tab, Tabs } from "@mui/material";
import { RouterLink } from "@/routers/components";
import Iconify from "@/components/iconify";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import ProductDetailsToolbar from "../ProductDetailsToolbar";
import ProductDetailsCarousel from "../ProductDetailsCarousel";
import ProductDetailsSummary from "../ProductDetailsSummary";
import { _products, PRODUCT_PUBLISH_OPTIONS } from "@/@mockup/_product";
import { alpha } from "@mui/material/styles";
import ProductDetailsDescription from "../ProductDetailsDescription";
import ProductDetailsReview from "../ProductDetailsReview";

type Props = {
  id: string;
};

export default function ProductDetailView({ id }: Props) {
  const product = _products.filter((product) => product.id === id)[0];

  const [currentTab, setCurrentTab] = useState("reviews");

  const [publish, setPublish] = useState(product.publish);

  // dummy data
  const productError = { message: "Error" };

  const handleChangePublish = useCallback((newValue: string) => {
    setPublish(newValue);
  }, []);

  const handleChangeTab = useCallback(
    (event: React.SyntheticEvent, newValue: string) => {
      setCurrentTab(newValue);
    },
    []
  );

  const renderProduct = (
    <>
      <ProductDetailsToolbar
        backLink={PATH_ADMIN_DASHBOARD.product.root}
        editLink={PATH_ADMIN_DASHBOARD.product.edit(`${product?.id}`)}
        liveLink={PATH_ADMIN_DASHBOARD.product.details(`${product?.id}`)}
        publish={publish || ""}
        onChangePublish={handleChangePublish}
        publishOptions={PRODUCT_PUBLISH_OPTIONS}
      />

      <Grid container spacing={{ xs: 3, md: 5, lg: 8 }}>
        <Grid item xs={12} md={6} lg={7}>
          <ProductDetailsCarousel product={product} />
        </Grid>

        <Grid item xs={12} md={6} lg={5}>
          <ProductDetailsSummary disabledActions product={product} />
        </Grid>
      </Grid>

      <Box sx={{ my: 10 }}></Box>

      <Card>
        <Tabs
          value={currentTab}
          onChange={handleChangeTab}
          sx={{
            px: 3,
            boxShadow: (theme) =>
              `inset 0 -2px 0 0 ${alpha(theme.palette.grey[500], 0.08)}`,
          }}
        >
          {[
            {
              value: "description",
              label: "Description",
            },
            {
              value: "reviews",
              label: `Reviews (${product.reviews.length})`,
            },
          ].map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>

        {currentTab === "description" && (
          <ProductDetailsDescription description={product?.description} />
        )}

        {currentTab === "reviews" && (
          <ProductDetailsReview
            ratings={product.ratings}
            reviews={product.reviews}
            totalRatings={product.totalRatings}
            totalReviews={product.totalReviews}
          />
        )}
      </Card>
    </>
  );

  const renderError = (
    <EmptyContent
      filled
      title={`${productError?.message}`}
      action={
        <Button
          component={RouterLink}
          href={PATH_ADMIN_DASHBOARD.product.root}
          startIcon={<Iconify icon="eva:arrow-ios-back-fill" width={16} />}
          sx={{ mt: 3 }}
        >
          Back to List
        </Button>
      }
      sx={{ py: 10 }}
    />
  );

  return <>{renderProduct}</>;
}
