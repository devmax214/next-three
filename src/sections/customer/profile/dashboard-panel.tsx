import { Box, Stack, Typography } from "@mui/material";
import { secondaryFont } from "@/theme/typography";

type Props = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

export default function DashboardPanel({ icon, label, value }: Props) {
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      gap={1}
      sx={{
        bgcolor: "#EDE9DC",
        px: { xs: 1, md: 3 },
        py: 2,
        borderRadius: 5,
        textAlign: { xs: "center", md: "left" },
      }}
    >
      <Box component="div" pt={0.5}>
        {icon}
      </Box>
      <Stack>
        <Typography
          sx={{
            fontSize: { xs: 14, md: 16 },
            fontWeight: 500,
            color: "#292F3D",
            fontFamily: secondaryFont.style.fontFamily,
          }}
        >
          {label}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: 17, md: 28 },
            fontWeight: 700,
            color: "#F05A4A",
          }}
        >
          {value}
        </Typography>
      </Stack>
    </Stack>
  );
}
