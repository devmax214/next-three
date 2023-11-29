import {
  Avatar,
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Iconify from "@/components/iconify";
import { IAddressItem, ICustomerItem, IPaymentItem } from "@/@types/customer";
import { DELIVERY_OPTIONS } from "@/sections/shop/checkout/shipping-method";

type Props = {
  customer: ICustomerItem;
  shipping: number;
  payment: IPaymentItem;
  shippingAddress: IAddressItem;
};

export default function OrderDetailInfo({
  customer,
  shipping,
  payment,
  shippingAddress,
}: Props) {
  const delivery = DELIVERY_OPTIONS.find((option) => option.value === shipping);

  const renderCustomer = (
    <>
      <CardHeader
        title="Customer Info"
        action={
          <IconButton>
            <Iconify icon="solar:pen-bold" />
          </IconButton>
        }
      />
      <Stack direction="row" sx={{ p: 3 }}>
        <Avatar
          alt="avatar"
          src={customer.avatarUrl}
          sx={{ width: 48, height: 48, mr: 2 }}
        />

        <Stack
          spacing={0.5}
          alignItems="flex-start"
          sx={{ typography: "body2" }}
        >
          <Typography variant="subtitle2">{`${customer.firstname} ${customer.lastname}`}</Typography>

          <Box component="div" sx={{ color: "text.secondary" }}>
            {customer.email}
          </Box>

          <Box component="div">
            IP Address:
            <Box component="span" sx={{ color: "text.secondary", ml: 0.25 }}>
              {customer.ipAddress || "109.0.0.0"}
            </Box>
          </Box>

          <Button
            size="small"
            color="error"
            startIcon={<Iconify icon="mingcute:add-line" />}
            sx={{ mt: 1 }}
          >
            Add to Blacklist
          </Button>
        </Stack>
      </Stack>
    </>
  );

  const renderDelivery = (
    <>
      <CardHeader
        title="Delivery"
        action={
          <IconButton>
            <Iconify icon="solar:pen-bold" />
          </IconButton>
        }
      />

      <Stack spacing={1.5} sx={{ p: 3, typography: "body2" }}>
        {/*<Stack direction="row" alignItems="center">*/}
        {/*  <Box*/}
        {/*    component="span"*/}
        {/*    sx={{ color: "text.secondary", width: 120, flexShrink: 0 }}*/}
        {/*  >*/}
        {/*    Ship by*/}
        {/*  </Box>*/}
        {/*  {delivery.shipBy}*/}
        {/*</Stack>*/}
        <Stack direction="row" alignItems="center">
          <Box
            component="span"
            sx={{ color: "text.secondary", width: 120, flexShrink: 0 }}
          >
            Speedy
          </Box>
          {/*{delivery.speedy}*/}
          {delivery.label}
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box
            component="span"
            sx={{ color: "text.secondary", width: 120, flexShrink: 0 }}
          >
            Tracking No.
          </Box>
          <Link underline="always" color="inherit">
            {delivery.trackingNumber || "SPX037739199373"}
          </Link>
        </Stack>
      </Stack>
    </>
  );

  const renderShipping = (
    <>
      <CardHeader
        title="Shipping"
        action={
          <IconButton>
            <Iconify icon="solar:pen-bold" />
          </IconButton>
        }
      />
      <Stack spacing={1.5} sx={{ p: 3, typography: "body2" }}>
        <Stack direction="row" alignItems="center">
          <Box
            component="span"
            sx={{ color: "text.secondary", width: 120, flexShrink: 0 }}
          >
            Address
          </Box>
          {`${shippingAddress.address}, ${shippingAddress.postal} ${shippingAddress.city}, ${shippingAddress.country}`}
        </Stack>
        <Stack direction="row" alignItems="center">
          <Box
            component="span"
            sx={{ color: "text.secondary", width: 120, flexShrink: 0 }}
          >
            Phone number
          </Box>
          {shippingAddress.phone}
        </Stack>
      </Stack>
    </>
  );

  const renderPayment = (
    <>
      <CardHeader
        title="Payment"
        action={
          <IconButton>
            <Iconify icon="solar:pen-bold" />
          </IconButton>
        }
      />
      <Stack
        direction="row"
        alignItems="center"
        sx={{ p: 3, typography: "body2" }}
      >
        <Box component="span" sx={{ color: "text.secondary", flexGrow: 1 }}>
          Card number
        </Box>

        {payment.number}
        <Iconify icon="logos:mastercard" width={24} sx={{ ml: 0.5 }} />
      </Stack>
    </>
  );

  return (
    <Card>
      {renderCustomer}

      <Divider sx={{ borderStyle: "dashed" }} />

      {renderDelivery}

      <Divider sx={{ borderStyle: "dashed" }} />

      {renderShipping}

      <Divider sx={{ borderStyle: "dashed" }} />

      {renderPayment}
    </Card>
  );
}
