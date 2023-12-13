import { Box, Container } from "@mui/material";
import { MotionViewport } from "@/components/animate";
import Image from "@/components/image";
import { useResponsive } from "@/hooks";
import TutorialButton from "./TutorialButton";

type Props = {};

export default function Section1(props: Props) {
  const upMd = useResponsive("up", "md");

  return (
    <Box
      component="div"
      sx={{
        bgcolor: "#F9F5EE",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        component={MotionViewport}
        sx={{
          textAlign: "center",
          py: { xs: 10, md: 10 },
        }}
      >
        <Box
          component="div"
          sx={{
            borderRadius: "15px",
            overflow: "hidden",
            mt: "32px",
            position: "relative",
          }}
        >
          <Image
            src={
              upMd
                ? "/images/customize/dashboard.jpeg"
                : "/images/customize/mobile.png"
            }
          />

          <Box
            component="div"
            sx={{
              position: "absolute",
              left: "50%",
              bottom: 16,
              transform: "translateX(-50%)",
            }}
          >
            <TutorialButton />
          </Box>
        </Box>
      </Container>

      {/* <Box
        component="div"
        sx={{
          position: "absolute",
          top: 0,
          left: { md: 100, xs: 60 },
          width: 22,
          height: 22,
          bgcolor: "#6B6FB5",
          borderRadius: 50,
          transform: "translate(-50%, -50%)",
        }}
      />

      <Box
        component="div"
        sx={{
          position: "absolute",
          top: 30,
          left: { md: 60, xs: 30 },
          width: 12,
          height: 12,
          bgcolor: "#6AB67A",
          borderRadius: 50,
          transform: "translate(-50%, -50%)",
        }}
      />

      <Box
        component="div"
        sx={{
          position: "absolute",
          top: 0,
          right: { md: 100, xs: 30 },
          width: 22,
          height: 22,
          bgcolor: "#F3BC1A",
          borderRadius: 50,
          transform: "translate(-50%, -50%)",
        }}
      />

      <Box
        component="div"
        sx={{
          position: "absolute",
          top: 40,
          right: { md: 60, xs: 10 },
          width: 12,
          height: 12,
          bgcolor: "#F05A4A",
          borderRadius: 50,
          transform: "translate(-50%, -50%)",
        }}
      /> */}

    </Box>
  );
}
