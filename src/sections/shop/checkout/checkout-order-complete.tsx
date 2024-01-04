import { Box, Button, Card, Divider, Stack, Typography } from "@mui/material";
import ConfirmOrderDetail from "./confirm-order-detail";
import { useCheckoutContext } from "@/components/checkout/context";

export default function CheckoutOrderComplete() {
  const checkout = useCheckoutContext();

  const renderHead = (
    <Stack p={3}>
      <Typography sx={{ fontSize: 19, fontWeight: 600, color: "#F05A4A" }}>
        Great!
      </Typography>

      <Typography sx={{ fontSize: 28, fontWeight: 700, color: "#292F3D" }}>
        Payment Confirmed!
      </Typography>

      <Typography
        sx={{ fontSize: 14, fontWeight: 500, color: "#5C6166", mt: 4 }}
      >
        Thank you for shopping with us. Your order is being processed.
        <br /> We'll send you a confirmation email shortly.
        <br /> Happy shopping!
        <br /> <br />
        Your order code is
        <br />
        <Typography sx={{ fontSize: 14, fontWeight: 600, color: "#5C6166" }}>
          #{checkout.result._id}
        </Typography>
      </Typography>
    </Stack>
  );

  const renderDetail = (
    <Stack p={3}>
      <Typography sx={{ fontSize: 19, fontWeight: 600, color: "#292F3D" }}>
        ORDER DETAILS
      </Typography>

      <ConfirmOrderDetail />
    </Stack>
  );

  return (
    <>
      <Box
        component="div"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          py: 10,
          bgcolor: "#F9F5EE",
        }}
      >
        <Card
          sx={{
            width: 560,
            textAlign: "center",
            filter: "drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.15))",
          }}
        >
          {renderHead}

          <Divider sx={{ borderStyle: "dashed", borderWidth: 2 }} />

          {renderDetail}
        </Card>

        <Button
          sx={{ color: "#F05A4A", fontSize: 16, fontWeight: 500 }}
          onClick={checkout.onReset}
        >
          Return to shop
        </Button>

        {/*<Link href={linkTo} component={RouterLink} sx={{ mt: 4 }}>*/}
        {/*  <Stack direction="row">*/}
        {/*    <Typography*/}
        {/*      sx={{ color: "#F05A4A", fontSize: 16, fontWeight: 500 }}*/}
        {/*    >*/}
        {/*      Return to shop*/}
        {/*    </Typography>*/}
        {/*  </Stack>*/}
        {/*</Link>*/}
      </Box>
    </>
  );
}
