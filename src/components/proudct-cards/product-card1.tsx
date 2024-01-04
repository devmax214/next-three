import {
  Box,
  Button,
  ButtonBase,
  Card,
  IconButton,
  Link,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { secondaryFont } from "@/theme/typography";
import Image from "@/components/image";
import { IProductItem, ISizeItem } from "@/@types/product";
import { RouterLink } from "@/routers/components";
import { PATH_SHOP } from "@/routers/path";
import FavoriteIcon from "@/components/icons/icon-favorite";
import { useCheckoutContext } from "@/components/checkout/context";
import { useState } from "react";
import { useWishListContext } from "@/components/wishlist/context/wishlist-content";
import { fCurrency } from "@/utils/formatNumber";

const StyledTypography1 = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  fontWeight: 500,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  [theme.breakpoints.down("md")]: { fontSize: "13px" },
}));

const StyledTypography2 = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 600,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  [theme.breakpoints.down("md")]: { fontSize: "15px" },
}));

export const StyledSelect = styled(Select)(({ theme }) => ({
  background: "#EEE",
  color: "#292F3D",
  fontSize: 14,
  fontFamily: secondaryFont.style.fontFamily,
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
}));

export const StyledButton = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: "#F8F8F8",
  borderRadius: "6px",
  "& path": {
    stroke: "#5C6166",
  },
  "&:hover": {
    backgroundColor: "#292F3D",
    "& path": {
      stroke: "#FFFFFF",
    },
  },
}));

type Props = {
  product: IProductItem;
};

export default function ProductCard1({ product }: Props) {
  const { onAddToCart } = useCheckoutContext();

  const { items, onAddToWishList } = useWishListContext();

  const { _id, name, images, price, priceSale, sizes } = product;

  const clothSize = sizes as ISizeItem[];

  const [size, setSize] = useState(clothSize[0]._id);

  const linkTo = PATH_SHOP.product.details(_id);

  const isWishlist = items.some((item) => item.id === _id);

  const handleAddCart = async () => {
    try {
      const selectedSize = clothSize.find((s) => s._id === size);

      const newProduct = {
        id: _id,
        name: name,
        coverUrl: images[0],
        price,
        size: selectedSize?.name,
        quantity: 1,
      };

      onAddToCart(newProduct);
    } catch (error) { }
  };

  const handleWishlist = async () => {
    const newProduct = {
      id: _id,
      name: name,
      coverUrl: images[0],
      price,
    };

    onAddToWishList(newProduct);
  };

  const renderHover = (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Stack direction="row" gap={2}>
        <StyledButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M18 7L10 15L18 23"
              stroke="#5C6166"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyledButton>

        <StyledButton>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <path
              d="M12 23L20 15L12 7"
              stroke="#5C6166"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </StyledButton>
      </Stack>
      <Button
        variant="contained"
        sx={{
          fontSize: 13,
          fontWeight: 500,
          // bgcolor: "#F05A4A",
          // "&:hover ": { bgcolor: "#6AB67A" },
          bgcolor: "#E6E6E6",
          color: "#000000",
          "&:hover ": { bgcolor: "#000000", color: "#fff" },
        }}
        onClick={handleAddCart}
      >
        Add to basket
      </Button>
    </Stack>
  );

  return (
    <Card key={name} sx={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.18)" }}>
      <Box
        component="div"
        sx={{
          // px: 1,
          position: "relative",
          overflow: "hidden",
          "&:hover .add-cart-btn": { opacity: 1 },
          "&:hover .product-image": { transform: "scale(1.1)" },
        }}
      >
        <Link href={linkTo} component={RouterLink}>
          <Image
            className="product-image"
            alt={name}
            src={images[0]}
            ratio="1/1"
            sx={{
              borderRadius: 2,
              transform: "scale(1)",
              transition: (theme) =>
                theme.transitions.create("all", {
                  easing: theme.transitions.easing.easeInOut,
                  duration: theme.transitions.duration.standard,
                }),
            }}
          />
        </Link>

        <Box
          className="add-cart-btn"
          component="div"
          sx={{
            position: "absolute",
            right: 10,
            left: 10,
            bottom: 10,
            opacity: 0,
            zIndex: 9,
            transition: (theme) =>
              theme.transitions.create("all", {
                easing: theme.transitions.easing.easeInOut,
                duration: theme.transitions.duration.shorter,
              }),
          }}
        >
          {renderHover}
        </Box>
      </Box>

      <Stack
        sx={{ px: 1, pt: 2, pb: 1, textAlign: "left", bgcolor: "#F8F8F8" }}
        gap={1}
      >
        <Box component="div">
          <StyledTypography1>{name}</StyledTypography1>
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" gap={{ xs: 1, md: 1 }}>
            <StyledTypography2
              sx={{
                textDecoration: "line-through",
                color: "#5C6166",
                fontWeight: 500,
              }}
            >
              {fCurrency(priceSale)}
            </StyledTypography2>
            <StyledTypography2
              sx={{
                color: "#292F3D",
                fontWeight: 600,
              }}
            >
              {fCurrency(price)}
            </StyledTypography2>
          </Stack>

          <Stack direction="row" alignItems="center" gap={{ xs: 0, md: 0.5 }}>
            <StyledSelect
              size="small"
              variant="outlined"
              value={size}
            // defaultValue={PRODUCT_SIZE_OPTIONS[2].value}
            >
              {clothSize.map((size) => (
                <MenuItem key={size._id} value={size._id}>
                  {size.name}
                </MenuItem>
              ))}
            </StyledSelect>

            <IconButton disableRipple onClick={handleWishlist}>
              <FavoriteIcon
                sx={{ width: 24, height: 24 }}
                active={isWishlist}
              />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
