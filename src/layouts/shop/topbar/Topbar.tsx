import { Box, Chip, Container, Stack, Typography } from "@mui/material";

type Props = {};

export default function Topbar(props: Props) {
  return (
    <Box sx={{ py: 1 }}>
      <Container
        sx={{
          textAlign: { xs: "center", md: "unset" },
        }}
      >
        <Stack>
          <Stack direction="row" sx={{ alignItems: "center" }} gap={1}>
            <Chip label="HOT" />
            <Typography variant="subtitle2">Free Express Shipping</Typography>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}
