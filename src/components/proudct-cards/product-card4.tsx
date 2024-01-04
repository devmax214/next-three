import {
  Box,
  Button,
  Card,
  Link,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Image from "@/components/image";
import { PRODUCT_SIZE_OPTIONS } from "@/@mockup/_product";
import { RouterLink } from "@/routers/components";
import { PATH_SHOP } from "@/routers/path";
import { IWishListItem } from "@/@types/wishlist";
import { secondaryFont } from "@/theme/typography";
import { styled } from "@mui/material/styles";
import { useWishListContext } from "@/components/wishlist/context/wishlist-content";

export const StyledSelect = styled(Select)(({ theme }) => ({
  background: "#EEE",
  color: "#292F3D",
  fontSize: 14,
  fontFamily: secondaryFont.style.fontFamily,
  ".MuiOutlinedInput-notchedOutline": { border: 0 },
}));

type Props = {
  product: IWishListItem;
};

export default function ProductCard4({ product }: Props) {
  const { onDeleteWishlist } = useWishListContext();

  const { id, name, coverUrl } = product;

  const linkTo = PATH_SHOP.product.details(id);

  return (
    <Card key={name}>
      <Box component="div" sx={{ px: 1 }}>
        <Link href={linkTo} component={RouterLink}>
          <Image
            alt={name}
            src={"/uploads/" + coverUrl}
            ratio="1/1"
            sx={{ borderRadius: 2 }}
          />
        </Link>
      </Box>

      <Stack
        sx={{ px: 1, pt: 1, pb: 1, textAlign: "left", bgcolor: "#F8F8F8" }}
        gap={0.5}
      >
        <Box component="div">
          <Typography
            sx={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
              fontSize: { xs: 13, md: 14 },
              fontWeight: 500,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
            }}
          >
            {name}
          </Typography>
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="row"
            gap={1}
            sx={{ flexShrink: 0 }}
            alignItems="center"
          >
            <Typography
              sx={{
                fontSize: { xs: 13, md: 14 },
                fontWeight: 600,
                fontFamily: secondaryFont.style.fontFamily,
              }}
            >
              76 {JSON.parse(localStorage.getItem('currency')).value}
            </Typography>

            <StyledSelect
              size="small"
              variant="outlined"
              defaultValue={PRODUCT_SIZE_OPTIONS[2].value}
            >
              {PRODUCT_SIZE_OPTIONS.map((p) => (
                <MenuItem value={p.value}>{p.label}</MenuItem>
              ))}
            </StyledSelect>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Button
              sx={{
                fontSize: { xs: 12, md: 14 },
                textDecoration: "underline",
                fontWeight: 500,
                fontFamily: secondaryFont.style.fontFamily,
              }}
              onClick={() => onDeleteWishlist(id)}
            >
              Remove
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
