import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { MotionViewport } from "@/components/animate";
import { PATH_SHOP } from "@/routers/path";
import LoginForm from "../login-form";
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

export default function LoginView(props: Props) {
  return (
    <>
      <Box
        component="div"
        sx={{
          bgcolor: "#F9F5EE",
        }}
      >
        <Container
          component={MotionViewport}
          sx={{
            textAlign: "center",
            py: { xs: 10, md: 20 },
          }}
        >
          <Grid container spacing={30}>
            <Grid item xs={12} md={6}>
              <StyledTypography sx={{ mb: 4 }}>
                Login
              </StyledTypography>

              <LoginForm />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTypography sx={{ mb: 4 }}>
                Sign Up
              </StyledTypography>

              <Button
                size="large"
                variant="contained"
                sx={{
                  minWidth: "239px",
                  bgcolor: "#292F3D",
                  color: "#fff",
                  "&:hover": {
                    bgcolor: "#550248",
                  },
                }}
                href={PATH_SHOP.register}
              >
                <Typography
                  sx={{
                    fontSize: 16,
                    fontWeight: 500,
                    color: "#ffffff",
                    fontFamily: secondaryFont.style.fontFamily,
                  }}
                >
                  SIGN UP NOW!
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}
