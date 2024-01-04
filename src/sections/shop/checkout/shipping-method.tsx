import { Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import { Controller } from "react-hook-form";
import { secondaryFont } from "@/theme/typography";
import { useCheckoutContext } from "@/components/checkout/context";
import CheckedIcon from "@/components/icons/checked-icon";
import UnCheckedIcon from "@/components/icons/unchecked-icon";

export const DELIVERY_OPTIONS = [
  {
    value: 0,
    label: "Free",
    description: "Free Delivery (3-4 working days)",
  },
  {
    value: 10,
    label: "Standard",
    description: "Standard Delivery (7-9 working days)",
  },
  {
    value: 20,
    label: "Express",
    description: "Express Delivery (10-11 working days)",
  },
];

export default function ShippingMethod() {
  const checkout = useCheckoutContext();

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h3">Shipping method</Typography>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          borderBottom: "1px solid #ACB1B8",
        }}
      >
        <Controller
          name="delivery"
          render={({ field }) => (
            <Stack sx={{ width: 1 }}>
              {DELIVERY_OPTIONS.map((option, index) => (
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} checked={field.value === option.value} />
                    }
                    label={option.description}
                    componentsProps={{
                      typography: {
                        sx: {
                          fontSize: 14,
                          color: "#292F3D",
                          fontWeight: 500,
                          fontFamily: secondaryFont.style.fontFamily,
                        },
                      },
                    }}
                    onClick={() => {
                      field.onChange(option.value);
                      checkout.onApplyShipping(option.value);
                    }}
                  />

                  <Typography variant="subtitle2">{option.label}</Typography>
                </Stack>
              ))}
            </Stack>
          )}
        />
      </Stack>
    </>
  );
}
