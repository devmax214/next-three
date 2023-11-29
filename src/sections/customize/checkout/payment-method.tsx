import {
  Box,
  Button,
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
import { primaryFont, secondaryFont } from "@/theme/typography";
import PaypalIcon from '@/components/icons/checkout/icon-paypal';

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
};

export default function PaymentMethod({ payment, onChange }: Props) {
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 4 }}>
        <Typography sx={{ fontSize: 28, fontWeight: 700, fontFamily: primaryFont.style.fontFamily }}>Select payment method</Typography>
      </Stack>

      <Box component={"div"}>
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
            label={
              <Typography sx={{ fontSize: 16, fontWeight: 500, fontFamily: secondaryFont.style.fontFamily, ml: '12px' }}>Card</Typography>
            }
            icon={
              <>
                <MasterCardIcon sx={{ width: 25, height: 16, ml: -7 }} />

                <VisaIcon sx={{ width: 27, height: 16, ml: '5px' }} />
              </>
            }
          />
          <StyledTab value="paypal" icon={<PaypalIcon width={61} height={16} ml={-10} />} />
        </Tabs>

        <TabPanel index="credit" value={payment}>
          <Stack gap={2} sx={{ bgcolor: "#ACB1B855" }} p={2} pb={4.5}>
            <RHFTextField fullWidth name="number" placeholder="Card number" />
            <Stack direction="row" gap={"23px"}>
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
              name="name"
              placeholder="Card holder's name"
            />
            <RHFTextField fullWidth name="code" placeholder="Security code" />
          </Stack>
        </TabPanel>

        <TabPanel index="paypal" value={payment}>
          <Stack gap={1} sx={{ bgcolor: "#ACB1B855" }} p={2}>
            <RHFTextField fullWidth name="paypal" placeholder="Email" />
          </Stack>
        </TabPanel>

        <Stack direction="row" px={2} gap={8} mt={5}>
          <Button
            fullWidth
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#ACB1B8",
              width: 215,
              "&:hover": { bgcolor: "#6AB67A" },
            }}
          >
            Return to information
          </Button>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#292F3D",
              width: 215,
              "&:hover": { bgcolor: "#550248" },
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
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
