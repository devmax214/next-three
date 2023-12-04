import React from "react";
import {Box, Button, Divider, Stack, Typography} from "@mui/material";
import {IProductItem, ISizeItem} from "@/@types/product";
import ProductDetailsDescription from "@/sections/admin/dashboard/product/ProductDetailsDescription";
import {fCurrency} from "@/utils/formatNumber";
import SvgColor from "@/components/svg-color";
import {SizePicker} from "@/components/size-utils";
import FormProvider from "@/components/hook-form";
import {Controller, useForm} from "react-hook-form";
import {secondaryFont} from "@/theme/typography";
import {styled} from "@mui/material/styles";
import ProductDetailsReview from "./product-details-review";
import TouchRipple from "@mui/material/ButtonBase";
import {useCheckoutContext} from "@/components/checkout/context";
import {useWishListContext} from "@/components/wishlist/context/wishlist-content";
import FavoriteIcon from "@/components/icons/icon-favorite"; // const StyledTypography = styled(Typography)(({ theme }) => ({

// const StyledTypography = styled(Typography)(({ theme }) => ({
//   [theme.breakpoints.down("md")]: {},
// }));

const StyledTypography1 = styled(Typography)(({ theme }) => ({
  fontSize: "19px",
  fontWeight: 600,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  [theme.breakpoints.down("md")]: { fontSize: "17px" },
}));

const StyledTypography2 = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  fontWeight: 500,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  textDecoration: "underline",
  [theme.breakpoints.down("md")]: { fontSize: "12px" },
}));

type Props = { product: IProductItem };

export default function ProductDetailsSummary({ product }: Props) {
  const { onAddToCart } = useCheckoutContext();

  const { items, onAddToWishList } = useWishListContext();

  const { _id, name, images, price, sizes, priceSale } = product;

  const defaultValues = {
    id: _id,
    name,
    size: sizes[0],
    coverUrl: images[0],
    price,
    quantity: 1,
  };

  const isWishlist = items.some((item) => item.id === _id);

  const methods = useForm({
    defaultValues,
  });

  const { reset, watch, control, setValue, handleSubmit } = methods;

  const values = watch();

  const handleWishlist = async () => {
    const newProduct = {
      id: _id,
      name: name,
      coverUrl: images[0],
      price,
    };

    onAddToWishList(newProduct);
  };

  const onSubmit = handleSubmit(async (data) => {
    try {
      onAddToCart({ ...data, size: (data.size as ISizeItem).name });
    } catch (error) {
      console.error(error);
    }
  });

  const renderSize = (
    <Stack>
      <Typography variant="subtitle2" sx={{ flexGrow: 1, color: "#5C6166" }}>
        SIZE:
      </Typography>

      <Stack
        direction={{ xs: "column", md: "row" }}
        alignItems={{ md: "center" }}
        justifyContent="space-between"
      >
        <Stack>
          <Controller
            name="size"
            render={({ field }) => (
              <SizePicker
                sizes={sizes as ISizeItem[]}
                selected={field.value}
                onSelectSize={(size) => field.onChange(size)}
              />
            )}
          />
        </Stack>

        <Stack direction="row" alignItems="center" spacing={2}>
          <TouchRipple>
            <SvgColor src="/icons/ic_size.svg" sx={{ mr: 1 }} />
            <StyledTypography2>SIZE GUIDE</StyledTypography2>
          </TouchRipple>

          <TouchRipple>
            <SvgColor src="/icons/ic_delivery.svg" sx={{ mr: 1 }} />
            <StyledTypography2>DELIVERY & RETURN</StyledTypography2>
          </TouchRipple>
        </Stack>
      </Stack>
    </Stack>
  );

  const renderPrice = (
    <Box component="div" sx={{ typography: "h4" }}>
      {priceSale && (
        <Box
          component="span"
          sx={{
            color: "text.disabled",
            textDecoration: "line-through",
            mr: 2.5,
          }}
        >
          {fCurrency(priceSale)}
        </Box>
      )}

      {fCurrency(price)}
    </Box>
  );

  const renderActions = (
    <Stack direction="row" spacing={1}>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          whiteSpace: "nowrap",
          bgcolor: "#E6E6E6E6",
          color: "#000000",
          "&:hover": {
            bgcolor: "#000000",
            color: "#ffffff"
          },
        }}
      >
        ADD TO CART
      </Button>

      <Button
        variant="outlined"
        sx={{ p: 1, minWidth: "auto" }}
        onClick={handleWishlist}
      >
        <FavoriteIcon sx={{ width: 24, height: 24 }} active={isWishlist} />
      </Button>
    </Stack>
  );

  return (
    <FormProvider methods={methods} onSubmit={onSubmit}>
      <Stack gap={3}>
        <Typography variant="h3">{name}</Typography>

        {renderSize}

        {renderPrice}

        {renderActions}

        <Box component="div">
          <StyledTypography1>Information</StyledTypography1>
          <ProductDetailsDescription description={product?.information} />
        </Box>
        <Divider />

        <Box component="div">
          <StyledTypography1>Reviews</StyledTypography1>
          <ProductDetailsReview reviews={product.reviews || []} />
        </Box>

        <Divider />

        <Box component="div">
          <StyledTypography1>Additional information</StyledTypography1>
          <ProductDetailsDescription description={product?.others} />
        </Box>
      </Stack>
    </FormProvider>
  );
}
