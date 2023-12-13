import { Checkbox, FormControlLabel, Stack, Typography } from "@mui/material";
import { RouterLink } from "@/routers/components";
import { PATH_SHOP } from "@/routers/path";
import { useSession } from "next-auth/react";
import { RHFTextField } from "@/components/hook-form";
import CheckedIcon from "@/components/icons/checked-icon";
import UnCheckedIcon from "@/components/icons/unchecked-icon";

export default function Contact() {
  const { data: session, status } = useSession();

  const isLogin = status === "authenticated";

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="h3">Contact</Typography>

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

      <Stack gap={3}>
        <RHFTextField name="email" placeholder="Email" size="small" sx={{ width: 49 }} />

        {!isLogin && (
          <FormControlLabel
            control={<Checkbox icon={<UnCheckedIcon />} checkedIcon={<CheckedIcon />} />}
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
    </>
  );
}
