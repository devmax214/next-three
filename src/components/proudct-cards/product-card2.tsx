import {
  Box,
  Card,
  IconButton,
  Link,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Image from "@/components/image";
import { IProductItem } from "@/@types/product";
import { PRODUCT_SIZE_OPTIONS } from "@/@mockup/_product";
import { RouterLink } from "@/routers/components";
import { PATH_SHOP } from "@/routers/path";

type Props = {
  product: IProductItem;
};

export default function ProductCard2({ product }: Props) {
  const { _id, name, coverUrl } = product;

  const linkTo = PATH_SHOP.product.details(_id);

  return (
    <Card key={name}>
      <Box component="div" sx={{ px: 1 }}>
        <Link href={linkTo} component={RouterLink}>
          <Image
            alt={name}
            src={coverUrl}
            ratio="1/1"
            sx={{ borderRadius: 2 }}
          />
        </Link>
      </Box>

      <Stack
        sx={{ px: 1, pt: 2, pb: 1, textAlign: "left", bgcolor: "#F8F8F8" }}
        gap={1}
      >
        <Box component="div">
          <Typography
            variant="body2"
            sx={{
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
              overflow: "hidden",
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
          <Stack direction="row" gap={1}>
            <Typography
              variant="subtitle2"
              sx={{ textDecoration: "line-through", color: "text.disabled" }}
            >
              76 {JSON.parse(localStorage.getItem('currency')).value}
            </Typography>
            <Typography variant="subtitle2">50 {JSON.parse(localStorage.getItem('currency')).value}</Typography>
          </Stack>

          <Stack direction="row" alignItems="center">
            <Select defaultValue={PRODUCT_SIZE_OPTIONS[2].value}>
              {PRODUCT_SIZE_OPTIONS.map((p) => (
                <MenuItem value={p.value}>{p.label}</MenuItem>
              ))}
            </Select>

            <IconButton disableRipple>
              <Image src="/icons/favorite-off.svg" />
            </IconButton>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
}
