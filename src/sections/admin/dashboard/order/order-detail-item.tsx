import {Avatar, Box, Card, CardHeader, ListItemText, Stack,} from "@mui/material";
import Scrollbar from "@/components/scrollbar";
import {fCurrency} from "@/utils/formatNumber";
import {IOrderItem} from "@/@types/order";

// type Props = {
//   items: Array<{
//     id: string;
//     coverUrl: string;
//     name: string;
//     sku: string;
//     quantity: number;
//     price: number;
//   }>;
//   taxes: number;
//   shipping: number;
//   discount: number;
//   subTotal: number;
//   totalAmount: number;
// };

interface Props extends IOrderItem {
  totalAmount: number;
}

export default function OrderDetailItem({
  items,
  taxes,
  shipping,
  discount,
  subTotal,
  totalAmount,
}: Props) {
  const renderTotal = (
    <Stack
      spacing={2}
      alignItems="flex-end"
      sx={{ my: 3, textAlign: "right", typography: "body2" }}
    >
      <Stack direction="row">
        <Box component="div" sx={{ color: "text.secondary" }}>
          Subtotal
        </Box>
        <Box component="div" sx={{ width: 160, typography: "subtitle2" }}>
          {fCurrency(subTotal) || "-"}
        </Box>
      </Stack>

      <Stack direction="row">
        <Box component="div" sx={{ color: "text.secondary" }}>
          Shipping
        </Box>
        <Box
          component="div"
          sx={{
            width: 160,
            // ...(shipping && { color: "error.main" }),
          }}
        >
          {shipping ? `${fCurrency(shipping)}` : "-"}
        </Box>
      </Stack>

      <Stack direction="row">
        <Box component="div" sx={{ color: "text.secondary" }}>
          Discount
        </Box>
        <Box
          component="div"
          sx={{
            width: 160,
            ...(discount && { color: "error.main" }),
          }}
        >
          {discount ? `- ${fCurrency(discount)}` : "-"}
        </Box>
      </Stack>

      {/*<Stack direction="row">*/}
      {/*  <Box component="div" sx={{ color: "text.secondary" }}>*/}
      {/*    Taxes*/}
      {/*  </Box>*/}
      {/*  <Box component="div" sx={{ width: 160 }}>*/}
      {/*    {taxes ? fCurrency(taxes) : "-"}*/}
      {/*  </Box>*/}
      {/*</Stack>*/}

      <Stack direction="row" sx={{ typography: "subtitle1" }}>
        <Box component="div">Total</Box>
        <Box component="div" sx={{ width: 160 }}>
          {fCurrency(totalAmount) || "-"}
        </Box>
      </Stack>
    </Stack>
  );

  return (
    <Card>
      <CardHeader title="Details" />

      <Stack
        sx={{
          px: 3,
        }}
      >
        <Scrollbar>
          {items.map((item) => (
            <Stack
              key={item._id}
              direction="row"
              alignItems="center"
              sx={{
                py: 3,
                minWidth: 640,
                borderBottom: (theme) =>
                  `dashed 2px ${theme.palette.background.neutral}`,
              }}
            >
              <Avatar
                src={`/uploads/${item.product.images[0]}`}
                variant="rounded"
                sx={{ width: 48, height: 48, mr: 2 }}
              />

              <ListItemText
                primary={item.product.name}
                secondary={item.product.sku}
                primaryTypographyProps={{
                  typography: "body2",
                }}
                secondaryTypographyProps={{
                  component: "span",
                  color: "text.disabled",
                  mt: 0.5,
                }}
              />

              <Box component="div" sx={{ typography: "body2" }}>
                x{item.quantity}
              </Box>

              <Box
                component="div"
                sx={{ width: 110, textAlign: "right", typography: "subtitle2" }}
              >
                {fCurrency(item.price)}
              </Box>
            </Stack>
          ))}
        </Scrollbar>

        {renderTotal}
      </Stack>
    </Card>
  );
}
