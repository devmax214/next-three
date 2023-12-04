import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { _reasons } from "@/@mockup/_refund";
import Iconify from "@/components/iconify";

type Props = {};

export default function RefundReasonList(props: Props) {
  const [reasons, setReasons] = useState(_reasons);

  const handleDeleteReason = (id: number) => () => {
    setReasons((state) => state.filter((item) => item.id !== id));
  };

  return (
    <>
      <Stack gap={2} sx={{ p: 3 }}>
        {reasons.map((reason) => (
          <Stack key={reason.id} direction="row" alignItems="center" gap={2}>
            <Box
              sx={{
                flexGrow: 1,
                fontWeight: 600,
                border: "1px solid",
                borderRadius: "8px",
                padding: "10px 16px",
                borderColor: "grey.300",
              }}
            >
              <Typography variant="body2">{reason.title}</Typography>
            </Box>

            <IconButton
              onClick={handleDeleteReason(reason.id)}
              sx={{
                backgroundColor: "grey.200",
              }}
            >
              <Iconify icon="material-symbols:delete-outline" />
            </IconButton>
          </Stack>
        ))}

        <Stack alignItems="end">
          <Button color="info" variant="outlined">
            Add New
          </Button>
        </Stack>
      </Stack>
    </>
  );
}
