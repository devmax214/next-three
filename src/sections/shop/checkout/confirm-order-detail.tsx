import React from "react";
import {
  Box,
  Divider,
  Grid,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import Image from "@/components/image";
import { useCheckoutContext } from "@/components/checkout/context";
import { fCurrency } from "@/utils/formatNumber";
import { IOrderProductItem } from "@/@types/order";

type Props = {
  items: IOrderProductItem;
};

export default function ConfirmOrderDetail({ items }: Props) {
  const checkout = useCheckoutContext();

  const displayShipping = checkout.shipping !== null ? "Free" : "-";

  const renderProductList = (
    <>
      <TableContainer>
        <Table>
          <TableBody>
            {checkout.result.items.map((item, index) => (
              <TableRow key={index} sx={{ borderBottom: "1px solid #EEE" }}>
                <TableCell sx={{ px: 0.5 }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                    {index + 1}
                  </Typography>
                </TableCell>
                <TableCell sx={{ px: 0.5 }}>
                  <Box
                    component="div"
                    sx={{
                      width: 70,
                      height: 70,
                      border: "1px solid #EEE",
                      background: "#F8F8F8",
                    }}
                  >
                    <Image src={`/uploads/${item.product.images[0]}`} />
                  </Box>
                </TableCell>
                <TableCell sx={{ px: 0 }}>
                  <Typography sx={{ fontSize: 14, fontWeight: 600 }}>
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 500, color: "#ACB1B8" }}
                  >
                    {item.size}
                  </Typography>
                </TableCell>
                <TableCell sx={{ px: 0.5 }}>
                  <Typography
                    sx={{ fontSize: 14, fontWeight: 500, color: "#5C6166" }}
                  >
                    {item.quantity} item
                  </Typography>
                </TableCell>
                <TableCell sx={{ px: 0.5 }}>
                  <Typography
                    sx={{ fontSize: 16, fontWeight: 600, color: "#5C6166" }}
                  >
                    {fCurrency(item.price * item.quantity)}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );

  const renderPrice = (
    <Stack>
      <Stack gap={2}>
        <Stack direction="row" justifyContent="space-between">
          <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#5C6166" }}>
            Subtotal:
          </Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#5C6166" }}>
            {fCurrency(checkout.subTotal)}
          </Typography>
        </Stack>

        <Stack direction="row" justifyContent="space-between">
          <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#5C6166" }}>
            Shipment:
          </Typography>
          <Typography sx={{ fontSize: 14, fontWeight: 500, color: "#5C6166" }}>
            {checkout.shipping ? fCurrency(checkout.shipping) : displayShipping}
          </Typography>
        </Stack>
      </Stack>

      <Divider sx={{ mt: 2, borderStyle: "dashed" }} />

      <Stack direction="row" justifyContent="space-between" py={1}>
        <Typography sx={{ fontSize: 16, fontWeight: 500, color: "#5C6166" }}>
          Total:
        </Typography>
        <Typography sx={{ fontSize: 19, fontWeight: 600, color: "#F05A4A" }}>
          {fCurrency(checkout.total)}
        </Typography>
      </Stack>
    </Stack>
  );

  const renderPayment = (
    <>
      <Typography
        sx={{
          fontSize: 12,
          fontWeight: 500,
          color: "#ACB1B8",
          textAlign: "left",
        }}
      >
        Paid with ending
        <Typography component="span" sx={{ color: "#004DB9", fontWeight: 900 }}>
          VISA
        </Typography>
        with 5673
      </Typography>
    </>
  );

  const renderShipping = (
    <>
      <Grid
        container
        sx={{ textAlign: "left", p: 3, bgcolor: "#F8F8F8", borderRadius: 3 }}
      >
        <Grid item md={7}>
          <Stack gap={1.5}>
            <Typography
              sx={{ fontSize: 14, fontWeight: 600, color: "#292F3D" }}
            >
              Shipping addresses
            </Typography>

            <Stack gap={0.5}>
              <Typography
                sx={{ fontSize: 12, fontWeight: 600, color: "#5C6166" }}
              >
                Name:
                <Typography
                  component="span"
                  sx={{ fontSize: 12, fontWeight: 500 }}
                >
                  Maria Silva
                </Typography>
              </Typography>

              <Typography
                sx={{ fontSize: 12, fontWeight: 600, color: "#5C6166" }}
              >
                Street Address:
                <Typography
                  component="span"
                  sx={{ fontSize: 12, fontWeight: 500 }}
                >
                  Rua da Liberdade, 123
                </Typography>
              </Typography>

              <Typography
                sx={{ fontSize: 12, fontWeight: 600, color: "#5C6166" }}
              >
                Postal Code:
                <Typography
                  component="span"
                  sx={{ fontSize: 12, fontWeight: 500 }}
                >
                  4450-123
                </Typography>
              </Typography>

              <Typography
                sx={{ fontSize: 12, fontWeight: 600, color: "#5C6166" }}
              >
                City:
                <Typography
                  component="span"
                  sx={{ fontSize: 12, fontWeight: 500 }}
                >
                  Porto
                </Typography>
              </Typography>

              <Typography
                sx={{ fontSize: 12, fontWeight: 600, color: "#5C6166" }}
              >
                Country:
                <Typography
                  component="span"
                  sx={{ fontSize: 12, fontWeight: 500 }}
                >
                  Portugal
                </Typography>
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid item md={5}>
          <Stack gap={1.5}>
            <Typography
              sx={{ fontSize: 14, fontWeight: 600, color: "#292F3D" }}
            >
              Shipping method
            </Typography>

            <Stack>
              <Typography
                sx={{ fontSize: 12, fontWeight: 500, color: "#5C6166" }}
              >
                Standard Shipping
              </Typography>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </>
  );

  return (
    <Stack gap={2}>
      {renderProductList}

      {renderPrice}

      {renderPayment}

      {renderShipping}
    </Stack>
  );
}
