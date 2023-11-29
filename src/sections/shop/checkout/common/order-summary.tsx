import {
  Box,
  Button,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
  Typography,
} from "@mui/material";
import { useCheckoutContext } from "@/components/checkout/context";
import { fCurrency } from "@/utils/formatNumber";
import Image from "@/components/image";
import React from "react";

type Props = {};

export default function OrderSummary(props: Props) {
  const checkout = useCheckoutContext();

  const displayShipping = checkout.shipping !== null ? "Free" : "-";

  return (
    <>
      <Stack gap={3}>
        <Typography variant="h3">
          Order summary,
          <Typography component="span" sx={{ color: "text.secondary" }}>
            &nbsp;({checkout.totalItems} items)
          </Typography>
        </Typography>

        <TableContainer>
          <Table>
            <TableBody>
              {checkout.items.map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ borderBottom: "1px solid #ACB1B8", py: 1 }}
                >
                  <TableCell width={70} sx={{ py: 1, px: 0 }}>
                    <Box
                      component="div"
                      sx={{
                        width: 70,
                        height: 70,
                        border: "1px solid #EEE",
                        background: "#F8F8F8",
                      }}
                    >
                      <Image src={`/uploads/${item.coverUrl}`} />
                    </Box>
                  </TableCell>
                  <TableCell sx={{ py: 1, pr: 1, verticalAlign: "top" }}>
                    <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                      {item.name}
                    </Typography>
                    <Typography
                      sx={{ fontSize: 14, fontWeight: 600, color: "#5C6166" }}
                    >
                      {item.size}
                    </Typography>
                  </TableCell>
                  <TableCell
                    width={60}
                    sx={{ py: 1, px: 0, verticalAlign: "top" }}
                  >
                    <Typography
                      sx={{ fontSize: 14, fontWeight: 500, color: "#292F3D" }}
                    >
                      {item.quantity} item
                    </Typography>
                  </TableCell>
                  <TableCell
                    width={60}
                    sx={{
                      py: 1,
                      px: 0,
                      verticalAlign: "top",
                      textAlign: "right",
                    }}
                  >
                    <Typography
                      sx={{ fontSize: 16, fontWeight: 600, color: "#292F3D" }}
                    >
                      {fCurrency(item.price * item.quantity)}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack direction="row" gap={3}>
          <TextField
            fullWidth
            placeholder="Gift card or discount code"
            size="small"
          />
          <Button
            variant="contained"
            sx={{
              width: "30%",
              bgcolor: "#E6E6E6",
              color: "#000000",
              "&:hover": {
                color: "#fff",
                bgcolor: "#000000",
              },
            }}
          >
            Apply
          </Button>
        </Stack>

        <Divider />

        <Stack gap={2}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle2">Subtotal:</Typography>
            <Typography variant="subtitle2">
              {fCurrency(checkout.subTotal)}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle2">Shipment:</Typography>
            <Typography variant="subtitle2">
              {checkout.shipping
                ? fCurrency(checkout.shipping)
                : displayShipping}
            </Typography>
          </Stack>
        </Stack>

        <Divider />

        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle2">Total:</Typography>
          <Typography variant="h5">{fCurrency(checkout.total)}</Typography>
        </Stack>
      </Stack>
    </>
  );
}
