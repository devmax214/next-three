import { Box, Stack } from "@mui/material";
import ChangePasswordForm from "../change-password-form";

export default function ChangePasswordView() {
  return (
    <>
      <Stack alignItems="center">
        <Box component="div" sx={{ width: { xs: 1, md: 400 } }}>
          <ChangePasswordForm />
        </Box>
      </Stack>
    </>
  );
}
