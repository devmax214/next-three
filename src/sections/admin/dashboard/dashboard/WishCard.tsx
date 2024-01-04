import NextImage from "next/image";
import { Box, Card, Stack, Typography } from "@mui/material";
import { secondaryFont } from "@/theme/typography";

type Props = {};

export default function WishCard(props: Props) {
  return (
    <Card
      sx={{
        p: 3,
        height: "100%",
        display: "flex",
        position: "relative",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Stack gap={3}>
        <Typography variant="h5">Good Morning, Alexander Feduleev!</Typography>

        <Typography
          variant="body2"
          sx={{ fontFamily: secondaryFont.style.fontFamily }}
        >
          Here’s what happening with your store today!
        </Typography>

        <Box>
          <Typography
            variant="h3"
            sx={{ fontFamily: secondaryFont.style.fontFamily }}
          >
            15,350.25
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: secondaryFont.style.fontFamily }}
          >
            Today’s Visit
          </Typography>
        </Box>

        <Box>
          <Typography
            variant="h3"
            sx={{ fontFamily: secondaryFont.style.fontFamily }}
          >
            $10,360.66
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontFamily: secondaryFont.style.fontFamily }}
          >
            Today’s total sales
          </Typography>
        </Box>

        <Box
          sx={{
            right: 24,
            bottom: 0,
            position: "absolute",
            display: {
              xs: "none",
              sm: "block",
            },
          }}
        >
          <NextImage
            src="/images/dashboard/welcome.svg"
            width={295}
            height={271}
            alt="Welcome"
          />
        </Box>
      </Stack>
    </Card>
  );
}
