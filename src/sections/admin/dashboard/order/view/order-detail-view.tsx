import React, { useState } from "react";
import { Grid, Stack } from "@mui/material";
import OrderDetailsToolbar from "../OrderDetailsToolbar";
import { PATH_ADMIN_DASHBOARD } from "@/routers/path";
import OrderDetailItem from "../order-detail-item";
import OrderDetailInfo from "../order-detail-info";
import { IOrderItem } from "@/@types/order";

type Props = {
  currentOrder: IOrderItem;
};

export default function OrderDetailView({ currentOrder }: Props) {
  const [status, setStatus] = useState(currentOrder.status);

  const totalSubPrice = currentOrder.items.reduce(
    (accumulator, item) => accumulator + item.quantity * item.price,
    0
  );

  const totalDiscount = 0;

  return (
    <>
      <OrderDetailsToolbar
        backLink={PATH_ADMIN_DASHBOARD.order.root}
        orderNumber={currentOrder.orderNumber}
        createdAt={currentOrder.createdAt}
        status={status}
      />

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Stack spacing={3} direction={{ xs: "column-reverse", md: "column" }}>
            <OrderDetailItem
              items={currentOrder.items}
              taxes={currentOrder.taxes}
              shipping={currentOrder.shipping}
              discount={totalDiscount}
              subTotal={totalSubPrice}
              totalAmount={currentOrder.totalPrice}
            />
          </Stack>
        </Grid>
        <Grid item xs={12} md={4}>
          <OrderDetailInfo
            customer={currentOrder.customer}
            shipping={currentOrder.shipping}
            // delivery={currentOrder.delivery}
            payment={currentOrder.payment}
            shippingAddress={currentOrder.address}
          />
        </Grid>
      </Grid>
    </>
  );
}
