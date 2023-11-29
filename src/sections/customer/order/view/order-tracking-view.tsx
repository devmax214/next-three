import { Stack, Typography } from "@mui/material";
import OrderTrackingItem from "../order-tracking-item";
import { secondaryFont } from "@/theme/typography";
import StoreIcon from "@/components/icons/customer/icon-store";
import CompleteIcon from '@/components/icons/customer/icon-complete';
import FlagIcon from "@/components/icons/customer/icon-flag";
import CentreIcon from "@/components/icons/customer/icon-sorting-centre";
import ShippingIcon from "@/components/icons/customer/icon-shipping";

const steps = [
  {
    name: "Ordering",
    date: "10.00 AM, 20 Jul 2023",
    target: "Store",
    line: true,
    icon: <StoreIcon sx={{ width: 14, height: 14, mt: 0.5 }} />,
    orderIcon: <FlagIcon sx={{ width: 16, height: 15, mt: 0.5 }} />
  },
  {
    name: "On the way",
    date: "09.15 AM, 22 Jul 2023",
    target: "Sorting centre",
    line: true,
    icon: <CentreIcon sx={{ width: 14, height: 13, mt: 0.7 }} />,
    orderIcon: <FlagIcon sx={{ width: 16, height: 15, mt: 0.5 }} />
  },
  {
    name: "Order received",
    date: "09.15 AM, 23 Jul 2023",
    target: "Shipping address",
    line: true,
    icon: <ShippingIcon sx={{ width: 16, height: 16, mt: 0.5 }} />,
    orderIcon: <FlagIcon sx={{ width: 16, height: 15, mt: 0.5 }} />
  },
  {
    name: "Delivered",
    date: "19.15 AM, 23 Jul 2023",
    line: false,
    orderIcon: <CompleteIcon sx={{ width: 16, height: 15, mt: 0.5 }} />
  },
];

type Props = {};

export default function OrderTrackingView(props: Props) {
  const currentProgress = 2.7;

  return (
    <>
      <Typography
        sx={{
          fontSize: 19,
          fontWeight: 600,
          color: "#292F3D",
          fontFamily: secondaryFont.style.fontFamily,
        }}
      >
        Order number #XC03K92
      </Typography>

      <Stack direction={{ xs: "column", md: "row" }} sx={{ width: 1, pt: 6 }}>
        {steps.map((step, index) => (
          <OrderTrackingItem
            key={index}
            index={index + 1}
            currentProgress={currentProgress}
            data={step}
          />
        ))}
      </Stack>
    </>
  );
}
