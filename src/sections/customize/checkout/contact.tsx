import { useState } from "react";
import { Checkbox, FormControlLabel, Stack, Typography, Switch } from "@mui/material";
import { RouterLink } from "@/routers/components";
import { PATH_SHOP } from "@/routers/path";
import { useSession } from "next-auth/react";
import { RHFTextField } from "@/components/hook-form";
import { styled } from "@mui/material/styles";
import { primaryFont, secondaryFont } from "@/theme/typography";
import { useCheckoutContext } from "@/components/checkout/context";

const items = [{ label: "Shipping Included" }, { label: "Shipping not Included" }];

export const StyledSwitchLabel = styled(Typography)(({ theme }) => ({
  fontSize: 19,
  fontWeight: 500,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
  textWrap: "nowrap",
}));

export default function Contact() {
  const { data: session, status } = useSession();
  const [state, setState] = useState(0);
  const checkout = useCheckoutContext();

  const handleChange = (ev: any, value: number) => {
    if (ev.target.checked) {
      checkout.onChangeSippingStatus();
      setState(value);
    }
  }

  const isLogin = status === "authenticated";

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography sx={{ fontSize: 28, fontWeight: 700, fontFamily: primaryFont.style.fontFamily }}>Contact</Typography>

        {!isLogin && (
          <Typography sx={{ fontSize: 12, color: "#5C6166", fontWeight: 500 }}>
            Already have an account?{" "}
            <Typography
              component={RouterLink}
              href={PATH_SHOP.login}
              sx={{
                fontSize: 12,
                color: "#292F3D",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Log in
            </Typography>
          </Typography>
        )}
      </Stack>

      <Stack gap={2} sx={{ mt: -1.5 }}>
        <RHFTextField name="email" placeholder="Email" size="small" />

        {!isLogin && (
          <FormControlLabel
            control={<Checkbox />}
            label="Sign me up for Wonder Raw emails about new products, restocks and
                events."
            labelPlacement="end"
            componentsProps={{
              typography: {
                sx: { fontSize: 12, color: "#5C6166", fontWeight: 500 },
              },
            }}
          />
        )}
      </Stack>

      <Stack gap={1.5} sx={{ pl: 1.5, mt: 2 }}>
        {items.map((item, i) => (
          <FormControlLabel
            sx={{ mt: -1 }}
            key={i}
            control={<Switch color="primary" size="small" />}
            checked={state === i}
            onChange={(ev) => handleChange(ev, i)}
            label={<StyledSwitchLabel>{item.label}</StyledSwitchLabel>}
          />
        ))}
      </Stack>
    </>
  );
}
