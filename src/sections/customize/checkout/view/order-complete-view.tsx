import { Box, Card, Divider, Link, Stack, Typography } from "@mui/material";
import { RouterLink } from "@/routers/components";
import ConfirmOrderDetail from "../confirm-order-detail";
import { secondaryFont } from "@/theme/typography";
import BackIcon from '@/components/icons/icon-back';

export default function OrderCompleteView() {
  const linkTo = "/";

  const renderHead = (
    <Stack p={3}>
      <Typography sx={{ fontSize: 19, fontWeight: 600, color: "#F05A4A", fontFamily: secondaryFont.style.fontFamily }}>
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
          #67L09KM1
        </Typography>
      </Typography>
    </Stack>
  );

  const renderDetail = (
    <Stack p={3}>
      <Typography sx={{ fontSize: 19, fontWeight: 600, color: "#292F3D", mb: "10px" }}>
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
            bgcolor: "#ffffff",
          }}
        >
          {renderHead}

          <Divider sx={{ borderStyle: "dashed", borderWidth: 1, borderColor: "#b3b3b3" }} />

          {renderDetail}
        </Card>

        <Link href={linkTo} component={RouterLink} sx={{ mt: 5 }}>
          <Stack direction="row">
            <BackIcon width={17} height={13} marginTop={'5px'} marginRight={'8px'} />
            <Typography
              sx={{ color: "#F05A4A", fontSize: 16, fontWeight: 500 }}
            >
              Return to shop
            </Typography>
          </Stack>
        </Link>
      </Box>
    </>
  );
}
