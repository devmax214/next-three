import { Box, Container, Typography } from "@mui/material";
import { MotionViewport } from "@/components/animate";
import RegisterForm from "../register-form";
import { primaryFont, secondaryFont } from "@/theme/typography";

export default function RegisterView() {
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
            py: { xs: 10, md: 10 },
          }}
        >
          <Typography variant="h3" sx={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#292F3D",
            fontFamily: primaryFont.style.fontFamily,
            fontStyle: "normal",
            lineHeight: "normal",
            mb: 4
          }}>
            Sign Up
          </Typography>

          <Box component="div" sx={{ maxWidth: 500, mx: "auto" }}>
            <RegisterForm />
          </Box>
        </Container>
      </Box>
    </>
  );
}
