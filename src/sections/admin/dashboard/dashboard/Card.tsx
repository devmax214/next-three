import { Card, CardProps, Stack, Typography } from "@mui/material";
import { secondaryFont } from "@/theme/typography";

interface Props extends CardProps {}

export default function DashboardCard({ sx, ...other }: Props) {
  return (
    <Card
      {...other}
      sx={{
        ...sx,
        p: 2,
      }}
    >
      <Typography variant="h6">title</Typography>
      <Typography
        variant="h3"
        sx={{ fontFamily: secondaryFont.style.fontFamily }}
      >
        $12,460.25
      </Typography>

      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="body1"
          sx={{ fontFamily: secondaryFont.style.fontFamily }}
        >
          11350
        </Typography>

        <Stack>
          <Typography
            variant="body2"
            sx={{ fontFamily: secondaryFont.style.fontFamily }}
          >
            25.25%
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}
