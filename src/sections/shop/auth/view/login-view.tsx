import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { styled } from '@mui/material/styles';
import { MotionViewport } from "@/components/animate";
import { PATH_SHOP } from "@/routers/path";
import LoginForm from "../login-form";
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

export default function LoginView(props: Props) {
  const router = useRouter();
  const state = router.query.state;
  const msg = router.query.msg;

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
          }}
        >
          {state == 1 &&
            <Grid container spacing={10}>
              <Grid item md={12}>
                <Typography component="span" sx={{ fontSize: 22, fontWeight: 700 }}>
                  {msg}
                </Typography>
              </Grid>
            </Grid>
          }
          <Grid container spacing={10}>
            <Grid item xs={12} md={6}>
              <StyledTypography sx={{ mb: 4 }}>
                <h2>Login</h2>
              </StyledTypography>

              <LoginForm />
            </Grid>
            <Grid item xs={12} md={6}>
              <StyledTypography sx={{ mb: 4 }}>
                <h2>Sign Up</h2>
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
