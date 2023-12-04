import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "@/components/image";
import { ICheckoutItem } from "@/@types/checkout";
import { fCurrency } from "@/utils/formatNumber";
import CartDeleteIcon from "@/components/icons/icon-cart-delete";
import IncrementButton from "../button/increment-button";
import { secondaryFont } from "@/theme/typography";

type Props = {
  item: ICheckoutItem;
  onDecrease: VoidFunction;
  onIncrease: VoidFunction;
  onDelete: VoidFunction;
};

export default function ProductCard3({
  item,
  onDecrease,
  onIncrease,
  onDelete,
}: Props) {
  const { name, coverUrl, size, price, quantity } = item;

  return (
    <Stack
      direction="row"
      py={1}
      gap={2}
      sx={{
        borderBottom: "1px solid #EEEEEE",
        position: "relative",
      }}
    >
      <Box
        component="div"
        sx={{
          width: 70,
          height: 70,
          background: "#F8F8F8",
          borderRadius: "8px",
          border: "1px solid #eee",
          overflow: "hidden",
        }}
      >
        <Image src={`/uploads/${coverUrl}`} />
      </Box>

      <Stack flexGrow={1} justifyContent="space-between">
        <Stack
          direction="row"
          alignItems="start"
          justifyContent="space-between"
        >
          <Typography
            sx={{
              fontSize: { xs: 13, md: 14 },
              fontWeight: 600,
              fontFamily: secondaryFont.style.fontFamily,
              lineHeight: '18.9px'
            }}
          >
            {name}
          </Typography>
        </Stack>

        <Typography
          sx={{
            fontSize: { xs: 13, md: 14 },
            fontWeight: 500,
            fontFamily: secondaryFont.style.fontFamily,
            color: "#5C6166",
            lineHeight: '18.9px'
          }}
        >
          {size}
        </Typography>

        <Stack direction="row" justifyContent="space-between">
          <IncrementButton
            quantity={quantity}
            onDecrease={onDecrease}
            onIncrease={onIncrease}
          />
          <Typography
            sx={{
              fontSize: { xs: 15, md: 16 },
              fontWeight: 600,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily,
              lineHeight: '21.6px'
            }}
          >
            {fCurrency(price * quantity)}
          </Typography>
        </Stack>

        <Box
          component="div"
          sx={{ position: "absolute", right: 0, top: { xs: 2, md: 2 } }}
        >
          <IconButton onClick={onDelete}>
            <CartDeleteIcon sx={{ width: 14, height: 16 }} />
          </IconButton>
        </Box>
      </Stack>
    </Stack>
  );
}
