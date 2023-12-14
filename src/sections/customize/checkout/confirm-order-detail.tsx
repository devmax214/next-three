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
import { useCheckoutContext } from "@/components/checkout/context";
import { fCurrency } from "@/utils/formatNumber";
import Image from "@/components/image";
import { secondaryFont } from "@/theme/typography";
import VisaIcon from '@/components/icons/icon-visa';

type Props = {};

export default function ConfirmOrderDetail(props: Props) {
  const checkout = useCheckoutContext();

  const displayShipping = checkout.shipping !== null ? "Free" : "-";

  const renderProductList = (
    <>
      <TableContainer>
        <Table>
          <TableBody>
            {checkout.items.map((item, index) => (
              <TableRow
                key={index}
                sx={{ borderBottom: "1px solid lightgrey", py: 1 }}
              >
                <TableCell width={70} sx={{ py: 1, px: 0 }}>
                  <Box
                    component="div"
                    sx={{
                      width: 70,
                      height: 70,
                      border: "1px solid #EEE",
                      background: "lightgrey",
                      borderRadius: "5px"
                    }}
                  >
                    <Image width="100%" height="100%" src={`${item.coverUrl}`} />
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
          fontFamily: secondaryFont.style.fontFamily
        }}
      >
        Paid with
        <VisaIcon width={26} height={9} ml={'3px'} mr={'3px'} />
        ending with 5673
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
              sx={{ fontSize: 14, fontWeight: 700, color: "#292F3D", lineHeight: '18.9px' }}
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
              sx={{ fontSize: 14, fontWeight: 700, color: "#292F3D" }}
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

      <Box
        component={"div"}
        width={33}
        height={33}
        sx={{
          position: 'absolute',
          top: { md: 278, xs: 255 },
          left: 0,
          background: '#F9F5EE',
          borderRadius: 38,
          transform: "translate(-50%, -50%)",
        }} />
      <Box
        component={"div"}
        width={33}
        height={33}
        sx={{
          position: 'absolute',
          top: { md: 278, xs: 255 },
          right: 0,
          background: "#F9F5EE",
          borderRadius: 38,
          transform: "translate(50%, -50%)",
        }} />

      {renderPrice}

      {renderPayment}

      {renderShipping}
    </Stack>
  );
}
