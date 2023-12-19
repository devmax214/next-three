import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { MotionViewport } from "@/components/animate";
import { PATH_SHOP } from "@/routers/path";
import ForgotForm from "../forgot-form";
import { useRouter } from "next/router";
import { primaryFont, secondaryFont } from "@/theme/typography";

const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: "28px",
  fontWeight: 700,
  color: "#292F3D",
  fontFamily: primaryFont.style.fontFamily,
  fontStyle: "normal",
  lineHeight: "normal",
  [theme.breakpoints.down("md")]: { fontSize: "13px" },
}));

type Props = {};

export default function ForgotPasswordView(props: Props) {
  const router = useRouter();
  const state = router.query.state;
  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: "#F9F5EE",
          height: "100%"
        }}
      >
        <Container
          component={MotionViewport}
          sx={{
            textAlign: "center",
            py: { xs: 10, md: 20 },
            mb: 15
          }}
        >
          <Grid container spacing={10}>
            <Grid item xs={12} md={12}>
              <StyledTypography sx={{ mb: 4 }}>
                <h2>Forgot your password?</h2>
              </StyledTypography>

              <ForgotForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
