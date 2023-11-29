import React from "react";
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
import { primaryFont, secondaryFont } from "@/theme/typography";

export default function OrderSummary() {
  const checkout = useCheckoutContext();

  const displayShipping = checkout.shipping !== null ? "Free" : "-";

  return (
    <>
      <Stack gap={2}>
        <Typography sx={{ fontSize: 28, fontWeight: 700, fontFamily: primaryFont.style.fontFamily }}>
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

        <Stack direction="row" gap={2} sx={{ mb: 1 }}>
          <TextField
            fullWidth
            placeholder="Gift card or discount code"
            size="small"
          />
          <Button variant="contained" sx={{ width: "109px", bgcolor: '#ACB1BB', "&:hover": { bgcolor: "#6AB67A" }, }}>
            Apply
          </Button>
        </Stack>

        <Divider />

        <Stack gap={1}>
          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle2" sx={{
              fontSize: 14,
              fontWeight: 500,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily
            }}>Subtotal:</Typography>
            <Typography variant="subtitle2" sx={{
              fontSize: 14,
              fontWeight: 500,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily
            }}>
              {fCurrency(checkout.subTotal)}
            </Typography>
          </Stack>

          <Stack direction="row" justifyContent="space-between">
            <Typography variant="subtitle2" sx={{
              fontSize: 14,
              fontWeight: 500,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily
            }}>Shipment:</Typography>
            <Typography variant="subtitle2" sx={{
              fontSize: 14,
              fontWeight: 500,
              color: "#292F3D",
              fontFamily: secondaryFont.style.fontFamily
            }}>
              {checkout.shipping
                ? fCurrency(checkout.shipping)
                : displayShipping}
            </Typography>
          </Stack>
        </Stack>

        <Divider />

        <Stack direction="row" justifyContent="space-between" sx={{ mt: -1 }}>
          <Typography variant="subtitle2" sx={{
            fontSize: 16,
            fontWeight: 500,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily
          }}>Total:</Typography>
          <Typography variant="h5" sx={{
            fontSize: 19,
            fontWeight: 600,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily
          }}>{fCurrency(checkout.total)}</Typography>
        </Stack>
      </Stack>
    </>
  );
}
