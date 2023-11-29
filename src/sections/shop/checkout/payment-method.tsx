import React from "react";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Stack,
  Tab,
  TabProps,
  Tabs,
  Typography,
} from "@mui/material";
import VisaIcon from "@/components/icons/checkout/icon-visa";
import MasterCardIcon from "@/components/icons/checkout/icon-master";
import { RhfSelect, RHFTextField } from "@/components/hook-form";
import { styled } from "@mui/material/styles";
import { months, years } from "@/@mockup/others";
import { IPaymentItem } from "@/@types/customer";
import { useCheckoutContext } from "@/components/checkout/context";

const StyledTab = styled((props: TabProps) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "none",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(16),
    // marginRight: theme.spacing(1),
    width: 200,
    marginRight: "0 !important",
    color: "#292F3D",
    "&.Mui-selected": {
      backgroundColor: "#ACB1B855",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  })
);

type Props = {
  payment: string;
  onChange: (newValue: string) => void;
  payments: IPaymentItem[];
  setCreditInfo: (info: IPaymentItem) => void;
};

export default function PaymentMethod({
  payment,
  onChange,
  payments,
  setCreditInfo,
}: Props) {
  const checkout = useCheckoutContext();

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h3">Payment method</Typography>
      </Stack>

      <Box component="div">
        <Tabs
          value={payment}
          onChange={(e, v) => {
            onChange(v);
          }}
          TabIndicatorProps={{
            sx: {
              display: "none",
            },
          }}
        >
          <StyledTab
            value="credit"
            label="Card"
            icon={
              <>
                <VisaIcon sx={{ width: 27, height: 16 }} />

                <MasterCardIcon sx={{ width: 29, height: 16 }} />
              </>
            }
          />
          <StyledTab value="paypal" label="PayPal" />
        </Tabs>

        <TabPanel index="credit" value={payment}>
          <Stack gap={1} sx={{ bgcolor: "#ACB1B855" }} p={2}>
            <Select
              size="small"
              onChange={(e) => {
                const payment = payments.find(
                  (payment) => payment._id === e.target.value
                );

                setCreditInfo(payment);
              }}
            >
              {payments.map((payment, index) => (
                <MenuItem key={index} value={payment._id}>
                  {payment.number}
                </MenuItem>
              ))}
            </Select>

            <Stack direction="row" gap={1}>
              <RhfSelect native name="month">
                {months.map((month, index) => (
                  <option key={index} value={month.value}>
                    {month.label}
                  </option>
                ))}
              </RhfSelect>
              <RhfSelect native name="year">
                {years.map((year, index) => (
                  <option key={index} value={year.value}>
                    {year.label}
                  </option>
                ))}
              </RhfSelect>
            </Stack>
            <RHFTextField
              fullWidth
              name="holder"
              placeholder="Card holder's name"
            />
            <RHFTextField fullWidth name="code" placeholder="Security code" />
          </Stack>
        </TabPanel>

        <TabPanel index="paypal" value={payment}>
          <Stack gap={1} sx={{ bgcolor: "#ACB1B855" }} p={2}>
            <RHFTextField
              fullWidth
              type="password"
              name="paypal"
              placeholder="Email"
            />
          </Stack>
        </TabPanel>

        <Stack direction="row" px={2} gap={2} mt={3}>
          <Button
            fullWidth
            size="large"
            variant="contained"
            sx={{
              bgcolor: "#E6E6E6",
              color: "#000000",
              "&:hover": {
                color: "#fff",
                bgcolor: "#000000",
              },
            }}
            onClick={checkout.onBackStep}
          >
            Return to information
          </Button>

          <Button
            type="submit"
            fullWidth
            size="large"
            variant="contained"
            sx={{
              bgcolor: "#000000",
              color: "#fff",
              "&:hover": {
                color: "#000000",
                bgcolor: "#E6E6E6",
              },
            }}
          >
            PAY
          </Button>
        </Stack>
      </Box>
    </>
  );
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: string;
  value: string;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box component="div">
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
