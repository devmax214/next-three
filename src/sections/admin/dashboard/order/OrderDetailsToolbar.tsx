import { IconButton, Stack, Typography } from "@mui/material";
import Iconify from "@/components/iconify";
import { RouterLink } from "@/routers/components";
import Label from "@/components/label";
import { fDateTime } from "@/utils/formatTime";

type Props = {
  status: string;
  orderNumber: string;
  backLink: string;
  createdAt: Date;
};

export default function OrderDetailsToolbar({
  status,
  backLink,
  orderNumber,
  createdAt,
}: Props) {
  return (
    <>
      <Stack
        spacing={3}
        direction={{ xs: "column", md: "row" }}
        sx={{
          mb: { xs: 3, md: 5 },
        }}
      >
        <Stack spacing={1} direction="row" alignItems="flex-start">
          <IconButton component={RouterLink} href={backLink}>
            <Iconify icon="eva:arrow-ios-back-fill" />
          </IconButton>

          <Stack spacing={0.5}>
            <Stack spacing={1} direction="row" alignItems="center">
              <Typography variant="h4"> Order {orderNumber} </Typography>
              <Label
                variant="soft"
                color={
                  (status === "completed" && "success") ||
                  (status === "pending" && "warning") ||
                  (status === "cancelled" && "error") ||
                  "default"
                }
              >
                {status}
              </Label>
            </Stack>

            <Typography variant="body2" sx={{ color: "text.disabled" }}>
              {fDateTime(createdAt)}
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
