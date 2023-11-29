import { Button, Card, Divider, Stack, Typography } from "@mui/material";
import { secondaryFont } from "@/theme/typography";
import { styled } from "@mui/material/styles";

const StyledTypography1 = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 600,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
}));

const StyledTypography2 = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 500,
  color: "#5C6166",
  fontFamily: secondaryFont.style.fontFamily,
}));

const StyledTypography3 = styled(Typography)(({ theme }) => ({
  fontSize: 12,
  fontWeight: 500,
  color: "#ACB1B8",
  fontFamily: secondaryFont.style.fontFamily,
}));

const StyledTypography4 = styled(Typography)(({ theme }) => ({
  fontSize: 14,
  fontWeight: 600,
  color: "#292F3D",
  fontFamily: secondaryFont.style.fontFamily,
}));

type Props = {};

export default function OrderSummary(props: Props) {
  return (
    <>
      <Card sx={{ bgcolor: "#ffffff", p: 4, mb: 4 }}>
        <StyledTypography1>Summary</StyledTypography1>

        <Divider />

        <Stack>
          <Stack direction="row" justifyContent="space-between" py={1}>
            <StyledTypography2>Subtotal</StyledTypography2>

            <StyledTypography4>204,50 €</StyledTypography4>
          </Stack>
          <Stack direction="row" justifyContent="space-between" py={1}>
            <StyledTypography2>Shipping estimate</StyledTypography2>

            <StyledTypography3>Calculated at next step</StyledTypography3>
          </Stack>
        </Stack>

        <Divider />

        <Stack>
          <Stack direction="row" justifyContent="space-between" py={1}>
            <StyledTypography2>Total</StyledTypography2>

            <StyledTypography4>204,50 €</StyledTypography4>
          </Stack>
        </Stack>

        <StyledTypography3 sx={{ textAlign: "right" }}>
          All prices excl. VAT and shipping costs
        </StyledTypography3>
      </Card>

      <Button variant="contained" fullWidth>
        NEXT: INVOICE & SHIPPING
      </Button>

      <Button
        fullWidth
        sx={{ fontSize: 16, color: "#F05A4A" }}
        startIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M1.6 11.4V15.5H0V0H15.6C15.8 0 16 0.2 16 0.4C16 0.5 16 0.5 15.9 0.6L13 5.7L15.9 10.8C16 11 15.9 11.2 15.7 11.4C15.6 11.4 15.6 11.5 15.5 11.5L1.6 11.4ZM1.6 1.6V9.7H13.5L11.2 5.6L13.5 1.5H1.6V1.6Z"
              fill="#F05A4A"
            />
          </svg>
        }
      >
        PENDING APPROVAL
      </Button>
    </>
  );
}
