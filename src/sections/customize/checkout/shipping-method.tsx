import { primaryFont, secondaryFont } from "@/theme/typography";
import { Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import CheckedIcon from "@/components/icons/checked-icon";
import UnCheckedIcon from "@/components/icons/unchecked-icon";

type Props = {};

export default function ShippingMethod(props: Props) {
  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mt: 3 }}>
        <Typography sx={{ fontSize: 28, fontWeight: 700, fontFamily: primaryFont.style.fontFamily }}>Shipping method</Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          borderBottom: "1px solid #ACB1B8",
          mt: -2,
        }}
      >
        <FormControlLabel
          control={<Checkbox color="default" sx={{ color: '#292F3D' }} />}
          label={
            <Typography sx={{ fontSize: 14, fontWeight: 500, fontFamily: secondaryFont.style.fontFamily }}>
              Standard Delivery (3-4 working days)
            </Typography>
          }
          componentsProps={{
            typography: {
              variant: "subtitle2",
            },
          }}
        />

        <Typography variant="subtitle2">Free</Typography>
      </Stack>
    </>
  );
}
