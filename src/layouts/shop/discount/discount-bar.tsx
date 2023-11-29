import { Box, ButtonBase, Stack, Typography } from "@mui/material";
import DiscountIcon from "@/components/icons/icon-discount";
import { useBoolean } from "@/hooks";
import { secondaryFont } from "@/theme/typography";
import NewsletterModal from "./newsletter-modal";

export default function DiscountBar() {
  const newsletter = useBoolean();

  return (
    <>
      <Box
        component="div"
        sx={{ bgcolor: "#292F3D" }}
        p={0.5}
        textAlign="center"
      >
        <ButtonBase onClick={newsletter.onTrue}>
          <Stack
            direction="row"
            gap={3}
            alignItems="center"
            justifyContent="center"
          >
            <DiscountIcon sx={{ width: 20, height: 20 }} />
            <Typography
              sx={{
                fontFamily: secondaryFont.style.fontFamily,
                color: "#eee",
                fontSize: 12,
                fontWeight: 500,
              }}
            >
              Get a 10% discount
            </Typography>
          </Stack>
        </ButtonBase>
      </Box>

      <NewsletterModal open={newsletter.value} onClose={newsletter.onFalse} />
    </>
  );
}
