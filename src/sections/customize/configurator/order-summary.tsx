import { Button, Card, Divider, Stack, Typography } from "@mui/material";
import { secondaryFont } from "@/theme/typography";
import { styled } from "@mui/material/styles";
import PendingIcon from "../../../components/icons/icon-pending";
import * as styles from './styles';

const StyledTypography1 = styled(Typography)(({ theme }) => ({
  fontSize: 16,
  fontWeight: 600,
  color: "#292F3D",
  marginBottom: 8,
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
      <Card sx={{ ...styles.card, mb: 5 }}>
        <StyledTypography1>Summary</StyledTypography1>

        <Divider />

        <Stack>
          <Stack direction="row" justifyContent="space-between" py={1}>
            <StyledTypography2>Subtotal</StyledTypography2>

            <StyledTypography4>204,50 &euro;</StyledTypography4>
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

            <StyledTypography4>204,50 &euro;</StyledTypography4>
          </Stack>
        </Stack>

        <StyledTypography3 sx={{ textAlign: "right" }}>
          All prices excl. VAT and shipping costs
        </StyledTypography3>
      </Card>

      {/* <Button variant="contained" fullWidth sx={{ fontSize: 14, fontWeight: 500, py: 1 }}>
        NEXT: INVOICE & SHIPPING
      </Button> */}

      <Button
        fullWidth
        sx={{ fontSize: 16, color: "#F05A4A", fontWeight: 500 }}
        startIcon={
          <PendingIcon
            color="#F05A4A"
            sx={{ width: 16, height: 16 }}
          />
        }
      >
        PENDING APPROVAL
      </Button>
    </>
  );
}
